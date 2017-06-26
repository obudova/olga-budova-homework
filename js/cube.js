console.log($);
$(function () {
    var deg = 0;
    var IntervalId = 0;
    var moveId = 0;
    var active = false;
    var pixelCountX = 0;
    var pixelCountY = 0;

    function rotateBox(deg) {
        $('.cube-container').css('transform', 'rotateX('+ deg + 'deg) ' +
            'rotateY(' + deg + 'deg)');
    }
    var rotateUp = function () {
        return $('.cube-container').css('transform', 'rotateX('+ deg + 'deg)');
    };
    var rotateDown = function () {
        return $('.cube-container').css('transform', 'rotateX('+ (-deg) + 'deg)');
    };
    var rotateLeft = function () {
        return $('.cube-container').css('transform', 'rotateY('+ (deg) + 'deg)');
    };
    var rotateRight = function () {
        return $('.cube-container').css('transform', 'rotateY('+ (-deg) + 'deg)');
    };
    function moveOnClick(move)
    {
        var currentDeg = deg;
        IntervalId = setInterval(function () {
            deg++;
            move();
            if((deg-currentDeg)>=90){
                clearInterval(IntervalId);
            }

        }, 10);
    }
    $('.btn.start').click(function () {
        if(!active){
        IntervalId = setInterval(function () {
            deg++;
            rotateBox(deg);
            if(deg==360){
                deg=0;
            }
        }, 10)
        }
        active = true;
    });
    $('.btn.pause').click(function () {
        clearInterval(IntervalId);
        active = false;
    });
    $('.btn.stop').click(function () {
        deg = 0;
        rotateBox(deg);
        clearInterval(IntervalId);
        active = false;
    });

    $('.btn.up').click(function () {


         //   $('.cube-container').css('transform','translateY('+100+'px)');


    });
    $('.btn.down').click(function () {
        var lastY = pixelCountY;
        moveId = setInterval(function () {
            pixelCountY++;
            $('.cube-container').css('transform','translateX('+pixelCountY+'px)'+'rotateX('+ deg + 'deg) ' +
                'rotateY(' + deg + 'deg)');
            if(pixelCountY-lastY>=150){
                clearInterval(moveId);
            }
        }, 15)
    });
    $('.btn.left').click(function () {
        moveOnClick(rotateLeft);
    });
    $('.btn.right').click(function () {
        moveOnClick(rotateRight);
    })
});