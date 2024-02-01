const Post = require("../models/Post");

const postsTypeDefs = `#graphql
  type Post {
    _id: ID
    content: String!
    tags: [String]
    imgUrl: String
    authorId: ID!
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
    addLike(_id: ID): Likes
    addComment(_id: ID, content: String): Comments
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
        comments: [],
        likes: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      const result = await Post.addPost(input)
      return input
    },
    addLike: async (_, args, contextValue) => {
      const auth = await contextValue.authentication()
      if (!auth) {
        throw new GraphQLError("Unauthorized")
      }
      const {_id} = args
      
      const result = await Post.likePost(_id, auth.username)
      return result
    },
    addComment: async(_,args, contextValue) => {
      const auth = await contextValue.authentication()
      if (!auth) {
        throw new GraphQLError("Unauthorized")
      }
      const {_id, content} = args

      const result = await Post.commentPost(_id, content, auth.username)
      return result
    }
  }
};

module.exports = { postsTypeDefs, postsResolvers }