import Image from "next/image";

const Spinner = ({ size }) => {
    return (
        <div className="absolute">
            <Image src="/imgs/spinner.svg" alt="Loading Spinner" width={size} height={size} />
        </div>
    );
};

export default Spinner;
