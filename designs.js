// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function createGrid(x, y) {
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

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var x = document.getElementById("input_height").value;
    var y = document.getElementById("input_width").value;
    clearGrid();
    createGrid(x, y);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(10, 10);

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
