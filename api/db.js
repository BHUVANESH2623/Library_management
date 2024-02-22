// import mysql from "mysql";

// const db = mysql.createConnection({
//   user: "root",
//   database: "librarymanagement",
//   port: "",
//   host: "localhost",
//   password: "Bhuvi@123",
// });

// export default db;

import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const database = `mysql://root:6GhecEC5BH663Gbh4D3BA--ceE6DDhH-@roundhouse.proxy.rlwy.net:40745/railway`;
const db = mysql.createConnection(database);

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

export default db;
