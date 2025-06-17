import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "Good", { "content-type": "html" });
    res.end("<h1>Home</h1>");
  } else if (req.url === "/about") {
    res.writeHead(201, "Good", { "content-type": "html" });
    res.end("<h1>About</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(201, "Good", { "content-type": "html" });
    res.end("<h1>Contact</h1>");
  } else {
    res.writeHead(404, "Bad", { "content-type": "html" });
    res.end("<h1>Bad Gateway</h1>");
  }
  console.log(req.url);
});

server.listen(8000, () => {
  console.log("Server up !");
});
