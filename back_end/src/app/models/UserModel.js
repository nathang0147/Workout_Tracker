const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {isEmail} = require('validator');
const validator = require('validator');



const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,// cant not use [true,'some message']. It must be find out in the error.code in authController.js
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password:{
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    }
});

//static method to signup user
userSchema.statics.signup = async function(email, password){
    if(!email || !password){
        throw Error('all fields are required');
    }

    if(!validator.isEmail(email)){
        throw Error('Please enter a valid email');
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol');
    }

    const existUser = await this.findOne({email});
    if(existUser){
        throw Error('Email is already registered');
    }else {
        const salt = await bcrypt.genSalt();
        const passwordHashed = await bcrypt.hash(password, salt);

        const user = await this.create({email, password : passwordHashed});
        return user;
    }
}

userSchema.statics.login = async function(email, password){

    if(!email || !password){
        throw Error('all fields are required');
    }

    if(!validator.isEmail(email)){
        throw Error('Please enter a valid email');
    }

    const user = await this.findOne({email});

    if(!user){
        throw Error('incorrect email');
    }

    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');

}


const User = mongoose.model('User', userSchema);

module.exports = User;