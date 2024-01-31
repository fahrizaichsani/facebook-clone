const { database } = require("../config/mongoDb");
const { GraphQLError } = require('graphql');

class Follow {
    static async followUser(followInput) {
        const followCollection = database.collection("follows")
        const follows = await followCollection.insertOne(followInput)
        // kenapa input hanya mengembalikan id dan acknowledged
        return follows
    }
}

module.exports = Follow