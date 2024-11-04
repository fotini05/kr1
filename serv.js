const http = require('http');

const server = http.createServer((req, res) => {
  let data = '';

  req.on('data', chunk => {
    data += chunk;
  });

  req.on('end', () => {
    const { A, x } = JSON.parse(data);


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Данные успешно получены и обработаны\n');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
