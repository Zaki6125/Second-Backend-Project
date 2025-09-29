const express = require('express');
const route = express.Router();
const idea_controller = require('../controller/ideas.controller');
const idea_middleWare = require('../middleware/ideas.mw');
const authMiddleware = require('../middleware/authMiddleware');

route.get('/ideas' , [authMiddleware.verification],idea_controller.getAllIdeas);
route.get('/ideas/:id' , idea_controller.getIdeaBasedOnId);
/**
 * ya route hai creating a new idea...
 */
route.post('/ideas' ,idea_middleWare.validatePostRequestMiddleWare, idea_controller.newIdeaController);
/**
 * ya route hai updating the route based on id
 */
route.put('/ideas/:id' ,idea_middleWare.validatePutRequestMiddleWare, idea_controller.updateIdeaController);
/**
 * ya route hai deleting the route based on id..
 */
route.delete('/ideas/:id' , idea_controller.deleteIdeaBasedOnId);

module.exports = route;