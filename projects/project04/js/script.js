var menuClick=$('.head-bottom ul li');
var menuBar=$('.head-bottom ul li a span')
menuClick.click(function(){
   menuBar.removeClass('bar');
    $(this).find('span').addClass('bar');
});

/* 슬라이드1 */
var swiper = new Swiper('.mySwiper1', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    loop : true,
    loopAdditionalSlides : 1,
    autoplay : {  
        delay : 3000,   
        disableOnInteraction : false, 
      },
});

/* 슬라이드2 */
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop:true
  });



/* 타이머 */
var timer=setInterval(function(){
    var today= new Date();
    var hour=today.getHours();
    var minute=today.getMinutes();
    if(hour >= 10){
        hNum=hour;
    }else{
        hNum="0" + hour;
    }
    if(minute >= 10){
        mNum=minute;
    }else{
        mNum="0" + minute;
    }
    $('.hour').text(hNum);
    $('.minute').text(mNum);

},60);
/* 슬라이드3 */
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: "auto",
    spaceBetween: 0,
  });
  /* 슬라이드4 */
  var swiper = new Swiper(".mySwiper4", {
    slidesPerView: "auto",
    spaceBetween: 0,
  });
/* 사이드바 */
  $('.menu-bar>a').on('click', function(){
    $('.menu_bg').show(); 
    $('.sidebar_menu').show().animate({
        right:0
    });  
});
$('.close_btn>a').on('click', function(){
    $('.menu_bg').hide(); 
    $('.sidebar_menu').animate({
        right: '-' + 70 + '%'
                },function(){
                    $('.sidebar_menu').hide();          
                });  
});
