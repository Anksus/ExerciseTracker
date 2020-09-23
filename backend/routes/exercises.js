const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercies) => res.json(exercies))
    .catch((err) => res.status(400).send("ERROR" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  const duration = Number(req.body.duration);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then((exer) => res.json(exer))
    .catch((err) => res.status(400).json("ERROR" + err));
});

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exer) => res.json(exer))
    .catch((err) => res.status(400).json(err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exer) => res.json("Exercise deleted!"))
    .catch((err) => res.status(400).json(err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exer) => {
      exer.username = req.body.username;
      exer.description = req.body.description;
      exer.duration = req.body.duration;
      exer.date = req.body.date;

      exer
        .save()
        .then(() => res.json("Updated exercise!"))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
