const userModel = require('../models/user.model');
verifyUserReq = async (req, res, next) =>{

    if(!req.body.name)
    {
       res.status(404).send({
        message: "Failed ! username is not provided" 
       });
    }
    if(!req.body.userId)
    {
        res.status(404).send({
            message: "Failed ! userID is not provided"
        })
    }
    if(!req.body.email)
    {
        res.status(404).send({
            message: "Failed ! email is not provided"
        });
    }

    //check kro userID phly exist krti hai k nahi
    const user = await userModel.findOne({userId: req.body.userId})
    {
        if(user !=null)
        {
            res.status(404).send({
                message: "Yup user ID already exist"
            })
        }
        next();
    }

    const userEmail = await userModel.findOne({email: req.body.email})
    {
        if(userEmail !=null)
        {
            res.status(404).send({
                message: "Yup your email is alreday exists"
            })
        }
    }
}
module.exports = {
    verifyUserReq : verifyUserReq
};