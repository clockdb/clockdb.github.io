
// analysis/audit/anomalies.js

function DateAnomaliesi(DateAnomaliesi) {
    document.getElementById('DateAnomalies1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateAnomalies2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateAnomalies3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateAnomalies4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateAnomalies5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateAnomalies6').innerHTML = document.getElementById('ContextDate6').value;
};

function AnomaliesAmend(AnomaliesAmend) {
    document.getElementById('AnomaliesAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('AnomaliesAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('AnomaliesAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('AnomaliesAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('AnomaliesAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('AnomaliesAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefAnomalies() {
    document.getElementById('AnomaliesFilings1').href = document.getElementById('Filings1').href
    document.getElementById('AnomaliesFilings2').href = document.getElementById('Filings2').href
    document.getElementById('AnomaliesFilings3').href = document.getElementById('Filings3').href
    document.getElementById('AnomaliesFilings4').href = document.getElementById('Filings4').href
    document.getElementById('AnomaliesFilings5').href = document.getElementById('Filings5').href
    document.getElementById('AnomaliesFilings6').href = document.getElementById('Filings6').href
};

function BalanceAnomaliesCurrentAssets(BalanceAnomaliesCurrentAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });    
    // Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.31').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.11').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentAssets1').value = numUSD.format(Math.max(a, b));
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.32').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.12').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentAssets2').value = numUSD.format(Math.max(a, b));
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.33').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.13').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentAssets3').value = numUSD.format(Math.max(a, b));
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.34').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.14').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentAssets4').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.35').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.15').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentAssets5').value = numUSD.format(Math.max(a, b));
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.36').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.16').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentAssets6').value = numUSD.format(Math.max(a, b));
};

function BalanceAnomaliesNonCurrentAssets(BalanceAnomaliesNonCurrentAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.61').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.21').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentAssets1').value = numUSD.format(Math.max(a, b));
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.62').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.22').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentAssets2').value = numUSD.format(Math.max(a, b));
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.63').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.23').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentAssets3').value = numUSD.format(Math.max(a, b));
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.64').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.24').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentAssets4').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.65').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.25').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentAssets5').value = numUSD.format(Math.max(a, b));
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.66').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.26').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentAssets6').value = numUSD.format(Math.max(a, b));
};

function BalanceAnomaliesCurrentLiabilities(BalanceAnomaliesCurrentLiabilities) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.91').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.31').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentLiabilities1').value = numUSD.format(Math.max(a, b));
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.92').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.32').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentLiabilities2').value = numUSD.format(Math.max(a, b));
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.93').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.33').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentLiabilities3').value = numUSD.format(Math.max(a, b));
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.94').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.34').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentLiabilities4').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.95').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.35').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentLiabilities5').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.96').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.36').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesCurrentLiabilities6').value = numUSD.format(Math.max(a, b));
};

function BalanceAnomaliesNonCurrentLiabilities(BalanceAnomaliesNonCurrentLiabilities) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.121').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.41').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentLiabilities1').value = numUSD.format(Math.max(a, b));
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.122').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.42').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentLiabilities2').value = numUSD.format(Math.max(a, b));
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.123').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.43').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentLiabilities3').value = numUSD.format(Math.max(a, b));
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.124').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.44').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentLiabilities4').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.125').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.45').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentLiabilities5').value = numUSD.format(Math.max(a, b));
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.126').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.46').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNonCurrentLiabilities6').value = numUSD.format(Math.max(a, b));
};

function AnomaliesShareholdersEquityi(AnomaliesShareholdersEquityi) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.151').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.51').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquityi1').value = numUSD.format(Math.max(a, b));
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.152').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.52').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquityi2').value = numUSD.format(Math.max(a, b));
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.153').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.53').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquityi3').value = numUSD.format(Math.max(a, b));
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.154').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.54').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquityi4').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.155').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.55').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquityi5').value = numUSD.format(Math.max(a, b));
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-1.2.156').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-1.3.56').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquityi6').value = numUSD.format(Math.max(a, b));
};

