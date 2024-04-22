//import express
const express = require("express");
const authController = require("../auth/auth");
//import Post controller
const postController = require("../controller/post.controller");

//import authetication middleware

//create router
const router = express.Router();

//API endpoint structure
router.get("/", postController.getAllPublishedPost);
router.get("/:postId", postController.getASinglePublishedPost);
router.put("/:postId", authController.authenticate, postController.updateAPost);
router.delete(
  "/:postId",
  authController.authenticate,
  postController.deleteAPost
);
module.exports = router;
