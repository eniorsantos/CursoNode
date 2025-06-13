const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  }

  if (req.url === "/users") {
    const user = [
      {
        nome: "Jonh",
        email: "jonh@ig",
      },
      {
        nome: "Joan",
        email: "joan@ig",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));
