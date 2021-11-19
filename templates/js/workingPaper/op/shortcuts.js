
// op/shortcuts.js

// escape key
document.addEventListener('keydown', (event) => {
    keys = [27]
    if (keys.includes(event.keyCode)) {
        event.preventDefault();
    }
})

function TogglePanel(direction) {
    if (localStorage.Control == 'On') {
        if (direction == 'up') {
            Notifications('On')
        } else {
            Messenger('On')
        }
    } else {
        if (localStorage.Messenger == 'On') {
            if (direction == 'up') {
                Control('On')
            } else {
                MessengerNotifications('On')
            }
        } else {
            if (localStorage.MessengerNotifications == 'On') {
                if (direction == 'up') {
                    Messenger('On')
                } else {
                    Notifications('On')
                }
            } else {
                if (localStorage.Notifications == 'On') {
                    if (direction == 'up') {
                        MessengerNotifications('On')
                    } else {
                        Control('On')
                    }
                } else {
                    if (direction == 'up') {
                        Control('On')
                    } else {
                        Messenger('On')
                    }

                }
            }
        }
    }
}

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

// column change
function columnSelect(k) {
    if (k == 'ArrowLeft') {
        k = -1
    } else {
        k = 1
    }
    var a = parseInt(localStorage.Column)
    if (a == 1) {
        if (k < 0) {
            var d = 6
        } else {
            var d = a + k
        }
    } else {
        if (a == 6) {
            if (k > 0) {
                var d = 1
            } else {
                var d = a + k
            }
        } else {
            var d = a + k
        }
    }
    displaySelectedColumn(a, d);
}

function displaySelectedColumn(a, d) {
    var b = "C" + a
    var c = document.getElementsByClassName(b);
    for(let i = 0; i < c.length; i++) { 
        document.getElementsByClassName(b)[i].style.display = 'none';
    };
    var b = "C" + d
    var c = document.getElementsByClassName(b);
    for(let i = 0; i < c.length; i++) { 
        document.getElementsByClassName(b)[i].style.display = '';
    };
    localStorage.setItem('Column', d)
}

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

// shortcuts
function ShortCuts(id, page, position) {
    localStorage.setItem('position', position)
    showPage(page)
    historyPush(page)
    ShortCutsLinks = [
        'Context',
        'IntrinsicValues',
        'CapitalizationRates',
        'CapitalizedCashFlow',
        'CapitalizedIncome',
        'FinancialRatios',
        'AdditionalInformation',
        'Summary',
        'Anomalies',
        'MaterialityThreshold',
        'ProcedureAnnualBalanceSheets',
        'ProcedureAnnualIncomeStatements',
        'ProcedureAnnualComprehensiveIncome',
        'ProcedureAnnualShareholdersEquity',
        'ProcedureAnnualCashFlow',
        'AnnualBalanceSheets',
        'AnnualIncomeStatements',
        'AnnualComprehensiveIncome',
        'AnnualShareholdersEquity',
        'AnnualCashFlow',
        'AnnualTrialBalances',
    ]
    if (ShortCutsLinks.includes(page)) {
        a = id.replace('ShortCut', '1')
        if (a == 'MaterialityThresholdValue1') {
            a = a.replace('1','6')
        }
        a = document.getElementById(a);
        window.scrollTo(0, 0);
    }
    try {
        a.focus();
        a.select();
    } catch {}
}
