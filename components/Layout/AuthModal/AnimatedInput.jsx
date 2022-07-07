import { Field } from "formik";

const AnimatedInput = ({ field, type, placeholder }) => {
    return (
        <div className="inputBox relative">
            <Field
                autoComplete="off"
                required="required"
                id={field}
                name={field}
                type={type}
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
