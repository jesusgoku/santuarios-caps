import { getList, getItem } from '@app/controllers/newsController';

function newsList(parent, args, context, info) {
  const { limit, offset } = args.pagination || {};
  const order =
    args.order && args.order.map(({ field, direction }) => [field, direction]);

  return getList({ limit, offset, order });
}

function newsItem(parent, args, context, info) {
  return getItem(args.id);
}

export { newsItem, newsList };
