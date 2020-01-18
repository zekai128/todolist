const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://zekai123:zekai123@cluster0-sljg2.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });
        console.log("MongoDB Connected!")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;