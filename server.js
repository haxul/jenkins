const http = require('http');

const hostname = '82.148.29.151';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello JENKINS');
});

server.listen(port, hostname, () => {
  console.log();
});
