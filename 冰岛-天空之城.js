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

var but = document.querySelectorAll('#daren button');
for (var i = 0; i < but.length; i++) {
    but[i].onmouseover = function () {
        this.style.backgroundColor = '#DCDCDC'
    }
    but[i].onmouseout = function () {
        this.style.backgroundColor = 'white'
    }
}   



// 给图片加阴影
var dus = document.querySelectorAll('.div-one');
var dre = document.querySelectorAll('.div-one>div:nth-of-type(2)');


for (let i = 0; i < dus.length; i++) {
    dus[i].onmouseover = function (){
      dre[i].style.display = 'block';
  }
}
for (let j = 0; j < dus.length; j++) {
    dus[j].onmouseout = function (){
      dre[j].style.display = 'none';
  }
}


// document.onmousemove = function (e){
//     console.log(e.pageY);
// }

// 设置滚动条达到一定高度时出现固定栏
var pk = document.getElementById('pk');
var huiSe = document.querySelector('#huiSe');
var Pluf = document.querySelector('#Pluf>div:nth-of-type(1)');
window.onscroll = function (){
    if(window.pageYOffset > 1130){
        pk.className = 'fixed';
        huiSe.style.marginTop = 60+'px';
        Pluf.style.display = 'block';
    }else{
        pk.className = '';
        huiSe.style.marginTop = '';
        Pluf.style.display = 'none';
    }
}




// 隐藏元素
var yi = document.querySelector('#daoHang>div:nth-of-type(1)');
var er = document.querySelector('#daoHang>div:nth-of-type(2)');
var long = document.querySelector('#long');
var hu = document.querySelector("#hu");
var bao = document.querySelectorAll('#hu>div');
var lang = document.querySelectorAll('#long>div')

yi.onmouseover = function (){
    long.style.display = 'block'
}
yi.onmouseout = function (){
    long.style.display = 'none'
}

er.onmouseover = function (){
    hu.style.display = 'block'
}
er.onmouseout = function (){
    hu.style.display = 'none'
}

for (let k = 0; k < bao.length; k++) {
    bao[k].onmouseover = function (){
        this.style.backgroundColor = '#DCDCDC'
    }
    bao[k].onmouseout = function (){
        this.style.backgroundColor = 'white'
    }
}
for (let k = 0; k < lang.length; k++) {
    lang[k].onmouseover = function (){
        this.style.backgroundColor = '#DCDCDC'
    }
    lang[k].onmouseout = function (){
        this.style.backgroundColor = 'white'
    }
}
