import { Field } from "formik";

<<<<<<< HEAD
const AnimatedInput = ({ field, type, placeholder, value }) => {
=======
const AnimatedInput = ({ field, type, placeholder }) => {
>>>>>>> 4e95d4c6998c70e93600ee601832d8ccf80bef8b
    return (
        <div className="inputBox relative">
            <Field
                autoComplete="off"
                required="required"
<<<<<<< HEAD
                name={field}
                type={type}
                value={value || ""}
=======
                id={field}
                name={field}
                type={type}
>>>>>>> 4e95d4c6998c70e93600ee601832d8ccf80bef8b
                className="
                    py-2
                    px-3
                    w-full
                    bg-gray-800
                    rounded
                    border-gray-600
                    border-2
                    outline-none
                    text-gray-400
                "
            />
            <span
                className="
                    mt-[10px]
                    ml-[14px]
                    absolute
                    left-0
                    font-medium
                    text-gray-600
                    pointer-events-none
                    select-none
                    transition-all
                "
            >
                {placeholder}
            </span>
        </div>
    );
};

export default AnimatedInput;
