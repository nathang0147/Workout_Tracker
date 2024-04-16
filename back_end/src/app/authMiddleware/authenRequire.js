const express = require('express');
const jwt = require('jsonwebtoken');

const authenRequire = async (req, res, next) => {
    //vertify token
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({message: 'Unauthorized'});
    }

    const token = authorization.replace('Bearer ', '');

    try{
        const {_id} = jwt.verify(token, process.env.JWT_SECRET);
        req.user =  await User.findOne({_id}).select('_id')
        next();

    }catch(err) {
        console.log(err);
        return res.status(401).json({message: 'Request is not authorized'});
    }

};

module.exports = authenRequire;