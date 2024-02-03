const { ObjectId } = require("mongodb");
const { database } = require("../config/mongoDb");
const { GraphQLError } = require('graphql');

class Follow {
    static async followUser(followInput) {
        const followCollection = database.collection("follows")
        const checkFollow = await followCollection.findOne({followingId: followInput.followingId, followerId: followInput.followerId})
        if (checkFollow) {
            const unfollow = await followCollection.deleteOne({followingId: followInput.followingId, followerId: followInput.followerId});
            return unfollow
        }
        const follows = await followCollection.insertOne(followInput)
        return follows
    }
}

module.exports = Follow