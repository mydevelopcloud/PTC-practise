import * as http from "http";

const port = 3000;

const requestHandler = (request, response) => {
  console.log(request.url)
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Node.js Server!');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('err:', err)
  }
  console.log(`server is listening on ${port}`)
})
