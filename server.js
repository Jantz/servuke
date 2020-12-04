
const http = require('http');

const app = http.createServer((request, response) => {
    console.log('listening on port: 3000')
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`can you seee thisssss?`);
    response.end();
});

app.listen(3000);