const http = require('http');

const hostname = '82.148.29.151';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello jenkins is updated as soon as you commit!!!!!!!!!!!!!');
});

server.listen(port, hostname, () => {
  console.log();
});
