$(document).ready(function() {
  let meatToppings = ["Pepperoni", "Italian Sausage", "Bacon"];
  let veggieToppings = ["Peppers", "Onions", "Black Olives"];
  let extraCheese = ["Cheddar", "Colby", "Monterrey Jack"];

  let meatButtons = $(".meats");
  let vegButtons = $(".veggies");
  let cheeseButtons = $(".cheeses");

  let buttonFunc = function (arr, group, str) {
    for(var i =0; i < arr.length; i++){
      let button = $("<button>");
      button.attr("type", "button");
      button.attr("class", "btn btn-" + str + " btn-sm choice");
      button.text(arr[i]);

      group.append(button);
    }
  };

  buttonFunc(meatToppings, meatButtons, "danger");
  buttonFunc(veggieToppings, vegButtons, "success");
  buttonFunc(extraCheese, cheeseButtons, "warning");

  $(".choice").on("click", function(){
    let newTop = $(this).text();
    console.log(newTop);

    if($(".topOne").text() === "No Topping"){
      $(".topOne").text(newTop);
    }else if($("topOne").text() !== "No Topping" && $(".topTwo").text() === "No Topping"){
      $(".topTwo").text(newTop);
    }else if($("topOne").text() !== "No Topping" && $(".topTwo").text() !== "No Topping" && $(".topThree").text() === "No Topping"){
      $(".topThree").text(newTop);
    }
  });

  $(".add-pizza").on("click", function() {
    $("#checkOutModal").modal("show");
  });

});