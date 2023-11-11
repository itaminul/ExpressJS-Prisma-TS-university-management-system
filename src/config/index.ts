import passport from 'passport';
import { jwtStrategy } from './jwt-strategy';

passport.use('jwt', jwtStrategy);

export const authenticateJwt = passport.authenticate('jwt', { session: false });
