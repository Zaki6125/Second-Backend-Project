const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');

const verification = (req, res, next)=>{
    //verification

    //fetch kro access token from headers
    const token = req.header('x-access-token');
    if(!token)
    {
        res.status(403).send({
            message: "token will be not provided"
        });
    }

    jwt.verify(token , config.secret , (err, decode)=>{
        if(err)
        {
            res.status(401).send({
                message: 'User Unauthorized!!!'
            });
        }
        next();
    })

}
module.exports = {
    verification : verification
}