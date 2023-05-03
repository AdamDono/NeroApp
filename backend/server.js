const express = require("express");
var cors = require("cors");
const routes = require("./routes/routes")


// require("").config();
const app = express();

var corsOptions = {
    origin: "*",
  
  };
  
  app.use(express.json());
  app.use(cors(corsOptions));
  
  app.listen(8080, () => {
    console.log("Server running on port 8080");
  });

  app.use('/',routes)