var mysql = require("mysql");
const { get } = require("./routes/reviews");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Rongam98",
  database: "reviewssite",
});



async function getMovieReviews(movie_id) {
    return "Ron!";
}