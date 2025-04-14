const mongoose = require('mongoose')

const CartSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.ObjectId, ref : "User"
            
        },
        product:{
            type: mongoose.Schema.ObjectId, ref : "Product"
            
         }
        }
)   


const Cart = mongoose.model('Cart', CartSchema)

module.exports =Cart