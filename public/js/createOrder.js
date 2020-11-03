$(document).ready(function() {
  let meatToppings = ["Pepperoni", "Sausage", "Bacon", "Canadian Bacon", "Hamburger", "Brisket", "Steak"];
  let veggieToppings = ["Peppers", "Onions", "Black Olives", "Green Olives", "Jalape&ntildeos"];
  let extraCheese = ["Cheddar", "Colby", "Monterrey Jack", "Pepper Jack", "Mozzarella"];

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
    const name = $(this)[0].parentElement.children[0].textContent;
    const firstTop = $(this)[0].parentElement.children[1].textContent;
    const secondTop = $(this)[0].parentElement.children[2].textContent;
    const thirdTop = $(this)[0].parentElement.children[3].textContent;
    if(firstTop === "No Topping"){
      $(".pizza-name").text(name);
      $(".one").text("Plain cheese");
    }else{
      $(".pizza-name").text(name);
      $(".one").text(firstTop);
      $(".two").text(secondTop);
      $(".three").text(thirdTop);
    }
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