function BalanceAnomaliesBalanceSheets(BalanceAnomaliesBalanceSheets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesCurrentAssets1').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentAssets1').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesCurrentLiabilities1').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentLiabilities1').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesShareholdersEquityi1').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesBalanceSheets1').value = numUSD.format(a);
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesCurrentAssets2').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentAssets2').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesCurrentLiabilities2').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentLiabilities2').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesShareholdersEquityi2').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesBalanceSheets2').value = numUSD.format(a);
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesCurrentAssets3').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentAssets3').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesCurrentLiabilities3').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentLiabilities3').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesShareholdersEquityi3').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesBalanceSheets3').value = numUSD.format(a);
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesCurrentAssets4').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentAssets4').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesCurrentLiabilities4').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentLiabilities4').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesShareholdersEquityi4').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesBalanceSheets4').value = numUSD.format(a);
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesCurrentAssets5').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentAssets5').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesCurrentLiabilities5').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentLiabilities5').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesShareholdersEquityi5').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesBalanceSheets5').value = numUSD.format(a);
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesCurrentAssets6').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentAssets6').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesCurrentLiabilities6').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNonCurrentLiabilities6').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesShareholdersEquityi6').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesBalanceSheets6').value = numUSD.format(a);
};

function BalanceAnomaliesGrossMargin(BalanceAnomaliesGrossMargin) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    
    // Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.31').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.11').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesGrossMargin1').value = numUSD.format(Math.max(a, b));
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.32').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.12').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesGrossMargin2').value = numUSD.format(Math.max(a, b));
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.33').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.13').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesGrossMargin3').value = numUSD.format(Math.max(a, b));
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.34').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.14').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesGrossMargin4').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.35').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.15').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesGrossMargin5').value = numUSD.format(Math.max(a, b));
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.36').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.16').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesGrossMargin6').value = numUSD.format(Math.max(a, b));
};

function BalanceAnomaliesOperatingIncome(BalanceAnomaliesOperatingIncome) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.61').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.21').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesOperatingIncome1').value = numUSD.format(Math.max(a, b));
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.62').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.22').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesOperatingIncome2').value = numUSD.format(Math.max(a, b));
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.63').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.23').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesOperatingIncome3').value = numUSD.format(Math.max(a, b));
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.64').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.24').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesOperatingIncome4').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.65').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.25').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesOperatingIncome5').value = numUSD.format(Math.max(a, b));
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.66').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.26').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesOperatingIncome6').value = numUSD.format(Math.max(a, b));
};

function BalanceAnomaliesIncomeBeforeTaxes(BalanceAnomaliesIncomeBeforeTaxes) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.91').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.31').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesIncomeLossBeforeTaxes1').value = numUSD.format(Math.max(a, b));
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.92').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.32').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesIncomeLossBeforeTaxes2').value = numUSD.format(Math.max(a, b));
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.93').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.33').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesIncomeLossBeforeTaxes3').value = numUSD.format(Math.max(a, b));
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.94').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.34').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesIncomeLossBeforeTaxes4').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.95').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.35').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesIncomeLossBeforeTaxes5').value = numUSD.format(Math.max(a, b));
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.96').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.36').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesIncomeLossBeforeTaxes6').value = numUSD.format(Math.max(a, b));
};

function BalanceAnomaliesNetIncome(BalanceAnomaliesNetIncome) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.121').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.41').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNetIncome1').value = numUSD.format(Math.max(a, b));
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.122').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.42').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNetIncome2').value = numUSD.format(Math.max(a, b));
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.123').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.43').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNetIncome3').value = numUSD.format(Math.max(a, b));
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.124').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.44').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNetIncome4').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.125').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.45').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNetIncome5').value = numUSD.format(Math.max(a, b));
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-2.1.126').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-2.2.46').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesNetIncome6').value = numUSD.format(Math.max(a, b));
};

function BalanceAnomaliesIncomeStatements(BalanceAnomaliesIncomeStatements) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesGrossMargin1').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesOperatingIncome1').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesIncomeLossBeforeTaxes1').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNetIncome1').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesIncomeStatement1').value = numUSD.format(a);
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesGrossMargin2').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesOperatingIncome2').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesIncomeLossBeforeTaxes2').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNetIncome2').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesIncomeStatement2').value = numUSD.format(a);
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesGrossMargin3').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesOperatingIncome3').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesIncomeLossBeforeTaxes3').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNetIncome3').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesIncomeStatement3').value = numUSD.format(a);
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesGrossMargin4').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesOperatingIncome4').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesIncomeLossBeforeTaxes4').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNetIncome4').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesIncomeStatement4').value = numUSD.format(a);
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesGrossMargin5').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesOperatingIncome5').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesIncomeLossBeforeTaxes5').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNetIncome5').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesIncomeStatement5').value = numUSD.format(a);
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesGrossMargin6').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesOperatingIncome6').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesIncomeLossBeforeTaxes6').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('AnomaliesNetIncome6').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesIncomeStatement6').value = numUSD.format(a);
};

