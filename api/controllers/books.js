import db from "../db.js";
import moment from "moment/moment.js";

export const GetBooks = (req, res) => {
  const q = "SELECT * FROM books";

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const AddBooks = (req, res) => {
  const q = "INSERT INTO books(title,author,subject,publish) values(?)";

  const v = [
    req.body.title,
    req.body.author,
    req.body.subject,
    moment(req.body.publish).format("YYYY-MM-DD"),
  ];

  db.query(q, [v], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("New book added successfully");
  });
};
