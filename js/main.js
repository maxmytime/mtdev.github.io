// адаптивное меню для сайтов

$(document).ready(function() {
  $('.js-dropdown-menu').click(function() {
    $('.menu_mobile').toggleClass('js-hidden');
  });
});

// фиксированое меню
// jQuery(function($) {
//         $(window).scroll(function(){
//             if($(this).scrollTop()>0){
//                 $('.header').addClass('fixed');
//             }
//             else if ($(this).scrollTop()<0){
//                 $('.header').removeClass('fixed');
//             }
//         });
//     });

// плавная прокрутка к якорям
// $(document).ready(function(){
// $("a[href*=#]").on("click", function(e){
//     var anchor = $(this);
//     $('html, body').stop().animate({
//         scrollTop: $(anchor.attr('href')).offset().top
//     }, 1000);
//     e.preventDefault();
//     return false;
// });
// });

$(document).ready(function(){
    $('*[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});
// jQuery(function($) {
//         $(window).scroll(function(){
//             if($(this).scrollTop()>700){
//                 $('.header').addClass('fixed');
//                 $('.fixed').fadeIn(1000);
//             }
//             else if ($(this).scrollTop()<700){
//                 $('.fixed').fadeOut(1000);
//             }
//         });
//     });


