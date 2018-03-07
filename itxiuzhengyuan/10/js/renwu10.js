$(function () {
   $(".top-right-a1").mouseenter(function () {
        $(".top-right-a1").css({"background":"white","color":"#000","width":"10rem"});
       $(".top-right-a2").css({"background":"none","color":"white","width":"5rem","border-right":"1px solid white"});
    })

    $(".top-right-a2").mouseenter(function () {
        $(".top-right-a2").css({"background":"white","color":"#000","width":"10rem"});
        $(".top-right-a1").css({"background":"none","color":"white","width":"5rem"});
    })



});