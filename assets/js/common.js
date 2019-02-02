
 $(document).ready(function() {
            $("#my-menu").mmenu({
                extensions: ['effect-menu-slide', 'pagedim-black', "fx-listitems-fade"],
                navbar: {
                    title: 'Childcare'
                },
            }, {
                // configuration
                offCanvas: {
                    pageSelector: "#my-page"
                }
            });

            var api = $('#my-menu').data('mmenu');
            api.bind('open:start', function() {
                $('.hamburger').addClass('is-active');
            });
            api.bind('close:before', function() {
                $('.hamburger').removeClass('is-active');
            })
        });

$(document).ready(function(){
    $('.about-carousel').owlCarousel({
        loop:false,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true
            },
            600:{
                items:2,
                dots:false,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                dots:false,
            }
        }
    });
});

$(document).ready(function(){
    $('.reviews-carousel').owlCarousel({
        loop:false,
        margin:0,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
                loop:true
            },
            600:{
                items:1,
                dots:true,
                nav:false,
                loop:true
            },
            1000:{
                items:1,
                nav:false,
                dots:true,
                loop:true
            }
        }
    });
});

$(document).ready(function(){
    $('.blogpost-carousel').owlCarousel({
        loop:false,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true
            },
            500:{
                items:2,
                dots:false,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                dots:false,
            }
        }
    });
});

