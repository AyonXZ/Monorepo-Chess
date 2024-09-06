
// backend/routes/auth.ts
import express, { Request, Response } from "express";
import passport from "passport";
import { isAuthenticated } from "../middleware/auth";

const router = express.Router();
const cookiesToClear = ['refresh_token', 'next-auth.session-token', 'id_token', 'connect.sid'];

router.get("/", (req, res) => {
  res.send('<a href="/api/v1/auth/google">Sign Up with Google</a>');
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req: Request, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: "User is not authenticated" });
    }

    const user = req.user as { idToken: string; refreshToken: string; [key: string]: any };
    res.cookie('id_token', user.idToken, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: 'lax' });
    res.cookie('refresh_token', user.refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: 'lax' });
    res.cookie('next-auth.session-token', 'session_token_value', { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: 'lax' });

    res.redirect("http://localhost:5173");
  }
);

router.get('/logout', isAuthenticated, (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Logout error:", err);
      return res.status(500).json({ message: "Error logging out", error: err });
    }

    req.session.destroy((err) => {
      if (err) {
        console.error("Session destroy error:", err);
        return res.status(500).json({ message: "Error destroying session", error: err });
      }

      cookiesToClear.forEach(cookie => {
        res.clearCookie(cookie, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: 'lax' });
      });

      res.redirect('http://localhost:5173/signup');
    });
  });
});

export default router;
