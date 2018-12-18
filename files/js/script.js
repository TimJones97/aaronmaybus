var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_edge_or_ie;    

var ua = window.navigator.userAgent;
var trident = ua.indexOf('Trident/');
var edge = ua.indexOf('Edge/');
var spacerHeight = $('.title-block-spacer').height();  

jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}

//collapse the navbar upon selection from hamburger menu
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

function initialise() {
    // bind click event to all internal page anchors
    // $('a[href*="#"]').on('click', function (e) {
    //     // prevent default action and bubbling
    //     e.preventDefault();
    //     e.stopPropagation();
    //     // set target to anchor's "href" attribute
    //     var target = $(this).attr('href');
    //     // scroll to each target
    //     $(target).velocity("scroll", 1000);
    // });
    $("#go-home").click(function (){
        $("#home").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-home2").click(function (){
        $("#home").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-home3").click(function (){
        $("#home").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-about").click(function (){
        $("#about").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-about2").click(function (){
        $("#about").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-testimonials").click(function (){
        $("#testimonials").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-media").click(function (){
        $("#media").velocity("scroll", { 
            duration: 1000,
        });
    });

    if (trident > 0 || edge > 0) {
      is_edge_or_ie = true;
    }
    if ((is_chrome)&&(is_safari)) {
      is_safari=false;
    }
    // if ($(window).width() < 800) {                 
    //   $('.navbar-default').addClass('smaller');
    // } 
    if ($(this).scrollTop() > 157) {      
      if ($(window).width() < 991) {               
          // $('.title-block-spacer').css('top', '157px');
      }                   
      $('.banner-container').css('visibility', 'none');
      // $('.logo-img').css('display', 'inline-block');
      $('.logo-img').css('top', '0px');
      $('.navbar-default').addClass('smaller');
      $('.title-block-main').css('top', '0px');
      // $('.navbar-default').addClass('solid');

    } else {
      if ($(window).width() < 991) {               
          // $('.title-block-spacer').css('top', '210px');
      }   
      $('.logo-img').css('top', '-450px');
      // $('.logo-img').css('display', 'none');
      $('.banner-container').css('visibility', 'block');
      $('.navbar-default').removeClass('smaller');
      $('.title-block-main').css('top', '-53px');
      // $('.navbar-default').removeClass('solid');
    } 
    $('.center').slick({
      // centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: false
      autoplay: true,
      autoplaySpeed: 3000
    });
    $('.jarallax').jarallax({
      speed: 0.2
    });
    $('.jarallax-sml').jarallax({
      speed: 0.5
    });   
    $("div:regex(id, .*jarallax-container-.*)").css({"z-index": "unset"});
    if(is_safari || is_edge_or_ie){
      $('.jarallax-img').addClass('edge-compatibility');
    }
    $('body').scrollspy({
      target: '#topnav',
      offset: 50
    });
}

$(document).ready(function () {
  initialise();
});

$(window).scroll(function() {
    // if ($(window).width() < 991) {                 
    //   $('.navbar-default').addClass('smaller');
    // } 
    if ($(this).scrollTop() > 157) { 
      if ($(window).width() < 991) {               
          // $('.title-block-spacer').css('top', '157px');
      }                 
      $('.banner-container').css('visibility', 'none');
      // $('.logo-img').css('display', 'inline-block');
      $('.logo-img').css('top', '0px');
      $('.navbar-default').addClass('smaller');
      $('.title-block-main').css('top', '0px');
      // $('.navbar-default').addClass('solid');
    } else {
      if ($(window).width() < 991) {               
          // $('.title-block-spacer').css('top', '210px');
      }   
      $('.logo-img').css('top', '-450px');
      // $('.logo-img').css('display', 'none');
      $('.banner-container').css('visibility', 'block');
      $('.navbar-default').removeClass('smaller');
      $('.title-block-main').css('top', '-53px');
      // $('.navbar-default').removeClass('solid');
    } 
});
//Check if window is resized to less than desktop res width, 
//If it is, make navbar opaque

