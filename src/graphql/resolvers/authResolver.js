import {
  login as loginController,
  profile as profileController,
} from '@app/controllers/authController';

function login(parent, args, context, info) {
  const { username, password } = args;

  return loginController(username, password);
}

function profile(parent, args, context, info) {
  const { user } = context;

  return profileController(user.username);
}

export {
  login, //
  profile,
};
