var topPos = 300;
var leftPos = 370;


$(window).on('keydown', function(evt){
    console.log(evt.which);
    switch(evt.which) {
        case 65:
            console.log("left");
            movePlayer("left");
            break;
        case 68:
            console.log("right");
            movePlayer("right");
            break;
        case 87:
            console.log("up");
            movePlayer("up");
            break;
        case 83:
            console.log("down");
            movePlayer("down");
            break;
        case 81:
            console.log("diagleftup")
            movePlayer("diagleftup")
            break;
        case 69:
            console.log("diagrightup")
            movePlayer("diagrightup")
        default: 
            console.log('unsupported key was pressed');
            
            
    }
    
});

function movePlayer(direction){
    switch(direction) {
        case 'left':
            leftPos -= 10;
            break;

        case 'up':
            topPos -= 10;
            break;

        case 'right':
            leftPos += 10;
            break;

        case 'down':
            topPos += 10;
            break;
            
        case 'diagleftup':
            leftPos -= 10;
            topPos -= 10;
            break;
        case 'diagrightup':
            topPos -= 10;
            leftPos += 10;
            break;

    }
    $('#player').css({
        top: topPos +'px',
        left: leftPos + 'px',
    });
    if (leftPos < 0) leftPos = 0;
    if (leftPos > 620) leftPos = 620;
    if (topPos < 0) topPos = 0;
    if (topPos > 800) topPos = 800;
}
