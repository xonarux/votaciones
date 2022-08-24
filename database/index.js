const mongoose = require("mongoose");
const config = require("../config");

const dbString = config.dbString;

const init = async () =>{
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect(dbString, options)
        console.log("Connected to the database successfully");
    } catch (error) {
        console.log(`Error message: ${error.message}`);
    }
}

module.exports = {init};