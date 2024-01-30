const { database } = require("../config/mongoDb");
const { ObjectId } = require('mongodb')

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
}

module.exports = User