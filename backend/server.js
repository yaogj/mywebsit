const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware 
app.use(cors());
app.use(express.json());

// MongoDB connection 
const dbURI = 'your_mongodb_connection_string';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route handlers 
app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

// Define additional routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
