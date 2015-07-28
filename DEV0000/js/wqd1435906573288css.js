// JavaScript Document
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            if($(document).height()-$(window).height()<160) return;
            if($(".wqd1435906573288css").hasClass("sticky")) return;
            $(".wqd1435906573288css").addClass("sticky headAnima");
            setTimeout(function(){
                $(".wqd1435906573288css").removeClass("headAnima");
            },1000);
            $(".wqd1435906573288css .brand").addClass("fixedb");
            $(".wqd1435906573288css .resMainMenu .navbar-nav>li>a").addClass("fixeda");
            $(".wqd1435906573288css .nav-bar-child").addClass("fixedch");
        }else{
            $(".wqd1435906573288css").removeClass("sticky headAnima");
            $(".wqd1435906573288css .brand").removeClass("fixedb");
            $(".wqd1435906573288css .resMainMenu .navbar-nav>li>a").removeClass("fixeda");
            $(".wqd1435906573288css .nav-bar-child").removeClass("fixedch");
        }
    });
});