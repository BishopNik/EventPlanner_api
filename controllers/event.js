/** @format */

import { Members } from '../models/index.js';

export const getEvent = async (req, res) => {
	const { event } = req.params;

	const result = await Members.find({ event });

	res.json(result);
};
