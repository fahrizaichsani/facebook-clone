const users = [{
  _id: "1",
  name: "putu",
  username: "pututampan",
  email: "putu@mail.com",
  password: "putu"
},
{
  _id: "2",
  name: "putu2",
  username: "putu2tampan",
  email: "putu2@mail.com",
  password: "putu2"
}
]

const userTypeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String!
    email: String!
    password: String!
  }

  type Mutation {
    register(name: String, username: String!, email: String!, password: String!): User,
    login(email: String!, password: String!): User
  }
`;

const userResolvers = {
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