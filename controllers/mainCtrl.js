var user = require('../user.js');
var skillz = require('../skillz.js')
var middleware = require('./middleware.js')
var secrets = require('../secrets.js')

exports.getName = function (req, res, next) {
    res.send({"name": user.name}) 
}
exports.getLocation = function (req, res, next) {
     res.send({'location': user.location})
}
exports.getOccupations = function (req, res, next) {
     
    if (req.query.order === "desc") {
    return  res.send({'occupations': user.occupations.sort()}) 
    }     
    else if ("req.query.order === asc") {
         return  res.send({'occupations': user.occupations.sort().reverse()});
        }  
    else {
       return  res.send({'occupations': user.occupations}) 
        }     
}
exports.getLatestOccupation = function (req, res, next) {
   
    res.send({'latestOccupation': user.occupations.slice(user.occupations.length -1)})
}
exports.getHobbies = function (req, res, next) {
    res.send({hobbies: user.hobbies})
}
exports.getHobbyType = function (req, res, next) {
    res.status(200).send
     ( user.hobbies.filter(function (e){
          return e.type == req.params.type 
          
     }) )
}
exports.getFamily = function(req, res, next) {
    const family = user.family;
    if(req.query.relation) {
        let x = family.filter(function(value) {
            return value.relation == req.query.relation
        })
        res.send(x);
    } else {
    res.send(family);
    }
}
 exports.getFamilyGender = function(req, res, next) {
    let targetGender = req.params.gender;
    let family = user.family;
    res.status(200).send({family: family.filter(function(value) {
        return value.gender == targetGender;
    })})
}
exports.getRestaurants = function (req, res, next) {
   const restaurant = user.restaurants;
    if(req.query.rating ) {
        let x = restaurant.filter(function(value) {
            return value.rating >=  req.query.rating
        })
        res.send(x);
    } else {
    res.send(restaurant);
    }
}

exports.getRestaurantsName = function (req, res) {
    res.status(200).send({"Restaurants": user.restaurants.filter(function(e) {
       return e.name == req.params.name;
   })})
}
exports.getSkillz = function(req, res, next)
{ 
         if(req.query.experience) {
             let experienceLevel = skillz.filter(x => {
                return x.experience === req.query.experience;
            })
            res.status(200).send(experienceLevel)
         }
         res.status(200).send(skillz)
     }


exports.getSecrets = function(req, res){
         res.status(200).json('shhhhhh '+ secrets);
     }
// exports.getRestaurantName = function (req, res, next) { 
//     res.status(200).send({"restaurants": user.restaurants.filter(function(value) {
//         return value.name == req.params.name;
//     })})  
// }
exports.updateName = function (req, res, next) {
         user.name = req.body.name;
         res.status(200).send('Name has been changed to ' + user.name)
     }
exports.updateLocation = function (req, res, next) {
       user.location = req.body.location;
         res.status(200).send('Location has been changed to ' + user.location)
     }
exports.postHobby = function(req, res) {
         user.hobbies.push(req.body);
         res.status(200).send(user.hobbies)         
     }
exports.postOccupations = function(req, res) {
         user.occupations.push(req.body.occupations);
         res.status(200).send(user.occupations)         
}
exports.postFamily = function(req, res) {
         user.family.push(req.body);
         res.status(200).send(user.family)         
}
exports.postRestaurant = function(req, res) {
         user.restaurants.push(req.body.restaurants);
         res.status(200).send(user.restaurants)         
}
 exports.postSkillz = function(req, res) {
         skillz.push(req.body);
         res.status(200).json(skillz)
     }

