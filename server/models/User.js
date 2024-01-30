const { database } = require("../config/mongoDb");
const { ObjectId } = require('mongodb')
const validator = require('validator')
const { GraphQLError } = require('graphql')

class User {
    static async getUsers() {
            const userCollection = database.collection("users")
            const users = await userCollection.find().toArray()
            return users
    }

    static async getUserById(id) {
            const userCollection = database.collection("users")
            const users = await userCollection.findOne({
                _id: new ObjectId(id)
            })
            return users
    }

    static async addUser(newUser) {
            const userCollection = database.collection("users")
            const result = userCollection.insertOne(newUser)
            return result
    }
}

module.exports = User