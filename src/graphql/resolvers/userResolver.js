import DataLoader from 'dataloader';

import { getList, getItem } from '@app/controllers/userController';
import { findAllByUserIds as userEmergency } from '@app/repositories/userEmergencyRepository';
import { findAllByUserIds as userMedialRecord } from '@app/repositories/userMedicalRecordRepository';
import { findAllByUserIds as userTechnicalRecord } from '@app/repositories/userTechnicalRecordRepository';

const userEmergencyLoader = new DataLoader(userEmergency);
const userMedicalRecordLoader = new DataLoader(userMedialRecord);
const userTechnicalRecordLoader = new DataLoader(userTechnicalRecord);

function userList(parent, args, context, info) {
  const { limit, offset } = args.pagination || {};
  const order =
    args.order && args.order.map(({ field, direction }) => [field, direction]);

  return getList({ limit, offset, order });
}

function userItem(parent, args, context, info) {
  return getItem(args.id);
}

function emergency(parent) {
  return userEmergencyLoader.load(parent.id);
}

function medicalRecord(parent) {
  return userMedicalRecordLoader.load(parent.id);
}

function technicalRecord(parent) {
  return userTechnicalRecordLoader.load(parent.id);
}

export {
  userList, //
  userItem,
  emergency,
  medicalRecord,
  technicalRecord,
};
