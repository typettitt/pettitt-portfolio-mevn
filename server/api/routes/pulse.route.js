const express = require('express');
const os = require("os");
const pulseRoute = express.Router();
const allowlist  = ['http://tylerpettitt.me', 'DESKTOP-7O58RPC'];

// get pulse
pulseRoute.route('/').get((req, res) => {
    console.log(os.hostname());
    if (allowlist.includes(os.hostname()) !== -1) {
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
	}
});
module.exports = pulseRoute;
