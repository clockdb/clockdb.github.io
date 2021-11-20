
// dom/base.js
console.log('dom/dom.js')

// dom
document.addEventListener('DOMContentLoaded', function() {
    var loading = document.getElementById('id_loading_spinner')
    loading.style.display = 'block'
    hideIf = [
        '',
        'login',
        'register',
        'password_reset',
        'change_password',
        'done',
    ]
    display(hideIf);
    onePageAppOnLoad(hideIf);
    try {
        document.getElementById('SearchBar').select()            
    } catch {
        try {
            document.getElementById('inputEmail').select()            
        } catch {
            try {
                document.getElementById('id_email').select()            
            } catch {}
        }
    }
    a = document.getElementsByClassName('NotAuthenticated')[0]
    if (a != undefined) {
        document.getElementsByClassName('HeaderMenu')[0].style.width = '100%';
    } else {
        setChatInitialTimestamp()
        Control('On')
    }
    b = window.location.href.replace(window.location.origin,'')
    b = b.split('/')[2]
    if (b == 'WorkingPaper') {
        clockdbdom()
    } else {
        controlPanelTitles();
        hideIndustrySEC();
        Posts();    
    }
});

// onePageApp buttons
document.querySelectorAll('button').forEach(button => {
    onePageApp(button);
});

// clockdb dom
function clockdbdom() {
    try {
        friendRequestButtonsOnStart();
        ChatMessagesAndNotificationsOnStart();
        controlPanel();
        document.getElementsByClassName('header')[0].style.position = 'absolute';
        document.getElementsByClassName('panelHeader')[0].style.position = 'absolute';
        DisplayWorkingPaper();
        REF();
        innerWidthColumn();
        Compile();
    } catch {}
};