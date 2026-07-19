const {Schema,model} = require('mongoose')

const indexSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    }
}) 

const adminSchema = model('ADMIN',indexSchema)
module.exports = adminSchema