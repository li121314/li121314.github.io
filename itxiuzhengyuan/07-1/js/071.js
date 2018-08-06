window.onload=function () {
    var play=document.getElementById("play");
    var player=document.getElementById("player");
    var i1=document.getElementById("i1");
    play.onclick=function () {
        if(player.paused){
            player.play();
            i1.setAttribute("class","icon-pause");
        }
        else {
            player.pause();
            i1.setAttribute("class","icon-play");
        }

    }





}

$(document).ready(function () {
    $(".box").click(function () {
        $(".box3").css('display','none');
      $(this).children(".box3").css('display','flex');


    });
    $(".box3 div").click(function () {
        $(".box3 div").css("opacity","1");
        $(this).css("opacity","0.8");
    })

});