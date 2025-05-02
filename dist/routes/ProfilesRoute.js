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
const express_1 = __importDefault(require("express"));
const Auth_1 = __importDefault(require("../middlewares/Auth"));
const ProfilesController_1 = require("../controllers/ProfilesController");
const router = express_1.default.Router();
router.post("/", ProfilesController_1.createProfileHandler);
router.get("/:id", Auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, ProfilesController_1.getUserProfile)(req, res);
}));
router.put("/update/:id", Auth_1.default, ProfilesController_1.updateUserProfile);
router.put("/softDelete/:id", Auth_1.default, ProfilesController_1.softDeleteUserProfile);
router.put("/reactivate/:id", Auth_1.default, ProfilesController_1.reactivateUserProfile);
exports.default = router;
