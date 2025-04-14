const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required:[true,'Please enter User name'],
            minlength: 3
        },
        email:{
            type: String,
            required:[true,'Please enter email'],
            unique:true,
            match:  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w{2,}$/
        },
        password:{
            type: String,
            required:[true,'Pleaser enter password']
        },
        
    
    }
  
)   


const User = mongoose.model('User', userSchema)

module.exports =User