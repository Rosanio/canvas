//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
//$(function() {
  var color = $('.selected').css("background-color");
  var $canvas = $('canvas');
  var context = $canvas[0].getContext("2d");
  var lastEvent;
  var mouseDown = false;

  $('.controls').on('click', 'li', function() {
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

  //When add color is pressed
  $('#addNewColor').click(function() {
    var $newColor = $('<li></li>');
    $newColor.css('background-color', $("#newColor").css("background-color"));
    $('.controls ul').append($newColor);
    $newColor.click();
  });

  //On mouse events on the canvas
  $canvas.mousedown(function(e) {
    lastEvent = e;
    mouseDown = true;
  }).mousemove(function(e) {
    if (mouseDown) {
      context.beginPath();
      context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
      context.lineTo(e.offsetX, e.offsetY);
      context.strokeStyle = color;
      context.stroke();
      lastEvent = e;
    }
  }).mouseup(function() {
    mouseDown=false;
  }).mouseleave(function() {
    $canvas.mouseup();
  });
    //Draw lines

//});
