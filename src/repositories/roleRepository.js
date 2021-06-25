import { Op } from 'sequelize';

import Role from '@app/models/Role';
import { makeIndex } from '@app/helpers/collections';

async function findAllByIds(ids) {
  const roles = await Role.findAll({ where: { id: { [Op.in]: ids } } });

  const rolesIndex = makeIndex(roles, 'id');

  return ids.map((id) => rolesIndex[id]);
}

export {
  findAllByIds, //
};
