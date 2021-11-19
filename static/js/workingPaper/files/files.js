
// files/files.js
console.log('files/files.js')

// header

function FilesHeader() {
    document.getElementById('EntityRegistrantNameFiles').innerHTML = document.getElementById('EntityRegistrantName1').value;
}

// function

function FilesFunction() {
    document.getElementById('FilesDetails').innerHTML = '';
    files = document.getElementById('Files1').files;
    var list = document.getElementById('FilesDetails');
    var c = files.length
    if (c > 0) {
        for(let i = 1; i <= c; i++) {
            b = 1
            var tr = document.createElement('tr');
            tr.className = "Reference";
            var r = "FileProperty" + i;
            tr.id = r + '.Row';
            n = i - 1
            var name = files[n].name;
            var Reference = '';
            var Status = '';
            var WorkInProgress = '';
            var Prepared = '';
            var DatePrepared = '';
            var Reviewed = '';
            var DateReviewed = '';
            AddFile(name, tr, b, r, list, Reference, Status, WorkInProgress, Prepared, DatePrepared, Reviewed, DateReviewed);
            list.appendChild(tr)
            document.getElementById('FilesDetails').innerHTML = list.innerHTML;
        };
    }
    ReferenceVisibility();
    //
    a = document.getElementById('FileProperty1.2');
    a.focus();
    a.select();
};

// add file

function AddLine() {
    //
    document.getElementById('FilesLabel').innerHTML = "FILES"
    //
    var trLength = document.getElementById('FilesDetails').getElementsByTagName("tr").length
    //
    var ref = {}
    //
    for(let i = 1; i <= trLength; i++) {
        a = 'FileProperty' + i + '.1';
        a = document.getElementById(a).value;
        b = 'FileProperty' + i + '.2';
        b = document.getElementById(b).value;
        c = 'FileProperty' + i + '.3';
        c = document.getElementById(c).value;
        d = 'FileProperty' + i + '.4';
        d = document.getElementById(d).value;
        e = 'FileProperty' + i + '.5';
        e = document.getElementById(e).value;
        f = 'FileProperty' + i + '.6';
        f = document.getElementById(f).value;
        g = 'FileProperty' + i + '.7';
        g = document.getElementById(g).value;
        h = 'FileProperty' + i + '.8';
        h = document.getElementById(h).value;
        ref[i] = [a, b, c, d, e, f, g, h]
        focus = i + 1;
    }
    files = document.getElementById('AddLineInputFile').files;
    //
    for(let gg = 0; gg < files.length; gg++) {
        //
        var c = document.getElementsByClassName('Reference').length;
        c = c + 1
        var list = document.getElementById('FilesDetails');
        var name = files[gg].name;
        var tr = document.createElement('tr');
        tr.className = "Reference";
        var r = "FileProperty" + c;
        tr.id = r + '.Row';
        b = 1 
        var Reference = '';
        var Status = '';
        var WorkInProgress = '';
        var Prepared = '';
        var DatePrepared = '';
        var Reviewed = '';
        var DateReviewed = '';
        AddFile(name, tr, b, r, list, Reference, Status, WorkInProgress, Prepared, DatePrepared, Reviewed, DateReviewed);
        list.appendChild(tr)
    }
    document.getElementById('FilesDetails').innerHTML = list.innerHTML;
    //
    for(let i = 1; i <= trLength; i++) {
        a = 'FileProperty' + i + '.1';
        document.getElementById(a).value = ref[i][0]
        a = 'FileProperty' + i + '.2';
        document.getElementById(a).value = ref[i][1]
        a = 'FileProperty' + i + '.3';
        document.getElementById(a).value = ref[i][2]
        a = 'FileProperty' + i + '.4';
        document.getElementById(a).value = ref[i][3]
        a = 'FileProperty' + i + '.5';
        document.getElementById(a).value = ref[i][4]
        a = 'FileProperty' + i + '.6';
        document.getElementById(a).value = ref[i][5]
        a = 'FileProperty' + i + '.7';
        document.getElementById(a).value = ref[i][6]
        a = 'FileProperty' + i + '.8';
        document.getElementById(a).value = ref[i][7]
    }
    //
    ReferenceVisibility();
    //
    a = 'FileProperty' + focus + '.2'
    a = document.getElementById(a);
    a.focus()
    a.select()
}

