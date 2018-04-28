// cache the navigation links 
var $navigationLinks = $('.Navbar__Items > .navbar-item > a');
// cache (in reversed order) the sections
var $sections = $($(".content").get().reverse());

// map each section id to their corresponding navigation link
var sectionIdTonavigationLink = {};
var childrenSections = $sections.children();
for (var index = 0; index < childrenSections.length; index++) {
    var id = childrenSections[index]['id'];

    sectionIdTonavigationLink[id] = $('#' + id + '-link');
}

// TODO delete this function
function activateShadowForMenuItem(menuItem) {
    // e.preventDefault(); // stop the default immediate redirect
    menuItem.addClass('animationClass'); // add the animation class
    setTimeout(function () {
        // do something after 1000ms (or same as animation duration)
        menuItem.removeClass('animationClass'); // remove the animation class
        menuItem = null;
    }, 1000);
}

// $('.mnemo-menu-item').on('click', function (e) {
//     activateShadowForMenuItem($(this));
// });

// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval)) {
            // if we are inside the interval we wait
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall));
        } else {
            // otherwise, we directly call the function 
            lastCall = now;
            fn.call();
        }
    };
}

function highlightNavigation() {
    // get the current vertical position of the scroll bar
    var scrollPosition = $(window).scrollTop();

    // iterate the sections
    var childrenSections = $sections.children();
    for (var index = childrenSections.length - 1; index >= 0; index--) {
        var currentSection = childrenSections[index];
        // get the position of the section
        var sectionTop = currentSection.offsetTop;

        // if the user has scrolled over the top of the section  
        if (scrollPosition >= sectionTop - 71) {
            // get the section id
            var id = currentSection['id'];
            // get the corresponding navigation link
            var $navigationLink = $('#' + id + '-link');

            // if the link is not active
            if (!$navigationLink.hasClass('active')) {
                // remove .active class from all the links
                $navigationLinks.removeClass('active');
                // add .active class to the current link
                $navigationLink.addClass('active');

                var $navTextElement;
                if ($("#english").is(":visible")) {
                    $navTextElement = $navigationLink.find(">:nth-child(2)");
                } else {
                    $navTextElement = $navigationLink.find(">:first-child");
                }
            }
            // we have found our section, so we return false to exit the each loop
            // return false;
            break;
        }
    }
}

$(window).scroll(throttle(highlightNavigation, 100));

// if you don't want to throttle the function use this instead:
// $(window).scroll( highlightNavigation );