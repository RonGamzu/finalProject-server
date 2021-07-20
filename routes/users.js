var express = require('express');
var router = express.Router();

const usersData = require('../DAL/users.json')
const queryFunctions = require('../database')


router.get('/', function(req, res, next) {
  // res.send(usersData);
  queryFunctions.getAllUsers(res)
});

router.get('/:id', function(req, res, next) {
  const user = usersData.find(item => item.id === req.params.id)
  res.send(user);
});

router.post('/', function(req, res, next) {
  const user = usersData.find(item => item.id === req.params.id)
  res.send(user);
});

module.exports = router;