$(window).resize(function () {
    $('.jarallax').jarallax('destroy');
    $('.jarallax-sml').jarallax('destroy');
    $('.jarallax-img').css('width', $(window).width());
    $('.jarallax').jarallax({
        speed: 0.2
    });
    $('.jarallax-sml').jarallax({
        speed: 0.5
    });
    $('.center').slick('unslick');
    initialise();
    var currentSlide = $('.center').slick('slickCurrentSlide');
    currentSlide = $('.center').slick('slickGoTo', currentSlide + 1);
    // if(is_safari || is_edge_or_ie){
    //   document.getElementById('jarallax-container-0').style.zIndex="unset";
    //   document.getElementById('jarallax-container-1').style.zIndex="unset";
    // }
});

//Script to fade out the post when scrolled past
// $(window).scroll(function () {
//     var scrollTop = $(window).scrollTop() - 100;
//     var height = ($(window).height() / 5);
//     $('.title-block-main').css({
//         'opacity': ((height - scrollTop) / (height))
//     });
//     // $('.title-main').css({
//     //     'opacity': ((height - scrollTop) / (height))
//     // });
// });

//Script to fade out the banner when scrolled past
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = ($(window).height() / 2); //1.7 previous
    $('.top').css({
        'opacity': ((height - scrollTop) / (height))
    });
    $('.bottom').css({
        'opacity': ((height - scrollTop) / (height))
    });
    // $('.jarallax-container-1').css({
    //     'z-index': 'unset !important'
    // });
    //  $('.jarallax').css({
    //     'z-index': 'unset !important'
    // });
    $('.jarallax').removeAttr( 'style' );
    // document.getElementById('jarallax-container-0').style.zIndex="unset";
    // document.getElementById('jarallax-container-1').style.zIndex="unset";
    // document.getElementById('jarallax-container-2').style.zIndex="unset";
    // $('.card-img').removeAttr( 'style' )
});



$(window).scroll(function() {
    if(is_safari || is_edge_or_ie){
    }
    else{
    }
});

Pace.restart();
Pace.on("done", function(){
   var y = $(window).scrollTop();  //your current y position on the page
   $(window).scrollTop(y+1);
   $(window).scrollTop();
   $('.loading').slideUp("slow", function() {
    });
    // Only show main text banner after loading complete
    $('.title-main').css('display', 'block');
});

var newUrl = 'data:image/png;base64,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BlVVVVV1XqZBVVVVVZ2XaVBVVVVV52UaVFVVVdV5mQZVVVVVdV6mQVVVVVWdl2lQVVVVVedlGlRVVVXVeZkGVVVVVXVepkFVVVVVnZdpUFVVVVXnZRpUVVVV1XmZBlVVVVV1XqZBVVVVVZ2XaVBVVVVV52UaVFVVVdV5mQZVVVVVdV6mQVVVVVWdl2lQVVVVVedlGlRVVVXVeZkGVVVVVXVepkFVVVVVnZdpUFVVVVXnZRpUVVVV1XmZBlVVVVV1XqZBVVVVVZ2XaVBVVVVV52UaVFVVVdV5mQZVVVVVdV6mQVVVVVWdl2lQVVVVVedlGlRVVVXVeZkGVVVVVXVepkFVVVVVnZdpUFVVVVXnZRpUVVVV1XmZBlVVVVV1XqZBVVVVVZ2XaVBVVVVV52UaVFVVVdV5mQZVVVVVdV6mQVVVVVWdl2lQVVVVVedlGlRVVVXVeZkGVVVVVXVepkFVVVVVnZdpUFVVVVXnZRpUVVVV1XmZBlVVVVV1XqZBVVVVVZ2XaVBVVVVV52UaVFVVVdV5mQZVVVVVdV6mQVVVVVWdl2lQVVVVVedlGlRVVVXVeZkGVVVVVXVO/teX/H/b7EcYpPvQkAAAAABJRU5ErkJggg==';

$(".ld-breath").attr("href", newUrl);