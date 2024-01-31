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
            throw new GraphQLError('Email and username already exists', {
                extensions: {
                    code: 'BAD_REQUEST'
                }
            })
        }

        newUser.password = hashPass(newUser.password)

        const result = await userCollection.insertOne(newUser)
        return result
    }

    static async getUser(loginUser) {
        const userCollection = database.collection("users")
        const findUser = await userCollection.findOne({ username: loginUser.username })
        if (!findUser.username || !comparePass(loginUser.password, findUser.password)) {
            throw new GraphQLError('Invalid username or password', {
                extensions: {
                    code: 'BAD_REQUEST'
                }
            })
        }
        return findUser
    }

    static async getUserByUsernameAndName(search) {
        const userCollection = database.collection("users")
        console.log(search, "INII SEARCH");
        const findUser = await userCollection.find({ $or: [{ name: {$regex: search.input, $options: 'i',} }, { username: {$regex: search.input, $options: 'i',} }] }).toArray()
        if (!findUser) {
            throw new GraphQLError('User not found')
        }
        return findUser
    }
}

module.exports = User