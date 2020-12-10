import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true, // not avaiable because we need to use npm i mongoose-unique-validator
    },
    phone: {
        type: Number, //   NOTICE NOT INTEGER
    },
    password:{
        type: String,
        required: true,
    },
    // previousPurchased:{
    //     type: Array,
    // },
    // wishList:{
    //     type: Array,
    // },
    date: {
         type: Date, default: Date.now 
    },
    
});