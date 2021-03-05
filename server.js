const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 6880;

// REST API에서는 일반적으로 JSON 타입의 데이터를 주고 받는다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// 백단 6880에서 /board
app.get('/board', (req, res) => {
    res.send([
        "name1",
        "name2",
        "name3",
        "name4",
    ]);
});


app.listen(port, () => console.log(`Listening on port ${port}`));

