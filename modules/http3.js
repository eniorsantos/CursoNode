const express = require("express");
const path = require("path");
const fs = require("fs");
const UserModel = require("../src/models/user_models");

const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

const port = 8080;

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users: users });
});

app.get("/home", (req, res) => {
  res.status(200).send("<h1>Hello World</h1>");
});

app.get("/api", (req, res) => {
  fs.readFile(
    path.join(__dirname, "/teste", "teste.json"),
    "utf-8",
    (error, data) => {
      if (error) {
        return console.log("Erro: ", error);
      }

      const arquivo = JSON.parse(data);
      res.status(200).send(arquivo);
    }
  );
});

// cadastrar usuario
app.post("/users", async (req, res) => {
  try {
    const user = UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// atualizar dados parcialmente

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//atualizar dados totalmente

app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// deletar usuario

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).send(`Usuario ${user.fistname} deletado `);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// buscar todos os usuarios

app.get("/users", async (req, res) => {
  try {
    const user = await UserModel.find({});
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// buscar usuario por id

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//rodar servidor

app.listen(port, () => console.log(`Rodando na porta ${port}`));
