import {Pool} from "pg"

import dotenv = require("dotenv")

if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: "production.env" });  // Load production variables
} else {
    dotenv.config({ path: "local.env" }); // Load local variables
}

const password = process.env.DATABASE_PASSWORD;
const username = process.env.DATABASE_USERNAME;
const url = process.env.DATABASE_URL;
const name = process.env.DATABASE_NAME;
const host = process.env.DATABASE_HOST;

if (!username) {
    throw new Error('Database username is missing.');
}
if (!url) {
    throw new Error('Database url is missing.');
}
if (!name) {
    throw new Error('Database name is missing.');
}
if (!host) {
    throw new Error('Database host is missing.');
}
if (!password) {
    throw new Error('Database password is missing.');
}

const pool = new Pool({
    connectionString: url,
    user: username,
    database: name,
    host: host,
    password: password,
})

export default pool