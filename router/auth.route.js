// const express = require('express');
// const route = express.Router();
// const authController = require('../controller/auth.controller');
// const verifyMiddleware = require('../middleware/verifyUserReq');
// route.post("/auth/signup" , [verifyMiddleware.verifyUserReq], authController.signup);
// route.post("/auth/signin" , authController.signin);
// module.exports = route;

const express = require('express');
const route = express.Router();

const authController = require('../controller/auth.controller');
const verifyMiddleware = require('../middleware/verifyUserReq');

// signup route
route.post("/auth/signup", [verifyMiddleware.verifyUserReq], authController.signup);

// signin route (path galat likha tha, yahan /signin hoga)
route.post("/auth/signin", authController.signin);

module.exports = route;
