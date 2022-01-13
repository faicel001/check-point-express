const express = require('express');
const serveur = express();
const isAuth = require("./midle/midWr");
serveur.use(isAuth);
serveur.use('/static', express.static(__dirname + '/public'));
serveur.get("/static/home", (request, response) => {
    response.sendFile(__dirname + "/public/home.html");
});
serveur.get("/static/contact", (request, response) => {
    response.sendFile(__dirname + "/public/contact.html");
});
serveur.get("/static/services", (request, response) => {
    response.sendFile(__dirname + "/public/services.html");
});
const port = 7000;

serveur.listen(port, (err) => {
    err ? console.log(err) : console.log(`server is running ${port}`)
});