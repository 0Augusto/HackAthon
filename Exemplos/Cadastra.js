const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Configuração do body-parser para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conexão com o banco de dados MongoDB
require('./db');

// Definição do modelo do usuário
const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String,
});

// Rota para cadastro de usuários
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

