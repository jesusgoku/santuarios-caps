import { Op } from 'sequelize';

import UserEmergency from '@app/models/UserEmergency';
import { makeIndex } from '@app/helpers/collections';

async function findAllByUserIds(ids) {
  const items = await UserEmergency.findAll({
    where: { userId: { [Op.in]: ids } },
  });

  const itemsIndex = makeIndex(items, 'userId');

  return ids.map((id) => itemsIndex[id]);
}

export {
  findAllByUserIds, //
};
