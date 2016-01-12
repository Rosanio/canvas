//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
$(function() {
  var color = $('.selected').css("background-color");

  $('.controls li').click(function() {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
    color = $(this).css("background-color")
  });

  //When color is pressed
  $("#revealColorSelect").click(function(){
    //show color select or hide the color select
    changeColor();
    $("#colorSelect").toggle();
  });

  //update the new color span
  function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newColor").css("background-color", "rgb("+ r +","+ g +"," + b +")");
  }

  //When the color slider change
  $("input[type=range]").change(changeColor);


});
