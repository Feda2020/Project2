/* eslint-disable linebreak-style */
$(document).ready(function() {

  $.get("/api/user_data").then(function(data) {
    let userId = data.id;
    $.get("/api/orders/"+userId).then(function(dataTwo){
      $(".orderName").text(dataTwo[0].pizzaName);
      $(".firstTop").text(dataTwo[0].toppingOne);
      $(".secondTop").text(dataTwo[0].toppingTwo);
      $(".thirdTop").text(dataTwo[0].toppingThree);
      $(".orderId").text("Your order number is " + dataTwo[0].id);

    });
  });
});