// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/event-registration', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define registration schema
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String
});

// Create Registration model
const Registration = mongoose.model('Registration', registrationSchema);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle registration form submission
app.post('/register', async (req, res) => {
  try {
    const { name, email } = req.body;
    const registration = new Registration({ name, email });
    await registration.save();
    res.status(200).send('Registration successful!');
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send('An error occurred while registering. Please try again later.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
