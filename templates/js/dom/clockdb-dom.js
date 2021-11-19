
// base/dom.js

// dom

document.addEventListener('DOMContentLoaded', function() {
    try {
        friendRequestButtonsOnStart();
        ChatMessagesAndNotificationsOnStart();
        controlPanel();
    } catch {}
    try {
        b = window.location.href.replace(window.location.origin,'')
        b = b.split('/')[2]
        if (b == 'WorkingPaper') {
            document.getElementsByClassName('header')[0].style.position = 'absolute';
            document.getElementsByClassName('panelHeader')[0].style.position = 'absolute';
            DisplayWorkingPaper();
            REF();
            innerWidthColumn();
            Compile();
        } else {
            controlPanelTitles();
            hideIndustrySEC();
            Posts();
        }
    } catch {}

})


// resize event 

window.addEventListener('resize', function() {
    c = document.getElementsByClassName('Control')[0].style.display;
    m = document.getElementsByClassName('Messenger')[0].style.display
    g = document.getElementsByClassName('MessengerNotifications')[0].style.display
    t = document.getElementsByClassName('Notifications')[0].style.display
    resize(c, m, g, t)
    try {
        b = window.location.href.replace(window.location.origin,'')
        b = b.split('/')[2]
        if (b == 'WorkingPaper') {
            innerWidthColumn();
        }
    } catch {}
})