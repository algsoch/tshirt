const mongoose = require('mongoose');

// Define the design schema
const designSchema = new mongoose.Schema({
  user: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Design', designSchema);
