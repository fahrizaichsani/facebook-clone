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

    static async likePost(id, username) {
        const postCollection = database.collection("posts")
        const findPost = await postCollection.findOne({
            _id: new ObjectId(id),
            "likes.username": username
        })
        if (findPost) {
            throw new GraphQLError("Already liked")
        }

        const like = await postCollection.updateOne({
            _id: new ObjectId(id)
        }, {
            $push: {
                likes: {
                    username,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            }
        })
        return {
            username,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }

    static async commentPost(_id, content, username) {
        const postCollection = database.collection("posts")
        const comment = await postCollection.updateOne({
            _id: new ObjectId(_id)
        }, {
            $push: {
                comments: {
                    content,
                    username,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            }
        })
        return {
            content,
            username,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }
}

module.exports = Post