function AddFile(name, tr, b, r, list, Reference, Status, WorkInProgress, Prepared, DatePrepared, Reviewed, DateReviewed) {
    // Description
    var td = "<td style='text-align:center'>"
    var input = "<input style='text-align:left;' " + " value='" + name + "'" + " id='" + r + '.' + b + "'>"
    b = b + 1
    html = '<td colspan="3">' + input + "</input></td>" + td 
    // Reference
    const input_base = "<input style='text-align:center;' value='"
    var input = input_base + Reference + "' " + "id='" + r + '.' + b + "'>"
    b = b + 1
    html = html + input + "</input></td>" + td
    // Status
    var input = input_base + Status + "' " + "id='" + r + '.' + b + "'>"
    b = b + 1
    html = html + input + "</input></td>" + td
    // Work In Progress
    var input = input_base + WorkInProgress + "' " + "id='" + r + '.' + b + "'>"
    b = b + 1
    html = html + input + "</input></td>" + td
    // Prepared
    var input = input_base + Prepared + "' " + "id='" + r + '.' + b + "'>"
    b = b + 1
    html = html + input + "</input></td>" + td
    // Date
    var input = input_base + DatePrepared + "' " + "id='" + r + '.' + b + "'>"
    b = b + 1
    html = html + input + "</input></td>" + td
    // Reviewed
    var input = input_base + Reviewed + "' " + "id='" + r + '.' + b + "'>"
    b = b + 1
    html = html + input + "</input></td>" + td
    // Date
    var input = input_base + DateReviewed + "' " + "id='" + r + '.' + b + "'>"
    b = b + 1
    html = html + input + "</input></td>"
    tr.innerHTML = html
}

function New() {
    a = document.getElementById('New').style.visibility;
    if (a == 'visible') {
        a = 'hidden';
    } else {
        a = 'visible';
    }
    document.getElementById('New').style.visibility = a;
}

function HideNewDirectoryButton() {
    document.getElementById('New').style.visibility = 'hidden';
}

function ReferenceHeaderButton(thisHeader) {
    Rows = document.getElementsByClassName('Reference')
    References = []
    for (let i = 0; i < Rows.length; i++) {
        try {
            //
            a = Rows[i].id.replace('.Row', '.1');
            b = Rows[i].id.replace('.Row', '.2');
            c = Rows[i].id.replace('.Row', '.3');
            d = Rows[i].id.replace('.Row', '.4');
            e = Rows[i].id.replace('.Row', '.5');
            f = Rows[i].id.replace('.Row', '.6');
            g = Rows[i].id.replace('.Row', '.7');
            h = Rows[i].id.replace('.Row', '.8');
            //
            aa = document.getElementById(a).value;
            bb = document.getElementById(b).value;
            cc = document.getElementById(c).value;
            dd = document.getElementById(d).value;
            ee = document.getElementById(e).value;
            ff = document.getElementById(f).value;
            gg = document.getElementById(g).value;
            hh = document.getElementById(h).value;
            ii = Rows[i].style.display;
            //
            a = [Rows[i].id, aa, 'Reference', bb, cc, dd, ee, ff, gg, hh, ii]
            //
            References.push(a)
        } catch {}
    }
    header = []
    for (let i = 0; i < Rows.length; i++) {
        //
        if (thisHeader.innerHTML == 'Description') {
            r = Rows[i].id.replace('.Row', '.1')
            s = document.getElementById(r).value
            gg = 1
        }
        if (thisHeader.innerHTML == 'Reference') {
            r = Rows[i].id.replace('.Row', '.2')
            s = document.getElementById(r).value
            gg = 3
        }
        if (thisHeader.innerHTML == 'Status') {
            r = Rows[i].id.replace('.Row', '.3')
            s = document.getElementById(r).value
            gg = 4
        }
        if (thisHeader.innerHTML == 'Work In Progress') {
            r = Rows[i].id.replace('.Row', '.4')
            s = document.getElementById(r).value
            gg = 5
        }
        if (thisHeader.innerHTML == 'Prepared') {
            r = Rows[i].id.replace('.Row', '.5')
            s = document.getElementById(r).value
            gg = 6
        }
        if (thisHeader.innerHTML == 'Date Prepared') {
            r = Rows[i].id.replace('.Row', '.6')
            s = document.getElementById(r).value
            gg = 7
        }
        if (thisHeader.innerHTML == 'Reviewed') {
            r = Rows[i].id.replace('.Row', '.7')
            s = document.getElementById(r).value
            gg = 8
        }
        if (thisHeader.innerHTML == 'Date Reviewed') {
            r = Rows[i].id.replace('.Row', '.8')
            s = document.getElementById(r).value
            gg = 9
        }
        header.push(s)
    }
    header = header.sort()
    //
    for (let i = 0; i < Rows.length; i++) {
        z = 0
        for (let j = 0; j < Rows.length; j++) {
            if (z == 1) {
            } else {
                if (References[i][gg] == header[j]) {
                    References[i].push(j)
                    header[j] = 'sorted'
                    z = 1
                };
            };
        };
    };
    //
    var list = document.createElement('tbody');
    for (let i = 0; i < Rows.length; i++) {
        for (let j = 0; j < Rows.length; j++) {
            if (References[j][11] == [i]) {
                var name = References[j][1];
                var tr = document.createElement('tr');
                tr.className = "Reference";
                tr.style.display = References[j][10];
                c = i + 1
                var r = "FileProperty" + c;
                tr.id = r + '.Row';
                b = 1 
                var Reference = References[j][3];
                var Status = References[j][4];
                var WorkInProgress = References[j][5];
                var Prepared = References[j][6];
                var DatePrepared = References[j][7];
                var Reviewed = References[j][8];
                var DateReviewed = References[j][9];
                AddFile(name, tr, b, r, list, Reference, Status, WorkInProgress, Prepared, DatePrepared, Reviewed, DateReviewed);
                list.appendChild(tr)
                //                                        
            }
        }
    }
    document.getElementById('FilesDetails').innerHTML = list.innerHTML;
}

