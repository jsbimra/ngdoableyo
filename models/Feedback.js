var mongoose = require('mongoose');

var FeedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    updated_date: { type: Date, default: Date.now },
  });

  //Exporting schema
  module.exports = mongoose.model('Feedback', FeedbackSchema);