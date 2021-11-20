
// analysis/valuation/intrinsicvalues.js

function DateIntrinsicValues(DateIntrinsicValues) {
    document.getElementById('DateIntrinsicValues1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateIntrinsicValues2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateIntrinsicValues3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateIntrinsicValues4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateIntrinsicValues5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateIntrinsicValues6').innerHTML = document.getElementById('ContextDate6').value;
};

function IntrinsicValuesAmend(IntrinsicValuesAmend) {
    document.getElementById('IntrinsicValuesAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('IntrinsicValuesAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('IntrinsicValuesAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('IntrinsicValuesAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('IntrinsicValuesAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('IntrinsicValuesAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefIntrinsicValues() {
    document.getElementById('IntrinsicValuesFilings1').href = document.getElementById('Filings1').href
    document.getElementById('IntrinsicValuesFilings2').href = document.getElementById('Filings2').href
    document.getElementById('IntrinsicValuesFilings3').href = document.getElementById('Filings3').href
    document.getElementById('IntrinsicValuesFilings4').href = document.getElementById('Filings4').href
    document.getElementById('IntrinsicValuesFilings5').href = document.getElementById('Filings5').href
    document.getElementById('IntrinsicValuesFilings6').href = document.getElementById('Filings6').href
};

function BalanceIntrinsicValuesCCF(BalanceIntrinsicValuesCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
            format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('CommonSharesValueCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('IntrinsicValuesCCF1').value = numUSD.format(a);
    // Column 2
    a = parseInt(document.getElementById('CommonSharesValueCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('IntrinsicValuesCCF2').value = numUSD.format(a);
    // Column 3
    a = parseInt(document.getElementById('CommonSharesValueCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('IntrinsicValuesCCF3').value = numUSD.format(a);
    // Column 4
    a = parseInt(document.getElementById('CommonSharesValueCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('IntrinsicValuesCCF4').value = numUSD.format(a);
};

function BalanceGoowillFairValueCCF(BalanceGoowillFairValueCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
            format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('GoodwillFairValueCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('GoodwillFairValueCCFIV1').value = numUSD.format(a);
    // Column 2
    a = parseInt(document.getElementById('GoodwillFairValueCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('GoodwillFairValueCCFIV2').value = numUSD.format(a);
    // Column 3
    a = parseInt(document.getElementById('GoodwillFairValueCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('GoodwillFairValueCCFIV3').value = numUSD.format(a);
    // Column 4
    a = parseInt(document.getElementById('GoodwillFairValueCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('GoodwillFairValueCCFIV4').value = numUSD.format(a);
};

function BalanceIntrinsicValuesCI(BalanceIntrinsicValuesCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('CommonSharesValueCI1').value.replaceAll(/,/g, ''));
    document.getElementById('IntrinsicValuesCI1').value = numUSD.format(a);
    // Column 2
    a = parseInt(document.getElementById('CommonSharesValueCI2').value.replaceAll(/,/g, ''));
    document.getElementById('IntrinsicValuesCI2').value = numUSD.format(a);
    // Column 3
    a = parseInt(document.getElementById('CommonSharesValueCI3').value.replaceAll(/,/g, ''));
    document.getElementById('IntrinsicValuesCI3').value = numUSD.format(a);
    // Column 4
    a = parseInt(document.getElementById('CommonSharesValueCI4').value.replaceAll(/,/g, ''));
    document.getElementById('IntrinsicValuesCI4').value = numUSD.format(a);
};

function BalanceGoowillFairValueCI(BalanceGoowillFairValueCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('GoodwillFairValueCI1').value.replaceAll(/,/g, ''));
    document.getElementById('GoodwillFairValueCIIV1').value = numUSD.format(a);
    // Column 2
    a = parseInt(document.getElementById('GoodwillFairValueCI2').value.replaceAll(/,/g, ''));
    document.getElementById('GoodwillFairValueCIIV2').value = numUSD.format(a);
    // Column 3
    a = parseInt(document.getElementById('GoodwillFairValueCI3').value.replaceAll(/,/g, ''));
    document.getElementById('GoodwillFairValueCIIV3').value = numUSD.format(a);
    // Column 4
    a = parseInt(document.getElementById('GoodwillFairValueCI4').value.replaceAll(/,/g, ''));
    document.getElementById('GoodwillFairValueCIIV4').value = numUSD.format(a);
};
