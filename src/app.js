require("dotenv/config");
const express = require("express")
const { connect } = require("mongoose")
const router = require("./routes")
const cookie = require("cookie-parser")
const PORT = process.env.PORT

const app = express()

// 
const bootsrapt = async () => {
    try {
      await connect("mongodb://127.0.0.1:27017/imtixon")    
      console.log("database connected");

      app.use(express.json());
      app.use(express.urlencoded({extended: true}));
      app.use(cookie());
      app.use(router);

      app.listen(PORT, () => {
          console.log(`Server is listening on port ${PORT}`);
        });
      
    } catch (error) {
      console.log(error);
    }
}

bootsrapt()

  