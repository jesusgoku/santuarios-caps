import { getList, getItem } from '@app/controllers/userController';

function userList(parent, args, context, info) {
  const { limit, offset } = args.pagination || {};
  const order =
    args.order && args.order.map(({ field, direction }) => [field, direction]);

  return getList({ limit, offset, order });
}

function userItem(parent, args, context, info) {
  return getItem(args.id);
}

export {
  userList, //
  userItem,
};
