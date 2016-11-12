var express=require('express');

var app=express();

/*
* 1.中间件可以给req res 赋值
* 2.中间件里面可以结束响应
*
* */


app.use(function(req,res,next){
    req.money=100;
    next();
});

app.use(function(req,res,next){
    req.money -=30;
    next();
});

app.use(function(req,res,next){
    req.money -=30;
    //如果next没有参数，会继续执行后续的路由和正常的中间件，如果传了参数，表示出错了，会调用正常的路由和中间件，交由错误处理中间件来处理
    next('错误：失火了');
});

app.use(function(req,res,next){
    req.money -=30;
    next();
});


app.get('/money',function(req,res){
    console.log('农民收到'+req.money);
    res.end()
});

//错误处理中间件 ：4个参数
app.use(function(err,req,res,next){
    console.log(err);
    res.end('error')
});

app.listen(9090);