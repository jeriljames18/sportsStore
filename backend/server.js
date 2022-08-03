require("dotenv").config();
const express = require('express');

const connectDB = require('./config/db');
const products = require('./routes/products')

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products',products);

const {RequestSubmit} = require('./models/request.js')

app.post('/submitForm',(req,res)=>{
    let form = new RequestSubmit(req.body)

    form.save(error=>{
        if(error){
           return res.send(500).json(error)
        }else{
            res.status(201).json({
                message:"New Request Created",
                data:form
            })
        }
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))