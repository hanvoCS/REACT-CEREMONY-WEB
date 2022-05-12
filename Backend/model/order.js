const mongoose = require('mongoose'); 
//shema for the Order 
const orderSchema = new mongoose.Schema({ 
   
    userId: { type: String,required: true}, 
    Event_Type: {type: String, required: true }, 
    Date: {type: String, required: true},
    City: {type: String, required: true},
    Location: {type: String, required: true},
    Number_Guests: {type: Number, required: true},
    Service_Class: {type: Number, required: true}, 
    Name: {type: String, required: true}, 
    Phone: {type: String, required: true},
    payment: {type: Number, required: true},
    status: {type: String, default: "pending"}
}); 

module.exports = mongoose.model('Order', orderSchema);