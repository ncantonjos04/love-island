const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const {insertContestant, getAllContestants} = require('./supabase.js');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});


app.get('/contestants', async (req, res) => {
    const data = await getAllContestants();
    res.json(data);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});