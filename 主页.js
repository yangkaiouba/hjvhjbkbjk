// 头部内容
var ul1 = document.querySelectorAll('.li-a');
variation(ul1);

function variation(x) {
    for (var i = 1; i < x.length; i++) {
        x[i].onmouseover = function () {
            for (var j = 1; j < x.length; j++) {
                x[j].style.color = '#999999';
            }
            this.style.color = 'white';
        }
        x[i].onmouseout = function () {
            this.style.color = '#999999';
        }
    }
}

// 隐藏搜索框以及搜索图标变亮
var rty = document.querySelector('#right-a-img');
var rtu = document.querySelector('#right-d');
rty.onmouseover = function () {
    rtu.style.height = 30 +"px",
    rtu.style.overflow = 'visible';
    rtu.style.transition = 'all .5s'
    this.style.filter = 'brightness(200%)'
}
rty.onmouseout = function () {
    rtu.style.height = "",
    rtu.style.overflow = 'hidden';
    this.style.filter = 'brightness(80%)'
}


// 物体移动的方法
function move(obj, target) {
    var y = null;
    var x = obj.offsetLeft;
    y = setInterval(() => {
        var speed = 9;
        var step = x < target ? speed : -speed;
        x += step;
        if (Math.abs(target - x) >= Math.abs(step)) {
            obj.style.left = x + 'px';
        } else {
            obj.style.left = target + 'px';
            clearInterval(y)
        }

    }, 20);
}
function moves(obj, target) {
    var y = null;
    var x = obj.offsetLeft;
    y = setInterval(() => {
        var speed = 9;
        var step = x < target ? speed : -speed;
        x += step;
        if (Math.abs(target - x) >= Math.abs(step)) {
            obj.style.left = x + 'px';
        } else {
            obj.style.left = target + 'px';
            clearInterval(y)
        }

    }, 0.5);
}



function ert (obj,target){
   var x = null;
   var y = obj.offsetLeft;
   x = setInterval(function (){
       var step = 9;
       var stop = y < target?  step:-step
       y+=stop;
       if(Math.abs(target-y) > Math.abs(step)){
          obj.style.left = y +'px'
       }else{
        obj.style.left = target+'px';
        clearInterval(x)
       }
   },0.5)
}









// 颈部内容
var bigBox = document.querySelector('#neck');
var smallBox = document.querySelector('#neck-top');
var btn = document.querySelector('#neck-bottom');
var jpg = document.querySelector('#jpg');
var left = document.querySelector('#neck-bottom-left');
var right = document.querySelector('#neck-bottom-right');
var span = document.querySelector('#index');

var automatic = null;
var index = 0;
bigBox.onmouseover = function () {
    btn.style.display = 'block';
    clearInterval(automatic);
}
bigBox.onmouseout = function () {
    btn.style.display = 'none';
    automatic = setInterval(Carousel, 3000);
}
// 通过两个按钮控制图片的变化
left.onclick = function () {
    index--
    if (index < 0) {
        index = 0;
    }
    move(jpg, -smallBox.offsetWidth * index)
    for (var i = 0; i < span.children.length; i++) {
        span.children[i].removeAttribute('class')
    }
    span.children[index].setAttribute('class', 'blue')
}
right.onclick = function () {
    index++
    if (index > jpg.children.length - 1) {
        index = jpg.children.length - 1
    }
    move(jpg, -smallBox.offsetWidth * index)
    for (var i = 0; i < span.children.length; i++) {
        span.children[i].removeAttribute('class')
    }
    span.children[index].setAttribute('class', 'blue')
}

// 八个小按钮
for (var i = 0; i < span.children.length; i++) {
    span.children[i].setAttribute('ik', i)
    span.children[i].onclick = function () {
        for (var j = 0; j < span.children.length; j++) {
            span.children[j].removeAttribute('class')
        }
        var ik = this.getAttribute('ik')
        index = ik;
        this.setAttribute('class', 'blue')
        move(jpg, -smallBox.offsetWidth * ik)
    }
}

for (let i = 0; i < span.children.length; i++) {
    // span.children[i].setAttribute('ik', i)
    span.children[i].onclick = function () {
        for (var j = 0; j < span.children.length; j++) {
            span.children[j].removeAttribute('class')
        }
        // var ik = this.getAttribute('ik')
        index = i //ik;
        this.setAttribute('class', 'blue')
        move(jpg, -smallBox.offsetWidth * i) //ik)
    }
}


