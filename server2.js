var http = require('http');


http.createServer(function(request, response){
	console.log('er was een request');
    response.writeHead(200, {'Content-Type': 'text/json'}); // 200 = alles is goed gegaan
    var json = JSON.stringify({
    	tekst: "Dit is JSON!"
    });
response.end(json);
}).listen(3000);

console.log('De server luistert op port 3000');