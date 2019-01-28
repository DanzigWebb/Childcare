
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

