const mongoose = require('mongoose');

const listItemSchema = new mongoose.Schema({
    id: String,
    title: String,
    completed: Boolean
});

module.exports = listItem = mongoose.model('listItem', listItemSchema);