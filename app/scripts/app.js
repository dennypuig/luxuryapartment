jQuery(document).ready(function (ev) {

    jQuery.elementsToAnimate = [];
    jQuery('.scrolinganim').each(function (i, element) {
        jQuery.elementsToAnimate.push({
            el: element,
            top: jQuery(element).offset().top,
            cls: element.getAttribute('animclass')== null ? "fadein" : element.getAttribute('animclass')
        });
    });

    jQuery(window).scroll(function () {
        if (jQuery.elementsToAnimate.length > 0) {
            // get the necessary values and positions
            var currentPosition = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).outerHeight();
            for (var i = 0; i < jQuery.elementsToAnimate.length; i++) {
                if (jQuery.elementsToAnimate[i].top < currentPosition + (windowHeight / 10)) {
                    var element = jQuery.elementsToAnimate[i].el;
                    jQuery(element).addClass("animated " + jQuery.elementsToAnimate[i].cls);
                }
            }
            // clean the array
            // jQuery.elementsToAnimate = [];
        }
    });

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    //Functions
    function checkPosition(){
        var currentPosition = jQuery(window).scrollTop();
        var $backToTtop = jQuery("#up");
        if(currentPosition == 0){
            $backToTtop.addClass("no-opacity");
        }
        else{
            if($backToTtop.hasClass("no-opacity")){
                $backToTtop.removeClass("no-opacity");
            }
        }
    }

    checkPosition();
    jQuery(window).scroll(function (evt) {
        checkPosition();
    });

    jQuery("#up").click(function(evt){
        evt.preventDefault();
        jQuery("body, html").animate({
                scrollTop: (0) + "px"
            }, {
                duration: 400,
                easing: "swing"
            }
        );
    });

});


$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

