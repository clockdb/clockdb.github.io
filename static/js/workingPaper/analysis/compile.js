
// analysis/compile.js
console.log('analysis/compile.js')

function Compile() {
    b = window.location.href.replace(window.location.origin,'')
    b = b.split('/')[2]
    if (b == 'WorkingPaper') {
        Context();
        TrialBalances();		
        BalanceSheets();
        IncomeStatements();
        ComprehensiveIncome();
        ShareholdersEquity();
        CashFlow();
        FinancialRatios();
        AdditionalInformation();
        CapitalizationRates();
        CapitalizedCashFlow();
        CapitalizedIncome();
        IntrinsicValues();
        Opinion();
        Mission();
        Materiality();
        ProceduresBalanceSheets();
        ProceduresIncomeStatements();
        ProceduresComprehensiveIncome();
        ProceduresShareholdersEquity();
        ProceduresCashFlow();
        Anomalies();
        Summary();
        Graph();
        FilingsReferences();
        FilesHeader();
    }
    LineChart();
}