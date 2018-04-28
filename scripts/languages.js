$(document).ready(function () {
    $("#english").hide();
    $('[lang="ro"]').hide();

    $("#english").on("click", function(event) {      
        event.preventDefault();
        $('[lang="en"]').toggle();
        $('[lang="ro"]').toggle();
        $("#romana").show();
        $("#english").hide();
    });
    $("#romana").on("click", function(event) {
        event.preventDefault();
        $('[lang="ro"]').toggle();
        $('[lang="en"]').toggle();
        $("#romana").hide();
        $("#english").show();
    });
});