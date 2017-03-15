import Activity from '../models/activity';

export const index = (req, res, next) => {
	//Find all activities and return json response
	Activity.find().lean().exec((err, activities) => res.json(
		//interate through each activity
		{ activities: activities.map(activity => ({
			...activity
		}))}
	));
}

export const create = (req, res) => {
	res.body.map(data => {
		//Initialize a model with a activity data
		const activity = new Activity(data);
		// Save it to DB
		activity.save((err, req.body) => {
			err ? return next(err) : res.json(201, req.body)
		});
	})
}

// export const create = (req, res) => {
// 	const { errors, isValid } = validate(req.body);
// 	if (isValid) {
// 		req.body.map(data => {
// 			//Initialize a model with a movie data
// 			const activity = new Activity(data);
// 			// Save it to DB
// 			activity.save();
// 		})
// 	} else {
// 		res.status(400).json({ errors });
// 	}
// }
