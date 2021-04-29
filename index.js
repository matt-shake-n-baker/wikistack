const express = require('express');
const morgan = require('morgan');
const layout = require('./views/main')

const app = express();

// MIDDLEWARE
// logging info middleware

app.use(morgan('dev'));

// body parsing middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    console.log('hello')

    res.send(layout()); //we want res.send(layout())
})

const port = 3000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
})