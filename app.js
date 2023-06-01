const express=require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
app.use(function(req,resp,next)
{
    console.log("in middleware1");
    next();
});
app.use(function(req,resp,next)
{
    console.log("in middleware2");
    next();
});
app.get("/home",function(req,resp)
{
    resp.send("<h1>Welcome to the home page<h1>")
});
app.get("/aboutus",function(req,resp)
{
    resp.send("<h2>Welcome to about us");
})
app.listen(3002,function()
{
    console.log("server started at port 3002");
})
