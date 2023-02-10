const Exercise = require("../models/exerciseModel");
const mongoose = require("mongoose");

// get all exercises
const getExercises = async (req, res) => {
  const exercises = await Exercise.find({}).sort({ createdAt: -1 });

  res.status(200).json(exercises);
};

// get a single exercise
const getExercise = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Exercise not found" });
  }

  const exercise = await Exercise.findById(id);

  if (!exercise) {
    return res.status(404).json({ error: "Exercise not found" });
  }

  res.status(200).json(exercise);
};

// create a new exercise
const createExercise = async (req, res) => {
  const { title, load, reps } = req.body;

  // add doc to db
  try {
    const exercise = await Exercise.create({ title, load, reps });
    res.status(200).json(exercise);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a exercise

// update a exercise

module.exports = {
  createExercise,
  getExercises,
  getExercise,
};
