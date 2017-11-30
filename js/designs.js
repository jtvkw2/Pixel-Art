// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//Function that creates grid
function makeGrid(x, y) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < y; columns++) {
      $("#grid").append("<div class='layout'></div>");
    };
  };
  $(".layout").height(800/x);
  $(".layout").width(800/y);
};

//Function to call to create a new grid
function refreshGrid(){
  $(".layout").remove();
  makeGrid(document.getElementById("input_height").value, document.getElementById("input_width").value);
};

//Creates grid on submit
//Also contains functions for changing color
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  refreshGrid();
  $(".layout").click(function() {
    $(this).css("background-color", document.getElementById("colorPicker").value);
  });

  $(".newGrid").click(function() {
    refreshGrid();
    $(".layout").click(function() {
      $(this).css("background-color", document.getElementById("colorPicker").value);
    });
  });
});
