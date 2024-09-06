// backend/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import router from "./routes/index"; // Updated path to routes index

dotenv.config();

// Load the passport configuration (important to do this before using the passport middleware)
import "./config/passport"; // Import the passport configuration file

if (!process.env.SECRET) {
  throw new Error("SECRET is not set in environment variables.");
}
if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
  throw new Error("Google OAuth CLIENT_ID and CLIENT_SECRET are not set in environment variables.");
}

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET!,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
