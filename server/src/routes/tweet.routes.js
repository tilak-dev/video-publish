import { Router } from "express";
import {verifyJWT} from "../middlewares/auth.middleware.js";
import { createTweet, deleteTweet, getUserTweets,updateTweet } from "../controllers/tweet.controller.js";

const router = Router()

//middleware

router.use(verifyJWT)

// routes
router.route("/").post(createTweet)
router.route("/user/:tweetId").get(getUserTweets)
router.route("/:tweetId")
.patch(updateTweet)
.delete(deleteTweet)





export default router;