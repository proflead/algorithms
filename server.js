const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.js': 'application/javascript',
  '.html': 'text/html',
  '.css': 'text/css'
};

http.createServer((req, res) => {
  let filePath = req.url === '/' ? 'index.html' : path.join(__dirname, req.url);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      const ext = path.extname(filePath);
      const mime = mimeTypes[ext] || 'text/plain';
      res.writeHead(200, { 'Content-Type': mime });
      res.end(content);
    }
  });
}).listen(process.env.PORT || 3000, () => {
  console.log('Server running at http://localhost:3000');
});
