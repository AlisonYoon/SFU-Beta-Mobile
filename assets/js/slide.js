$(function(){
    
    $('.slide-item').slick({
        speed: 300,
        fade: true,
        cssEase: 'linear',
        dots: false
    });

    // 슬라이딩 후에 swipe-wrap을 안보이게 처리한다.
    $('.slide-item').on('afterChange', function(event, slick, currentSlide){
        
        console.log('afterChange');
        $('.swipe-wrap').addClass('hide');
    });
});