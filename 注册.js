var ul1 = document.querySelectorAll('.li-a');
variation(ul1);

function variation(x) {
for (var i = 0; i < x.length; i++) {
    x[i].onmouseover = function () {
        for (var j = 0; j < x.length; j++) {
            x[j].style.color = '#999999';
        }
        this.style.color = 'white';
    }
    x[i].onmouseout = function () {
        this.style.color = '#999999';
    }
}
}



