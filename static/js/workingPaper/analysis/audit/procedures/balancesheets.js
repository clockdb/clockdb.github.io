
// analysis/audit/procedures/balancesheets.js

function DateProcedureAnnualBalanceSheets(DateProcedureAnnualBalanceSheets) {
    document.getElementById('DateProcedureAnnualBalanceSheets1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualBalanceSheets2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualBalanceSheets3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualBalanceSheets4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualBalanceSheets5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualBalanceSheets6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualBalanceSheetsAmend(ProcedureAnnualBalanceSheetsAmend) {
    document.getElementById('ProcedureAnnualBalanceSheetsAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualBalanceSheetsAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualBalanceSheetsAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualBalanceSheetsAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualBalanceSheetsAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualBalanceSheetsAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualBalanceSheets() {
    document.getElementById('ProcedureAnnualBalanceSheetsFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualBalanceSheetsFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualBalanceSheetsFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualBalanceSheetsFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualBalanceSheetsFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualBalanceSheetsFilings6').href = document.getElementById('Filings6').href
}

function BalancePROAssets(BalancePROAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('CurrentAssets1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NonCurrentAssets1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.11').value = numUSD.format(a + b);
    // Second Last Year
    a = parseInt(document.getElementById('CurrentAssets2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NonCurrentAssets2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.12').value = numUSD.format(a + b);
    // Third Last Year
    a = parseInt(document.getElementById('CurrentAssets3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NonCurrentAssets3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.13').value = numUSD.format(a + b);
    // Fourth Last Year                                
    a = parseInt(document.getElementById('CurrentAssets4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NonCurrentAssets4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.14').value = numUSD.format(a + b);
    // Fifth Last Year                               
    a = parseInt(document.getElementById('CurrentAssets5').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NonCurrentAssets5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.15').value = numUSD.format(a + b);
    // Fifth Last Year                               
    a = parseInt(document.getElementById('CurrentAssets6').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NonCurrentAssets6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.16').value = numUSD.format(a + b);
};

function BalancePROLiabilitiesAndShareholdersEquity(BalancePROLiabilitiesAndShareholdersEquity) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('TotalLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.21').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('TotalLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.22').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('TotalLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.23').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('TotalLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.24').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('TotalLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.25').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('TotalLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.26').value = numUSD.format(a);
};

function BalancePROAssetsLessLiabilitiesAndShareholdersEquity(BalancePROAssetsLessLiabilitiesAndShareholdersEquity) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-1.1.11').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-1.1.21').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.31').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('PRO-1.1.12').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-1.1.22').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.32').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('PRO-1.1.13').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-1.1.23').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.33').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-1.1.14').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-1.1.24').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.34').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-1.1.15').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-1.1.25').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.35').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-1.1.16').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('PRO-1.1.26').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.1.36').value = numUSD.format(a);
};

function DateProcedureAnnualBalanceSheetsii(DateProcedureAnnualBalanceSheetsii) {
    document.getElementById('DateProcedureAnnualBalanceSheetsii1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualBalanceSheetsii2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualBalanceSheetsii3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualBalanceSheetsii4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualBalanceSheetsii5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualBalanceSheetsii6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualBalanceSheetsiiAmend(ProcedureAnnualBalanceSheetsiiAmend) {
    document.getElementById('ProcedureAnnualBalanceSheetsiiAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualBalanceSheetsiiAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualBalanceSheetsiiAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualBalanceSheetsiiAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualBalanceSheetsiiAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualBalanceSheetsiiAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualBalanceSheetsii() {
    document.getElementById('ProcedureAnnualBalanceSheetsiiFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualBalanceSheetsiiFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualBalanceSheetsiiFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualBalanceSheetsiiFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualBalanceSheetsiiFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualBalanceSheetsiiFilings6').href = document.getElementById('Filings6').href
};

function BalancePROCurrentAssetsComponents(BalancePROCurrentAssetsComponents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('Cash1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.11').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('Cash2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.12').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('Cash3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.13').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('Cash4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.14').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('Cash5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.15').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('Cash6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.16').value = numUSD.format(a);
};

function BalancePROCurrentAssetsAnomaly(BalancePROCurrentAssetsAnomaly) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-1.2.11').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.21').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.31').value = numUSD.format((a - b));
    // Second Last Year
    a = parseInt(document.getElementById('PRO-1.2.12').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.22').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.32').value = numUSD.format((a - b));
    // Third Last Year
    a = parseInt(document.getElementById('PRO-1.2.13').value.replaceAll(/,/g, ''));    
    b = parseInt(document.getElementById('PRO-1.2.23').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.33').value = numUSD.format((a - b));
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-1.2.14').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.24').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.34').value = numUSD.format((a - b));
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-1.2.15').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.25').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.35').value = numUSD.format((a - b));
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-1.2.16').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.26').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.36').value = numUSD.format((a - b));
};

