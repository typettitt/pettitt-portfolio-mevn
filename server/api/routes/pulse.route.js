const express = require('express');
const pulseRoute = express.Router();

// get pulse
pulseRoute.route('/').get((req, res) => {
	let date = new Date();
		const healthcheck = {
			message: 'OK',
			timestamp: date.toISOString().replace(/T/, ' ').replace(/\..+/, ''),
			uptime: calculateUptimeMessage(date),
			memory: process.memoryUsage(),
			cpu: process.cpuUsage(),
		};
		try {
			res.send(healthcheck);
		} catch (e) {
			console.log("problem");
			res.status(503).send('{"message": e}');
		}
});
function calculateUptimeMessage(date){
	let upTime = process.uptime(); 
	let upSinceDate = new Date(date - upTime).toISOString().replace(/T/, ' ').replace(/\..+/, '');
	return "Up since " + upSinceDate + " or " + Math.floor(upTime) + " seconds.";
}
module.exports = pulseRoute;
