const { GraphQLError } = require("graphql");
const Follow = require("../models/Follow");
const { ObjectId } = require("mongodb");

const followTypeDefs = `#graphql
  type Follow {
    _id: ID
    followingId: ID
    followerId: ID
    createdAt: String
    updatedAt: String
  }

  type Mutation {
    follow(followingId: ID): Follow
  }
`;

const followResolvers = {
  Mutation: {
    follow: async (_, args, contextValue) => {
      const auth = await contextValue.authentication()
      if (!auth) {
        throw new GraphQLError("Unauthorized")
      }

      args.followingId = new ObjectId(args.followingId)
      const followInput = {
        followingId: args.followingId,
        followerId: auth._id,
        createdAt: new Date,
        updatedAt: new Date
      }
      const follow = await Follow.followUser(followInput)
      // perlukah validasi agar tidak bisa difollow 2 kali?
      return followInput
    },
  },
};

module.exports = { followTypeDefs, followResolvers }