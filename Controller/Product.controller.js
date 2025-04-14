const ProductCollection = require('../Models/product.model')



const create = async function(req,res,next){

    try{

        const data = req.body
    const result =   await ProductCollection.create(data)
        res.status(200).json({
            message:'product created successfully',
            result 
        })
    }
    catch(error){
        next(err)
    }
}

const view = async function(req,res,next){

    try{

       const result =  await ProductCollection.find({})
        res.status(200).json({
            message:'product created successfully',
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
       const result =  await ProductCollection.findById(id)
        res.status(200).json({
            message:'product viewed successfully',
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
       const result =  await ProductCollection.findByIdAndUpdate(id,data)
       const newData = await ProductCollection.findById(id)
        res.status(200).json({
            message:'product updated successfully',
            newData 
        })
    }
    catch(error){
        next(err)
    }
}


const deleteProduct = async function(req, res,next) {
    try {
        const id = req.params.id;
        const result = await ProductCollection.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.status(200).json({
            message: 'Product deleted successfully',
            deletedProduct: result
        });
    } catch (error) {
        next(err)
    }
};



module.exports = {create,view,viewById,update,deleteProduct}