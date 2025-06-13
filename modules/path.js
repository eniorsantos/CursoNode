const path = require("path");

//nome do base name atual

console.log(path.basename(__filename));

//nome do diretorio atual

console.log(path.dirname(__filename));

//extenção do arquivo

console.log(path.extname(__filename));

//cria objeto Path

console.log(path.parse(__filename));

// juntar caminhos de arquivos

console.log(path.join(__dirname, "teste", "test.html"));
