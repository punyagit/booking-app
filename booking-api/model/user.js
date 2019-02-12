const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    cardNo: { type: String },
    address: { type: String }

});

let Users = mongoose.model('User', userSchema);

module.exports = Users;





// seeding database -----

// Users.create(
//     {
//         cardNo: '4596',
//         address: '20 eleanor drive '
//     },
//     {
//         cardNo: '4096',
//         address: '28 eleanor drive '

//     }

// )

// let admin = Users(
//     {
//         cardNo: '4596',
//         address: '21 eleanor drive '
//     },
//     // {
//     //     cardNo: '4096',
//     //     address: '23 eleanor drive '
//     // }
// )

// admin.save();

