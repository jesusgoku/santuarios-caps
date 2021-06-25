import { createHash } from 'crypto';
import { sign } from 'jsonwebtoken';
import { promisify } from 'util';

import { findOneByEmail } from '@app/repositories/userRepository';
import { hash } from '@app/helpers/crypto';

const PRIVATE_KEY = Buffer.from(process.env.JWT_BASE64_PRIVATE_KEY, 'base64');
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

const signAsync = promisify(sign);

// -- Public
async function login(username, password) {
  const user = await findOneByEmail(username);

  if (!user) return;

  if (!checkPassword(user, password)) return;

  // TODO: Migrate password hash(s) to Argon2id
  // https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#upgrading-legacy-hashes

  const token = await generateToken(user);

  return {
    token,
    user,
  };
}

function profile(username) {
  return findOneByEmail(username);
}

// -- Private
function checkPassword(user, password) {
  return (
    user.password === hash('sha512', `${hash('sha512', password)}${user.salt}`)
  );
}

function generateToken(user) {
  const { email: username, roleId } = user;

  return signAsync({ user: { username, roleId } }, PRIVATE_KEY, {
    algorithm: 'RS256',
    expiresIn: EXPIRES_IN,
  });
}

export {
  login, //
  profile,
};
