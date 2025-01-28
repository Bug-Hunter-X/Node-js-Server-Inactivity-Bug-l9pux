const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Keep-Alive Timeout setting for HTTP requests
//This prevents keep-alive connections from holding resources indefinitely
server.keepAliveTimeout = 5000; // Set timeout to 5 seconds

server.listen(8080);
console.log('Server is running on port 8080');
// Add an event listener to handle server errors 
server.on('error', (err) => {
  console.error('Server error:', err);
});
// Add an event listener for closing connections
server.on('close', () => {
  console.log('Server closed');
});