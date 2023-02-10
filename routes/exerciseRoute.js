const express = require("express");
const {
  createExercise,
  getExercises,
  getExercise,
} = require("../controllers/exerciseController");

const router = express.Router();

// GET all exercises
router.get("/", getExercises);

// GET a single exercise
router.get("/:id", getExercise);

// POST a new exercise
router.post("/", createExercise);

// DELETE a exercise
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a exercise" });
});

// UPDATE a exercise
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a new exercise" });
});

module.exports = router;
