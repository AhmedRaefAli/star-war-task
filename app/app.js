const express=require('express');
const bodyParser = require('body-parser');
const starWarsRoutes = require('./routes/starWarsRoutes');

const app = express();

app.use(bodyParser.json()); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/starWars', starWarsRoutes);

app.use((error, req, res, next) => {
    console.log(error.message);
    if (res.headerSent) {
        return next(error);
    }
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message|| 'An unknown error occurred!', data: data });
});

app.listen(3000,()=>{
    console.log('listening to port 3000');
});