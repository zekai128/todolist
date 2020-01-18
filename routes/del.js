var express = require('express');
var router = express.Router();
const listItem = require('../models/listItem');

/*
  API route that deletes the todo with the given ID,
  then returns a list of all the todos in the database.
*/
router.post('/', async function(req, res, next) {
  console.log(req.body);
  const delId = req.body.id;
  await listItem.deleteOne({id: delId});
  const updatedTodoList = await listItem.find();
  res.send(updatedTodoList);
});

module.exports = router;
