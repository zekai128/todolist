const mongoose = require('mongoose');

/*
    This is the mongoose model for the posts that will
    be stored in the App.
*/
const listItemSchema = new mongoose.Schema({
    id: String,
    title: String,
    completed: Boolean
});

module.exports = listItem = mongoose.model('listItem', listItemSchema);