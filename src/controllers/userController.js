import { findAll, findOneById } from '@app/repositories/userRepository';

function getList({ limit, offset, order }) {
  return findAll({ limit, offset, order });
}

function getItem(id) {
  return findOneById(id);
}

export {
  getList, //
  getItem,
};
