import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel'

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
    let newUser = new User(req.body)
    // whatever data we are going to send FROM the request is going to be inserted inside of that particular variable
    newUser.save( (err, User) => { // if there is an error..
        if(err){
            res.send(err);
        }
        res.json(User);
     });
};

export const getUsers = (req, res) => {
    User.find( {}, (err, User) => {  // .find() is something that MonogoDB has that will find all the players we have
        if(err){
            res.send(err);
        }
        res.json(User);
     });
};

export const getUserWithId = (req, res) => {
    User.findById(req.param.UserId, (err, User) => {  // when we send a request to get a specifc player ID 
        // we want it to look for that specifc ID
        if(err){
            res.send(err);
        }
        res.json(User);
     });
};

export const updateUser = (req, res) => {
    User.findOneAndUpdate( {_id: req.params.UserId}, req.body, {new: true}, (err, User) => { // first we find the id that we want to update then (req.body)
        // we pass what we have as data in our body - I believe it means that all other data will be the same except for the data that is getting updating
        // the reason we put { new: true } is so that our updated player gets displayed and not the previous one
        if(err){
            res.send(err);
        }
        res.json(User);
     });
};

export const deleteUser = (req, res) => {
    User.remove({_id: req.params.UserId}, (err, User) => {  // when we send a request to get a specifc player ID 
        // we want it to look for that specifc ID
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted user!' });
     });
};