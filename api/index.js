import express from "express";
import bookRoutes from "./routes/book.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/user", userRoutes);
app.use("/book", bookRoutes);

app.listen(8080, () => {
  console.log("server connected");
});
