const mongoose=require('mongoose');
const userSchema=mongoose.Schema({

    firstName: {type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,unique:true},
    password:{type:String,required:true},
    address:{type:String},
    phoneNumber:{type:String},
},{
    timestamps:true,versionKey:false
    }
)
const user=mongoose.model('user',userSchema);
module.exports=user;