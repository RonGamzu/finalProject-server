var express = require("express");
var router = express.Router();

const queryFunctions = require("../database.js");

router.get("/", async function (req, res, next) {
  const movies = await queryFunctions.getAllMovies();
  res.status(200).send(movies);
});

router.get("/:id", async function (req, res, next) {
  const movie = await queryFunctions.getMovieDetails(req.params.id);
  res.status(200).send(movie);
});

router.get("/movieName/:movieName", async function (req, res, next) {
  const movieId = await queryFunctions.ifMovieExists(req.params.movieName);
  res.status(200).send(movieId);
});

router.post("/", async function (req, res, next) {
  const movieId = await queryFunctions.addNewMovie(req.body);
  const id = movieId[0][0].id
  const cover = req.body.coverUrl;
  console.log('movieId::::::: ', id);
  console.log('coverUrl:::::::', cover);
  await queryFunctions.addMovieImage(id, cover);
  for (let i = 0; i <  req.body.genres.length; i++) {
    await queryFunctions.addMovieGenre(id, req.body.genres[i]);
  }
  res.status(200).send(movieId);
});


// router.get("/genres/:genre", function (req, res, next) {
//   const moviesGenre = movieGenresData
//     .filter((item) => item.genre_id === req.params.genre)
//     .map((movie) => movie.movie_id);
//   console.log(moviesGenre);
//   const movies = moviesData.filter((item) => moviesGenre.includes(item.id));
//   res.send(movies);
// });
module.exports = router;
