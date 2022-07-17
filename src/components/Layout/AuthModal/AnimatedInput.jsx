import { Field } from "formik";

const AnimatedInput = ({ disabled, field, type, value, placeholder }) => {
    return (
        <div className="inputBox relative">
            <Field
                autoComplete="off"
                required="required"
                disabled={disabled}
                name={field}
                type={type}
                value={value || ""}
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
                    transition-all
                "
            >
                {placeholder}
            </span>
        </div>
    );
};

export default AnimatedInput;
