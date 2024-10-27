const express = require('express')
const db = require('./database/config/db')
const cors = require('cors')

const app = express()
const PORT = 3002


app.use(cors());
app.use(express.json())

//ver todos os professores cadastrados
app.get('/projeto-escolar/professor', (req, res) => {
    db.query("SELECT * FROM tbl_professor", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//inserir novos professores
app.post('/projeto-escolar/professor', (req, res) => {
    const novaEntrada = req.body //pegando o conteúdo enviado pelo usuário
    console.log('Headers:', req.headers); // Print do cabeçalho
    console.log('Body:', req.body); // Print do corpo da requisição

    db.query("INSERT INTO tbl_professor (nome, cpf, data_nascimento, logradouro, bairro, cidade, estado, cep, email) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [novaEntrada.nome, novaEntrada.cpf, novaEntrada.dataNascimento, novaEntrada.logradouro, novaEntrada.bairro, novaEntrada.cidade, novaEntrada.estado, novaEntrada.cep, novaEntrada.email],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Erro ao inserir os dados' });
            } else {
                return res.status(201).json({ message: 'Novo professor cadastrado' });
            }
        }
    );

})

//Ver só 1 professor
app.get('/projeto-escolar/professor/:id', (req, res) => {
    db.query(`SELECT * FROM tbl_professor WHERE id = ${req.body.id}`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.put('/projeto-escolar/professor/:id', (req, res) => {
    const novaEntrada = req.body
    console.log('Headers:', req.headers); // Verifique os cabeçalhos
    console.log('Body:', req.body); // Verifique o corpo da requisição
    db.query(`UPDATE tbl_professor SET nome = '${novaEntrada.nome}', cpf = '${novaEntrada.cpf}', data_nascimento = '${novaEntrada.dataNascimento}', logradouro = '${novaEntrada.logradouro}', bairro = '${novaEntrada.bairro}', cidade = '${novaEntrada.cidade}', estado = '${novaEntrada.estado}', cep = '${novaEntrada.cep}', email = '${novaEntrada.email}' WHERE id = ${novaEntrada.id};`,
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Erro ao inserir os dados' });
            } else {
                return res.status(201).json({ message: 'Cadastro de professor atualizado' });
            }
        }
    );
})


//deletar um professor
app.delete('/projeto-escolar/professor/:id', (req, res) => {
    db.query(`DELETE FROM tbl_professor WHERE id = ${req.body.id}`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(PORT, () => console.log(`Servidor aberto na porta: ${PORT}`))