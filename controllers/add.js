/** @format */

import { Members } from '../models/index.js';
import { httpError } from '../utils/index.js';

export const add = async (req, res, _) => {
	const { event, dateBth, name, email } = req.body;
	const res_member = await Members.find({ event, dateBth, name, email });
	if (res_member.length) {
		throw httpError(404, `Member register in event`);
	}

	const result = await Members.create({ ...req.body });

	res.status(201).json(result);
};
