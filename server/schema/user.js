const User = require('../models/User')
const validator = require('validator')
const { GraphQLError } = require('graphql')
const { signToken } = require('../helpers/jwt')

const userTypeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String!
    email: String!
    password: String!
  }

  type token {
    access_token: String
  }

  input newUser {
    name: String
    username: String! 
    email: String! 
    password: String!
  }

  input loginUser {
    username: String!
    password: String!
  }

  type DataFollowing {
    _id: ID
    name: String
    username: String
    email: String
  }

  type DataFollower {
    _id: ID
    name: String
    username: String
    email: String
  }

  type getUser {
    _id: ID
    name: String
    username: String!
    email: String!
    DataFollowing: [DataFollowing]
    DataFollower: [DataFollower]
  }

  type Query {
    searchUser(input: String): [User],
    getUser(_id: ID): getUser
  }

  type Mutation {
    register(newUser: newUser): User,
    login(loginUser: loginUser): token
  }
`;

const userResolvers = {
  Query: {
    searchUser: async (_, args, contextValue) => {
      const auth = await contextValue.authentication()
      const { input } = args
      const user = await User.getUserByUsernameAndName(input)
      return user
    },
    getUser: async (_, args) => {
      const {_id} = args
      const user = await User.getUserById(_id)
      return user
    }
  },
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
    },
    login: async (_, args) => {
      const { loginUser } = args
      const user = await User.getUser(loginUser)
      const access_token = signToken({ _id: user._id, username: loginUser.username })
      return { access_token }
    }
  }
};

module.exports = { userTypeDefs, userResolvers }