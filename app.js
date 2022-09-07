const express = require("express");

const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(3050, function () {
    console.log("Servidor corriendo")
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get('/login', function(req, res){ 
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/registro', function (req, res) {
    res.sendFile(path.join(__dirname, "/views/registro.html"))
})
