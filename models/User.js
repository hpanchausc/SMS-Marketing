/*
Inside we will create a model class(aka collection) for Users
*/
const mongoose=require('mongoose');
const {Schema} = mongoose;


//defining a Schema for the User Model/Collection. We want all records inside this collection to have the same properties
const userSchema=new Schema({
    googleID: String,
    credits: {type: Number, default:0}
});

mongoose.model('users',userSchema);