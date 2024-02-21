import express from "express";
import { AddBooks, GetBooks } from "../controllers/books.js";

const router = express.Router();

router.get("/", GetBooks);
router.post("/", AddBooks);

export default router;
