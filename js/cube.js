console.log($);
$(function () {
    var deg = 0;
    var IntervalId = 0;
    var IntervalId = 0;
    var action = false;
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
        if(!action){
        IntervalId = setInterval(function () {
            deg++;
            rotateBox(deg);
            if(deg==360){
                deg=0;
            }
        }, 15)
        }
        action = true;
    });
    $('.btn.pause').click(function () {
        clearInterval(IntervalId);
        action = false;
    });
    $('.btn.stop').click(function () {
        deg = 0;
        rotateBox(deg);
        clearInterval(IntervalId);
        action = false;
    });

    $('.btn.up').click(function () {
        moveOnClick(rotateUp);

    });
    $('.btn.down').click(function () {
         moveOnClick(rotateDown);
    });
    $('.btn.left').click(function () {
        moveOnClick(rotateLeft);
    });
    $('.btn.right').click(function () {
        moveOnClick(rotateRight);
    })
});