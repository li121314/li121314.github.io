

window.onload=function(){



       var one=document.getElementById("header_left");
       one.onclick=function () {
           document.getElementById("header_left").style.background="white";
           document.getElementById("header_right").style.background="#55a8b3";
           document.getElementById("header_right").style.border="#55a8b3";
           document.getElementById("header_left").style.color="#5fc0cd"
           document.getElementById("header_right").style.color="white"
       }
       var two=document.getElementById("header_right");
       two.onclick=function () {
           document.getElementById("header_right").style.background="white";
           document.getElementById("header_left").style.background="#55a8b3";
           document.getElementById("header_left").style.border="#55a8b3";
           document.getElementById("header_left").style.color="white"
           document.getElementById("header_right").style.color="#5fc0cd"
       }

       var maintopleft=document.getElementById("main-top-left");
       maintopleft.onclick=function () {
           document.getElementById("navone").style.display="block";
       }
      maintopleft.onmouseout=function () {
           document.getElementById("navone").style.display="none";
       }

    var maintopcenter=document.getElementById("main-top-center");
    maintopcenter.onclick=function () {
        document.getElementById("navtwo").style.display="block";
    }
    maintopcenter.onmouseout=function () {
        document.getElementById("navtwo").style.display="none";
    }

    var maintopright=document.getElementById("main-top-right");
    maintopright.onclick=function () {
        document.getElementById("navthree").style.display="block";
    }
    maintopright.onmouseout=function () {
        document.getElementById("navthree").style.display="none";
    }


}


