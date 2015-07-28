// JavaScript Document
jQuery(document).ready(function() {
    var $filter_a =$(".wqd1437207313888css .filter a");
    $filter_a.click(function(){
        $(this).addClass("selected")
            .siblings().removeClass("selected");
        var index = $filter_a.index(this);
        $(".wqd1437207313888css .portfolio > .portfolio_list")
            .eq(index).show(500)
            .siblings().hide(500);
    });
});
(jQuery);