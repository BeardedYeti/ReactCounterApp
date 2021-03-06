import mongoose from 'mongoose';
import Activity from './api/models/activity';

const activities = [
	{
		"game": "Overwatch",
		"date": "2017-03-01",
		"coop": false,
		"livestream": true
	},
	{
		"game": "Minecraft",
		"date": "2017-03-02",
		"coop": true,
		"livestream": true
	},
	{
		"game": "Legend of Zelda: The Breath of the Wild",
		"date": "2017-03-03",
		"coop": true,
		"livestream": false
	}
];

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/activities');

//Go through each movie
activities.map(data => {
	//Initialize a model with a movie data
	const activity = new Activity(data);
	// Save it to DB
	activity.save();
})