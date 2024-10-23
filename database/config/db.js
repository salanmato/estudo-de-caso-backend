const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // seu login no mysql
    password: "toor", // sua senha no mysql
    database: "db_backend",
    port: 3306
})

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

module.exports = db;