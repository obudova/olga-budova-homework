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
$('.tab-container > .tabs .tab').click(function () {
    var target = $(this).attr('data-tab');
    $('.tab-container > .tabs .tab').removeClass('active');
    $('.tab-container .content').removeClass('active');
    $(this).addClass('active');
    $(target).addClass('active');
});
$('.tab-container  .tabs .tab').click(function () {
    $('.tab-container .tabs-variation .tab').removeClass('active');
    $(this).addClass('active');
});
var sliderWidth = $('.slider__container').width();
var count = 0;
var distance = 0;

var slideCount = $('.slider__container.first-type .slider__row .slide').length-1;
$('.slider__container.first-type .slider__row').css('width', ((slideCount+1)*sliderWidth)+'px');
function moveSlide() {
    distance=sliderWidth*count*(-1);
    $('.slider__container.first-type .slider__row').css('transform','translate('+ distance +'px)');
}
$('.first-type .arrow.right').click(function () {
    count++;
    if(count > slideCount){
        count=0;
    }
   moveSlide();
});

$('.first-type .arrow.left').click(function () {
    count--;
    if(count < 0){
        count= slideCount;
    }
    moveSlide();
});

$('.first-type .nav-dots a').click(function (e) {
    e.preventDefault();
    count = parseInt($(this).attr('data-slide')) - 1;
    moveSlide();

});

const btn = document.querySelector('.search-button'),
        searchContainer = document.querySelector('.search__container'),
        closeSearch = document.querySelector('.search-close-button'),
        inputSearch = document.getElementById('search-input');
console.log(btn);
btn.addEventListener('click', onSearchBtnClick);
closeSearch.addEventListener('click', onCloseSearch);
inputSearch.addEventListener('focus', onInputFocus);
inputSearch.addEventListener('blur', onInputBlur);
inputSearch.addEventListener('input', onTextInput);
function onSearchBtnClick(e){
    searchContainer.classList.add('search-active');
}
function onCloseSearch() {
    searchContainer.classList.remove('search-active');
}
function onInputFocus() {
    searchContainer.classList.add('is-focused');
}
function onInputBlur() {
    searchContainer.classList.remove('is-focused');
}
function onTextInput() {
    if(this.value.length>0){
        searchContainer.classList.add('text-entered');
    }else {
        searchContainer.classList.remove('text-entered');
    }
}
