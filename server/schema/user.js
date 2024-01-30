const User = require('../models/User')

const userTypeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getAllUsers: [User]
    getOneUser(id: ID!): User
  }

  type Mutation {
    register(name: String, username: String!, email: String!, password: String!): User,
    login(email: String!, password: String!): User
  }
`;

const userResolvers = {
  Query: {
    getAllUsers: async () => {
      const users = await User.getUsers()
      return users
    },
    getOneUser: async (_, args) => {
      // console.log(args, '<<< ini args');
      const user = await User.getUserById(args.id)
      return user
    }
  },
  Mutation: {
    register: (_, args, contextValue) => {
      const { name, username, email, password } = args

      const registerAdded = {
        _id: "1",
        name,
        username,
        email,
        password
      }
      users.push(registerAdded)
      return registerAdded
    }
  }
};

module.exports = { userTypeDefs, userResolvers }