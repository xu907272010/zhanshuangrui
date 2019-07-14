//轮播
var currentIndex = 0;
var id;
function slideTo(index) {
    if(index >= 5){
        currentIndex = index = 0;
    }
    if(index <= -1){
        currentIndex = index = 4;
    }
    document.querySelector('.current').classList.remove('current');
    document.querySelectorAll('.slider .pictures li')[index].classList.add('current');
    //切焦点
    document.querySelector('.focus').classList.remove('focus');
    document.querySelectorAll('.bullet')[index].classList.add('focus');
}
function slideNext() {
    currentIndex++;
    slideTo(currentIndex);
}
function slidePrev() {
    currentIndex--;
    slideTo(currentIndex);
}
//子弹事件
var bullets = document.querySelectorAll('.bullet');
for(let i = 0; i < bullets.length; i++){
    bullets[i].onmouseover = function(){
        slideTo(i);
    }
}
function autoplay(){
    clearInterval(id);
    id = setInterval(slideNext,4000)
}
autoplay();
function stop(){
    clearInterval(id);
}
var slider = document.querySelector('.slider');
slider.onmouseover = function(){
    stop();
}
slider.onmouseout = function(){
    autoplay();
}


function denglu() {
    document.getElementById("newloginDialog").style.cssText = "display: block";
    document.getElementById("dengludiv").style.cssText = "display: block";
    document.getElementById("zhucediv").style.cssText = "display: none";
}
function dengluclose() {
    document.getElementById("newloginDialog").style.cssText = "display: none";
    document.getElementById("dengludiv").style.cssText = "display: none";
    document.getElementById("zhucediv").style.cssText = "display: none";
}
function zhuce() {
    document.getElementById("newloginDialog").style.cssText = "display: block";
    document.getElementById("zhucediv").style.cssText = "display: block";
    document.getElementById("dengludiv").style.cssText = "display: none";
}
function zhuceclose() {
    document.getElementById("newloginDialog").style.cssText = "display: none";
    document.getElementById("zhucediv").style.cssText = "display: none";
    document.getElementById("dengludiv").style.cssText = "display: none";
}
function shujiyanzhengmadengluFunction(){
    document.getElementById("shujiyanzhengmadenglu").style.cssText = "display: block";
    document.getElementById("zhanghaodenglu").style.cssText = "display: none";
    document.getElementById("shoujiyanzhengmacolor").style.cssText = "color:red";
    document.getElementById("zhanghucolor").style.cssText = "color:black";
}

function zhanghudengluFunction(){
    document.getElementById("shujiyanzhengmadenglu").style.cssText = "display: none";
    document.getElementById("zhanghaodenglu").style.cssText = "display: block";
    document.getElementById("shoujiyanzhengmacolor").style.cssText = "color:black";
    document.getElementById("zhanghucolor").style.cssText = "color:red";
}