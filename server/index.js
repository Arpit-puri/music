require('dotenv').config();
require("express-async-error");//no need to use try catch will take care of it
const express = require('express');
const cors= require('cors');
const app= express();
const port = process.env.PORT ||8001;
const userRoutes = require('./routes/users');
const songRoutes = require("./routes/song")
const authRoutes= require('./routes/auth');
require('./db');
app.use(cors());
app.use(express.json());


/* */
app.use("/api/users",userRoutes);
app.use("/api/login",authRoutes);
app.use("/api/songs",songRoutes);


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});