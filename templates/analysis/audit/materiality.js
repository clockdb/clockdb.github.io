
// analysis/audit/materiality.js

function BalanceContinuingOperationsMaterialityThreshold(BalanceContinuingOperationsMaterialityThreshold) {

    percentage = 100 - Math.round(parseFloat(document.getElementById('TargetLevelOfAssurance6').value) * 10) / 10

    document.getElementById('PercentageOfIncomeFromContinuingOperations').innerHTML = percentage + " % of income from continuing operations"

    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    a = parseInt(document.getElementById('OperatingIncome1').value.replaceAll(/,/g, ''));
    if (isNaN(a)) {
        a = 0
    }
    document.getElementById('ContinuingOperationsMaterialityThreshold6').value = numUSD.format(Math.round(Math.abs(a) * percentage/100));
};

function BalanceNetAssetMaterialityThreshold(BalanceNetAssetMaterialityThreshold) {

    percentage = 100 - Math.round(parseFloat(document.getElementById('TargetLevelOfAssurance6').value) * 10) / 10

    document.getElementById('PercentageNetAssetValue').innerHTML = percentage + " % of net asset value"

    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    a = parseInt(document.getElementById('BalanceSheetsShareholdersEquity1').value.replaceAll(/,/g, ''));
    if (isNaN(a)) {
        a = 0
    }
    document.getElementById('NetAssetMaterialityThreshold6').value = numUSD.format(Math.round(Math.abs(a * percentage/100)));
};

function BalanceRevenuesMaterialityThreshold(BalanceRevenuesMaterialityThreshold) {

    percentage = Math.round((100 - parseFloat(document.getElementById('TargetLevelOfAssurance6').value)) / 3 * 10) /10

    document.getElementById('PercentageOfRevenues').innerHTML = percentage + " % of revenues"

    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    a = parseInt(document.getElementById('Sales1').value.replaceAll(/,/g, ''));
    if (isNaN(a)) {
        a = 0
    }
    document.getElementById('RevenuesMaterialityThreshold6').value = numUSD.format(Math.round(a * percentage/100));
};

function BalanceIntrinsicValueMaterialityThreshold(BalanceIntrinsicValueMaterialityThreshold) {

    percentage = Math.round((100 - parseFloat(document.getElementById('TargetLevelOfAssurance6').value))) / 10

    document.getElementById('PercentageOfTheIntrinsicValue').innerHTML = percentage + " % of the intrinsic value"

    var numUSD = new Intl.NumberFormat("en-US", {
            format: "number",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        })
    a = parseInt(document.getElementById('IntrinsicValues1').value.replaceAll(/,/g, ''));
    if (isNaN(a)) {
        a = 0
    }
    document.getElementById('IntrinsicValueMaterialityThreshold6').value = numUSD.format(a * percentage/100);
};

function MarketCapMaterialityThreshold(MarketCapMaterialityThreshold) {

    percentage = Math.round((100 - parseFloat(document.getElementById('TargetLevelOfAssurance6').value)))/ 10

    document.getElementById('PercentageOfTheMarketCapitalization').innerHTML = percentage + " % of the market capitalization"

    var numUSD = new Intl.NumberFormat("en-US", {
            format: "number",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        })
    a = parseInt(document.getElementById('MarketCapitalization1').value.replaceAll(/,/g, ''));
    if (isNaN(a)) {
        a = 0
    }
    document.getElementById('MarketCapMaterialityThreshold6').value = numUSD.format(a * percentage/100);
};

function BalanceMaterialityThresholdValue(BalanceMaterialityThresholdValue) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })
    a = parseInt(document.getElementById('IntrinsicValueMaterialityThreshold6').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('ContinuingOperationsMaterialityThreshold6').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('MarketCapMaterialityThreshold6').value.replaceAll(/,/g, ''));
    d = parseInt(document.getElementById('RevenuesMaterialityThreshold6').value.replaceAll(/,/g, ''));
    e = parseInt(document.getElementById('NetAssetMaterialityThreshold6').value.replaceAll(/,/g, ''));
    a = (a + b + c + d + e) / 5
    a = Math.max(a, b)
    document.getElementById('MaterialityThresholdValue6').value = numUSD.format(a);
};