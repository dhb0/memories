import mongoose from "mongoose";
import Post from "../models/post.js";

export const posts_get = (req, res) => {
  Post.find()
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(404).json("Error: " + err));
};

export const posts_post = (req, res) => {
  const body = req.body;
  const newPost = new Post(body);
  newPost
    .save()
    .then((result) => res.status(201).json(newPost))
    .catch((err) => res.status(409).json({ err: err.message }));
};

export const posts_update = (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Not valid object id");
  }

  Post.findByIdAndUpdate(_id, post, { new: true }).then((result) =>
    res.json(result)
  );
};

export const posts_delete = (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Not valid object id");
  }

  Post.findByIdAndDelete(id)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const posts_like = async (req, res) => {
  const {id:_id} = req.params

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Not valid object id");
  }
  const post = await Post.findById(_id);

  Post.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true })
    .then((result) => res.json(result))
    .catch((err) => console.log("error"));
};
