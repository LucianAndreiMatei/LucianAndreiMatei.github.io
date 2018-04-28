$(document).ready(function () {
    $(".mnemo-menu-item").on({
        hover: function () {
            $("#manifest-section-link").addClass("mnemo-menu-item-hovered");
        },
        leave: function () {
            $("#manifest-section-link").removeClass("mnemo-menu-item-hovered");
        }
    });

    $('#menu-logo').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('#manifest-section-link').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500);
        return false;
    });

    $('#exhibition-section-link').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500);
        return false;
    });

    $('#voices-section-link').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500);
        return false;
    });

    $('#initiatives-section-link').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500);
        return false;
    });

    $('#organizers-section-link').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500);
        return false;
    });

    $('#contact-section-link').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500);
        return false;
    });

    // $('.video-grid-item').click(function () {
    //     console.log($(this));
    // });

    // var vid1 = $('#vid1');
    // vid1.on('loadedmetadata', function () {
    //     if (vid1 && vid1.readyState != 0) {
    //         vid1[0].currentTime = 30000;
    //     } else {
    //         vid1.on('loadeddata', function () {
    //             vid1[0].currentTime = 30000;
    //         });
    //     }
    // });

    // var vid2 = $('#vid2');
    // vid2.on('loadedmetadata', function () {
    //     if (vid2 && vid2.readyState != 0) {
    //         vid2[0].currentTime = 430000;
    //     } else {
    //         vid2.on('loadeddata', function () {
    //             vid2[0].currentTime = 430000;
    //         });
    //     }
    // });

    // var vid3 = $('#vid3');
    // vid3.on('loadedmetadata', function () {
    //     if (vid3 && vid3.readyState != 0) {
    //         vid3[0].currentTime = 730000;
    //     } else {
    //         vid3.on('loadeddata', function () {
    //             vid3[0].currentTime = 730000;
    //         });
    //     }
    // });

    // var vid4 = $('#vid4');
    // vid4.on('loadedmetadata', function () {
    //     if (vid4 && vid4.readyState != 0) {
    //         vid4[0].currentTime = 1111230000;
    //     } else {
    //         vid4.on('loadeddata', function () {
    //             vid4[0].currentTime = 1111230000;
    //         });
    //     }
    // });

    // temporary code - starts same video in video grid at random times to create the impression that they are different
    // document.getElementById('vid1').addEventListener('loadeddata', function () {
    //     this.currentTime = 50;
    // }, false);

    // document.getElementById('vid2').addEventListener('loadeddata', function () {
    //     this.currentTime = 150;
    // }, false);

    // document.getElementById('vid3').addEventListener('loadeddata', function () {
    //     this.currentTime = 250;
    // }, false);

    // document.getElementById('vid4').addEventListener('loadeddata', function () {
    //     this.currentTime = 350;
    // }, false);

    // document.getElementById('vid5').addEventListener('loadeddata', function () {
    //     this.currentTime = 450;
    // }, false);

    // document.getElementById('vid6').addEventListener('loadeddata', function () {
    //     this.currentTime = 550;
    // }, false);

    // document.getElementById('vid7').addEventListener('loadeddata', function () {
    //     this.currentTime = 650;
    // }, false);

    // document.getElementById('vid8').addEventListener('loadeddata', function () {
    //     this.currentTime = 750;
    // }, false);

    // document.getElementById('vid9').addEventListener('loadeddata', function () {
    //     this.currentTime = 850;
    // }, false);

    // document.getElementById('vid10').addEventListener('loadeddata', function () {
    //     this.currentTime = 950;
    // }, false);

    // document.getElementById('vid11').addEventListener('loadeddata', function () {
    //     this.currentTime = 10050;
    // }, false);

    // document.getElementById('vid12').addEventListener('loadeddata', function () {
    //     this.currentTime = 100324150;
    // }, false);
});