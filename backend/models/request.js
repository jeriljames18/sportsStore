const mongoose = require("mongoose");
const Schema = mongoose.Schema
const requestSubmitSchema = new Schema({
    productName:{
        type:String,
        minLength:1,
        required:true
    },
    productBrand:{
        type:String,
        minLength:1,
        required:true
    },
    productColor:{
        type:String,
        minLength:1,
        required:true
    },
    productSize:{
        type:String,
        minLength:1,
        required:true
    },
})
exports.RequestSubmit = mongoose.model('Form',requestSubmitSchema)