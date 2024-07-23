const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const port = process.env.PORT; 
const mongoUri = process.env.MongoUri;
const projectRoutes = require('./routes/projectRoutes'); 

const app = express();

// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));


mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use project routes
app.use('/api', projectRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
