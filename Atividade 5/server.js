//Atividade 5
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Página Inicial</title></head>
      <body><h1>Bem-vindo à minha página!</h1></body>
    </html>
  `);
});

app.get('/api/data', (req, res) => {
  res.json({
    nome: 'Frost Salazar',
    idade: 25,
    profissao: 'Playboy Bilionário e Filantropo'

  });
});

app.listen(8080, () => {
  console.log('Servidor Express rodando na porta 8080 ou acesse "http://localhost:8080/api/data" ');
});


//npm install
//node server.js