var containerSize = 500;
var gridSize = 16;          //default value is 16x16
var modWidth;
var modHeight;
var setting = "default";
$(document).ready(function() {
    createGrid(gridSize);

    $("#clear").click(function() {
        $(".square").removeClass("colored");
        $(".grid_container").empty();
        createGrid(gridSize);
    });

    $("#default").click(function() {
        $(".square").removeClass("colored");
        $(".grid_container").empty();
        createGrid(gridSize);
        setting = "default";
    });

    $("#random").click(function() {
        $(".square").removeClass("colored");
        $(".square").css("background", "black");
        setting = "random"
    });
    
    $("#resize").click(function() {
        $(".grid_container").empty();
        var finished = false;
        while(!finished) {
            var input = prompt("Please enter a number between 1 and 100 for the grid size.");
            if(isNaN(input))
                finished = false;
            else if(input < 1 || input > 100)
                finished = false;
            else {
                createGrid(input);
                finished = true;
            }
        }
    });
    $(".grid_container").on("mouseenter", ".square", function() {
        var $square = $(this);
        switch(setting) {
            case "default":
                $square.addClass("colored");
                break;
            case "random":
                $square.css("background", "rgb("+randColor()+","+randColor()+","+randColor()+")");
                break;
        }
    });
});

function createGrid(num) {
    gridSize = num;
    var side = (containerSize - (num * 2))/num;
    modWidth = side;
    modHeight = side;
    for (var i = 0; i < (num * num); i++) {
        $(".grid_container").append("<div class='square'></div>");
    }
    $(".square").width(modWidth).height(modHeight);
}

function randColor() {
    var col = Math.floor((Math.random() * 255) + 1);
    console.log(col);
    return col;
}