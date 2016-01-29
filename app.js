$(document).ready(function() {
    $('.wl,.win,.lose').hide();
    $(document).keydown(function(e) {
        switch (e.which) {
        case 65:
            $('.mc').stop().animate({
                left: '-=35px'
            }); //left arrow key
            break;
        case 87:
            $('.mc').stop().animate({
                top: '-=35px'
            }); //up arrow key
            break;
        case 68:
            $('.mc').stop().animate({
                left: '+=35px'
            }); //right arrow key
            break;
        case 83:
            $('.mc').stop().animate({
                top: '+=35px'
            }); //bottom arrow key
            break;
        }
    });
    $('.maze').draggable(); 

});

