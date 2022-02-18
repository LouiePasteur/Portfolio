$(window).on("load", function () {
    $(".loader .inner").fadeOut(800, function () {
        $(".loader").fadeOut(900);
    });

    $(".items").isotope({
        filter: '*',
        animationOption: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
})




$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    const type = new Typed(".typed", {
        strings: ["Computer Engineer", "Assistant System Engineer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            },

        }
    });



    const skillsTopOffset = $(".skillsSection").offset().top;
    const statsTopOffset = $(".statsSection").offset().top;
    let countUpFinished = false;

    $(window).scroll(function () {

        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function () {
                const element = $(this);
                const endVal = parseInt(element.text());
                element.countup(endVal);
            })
            countUpFinished = true;
        }
    });

    $("[data-fancybox]").fancybox();



    $("#filters a").click(function () {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        let selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOption: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;

    })

    $("#navigation li a").click(function (e) {
        e.preventDefault();

        const targetElement = $(this).attr("href");
        const targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "500");
    });

});





