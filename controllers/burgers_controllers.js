// from Sequelize, Activity 12-Blog-Crud, api-routes: dbPost: [object SequelizeInstance:Post]
// var express = require("express");

// var router = express.Router();

// // Import the model (burger.js) to use its database functions.
// var Burger = require("../models/burger.js");

// USING SEQUELIZE ACTIVITY: 
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   Burger.findAll(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// USING SEQUELIZE ACTIVITY for router.get:
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/burgers/", function(req, res) {
    db.Burger.findAll({})
      .then(function(dbBurger) {
        var hbsObject = {
                burgers: dbBurger
              };
              console.log(hbsObject);
              res.render("index", hbsObject);

        // res.json(dbBurger);
      });
  });
};
// router.post("/api/burgers", function(req, res) {
//   Burger.create([
//     "burger_name", "devoured"
//   ], [
//     req.body.burger_name, req.body.devoured
//   ], function(result) {
//     // Send back the ID of the new burger
//     res.json({ id: result.insertId });
//   });
// });
// // where "burger_name", "devoured" refer to columns within the database db

// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   Burger.update({
//     devoured: req.body.devoured
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   Burger.destroy(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // Export routes for server.js to use.
// module.exports = router;
