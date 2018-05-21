const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const booking = JSON.parse(fs.readFileSync('data/booking.json', 'utf8'));

app.get('/api/booking', (req, res) => {
    res.send(JSON.stringify(booking));
});

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});
