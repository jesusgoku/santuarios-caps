const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: 'angelitolindo' }];
    },
  },
};

export default resolvers;
