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

const database = `mysql://avnadmin:AVNS_zDt2MyQWGSd7K8FX0VF@mysql-26437d1a-projectdev.a.aivencloud.com:20951/defaultdb?ssl-mode=REQUIRED`;
const db = mysql.createConnection(database);

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

export default db;
