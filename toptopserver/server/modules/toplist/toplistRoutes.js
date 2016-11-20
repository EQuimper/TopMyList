import { Router } from 'express';
import * as TopList from './toplistController';

const topListRoutes = new Router();

topListRoutes.route('/toplists').get(TopList.getAll);
topListRoutes.route('/toplists/:id').get(TopList.getOne);
topListRoutes.route('/toplists').post(TopList.create);
topListRoutes.route('/toplists/:id').delete(TopList.deleteOne);
topListRoutes.route('/toplists/:id').put(TopList.updateOne);

export default topListRoutes;
