import { login as loginController } from '@app/controllers/authController';

function login(parent, args, context, info) {
  const { username, password } = args;

  return loginController(username, password);
}

export {
  login, //
};
