
// files/print.js

function Print() {
    Control('Off')
    LineChart();
    document.getElementsByClassName('header')[0].style.display = 'none';
    window.print();
    document.getElementsByClassName('header')[0].style.display = '';
    showPage('Graph');
    historyPush('Graph');
    Control('On')
};