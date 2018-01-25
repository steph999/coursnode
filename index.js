const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);
//console.developers.google.com

// Lancement du serveur sur le port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Le serveur est en route');
});