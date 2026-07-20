const { Schema,model, Types } = require("mongoose");

const indexSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 500
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required:true,
    },
    imageUrls: {
        type: [String],
        default: [],
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
  },
})

const productSchema = model('PRODUCTS', indexSchema)
module.exports = productSchema