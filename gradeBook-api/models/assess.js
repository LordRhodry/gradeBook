var mongoose = require('mongoose');

var AssessmentSchema = new mongoose.Schema({
	testName : String,
	testDate : String,
	grades : [ {
		classId : Number,
		grade : {type: Number, min: 0, max:100}
	}]

},{collection:'assessment'});

module.exports = mongoose.model('Assessment', AssessmentSchema);