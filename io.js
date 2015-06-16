// 加载File System读写模块
var fs = require('fs');
// 加载编码转换模块
var iconv = require('iconv-lite');

// 文件默认读写编码格式
var defaultEncoding = 'utf-8';
// 获取当前执行的程序文件所在路径
var fileDir = process.cwd();
// 声明要创建和读取的目标文件的文件名
var fileName = 'a.txt';
// 组合路径 + 文件名
var filePath = fileDir + '\\' + fileName;
// 要写到文件里的内容
var fileContent = '为了让大家的笔记本更炫酷更卡哇伊, prince影_子给大家展示下各种外壳膜照片跟实拍图照片哦~\r\n\r\n';

// 写文件
writeFile(filePath, fileContent); //, 'gbk'
// 读文件
readFile(filePath); //, 'gbk'

/**
 * 向指定的文件路径, 写入字符串内容(支持中文)
 * @param filePath 要写入的文件路径, 如果文件不存在则会创建, 如果文件已存在, 则会在文件末尾进行追加
 * @param str 要写入的字符串内容
 * @param encoding 文件编码格式, 默认utf-8
 */
function writeFile(filePath, str, encoding){
    // 把中文转换成字节数组
    var data = iconv.encode(str, encoding || defaultEncoding);

    // appendFile，如果文件不存在，会自动创建新文件
    // 如果用writeFile，那么会删除旧文件，直接写新文件
    fs.appendFile(filePath, data, function(err){
        if(err)
            console.error("写入文件fail " + err + '\n文件路径:' + filePath);
        else
            console.warn("写入文件ok" + '\n文件路径:' + filePath);
    });
}

/**
 * 读取指定文件的内容(支持中文)
 * @param filePath 要读取的文件路径
 * @param encoding 文件编码格式, 默认utf-8
 */
function readFile(filePath, encoding){
    fs.readFile(filePath, function(err, data){
        if(err)
            console.error("啊哦, 读取出错了~ \n错误信息: " + err + '\n文件路径: ' + filePath);
        else{
            // 读取成功时 输出字节数组
            console.warn('>>>>>>>>>>读取文件成功!!! 以下是字节数组内容↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓\n');
            console.log(data);
            console.warn('\n<<<<<<<<<<读取文件成功!!! 以上是字节数组内容↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑');

            // 把数组转换为gbk中文
            var str = iconv.decode(data, encoding || defaultEncoding);
            console.warn('>>>>>>>>>>转换中文成功!!! 以下是转换后的中文内容↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓\n');
            console.log(str);
            console.warn('\n<<<<<<<<<<转换中文成功!!! 以上是转换后的中文内容↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑');
        }
    });
}
