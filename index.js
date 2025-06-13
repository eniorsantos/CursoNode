const dotenv = require("dotenv");

dotenv.config();

//const { Person } = require("./person");

//require("./modules/path");

//require("./modules/fs");

//require("./modules/http");

//require("./modules/http2");

//const person = new Person("Teste1");

require("./modules/http3");

const connectToDatabas = require("./src/database/connect");

connectToDatabas();
