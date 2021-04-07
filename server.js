const net = require("net");
const fs = require("fs");
const key = require("node-key-sender");

const port = 1065;

const readStream = fs.createReadStream("/dev/tty");

const server = net.createServer(function (socket) {
	socket.on("end", function () {

	});
	readStream.pipe(socket);
	socket.on("data", function (data) {
		key.sendText(data);
	});
});
server.listen(port, function() {
	console.log("started server");
});
