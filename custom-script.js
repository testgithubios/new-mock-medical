function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}
(function ($) {
    var o = $('.rd-navbar');
    if (o.length > 0) {
        include('jquery.rd-navbar.js');

        $(document).ready(function () {
            o.RDNavbar({
                stickUpClone: false,
                stickUpOffset: 170
            });
        });
    }
})(jQuery);