const followTypeDefs = `#graphql
  type Follow {
    _id: ID
    followingId: ID
    followerId: ID
    createdAt: String
    updatedAt: String
  }

  type Query {
    getFollows: [Follow]
  }
`;

const followResolvers = {
    Query: {
        getFollows: () => follows,
    },
};

module.exports = { followTypeDefs, followResolvers }