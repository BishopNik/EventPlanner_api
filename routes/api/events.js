/** @format */

import { Router } from 'express';

import { getEvents } from '../../controllers/getEvents.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const eventsRouter = Router();

eventsRouter.get('/', ctrlWrapper(getEvents));

export default eventsRouter;
