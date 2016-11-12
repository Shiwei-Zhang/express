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

//定制404提示，当请求的路径没有路由能处理的时候，返回你请求的页面不存在
//all匹配所有的方法
//*匹配所有的方法
app.all('*',function(req,res){
    res.end('你请求的页面不存在')
});




//从上到下执行路由，匹配上执行此方法，匹配不上继续往下匹配
//请求方式和路径一样的情况下，执行前面的方法

//使用gitbash 发起post请求
//curl -X POST http://localhost:9090/login

//如果请求出错，配置环境变量  git bin


//npm install nrm -g  切换源

//npm ls
//nrm test
//nrm user <>

/*
 npm install nrm -g
 nrm add zhufeng http://172.18.0.199
 nrm use zhufeng

*/
app.listen(8080);