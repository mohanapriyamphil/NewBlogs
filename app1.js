//stage 2 of node app (http after installing express server)

const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000);

//renders routes in the screen
app.get('/', (req, res) => {
    // res.send('<p>Welcome</p>')
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
})

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})