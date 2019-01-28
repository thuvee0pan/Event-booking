const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const mongoose = require("mongoose");
const isAuth = require('./middleware/is-auth');

const gSchema = require('./graphQL/schema/index');
const gResolvers = require('./graphQL/resolvers/index');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');;
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
})
app.use(isAuth)
app.use('/graphql',
    graphqlHTTP({
    schema:gSchema,
    rootValue: gResolvers,
    graphiql:true
}));

mongoose.connect(`mongodb+srv://${process.env.MANGO_USER}:${process.env.PASSWORD}@cluster0-xpsmf.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
    .then(() => {
        app.listen(8000);
})
.catch (err => {
    console.log(err);
    
})
