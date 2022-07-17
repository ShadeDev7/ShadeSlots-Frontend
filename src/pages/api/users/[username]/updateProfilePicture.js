import jwt from "jsonwebtoken";
import crypto from "crypto";

import * as s3 from "../../../../services/s3";
import * as db from "../../../../services/db";
import userSchema from "../../../../models/user";
import { trimAll, statusCodes } from "../../../../utils";

export default async function (req, res) {
    if (req.method !== "PATCH") return res.status(405).json(statusCodes[405]);

    const { picture } = req.body;
    const username = trimAll(req.query.username);

    if (!picture || !username) return res.status(400).json(statusCodes[400]);

    try {
        const [data, image] = picture.split(";base64,");
        const imageType = data.split(":")[1];

        const result = await s3.uploadImage(
            crypto.randomUUID(),
            Buffer.from(image, "base64"),
            imageType
        );

        await db.connect();

        const { email, profile, createdAt } = await userSchema.findOneAndUpdate(
            { username },
            { $set: { "profile.picture": result.Location } }
        );

        if (!profile.picture.includes("placeholder")) await s3.deleteImage(profile.picture);

        const user = { username, email, profile: { ...profile, picture: result.Location } };

        const token = jwt.sign({ user }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_LIFETIME,
        });

        return res.status(200).json({ data: { token, user: { ...user, createdAt } }, status: 200 });
    } catch (e) {
        console.log(e);

        return res.status(500).json(statusCodes[500]);
    }
}
