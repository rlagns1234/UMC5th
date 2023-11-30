import mysql from 'mysql';
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const pool = mysql.createPool({
  connectionLimit: 100, // 최대 연결 수
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

export const getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
};