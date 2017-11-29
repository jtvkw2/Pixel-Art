// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//function that creates grid
function makeGrid(x, y) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < y; columns++) {
      $("#container").append("<div class='grid'></div>");
    };
  };
  $(".grid").height(960/x);
  $(".grid").width(960/y);
};

// function that clears the grid
function clearGrid(){
  $(".grid").remove();
};

//function to call to create a new grid
function refreshGrid(){
  clearGrid();
  makeGrid(document.getElementById("input_height").value, document.getElementById("input_width").value);
};

//creates a 10x10 grid onload
//then contains funtions for when grid is clicked and starting a new grid
$('#sizePicker').submit(function(event) {
  $('#input').next().text();
  event.preventDefault();
  refreshGrid();
  $(".grid").click(function() {
    $(this).css("background-color", document.getElementById("colorPicker").value);
  });

  $(".newGrid").click(function() {
    refreshGrid();
    $(".grid").click(function() {
      $(this).css("background-color", document.getElementById("colorPicker").value);
    });
  });
});
