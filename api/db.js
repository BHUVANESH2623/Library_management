import mysql from "mysql";

const db = mysql.createConnection({
  user: "root",
  database: "librarymanagement",
  host: "localhost",
  password: "Bhuvi@123",
});

export default db;
