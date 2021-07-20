var express = require('express');
var router = express.Router();

const usersData = require('../DAL/users.json')
const queryFunctions = require('../database')
const logIn = queryFunctions.logIn

router.post('/', function(req, res, next) {
    if (!req.body) {
        res.status(500).send('error!')
    }
    logIn(res ,req.body)
  });
  
  module.exports = router;