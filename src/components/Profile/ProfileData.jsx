import { millisToDate } from "../../utils";

const ProfileData = ({ displayName, createdAt }) => {
    return (
        <div className="flex flex-col items-center gap-1">
            <h2 className="font-bold text-4xl">{displayName}</h2>

            <p className="font-light text-sm text-gray-200">Joined {millisToDate(createdAt)}</p>
        </div>
    );
};

export default ProfileData;