function BalancePRONonCurrentAssetsComponents(BalancePRONonCurrentAssetsComponents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('LongTermReceivables1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.41').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('LongTermReceivables2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.42').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('LongTermReceivables3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.43').value = numUSD.format(a);
    // Fourth Year
    a = parseInt(document.getElementById('LongTermReceivables4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.44').value = numUSD.format(a);
    // Fifth Year
    a = parseInt(document.getElementById('LongTermReceivables5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.45').value = numUSD.format(a);
    // Sixth Year
    a = parseInt(document.getElementById('LongTermReceivables6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.46').value = numUSD.format(a);
};

function BalancePRONonCurrentAssetsAnomaly(BalancePRONonCurrentAssetsAnomaly) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-1.2.41').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.51').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.61').value = numUSD.format((a - b));
    // Second Last Year
    a = parseInt(document.getElementById('PRO-1.2.42').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.52').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.62').value = numUSD.format((a - b));
    // Third Last Year
    a = parseInt(document.getElementById('PRO-1.2.43').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.53').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.63').value = numUSD.format((a - b));
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-1.2.44').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.54').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.64').value = numUSD.format((a - b));
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-1.2.45').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.55').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.65').value = numUSD.format((a - b));
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-1.2.46').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.56').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.66').value = numUSD.format((a - b));
};

function BalancePROCurrentLiabilitiesComponents(BalancePROCurrentLiabilitiesComponents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.71').value = numUSD.format(-a);
    // Second Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.72').value = numUSD.format(-a);
    // Third Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.73').value = numUSD.format(-a);
    // Fourth Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.74').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.75').value = numUSD.format(-a);
    // Sixth Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.76').value = numUSD.format(-a);
};

function BalancePROCurrentLiabilitiesAnomalies(BalancePROCurrentLiabilitiesAnomalies) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-1.2.71').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.81').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.91').value = numUSD.format(a - b);
    // Second Last Year
    a = parseInt(document.getElementById('PRO-1.2.72').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.82').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.92').value = numUSD.format(a - b);
    // Third Last Year
    a = parseInt(document.getElementById('PRO-1.2.73').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.83').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.93').value = numUSD.format(a - b);
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-1.2.74').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.84').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.94').value = numUSD.format(a - b);
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-1.2.75').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.85').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.95').value = numUSD.format(a - b);
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-1.2.76').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.86').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.96').value = numUSD.format(a - b);
};

function BalancePRONonCurrentLiabilitiesComponents(BalancePRONonCurrentLiabilitiesComponents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('LongTermDebt1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.101').value = numUSD.format(-a);
    // Second Last Year
    a = parseInt(document.getElementById('LongTermDebt2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.102').value = numUSD.format(-a);
    // Third Last Year
    a = parseInt(document.getElementById('LongTermDebt3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.103').value = numUSD.format(-a);
    // Fourth Last Year
    a = parseInt(document.getElementById('LongTermDebt4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.104').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('LongTermDebt5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.105').value = numUSD.format(-a);
    // Sixth Last Year
    a = parseInt(document.getElementById('LongTermDebt6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.106').value = numUSD.format(-a);
};

function BalancePRONonCurrentLiabilitiesAnomalies(BalancePRONonCurrentLiabilitiesAnomalies) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-1.2.101').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.111').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.121').value = numUSD.format((a - b));
    // Second Last Year
    a = parseInt(document.getElementById('PRO-1.2.102').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.112').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.122').value = numUSD.format((a - b));
    // Third Last Year
    a = parseInt(document.getElementById('PRO-1.2.103').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.113').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.123').value = numUSD.format((a - b));
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-1.2.104').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.114').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.124').value = numUSD.format((a - b));
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-1.2.105').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.115').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.125').value = numUSD.format((a - b));
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-1.2.106').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.116').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.126').value = numUSD.format((a - b));
};

