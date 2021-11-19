
// analysis/audit/procedures/comprehensiveincome.js

function DateProcedureAnnualComprehensiveIncome(DateProcedureAnnualComprehensiveIncome) {
    document.getElementById('DateProcedureAnnualComprehensiveIncome1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualComprehensiveIncome2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualComprehensiveIncome3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualComprehensiveIncome4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualComprehensiveIncome5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualComprehensiveIncome6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualComprehensiveIncomeAmend(ProcedureAnnualComprehensiveIncomeAmend) {
    document.getElementById('ProcedureAnnualComprehensiveIncomeAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualComprehensiveIncomeAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualComprehensiveIncomeAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualComprehensiveIncomeAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualComprehensiveIncomeAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualComprehensiveIncomeAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualComprehensiveIncome() {
    document.getElementById('ProcedureAnnualComprehensiveIncomeFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualComprehensiveIncomeFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualComprehensiveIncomeFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualComprehensiveIncomeFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualComprehensiveIncomeFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualComprehensiveIncomeFilings6').href = document.getElementById('Filings6').href
};

function BalanceOtherComprehensiveIncomeComponents(BalanceOtherComprehensiveIncomeComponents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.11').value = numUSD.format(-a);
    // Second Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.12').value = numUSD.format(-a);
    // Third Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.13').value = numUSD.format(-a);
    // Fourth Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.14').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.15').value = numUSD.format(-a);
    // Sixth Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.16').value = numUSD.format(-a);
};

function BalanceComprehensiveIncomeAnomalies(BalanceComprehensiveIncomeAnomalies) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-3.1.11').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-3.1.21').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.31').value = numUSD.format((a));
    // Second Last Year
    a = parseInt(document.getElementById('PRO-3.1.12').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-3.1.22').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.32').value = numUSD.format((a));
    // Third Last Year
    a = parseInt(document.getElementById('PRO-3.1.13').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-3.1.23').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.33').value = numUSD.format((a));
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-3.1.14').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-3.1.24').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.34').value = numUSD.format((a));
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-3.1.15').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-3.1.25').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.35').value = numUSD.format((a));
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-3.1.16').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-3.1.26').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-3.1.36').value = numUSD.format((a));
};

function DateProcedureAnnualComprehensiveIncomeStatements(DateProcedureAnnualComprehensiveIncomeStatements) {
    document.getElementById('DateProcedureAnnualComprehensiveIncomeStatements1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualComprehensiveIncomeStatements2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualComprehensiveIncomeStatements3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualComprehensiveIncomeStatements4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualComprehensiveIncomeStatements5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualComprehensiveIncomeStatements6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualComprehensiveIncomeStatementsAmend(ProcedureAnnualComprehensiveIncomeStatementsAmend) {
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualComprehensiveIncomeStatements() {
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualComprehensiveIncomeStatementsFilings6').href = document.getElementById('Filings6').href
};