const CartCollection = require('../Models/Cart.model')



const create = async function(req,res,next){

    try{

        const data = req.body
         const result =   await CartCollection.create(data)
        res.status(200).json({
            message:'Cart created successfully',
            result 
        })
    }
    catch(error){
        next(err)
    }
}

const view = async function(req,res,next){

    try{

       const result =  await CartCollection.find({}).populate('user',"name email").populate('product',"name description category amount stockLeft")
        res.status(200).json({
            message:'Cart Viewed successfully',
            result 
        })
    }
    catch(error){
        next(err)
    }
}


const viewById = async function (req, res,next) {
    try {
        const userId = req.params.id; 
        const result = await CartCollection.find({ user: userId }) 
            .populate('user', 'name email') 
            .populate('product', 'name description category amount stockLeft'); 
        
        

        res.status(200).json({
            message: 'Cart viewed successfully',
            result
        });

    } catch (error) {
        next(err)
    }
};



const update = async function(req,res,next){

    try{
        const id = req.params.id
        const data = req.body
       const result =  await CartCollection.findByIdAndUpdate(id,data)
       const newData = await CartCollection.findById(id)
        res.status(200).json({
            message:'Cart updated successfully',
            newData 
        })
    }
    catch(error){
        next(err)
    }
}


const deleteCart = async function(req, res,next) {
    try {
        const id = req.params.id;
        const result = await CartCollection.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({
                message: 'Cart not found'
            });
        }

        res.status(200).json({
            message: 'Cart deleted successfully',
            deletedProduct: result
        });
    } catch (error) {
        next(err)
    }
};



module.exports = {create,view,viewById,update,deleteCart}