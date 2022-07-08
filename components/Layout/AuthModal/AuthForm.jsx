import { useContext, useState } from "react";
import { Formik, Form } from "formik";

import AuthContext from "../../../context/AuthContext/AuthContext";

import AnimatedInput from "./AnimatedInput";

import schemas from "../../../data/schemas";

const AuthForm = ({ variant }) => {
    const { handleAuthToken } = useContext(AuthContext);

    const [error, setError] = useState("");

    const handleSubmit = async (values, resetForm) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URI}/auth/${variant}`;

            const request = await fetch(url, {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify(values),
            });

            const response = await request.json();

            if (response.status != (variant === "login" ? 200 : 201)) {
                setError(response.error);
                resetForm();

                return setTimeout(() => {
                    setError("");
                }, 5000);
            }

            handleAuthToken(response.token);
        } catch (e) {
            console.log(e);

            setError("There was an unexpected error!");
            resetForm();

            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            {error && (
                <p className="py-1 bg-red-800 rounded-sm text-sm font-bold text-center">{error}</p>
            )}

            <Formik
                initialValues={schemas[variant].initialValues}
                enableReinitialize={true}
                onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
                validationSchema={schemas[variant].schema}
            >
                {({ values, errors, touched }) => (
                    <Form
                        className="
                        flex
                        flex-col
                        items-center
                        jusfity-center
                        gap-6
                    "
                    >
                        {schemas[variant].fields.map(({ field, type, placeholder }) => (
                            <div key={field} className="w-full flex flex-col gap-2">
                                {errors[field] && touched[field] && (
                                    <p className="text-sm text-gray-500 text-center">
                                        {errors[field]}
                                    </p>
                                )}

                                <AnimatedInput
                                    field={field}
                                    type={type}
                                    placeholder={placeholder}
                                    value={values[field]}
                                />
                            </div>
                        ))}

                        <button
                            type="submit"
                            className="
                            py-2
                            w-full
                            bg-gray-900
                            hover:bg-slate-900
                            rounded
                            font-bold
                            transition-colors
                            duration-300
                        "
                        >
                            {variant === "login" ? "Log In" : "Sign In"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AuthForm;