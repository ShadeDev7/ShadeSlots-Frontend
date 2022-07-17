import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profile: {
            type: Object,
            required: true,
        },
        createdAt: Number,
        updatedAt: Number,
    },
    { timestamps: { currentTime: () => Date.now() } }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
