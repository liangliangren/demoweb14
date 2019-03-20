const fs=require('fs');
const http=require("http");

var app=http.createServer(function(req,res){
	//request 请求
	//response 响应
	res.write("aa")
	res.end()
})
app.listen(3000,function(){
	console.log("服务器已经启动")
})
