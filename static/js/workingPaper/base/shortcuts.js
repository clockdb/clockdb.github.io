
// base/shortcuts.js
console.log('base/shortcuts.js')

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
