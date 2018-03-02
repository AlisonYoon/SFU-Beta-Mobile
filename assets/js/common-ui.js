$(function(){

    // Add People이 아닌 영역을 클릭 했을 경우, Add people을 닫게 한다.
    $(document).click(function(e){

        $('.add-people-area').each(function(){

            if( !$(this).parent('add-people-wrap').is('hide') ) {

                var l_position = $(this).offset();

                l_position.right = parseInt(l_position.left) + ($(this).width());
                l_position.bottom = parseInt(l_position.top) + parseInt($(this).height());

                if( ( l_position.left <= e.pageX && e.pageX <= l_position.right )
                    && ( l_position.top <= e.pageY && e.pageY <= l_position.bottom ) ) {
                }
                else {
                    $('.add-people-wrap').addClass('hide');
                    $('.wrap').removeClass('open-add-people');
                }
            }
        });
    });


    // ATTENDEES  List 클릭 시 active 전환
    $('.attendees-wrap').find('li').click(function(){
        var idx = $(this).index();

        $('.attendees-wrap').find('li:eq('+ idx +')').each(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
        });
    });

    // Bookmark List 클릭 시 active 전환
    $('.bookmark-list-wrap').find('li').click(function(){
        var idx = $(this).index();

        $('.bookmark-list-wrap').find('li:eq('+ idx +')').each(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
        });
    });


    // landscape에서 video 영역 클릭 시 상하단 hide
    // $('.video').click(function(e){
    //     $('.top-bar, .time, .video, .nav, .small-video, .btn-add-bookmark').toggleClass('video-touch');
    // });

    // $(window).resize(function(){

    // });
});


// Start meeting 버튼 클릭 시
function loading() {
    $('.loading-wrap').removeClass('hide');

    setTimeout(function(){
        location.href="./invite-people.html";
    }, 1000);


}

// record 버튼을 클릭 시, active toggle
function toggleActive() {
    $(event.target).toggleClass('active');
    $('.btn-add-bookmark, .i-record').toggleClass('hide');
}

// invite people 버튼을 클릭 시, add people 영역 토글
function invitePeople() {
    $('.add-people-wrap').toggleClass('hide');
    $('.add-people-inner').removeClass('hide');
    $('.link-copied').addClass('hide');
    $('.wrap').addClass('open-add-people');
}

// copy link 버튼 클릭 시
function copyLink() {
    $('.add-people-inner').toggleClass('hide');
    $('.link-copied').removeClass('hide');
}

// Add People 화면에서 close 버튼을 클릭 시, add people 화면이 닫힘.
function closeAddPeople() {
    $('.add-people-wrap').addClass('hide');
    $('.link-copied, .add-people-inner').removeClass('hide');
    $('.wrap').removeClass('open-add-people');
}

// add bookmark 버튼을 클릭 시
function addBookmark() {
    // event.stopPropagation();
    $('#btn-bookmark').addClass('active').find('span').text('Bookmarked!');
    $('.bookmark-count').removeClass('hide').addClass('active');

    setTimeout(function(){
        $('#btn-bookmark').removeClass('active').find('span').text('Add Bookmark');
        $('.bookmark-count').removeClass('active');
    }, 1000);
}


// video 버튼을 클릭 시
function clickVideo() {
    // $(event.target).toggleClass('off');
    $('.icon-video').toggleClass('hide');
    $('.icon-video-off').toggleClass('hide');
    $('.small-video').find('.video-off').toggleClass('hide');
}

function clickVideoOff() {
    // $(event.target).toggleClass('off');
    $('.icon-video').toggleClass('hide');
    $('.icon-video-off').toggleClass('hide');
    $('.small-video').find('.video-off').toggleClass('hide');
}

// mic 버튼을 클릭 시
function clickMic() {
    $('.icon-mic, .icon-mute').toggleClass('hide');
}

function clickMute() {
    $('.icon-mic, .icon-mute').toggleClass('hide');
}




// 방 나가기 버튼 클릭 시
function leaveTheRoom() {
    $('.leave-the-room').toggleClass('hide');
}

// leave the room 팝업에서 close 버튼 클릭 시
function closeLeaveTheRoom() {
    $('.leave-the-room').addClass('hide');
}

// ATTENDEES Nav 클릭 시
function openAttendees() {
    $('.attendees-wrap').toggleClass('hide');
    $('.wrap').addClass('open-attendees');

    // closeActivateAttendee();
}

// ATTENDEES  팝업에서 close 버튼 클릭 시
function closeAttendees() {
    $('.attendees-wrap').addClass('hide');
    $('.wrap').removeClass('open-attendees');
}

// ATTENDEE 팝업에서 Add People 버튼 클릭 시
function addPeople() {
    // $('.add-people-wrap').removeClass('hide');
    // $('.attendees-wrap, .link-copied').addClass('hide');
    // $('.wrap').removeClass('open-attendees');
    $(".btn-wrap a.btn").html("<span>Link Copied!</span>")
}


// Bookmark List Nav 클릭 시
function openBookmarkList() {
    $('.bookmark-list-wrap').toggleClass('hide');
    $('.wrap').addClass('open-bookmark-list');

    // closeActivateBookmarkList();
}

// Bookmark List  팝업에서 close 버튼 클릭 시
function closeBookmarkList() {
    $('.bookmark-list-wrap').addClass('hide');
    $('.wrap').removeClass('open-bookmark-list');
}

// Bookmark List 팝업에서 (-) 버튼 클릭 시
function deleteBookmark() {
    $(event.target).closest('li').remove();
}


// Minutes 클릭 시
function openMinutes() {
    $('.minutes-wrap').toggleClass('hide');
}

function closeMinutes(){
    $('.minutes-wrap').addClass('hide');
}




// attendee와 bookmark list 영역을 제외한 영역을 클릭 시, 화면 닫힘.
function closeActivateAttendee() {
    $(document).mousedown(function(e){
        // e.stopPropagation();
        $('div[data-id=attendees]').each(function(){
            if( $(this).css('display') == 'block' ){

                var l_position = $(this).offset();
                l_position.right = parseInt(l_position.left) + ($(this).width());
                l_position.bottom = parseInt(l_position.top) + parseInt($(this).height());

                if( ( l_position.left <= e.pageX && e.pageX <= l_position.right )
                    & ( l_position.top - $('div[data-id=attendees]').parent().height() <= e.pageY && e.pageY <= l_position.bottom ) ) {


                } else {
                    $(this).addClass('hide');
                    $('.wrap').removeClass('open-attendees');
                }
            }
        });
    });
}

function closeActivateBookmarkList() {
    $(document).mousedown(function(e){
        // e.stopPropagation();
        $('div[data-id=bookmark-list]').each(function(){
            if( $(this).css('display') == 'block' ){

                var l_position = $(this).offset();
                l_position.right = parseInt(l_position.left) + ($(this).width());
                l_position.bottom = parseInt(l_position.top) + parseInt($(this).height());

                if( ( l_position.left <= e.pageX && e.pageX <= l_position.right )
                    & ( l_position.top - $('div[data-id=bookmark-list]').parent().height() <= e.pageY && e.pageY <= l_position.bottom ) ) {


                } else {
                    $(this).addClass('hide');
                    $('.wrap').removeClass('open-bookmark-list');
                }
            }
        });
    });
}



function camOnOff() {
  var add = (function () {
    var counter = 0;
    return function (){
      return counter += 1;
    };
    if(counter % 2 == 1) {
        $('#myCam').attr('src','assets/images/icon/camera-off.png');
    } else {
        $('#myCam').attr('src','assets/images/icon/camera-on.png');
    };
  })();

};
