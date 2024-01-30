const { database } = require("../config/mongoDb");
const { ObjectId } = require('mongodb')
const validator = require('validator')
const { GraphQLError } = require('graphql')

class User {
    static async addUser(newUser) {
            const userCollection = database.collection("users")
            const result = await userCollection.insertOne(newUser)
            return result
    }

    static async getUserByUsername(){
        const userCollection = database.collection("users")
        const result = await userCollection.findOne({
            // email: 
        })
    }

}

module.exports = User