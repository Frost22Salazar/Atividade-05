//Atividade 4
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo!');
  } else if (url.startsWith('/saudacao/')) {
    const nome = url.split('/')[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Olá, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(8080, () => {
  console.log('Servidor rodando na porta 8080 ou acesse "http://localhost:8080/saudacao/henrique (no nome altere para seu nome)"');
});
//node server.js
