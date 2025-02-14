import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

Object.keys(process.env).forEach((key) => {
    if (key.startsWith('DATABASE_')) { // You can specify the variables you want to clear
        delete process.env[key];
    }
});

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: 'production.env' });
} else {
    dotenv.config({ path: 'local.env' });
}

const secret = process.env.JWT_SECRET || "supersecretkey";

const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        res.status(401).json({ message: 'Access Denied: No token provided' });
        return;
    }

    const token = authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'

    jwt.verify(token, secret, (err, user) => {
        if (err) {
            res.status(403).json({ message: 'Invalid Token' });
            return;
        }

        (req as any).user = user; // Attach the user object to the request
        next(); // Call next() without returning a response
    });
};


export default authenticateToken;