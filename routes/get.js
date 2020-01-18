var express = require('express');
var router = express.Router();
const listItem = require('../models/listItem');

/*
  API route that returns all of the todos stored in the database. 
*/
router.get('/', async function(req, res, next) {
  const listItems = await listItem.find();
  res.send(listItems);
});

module.exports = router;
