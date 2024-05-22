import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    uinque: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: true,
  },
  posts: {
    type: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    default: [],
  },
  savedPosts: {
    type: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    default: [],
  },
  likedPosts: {
    type: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    default: [],
  },
  followers: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    default: [],
  },
  following: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.User || model("User", userSchema);
