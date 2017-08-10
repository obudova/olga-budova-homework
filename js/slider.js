$.fn.sliderPlugin = function (options) {
    var param = $.extend({
        speed: 300,
        timingFunctions: 'ease-in'
    }, options);

    var selector = this,
        target = 's1',
        slideCount = selector.find('.slide').length;

    function moveSlide() {
        selector.find('.slide').removeClass('active');
        selector.find('.slide#'+target).addClass('active');
    }
    selector.find('.slide').css('transition', 'all '+ param.speed + 'ms ' + param.timingFunctions);
    selector.find('.nav-dots a').click(function (e) {
        e.preventDefault();
        target = $(this).attr('data-slide');
        console.log(target.substr(1));
        moveSlide();
    });

    selector.find('.arrow.left').click(function () {
        var currentSlideNumber = parseInt(target.substr(1)) - 1 ;
        if (currentSlideNumber ){
            target= 's' + currentSlideNumber;
            moveSlide();
        }
    });

    selector.find('.arrow.right').click(function () {
        var currentSlideNumber = parseInt(target.substr(1)) + 1 ;
        if (currentSlideNumber <= slideCount){
            target= 's' + currentSlideNumber;
            moveSlide();
        }
    });


};