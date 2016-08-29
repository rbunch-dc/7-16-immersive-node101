var http = require("http"); //Include the HTTP module provided by core node
var fs = require("fs"); //Inlude the file system module provided by core

function renderHomePage(req, res){
	var homePageHtml = fs.readFileSync('homePage.html');
	res.writeHead(200,{'content-type': 'text/html'})
	res.end(homePageHtml);
}

var server = http.createServer(function(req, res){
	console.log("Someone connected to the server!");
	console.log(req.url);
	if(req.url == '/'){
		renderHomePage(req, res);
	}else if(req.url == '/logo.pngg'){
		var img = fs.readFileSync('logo.png');
		res.writeHead(200,{'content-type':'image/png'});
		res.end(img, 'binary');
	}else{
		res.writeHead(404,{'content-type': 'text/html'})
		res.end('Sorry this page does not exist.');
	}
});

server.listen(8002); //This will make the node.js server we created above
//Listen for traffic on port 8002. Whenever someone makes a requets at
// that port, the function inside createserver will be run.
console.log("OUr server is listening on port 8002...");