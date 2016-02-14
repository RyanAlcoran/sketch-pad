var containerSize = 500;
var gridSize = 16;
var modWidth;
var modHeight;
$(document).ready(function() {
    for (var i = 0; i < (gridSize * gridSize); i++) {
        $('.grid_container').append('<div class="square"></div>');
    }
    setGridSize(gridSize);
    $('.square').width(modWidth).height(modHeight);
});

function setGridSize(num) {
    var side = (containerSize - (num * 2))/num;
    modWidth = side;
    modHeight = side;
}