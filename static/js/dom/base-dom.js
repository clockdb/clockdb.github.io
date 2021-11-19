
// dom/base.js
console.log('dom/base.js')

// dom
document.addEventListener('DOMContentLoaded', function() {
    console.log('dom/base.js')
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
        Control('On')
    }
    setChatInitialTimestamp()
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

// escape key
document.addEventListener('keydown', (event) => {
    keys = [27]
    if (keys.includes(event.keyCode)) {
        event.preventDefault();
    }
})

// shortcut keys
document.addEventListener('keydown', (event) => {
    b = window.location.href.replace(window.location.origin,'')
    b = b.split('/')[2]
    i = 110
    ii = 37
    iii = 38
    iv = 39
    v = 40
    vi = 13
    keys = [i, ii, iii, iv, v, vi]
    if (keys.includes(event.keyCode) && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        a = 0
        // .
        if (event.keyCode == i) {
            if (b == 'WorkingPaper') {
                page = 'Context';
            }
        }
        // left
        if (event.keyCode == ii) {
            if (b == 'WorkingPaper') {
                historyBack()
                a = 1
            }
        }
        // Up
        if (event.keyCode == iii) {
            TogglePanel('up')
            a = 1
        }
        // right
        if (event.keyCode == iv) {
            if (b == 'WorkingPaper') {
                historyForward()
                a = 1
            }
        }
        // down
        if (event.keyCode == v) {
            TogglePanel('down')
            a = 1
        }
        // enter
        if (event.keyCode == vi) {
            if (b == 'WorkingPaper') {
                page = 'Opinion';
            }
        }
        if (a != 1) {
            showPage(page);
            historyPush(page);
            window.scrollTo(0, 0);
        }
    }
});

// alt + arrows
document.addEventListener('keydown', (event) => {
    b = window.location.href.replace(window.location.origin,'')
    b = b.split('/')[2]
    if (b == 'WorkingPaper') {
        i = 'ArrowRight'
        ii = 'ArrowLeft'
        keys = [i, ii]			
        if (keys.includes(event.code) && (event.ctrlKey || event.metaKey)) {
        } else {
            if (keys.includes(event.code) && (event.altKey || event.metaKey)) {
                event.preventDefault();
                if (window.innerWidth < 799) {
                    if (event.code == i) {
                        columnSelect(i)
                    }
                    if (event.code == ii) {
                        columnSelect(ii)
                    }
                }
            }
        }
    }
    i = 'ArrowUp'
    ii = 'ArrowDown'
    keys = [i, ii]
    if (keys.includes(event.code) && (event.altKey || event.metaKey)) {
        event.preventDefault();
        if (event.code == i) {
            TogglePanel('up')
        }
        if (event.code == ii) {
            TogglePanel('down')
        }
    }
});

// alt valuations shortcut 
document.addEventListener('keydown', (event) => {
    b = window.location.href.replace(window.location.origin,'')
    b = b.split('/')[2]
    i = ['MetaLeft']
    ii = ['ControlLeft']
    keys = [i, ii]
    if (keys.includes(event.code)) {
    } else {			
        if (b == 'WorkingPaper') {
            i = 'Numpad0'
            ii = 'Numpad1'
            iii = 'Numpad2'
            iv = 'Numpad3'
            v = 'Numpad4'
            vi = 'Numpad5'
            keys = [i, ii, iii, iv, v, vi]
            if (keys.includes(event.code) && (event.ctrlKey || event.metaKey) && (event.altKey || event.metaKey)) {
            } else {
                if (keys.includes(event.code) && (event.altKey || event.metaKey)) {
                    event.preventDefault();
                    if (event.code == i) {
                        page = 'IntrinsicValues'
                    }
                    if (event.code == ii) {
                        page = 'CapitalizedCashFlow'
                    }
                    if (event.code == iii) {
                        page = 'CapitalizationRates'
                    }
                    if (event.code == iv) {
                        page = 'CapitalizedIncome'
                    }
                    if (event.code == v) {
                        page = 'AdditionalInformation'
                    }
                    if (event.code == vi) {
                        page = 'FinancialRatios'
                    }
                    if (page != undefined) {
                        showPage(page)
                        historyPush(page)
                        window.scrollTo(0, 0);
                    }
                }
            }
        }
    }
});

// ctrl financials shortcut 
document.addEventListener('keydown', (event) => {
    b = window.location.href.replace(window.location.origin,'')
    b = b.split('/')[2]
    if (b == 'WorkingPaper') {
        i = 'Numpad0'
        ii = 'Numpad1'
        iii = 'Numpad2'
        iv = 'Numpad3'
        v = 'Numpad4'
        vi = 'Numpad5'
        vii = 'Numpad6'
        viii = 'Numpad7'
        ix = 'Numpad8'
        //
        keys = [i, ii, iii, iv, v, vi, vii, viii, ix]
        //
        if (keys.includes(event.code) && (event.altKey || event.metaKey)) {
        } else {
            if (keys.includes(event.code) && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (event.code == i) {
                    page = 'AnnualTrialBalances'
                }
                if (event.code == ii) {
                    page = 'AnnualCashFlow'
                }
                if (event.code == iii) {
                    page = 'AnnualBalanceSheets'
                }
                if (event.code == iv) {
                    page = 'AnnualIncomeStatements'
                }
                if (event.code == v) {
                    page = 'AnnualComprehensiveIncome'
                }
                if (event.code == vi) {
                    page = 'AnnualShareholdersEquity'
                }
                if (page != undefined) {
                    showPage(page)
                    historyPush(page)
                    window.scrollTo(0, 0);
                }
            }
        }
    }
});

// alt + ctrl audit shortcut 
document.addEventListener('keydown', (event) => {
    b = window.location.href.replace(window.location.origin,'')
    b = b.split('/')[2]
    if (b == 'WorkingPaper') {
        i = 'Numpad0'
        ii = 'Numpad1'
        iii = 'Numpad2'
        iv = 'Numpad3'
        v = 'Numpad4'
        vi = 'Numpad5'
        vii = 'Numpad6'
        viii = 'Numpad7'
        ix = 'Numpad8'
        keys = [i, ii, iii, iv, v, vi, vii, viii, ix]
        if (keys.includes(event.code) && (event.ctrlKey || event.metaKey) && (event.altKey || event.metaKey)) {
            if (event.code == i) {
                page = 'Summary'
            }
            if (event.code == ii) {
                page = 'ProcedureAnnualCashFlow'
            }
            if (event.code == iii) {
                page = 'ProcedureAnnualBalanceSheets'
            }
            if (event.code == iv) {
                page = 'ProcedureAnnualIncomeStatements'
            }
            if (event.code == v) {
                page = 'ProcedureAnnualComprehensiveIncome'
            }
            if (event.code == vi) {
                page = 'ProcedureAnnualShareholdersEquity'
            }
            if (event.code == vii) {
                page = 'Anomalies'
            }
            if (event.code == viii) {
                page = 'MaterialityThreshold'
            }
            if (event.code == ix) {
                page = 'Mission'
            }
            if (page != undefined) {
                showPage(page)
                historyPush(page)
                window.scrollTo(0, 0);
            }
        }
    }
});

// tabulation key
document.addEventListener('keydown', (event) => {
    keys = [9]
    if (keys.includes(event.keyCode)) {
        a = event.target.id
        //
        if (a == 'SearchBar') {
            event.preventDefault();
            b = document.getElementById('SearchUsersBar')
            b.select()
            document.getElementsByClassName('HeaderMenu')[0].scrollTo(9999, 0)
        }
        if (a == 'SearchUsersBar') {
            event.preventDefault();
            b = document.getElementById('SearchBar')
            b.select()
            document.getElementsByClassName('HeaderMenu')[0].scrollTo(0, 9999)
        }
    }
})

