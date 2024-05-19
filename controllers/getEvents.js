/** @format */

import axios from 'axios';
import queryString from 'query-string';

export const getEvents = async (req, res) => {
	const { page, expand, fields, lang, location } = req.query;
	const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

	const urlObj = new URL(fullUrl);
	const urlParams = queryString.parse(urlObj.search);

	try {
		const response = await axios.get(`https://kudago.com/public-api/v1.4/events/`, {
			params: { page, expand, fields, lang, location },
		});
		res.json(response.data);
	} catch (error) {
		res.status(500).send('Error fetching data');
	}
};

export const getEvent = async (req, res) => {
	const { id } = req.params;
	const { lang } = req.query;

	try {
		const response = await axios.get(`https://kudago.com/public-api/v1.4/events/${id}/`, {
			params: { lang },
		});
		res.json(response.data);
	} catch (error) {
		res.status(500).send('Error fetching data');
	}
};
