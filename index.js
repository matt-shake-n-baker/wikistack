const express = require('express');
const morgan = require('morgan');

const port = 3000;

const app = express();

// middleware 

// logging info middleware

app.use(morgan('dev'));

// body parsing middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.send('hello world');
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
})