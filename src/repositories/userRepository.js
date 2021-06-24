import User from '@app/models/User';

function findAll({ limit, offset, order }) {
  return User.findAll({ limit, offset, order });
}

function findOneById(id) {
  return User.findOne({ where: { id } });
}

function findOneByEmail(email) {
  return User.findOne({ where: { email } });
}

export {
  findAll, //
  findOneById,
  findOneByEmail,
};
