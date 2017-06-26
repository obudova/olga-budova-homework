$('.dropdown span').click(function () {
    $(this).parent().toggleClass('show');
});

$('.accordion .item .item__title').click(function () {
    if($(this).parent().hasClass('expanded')){
        $(this).parent().removeClass('expanded');
        $(this).parent().children('.item__content').hide(300);

    }else{
        $(this).parent().addClass('expanded');
        $(this).parent().children('.item__content').show(300);
    }

});