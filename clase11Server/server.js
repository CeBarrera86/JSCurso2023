const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta GET para visualizar el HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', (req, res) => {
  console.log('Datos recibidos en el servidor:');
  console.log('Usuario: ' + req.body.username);
  console.log('Contraseña: ' + req.body.password);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});