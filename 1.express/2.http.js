var http=require('http');
var url=require('url');

//  /首页
//  /login 登录
//  /user 用户主页

http.createServer(function (req,res) {
    //取得了客户端的请求路径
    var pathname=url.parse(req.url).pathname;  //url=路径名+查询字符串
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    if(pathname=='/'){
        res.end('首页');
    }else if(pathname=='/login'){
        res.end('登录');
    }else if(pathname=='/user'){
        res.end('用户主页');
    }else {
        res.end(`Cannot ${req.method} ${pathname}`);//${pathname} 变量
    }

}).listen(9090);
