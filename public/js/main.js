$(window).on('load', function() {
    setTimeout(function() {
        $('.hackberry-blurb').css('opacity', 1)
        $('#hackberryText h1').css('transform', 'none');
    }, 0)
    setTimeout(function() {
        $('#hackberryTag h3').css('transform', 'none');
    }, 400);
    setTimeout(function() {
        $('#landingImage').css({
            transform: 'none',
            opacity: 1
        });
    }, 800);
})