const jwt = require('jsonwebtoken');
const productModel = require('../models/product.schema');

// task: #2
exports.taskTwo = async(req,res)=>{
    try {
        
       const productData = await productModel.find({},{_id:0,name:1,price:1});

        res.status(200).json({message:productData});

    } catch (error) {
        res.status(404).json({message:error.message});
    };
};

// task: #3
exports.taskThere = (req,res)=>{
    try {

        const userId = 12345678910;
        const secretKey = "mszaman";

        const generateToken = (userId,secretKey)=>{
            return jwt.sign({userId},secretKey,{ expiresIn: '1h' });
        };

        const token = generateToken(userId,secretKey)

        res.status(200).json({message:token}); 

    } catch (error) {
        res.status(404).json({message:error.message});
    }
};

// task: #4
exports.taskFour = (req,res)=>{
    try {

        res.status(200).json({message:"JWT token verifie successfully."});

    } catch (error) {
        res.status(404).json({message:error.message});
    }
}; 