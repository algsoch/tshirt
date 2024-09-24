const Design = require('./schema');

// Save new design to the database
function saveDesign(designData) {
  const newDesign = new Design(designData);
  return newDesign.save();
}

module.exports = {
  saveDesign
};
