import jwt from "jsonwebtoken";

import * as db from "../../../services/db";
import userSchema from "../../../models/user";
import { statusCodes, trimAll } from "../../../utils";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json(statusCodes[405]);

    const token = trimAll(req.body.token);

    if (!token) return res.status(400).json(statusCodes[400]);

    try {
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!verifiedToken?.user?.email) return res.status(403).json(statusCodes[403]);

        await db.connect();

        const data = await userSchema.findOne({ email: verifiedToken.user.email }).exec();

        if (!data) return res.status(403).json(statusCodes[403]);

        const user = {
            username: data.username,
            email: data.email,
            profile: data.profile,
            createdAt: data.createdAt,
        };

        const newToken = jwt.sign({ user }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_LIFETIME,
        });

        return res.status(200).json({ data: { token: newToken, user }, status: 200 });
    } catch (e) {
        if (["TokenExpiredError", "JsonWebTokenError", "NotBeforeError"].includes(e.name)) {
            return res.status(410).json(statusCodes[410]);
        }
        console.log(e);

        return res.status(500).json(statusCodes[500]);
    }
}
