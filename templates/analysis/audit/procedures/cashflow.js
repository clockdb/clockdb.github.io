
// analysis/audit/procedures/cashflow.js

function DateProcedureAnnualCashFlow(DateProcedureAnnualCashFlow) {
    document.getElementById('DateProcedureAnnualCashFlow1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualCashFlow2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualCashFlow3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualCashFlow4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualCashFlow5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualCashFlow6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualCashFlowAmend(ProcedureAnnualCashFlowAmend) {
    document.getElementById('ProcedureAnnualCashFlowAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualCashFlowAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualCashFlowAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualCashFlowAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualCashFlowAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualCashFlowAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualCashFlow() {
    document.getElementById('ProcedureAnnualCashFlowFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualCashFlowFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualCashFlowFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualCashFlowFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualCashFlowFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualCashFlowFilings6').href = document.getElementById('Filings6').href
};

function CashFlowCashBeginning(CashFlowCashBeginning) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('CashEndingBalance1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.11').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('CashEndingBalance2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.12').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('CashEndingBalance3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.13').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('CashEndingBalance4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.14').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('CashEndingBalance5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.15').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('CashEndingBalance6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.16').value = numUSD.format(a);
};

function CashBalanceSheetsAudit(CashBalanceSheetsAudit) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })                                
    // Last Year
    a = parseInt(document.getElementById('Cash1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.21').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('Cash2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.22').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('Cash3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.23').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('Cash4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.24').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('Cash5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.25').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('Cash6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.26').value = numUSD.format(a);
};

function CashFlowCashAnomaly(CashFlowCashAnomaly) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-5.1.11').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.21').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.31').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.41').value = numUSD.format(-a);
    // Second Last Year
    a = parseInt(document.getElementById('PRO-5.1.12').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.22').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.32').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.42').value = numUSD.format(-a);
    // Third Last Year
    a = parseInt(document.getElementById('PRO-5.1.13').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.23').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.33').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.43').value = numUSD.format(-a);
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-5.1.14').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.24').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.34').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.44').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-5.1.15').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.25').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.35').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.45').value = numUSD.format(-a);
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-5.1.16').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.26').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-5.1.36').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-5.1.46').value = numUSD.format(a);
};

function DateProcedureAnnualCashFlowClassification(DateProcedureAnnualCashFlowClassification) {
    document.getElementById('DateProcedureAnnualCashFlowClassification1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualCashFlowClassification2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualCashFlowClassification3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualCashFlowClassification4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualCashFlowClassification5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualCashFlowClassification6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualCashFlowClassificationAmend(ProcedureAnnualCashFlowClassificationAmend) {
    document.getElementById('ProcedureAnnualCashFlowClassificationAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualCashFlowClassificationAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualCashFlowClassificationAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualCashFlowClassificationAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualCashFlowClassificationAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualCashFlowClassificationAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualCashFlowClassification() {
    document.getElementById('ProcedureAnnualCashFlowClassificationFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualCashFlowClassificationFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualCashFlowClassificationFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualCashFlowClassificationFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualCashFlowClassificationFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualCashFlowClassificationFilings6').href = document.getElementById('Filings6').href
};