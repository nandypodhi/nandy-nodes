const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

//const ProductCollection = require('../MongoDb/Models/product.model')



const productRouter = require ('./Routes/Product')
const userRouter = require('./Routes/User')
const cartRouter = require('./Routes/Cart')
const prodealRouter = require('./Routes/Prodeal');



app.use(express.json())
app.use('/product',productRouter)    
app.use('/user',userRouter)
app.use('/cart',cartRouter)
app.use('/api', prodealRouter);


app.use('*',function(req,res,next){
    const err = new Error(`Can't find ${req.originalUrl} on the server`)
    err.status = 'fail'
    err.statusCode = 404
    next(err)
})

app.use((error,req,res,next)=>{
    error.statusCode =error.statusCode || 500;
    error.status =error.status || 'error';
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
    })
})

mongoose.connect('mongodb+srv://nandhiniarthigha:2LJPNQPf5S9w5DQI@sample1.kjx5o.mongodb.net/?retryWrites=true&w=majority&appName=sample1')
.then(()=>{
    console.log('Database connected successfully')

    
app.listen(port,()=>{  
    console.log(`the port number is: ${port}`)
})

})
.catch((err)=>{
    console.log(err)
    console.log(err.message)
})


