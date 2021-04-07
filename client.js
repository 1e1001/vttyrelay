const net = require("net");

const stdout = process.stdout;
const stdin = process.stdin;

const port = 1065;
const hostIP = process.argv[2]

const client = net.connect(port, hostIP, function() {
	stdout.write("\x1b[2Jestablished connection\n");
});

client.pipe(stdout);
stdin.pipe(client);

client.on("end", function() {
	stdout.write("\x1b[2Jlost connection\n");
	process.exit(0);
});
