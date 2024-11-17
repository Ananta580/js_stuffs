const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

// Create an Web server
http
  .createServer((req, res) => {
    // Parse the request URL to get file name
    const parsedUrl = url.parse(req.url);
    const filePath = path.join(__dirname, parsedUrl.pathname);

    // Read the requested file with exact path
    fs.readFile(filePath, (error, data) => {
      if (error) {
        // Handle file not found error
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(
          "<h3 style='color:red;'>The page you requested is not available</h3>"
        );
        return;
      }

      // Serve the file content
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
  });
