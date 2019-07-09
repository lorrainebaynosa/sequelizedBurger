// Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

// * Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

// * Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

// * Your app will store every burger in a database, whether devoured or not.



// Replacing your MySQL `Burger` model with a Sequelized equivalent.

// * Don't forget to edit the model and initial migration file to make the burger's devoured field carry a default value of false -- otherwise you might encounter bugs.
//   * There's no option to include that default in the command line, so you'll need to open up your editor to make this change.
// * Don't forget to sync the models!

// * Edit your new `config.json` file to include your database configurations. Place your JawsDB details in the `production` property of your json file; the details of your local database go in the `developer` property.

// * Remove your old ORM file, as well as any references to it in `burgers_controller.js`. Replace those references with Sequelize's ORM methods.

// * When you finish, your site should function just like your last one:
// ![1-Sequelized](Images/1-Sequelized.jpg)

// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
// Hooking Project iwth JawsDB
var mysql = require("mysql");
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "lazyjack",
//     database: "burgers_db"
// //   });
// };

// Sets up the Express App
// REVIEW OF CONCEPTS: 
// 1. Initialzies app
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing; parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =============================================================
var routes = require("./controllers/burgers_controllers");
console.log('routes', routes)
// app.use(routes);
routes(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});





