const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

app.use(morgan('dev'));

// Data Parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
    // TODO:
    // send email here
    res.json({ message: 'message received' })
})

app.get('/', (req, res) => {
    res.send('Oven is cooking!')
});

app.listen(8000, () => {
    console.log('Express server is listening on port 8000');
});