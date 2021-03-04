const express = require('express');
const app = express();
const port = 6880;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});
