const Post = require("../models/Post");

const postsTypeDefs = `#graphql
  type Post {
    _id: ID
    content: String
    tags: [String]
    imgUrl: String
    authorId: ID
    comments: [Comments]
    likes: [Likes]
    createdAt: String
    updatedAt: String
  }

  type Comments {
    content: String!
    username: String!
    createdAt: String
    updatedAt: String
  }

  type Likes {
    username: String!
    createdAt: String
    updatedAt: String
  }

  input addPost {
    content: String!
    tags: [String]
    imgUrl: String
  }

  type Query {
    getPosts: [Post]
  }

  type Mutation {
    addNewPost(addPost: addPost): Post
  }
`;

const postsResolvers = {
  Query: {
    getPosts: async (_, args, contextValue) => {
      const auth = await contextValue.authentication()
      if (!auth) {
        throw new GraphQLError("Unauthorized")
      }
      const result = await Post.getPosts()
      return result
    }
  },
  Mutation: {
    addNewPost: async (_, args, contextValue) => {
      const auth = await contextValue.authentication()
      if (!auth) {
        throw new GraphQLError("Unauthorized")
      }
      const { addPost } = args
      const input = {
        ...addPost,
        authorId: auth._id,
        createdAt: new Date,
        updatedAt: new Date
      }
      const result = await Post.addPost(input)
      return input
    }
  }
};

module.exports = { postsTypeDefs, postsResolvers }