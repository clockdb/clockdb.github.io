
// base/resize.js

function resize(c, m, g, t) {
    a = ''
    if (c == 'none') {
        if (m == 'none') {
            if (g == 'none') {
                if (t == 'none') {
                    a = '100%';
                }
            }
        } else {
            a = ''
        }
    } else {
        a = ''
    }
    if (a == '') {
        if (window.innerWidth > 799) {
            a = '80%';
        } else {
            a = '60%';
        }
    }
    document.getElementsByClassName('clockdb')[0].style.width = a;
    document.getElementsByClassName('loading')[0].style.width = a;
}

function innerWidthColumn() {
    var w = window.innerWidth;
    if (w < 799) {
        disp = 'none';
    } else {
        disp = '';
    }
    Columns(disp);
}

function Columns(disp) {
    a = document.getElementsByClassName('C2');
    for(let i = 0; i < a.length; i++) { 
        document.getElementsByClassName('C2')[i].style.display = disp;
    };
    a = document.getElementsByClassName('C3');
    for(let i = 0; i < a.length; i++) { 
        document.getElementsByClassName('C3')[i].style.display = disp;
    };
    a = document.getElementsByClassName('C4');
    for(let i = 0; i < a.length; i++) { 
        document.getElementsByClassName('C4')[i].style.display = disp;
    };
    a = document.getElementsByClassName('C5');
    for(let i = 0; i < a.length; i++) { 
        document.getElementsByClassName('C5')[i].style.display = disp;
    };
    a = document.getElementsByClassName('C6');
    for(let i = 0; i < a.length; i++) { 
        document.getElementsByClassName('C6')[i].style.display = disp;
    };
    document.getElementById('Clockφ2').style.display = disp;
    document.getElementById('Clockφ3').style.display = disp;
    document.getElementById('Clockφ4').style.display = disp;
    document.getElementById('Bridgeφ2').style.display = disp;
    document.getElementById('Bridgeφ3').style.display = disp;
    document.getElementById('Bridgeφ4').style.display = disp;
    localStorage.setItem('Column', 1)
}
