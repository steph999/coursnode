const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ hi: 'there'});
});







// Lancement du serveur sur le port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Le serveur est en route');
});