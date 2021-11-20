
// analysis/valuation/opinion.js

function DateSummary(DateSummary) {
    document.getElementById('DateSummary1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateSummary2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateSummary3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateSummary4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateSummary5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateSummary6').innerHTML = document.getElementById('ContextDate6').value;
};

function FilingsHrefSummary() {
    document.getElementById('SummaryFilings1').href = document.getElementById('Filings1').href
    document.getElementById('SummaryFilings2').href = document.getElementById('Filings2').href
    document.getElementById('SummaryFilings3').href = document.getElementById('Filings3').href
    document.getElementById('SummaryFilings4').href = document.getElementById('Filings4').href
    document.getElementById('SummaryFilings5').href = document.getElementById('Filings5').href
    document.getElementById('SummaryFilings6').href = document.getElementById('Filings6').href
};

function SharePriceUpdate(SharePriceUpdate) {
    document.getElementById('SharePriceUpdate').innerHTML = 'Shares Price as of ' + document.getElementById('SharePriceAsOf1').value;
};

function BalanceIntrinsicValues(BalanceIntrinsicValues) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('IntrinsicValuesCI1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('WeightCIIV1').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('IntrinsicValuesCCF1').value.replaceAll(/,/g, ''));
    d = parseInt(document.getElementById('WeightCCFIV1').value.replaceAll(/,/g, ''));
    g = Math.round((a * b / (b + d)) + (c * d / (b + d)));
    h = parseInt(document.getElementById('BalanceSheetsShareholdersEquity1').value.replaceAll(/,/g, ''));
    i = Math.max(g, h, 0)
    document.getElementById('IntrinsicValues1').value = numUSD.format(i)
    document.getElementById('WeightedIV1').value = numUSD.format(i)
    // Column 2
    a = parseInt(document.getElementById('IntrinsicValuesCI2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('WeightCIIV2').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('IntrinsicValuesCCF2').value.replaceAll(/,/g, ''));
    d = parseInt(document.getElementById('WeightCCFIV2').value.replaceAll(/,/g, ''));
    g = Math.round((a * b / (b + d)) + (c * d / (b + d)));
    h = parseInt(document.getElementById('BalanceSheetsShareholdersEquity2').value.replaceAll(/,/g, ''));
    i = Math.max(g, h, 0)
    document.getElementById('IntrinsicValues2').value = numUSD.format(i)
    document.getElementById('WeightedIV2').value = numUSD.format(i)
    // Column 3
    a = parseInt(document.getElementById('IntrinsicValuesCI3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('WeightCIIV3').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('IntrinsicValuesCCF3').value.replaceAll(/,/g, ''));
    d = parseInt(document.getElementById('WeightCCFIV3').value.replaceAll(/,/g, ''));
    g = Math.round((a * b / (b + d)) + (c * d / (b + d)));
    h = parseInt(document.getElementById('BalanceSheetsShareholdersEquity3').value.replaceAll(/,/g, ''));
    i = Math.max(g, h, 0)
    document.getElementById('IntrinsicValues3').value = numUSD.format(i)
    document.getElementById('WeightedIV3').value = numUSD.format(i)
    // Column 4
    a = parseInt(document.getElementById('IntrinsicValuesCI4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('WeightCIIV4').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('IntrinsicValuesCCF4').value.replaceAll(/,/g, ''));
    d = parseInt(document.getElementById('WeightCCFIV4').value.replaceAll(/,/g, ''));
    g = Math.round((a * b / (b + d)) + (c * d / (b + d)));
    h = parseInt(document.getElementById('BalanceSheetsShareholdersEquity4').value.replaceAll(/,/g, ''));
    i = Math.max(g, h, 0)
    document.getElementById('IntrinsicValues4').value = numUSD.format(i)
    document.getElementById('WeightedIV4').value = numUSD.format(i)
};

function BalanceMarketCapitalization(BalanceMarketCapitalization) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('CommonSharesOutstanding1').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('SharePrice1').value.replaceAll(/,/g, ''));
    document.getElementById('MarketCapitalization1').value = numUSD.format(Math.round(a * b));
    // Column 2
    a = parseInt(document.getElementById('CommonSharesOutstanding2').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('SharePrice2').value.replaceAll(/,/g, ''));
    document.getElementById('MarketCapitalization2').value = numUSD.format(Math.round(a * b));
    // Column 3
    a = parseInt(document.getElementById('CommonSharesOutstanding3').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('SharePrice3').value.replaceAll(/,/g, ''));
    document.getElementById('MarketCapitalization3').value = numUSD.format(Math.round(a * b));
    // Column 4
    a = parseInt(document.getElementById('CommonSharesOutstanding4').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('SharePrice4').value.replaceAll(/,/g, ''));
    document.getElementById('MarketCapitalization4').value = numUSD.format(Math.round(a * b));
};

function BalanceClock(BalanceClock) {
    ////////////////////
    // CLOCKφ
    var numUSD = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })
    // Column 1
    a = parseInt(document.getElementById('IntrinsicValues1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('MarketCapitalization1').value.replaceAll(/,/g, ''));
    document.getElementById('Clockφ1').innerHTML = numUSD.format(Math.round(a / b * 100) / 100);
    // Date
    var today = new Date();
    // Day
    if (today.getDate() < 10) {
        todaygetDate = '0' + today.getDate()
    } else {
        todaygetDate = today.getDate()
    }
    if (today.getMonth() < 10) {
        todaygetMonth = '0' + (today.getMonth() + 1)
    } else {
        todaygetMonth = today.getMonth() + 1
    }
    var date = today.getFullYear() + '-' + todaygetMonth + '-' + todaygetDate;
    // Time
    if (today.getMinutes() < 10) {
        todaygetMinutes = '0' + today.getMinutes()
    } else {
        todaygetMinutes = today.getMinutes()
    }
    var time = today.getHours() + ":" + todaygetMinutes
    var dateTime = date+' '+time;
    // Column 2
    a = parseInt(document.getElementById('IntrinsicValues2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('MarketCapitalization2').value.replaceAll(/,/g, ''));
    document.getElementById('Clockφ2').innerHTML = numUSD.format(Math.round(a / b * 100) / 100);
    // Column 3
    a = parseInt(document.getElementById('IntrinsicValues3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('MarketCapitalization3').value.replaceAll(/,/g, ''));
    document.getElementById('Clockφ3').innerHTML = numUSD.format(Math.round(a / b * 100) / 100);
    // Column 4
    a = parseInt(document.getElementById('IntrinsicValues4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('MarketCapitalization4').value.replaceAll(/,/g, ''));
    a = numUSD.format(Math.round(a / b * 100) / 100);
    b = a.replace('%','')
    if (b == 'NaN') {
        a = numUSD.format(0);
    }
    document.getElementById('Clockφ4').innerHTML = a;
    ////////////////////
    // INTRINSIC VALUE OF A COMMON SHARE
    var numUSD = new Intl.NumberFormat("en-US", {
        format: 'number',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    // Column 1
    a = parseInt(document.getElementById('IntrinsicValues1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CommonSharesOutstanding1').value.replaceAll(/,/g, ''));
    if (b > 0) {
        g = a / b;
    } else {
        g = 0;
    }
    document.getElementById('IntrinsicValueOfACommonShares1').value = numUSD.format(g)
    // Column 2
    a = parseInt(document.getElementById('IntrinsicValues2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CommonSharesOutstanding2').value.replaceAll(/,/g, ''));
    if (b > 0) {
        g = a / b;
    } else {
        g = 0;
    }
    document.getElementById('IntrinsicValueOfACommonShares2').value = numUSD.format(g)
    // Column 3
    a = parseInt(document.getElementById('IntrinsicValues3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CommonSharesOutstanding3').value.replaceAll(/,/g, ''));
    if (b > 0) {
        g = a / b;
    } else {
        g = 0;
    }
    document.getElementById('IntrinsicValueOfACommonShares3').value = numUSD.format(g)
    // Column 4
    a = parseInt(document.getElementById('IntrinsicValues4').value.replaceAll(/,/g, ''));
    b = document.getElementById('CommonSharesOutstanding4').value.replaceAll(/,/g, '');
    if (b > 0) {
        g = a / b;
    } else {
        g = 0;
    }
    document.getElementById('IntrinsicValueOfACommonShares4').value = numUSD.format(g)
};

function CommonShareIntrinsicValuePerUnitAndPricePerUnit() {

    var a = document.getElementById('TradingSymbol1').value

    document.getElementById('CommonShareIntrinsicValuePerUnit').innerHTML = a + ' Common Shares Intrinsic Value Per Unit'
    document.getElementById('CommonSharePricePerUnit').innerHTML = a + ' Common Shares Price Per Unit'

};