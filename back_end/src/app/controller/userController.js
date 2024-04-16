const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET_KEY,{
        expiresIn: 3 * 24 * 60 * 60
    })
};

class userController {
    //[POST] /signup
    async signup_post(req, res){
        const {email, password} = req.body;
        try{
            const user = await User.signup(email, password);
            const token = createToken(user._id);

            res.status(200).json({email,token});
        }catch (e){
            res.status(400).json({error: e.message});
        }
    }

    // [GET] /signup
    signup_get(req, res){
        res.render('signup');
    }


    //[POST] /login
    async login_post(req, res){
        const {email, password} = req.body;
        try{
            const user = await User.login(email, password);
            const token = createToken(user._id);

            res.status(200).json({email,token});
        }catch (e){
            res.status(400).json({error: e.message});
        }
    }

    // [GET] /login
    login_get(req, res){
        res.render('login');
    }

    // [GET] /logout
    logout(req, res){
        res.send('logout');
    }
}

module.exports = new userController();