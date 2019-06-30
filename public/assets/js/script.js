// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var currentDevouredState = $(this).data("newdevoured");
      console.log('id', id)
      console.log('calling change devoured for id ', id)
      console.log('currentDevouredState', currentDevouredState)
      var newDevouredState = {
        devoured: !currentDevouredState
      };

      console.log('newDevouredState', newDevouredState)
  
      // Send the PUT (update) request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevouredState.devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  // where ".change-devoured" refers to class of button in file burger-block.handlebars (views directory)


    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("calling add new burger");
      console.log('name', $("#bu").val().trim())
      var newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: false
      };

      console.log('newBurger', newBurger)
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger.");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // where $(".create-form").on("submit", function(event) {} refers to index.handlebars in public directory
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });

  // where ".delete-burger" refers to class of button in file burger-block.handlebars (views directory)