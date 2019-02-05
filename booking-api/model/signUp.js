
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
        unique: true
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
        required: true
    }
});

let Residents = mongoose.model('Resident', signUpSchema)

module.exports = Residents;

// {
//     "userName": "punya",
//     "cardNo":"4056",
//     "address":"30 eleanor drive glenfield",
//     "email": "preety@hotmail.com",
//     "phoneNo": "043225986"
// }