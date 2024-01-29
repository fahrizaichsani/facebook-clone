const postsTypeDefs = `#graphql
  type Posts {
    _id: ID
    content: String!
    tags: [String]
    imgUrl: String
    authorId: ID!
    comments: [Comments]
    likes: [Likes]
    createdAt: Date
    updatedAt: Date
  }

  type Comments {
    content: String!
    username: String!
    createdAt: Date
    updatedAt: Date
  }

  type Likes {
    username: String!
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    posts: [Posts]
  }
`;

const postsResolvers = {
  Query: {
    posts: () => posts,
  },
};

module.exports = { postsTypeDefs, postsResolvers }