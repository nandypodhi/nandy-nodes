const UserCollection =  require('../Models/User.model')
const bcrypt = require('bcryptjs');

//can new data to the user 
const create = async function(req,res,next){

    try{

        const data = req.body
        const salt = await bcrypt.genSalt(10); 
        data.password = await bcrypt.hash(data.password, salt);
    const result =   await UserCollection.create(data)
        res.status(200).json({
            message:'user created successfully',
            result 
        })
    }
    catch(error){
        next(err)
    }
}

const view = async function(req,res,next){

    try{

       const result =  await UserCollection.find({}, '-password'); // Exclude passwords from response
        res.status(200).json({
            message:'user created successfully',
            result 
        })
    }
    catch(error){
        next(err)
    }
}


const viewById = async function(req,res,next){

    try{
        const id = req.params.id
       const result =  await UserCollection.findById(id, '-password'); // Exclude passwords from response
        res.status(200).json({
            message:'user viewed successfully',
            result 
        })
    }
    catch(error){
        next(err)
    }
}


const update = async function(req,res,next){

    try{
        const id = req.params.id
        const data = req.body

        if (data.password) {
            const salt = await bcrypt.genSalt(10);
            data.password = await bcrypt.hash(data.password, salt);
        }

       const result =  await UserCollection.findByIdAndUpdate(id,data, { new: true }).select('-password');
        
       const newData = await UserCollection.findById(id)
        res.status(200).json({
            message:'user updated successfully',
            newData 
        })
    }
    catch(error){
        next(err)
    }
}


const deleteUser= async function(req, res,next) {
    try {
        const id = req.params.id;
        const result = await UserCollection.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json({
            message: 'User deleted successfully',
            deletedProduct: result
        });
    } catch (error) {
        next(err)
    }
}



module.exports = {create,view,viewById,update,deleteUser}