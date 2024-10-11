const http = require("http");
const urlPath = require("url");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    const parsedUrl = urlPath.parse(req.url);

    const filePath = path.join(__dirname, parsedUrl.path);

    fs.readFile(filePath, (error, data) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      if (error) {
        res.end(
          "<h3 style='color:red;'>The page you requested is not available<h3>"
        );
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
  });
