//Atividade 3
const http = require('http');
const gerarNumeroAleatorio = require('./utils');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo! FrostSalazar');
  } else if (req.url === '/numero') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`O numero aleatorio: ${gerarNumeroAleatorio()}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(8080, () => {
  console.log('Servidor rodando na porta 8080 ou acesse "http://localhost:8080/numero"');
});
//node server.js
