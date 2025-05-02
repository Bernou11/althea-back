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
exports.reactivateUser = exports.softDeleteUser = exports.updateUser = exports.login = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const PrismaConfig_1 = __importDefault(require("../config/PrismaConfig"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const ConversionsUtils_1 = __importDefault(require("../utils/ConversionsUtils"));
const dotenv_1 = __importDefault(require("dotenv"));
const JwtUtils_1 = require("../utils/JwtUtils");
const ProfilesController_1 = require("./ProfilesController");
Object.keys(process.env).forEach((key) => {
    if (key.startsWith('DATABASE_')) {
        delete process.env[key];
    }
});
if (process.env.NODE_ENV === 'production.env') {
    dotenv_1.default.config({ path: 'production.env' });
}
else {
    dotenv_1.default.config({ path: 'local.env' });
}
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield PrismaConfig_1.default.user.findMany({
            where: {
                supprime: 0,
            },
            select: {
                username: true,
                firstname: true,
                lastname: true,
                email: true,
                age: true,
            },
        });
        res.json(users);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                error: "Error fetching users",
                details: error.message,
            });
        }
        else {
            console.error("Unknown error fetching users:", error);
            res.status(500).json({
                error: "Error fetching users",
                details: "Unknown error occurred",
            });
        }
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const user = yield PrismaConfig_1.default.user.findUnique({
            where: { id, supprime: 0 },
            select: {
                username: true,
                firstname: true,
                lastname: true,
                email: true,
                age: true
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
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, email, password, age, username, role, bio, pseudo, picture } = req.body;
    try {
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = yield PrismaConfig_1.default.user.create({
            data: { firstname, lastname, email, password: hashedPassword, age, username, role },
        });
        const safeUser = (0, ConversionsUtils_1.default)(newUser);
        req.body.user_id = newUser.id;
        yield (0, ProfilesController_1.createUserProfile)(newUser.id, bio, firstname, lastname, pseudo, picture);
        res.status(201).json(safeUser);
    }
    catch (error) {
        console.error(error);
    }
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield PrismaConfig_1.default.user.findFirst({
            where: { email }
        });
        if (!user || !(yield bcryptjs_1.default.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = (0, JwtUtils_1.generateToken)((0, ConversionsUtils_1.default)(user.id));
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
});
exports.login = login;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { firstname, lastname, email, password, age, username, role } = req.body;
    try {
        const hashedPassword = password ? yield bcryptjs_1.default.hash(password, 10) : undefined;
        const updatedUser = yield PrismaConfig_1.default.user.update({
            where: { id },
            data: { firstname, lastname, email, password: hashedPassword, age, username, role },
        });
        res.json(updatedUser);
    }
    catch (error) {
        res.status(400).json({ error: "Error updating user" });
    }
});
exports.updateUser = updateUser;
const softDeleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield PrismaConfig_1.default.user.update({
            where: {
                id: BigInt(id),
            },
            data: {
                supprime: 1,
            },
        });
    }
    catch (err) {
        console.error(err);
    }
});
exports.softDeleteUser = softDeleteUser;
const reactivateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const updatedUser = yield PrismaConfig_1.default.user.update({
            where: {
                id: BigInt(id),
            },
            data: {
                supprime: 0,
            },
        });
        const safeUser = (0, ConversionsUtils_1.default)(updatedUser);
        yield (0, ProfilesController_1.reactivateUserProfile)(safeUser.id);
        res.status(200).json({ message: 'User reactivated', user: safeUser });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error soft deleting user');
    }
});
exports.reactivateUser = reactivateUser;
