import { findAllByIds } from '@app/repositories/roleRepository';

function getListById(ids) {
  return findAllByIds(ids);
}

export {
  getListById, //
};
