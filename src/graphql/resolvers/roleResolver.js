import DataLoader from 'dataloader';

import { getListById } from '@app/controllers/roleController';

const roleLoader = new DataLoader(getListById);

function role(parent) {
  return roleLoader.load(parent.roleId);
}

export {
  role, //
};
