var instance = $(".hs__wrapper");
$.each(instance, function (key, value) {

    var arrows = $(instance[key]).find(".arrow"),
        
        box = $(instance[key]).find(".hs"),
        x = 0;

    $(arrows).on('click', function () {

        if ($(this).hasClass("arrow-prev")) {
            x = ((box.width() / 2)) + box.scrollLeft() - 10;
            box.animate({
                scrollLeft: x,
            })
        } else {
            x = ((box.width() / 2)) - box.scrollLeft() - 10;
            box.animate({
                scrollLeft: -x,
            })
        }
    });
});