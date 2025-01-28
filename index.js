const fs = require("fs");
const express = require("express");
const path = require("path");
const app = require("app");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/projeto3', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public/pages', 'projeto3.html'));
})

app.post('/user', (req, res)=> {
    const {txtNome, txtEmail} = req.body;
    // Caminho para arquivo JSON
    const FilePath = path.join(__dirname, 'users.json');
})

 // Leitura do arquivo existente ou criação de um novo array vazio
 let users = [];
 if (fs.existsSync(filePath)) {
     const data = fs.readFileSync(filePath, 'utf-8');
     if (data.trim() !== '') { // Verifica se o arquivo não está vazio
         try {
             users = JSON.parse(data); // Tenta parsear o JSON
         } catch (err) {
             console.error("Erro ao analisar o JSON:", err);
             users = []; // Reverte para array vazio se o JSON for inválido
         }
     }
 }

 // Adicionar o novo usuário
 const newUser = { nome: txtNome, email: txtEmail };
 users.push(newUser);

 // Salvar no arquivo JSON
 fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');

 // Responder ao cliente
 res.status(201).send(`Usuário ${txtNome} criado com o e-mail ${txtEmail}!`);

const PORT = 3000;

app.listen(PORT, ()=>{
 console.log("Servidor rodando na porta 3000");
});


