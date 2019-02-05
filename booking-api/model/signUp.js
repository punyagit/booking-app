const mongoose = require('mongoose');

const signUpSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    cardNo: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: String,
        required: true,
    }
})

const Residents = mongoose.Model(Resident, signUpSchema)