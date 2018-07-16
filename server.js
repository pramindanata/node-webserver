const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurYear', () => new Date().getFullYear());

app.set('view engine', 'hbs');

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;
    
    console.log(log);
    fs.appendFile('server.log', `${log}\n`, (err) => {
        if (err)
            throw err;
    });

    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

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

app.get('/project', (req, res) => {
    res.render('project.hbs', {
        title: 'Portofolio',
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

app.listen(port, () => {
    console.log(`Listening to port ${port}.`);
});