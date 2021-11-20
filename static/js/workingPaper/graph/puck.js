
// graph/puck.js
console.log('graph/puck.js')

function Puck() {
    //
    a = window.location.href.replace(window.location.origin, '').split('/')[2]
    if (a != 'WorkingPaper') {
        l = document.querySelectorAll('.EntityRegistrantNamePosts').length
        for (let i = parseInt(localStorage.counter) - 1; i < l; i++) {
            a = document.getElementsByClassName('Opinionφ1')[i].innerHTML
            b = document.getElementsByClassName('Bridgeφ1')[i].innerHTML
            if (b.length === 98) {
                m = ''
                if (a == 'Hedge For A Loss In Value') {
                    m = 'red';
                }
                if (a == 'Buy') {
                    m = '#0D47A1'
                }
                if (a == 'None') {
                    m = 'gold'
                }
                document.getElementsByClassName('o')[i].style.color = m;
            }
        }
    } else {
        a = document.getElementById('Opinionφ1').innerHTML;
        b = document.getElementById('Bridgeφ1').innerHTML;
        if (b.length === 98) {
            if (a == 'Hedge For A Loss In Value') {
                m = 'red';
            }
            if (a == 'Buy') {
                m = '#0D47A1';
            }
            if (a == '') {
                m = 'gold';
            }
            document.getElementById('o').style.color = m;
        }
    }
}