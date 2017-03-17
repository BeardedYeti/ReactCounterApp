import express, { Router } from 'express';
import { index } from './controllers/activities';
import { games, gamesNames } from './controllers/games';

const router = Router();

router.route('/activities')
	.get(index);

/*router.route('/activities.json')
	.post(create);*/

router.route('/games')
	.get(games);

router.route('/games/:name')
	.get(gamesNames);

export default router;
