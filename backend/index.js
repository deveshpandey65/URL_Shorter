const connection=require('./connection')
const Schema=require('./Schema')
const url = require('./Module').url
const express=require('express')
const app=express();
const PORT=8000;
const Post_Req=require('./Requests/Post_Res')
const Get_Req=require('./Requests/Get_Res')
const middle=require('./Middleware')

connection();
middle(app);
Post_Req(app,url);
Get_Req(app,url)


app.listen(PORT, (req, res) => {
    console.log("SERVER STARTED at port:",PORT)
})



