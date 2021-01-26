$(window).on('load', function() {
    landing.init();
    scrolledIntoView.handleScroll();
})

$(window).on('scroll', function() {
    scrolledIntoView.handleScroll();
})

$(document).ready(function() {
    $('.contact-form input').on('focusout', function(event) {
         landing.inputFocusOut(event);
    });

    $('.landing').on('mousemove', function(event) {
        console.log('landing');
        landing.mouseOverServices(event);
    });

    // $('.floating-text > div h2').on('mouseout', function(event) {
    //     console.log('off');
    //     landing.circleOpen = false;
    //     landing.mouseOutServices(event);
    // });
});

var landing = {
    circleOpen: false,

    init: function() {
        setTimeout(function() {
            $('.hackberry-blurb').css('opacity', 1)
            $('#hackberryText h1').removeClass('slide-up');
        }, 0)
        setTimeout(function() {
            $('#hackberryTag h3').removeClass('slide-up');
        }, 400);
        setTimeout(function() {
            $('#landingImage').css({
                transform: 'none',
                opacity: 1
            });
        }, 800);
        setTimeout(function() {
            $('#developers h2').removeClass('slide-up');
        }, 1200);
        setTimeout(function() {
            $('#designers h2').removeClass('slide-up');
        }, 1500);
        setTimeout(function() {
            $('#seo h2').removeClass('slide-up');
        }, 1800);
    },
    contactTransition: function(selector) {
        $(selector).css('transform', 'translateY(-100%)');
    },
    inputFocusOut: function(e) {
        if (!$(event.target).val()) {
            var selector = $(event.target).attr('data');
            $(selector).css('transform', 'translateY(0%)');
        }
    },
    mouseOverServices: function(event) {
        // get the position of the cursor
        var cursorMatrix = landing.cursorPosition(event);

        if (!landing.circleOpen) {
            // pop the circle
            landing.circleOpen = true;
            landing.popCircle(cursorMatrix);
        } else {
            $('#circle').css({
                top: cursorMatrix.y,
                left: cursorMatrix.x
            });
        }
    },
    mouseOutServices: function() {
        $('#circle').remove();
    },
    cursorPosition: function() {
        return {
            x: event.pageX,
            y: event.pageY
        }
    },
    popCircle: function(cursorMatrix) {
        var circle = $('<div>').attr('id', 'circle').css({
            top: cursorMatrix.y,
            left: cursorMatrix.x
        }).addClass('circle-spy');

        $('body').append(circle);

        return;
    }
}

var scrolledIntoView = {
    elementScrolled: function(elem, customOffset) {
        var elementTop = $(elem).offset().top + customOffset;
        var elementBottom = elementTop + $(elem).outerHeight() - customOffset;

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    },

    handleScroll: function() {
        if(scrolledIntoView.elementScrolled('#getInTouch', 100)) {
            $('#getInTouch').removeClass('slide-up');
        } else {
            $('#getInTouch').addClass('slide-up');
        }
        if(scrolledIntoView.elementScrolled('#contactName', 0)) {
            $('#contactName').removeClass('slide-up');
        }
        if(scrolledIntoView.elementScrolled('#contactEmail', 0)) {
            $('#contactEmail').removeClass('slide-up');
            $('#contactMessage').removeClass('slide-up');
        }
    }
}