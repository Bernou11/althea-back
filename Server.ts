import express from "express";
import bodyParser from 'body-parser';
import UsersRoute from "./src/routes/UsersRoute";

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Welcome to the server");
})

app.use('/api/users', UsersRoute)

const port = 3000

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});