function BalancePROShareholdersEquityComponents(BalancePROShareholdersEquityComponents) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('ConvertibleDebt1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests1').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.131').value = numUSD.format(-a);
    // Second Last Year
    a = parseInt(document.getElementById('ConvertibleDebt2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests2').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.132').value = numUSD.format(-a);
    // Third Last Year
    a = parseInt(document.getElementById('ConvertibleDebt3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests3').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.133').value = numUSD.format(-a);
    // Fourth Last Year
    a = parseInt(document.getElementById('ConvertibleDebt4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests4').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.134').value = numUSD.format(-a);
    // Fifth Last Year
    a = parseInt(document.getElementById('ConvertibleDebt5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests5').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.135').value = numUSD.format(-a);
    // Sixth Last Year
    a = parseInt(document.getElementById('ConvertibleDebt6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests6').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.136').value = numUSD.format(-a);
};

function BalancePROShareholdersEquityAnomalies(BalancePROShareholdersEquityAnomalies) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-1.2.131').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.141').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.151').value = numUSD.format((a - b));
    // Second Last Year
    a = parseInt(document.getElementById('PRO-1.2.132').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.142').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.152').value = numUSD.format((a - b));
    // Third Last Year
    a = parseInt(document.getElementById('PRO-1.2.133').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.143').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.153').value = numUSD.format((a - b));
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-1.2.134').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.144').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.154').value = numUSD.format((a - b));
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-1.2.135').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.145').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.155').value = numUSD.format((a - b));
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-1.2.136').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PRO-1.2.146').value.replaceAll(/,/g, ''));
    document.getElementById('PRO-1.2.156').value = numUSD.format((a - b));
};

function DateProcedureAnnualBalanceSheetsiii(DateProcedureAnnualBalanceSheetsiii) {
    document.getElementById('DateProcedureAnnualBalanceSheetsiii1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateProcedureAnnualBalanceSheetsiii2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateProcedureAnnualBalanceSheetsiii3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateProcedureAnnualBalanceSheetsiii4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateProcedureAnnualBalanceSheetsiii5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateProcedureAnnualBalanceSheetsiii6').innerHTML = document.getElementById('ContextDate6').value;
};

function ProcedureAnnualBalanceSheetsiiiAmend(ProcedureAnnualBalanceSheetsiiiAmend) {
    document.getElementById('ProcedureAnnualBalanceSheetsiiiAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('ProcedureAnnualBalanceSheetsiiiAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('ProcedureAnnualBalanceSheetsiiiAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('ProcedureAnnualBalanceSheetsiiiAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('ProcedureAnnualBalanceSheetsiiiAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('ProcedureAnnualBalanceSheetsiiiAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefProcedureAnnualBalanceSheetsiii() {
    document.getElementById('ProcedureAnnualBalanceSheetsiiiFilings1').href = document.getElementById('Filings1').href
    document.getElementById('ProcedureAnnualBalanceSheetsiiiFilings2').href = document.getElementById('Filings2').href
    document.getElementById('ProcedureAnnualBalanceSheetsiiiFilings3').href = document.getElementById('Filings3').href
    document.getElementById('ProcedureAnnualBalanceSheetsiiiFilings4').href = document.getElementById('Filings4').href
    document.getElementById('ProcedureAnnualBalanceSheetsiiiFilings5').href = document.getElementById('Filings5').href
    document.getElementById('ProcedureAnnualBalanceSheetsiiiFilings6').href = document.getElementById('Filings6').href
};