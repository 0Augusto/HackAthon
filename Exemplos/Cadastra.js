const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuração do body-parser para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [];

// Rota para cadastro de usuários
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  
  // Validação básica (certifique-se de adicionar validações mais robustas em um ambiente de produção)
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  // Verifica se o usuário já está cadastrado
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(409).json({ message: 'Usuário já cadastrado com este email.' });
  }

  // Cria um novo usuário e o adiciona à lista de usuários
  const newUser = { username, email, password };
  users.push(newUser);

  res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

