//models ko export kr raha hon yahan ;
const ideas = require('../models/ideas.models')

//then total data dakh raha hon models ke file mai kitna 3 id han tw ham 3 saye start kryn gaye 
//ku k agr post saye id ko increase kryn tw woo 3 saye hoo
let id = 3;

//controller mai fecth all the ideas in this system get api
exports.getAllIdeas = (req, res) => {
    res.status(200).send(ideas);
};

exports.getIdeaBasedOnId = (req, res)=>{

    const get_idea = req.params.id;
    if(ideas[get_idea])
    {
        res.status(200).send(ideas[get_idea]);
    }
    else{
        console.log(`The server is not response on this PORT ${get_idea} number`);
        res.status(404).send({
            message: `Ideas of this port is ${get_idea} are not present `,
        })
    }
};

/**
 * now create the new idea controller. post
 * 
 */

exports.newIdeaController = (req , res)=>{
    //id increment kre ga ya
    id++;
    //yahan read kr rahay han req body ;
    idea_object = req.body;
    idea_object["id"] = id ;
    ideas[id] = idea_object;
    //return the response 
    res.status(201).send(idea_object);
};

/** 
 * know update kro ideas kooo  put
 */
exports.updateIdeaController = (req, res)=>{
    const idea_id = req.params.id ;// yahan URL saye id nikal raha hon
    if(ideas[idea_id])
    {
        const idea_obj = req.body //body saye update lyna 
        ideas[idea_id] = idea_obj;
        res.status(idea_obj).send(idea_obj);
    }
    else
    {
        res.status(404).send({
            message : `ya update nahi ho sakta yahan ${idea_id}`,
        });
    }
};

/**
 * delete the idea based on the id 
 */
exports.deleteIdeaBasedOnId = (req, res)=>{
    const delIdea_id = req.params.id ; //yahan bhi URL saye id nikal rahay han
    if(ideas[delIdea_id])
    {
        delete ideas[delIdea_id];
        res.status(200).send(`Yes this ideas id : ${delIdea_id} are deleted `);
    }
    else
    {
        res.status(404).send(`Idea id will be not found ${delIdea_id}`);
    }
};