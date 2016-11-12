var http=require('http');
var url=require('url');

//  /首页
//  /login 登录
//  /user 用户主页

http.createServer(function (req,res) {
    //取得了客户端的请求路径
    var pathname=url.parse(req.url).pathname;  //url=路径名+查询字符串
    if(pathname=='/'){
        res.end();
    }




});
