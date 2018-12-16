var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_edge_or_ie;    

var ua = window.navigator.userAgent;
var trident = ua.indexOf('Trident/');
var edge = ua.indexOf('Edge/');
var spacerHeight = $('.title-block-spacer').height();  

//Detect browser and disable fixed backgrounds if on Safari or IE/Edge
    // if(is_safari || is_edge_or_ie){
    //   // $('html').addClass('touch');
    // }
    // else{
    //   // $('html').removeClass('touch');
    // }

//collapse the navbar upon selection from hamburger menu
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

function initialise() {
    // bind click event to all internal page anchors
    $('a[href*="#"]').on('click', function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
        // scroll to each target
        $(target).velocity("scroll", 1000);
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
    setTimeout(
      function() 
      {
       $('.jarallax').jarallax({
          speed: 0.2
        });
        $('.jarallax-sml').jarallax({
          speed: 0.5
        });   
        if(is_safari || is_edge_or_ie){
          document.getElementById('jarallax-container-0').style.zIndex="unset";
          document.getElementById('jarallax-container-1').style.zIndex="unset";
        }     
      }, 800
    );
    
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
    initialise();
    if(is_safari || is_edge_or_ie){
      document.getElementById('jarallax-container-0').style.zIndex="unset";
      document.getElementById('jarallax-container-1').style.zIndex="unset";
    }
});


$('body').scrollspy({
  target: '#topnav',
  offset: 50
});

$('.center').slick({
  // centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false
  // autoplay: true,
  // autoplaySpeed: 3000
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
      document.getElementById('jarallax-container-0').style.zIndex="unset";
      document.getElementById('jarallax-container-1').style.zIndex="unset";
    }
    else{
    }
});

Pace.restart();
Pace.on("done", function(){
  setTimeout(
      function() 
      {
       $('.loading').slideUp("slow", function() {
        });
        // Only show main text banner after loading complete
        $('.title-main').css('display', 'block');
      }, 500
    );

});