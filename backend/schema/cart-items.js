const { Schema,model, Types } = require("mongoose");

const cartSchema = new Schema({
    customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

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
    }  
})