// 自动轮播
automatic = setInterval(Carousel, 3000);
function Carousel() {
    if (index == jpg.children.length - 1) {
        index = 0;
        jpg.style.left = 0;
    }
    index++;
    if (index < jpg.children.length - 1) {
        span.children[index - 1].removeAttribute('class');
        span.children[index].setAttribute('class', 'blue')
    } else {
        span.children[span.children.length - 1].removeAttribute('class');
        span.children[0].setAttribute('class', 'blue')
    }
    moves(jpg, -smallBox.offsetWidth * index)
}









// 腰部内容
var underline = document.querySelector('#waist-top-a');
underline.onmouseover = function () {
    this.style.textDecoration = 'underline';
}
underline.onmouseout = function () {
    this.style.textDecoration = 'none';
}
var bigger = document.querySelector('#waist-middle');
var bis = bigger.querySelectorAll('img')
for (var i = 0; i < bis.length; i++) {
    bis[i].onmouseover = function () {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'all 1';
    }
    bis[i].onmouseout = function () {
        this.style.transform = 'scale(1 )';
        this.style.transition = 'all 1';
    }
}

var rete = document.querySelectorAll('.lala-1');

for (var i = 0; i < rete.length; i++) {
    rete[i].onmouseover = function () {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'all 1';
    }
    rete[i].onmouseout = function () {
        this.style.transform = 'scale(1 )';
        this.style.transition = 'all 1';
    }
}





// 设置腿部样式
// 设置城市界面的滚动
var bigDiv = document.querySelector('.leg-Outermost-div');
var bigUl = document.querySelector('.leg-Outermost-ul');
var Rs = document.getElementsByClassName('leg-Outermost')[0];
var smallSpan = Rs.querySelectorAll('span');
for (var p = 0; p < smallSpan.length; p++) {
    smallSpan[p].setAttribute('tach', p);
    smallSpan[p].onclick = function () {
        for (var o = 0; o < smallSpan.length; o++) {
            smallSpan[o].removeAttribute('class')
        }
       this.setAttribute('class','blu')
       var ft = this.getAttribute('tach');
       moves(bigUl, -bigDiv.offsetWidth * ft)

    } 
}
//设置文字变色
var wuhan = document.querySelectorAll('.wuhan')
for (var i = 0; i < wuhan.length; i++) {
    wuhan[i].onmouseover = function (){
        this.style.color = '#1890ff'
    }
    wuhan[i].onmouseout = function (){
        this.style.color = '#000'
    }
}






// 设置点赞图标 数字加一
var LALA = document.querySelectorAll('.LALA >div:nth-of-type(2)>img');
var LALAs = document.querySelectorAll('.LALA>div:nth-of-type(2)>p');

for (let i = 0; i < LALA.length; i++) {
    LALA[i].onclick = function (){
        LALAs[i].innerHTML = Number(LALAs[i].innerHTML) + 1;
        LALAs[i].style.color = 'red';   
    } 
}

var lalaYu = document.querySelectorAll('.LALA >div:nth-of-type(1)>img');
var uiUi = document.querySelectorAll('.LALA>div:nth-of-type(1)>p');
for (let i = 0; i < LALA.length; i++) {
    lalaYu[i].onclick = function (){
        uiUi[i].innerHTML = Number(uiUi[i].innerHTML) + 1;
        uiUi[i].style.color = 'red';   
    } 
}




// 设置自然界面的滚动
var bigDiV = document.querySelector('#leg-Outermost-div');
var biGUl = document.querySelector('#leg-Outermost-ul');
var RS = document.getElementById('leg-Outermost');
var smallspan = RS.querySelectorAll('span');
for (var p = 0; p < smallspan.length; p++) {
    smallspan[p].setAttribute('tach', p);
    smallspan[p].onclick = function () {
        for (var o = 0; o < smallspan.length; o++) {
            smallspan[o].removeAttribute('class')
        }
       this.setAttribute('class','blu')
       var ft = this.getAttribute('tach');
       moves(biGUl, -bigDiV.offsetWidth * ft)

    } 
}





// document.onmousemove = function (e){
//     console.log(e.pageY);
// }

// 设置滚动条达到一定高度时出现固定栏
var Crotch = document.getElementById('Crotch');
var leg = document.querySelector('.leg')
window.onscroll = function (){
    if(window.pageYOffset > 745){
        Crotch.className = 'fixed';
        leg.style.marginTop = 100+'px';
    }else{
        Crotch.className = '';
        leg.style.marginTop = 0+'px';
    }
}