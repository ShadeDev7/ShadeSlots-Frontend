import Logo from "./Logo";
import Spinner from "../Spinner";

const LoadingModal = () => {
    return (
        <div className="absolute z-[2] w-full min-h-screen bg-slate-800 flex flex-col items-center justify-center gap-12">
            <Logo />

            <div className="flex items-center justify-center">
                <Spinner size="48px" />
            </div>
        </div>
    );
};

export default LoadingModal;
