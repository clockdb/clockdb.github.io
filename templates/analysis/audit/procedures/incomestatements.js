
// analysis/audit/procedures/incomestatements.js

function DateProcedureAnnualIncomeStatements(DateProcedureAnnualIncomeStatements) {
    document.getElementById('DateProcedureAnnualIncomeStatements1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualIncomeStatements2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualIncomeStatements3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualIncomeStatements4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualIncomeStatements5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualIncomeStatements6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualIncomeStatementsAmend(ProcedureAnnualIncomeStatementsAmend) {
    document.getElementById('ProcedureAnnualIncomeStatementsAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualIncomeStatementsAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualIncomeStatementsAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualIncomeStatementsAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualIncomeStatementsAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualIncomeStatementsAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualIncomeStatements() {
    document.getElementById('ProcedureAnnualIncomeStatementsFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualIncomeStatementsFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualIncomeStatementsFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualIncomeStatementsFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualIncomeStatementsFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualIncomeStatementsFilings6').href = document.getElementById('Filings6').href
};

function BalancePROGrossMarginComponents(BalancePROGrossMarginComponents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('Sales1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CostOfSales1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.11').value = numUSD.format(-(a + b));
    // Second Last Year
    a = parseInt(document.getElementById('Sales2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CostOfSales2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.12').value = numUSD.format(-(a + b));
    // Third Last Year
    a = parseInt(document.getElementById('Sales3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CostOfSales3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.13').value = numUSD.format(-(a + b));
    // Fourth Last Year
    a = parseInt(document.getElementById('Sales4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CostOfSales4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.14').value = numUSD.format(-(a + b));
    // Fifth Last Year
    a = parseInt(document.getElementById('Sales5').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CostOfSales5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.15').value = numUSD.format(-(a + b));
    // Sixth Last Year
    a = parseInt(document.getElementById('Sales6').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CostOfSales6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.16').value = numUSD.format(-(a + b));
};

function BalancePROGrossMarginAnomalies(BalancePROGrossMarginAnomalies) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-2.1.11').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.21').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.31').value = numUSD.format(a - b);
    // Second Last Year
    a = parseInt(document.getElementById('PRO-2.1.12').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.22').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.32').value = numUSD.format(a - b);
    // Third Last Year
    a = parseInt(document.getElementById('PRO-2.1.13').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.23').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.33').value = numUSD.format(a - b);
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-2.1.14').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.24').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.34').value = numUSD.format(a - b);
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-2.1.15').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.25').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.35').value = numUSD.format(a - b);
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-2.1.16').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.26').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.36').value = numUSD.format(a - b);
};

function BalancePROOperatingIncomeComponents(BalancePROOperatingIncomeComponents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('GrossMargin1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.41').value = numUSD.format(-a);
    // Second Last Year
    a = parseInt(document.getElementById('GrossMargin2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.42').value = numUSD.format(-a);
    // Third Last Year
    a = parseInt(document.getElementById('GrossMargin3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.43').value = numUSD.format(-a);
    // Fourth Last Year
    a = parseInt(document.getElementById('GrossMargin4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.44').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('GrossMargin5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.45').value = numUSD.format(-a);
    // Sixth Last Year
    a = parseInt(document.getElementById('GrossMargin6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.46').value = numUSD.format(-a);
};

function BalancePROOperatingIncomeAnomalies(BalancePROOperatingIncomeAnomalies) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-2.1.41').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.51').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.61').value = numUSD.format(a - b);
    // Second Last Year
    a = parseInt(document.getElementById('PRO-2.1.42').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.52').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.62').value = numUSD.format(a - b);
    // Third Last Year
    a = parseInt(document.getElementById('PRO-2.1.43').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.53').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.63').value = numUSD.format(a - b);
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-2.1.44').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.54').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.64').value = numUSD.format(a - b);
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-2.1.45').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.55').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.65').value = numUSD.format(a - b);
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-2.1.46').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.56').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.66').value = numUSD.format(a - b);
};

function BalancePROIncomeLossBeforeTaxesComponents(BalancePROIncomeLossBeforeTaxesComponents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('OperatingIncome1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.71').value = numUSD.format(-a);
    // Second Last Year
    a = parseInt(document.getElementById('OperatingIncome2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.72').value = numUSD.format(-a);
    // Third Last Year
    a = parseInt(document.getElementById('OperatingIncome3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.73').value = numUSD.format(-a);
    // Fourth Last Year
    a = parseInt(document.getElementById('OperatingIncome4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.74').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('OperatingIncome5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.75').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('OperatingIncome6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.76').value = numUSD.format(-a);
};

function BalancePROIncomeLossBeforeTaxesAnomalies(BalancePROIncomeLossBeforeTaxesAnomalies) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-2.1.71').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.81').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.91').value = numUSD.format(a - b);
    // Second Last Year
    a = parseInt(document.getElementById('PRO-2.1.72').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.82').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.92').value = numUSD.format((a - b));
    // Third Last Year
    a = parseInt(document.getElementById('PRO-2.1.73').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.83').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.93').value = numUSD.format((a - b));
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-2.1.74').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.84').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.94').value = numUSD.format((a - b));
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-2.1.75').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.85').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.95').value = numUSD.format((a - b));
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-2.1.76').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.86').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.96').value = numUSD.format((a - b));
};

function BalancePRONetIncomeComponents(BalancePRONetIncomeComponents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.101').value = numUSD.format(-a);
    // Second Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.102').value = numUSD.format(-a);
    // Third Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.103').value = numUSD.format(-a);
    // Fourth Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.104').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.105').value = numUSD.format(-a);
    // Sixth Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.106').value = numUSD.format(-a);
};

function BalancePRONetIncomeAnomalies(BalancePRONetIncomeAnomalies) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-2.1.101').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.111').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.121').value = numUSD.format(a - b);
    // Second Last Year
    a = parseInt(document.getElementById('PRO-2.1.102').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.112').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.122').value = numUSD.format(a - b);
    // Third Last Year
    a = parseInt(document.getElementById('PRO-2.1.103').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.113').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.123').value = numUSD.format(a - b);
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-2.1.104').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.114').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.124').value = numUSD.format(a - b);
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-2.1.105').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.115').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.125').value = numUSD.format(a - b);
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-2.1.106').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-2.1.116').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-2.1.126').value = numUSD.format(a - b);
};

function DateProcedureAnnualIncomeStatementsi(DateProcedureAnnualIncomeStatementsi) {
    document.getElementById('DateProcedureAnnualIncomeStatementsi1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualIncomeStatementsi2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualIncomeStatementsi3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualIncomeStatementsi4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualIncomeStatementsi5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualIncomeStatementsi6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualIncomeStatementsiAmend(ProcedureAnnualIncomeStatementsiAmend) {
    document.getElementById('ProcedureAnnualIncomeStatementsiAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualIncomeStatementsiAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualIncomeStatementsiAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualIncomeStatementsiAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualIncomeStatementsiAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualIncomeStatementsiAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualIncomeStatementsi() {
    document.getElementById('ProcedureAnnualIncomeStatementsiFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualIncomeStatementsiFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualIncomeStatementsiFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualIncomeStatementsiFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualIncomeStatementsiFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualIncomeStatementsiFilings6').href = document.getElementById('Filings6').href
};