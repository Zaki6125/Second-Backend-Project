const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');
/**
 * yahan logic bana rahay han for signUp...
 */
exports.signup = async (req, res)=>{
    /**
     * create the user object stored in database....
     */
    const userObj = {
        name: req.body.name,
        userId: req.body.userId,
        password: bcrypt.hashSync(req.body.password, 8),// 8 yahan salat hai
        email: req.body.email 

    }

    try {
        const userCreate = await userModel.create(userObj);
        const postResponse = {
        name: userCreate.name,
        userId: userCreate.userId,
        email: userCreate.email,
        createdAt: userCreate.createdAt,
        updatedAt:userCreate.updatedAt,
        message: "Registration Successfully!!!"
    };
    res.status(201).send(postResponse);
    } catch (error) {
        console.log("Error will be occure :" , error.message);
         res.status(500).send({
            message: 'Some internal error while inserting the element'
         })
    }
}
// //yahan check kr raha hon k userId exist krti hai?
// exports.signin = async(req, res)=>{
//     const user = await userModel.findOne({userId: req.body.userId})
//     console.log(user);
//     if(user ==null)
//     {
//         res.status(400).send({
//          message: 'Failded ! user will be nit exists'
//         })
//     }
//     return ;
// }

// //yahan password match kr rahay han...

// const matchPassword =  bcrypt.compareSync(req.body.password , user.password)
// {
//   if(!matchPassword)
//   {
//     res.status(400).send({

//     })
//     return ;
//   }
  

// }



// //return kro JWT token generator as response...
// const token = jwt.sign({id:user.userId}, authConfig.secret,{
//     expiresIn: 60
// })

// res.status(200).send({
//     name: user.name,
//     userId: user.userId,
//     email:user.email,
//     accessToken:token,
//     message:"Login Successfully"
// });

exports.signin = async (req, res) => {
    try {
        // check user exist?
        const user = await userModel.findOne({ userId: req.body.userId });
        
        if (!user) {
            return res.status(400).send({
                message: 'Failed! User does not exist'
            });
        }

        // password check
        const matchPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!matchPassword) {
            return res.status(400).send({
                message: "Invalid Password!"
            });
        }

        // generate JWT token
        const token = jwt.sign({ id: user.userId }, authConfig.secret, {
            expiresIn: 60 // 60 sec
        });

        // send response
        res.status(200).send({
            name: user.name,
            userId: user.userId,
            email: user.email,
            accessToken: token,
            message: "Login Successfully"
        });

    } catch (error) {
        console.log("Error in signin: ", error.message);
        res.status(500).send({
            message: "Some internal error while login"
        });
    }
};
