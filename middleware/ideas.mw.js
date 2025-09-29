exports.validatePostRequestMiddleWare = (req, res, next)=>{
    const req_obj = req.body;
  
   
    //validate for idea_name
    if(!req_obj["idea_name"])
    {
        return res.status(400).send({
            message: 'Bad Request body find "idea_name" has not passed or empty ' ,
        });
    }

    //validate for author name 
    if(!req.body["author_name"])
    {
        return res.status(400).send({
            message: `Bad Request body find "Author_name" has not passed or empty `, 
        });
    }

    //validate for idea_descrirption
    if(!req.body["idea_descrirption"])
    {
        return res.send(400).send({
            message: `Bad Request body find "idea_descrirption" has not passed or empty`,
        });
    }
    next();
};


exports.validatePutRequestMiddleWare = (req, res)=>{
    const req_obj = req.body;
    //lets validate id field 
     if(!req_obj["id"])
    {
        return res.status(400).send({
            message: 'Bad Request body find "id" has not passed or empty ' ,
        });
    }
    //validate id in params and id in body
    if(req_obj["id"] != req.params.id)
    {
        return res.status(400).send({
            message: `Bad Request "id" field in body ${req_obj["id"]} and paramas will be ${req.params.id}`,
        });
    }
    //validate for idea_name
    if(!req_obj["idea_name"])
    {
        return res.status(400).send({
            message: 'Bad Request body find "idea_name" has not passed or empty ' ,
        });
    }

    //validate for author name 
    if(!req.body["author_name"])
    {
        return res.status(400).send({
            message: `Bad Request body find "Author_name" has not passed or empty `, 
        });
    }

    //validate for idea_descrirption
    if(!req.body["idea_descrirption"])
    {
        return res.send(400).send({
            message: `Bad Request body find "idea_descrirption" has not passed or empty`,
        });
    }
    next();
}