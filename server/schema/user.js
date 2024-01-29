const userTypeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]
  }
`;

const userResolvers = {
  Query: {
    users: () => users,
  },
};

module.exports = { userTypeDefs, userResolvers }