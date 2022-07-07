import { Formik, Form } from "formik";

import AnimatedInput from "./AnimatedInput";

import schemas from "../../../data/schemas";

const AuthForm = ({ variant }) => {
    const handleSubmit = values => {
        console.log(`Submitting: ${JSON.stringify(values)}`);
    };

    return (
        <div className="w-full">
            <Formik
                initialValues={schemas["signin"].initialValues}
                onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values);
                    resetForm();
                }}
                validationSchema={schemas[variant].schema}
            >
                {({ errors, touched }) => (
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
                            <div key={field} className="w-full flex flex-col gap-1">
                                {errors[field] && touched[field] && (
                                    <p className="text-sm text-gray-500 text-center">
                                        {errors[field]}
                                    </p>
                                )}

                                <AnimatedInput
                                    field={field}
                                    type={type}
                                    placeholder={placeholder}
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
