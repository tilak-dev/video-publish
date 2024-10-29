import { Router } from "express";
import healthCheck from "../controllers/healthcheck.controller.js";


const router = Router()


//health checks
router.route("/health-check").get(healthCheck)

export default router;