$(document).ready(function () {
    $("#english").hide();
    $('[lang="ro"]').hide();
    firstVideoPlaying();

    $('.grid-col').mousewheel(function(e, delta) {
        $(this).scrollLeft(this.scrollLeft + (-delta * 40));
        e.preventDefault();
    });


    $("#video-player").on("click", function(event) {
        var video = $(event.currentTarget);
        if (video[0].playing){
            video[0].pause();
        }
        else {
            video[0].play();
        }
    });

    $(".video-grid-item").on("click", function(event) {
        var video = $(event.currentTarget);
        if ($(video).children(".playing").hasClass("video-active")){
            return;
        }
        
        var sourceVideoSrc = video.data("src");

        var player = $("#video-player");
        var playerSource = player.children("source")[0];
        $(playerSource).attr("src", sourceVideoSrc);
        player[0].load();
        player[0].play();

        $(".video-grid-item").children(".playing.video-active").toggleClass("video-active");
        $(".video-grid-item").children(".after:not(.video-active)").toggleClass("video-active");

        $(video).children(".playing").toggleClass("video-active");
        $(video).children(".after").toggleClass("video-active");
    });

    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function(){
            return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
    })

    function firstVideoPlaying() {
        $(".video-grid-item").first().children(".playing").toggleClass("video-active");
        $(".video-grid-item").first().children(".after").toggleClass("video-active");
    }
});