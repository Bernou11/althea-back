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
exports.reactivateUserProfile = exports.softDeleteUserProfile = exports.updateUserProfile = exports.createProfileHandler = exports.createUserProfile = exports.getUserProfile = void 0;
const PrismaConfig_1 = __importDefault(require("../config/PrismaConfig"));
const ConversionsUtils_1 = __importDefault(require("../utils/ConversionsUtils"));
const dotenv_1 = __importDefault(require("dotenv"));
const UsersController_1 = require("./UsersController");
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
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body.id;
    try {
        const userProfile = yield PrismaConfig_1.default.profile.findFirst({
            where: { user_id: id }
        });
        if (userProfile && userProfile.active == 1) {
            return res.status(200).json({ userProfile });
        }
        else {
            return res.status(404).json({ error: "Profile not found" });
        }
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
exports.getUserProfile = getUserProfile;
const createUserProfile = (userId, bio, firstname, lastname, pseudo, picture) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield PrismaConfig_1.default.profile.create({
            data: {
                user_id: userId,
                bio: bio,
                firstname: firstname,
                lastname: lastname,
                pseudo: pseudo,
                picture: picture
            }
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.createUserProfile = createUserProfile;
const createProfileHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, bio, firstname, lastname, pseudo, picture } = req.body;
        const profile = yield (0, exports.createUserProfile)(userId, bio, firstname, lastname, pseudo, picture);
        res.status(201).json({ message: "Profile created", profile });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.createProfileHandler = createProfileHandler;
const updateUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profileId = parseInt(req.params.id);
    const { pseudo, firstname, lastname, bio, picture } = req.body;
    try {
        const updatedUserProfile = yield PrismaConfig_1.default.profile.update({
            where: { id: profileId },
            data: { pseudo, firstname, lastname, bio, picture },
        });
        res.json(updatedUserProfile);
    }
    catch (error) {
        res.status(400).json({ error: "Error updating profile" });
    }
});
exports.updateUserProfile = updateUserProfile;
const softDeleteUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield PrismaConfig_1.default.profile.update({
            where: {
                id: parseInt(req.params.profileId),
            },
            data: {
                active: 0,
            },
        });
        const safeProfile = (0, ConversionsUtils_1.default)(updatedUser);
        yield (0, UsersController_1.softDeleteUser)(safeProfile.user_id);
        res.status(200).json({ message: 'User and profile Profile soft deleted' });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error soft deleting profile');
    }
});
exports.softDeleteUserProfile = softDeleteUserProfile;
const reactivateUserProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield PrismaConfig_1.default.profile.update({
            where: {
                user_id: id,
            },
            data: {
                active: 1,
            },
        });
    }
    catch (err) {
        console.error(err);
    }
});
exports.reactivateUserProfile = reactivateUserProfile;
