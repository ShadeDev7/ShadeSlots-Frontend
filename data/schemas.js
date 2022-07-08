import * as Yup from "yup";

import { alphanumeric, password } from "./regularExpressions";

const login = {
    initialValues: {
        email: "",
        password: "",
    },
    fields: [
        {
            field: "email",
            type: "text",
            placeholder: "Email",
        },
        {
            field: "password",
            type: "password",
            placeholder: "Password",
        },
    ],
    schema: Yup.object().shape({
        email: Yup.string()
            .email("Invalid email format.")
            .required("A value for email is required!"),
        password: Yup.string()
<<<<<<< HEAD
            .min(8, "Passwords contain at least 8 characters!")
            .matches(
                password,
                "Passwords contain at least 1 lowercase, 1 capital, 1 number and 1 symbol."
            )
=======
            .min(8, "Password must contain at least 8 characters!")
>>>>>>> 4e95d4c6998c70e93600ee601832d8ccf80bef8b
            .required("A value for password is required!"),
    }),
};

const signin = {
    initialValues: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    },
    fields: [
        {
            field: "username",
            type: "text",
            placeholder: "Username",
        },
        {
            field: "email",
            type: "text",
            placeholder: "Email",
        },
        {
            field: "password",
            type: "password",
            placeholder: "Password",
        },
        {
            field: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
        },
    ],
    schema: Yup.object().shape({
        username: Yup.string()
            .min(3, "Username must contain at least 3 characters!")
            .max(16, "Username too large!")
            .matches(alphanumeric, "Username must be alphanumeric!")
            .required("A value for username is required!"),
        email: Yup.string()
            .email("Invalid email format.")
            .required("A value for email is required!"),
        password: Yup.string()
            .min(8, "Password must contain at least 8 characters!")
            .matches(
                password,
<<<<<<< HEAD
                "Password must contain at least 1 lowercase, 1 capital, 1 number and 1 symbol."
=======
                "Password must contain at least 1 lowercase letter, 1 capital letter, 1 number and 1 symbol."
>>>>>>> 4e95d4c6998c70e93600ee601832d8ccf80bef8b
            )
            .required("A value for password is required!"),
        confirmPassword: Yup.string().test(
            "passwords-match",
            "Passwords must match!",
            function (value) {
                return this.parent.password === value;
            }
        ),
    }),
};

export default { login, signin };
