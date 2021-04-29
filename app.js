const express = require('express');
const morgan = require('morgan');
const layout = require('./views/main');
const { db, Page, User } = require('./models');

const port = 3000;

const app = express();

// MIDDLEWARE
// logging info middleware

app.use(morgan('dev'));

// body parsing middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

db.authenticate()
    .then(() => {
        console.log('connected to the database');
    })

app.get('/', (req,res) => {
    console.log('hello')

    res.send(layout()); //we want res.send(layout())
})

const connections = async () => {
    await db.sync({ force: true })

    app.listen(port, () => {
        console.log(`listening on ${port}`);
    })
}
connections();