import * as db from "../../../../services/db";
import userSchema from "../../../../models/user";
import { statusCodes, trimAll } from "../../../../utils";

export default async function (req, res) {
    if (req.method !== "GET") return res.status(405).json(statusCodes[405]);

    const username = trimAll(req.query.username);

    if (!username) return res.status(400).json(statusCodes[400]);

    try {
        await db.connect();

        const data = await userSchema.findOne({ username }).exec();

        if (!data) return res.status(404).json(statusCodes[404]);

        const { email, profile, createdAt } = data;

        return res.status(200).json({ data: { username, email, profile, createdAt }, status: 200 });
    } catch (e) {
        console.log(e);

        return res.status(500).json(statusCodes[500]);
    }
}
