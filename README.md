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
  - [ ] Add message me button for visitors to send and email
  - [X] Update 'My Journey' section with better design
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
### Make a Production Build, Commit to Remotes, and Deploy
1. `cd client`
2. `npm run build`
3. `cd server`
4. `git add .`
5. `git commit -m "your message here"`
6. `git push`
7. `heroku login`
8. `git push heroku master`

## License and copyright

© Tyler J Pettitt

Licensed under the [MIT License](LICENSE)
