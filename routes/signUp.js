var express = require("express");
var router = express.Router();

const queryFunctions = require("../database.js");

router.post("/", async function (req, res, next) {
  try {
    const exist = await queryFunctions.ifEmailExists(req.body);
    if (!exist[0].length) {
      const newUser = await queryFunctions.signUpUser(req.body);
      for (let i = 0; i < req.body.genres.length; i++) {
        queryFunctions.signUpGenres(newUser[0][0].id, req.body.genres[i]);
        console.log("succsess");
      }
      res.status(200).send(newUser);
    } else {
      res.status(200).send([[]]);
    }
  } catch (e) {
    res.status(500).send({ err: e.message });
  }
});

router.put("/update", async function (req, res, next) {
  try {
    const user = await queryFunctions.updateProfile(req.body);
    res.status(200).send(user)
  } catch (e) {
    res.status(500).send({ err: e.message });
  }
});






module.exports = router;
