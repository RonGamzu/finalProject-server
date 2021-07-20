var express = require("express");
var router = express.Router();

// const reviewsData = require("../DAL/reviews.json");
const queryFunctions = require("../database");

// router.get("/", function (req, res, next) {
//   res.send(reviewsData);
// });

router.post("/", async function (req, res, next) {
  await queryFunctions.addNewReview(req.body);
  res.status(200).send('succsess');
});

router.get("/movie/:id", async function (req, res, next) {
  try {
    const reviews = await queryFunctions.getMovieReviews(req.params.id);
    res.status(200).send(reviews);
  } catch (error) {
    console.log("getMovieReviewsss", error);
    res.status(500).send(error);
  }
});
router.get("/user/:reviewId", async function (req, res, next) {
  try {
    const reviews = await queryFunctions.getReviewById(req.params.reviewId);
    res.status(200).send(reviews);
  } catch (error) {
    console.log("getMovieReviewsss", error);
    res.status(500).send(error);
  }
});
router.post("/user", async function (req, res, next) {
  try {
    const reviews = await queryFunctions.getAllUserReviews(req.body);
    console.log('lets see what we got: ', reviews);
    res.status(200).send(reviews);
  } catch (error) {
    console.log("getMovieReviewsss", error);
    res.status(500).send(error);
  }
});
router.put("/update", async function (req, res, next) {
  try {
    const reviewId = await queryFunctions.updateReview(req.body);
    console.log('lets see what we got: ', reviewId);
    res.status(200).send(reviewId);
  } catch (error) {
    console.log("getMovieReviewsss", error);
    res.status(500).send(error);
  }
});
// router.get("/movies/movieId", function (req, res, next) {
//     const reviews = reviewsData.filter(item => item.movie_id === req.params.userId )
//     res.send(reviews);
// });
module.exports = router;
