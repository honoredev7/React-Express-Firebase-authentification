import admin from "../config/firebase-config.js";

class Middleware {
    async decodeToken(req, res, next) {
        const token = req.header.authorization.split(" ")[1];

        try {
            const decodedValue = await admin.auth().verifyIdToken(token);

            if(decodedValue) {
                req.user = decodedValue;
                return next();
            }

            return res.status(403).json({ message : "Unauthorized" });
        } catch (error) {
            return res.status(500).json({ message : "Internal Server Error"});
        }
    }
}

export default new Middleware();
