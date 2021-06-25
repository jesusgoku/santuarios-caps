import { Op } from 'sequelize';

import UserMedicalRecord from '@app/models/UserMedicalRecord';
import { makeIndex } from '@app/helpers/collections';

async function findAllByUserIds(ids) {
  const items = await UserMedicalRecord.findAll({
    where: { userId: { [Op.in]: ids } },
  });

  const itemsIndex = makeIndex(items, 'userId');

  return ids.map((id) => itemsIndex[id]);
}

export {
  findAllByUserIds, //
};
