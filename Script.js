$(document).ready(function () {

    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
            renderBullet: function (index, className) {
            return '<svg id="Layer_1" data-name="Layer 1" class="'+className+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><defs><style>.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}</style><clipPath id="clip-path" transform="translate(0 0)"><rect class="cls-1" width="100" height="100"/></clipPath></defs><title>SÍMBOLO-MISSING</title><g id="Artwork_3" data-name="Artwork 3"><g class="cls-2"><polygon points="0 0 0 100 24.38 100 24.38 86.26 100 86.26 100 0 0 0"/></g></g></svg>';
          }
        }
    })

});




