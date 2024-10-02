//Atividade 2
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo! FrostSalazar');
  } else if (req.url === '/sobre') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Sobre mim: gosto garotas, rpg e games de sobrevivência e mundo aberto ');
  } else if (req.url === '/contato') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contato: +55 (42) 9840217-08');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(8080, () => {
  console.log('Servidor rodando na porta 8080 ou para a funçao contato "http://localhost:8080/contato"ou para a funçao contato "http://localhost:8080/contato"');
});
//node server.js
