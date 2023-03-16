import mongoose from "mongoose";


const UserSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    password:{
        type:String,
        required:true,
        minLength:8
    },
    
    name:{
        type:String,
        required:true
    },
    bookings:[
        {
type:mongoose.Types.ObjectId,ref:"Booking"
    },
],
    

});

export default mongoose.model("User",UserSchema)