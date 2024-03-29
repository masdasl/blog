import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DB_NAME,
});
