#This will keep the heroku dyno awake
#I will schedule this to run every 25 minutes during business hours
clear
echo "Beginning health check"
curl http://www.tylerpettitt.me/api/pulse
echo
echo "Health check complete."