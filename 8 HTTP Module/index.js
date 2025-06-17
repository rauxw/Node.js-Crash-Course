import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "html");
  res.write("<h1>Server running</h1>");
  res.write("<h2>HEllo</h2>");
});

server.listen(3000, () => {
  console.log("Server running on 3000");
});
