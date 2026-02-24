// 해더 스크롤 다운 처리 
$(function() {
    $(window).scroll(function() {
        header_low()
    })
    function header_low() {
        scrolls = $(window).scrollTop()
        if(scrolls > 30) {
            $('header').addClass('down')
        }else {
            $('header').removeClass('down')
        }
    }
})


$(function () {
    $('#sec3 .item').click(function() {
        _src = $(this).find('img').attr('src')
        $('.pop .cont img').attr({src : _src})
        $('.pop').show()
        $('.pop .cont').scrollTop(0)
        $('.pop .bg').show()
    })

    $('.pop i').click(function() {
        $('.pop').hide()
        $('.pop .bg').hide()
    })
})


$(function () {
    let lastScrollY = 0;
    const title = $('.title');

    $(window).on('scroll', function () {
    const currentScrollY = window.scrollY;
    const windowH = $(window).height();
    const docH = $(document).height();

    // 맨 아래 도착하면 항상 보이게
    if (currentScrollY + windowH >= docH - 1) {
        title.removeClass('hide');
        lastScrollY = currentScrollY;
        return;
    }

    // 스크롤이 0보다 작아지는 경우(최상단) 방지
    if (currentScrollY <= 0) {
        title.removeClass('hide'); 
        lastScrollY = 0;
        return; 
    } 
    if (currentScrollY > lastScrollY) {
        // 아래로 스크롤 중 -> 숨김
        title.addClass('hide'); 
    } else { 
        // 위로 스크롤 중 -> 나타남
        title.removeClass('hide');
    } 

    // title 메뉴 클릭
    $('.title a').on('click', function() {
        $('.title li').removeClass('on');
        $(this).parent('li').addClass('on');
        // 클릭 시 title은 항상 보이게
        title.removeClass('hide');
    });

    lastScrollY = currentScrollY; 
    });

    
});


$(function () {
    $('#overview .box').click(function() {
        _src = $(this).find('img').attr('src')
        $('.pop .cont img').attr({src : _src})
        $('.pop').show()
        $('.pop .cont').scrollTop(0)
        $('.pop .bg').show()
    })

    $('.pop i').click(function() {
        $('.pop').hide()
        $('.pop .bg').hide()
    })
})
