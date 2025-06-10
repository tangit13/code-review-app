const express = require('express');
const cors = require('cors'); // ✅ Added for CORS

const app = express();

app.use(cors()); // ✅ Enable CORS for all origins (or restrict below)
app.use(express.json());

const aiRoutes = require('./routes/ai.routes');
app.use('/ai', aiRoutes);

module.exports = app;
