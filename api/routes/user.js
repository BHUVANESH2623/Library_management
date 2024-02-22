import express from "express";
import { Login, Register, logout, profile } from "../controllers/user.js";

const router = express.Router();

router.post("/login", Login);
router.post("/register", Register);
router.post("/logout", logout);
router.get("/profile", profile);

export default router;
