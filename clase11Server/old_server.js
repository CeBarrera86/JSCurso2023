// Importa el módulo http de Node.js
const http = require('http');

// Crea un servidor HTTP
const server = http.createServer((req, res) => {
  // Configura la respuesta HTTP con el código de estado 200 y el tipo de contenido
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Escribe el mensaje de respuesta
  res.end('¡Hola desde el servidor HTTP de Node.js!\n');
});

// Escucha en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});