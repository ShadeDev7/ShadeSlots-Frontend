import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as db from "../../../services/db";
import userSchema from "../../../models/user";
import { statusCodes, trimAll, firstCharToUppercase } from "../../../utils";

export default async function (req, res) {
    if (req.method !== "POST") return res.status(405).json(statusCodes[405]);

    const username = trimAll(req.body.username);
    const email = trimAll(req.body.email)?.toLowerCase();
    const password = trimAll(req.body.password);

    if (!username || !email || !password) return res.status(400).json(statusCodes[400]);

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        await db.connect();

        const data = await new userSchema({
            username: username.toLowerCase(),
            email,
            password: hashedPassword,
            profile: { displayName: username, picture: "/imgs/placeholder_user.png" },
        }).save();

        const user = {
            username: username.toLowerCase(),
            email,
            profile: data.profile,
            createdAt: data.createdAt,
        };

        const token = jwt.sign({ user }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_LIFETIME,
        });

        return res.status(201).json({ data: { token, user }, status: 201 });
    } catch (e) {
        const fields = e.keyValue;

        if (!fields) {
            console.log(e);

            return res.status(500).json(statusCodes[500]);
        }

        const fieldName = firstCharToUppercase(Object.keys(fields)[0]);

        return res.status(409).json({
            error: `${fieldName} already taken!`,
            status: 409,
        });
    }
}
