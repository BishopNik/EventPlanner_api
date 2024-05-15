/** @format */

import { Router } from 'express';

import { validateBody } from '../../middlewares/index.js';
import { isEmptyBody } from '../../middlewares/index.js';
import { memberAddSchema } from '../../models/index.js';
import { add } from '../../controllers/add.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const registerRouter = Router();

registerRouter.post('/', isEmptyBody, validateBody(memberAddSchema), ctrlWrapper(add));

export default registerRouter;
