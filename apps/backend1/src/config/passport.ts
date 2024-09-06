// backend/config/passport.ts
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20"; // Correct import
import { db } from "../db"; // Adjust path based on your db configuration

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      callbackURL: "http://localhost:3000/api/v1/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) {
          return done(new Error("No email found in user profile"));
        }

        const existingUser = await db.user.findUnique({
          where: { email },
        });

        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = await db.user.create({
          data: {
            name: profile.displayName,
            email,
          },
        });

        return done(null, newUser);
      } catch (error) {
        console.error("Error creating or finding user:", error);
        return done(error);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});
