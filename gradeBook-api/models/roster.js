var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  firstname: String,
  classId: Number,
  lastname: String,
  isValid: {type: Boolean, default : true}
},{collection: 'roster'});


module.exports = mongoose.model('Student', StudentSchema);

