$(document).ready(function () {

    $(".article-text").addClass("collapsed");
    $(".read-less").hide();

    $("a.read-more").on('click', function (event) {
        event.preventDefault();
        var articleText = $(event.currentTarget).siblings(".article-text").first();
        var readLess = $(event.currentTarget).siblings(".read-less").first();
        $(readLess).show();
        $(event.currentTarget).hide();
        $(articleText).toggleClass("collapsed");
    });

    $("a.read-less").on('click', function (event) {
        event.preventDefault();
        var articleText = $(event.currentTarget).siblings(".article-text").first();
        var article = $(event.currentTarget).parents(".article").first();
        var readMore = $(event.currentTarget).siblings(".read-more").first();
        $(readMore).show();
        $(event.currentTarget).hide();
        $(articleText).toggleClass("collapsed");
        $(window).scrollTop($(article).offset().top - 75);
    });

    $(window).scroll(function () {
        if ($("a.read-less").is(":visible")) {
            var expandedArticles = $("a.read-less:visible");
            for (var i = 0; i < expandedArticles.length; i++) {
                var article = $(expandedArticles[i]).parents(".article")[0];
                if (!isVisible(article)) {
                    var articleText = $(article).children(".article-text").first();
                    var readMore = $(article).children("a.read-more").first();
                    var readLess = $(article).children("a.read-less").first();
                    $(readMore).show();
                    $(readLess).hide();
                    $(articleText).toggleClass("collapsed");
                }
            }
        }
    });

    function isVisible(element) {
        var rectangle = element.getBoundingClientRect();
        var elementTop = rectangle.top;
        var elementBottom = rectangle.bottom;
        var isVisible = elementTop < window.innerHeight && elementBottom >= 0;
        return isVisible;
    }
});
