const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { userTypeDefs, userResolvers } = require('./schema/user')
const { postsTypeDefs, postsResolvers } = require('./schema/posts')
const { followTypeDefs, followResolvers } = require('./schema/follow')


const server = new ApolloServer({
  typeDefs: [userTypeDefs, postsTypeDefs, followTypeDefs],
  resolvers: [userResolvers, postsResolvers, followResolvers]
});

startStandaloneServer(server, {
  listen: { port: 3000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});

