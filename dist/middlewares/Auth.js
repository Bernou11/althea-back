"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
Object.keys(process.env).forEach((key) => {
    if (key.startsWith('DATABASE_')) { // You can specify the variables you want to clear
        delete process.env[key];
    }
});
if (process.env.NODE_ENV === 'production') {
    dotenv_1.default.config({ path: 'production.env' });
}
else {
    dotenv_1.default.config({ path: 'local.env' });
}
const secret = process.env.JWT_SECRET || "supersecretkey";
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        res.status(401).json({ message: 'Access Denied: No token provided' });
        return;
    }
    const token = authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'
    jsonwebtoken_1.default.verify(token, secret, (err, user) => {
        if (err) {
            res.status(403).json({ message: 'Invalid Token' });
            return;
        }
        req.user = user; // Attach the user object to the request
        next(); // Call next() without returning a response
    });
};
exports.default = authenticateToken;
