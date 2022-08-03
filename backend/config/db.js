require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Successfully connected to MongoDB")
    } catch (error) {
        console.error("Connection Failed")
        process.exit(1)
    }
}

module.exports = connectDB;