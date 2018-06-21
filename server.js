const express = require('express');
const hbs = require('hbs');

let app = express();

app.use(express.static(__dirname + '/public'));

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

app.listen(3000, () => {
    console.log("Listening to port 3000.");
});