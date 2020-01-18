var express = require('express');
var router = express.Router();
const listItem = require('../models/listItem');

/*
  API Route that saves the JSON data send, and returns
  a list of all the todos stored in the database.
*/

router.post('/', async function(req, res, next) {
  console.log(req.body);
  newListItem = listItem(req.body);
  await newListItem.save();
  res.send(await listItem.find());
});

module.exports = router;
