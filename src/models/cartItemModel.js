const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,required:true, ref: 'User',},
    product:{type:mongoose.Schema.Types.ObjectId,required:true, ref: 'Product',},
    quantity:{type:Number,min:0},
},
{
    timestamps:true,versionKey:false
}
);

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