function BalanceAnomaliesComprehensiveIncome(BalanceAnomaliesComprehensiveIncome) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-3.1.31').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-3.2.11').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesComprehensiveIncome1').value = numUSD.format(Math.max(a, b));
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-3.1.32').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-3.2.12').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesComprehensiveIncome2').value = numUSD.format(Math.max(a, b));
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-3.1.33').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-3.2.13').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesComprehensiveIncome3').value = numUSD.format(Math.max(a, b));
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-3.1.34').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-3.2.14').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesComprehensiveIncome4').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-3.1.35').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-3.2.15').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesComprehensiveIncome5').value = numUSD.format(Math.max(a, b));
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-3.1.36').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-3.2.16').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesComprehensiveIncome6').value = numUSD.format(Math.max(a, b));
};

function BalanceAnomaliesShareholdersEquity(BalanceAnomaliesShareholdersEquity) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    c = Math.abs(parseInt(document.getElementById('PRO-4.0.31').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-4.1.31').value.replaceAll(/,/g, '')));
    a = Math.abs(parseInt(document.getElementById('PRO-4.2.01').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.11').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.21').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.31').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.41').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.51').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.61').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquity1').value = numUSD.format(Math.max(a, b, c));
    // Second Last Year
    c = Math.abs(parseInt(document.getElementById('PRO-4.0.32').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-4.1.32').value.replaceAll(/,/g, '')));
    a = Math.abs(parseInt(document.getElementById('PRO-4.2.02').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.12').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.22').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.32').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.42').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.52').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.62').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquity2').value = numUSD.format(Math.max(a, b, c));
    // Third Last Year
    c = Math.abs(parseInt(document.getElementById('PRO-4.0.33').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-4.1.33').value.replaceAll(/,/g, '')));
    a = Math.abs(parseInt(document.getElementById('PRO-4.2.03').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.13').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.23').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.33').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.43').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.53').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.63').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquity3').value = numUSD.format(Math.max(a, b, c));
    // Fourth Last Year
    c = Math.abs(parseInt(document.getElementById('PRO-4.0.34').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-4.1.34').value.replaceAll(/,/g, '')));
    a = Math.abs(parseInt(document.getElementById('PRO-4.2.04').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.14').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.24').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.34').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.44').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.54').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.64').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquity4').value = numUSD.format(Math.max(a, b, c));
    // Fifth Last Year
    c = Math.abs(parseInt(document.getElementById('PRO-4.0.35').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-4.1.35').value.replaceAll(/,/g, '')));
    a = Math.abs(parseInt(document.getElementById('PRO-4.2.05').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.15').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.25').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.35').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.45').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.55').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.65').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquity5').value = numUSD.format(Math.max(a, b, c));
    // Sixth Last Year
    c = Math.abs(parseInt(document.getElementById('PRO-4.0.36').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-4.1.36').value.replaceAll(/,/g, '')));
    a = Math.abs(parseInt(document.getElementById('PRO-4.2.06').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.16').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.26').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.36').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.46').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.56').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-4.2.66').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesShareholdersEquity6').value = numUSD.format(Math.max(a, b, c));
};

function BalanceAnomaliesCash(BalanceAnomaliesCash) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-5.2.11').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.21').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.31').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-5.1.41').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesCashFlow1').value = numUSD.format(Math.max(a, b));
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-5.2.12').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.22').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.32').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-5.1.42').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesCashFlow2').value = numUSD.format(Math.max(a, b));
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-5.2.13').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.23').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.33').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-5.1.43').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesCashFlow3').value = numUSD.format(Math.max(a, b));
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-5.2.14').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.24').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.34').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-5.1.44').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesCashFlow4').value = numUSD.format(Math.max(a, b));
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-5.2.15').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.25').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.35').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-5.1.45').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesCashFlow5').value = numUSD.format(Math.max(a, b));
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('PRO-5.2.16').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.26').value.replaceAll(/,/g, '')));
    a = a + Math.abs(parseInt(document.getElementById('PRO-5.2.36').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('PRO-5.1.46').value.replaceAll(/,/g, '')));
    document.getElementById('TotalAnomaliesCashFlow6').value = numUSD.format(Math.max(a, b));
};