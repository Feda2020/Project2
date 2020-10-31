$(document).ready(function() {

  $(".createOwn").on( "click", function() {
    window.location.replace("/createorder");
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
});