"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersRoute_1 = __importDefault(require("./routes/UsersRoute"));
const ProfilesRoute_1 = __importDefault(require("./routes/ProfilesRoute"));
const MessagesRoute_1 = __importDefault(require("./routes/MessagesRoute"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use(express_1.default.json()); // Only this for JSON parsing!
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Welcome to the server");
});
app.use('/api/users', UsersRoute_1.default);
app.use('/api/profiles', ProfilesRoute_1.default);
app.use('/api/messages', MessagesRoute_1.default); // Use correct router!
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
