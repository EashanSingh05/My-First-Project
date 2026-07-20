const productSchema = require('../schema/product-schema');  
const userSchema = require('../schema/user-schema');

const addProduct = async(req,res)=>{
    const {productName,description,price,stock,imageUrls} = req.body
    try {
        const addOneProduct = await userSchema.create({
            productName,
            description,
            price,
            stock,
            imageUrls,
        })

        res.status(201).json(addOneProduct)
    } catch (error) {
        console.log(error)

        res.status(500).json({
            message:'Something Went Wrong',
            error: error.message,
        })
    }
}

module.exports = {
    addProduct,
}




