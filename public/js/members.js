$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  $("#order-here").on( "click", function() {
    window.location.replace("/order");
  });

  $(".add-pizza").on("click", function() {
    $("#checkOutModal").modal("show");
    const name = $(this)[0].parentElement.children[0].textContent;
    const firstTop = $(this)[0].parentElement.children[1].textContent;
    const secondTop = $(this)[0].parentElement.children[2].textContent;
    const thirdTop = $(this)[0].parentElement.children[3].textContent;
    $(".pizza-name").text(name);
    $(".one").text(firstTop);
    $(".two").text(secondTop);
    $(".three").text(thirdTop);
  });

  $(".submitOrder").on("click", function(event){
    event.preventDefault();
    $.get("/api/user_data").then(function(data) {
      let userId = data.id;
      let newOrder = {
        pizzaName: $(".pizza-name").text(),
        toppingOne: $(".one").text(),
        toppingTwo: $(".two").text(),
        toppingThree: $(".three").text(),
        saveById: userId
      };
      $.post("/api/orders", newOrder, function(){
        window.location.replace("/checkout");
      });
    });

  });
});
