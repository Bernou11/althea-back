"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
if (process.env.NODE_ENV === 'production') {
    dotenv_1.default.config({ path: 'production.env' });
}
else {
    dotenv_1.default.config({ path: 'local.env' });
}
const SECRET = process.env.JWT_SECRET || 'your_secret_key';
const generateToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, SECRET, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, SECRET);
};
exports.verifyToken = verifyToken;
