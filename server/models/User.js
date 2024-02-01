const { database } = require("../config/mongoDb");
const { GraphQLError } = require('graphql');
const { hashPass, comparePass } = require("../helpers/bcrypt");
const { ObjectId } = require('mongodb')

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
        const findUser = await userCollection.find({ $or: [{ name: { $regex: search, $options: 'i', } }, { username: { $regex: search, $options: 'i', } }] }).toArray()
        if (!findUser) {
            throw new GraphQLError('User not found')
        }
        return findUser
    }

    static async getUserById(id) {
        const userCollection = database.collection("users")
        const [users] = await userCollection.aggregate([{
            $match: {
                _id: new ObjectId(id)
            },
        }, {
            $lookup: {
                //    from: <collection to join>,
                //    localField: <field from the input documents>,
                //    foreignField: <field from the documents of the "from" collection>,
                //    as: <output array field></output>
                from: "follows",
                localField: "_id",
                foreignField: "followerId",
                as: "Followings"
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "Followings.followingId",
                foreignField: "_id",
                as: "DataFollowing"
            }
        }, {
            $lookup: {
                from: "follows",
                localField: "_id",
                foreignField: "followingId",
                as: "Followers"
            }
        }, {
            $lookup: {
                from: "users",
                localField: "Followers.followerId",
                foreignField: "_id",
                as: "DataFollower"
            }
        }, {
            $project: {
                "DataFollowing.password": 0,
                "DataFollower.password": 0,
                password: 0
            }
        }]).toArray()
        console.log(users);
        return users
    }
}

module.exports = User