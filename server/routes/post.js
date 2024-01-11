const express = require("express");
const route = express.Router();
const db = require("../models");

// get ALL posts
route.get("/", async (req, res) => {
  // 1. Make request to database (sequelize)
  // 2. Returns json object to the fronted
  const posts = await db.Post.findAll();
  res.json(posts);
});

// get INDIVIDUAL post
route.get("/:id", async (req, res) => {
  const postId = req.params.id;
  const post = await db.Post.findByPk(postId);
  res.json(post);
});

// LIKE a post
route.put("/like/:id", async (req, res) => {
  const id = req.params.id;
  const post = await db.Post.findByPk(id);
  const likes = post.likes ? post.likes + 1 : 1;
  await db.Post.update({ likes: likes }, { where: { id: id } });
  res.json(likes);
});

// CREATE a new post
route.post("/createpost", async (req, res) => {
  const newPost = req.body;
  await db.Post.create({
    title: newPost.title,
    description: newPost.description,
    userName: newPost.userName,
  });
  res.json(newPost);
});

module.exports = route;
