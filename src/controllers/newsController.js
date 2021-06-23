import { findAll, findOneById } from '@app/repositories/newsRepository';

function getList({ limit = 12, offset = 0, order = [['createdAt', 'DESC']] }) {
  return findAll({ limit, offset, order });
}

function getItem(id) {
  return findOneById(id);
}

export { getList, getItem };
