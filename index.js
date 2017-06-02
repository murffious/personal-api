const express = require('express');
const bodyParser = require('body-parser')
var middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl.js');
const user = require('./user.js')
const app = express()


app.use(bodyParser.json())
app.use(middleware.addHeaders);

app.get("/name", mainCtrl.getName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/occupations/latest', mainCtrl.getLatestOccupation)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbyType)
app.get('/family', mainCtrl.getFamily)
app.get('/family/:gender', mainCtrl.getFamilyGender)
app.get('/restaurants', mainCtrl.getRestaurants)
app.get('/restaurants/:name', mainCtrl.getRestaurantsName)

app.put('/name', mainCtrl.updateName)
app.put('/location', mainCtrl.updateLocation)

app.post('/hobbies', mainCtrl.postHobby)
app.post('/occupations', mainCtrl.postOccupations)
app.post('/family', mainCtrl.postFamily)
app.post('/restaurants', mainCtrl.postRestaurant)

app.listen(3001, function (){
    console.log("listening on port 3001")
})

