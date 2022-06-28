const app =require("./app");
const mongoose = require('mongoose')
const dotenv=require("dotenv").config()
const connectDatabase = require("./config/database")

//Handlin uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});

//config

// dotenv.config({path:"backend/config/config.env"})

//connecting to database

// connectDatabase()

// const server =app.listen(process.env.PORT,()=> {

//     console.log(`Server is working on http://localhost:${process.env.PORT}`);
// });


//unhandled promise rejection

const url = process.env.DB_URI
console.log(url)
mongoose.connect("mongodb+srv://sneka:eGzSgZ8N3bnuqbNg@cluster0.5evyr.mongodb.net/SnekaEcommerce?retryWrites=true&w=majority")
.then(() => {
    console.log("db got connected")
})
.then(() => {
    app.listen(5050,() => console.log("listening to 5050"))
})
.catch(err => console.log("error : ",err.message))

app.get('/',(req,res) => res.send("hello from 5050"))
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });
  

  /**
   * Connect String : 
   *              mongodb+srv://sneka:eGzSgZ8N3bnuqbNg@cluster0.5evyr.mongodb.net/SnekaEcommerce?retryWrites=true&w=majority
   * Password : 
   *          eGzSgZ8N3bnuqbNg
   */