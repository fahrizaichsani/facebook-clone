const postsTypeDefs = `#graphql
  type Posts {
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