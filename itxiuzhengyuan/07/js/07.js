$(document).ready(function(){

/************点击盒子设置小盒子的显示雨隐藏 hide：隐藏 ；show：显示**********************/

$(".art-box-two").hide();
/*$(".art-box").click(function () {
    $(this).find(".art-box-two").show();
});*/
$(".art-box").click(function () {
        $(".art-box-two").hide();  //清除上一个点击的样式
        $(this).find(".art-box-two").show();

    });


/* ********************************************
* *********************************************
* **播放声音************************************
* paused: 暂停判断****************************
* play()播放********************************
* pause（）暂停***************************
* ************************************
* *********************************************/
$("#play").click(function () {


    if($("#player")[0].paused){
        $("#player")[0].play();

    }
    else {
        $("#player")[0].pause();
    }

});

$(".home").click(function () {
        location.href='index.html';
    });
    $(".foot-one").click(function () {
        location.href='index.html';
    });

    $(".ol-one li").click(function(){
        $(".ol-one li").removeClass("active");
        $(this).addClass("active");
    });

    $(".sec-btn").mouseenter(function () {
        $(this).css({"background-color":"#69d1e9","color":"white"});

    });

    $(".fot-one-first").mouseenter(function () {
        $(this).css("background-color","#fbb435");
    });


    $(".art-box-two div").click(function () {
        $(".art-box-two div").css("opacity","1");
        $(this).css("opacity","0.8");
    });
});