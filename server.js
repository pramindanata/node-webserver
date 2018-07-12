const express = require('express');
const hbs = require('hbs');

let app = express();


hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurYear', () => new Date().getFullYear());

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    next();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home',
        content: 'Hello...',
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About',
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