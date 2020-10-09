const express = require('express');
const pulseRoute = express.Router();

// get pulse
pulseRoute.route('/').get((req, res) => {
    const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
	};
	try {
		res.send(healthcheck);
	} catch (e) {
		healthcheck.message = e;
		res.status(503).send();
	}
});
module.exports = pulseRoute;
