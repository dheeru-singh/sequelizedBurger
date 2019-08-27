// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Burger = require("../models/burger.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Burger.findAll({ }).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log(req.body);

    Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
      created_at: req.body.created_at,
      id: req.body.id
     
    }).then(function(results) {
      // `results` here would be the newly created chirp
      // res.end();
      res.json(results);
    });

  });

  

  // app.put("/api/burgers/:id", function (req, res, next) {
  //   Burger.update(
  //     {devoured: true},
  //     {returning: true, where: {id: req.params.id} }
  //   )
  //   .then(function([ rowsUpdate, [updatedBurger] ]) {
  //     res.json(updatedBurger)
  //   })
  //   .catch(next)
  //  })

   app.put("/api/burgers/:id", function(req, res) {
    // Use the sequelize update method to update a todo to be equal to the value of req.body
    // req.body will contain the id of the todo we need to update
    
    var inputval = Object.keys(req.body)[0]
    console.log(inputval);
    Burger.update({
      devoured: true,
      burger_name: inputval,
    },{
      where: {
        id:req.params.id,
        
      }
    }).then(function(response){
      res.json(response)
      
    });
  });

};