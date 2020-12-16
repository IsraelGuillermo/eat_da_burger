$(function () {
  // event listener which console logs click is working and allows program to update from one list to the devoured list
  $(".devoure-burger").on("click", function (event) {
    console.log("click working");
    var id = $(this).data("id");
    // This pushes the data to the back end based on api route
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      // once updated page reloads
    }).then(function () {
      console.log("Devoured burger", id);
      location.reload();
    });
  });
  // event listener which once submitted the new burger is added
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    // if burger field is empty no action is taken
    if ($("#newBurger").val().trim() === "") {
      return;
      // otherwise the value of the form is stored in obj and passed to back end
    } else {
      console.log("submit button clicked");
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0,
      };
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("New burger added");
        location.reload();
      });
    }
  });
});
