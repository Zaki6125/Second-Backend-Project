/**
 * This  is start point of this app
 */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

(
    async()=>{
      try
      {
          await mongoose.connect(process.env.MONGODB_URI);
          console.log("MongoDB will be connected!!!");
      }catch(err)
      {
        console.log("Error will be occure :" , err);
      }
      
    }
)();
const PORT = 7070;
//JS data jason formate mai accept krta hai jason formate mtlab objects...

app.use(express.json());
//ya hota hai login k leay 
const morgan = require('morgan');
app.use(morgan('dev'));
//ab yahna router ko strich kr rahay han
const idea_route = require('./router/ideas.routes');
app.use("/ideas_app/v1", idea_route);

const auth_route = require('./router/auth.route');
app.use("/ideas_app/v1" , auth_route);
//yahn bus check kr raha th k ya sahi hai k bhi nahi...
app.get("/", (req, res) => {
  res.send("API is working ✅");
});


app.listen(PORT , ()=>{
    console.log(`your server will be started on this ${PORT}`);
})