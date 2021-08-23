import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './models';
import passport from 'passport';
import session from 'express-session';

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());

app.use(passport.session());

app.use(cors())

db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
  })
}).catch((err) => {
  console.log('Database Error:' + err);
})

app.get('/', (req, res) => {
  res.json('Hello world');
})

app.post('/users', (req, res) => {
  db.User.create({
    firstName: 'Jordan',
    lastName: 'Miller',
  })

})

app.get('/users', (req, res, next) => {
  res.json()
})
