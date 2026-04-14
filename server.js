const express = require('express');
const path = require('path');
const app = express();

// 🔥 SOLO esto (sin fallback)
const PORT = process.env.PORT;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});