function FilesPage(page) {
    if (page == 'Files') {
        showPage(page);
        historyPush(page)
        ReferenceVisibility();
        document.getElementById('FilesLabel').innerHTML = "FILES";
    } else {
        if (page ==  'CurrentAssetsFiles') {
            SupportingDocumentsCurrentAssets();
        }
        if (page ==  'NonCurrentAssetsFiles') {
            SupportingDocumentsNonCurrentAssets();
        }
        if (page ==  'CurrentLiabilitiesFiles') {
            SupportingDocumentsCurrentLiabilities();
        }
        if (page ==  'NonCurrentLiabilitiesFiles') {
            SupportingDocumentsNonCurrentLiabilities();
        }
        if (page ==  'ShareholdersEquityFiles') {
            SupportingDocumentsShareholdersEquity();
        }
        if (page ==  'GrossMarginFiles') {
            SupportingDocumentsGrossMargin();
        }
        if (page ==  'OperatingExpensesFiles') {
            SupportingDocumentsOperatingExpenses();
        }
        if (page ==  'ImpairmentAndRestructuringFiles') {
            SupportingDocumentsImpairmentAndRestructuringFiles();
        }
        if (page ==  'NonOperatingExpensesFiles') {
            SupportingDocumentsNonOperatingExpenses();
        }
        if (page ==  'EquityMethodInvesteesIncomeFiles') {
            SupportingDocumentsEquityMethodInvesteesIncome();
        }
        if (page ==  'DiscontinuedOperationsFiles') {
            SupportingDocumentsDiscontinuedOperations();
        }
        if (page ==  'IncomeTaxFiles') {
            SupportingDocumentsIncomeTax();
        }
        if (page ==  'OtherComprehensiveIncomeFiles') {
            SupportingDocumentsOtherComprehensiveIncome();
        }
        if (page ==  'OperatingActivitiesFiles') {
            SupportingDocumentsOperatingActivities();
        }
        if (page ==  'InvestingActivitiesFiles') {
            SupportingDocumentsInvestingActivities();
        }
        if (page ==  'FinancingActivitiesFiles') {
            SupportingDocumentsFinancingActivities();
        }
        if (page ==  'EffectOfExchangeRateOnCashFiles') {
            SupportingDocumentsEffectOfExchangeRateOnCash();
        }
        if (page ==  'MissionFiles') {
            SupportingDocumentsMission();
        }
        if (page ==  'MaterialityFiles') {
            SupportingDocumentsMateriality();
        }
        if (page ==  'BalanceSheetsProcedureFiles') {
            SupportingDocumentsBalanceSheetsProcedure();
        }
        if (page ==  'IncomeStatementsProcedureFiles') {
            SupportingDocumentsIncomeStatementsProcedure();
        }
        if (page ==  'ComprehensiveIncomeProcedureFiles') {
            SupportingDocumentsComprehensiveIncomeProcedure();
        }
        if (page ==  'ShareholdersEquityProcedureFiles') {
            SupportingDocumentsShareholdersEquityProcedure();
        }
        if (page ==  'CashFlowProcedureFiles') {
            SupportingDocumentsCashFlowProcedure();
        }
        if (page ==  'AnomaliesFiles') {
            SupportingDocumentsAnomalies();
        }
        if (page ==  'OpinionFiles') {
            SupportingDocumentsOpinion();
        }
        showPage('Files');
        historyPush('Files')
    }
}

function SupportingDocuments(key) {
    Rows = document.getElementsByClassName('Reference');
    z = 0
    for(let i = 0; i < Rows.length; i++) {
        var row = Rows[i].id;
        input = row.replace('.Row', '.2');
        input = document.getElementById(input).value.split('-')[0];
        a = 'none';
        if (input == key) {
            a = '';
            z = z + 1
        }
        document.getElementById(row).style.display = a;
    }
    if (z > 0) {
        a = '';
    } else {
        a = 'none';
    }
    document.getElementById('ReferenceHeaderRow').style.display = a;
}

