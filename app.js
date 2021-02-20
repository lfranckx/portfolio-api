const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/email', (req, res) => {
    res.status(200).send('GET request successful');
    res.status(500).send('Internal Error');
    res.status(400).send('Wrong request information');
    res.status(204).end();
});

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
});