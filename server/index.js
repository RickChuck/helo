require('dotenv').config()
const express = require("express");
const massive = require("massive");
const bodyParser = require('body-parser')
const session = require('express-session')
const controller = require('./controller')

const app = express();

let {
    PORT,
    CONNECTION_STRING
} = process.env;

let authBypass = async (req, res, next) => {
    if(process.env.NODE_ENV) {
        const db = req.app.get('db')
        let user = await db.session_user();
        req.session.user = user[0]
        next();
    } else {
        next();
    }
}

app.post('/auth/callback', (req, res) => {
    
})

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => app.set('db',db) )

app.get('/', (req, res) => {
    res.send('Hello')
});

app.listen(PORT, () => console.log(`I'm listening on:${PORT}`))