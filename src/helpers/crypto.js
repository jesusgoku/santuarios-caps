import { createHash } from 'crypto';

function hash(algo, str) {
  return createHash(algo).update(str).digest('hex');
}

export {
  hash, //
};
