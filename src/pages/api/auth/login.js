import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as db from "../../../services/db";
import userSchema from "../../../models/user";
import { statusCodes, trimAll } from "../../../utils";

export default async (req, res) => {
    if (req.method !== "POST") return res.status(405).json(statusCodes[405]);

    const email = trimAll(req.body.email)?.toLowerCase();
    const password = trimAll(req.body.password);

    if (!email || !password) return res.status(400).json(statusCodes[400]);

    try {
        await db.connect();

        const data = await userSchema.findOne({ email }).exec();

        if (!data) return res.status(403).json(statusCodes[403]);

        const { username, password: hashedPassword, profile, createdAt } = data;
        const validPassword = await bcrypt.compare(password, hashedPassword);

        if (!validPassword) return res.status(403).json(statusCodes[403]);

        const user = { username, email, profile, createdAt };

        const token = jwt.sign({ user }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_LIFETIME,
        });

        return res.status(201).json({ data: { token, user }, status: 200 });
    } catch (e) {
        console.log(e);

        return res.status(500).json(statusCodes[500]);
    }
};
