const express = require('express')
const db = require('./database/config/db')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3002

app.use(cors())
app.use(bodyParser.json())

//ver todos os professores cadastrados
app.get('/projeto-escolar/professor', (req, res) => {
    db.query("SELECT * FROM tbl_professor", (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.post('/projeto-escolar/professor', (req, res) => {
    const novaEntrada = req.body
    db.query('INSERT INTO tbl_professor (nome, cpf, data_nascimento, logradouro, bairro, cidade, estado, cep, email) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)',[novaEntrada.nome, novaEntrada.cpf, novaEntrada.dataNascimento, novaEntrada.logradouro, novaEntrada.bairro, novaEntrada.cidade, novaEntrada.estado, novaEntrada.cep, novaEntrada.email], (err, result) => {
        if(err){
            console.log(console.err);
            
        }else{
            res.status(201).json(novaEntrada)
        }
    })
})

/*
app.get('/projeto-escolar/professor/:id', (req, res))

app.put('/projeto-escolar/professor/:id')

app.delete('/projeto-escolar/professor/:id') */

app.listen(PORT, () => console.log(`Servidor aberto na porta: ${PORT}`))