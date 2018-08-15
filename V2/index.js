




$(function(){
    // variables, divs
    var player = '<div id="player">  </div>';
    var kamfer = '<div class="kamfer"></div>';
    $('#map').append(kamfer);
    $('.kamfer').hide();
    var congratulation = '<div class="congratulation"> <h1> Congratz</h> </div>';
    
    
    var speed = 10;

    // random generator
    function getRandNumber(number) {
        return Math.floor(Math.random() * number );
    }

    // set interval for scouting the area
    function interval () {
        setInterval(interval, )
    }

    // random append kamfer
    function cKamfer () {
        $('.kamfer').show();
        console.log("append kamfer");
        var positionKamfer = $('.kamfer').position();
        console.log("position kamfer", positionKamfer);
        var left = getRandNumber(1200);
        var top = getRandNumber(800);
        $('.kamfer').css('left', left + 'px')
        $('.kamfer').css('top', top + 'px')
    }
    
    setInterval(cKamfer, 5000);
    
    // player 1 enters the game
    $('#map').append(player);
    
    // controls for player
    $(document).keydown(function(e){
        console.log(e.keyCode);

        var position = $("#player").position();
        console.log("position -->", position);


    switch (e.keyCode) 
    
    {
        
        case 65: // a // left
        $("#player").css('left', position.left - speed + 'px'); // add transition, but how
        // if (topPos > 800) topPos = 800;
        break;
        
        case 87: // w // up
        $("#player").css('top', position.top - speed + 'px');
        break;
            
        case 68: // d // right
        $('#player').css('left', position.left + speed + 'px');
        break;
        
        case 83: // s // down
        $('#player').css('top', position.top + speed + 'px');
        break;  
                
    }
        // border for the map
        if (position.left < 0) {
            $('#player').css('left', 0);
        }
        if (position.left > 1165) { 
            $('#player').css('left', 1165);
        }
        if (position.top < 0) {
            $('#player').css('top', 0);
        }
        if (position.top > 680) {
            $('#player').css('top', 680);
        }

        //get's to hospital
        // if $('#player').

        if (position.left >= 1005 && position.top <= 150) {
            $('#map').append(congratulation);
            
        }
    })
    
}, 60)
