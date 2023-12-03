// src/config/passport.ts
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { dbConfig } from './dbConfig';
import { User } from '../models/user';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your_secret_key',
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      // Fetch user from the database using jwt_payload.sub (subject)
      const user: User | undefined = /* Fetch user from the database */;
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

export default passport;
