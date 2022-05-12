const mongoose = require('mongoose'); 
//schema for the user 
const userSchema = new mongoose.Schema({ 
    user_name: {type: String, default: null, required: true}, 
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: Number, required: true},
    IsAdmin: {type: Boolean, default: false},
}); 

module.exports = mongoose.model('user', userSchema);