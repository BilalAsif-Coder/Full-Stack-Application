
import express from "express";
import protect from "../middleware/authMiddleware.js";
import { signup, login } from "../controllers/authController.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Protected route accessed successfully",
    userId: req.userId,
  });
});

export default router;
