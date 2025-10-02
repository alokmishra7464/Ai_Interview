const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// register
exports.register = async(req, res) => {
    const {email, password} = req.body;

    const exists = await User.findOne({email});
    if(exists) return res.status(400).json({message: "User already exists."});
    
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({email, password: hashedPass});
    await newUser.save();

    res.status(201).json({message : "User registered."});
}

// Login
exports.login = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({message: "Invalid Email"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({message: "Invalid password"});

    const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: '1d'});

    res.json({token});
};
