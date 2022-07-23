import { useContext, useState } from "react";
import { Formik, Form } from "formik";

import AuthContext from "../../../context/AuthContext/AuthContext";
import AnimatedInput from "./AnimatedInput";
import ErrorMessage from "./ErrorMessage";
import schemas from "../../../data/schemas";

const AuthForm = ({ variant, loading, setLoading }) => {
    const { handleSession } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleSubmit = async (values, resetForm) => {
        if (loading) return;

        setLoading(true);

        const request = await fetch(`/api/auth/${variant}`, {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(values),
        });
        const response = await request.json();

        if (response.status !== (variant === "login" ? 200 : 201)) {
            setLoading(false);
            setError(response.error);
            resetForm();

            return setTimeout(() => {
                setError("");
            }, 5000);
        }

        setLoading(false);
        handleSession(response.data, true);
    };

    return (
        <div className="w-full flex flex-col gap-6">
            {error && <ErrorMessage error={error} />}

            <Formik
                initialValues={schemas[variant].initialValues}
                enableReinitialize={true}
                onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
                validationSchema={schemas[variant].schema}
            >
                {({ values, errors, touched }) => (
                    <Form className="flex flex-col items-center jusfity-center gap-6">
                        {schemas[variant].fields.map(({ field, type, placeholder }) => (
                            <div
                                key={field}
                                className={`
                                    w-full
                                    flex
                                    flex-col
                                    gap-2
                                    ${
                                        loading
                                            ? "pointer-events-none blur-[1.5px] transition-all duration-300"
                                            : ""
                                    }
                                `}
                            >
                                {errors[field] && touched[field] && (
                                    <p className="text-sm text-center text-gray-500">
                                        {errors[field]}
                                    </p>
                                )}

                                <AnimatedInput
                                    disabled={loading}
                                    field={field}
                                    type={type}
                                    value={values[field]}
                                    placeholder={placeholder}
                                />
                            </div>
                        ))}

                        <input
                            type="submit"
                            value={variant === "login" ? "Log In" : "Sign In"}
                            className={`
                                py-2
                                w-full
                                bg-gray-900
                                rounded
                                font-bold
                                ${
                                    loading
                                        ? "hover:cursor-not-allowed"
                                        : "hover:cursor-pointer hover:bg-slate-900 transition-colors duration-300"
                                }
                            `}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AuthForm;
