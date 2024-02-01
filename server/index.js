const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { userTypeDefs, userResolvers } = require('./schema/user')
const { postsTypeDefs, postsResolvers } = require('./schema/posts')
const { followTypeDefs, followResolvers } = require('./schema/follow')
const { GraphQLError } = require('graphql')
const { verifyToken } = require('./helpers/jwt')
const { database } = require("./config/mongoDb");
const { ObjectId } = require('mongodb')


const server = new ApolloServer({
  typeDefs: [userTypeDefs, postsTypeDefs, followTypeDefs],
  resolvers: [userResolvers, postsResolvers, followResolvers]
});

startStandaloneServer(server, {
  listen: { port: 3001 },
  context: async ({ req, res }) => {
    return {
      authentication: async () => {
        const authorization = req.headers.authorization
        if (!authorization) {
          throw new GraphQLError('Unauthorized')
        }

        const [type, token] = authorization.split(' ')
        if (type !== 'Bearer') {
          throw new GraphQLError('Unauthorized')
        }
        if (!token) {
          throw new GraphQLError('Unauthorized')
        }

        const payload = verifyToken(token)

        const userCollection = database.collection("users")
        const users = await userCollection.findOne({
          _id: new ObjectId(payload._id)
        })
        if (!users) {
          throw new GraphQLError('Unauthorized')
        }
        return users
      }
    }
  }
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});

