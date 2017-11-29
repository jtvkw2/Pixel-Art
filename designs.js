// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var lastClicked;
var grid = clickableGrid(10,10,function(el,row,col){

    el.className='clicked';
});

document.body.appendChild(grid);

function clickableGrid( rows, cols, callback ){
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.addEventListener('click',(function(el,r,c){
                return function(){
                    callback(el,r,c);
                }
            })(cell,r,c),false);
        }
    }
    return grid;
}
