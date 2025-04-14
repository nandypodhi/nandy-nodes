const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required:[true,'Please enter product name'],
        },
        description:{
            type: String,
            required:[true,'Please enter product name'],
        },
        category:{
            type: String,
            required:[true,'Please enter product name'],
        },
        amount:{
            type: Number,
            required:true,
            default:0,
        },
        stockLeft:{
            type: Number,
            required:true,
            default:0,
        },
        image:{
            type: String,
            required:false,
        },
    
    },
    {
        timestamps:true,
    }
)   


const Product = mongoose.model('Product', productSchema)

module.exports =Product