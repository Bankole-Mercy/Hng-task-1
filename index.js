const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');



app.use(cors())
app.use(bodyParser.json())

const info = {
    slackusername: "MercyB",
    backend: true,
    age: 27,
    bio: "I am a beautiful lady who is a software engineer",
  };

  app.get("/get-info",(req ,res) => 
  {
    //   
      return res.status(200).json({...info})
  }) 

  
  
  





app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });



