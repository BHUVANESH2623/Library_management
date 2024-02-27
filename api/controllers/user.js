import db from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const Login = (req, res) => {
  const q = "SELECT * FROM users WHERE name=? AND role=?";
  db.query(q, [req.body.username, req.body.role], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) {
      return res.status(409).json("User not found");
    }

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(401).json("Wrong username or password");

    if (req.body.password !== data[0].password) {
      return res.status(401).json("Wrong username or password");
    }

    const token = jwt.sign({ id: data[0].id, role: data[0].role }, "SecretKey");
    const { password, ...others } = data[0];

    return res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json(others);
  });
};

export const Register = (req, res) => {
  const q = "SELECT * FROM users WHERE email =? AND role =?";
  db.query(q, [req.body?.email, req.body?.role], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length !== 0) {
      return res.status(409).json("user already present");
    }

    // Calculate the new id based on the length of the original table
    // const newUserId = data.length + 1;

    const p =
      "INSERT INTO users( name, email, role, password) VALUES ( ?, ?, ?, ?)";

    const value = [
      req.body.name,
      req.body.email,
      req.body.role,
      req.body.password,
    ];

    db.query(p, value, (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json({
        message: "User registered successfully",
        userId: newUserId,
      });
    });
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User Logged Out successfully");
};

export const profile = (req, res) => {
  const token = req.cookies?.accessToken;
  if (token) {
    jwt.verify(token, "secretkey", (err, userData) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(userData);
    });
  } else {
    res.json("Not logged in");
  }
};
