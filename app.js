var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const moviesRouter = require("./routes/movies");
const reviewsRouter = require("./routes/reviews");
const logInRouter = require("./routes/logIn");
const signUpRouter = require("./routes/signUp");
const imagesRouter = require("./routes/images");
const genresRouter = require("./routes/genres");

var app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/ron", indexRouter);
app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/logIn", logInRouter);
app.use("/signUp", signUpRouter);
app.use("/images", imagesRouter);
app.use("/images", imagesRouter);
app.use("/genres", genresRouter);

module.exports = app;
