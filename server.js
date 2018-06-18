const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello express</h1>');
});

app.get('/json', (req, res) => {
    res.send({
        name: "Eksa Pramindanata",
        age: 19
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "Unable to fulfill request."
    })
});

app.listen(3000);