$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  function previousOrders() {
    $.post("/api/presetorders", {
      pizzaName: pizzaName,
      toppingOne: toppingOne,
      toppingTwo: toppingTwo,
      toppingThree: toppingThree
    })
      .then(function(response) {
       //add here
      });
  }

  $("#order-here").on( "click", function() {
    window.location.replace("/order");
  });

  previousOrders();
});
