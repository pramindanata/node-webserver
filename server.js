const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home',
        content: 'Hello...',
        curYear: new Date().getFullYear(),
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About',
        curYear: new Date().getFullYear(),
    });
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