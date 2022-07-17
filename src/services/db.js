import mongoose from "mongoose";

async function connect() {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    });
}

export { connect };
