const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const bid = JSON.parse(fs.readFileSync('data/bid.json', 'utf8'));

app.get('/api/bid', (req, res) => {
    res.send(JSON.stringify(bid));
});

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});
