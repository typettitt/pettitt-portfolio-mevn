# Tyler Pettitt's Professional Portfolio
----
## About the Project
This project utilizes the MEVN stack(MongoDB, Express, Vue.js, Node.js) to display my professional experience.
I have also configured MongoDB to have a development environment as well as a production environment to play around with when I have my local project spun up.
Some additional tooling used within the project include: moment.js, bootstrap, and bootstrap-vue components.
The project is hosted on heroku and can be found on my own domain [here](http://www.tylerpettitt.me "Pettitt Portfolio"). Give it a few seconds, I'm just using the free hosting as of now so the server may have to 'wake up'.

----
## To-Do List: 
  - [ ] Add backend testing with Mocha/Chai(Partially Done)
  - [ ] Update 'My Journey' section with better design
  - [ ] Add link to /comments page in Stay In Touch section
  - [X] API Authentication POC - Not active but just experimenting
  - [X] Finish Comments page to demonstrate CRUD operations with MongoDB
  - [X] Remove unused assets
----
## Project Instructions
### To Run Client
1. `cd client`
2. `npm run dev`
### To Run Node.js Server
1. `cd server`
2. `npm run dev`
### Make a Production Build and deploy
1. `cd client`
2. `npm run build`
3. `cd server`
4. `heroku login`
5. `git push heroku master`

## License and copyright

© Tyler J Pettitt

Licensed under the [MIT License](LICENSE)
