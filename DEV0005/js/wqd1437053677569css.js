// JavaScript Document
$(function(){
    $(window).scroll(function(){
     
        if($(this).scrollTop()>=40){
            if($(document).height()-$(window).height()<160) return;
            if($(".wqd1437053677569css").hasClass("sticky")) return;
            $(".wqd1437053677569css").addClass("sticky anima");
            setTimeout(function(){
                $(".wqd1437053677569css").removeClass("anima");
            },1000);
            $(".wqd1437053677569css .brand").addClass("fixedb");
            $(".wqd1437053677569css .resMainMenu .navbar-nav>li>a").addClass("fixeda");
            $(".wqd1437053677569css .nav-bar-child").addClass("fixedch");
        }else{
            $(".wqd1437053677569css").removeClass("sticky anima");
            $(".wqd1437053677569css .brand").removeClass("fixedb");
            $(".wqd1437053677569css .resMainMenu .navbar-nav>li>a").removeClass("fixeda");
            $(".wqd1437053677569css .nav-bar-child").removeClass("fixedch");
        }
    });
});