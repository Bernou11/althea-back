import pool from "./src/db/db"
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Welcome to the server");
})

const port = 3000

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});