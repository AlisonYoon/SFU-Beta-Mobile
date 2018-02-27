$(function(){

    if ( !$('body').find('.landscape-mode').is('.hide') ) {
        
        // 세로일 경우,
        $('.landscape-mode').removeClass('hide');
 
        $('.landscape-mode').on('click', function(){
            $('body').toggleClass('video-touch');
            // $('.top-bar, .time, .video, .nav, .small-video, .btn-add-bookmark').toggleClass('video-touch');
        });

        $('.video').on('click', function(){
             $('body').toggleClass('video-touch');
            // $('.top-bar, .time, .video, .nav, .small-video, .btn-add-bookmark').toggleClass('video-touch');
        });

 
        // 가로일 경우
        if ( $(window).innerHeight() < $(window).innerWidth() ) {
            $('.landscape-mode').addClass('hide');

            // start meeting에 적용
            $('body').addClass('landscape');
        }
    }

        

    
     $(window).resize(function(){
        
        // 세로 모드일 경우
        if ( $(window).innerHeight() > $(window).innerWidth() ) {
            console.log( '세로');

            $('.landscape-mode').removeClass('hide');

            // start meeting에 적용
            $('body').removeClass('landscape');

        
        // 가로 모드일 경우
        } else if ( $(window).innerHeight() < $(window).innerWidth() ) {
            console.log( '가로');

            $('.landscape-mode').addClass('hide');

            // start meeting에 적용
            $('body').addClass('landscape');
        }
    });

});
