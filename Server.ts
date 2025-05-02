import express, { Request, Response } from "express";
import UsersRoute from "./src/routes/UsersRoute";
import ProfilesRoute from "./src/routes/ProfilesRoute";
import MessagesRoute from "./src/routes/MessagesRoute";

const app = express();
import cors from 'cors';

app.use(express.json()); // Only this for JSON parsing!
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the server");
});

app.use('/api/users', UsersRoute);
app.use('/api/profiles', ProfilesRoute);
app.use('/api/messages', MessagesRoute); // Use correct router!

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});