import mongoose, { Schema } from 'mongoose';

var GameDaysSchema = new Schema({
	"game": String,
	"date": String,
	"coop": Boolean,
	"livestream": Boolean
});

// Define movie schema
var activitySchema = new Schema({
	"allGameDays": [GameDaysSchema],
	"goal": Number,
	"errorMsgs": [String],
	"gameNames": {
		"fetching": Boolean,
		"suggestions": [String]
	}
});

// Export Mongoose model
export default mongoose.model('activity', activitySchema);
