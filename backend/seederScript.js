require('dotenv').config();

const productsData = require('./data/Products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async() =>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Data successfully imported");
        process.exit();
    } catch (error) {
        console.error("Error with data",error);
        process.exit(1);
    }
}


importData();