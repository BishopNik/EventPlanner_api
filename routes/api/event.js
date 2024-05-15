/** @format */

import { Router } from 'express';

import { getEvent } from '../../controllers/event.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const eventRouter = Router();

eventRouter.get('/:event', ctrlWrapper(getEvent));

export default eventRouter;
