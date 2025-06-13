const http = require("http");

const path = require("path");

const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  {
    if (req.url === "/home") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Teste de Servidor</h1>");
    }

    if (req.url === "/api") {
      const _json = [
        {
          id: "0",
          autenticacao: "F$rt4580",
        },
        {
          serial: "124578",
          key: "12345qwet",
        },
      ];
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(_json));
    }

    if (req.url === "/api2") {
      fs.readFile(
        path.join(__dirname, "/teste", "teste.json"),
        "utf-8",
        (error, data) => {
          if (error) {
            return console.log("Erro: ", error);
          }

          const arquivo = JSON.parse(data);

          //console.log(data);
          res.writeHead(200, { "content-type": "application/json" });
          res.end(JSON.stringify(arquivo));
        }
      );
    }
  }
});

server.listen(port, () => console.log("Servidor ativo!"));
