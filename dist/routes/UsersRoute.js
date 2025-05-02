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
const UsersController_1 = require("../controllers/UsersController");
const router = express_1.default.Router();
router.post("/login", UsersController_1.login);
router.post("/", UsersController_1.createUser);
router.get("/", Auth_1.default, UsersController_1.getAllUsers);
router.get("/:id", Auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, UsersController_1.getUserById)(req, res);
}));
router.put("/update/:id", Auth_1.default, UsersController_1.updateUser);
router.put("/softDelete/:id", Auth_1.default, UsersController_1.softDeleteUser);
router.put("/reactivate/:id", Auth_1.default, UsersController_1.reactivateUser);
exports.default = router;
