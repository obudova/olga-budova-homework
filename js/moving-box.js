var positionX = 0;
var positionY = 0;

var screenWidth = $('.box-container').width();
var screenHeight = $('.box-container').height();

var boxWidth = $('.box-container .box').width();

var boxHeight = $('.box-container .box').height();

$('#move-box-up').click(function (){
    if( positionY>0){
        positionY-=50;
    }
    $('.box').css('transform', 'translateX('+positionX+'px)'+'translateY('+positionY+'px)');
});
$('#move-box-down').click(function (){
    if( positionY<screenHeight - boxHeight){
        positionY+=50;
    }
    $('.box').css('transform', 'translateX('+positionX+'px)'+'translateY('+positionY+'px)');
});
$('#move-box-right').click(function (){
    if( positionX<screenWidth - boxWidth){
        positionX+=50;
    }
    $('.box').css('transform', 'translateX('+positionX+'px)'+'translateY('+positionY+'px)');
});
$('#move-box-left').click(function (){
     if( positionX>0){
        positionX-=50;
    }
    $('.box').css('transform', 'translateX('+positionX+'px)'+'translateY('+positionY+'px)');
});