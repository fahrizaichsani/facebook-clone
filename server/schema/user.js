const User = require('../models/User')
const validator = require('validator')
const { GraphQLError } = require('graphql')

const userTypeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String!
    email: String!
    password: String!
  }

  input newUser {
    name: String
    username: String! 
    email: String! 
    password: String!
  }

  input loginUser {
    email: String!
    password: String!
  }

  type Mutation {
    register(newUser: newUser): User,
    login(loginUser: loginUser): User
  }
`;

const userResolvers = {
  Mutation: {
    register: async (_, args) => {
      const { newUser } = args
      if (!validator.isEmail(newUser.email)) {
        throw new GraphQLError('Invalid email format', {
          extensions: {
            code: 'BAD_REQUEST',
          },
        })
      }
      if (newUser.password < 5) {
        throw new GraphQLError('Use a password that contain at least 5 characters', {
          extensions: {
            code: 'BAD_REQUEST',
          },
        })
      }
      if (!validator.isAlpha(newUser.name)) {
        throw new GraphQLError('Invalid name (only use characters)', {
          extensions: {
            code: 'BAD_REQUEST',
          },
        })
      }
      if (!validator.isAlphanumeric(newUser.username)) {
        throw new GraphQLError('Invalid username (only use characters or numbers)', {
          extensions: {
            code: 'BAD_REQUEST',
          },
        })
      }
      const result = await User.addUser(newUser)
      return newUser
    }
  }
};

module.exports = { userTypeDefs, userResolvers }