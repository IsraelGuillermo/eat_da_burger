$(function () {
  $(".devoure-burger").on("click", function (event) {
    console.log("click working");
    var id = $(this).data("id");

    $.ajax("/api/burger/" + id, {
      type: "PUT",
    }).then(function () {
      console.log("Devoured burger", id);
      location.reload();
    });
  });
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
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
  });
});
