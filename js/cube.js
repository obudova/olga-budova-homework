$(function () {
    var deg = 0;
    var IntervalId = 0;
    var moveId = 0;
    var active = false;
    var pixelCountX = 0;
    var pixelCountY = 0;

    function rotateBox() {
       $('.cube-container').css('transform', 'translateY('+pixelCountY+'px)' + 'translateX('+pixelCountX+'px) rotateX('+ (deg) + 'deg)'+
            'rotateY(' + deg + 'deg)');
    }
    $('.btn.start').click(function () {
        if(!active){
            IntervalId = setInterval(function () {
                deg++;
                rotateBox();
                if(deg==360){
                    deg=0;
                }
            }, 10)
        }
        active = true;
    });
    $('.btn.pause').click(function () {
        clearInterval(IntervalId);
        clearInterval(moveId);
        active = false;
    });
    $('.btn.stop').click(function () {
        deg = 0;
        pixelCountY=0;
        pixelCountX=0;
        clearInterval(IntervalId);
        active = false;
    });

    $('.btn.down').click(function () {
        clearInterval(moveId);
        var lastY = pixelCountY;
        if(!active){
            moveId = setInterval(function () {
                pixelCountY++;
                rotateBox();
                if(pixelCountY-lastY>=100){
                    clearInterval(moveId);
                }
            })
        }else{
            moveId = setInterval(function () {
                clearInterval(IntervalId);
                deg++;
                if(pixelCountY-lastY<=300){
                    pixelCountY++;
                }
                rotateBox();
                if(deg==360){
                    deg=0;
                }
            }, 10)
        }

    });
    $('.btn.up').click(function () {
        clearInterval(moveId);
        var lastY = pixelCountY;
        if(!active){
            moveId = setInterval(function () {
                pixelCountY--;
                rotateBox();
                if(lastY-pixelCountY>=100){
                    clearInterval(moveId);
                }

            })
        }else{
            moveId = setInterval(function () {
                clearInterval(IntervalId);
                deg++;
                rotateBox();

                if(lastY-pixelCountY<=300){
                    pixelCountY--;
                }
                if(deg==360){
                    deg=0;
                }
            }, 10)
        }
    });
    $('.btn.left').click(function () {
        clearInterval(moveId);
        var lastX = pixelCountX;
        if(!active){
            moveId = setInterval(function () {
                pixelCountX--;
                rotateBox();

                if(lastX-pixelCountX>=100){
                    clearInterval(moveId);
                }

            })
        }else {
            moveId = setInterval(function () {
                clearInterval(IntervalId)
                deg++;
                if (lastX - pixelCountX <= 300) {
                    pixelCountX--;
                }
                rotateBox();

                if (deg == 360) {
                    deg = 0;
                }
            }, 10)
        }
    });
    $('.btn.right').click(function () {
        clearInterval(moveId);
        var lastX = pixelCountX;
        if(!active){
            moveId = setInterval(function () {
                pixelCountX++;
                rotateBox();

                if(pixelCountX-lastX>=100){
                    clearInterval(moveId);
                }

            })
        }else {
            moveId = setInterval(function () {
                clearInterval(IntervalId)
                deg++;
                if (pixelCountX - lastX <= 300) {
                    pixelCountX++;
                }
                rotateBox();
                if (deg == 360) {
                    deg = 0;
                }
            }, 10)
        }
    })
});