const express = require("express");
const res = require("express/lib/response");
const server = express();

server.use(express.json());
const proficoes = [
  "frontEnd",
  "BackEnd",
  "Fullstack",
  "DBA",
  "Software Developer",
  "Data Analitics",
];

//retorna uma profição
server.get("/proficoes/:index", (requisicao, resposta) => {
  const { index } = requisicao.params;

  return res.json(proficoes[index]);
});

//retornar todos as profiçoes
server.get("/proficoes", (requisicao, resposta) => {
  return proficoes.json(proficoes);
});

// Adicionar nova profção
server.post("/proficoes", (requisicao, resposta) => {
  const { name } = requisicao.body;
  proficoes.push(name);

  return resposta.json(cursos);
});

//Atualizar profiçao

server.put("/proficoes/:index", (requisicao, resposta) => {
  const { index } = requisicao.params;
  const { name } = requisicao.body;

  proficoes[index] = name;

  return resposta.jsonp(proficoes);
});

//deletar uma profição
server.delete("/proficoes:/index", (requisicao, resposta) => {
  const { index } = requisicao.params;

  proficoes.splice(index, 1);
  return resposta.json({ message: "O curso foi deletado" });
});

server.listen(3000);
