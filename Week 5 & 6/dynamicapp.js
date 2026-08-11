const express = require('express');

const app = express();
const PORT = 3000;

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.get('/flights/:from/:to', (req, res) => {
    res.send(`Flight from ${req.params.from} to ${req.params.to}`);
});

app.get('/search', (req, res) => {
    res.json({
        category: req.query.category,
        sort: req.query.sort
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
