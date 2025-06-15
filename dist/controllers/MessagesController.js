"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMessageById = exports.fetchAllMessages = exports.createMessage = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const PrismaConfig_1 = __importDefault(require("../config/PrismaConfig"));
const ConversionsUtils_1 = __importDefault(require("../utils/ConversionsUtils"));
Object.keys(process.env).forEach((key) => {
    if (key.startsWith('DATABASE_')) {
        delete process.env[key];
    }
});
if (process.env.NODE_ENV === 'production') {
    dotenv_1.default.config({ path: 'production.env' });
}
else {
    dotenv_1.default.config({ path: 'local.env' });
}
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nom, email, phone, message } = req.body;
    try {
        const newMessage = yield PrismaConfig_1.default.message.create({
            data: { nom, email, phone, message },
        });
        const safeMessage = (0, ConversionsUtils_1.default)(newMessage);
        res.status(201).json(safeMessage);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.createMessage = createMessage;
const fetchAllMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield PrismaConfig_1.default.message.findMany({
            select: {
                id: true,
                nom: true,
                email: true,
                phone: true,
                created: true,
                treated: true,
            },
        });
        const safeMessages = (0, ConversionsUtils_1.default)(messages);
        res.json(safeMessages);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                error: "Error fetching messages",
                details: error.message,
            });
        }
        else {
            console.error("Unknown error fetching messages:", error);
            res.status(500).json({
                error: "Error fetching messages",
                details: "Unknown error occurred",
            });
        }
    }
});
exports.fetchAllMessages = fetchAllMessages;
const fetchMessageById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const user = yield PrismaConfig_1.default.message.findUnique({
            where: { id },
            select: {
                nom: true,
                email: true,
                phone: true,
                message: true,
            }
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: "Error fetching users", details: error.toString() });
        }
        else {
            console.error("Unknown error fetching users:", error);
            res.status(500).json({ error: "Error fetching users", details: "Unknown error occurred" });
        }
    }
});
exports.fetchMessageById = fetchMessageById;
