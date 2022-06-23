const express = require("express");

const app =express();
const errorMiddleware = require ("./middleware/error")

app.use(express.json())

//Route Imports

const product = require("./routes/productRoute");

app.use("/api/v1",product);

//middleware for errors

app.use(errorMiddleware);
console.log("hello")



module.exports = app

