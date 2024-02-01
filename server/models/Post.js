const { database } = require("../config/mongoDb");
const { GraphQLError } = require('graphql');
const { ObjectId } = require('mongodb')

class Post {
    static async addPost(newPost) {
        const postCollection = database.collection('posts')
        const result = await postCollection.insertOne(newPost)
        return result
    }
    
    static async getPosts() {
        const postCollection = database.collection("posts")
        const result = await postCollection.find().toArray()
        return result
    } 
}

module.exports = Post