function SupportingDocumentsCurrentAssets() {
    const key = document.getElementById('CurrentAssetsREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ CURRENT ASSETS (" + document.getElementById('CurrentAssetsREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsNonCurrentAssets() {
    const key = document.getElementById('NonCurrentAssetsREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ NON-CURRENT ASSETS (" + document.getElementById('NonCurrentAssetsREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsCurrentLiabilities() {
    const key = document.getElementById('CurrentLiabilitiesREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ CURRENT LIABILITIES (" + document.getElementById('CurrentLiabilitiesREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsNonCurrentLiabilities() {
    const key = document.getElementById('NonCurrentLiabilitiesREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ NON-CURRENT LIABILITIES (" + document.getElementById('NonCurrentLiabilitiesREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsShareholdersEquity() {
    const key = document.getElementById('ShareholdersEquityREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ SHAREHOLDERS' EQUITY (" + document.getElementById('ShareholdersEquityREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsGrossMargin() {
    const key = document.getElementById('GrossMarginREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ GROSS MARGIN (" + document.getElementById('GrossMarginREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsOperatingExpenses() {
    const key = document.getElementById('OperatingExpensesREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ OPERATING EXPENSES (" + document.getElementById('OperatingExpensesREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsImpairmentAndRestructuring() {
    const key = document.getElementById('ImpairmentAndRestructuringREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ IMPAIRMENT AND RESTRUCTURING (" + document.getElementById('ImpairmentAndRestructuringREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsNonOperatingExpenses() {
    const key = document.getElementById('NonOperatingExpensesREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ NON-OPERATING EXPENSES (" + document.getElementById('NonOperatingExpensesREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsEquityMethodInvesteesIncome() {
    const key = document.getElementById('EquityMethodInvesteesIncomeREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ EQUITY METHOD INVESTEES INCOME (" + document.getElementById('EquityMethodInvesteesIncomeREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsDiscontinuedOperations() {
    const key = document.getElementById('DiscontinuedOperationsREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ DISCONTINUED OPERATIONS (" + document.getElementById('DiscontinuedOperationsREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsIncomeTax() {
    const key = document.getElementById('IncomeTaxesREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ INCOME TAXES (" + document.getElementById('IncomeTaxesREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsOtherComprehensiveIncome() {
    const key = document.getElementById('OtherComprehensiveIncomeREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ COMPREHENSIVE INCOME (" + document.getElementById('OtherComprehensiveIncomeREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsOperatingActivities() {
    const key = document.getElementById('OperatingActivitiesREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ OPERATING ACTIVITIES (" + document.getElementById('OperatingActivitiesREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsInvestingActivities() {
    const key = document.getElementById('InvestingActivitiesREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ INVESTING ACTIVITIES (" + document.getElementById('InvestingActivitiesREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsFinancingActivities() {
    const key = document.getElementById('FinancingActivitiesREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ FINANCING ACTIVITIES (" + document.getElementById('FinancingActivitiesREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsMission() {
    const key = document.getElementById('MissionREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ MISSION (" + document.getElementById('MissionREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsMateriality() {
    const key = document.getElementById('MaterialityREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ MATERIALITY THRESHOLD (" + document.getElementById('MaterialityREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsBalanceSheetsProcedure() {
    const key = document.getElementById('BalanceSheetsProcedureREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ BALANCE SHEETS PROCEDURES (" + document.getElementById('BalanceSheetsProcedureREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsIncomeStatementsProcedure() {
    const key = document.getElementById('IncomeStatementsProcedureREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ INCOME STATEMENTS PROCEDURES (" + document.getElementById('IncomeStatementsProcedureREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsComprehensiveIncomeProcedure() {
    const key = document.getElementById('ComprehensiveIncomeProcedureREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ COMPREHENSIVE INCOME PROCEDURES (" + document.getElementById('ComprehensiveIncomeProcedureREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsShareholdersEquityProcedure() {
    const key = document.getElementById('ShareholdersEquityProcedureREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ SHAREHOLDERS' EQUITY PROCEDURES (" + document.getElementById('ShareholdersEquityProcedureREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsCashFlowProcedure() {
    const key = document.getElementById('CashFlowProcedureREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ CASH FLOW PROCEDURES (" + document.getElementById('CashFlowProcedureREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsAnomalies() {
    const key = document.getElementById('AnomaliesREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ ANOMALIES (" + document.getElementById('AnomaliesREF6').value + ") \\"
    window.scrollTo(0, 0)
}

function SupportingDocumentsOpinion() {
    const key = document.getElementById('OpinionREF6').value;
    SupportingDocuments(key);
    document.getElementById('FilesLabel').innerHTML = "FILES \\ OPINION (" + document.getElementById('OpinionREF6').value + ") \\"
    window.scrollTo(0, 0)
}
