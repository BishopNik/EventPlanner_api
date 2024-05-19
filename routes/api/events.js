/** @format */

import { Router } from 'express';

import { getEvents, getEvent } from '../../controllers/getEvents.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const eventsRouter = Router();

eventsRouter.get('/', ctrlWrapper(getEvents));

eventsRouter.get('/:id', ctrlWrapper(getEvent));

export default eventsRouter;
