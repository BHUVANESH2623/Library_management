import express from "express";
import bookRoutes from "./routes/book.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://library-management-rouge.vercel.app/",
      "https://library-management-frontend-mm5r.onrender.com",
    ],
  })
);

app.use("/user", userRoutes);
app.use("/book", bookRoutes);

app.listen(8080, () => {
  console.log("server connected");
});
