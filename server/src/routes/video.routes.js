import { Router } from "express";
import {
  publishAVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
  togglePublishStatus,
  getAllVideos,
  updatedViews,
  getHomeVideo,
} from "../controllers/video.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route('/').get(getHomeVideo)
// middleware
router.use(verifyJWT);

// create routes

router
  .route("/")
  .post(
    upload.fields([
      {
        name: "thumbnail",
        maxCount: 1,
      },
      {
        name: "videoFile",
        maxCount: 1,
      },
    ]),
    publishAVideo
  );

router
  .route("/:videoId")
  .get(getVideoById)
  .patch(upload.single("thumbnail"), updateVideo)
  .delete(deleteVideo);

router.route("/view/:videoId").patch(updatedViews)
//toggle isPublic
router.route("/toggle/publish/:videoId").patch(togglePublishStatus);
export default router;

//url/api/v1/videos/publish
