var express = require("express");
var router = express.Router();

const queryFunctions = require("../database.js");

router.get("/", async function (req, res, next) {
  // res.send(moviesData()); //not work
  // getMovies(res)
  let movies = await queryFunctions.getAllMovies();
  res.status(200).send(movies);
});

router.get("/:id", async function (req, res, next) {
    const imagePath = await queryFunctions.getMovieImage(req.params.id);
    res.status(200).send(imagePath);
});


module.exports = router;