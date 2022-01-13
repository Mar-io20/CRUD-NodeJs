const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crudgames",
});

app.get("/", (req, res) => {
  let SQL =
    "INSERT INFO (name, const, category) VALUES ('far Cry 5', '120', 'Ação')";

  db.query(SQL, (err, result) => {});
});

//pegar valores
app.get("/", (req, res) => {
  res.send("hello word, Node e javaScript e tsx");
});

app.post; //enviar valores
app.delete; //Detetar
app.put; //para editar
app.listen(3001, () => {
  console.log("rodando servidor");
});
