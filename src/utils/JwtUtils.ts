import dotenv from "dotenv";
import jwt from 'jsonwebtoken';

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: 'production.env' });
} else {
    dotenv.config({ path: 'local.env' });
}

const SECRET = process.env.JWT_SECRET || 'your_secret_key';

export const generateToken = (userId: number, firstname: string): string => {
    return jwt.sign({ userId, firstname }, SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, SECRET);
};