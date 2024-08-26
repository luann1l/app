const express = require('express');
const path = require('path')

const app = express();
const port = 5500;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'PesoIdeal_Consulta.html'));

});

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);

});
