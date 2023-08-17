const mongoose = require('mongoose');

// Substitua a URL pelo seu URL de conexão MongoDB
const mongoURI = 'mongodb://localhost:27017/meu_banco_de_dados';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conectado ao MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Erro de conexão com o MongoDB:', err);
});

