import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';


const authUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    try {
        const decoded = jwt.verify(token, 'secret');

        if (typeof decoded === 'string') {
            throw new Error('Invalid token: Decoded payload is not an object');
        }

        req.userEmail = decoded.email;

        next();

    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};
export default authUserMiddleware;