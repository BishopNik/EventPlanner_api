/** @format */

import axios from 'axios';
import queryString from 'query-string';

export const getEvents = async (req, res) => {
	const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

	const urlObj = new URL(fullUrl);
	const urlParams = queryString.parse(urlObj.search);

	try {
		const response = await axios.get(
			`https://kudago.com/public-api/v1.4/events/?expand=${urlParams.expand}&fields=${urlParams.fields}&lang=${urlParams.lang}&location=${urlParams.location}&page=${urlParams.page}`
		);
		res.json(response.data);
	} catch (error) {
		res.status(500).send('Error fetching data');
	}
};
