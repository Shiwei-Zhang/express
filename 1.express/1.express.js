var express=require('express');

var app=express();


//当客户端通过GET的请求方式，访问/路径的时候
app.get('/',function(req,res){//请求方式和请求路径
    res.end('首页')
});
app.get('/login',function(req,res){
    res.end('登录页')
});
app.get('/user',function(req,res){
    res.end('用户主页')
});
app.listen(8080);