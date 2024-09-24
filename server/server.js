const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Middleware
app.use(bodyParser.json());
app.use(express.static('assets'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/tshirt_design', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/saveDesign', (req, res) => {
  // Save design logic
  console.log(req.body);
  res.send('Design saved!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
