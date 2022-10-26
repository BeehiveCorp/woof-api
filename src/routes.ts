import { Router } from 'express';

import FrequentlyAskedQuestionController from './controllers/FrequentlyAskedQuestionController';

const route = Router();

route.get('/frequently-asked-questions', FrequentlyAskedQuestionController.all);
route.post('/frequently-asked-question', FrequentlyAskedQuestionController.create);

export default route;
