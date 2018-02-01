const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');


mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);
//console.developers.google.com

// Lancement du serveur sur le port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);