const fs = require("fs");


const readStream = fs.createReadStream("/dev/tty");
const writeStream = fs.createWriteStream("/dev/tty");
readStream.on("data", function(s) {
	if (s.indexOf("*") !== -1) {
		writeStream.write("real\n");
	}
});
