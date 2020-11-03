$(document).ready(function() {
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
      });
  }

  $("#order-here").on( "click", function() {
    window.location.replace("/order");
  });

  previousOrders();
});
