// 引用http模块
var http = require("http");

// 创建服务端 监听2014端口
http
    .createServer(function (request, response) {
        // 输出网页头信息，200状态
        response.writeHead(200, {
            // 网页MIME类型
            "content-type": "text/html"
        });

        response.write("<h1>Hello world123!</h1>");

        console.log("new visitor!");

        // 结束输出 
        response.end();
    })
    .listen();
