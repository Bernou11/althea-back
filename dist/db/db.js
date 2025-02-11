"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv = require("dotenv");
if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: ".env.prod" }); // Load production variables
}
else {
    dotenv.config({ path: ".env.local" }); // Load local variables
}
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
});
exports.default = pool;
