import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";

import AuthContext from "../../../context/AuthContext/AuthContext";
import AnimatedInput from "./AnimatedInput";
import schemas from "../../../data/schemas";

const AuthForm = ({ variant, loading, setLoading }) => {
    const { handleSession } = useContext(AuthContext);
    const router = useRouter();

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
        handleSession(response.data, router.pathname !== "/" && router.push);
    };

    return (
        <div className="w-full flex flex-col gap-6">
            {error && (
                <p className="py-1 bg-red-800 rounded-sm font-bold text-sm text-center">{error}</p>
            )}

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
                                    ${loading ? "pointer-events-none blur-content" : ""}
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
                                transition-colors
                                duration-300
                                ${
                                    loading
                                        ? "hover:cursor-not-allowed"
                                        : "hover:bg-slate-900 hover:cursor-pointer"
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
