

window.onload=function () {

    li1=document.getElementById("li1");
    li2=document.getElementById("li2");
    li3=document.getElementById("li3");
    li4=document.getElementById("li4");

    li1.onclick=function () {
        li2.style.backgroundColor="#ccc";
        li3.style.backgroundColor="#ccc";
        li4.style.backgroundColor="#ccc";
        li1.style.backgroundColor="#69d1e9";
    }
    li2.onclick=function () {
        li1.style.backgroundColor="#ccc";
        li3.style.backgroundColor="#ccc";
        li4.style.backgroundColor="#ccc";
        li2.style.backgroundColor="#69d1e9";
    }
    li3.onclick=function () {
        li1.style.backgroundColor="#ccc";
        li2.style.backgroundColor="#ccc";
        li4.style.backgroundColor="#ccc";
        li3.style.backgroundColor="#69d1e9";
    }
    li4.onclick=function () {
        li1.style.backgroundColor="#ccc";
        li2.style.backgroundColor="#ccc";
        li3.style.backgroundColor="#ccc";
        li4.style.backgroundColor="#69d1e9";
    }

}

