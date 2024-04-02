(function ($) {
    "use strict";

    $(".nav-burguer > i.bi.bi-list").click(function(){
        $(this).hide();
        $(".nav-burguer > i.bi-chevron-contract").show();
        $(".nav-menu").show();
    });

    $(".nav-burguer > i.bi-chevron-contract").click(function(){
        $(this).hide();
        $(".nav-burguer > i.bi.bi-list").show();
        $(".nav-menu").hide();
    });


})(jQuery);

