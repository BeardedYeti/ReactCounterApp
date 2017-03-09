import Activity from '../models/activity';

export const index = (req, res, next) => {
	//Find all activities and return json response
	Activity.find().lean().exec((err, activities) => res.json(
		//interate through each movie
		{ activities: activities.map(activity => ({
			...activity
		}))}
	));
}
