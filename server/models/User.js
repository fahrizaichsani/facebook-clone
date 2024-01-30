const { database } = require("../config/mongoDb");
const { GraphQLError } = require('graphql');
const { hashPass, comparePass } = require("../helpers/bcrypt");

class User {
    static async addUser(newUser) {
        const userCollection = database.collection("users")
        const findUser = await userCollection.findOne({
            $or: [
                { email: newUser.email },
                { username: newUser.username }
            ]
        })

        if (findUser) {
            throw new GraphQLError('Email and username already exists')
        }

        newUser.password = hashPass(newUser.password)

        const result = await userCollection.insertOne(newUser)
        return result
    }

    static async getUser(loginUser) {
        const userCollection = database.collection("users")
        const findUser = await userCollection.findOne({ username: loginUser.username })
        if (!findUser.username || !comparePass(loginUser.password, findUser.password)) {
            throw new GraphQLError('Invalid username or password')
        }
        return findUser
    }
}

module.exports = User