// ����httpģ��
var http = require("http");

// ��������� ����2014�˿�
http
    .createServer(function (request, response) {
        // �����ҳͷ��Ϣ��200״̬
        response.writeHead(200, {
            // ��ҳMIME����
            "content-type": "text/html"
        });

        response.write("<h1>Hello world123!</h1>");

        console.log("new visitor!");

        // �������
        response.end();
    })
    .listen();