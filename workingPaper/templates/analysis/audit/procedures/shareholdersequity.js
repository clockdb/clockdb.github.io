
// analysis/audit/procedures/shareholdersequity.js

function DateProcedureAnnualShareholdersEquityiii(DateProcedureAnnualShareholdersEquityiii) {
    document.getElementById('DateProcedureAnnualShareholdersEquityiii1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualShareholdersEquityiii2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualShareholdersEquityiii3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualShareholdersEquityiii4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualShareholdersEquityiii5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualShareholdersEquityiii6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualShareholdersEquityiiiAmend(ProcedureAnnualShareholdersEquityiiiAmend) {
    document.getElementById('ProcedureAnnualShareholdersEquityiiiAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualShareholdersEquityiiiAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualShareholdersEquityiiiAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualShareholdersEquityiiiAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualShareholdersEquityiiiAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualShareholdersEquityiiiAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualShareholdersEquityiii() {
    document.getElementById('ProcedureAnnualShareholdersEquityiiiFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualShareholdersEquityiiiFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualShareholdersEquityiiiFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualShareholdersEquityiiiFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualShareholdersEquityiiiFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualShareholdersEquityiiiFilings6').href = document.getElementById('Filings6').href
};

function BalanceShareholdersEquityBeginningi(BalanceShareholdersEquityBeginningi) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    a = parseInt(document.getElementById('ShareholdersEquityBeginning1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.11').value = numUSD.format(-a);
    // Second Last Year 
    a = parseInt(document.getElementById('ShareholdersEquityBeginning2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.12').value = numUSD.format(-a);
    // Third Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.13').value = numUSD.format(-a);
    // Fourth Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.14').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.15').value = numUSD.format(-a);
    // Sixth Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.16').value = numUSD.format(-a);
};

function BalanceShareholdersEquityComponents(BalanceShareholdersEquityComponents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    a = parseInt(document.getElementById('ShareholdersEquity2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.21').value = numUSD.format(-a);
    // Second Last Year 
    a = parseInt(document.getElementById('ShareholdersEquity3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.22').value = numUSD.format(-a);
    // Third Last Year
    a = parseInt(document.getElementById('ShareholdersEquity4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.23').value = numUSD.format(-a);
    // Fourth Last Year
    a = parseInt(document.getElementById('ShareholdersEquity5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.24').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('ShareholdersEquity6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.25').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.26').value = numUSD.format(-a);
};

function BalanceShareholdersEquityAnomaliesi(BalanceShareholdersEquityAnomaliesi) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-4.0.11').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.0.21').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.31').value = numUSD.format((a - b));
    // Second Last Year
    a = parseInt(document.getElementById('PRO-4.0.12').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.0.22').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.32').value = numUSD.format((a - b));
    // Third Last Year
    a = parseInt(document.getElementById('PRO-4.0.13').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.0.23').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.33').value = numUSD.format((a - b));
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-4.0.14').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.0.24').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.34').value = numUSD.format((a - b));
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-4.0.15').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.0.25').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.35').value = numUSD.format((a - b));
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-4.0.16').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.0.26').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.0.36').value = numUSD.format((a - b));
};

function DateProcedureAnnualShareholdersEquity(DateProcedureAnnualShareholdersEquity) {
    document.getElementById('DateProcedureAnnualShareholdersEquity1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualShareholdersEquity2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualShareholdersEquity3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualShareholdersEquity4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualShareholdersEquity5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualShareholdersEquity6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualShareholdersEquityAmend(ProcedureAnnualShareholdersEquityAmend) {
    document.getElementById('ProcedureAnnualShareholdersEquityAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualShareholdersEquityAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualShareholdersEquityAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualShareholdersEquityAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualShareholdersEquityAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualShareholdersEquityAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualShareholdersEquity() {
    document.getElementById('ProcedureAnnualShareholdersEquityFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualShareholdersEquityFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualShareholdersEquityFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualShareholdersEquityFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualShareholdersEquityFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualShareholdersEquityFilings6').href = document.getElementById('Filings6').href
};

function BalanceShareholdersEquityComponentsi(BalanceShareholdersEquityComponentsi) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    a = parseInt(document.getElementById('ShareholdersEquityBeginning1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncome1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.11').value = numUSD.format(-a);
    // Second Last Year 
    a = parseInt(document.getElementById('ShareholdersEquityBeginning2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncome2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.12').value = numUSD.format(-a);
    // Third Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncome3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.13').value = numUSD.format(-a);
    // Fourth Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncome4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.14').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncome5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.15').value = numUSD.format(-a);
    // Sixth Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncome6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.16').value = numUSD.format(-a);
};

function BalanceShareholdersEquityAnomalies(BalanceShareholdersEquityAnomalies) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-4.1.11').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.1.21').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.31').value = numUSD.format((a - b));
    // Second Last Year
    a = parseInt(document.getElementById('PRO-4.1.12').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.1.22').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.32').value = numUSD.format((a - b));
    // Third Last Year
    a = parseInt(document.getElementById('PRO-4.1.13').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.1.23').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.33').value = numUSD.format((a - b));
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-4.1.14').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.1.24').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.34').value = numUSD.format((a - b));
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-4.1.15').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.1.25').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.35').value = numUSD.format((a - b));
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-4.1.16').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-4.1.26').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-4.1.36').value = numUSD.format((a - b));
};

function DateProcedureAnnualShareholdersEquityi(DateProcedureAnnualShareholdersEquityi) {
    document.getElementById('DateProcedureAnnualShareholdersEquityi1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualShareholdersEquityi2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualShareholdersEquityi3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualShareholdersEquityi4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualShareholdersEquityi5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualShareholdersEquityi6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualShareholdersEquityiAmend(ProcedureAnnualShareholdersEquityiAmend) {
    document.getElementById('ProcedureAnnualShareholdersEquityiAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualShareholdersEquityiAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualShareholdersEquityiAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualShareholdersEquityiAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualShareholdersEquityiAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualShareholdersEquityiAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualShareholdersEquityi() {
    document.getElementById('ProcedureAnnualShareholdersEquityiFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualShareholdersEquityiFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualShareholdersEquityiFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualShareholdersEquityiFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualShareholdersEquityiFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualShareholdersEquityiFilings6').href = document.getElementById('Filings6').href
};

