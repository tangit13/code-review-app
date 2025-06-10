const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Use the actual frontend domain here
app.use(cors({
  origin: 'https://code-review-frontend-x79t.onrender.com'
}));

app.use(express.json());

const aiRoutes = require('./routes/ai.routes');
app.use('/ai', aiRoutes);

module.exports = app;
