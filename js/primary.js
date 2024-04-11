$(document).ready(function() {
    // Dropdown menu (If you move the mouse out of the area, it will disappear)
    $(".local-nav .sup-menu").hover(function() {
        $(this).parent().find(".sub-menu").css("display", "flex");
    }, function() {
        $(this).parent().find(".sub-menu").css("display", "none");
    });

    // Tab navigation (Click on .nav-link in .nav-tab-item in .group-tabs)
    $(".group-tabs .nav-tab-item .nav-link").on("click", function(e) {
        e.preventDefault();
        var $tabItem = $(this).parent();
        if (!$tabItem.hasClass("active")) {
            $tabItem.siblings().removeClass("active");
            $tabItem.addClass("active");
            var tabContentId = $(this).attr("href");
            $(tabContentId).siblings().removeClass("active");
            $(tabContentId).addClass("active");
        }
    });

    // Video player modal (Play video when click play button ($('.btn-play-video').click()))
    var $videoPlayer = $(".video-player-modal .video-player-body .video-player");
    $('.btn-play-video').click(function (e) {
        e.preventDefault();
        let youtubeUrl = $(this).data("youtube-url");
        if (youtubeUrl) {
            $videoPlayer.empty();
            $videoPlayer.append("<iframe width='100%' height='100%' src='" + youtubeUrl + "' frameborder='0' allowfullscreen=''></iframe>");
            $(".video-player-modal").removeClass("d-none");
        }
    });

    //if click close-btn, event click is activated, add class d-none
    $(".video-player-modal").on("click", ".close-btn", function () {
        $(".video-player-modal").addClass("d-none");
        $videoPlayer.empty();
    });

    // Close video player modal on outside click
    $("body").on("click", ".video-player-modal:not(.video-player-body), .video-player-modal:not(.video-player)", function () {
        $(".video-player-modal").addClass("d-none");
        $videoPlayer.empty();
    });

    // Scroll to top button (The "Go to Top" button (#goto-top) will be displayed by calling $('#goto-top').fadeIn())
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#goto-top').fadeIn();
        } else {
            $('#goto-top').fadeOut();
        }
    });

    // Scroll to top with 10ms
    $("#goto-top").click(function () {
        $("html, body").animate({scrollTop: 0}, 10);
    });
});
