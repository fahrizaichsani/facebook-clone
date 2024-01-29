const followTypeDefs = `#graphql
  type Follow {
    _id: ID
    followingId: ID
    followerId: ID
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    follows: [Follow]
  }
`;

const followResolvers = {
  Query: {
    follows: () => follows,
  },
};

module.exports = { followTypeDefs, followResolvers }