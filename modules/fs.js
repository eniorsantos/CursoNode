const fs = require("fs");
const path = require("path");

//criar pasta

fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso");
});

fs.writeFile(
  path.join(__dirname, "/teste", "teste.html"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("arquivo criado com sucesso");
  }
);

fs.appendFile(
  path.join(__dirname, "/teste", "teste.html"),
  " hello world!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("arquivo modificado com sucesso");
  }
);

fs.readFile(
  path.join(__dirname, "/teste", "teste.html"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log(data);
  }
);
