const { database } = require("../config/mongoDb");
const { GraphQLError } = require('graphql');
const { hashPass } = require("../helpers/bcrypt");

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
}

module.exports = User