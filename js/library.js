$('.dropdown span').click(function () {
    $(this).parent().toggleClass('show');
});

$('.accordion.multi-target .item .item__title').click(function () {
    if($(this).parent().hasClass('expanded')){
        $(this).parent().removeClass('expanded');
        $(this).parent().children('.item__content').hide(300);

    }else{
        $(this).parent().addClass('expanded');
        $(this).parent().children('.item__content').show(300);
    }

});
$('.accordion.default .item .item__title').click(function () {

    if($(this).parent().hasClass('expanded')){
        $(this).parent().removeClass('expanded');
        $(this).parent().children('.item__content').hide(300);

    }else{
        $('.accordion.default .item').removeClass('expanded');
        $('.accordion.default .item .item__content').hide(300);
        $(this).parent().addClass('expanded');
        $(this).parent().children('.item__content').show(300);
    }

});
$('.with-sub-list .sub-list .list-item').click(function () {
    if($(this).hasClass('chosen')){
        $(this).removeClass('chosen');
    }else{
        $('.with-sub-list .sub-list .list-item').removeClass('chosen');
        $(this).addClass('chosen');
    }
});
