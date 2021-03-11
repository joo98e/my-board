// EXPRESS 서버 사용
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// db
const mdb = require('./config/db_con');
const data = fs.readFileSync('./config/database.json');
const infos = JSON.parse(data);

const connection = mysql.createConnection({
    host: infos.host,
    port: infos.port,
    user: infos.user,
    password: infos.password,
    database: infos.database
});
connection.connect();

const app = express();

// PORT
const port = process.env.PORT || 6880;

// REST API에서는 일반적으로 JSON 타입의 데이터를 주고 받는다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/board', (req, res) => {
    connection.query(
        "SELECT * FROM board;",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});


app.listen(port, () => console.log(`Listening on port ${port}`));