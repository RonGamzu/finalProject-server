var mysql = require("mysql");
// const { get } = require("./routes/reviews");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Rongam98",
  database: "reviewssite",
});


function getAllUsers(result) {
  pool.query(`select * from users`, (err, res) => {
    if (err) {
      return console.log(err);
    }
    // return res
    result.send(res);
  });
}
function getUser(user_id) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL getUser(?)`,
        [movie_id],
        (error, result, fields) => {
          if (error) {
            reject(error);
          } else {
            //if needed - map the result to the required json
            resolve(result);
          }
        }
      );
    } catch (e) {}
  });
}

function logIn(res, user) {
  // pool.query(`select * from users where email = ? and password = ?`,[user.email, user.password], (err, results) => {
  pool.query(
    `CALL logInUser(?, ?)`,
    [user.email, user.password],
    (err, results) => {
      if (err) {
        // return console.log(err);
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user.`,
          });
        } else {
          res.status(500).send({
            message: "Error retrieving user with name.",
          });
        }
      }
      console.log(results[0]);
      res.send(results[0]);
    }
  );
}

async function getAllMovies() {
  return new Promise((resolve, reject) => {
    try {
      pool.query(`CALL getAllMovies()`, (error, result, fields) => {
        if (error) {
          reject(error);
        } else {
          //if needed - map the result to the required json
          resolve(result);
        }
      });
    } catch (e) {}
  });
}

async function ifEmailExists(user) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL ifEmailExists(?)`,
        [user.email],
        (error, result, fields) => {
          if (error) {
            reject(error);
          } else {
            //if needed - map the result to the required json
            resolve(result);
          }
        }
      );
    } catch (e) {}
  });
}

async function signUpUser(user) {
  console.log("user", user);
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL signUpUser(?,?,?)`,
        [user.userName, user.email, user.password],
        (error, result, fields) => {
          if (error) {
            reject(error);
          } else {
            //if needed - map the result to the required json
            resolve(result);
          }
        }
      );
    } catch (e) {}
  });
}

async function signUpGenres(user_id, genre_id) {
  new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL signUpGenres(?,?)`,
        [user_id, genre_id],
        (error, result, fields) => {
          if (error) {
            reject(error);
          } else {
            //if needed - map the result to the required json
            resolve(result);
          }
        }
      );
    } catch (e) {}
  });
}


async function getMovieDetails(movie_id) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL getMovieDetails(?)`,
        [movie_id],
        (error, result, fields) => {
          if (error) {
            reject(error);
          } else {
            //if needed - map the result to the required json
            resolve(result);
          }
        }
      );
    } catch (e) {}
  });
}

async function getMovieImage(movie_id) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL getMovieImage(?)`,
        [movie_id],
        (error, result, fields) => {
          if (error) {
            reject(error);
          } else {
            //if needed - map the result to the required json
            resolve(result);
          }
        }
      );
    } catch (e) {}
  });
}

async function getMovieReviews(movie_id) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL getMovieReviews(?)`,
        [movie_id],
        (error, result, fields) => {
          if (error) {
            reject(error);
          } else {
            //if needed - map the result to the required json
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}

async function ifMovieExists(movie_name) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL ifMovieExists(?)`,
        [movie_name],
        (error, result, fields) => {
          if (error) {
            reject(error);
          } else {
            //if needed - map the result to the required json
            console.log("my REVIEWS ETL: ", result);
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}
async function addNewReview(review) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL addNewReview(?,?,?,?,?)`,
        [review.movieId, review.userId, review.title, review.rating, review.review],
        (error, result, fields) => {
          if (error) {
            console.log('NOFELLLLLLLLL1231241');
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}


async function addNewMovie(movie) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL addNewMovie(?,?,?,?)`,
        [movie.userId, movie.movieName, movie.synopsis, movie.trailer],
        (error, result, fields) => {
          if (error) {
            console.log('NOFELLLLLLLLL ADD MOVIE');
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}
async function addMovieImage(movieId, coverUrl) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL addMovieImage(?,?)`,
        [movieId, coverUrl],
        (error, result, fields) => {
          if (error) {
            console.log('NOFELLLLLLLLL addMovieImage');
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}
async function addMovieGenre(user_id, genre_id) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL addMovieGenre(?,?)`,
        [user_id, genre_id],
        (error, result, fields) => {
          if (error) {
            console.log('NOFELLLLLLLLL addMovieImage');
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}
async function getAllGenres() {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL getAllGenres()`,
        (error, result, fields) => {
          if (error) {
            console.log('NOFELLLLLLLLL getAllGenres');
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}
async function getAllMoviesIdByGenre(genre_id) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL getAllMoviesIdByGenre(?)`,
        [genre_id],
        (error, result, fields) => {
          if (error) {
            console.log('NOFELLLLLLLLL getAllMoviesOfGenre');
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}
async function getUserFavorites(user_id) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL getUserFavorites(?)`,
        [user_id],
        (error, result, fields) => {
          if (error) {
            console.log('NOFELLLLLLLLL getUserFavorites');
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}
async function updateProfile(user) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL updateProfile(?,?,?)`,
        [user.userName, user.password, user.email],
        (error, result, fields) => {
          if (error) {
            console.log('NOFELLLLLLLLL updateProfile');
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}
async function getAllUserReviews(user) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL getAllUserReviews(?)`,
        [user.id],
        (error, result, fields) => {
          if (error) {
            console.log('NOFELLLLLLLLL getAllUserReviews');
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}
async function getReviewById(reviewId) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL getReviewById(?)`,
        [reviewId],
        (error, result, fields) => {
          if (error) {
            console.log('NOFELLLLLLLLL getReviewById');
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}
async function updateReview(reviewEdit) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `CALL updateReview(?,?,?,?)`,
        [reviewEdit.reviewId, reviewEdit.title, reviewEdit.review, reviewEdit.rating],
        (error, result, fields) => {
          if (error) {
            console.log('NOFELLLLLLLLL getReviewById');
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  });
}



module.exports = {
  getAllMovies,
  getAllUsers,
  getUser,
  logIn,
  signUpUser,
  ifEmailExists,
  signUpGenres,
  getMovieDetails,
  getMovieReviews,
  getMovieImage,
  addNewReview,
  ifMovieExists,
  addNewMovie,
  addMovieImage,
  addMovieGenre,
  getAllGenres,
  getAllMoviesIdByGenre,
  getUserFavorites,
  updateProfile,
  getAllUserReviews,
  getReviewById,
  updateReview
};
