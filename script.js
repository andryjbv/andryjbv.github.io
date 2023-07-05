$(document).ready(function() {
    var fontStyle = $('h3').css('font-family');
    var fontSize = $('h3').css('font-size');
    var fontWeight = $('h3').css('font-weight');
    
    $('li').css({
        'font-family': fontStyle,
        'font-size': fontSize,
        'font-weight': fontWeight,
    });
});

