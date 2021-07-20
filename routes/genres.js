var express = require("express");
var router = express.Router();

const queryFunctions = require("../database.js");

router.get("/", async function (req, res, next) {
  const movies = await queryFunctions.getAllGenres();
  res.status(200).send(movies);
});
router.get("/:genreId", async function (req, res, next) {
  const movies = await queryFunctions.getAllMoviesIdByGenre(req.params.genreId);
  res.status(200).send(movies);
});
router.get("/userFavorites/:userId", async function (req, res, next) {
  const favoritesGenres = await queryFunctions.getUserFavorites(req.params.userId);
  res.status(200).send(favoritesGenres);
});
module.exports = router;
