const express = require('express');
const connectDB = require('./config/db');
const donorRoutes = require('./routes/donorRoutes');
const requestRoutes = require('./routes/requestRoutes');
const donationRoutes = require('./routes/donationRoutes');

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/donors', donorRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/donations', donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
