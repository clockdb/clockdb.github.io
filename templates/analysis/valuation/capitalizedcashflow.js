
// analysis/valuation/capitalizedcashflow.js

function DateCapitalizedCashFlow(DateCapitalizedCashFlow) {
    document.getElementById('DateCapitalizedCashFlow1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateCapitalizedCashFlow2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateCapitalizedCashFlow3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateCapitalizedCashFlow4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateCapitalizedCashFlow5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateCapitalizedCashFlow6').innerHTML = document.getElementById('ContextDate6').value;
};

function CapitalizedCashFlowAmend(CapitalizedCashFlowAmend) {
    document.getElementById('CapitalizedCashFlowAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('CapitalizedCashFlowAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('CapitalizedCashFlowAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('CapitalizedCashFlowAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('CapitalizedCashFlowAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('CapitalizedCashFlowAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefCapitalizedCashFlow() {
    document.getElementById('CapitalizedCashFlowFilings1').href = document.getElementById('Filings1').href
    document.getElementById('CapitalizedCashFlowFilings2').href = document.getElementById('Filings2').href
    document.getElementById('CapitalizedCashFlowFilings3').href = document.getElementById('Filings3').href
    document.getElementById('CapitalizedCashFlowFilings4').href = document.getElementById('Filings4').href
    document.getElementById('CapitalizedCashFlowFilings5').href = document.getElementById('Filings5').href
    document.getElementById('CapitalizedCashFlowFilings6').href = document.getElementById('Filings6').href
};

function OperatingIncomeCCF(OperatingIncomeCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    d = document.getElementById('OpenEditor').checked;
    // Last Year
    if (d == false) {
        a = parseInt(document.getElementById('OperatingIncome1').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCCF1').value = numUSD.format(a);
    } else {
        document.getElementById('OperatingIncomeCCF1').value = numUSD.format(document.getElementById('OperatingIncomeCCF1').value.replaceAll(/,/g, ''));
    }
    // Second Last Year
    if (d == false) {
        a = parseInt(document.getElementById('OperatingIncome2').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCCF2').value = numUSD.format(a);
    } else {
        document.getElementById('OperatingIncomeCCF2').value = numUSD.format(document.getElementById('OperatingIncomeCCF2').value.replaceAll(/,/g, ''));
    }
    // Third Last Year
    if (d == false) {
        a = parseInt(document.getElementById('OperatingIncome3').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCCF3').value = numUSD.format(a);
    } else {
        document.getElementById('OperatingIncomeCCF3').value = numUSD.format(document.getElementById('OperatingIncomeCCF3').value.replaceAll(/,/g, ''));
    }
    // Fourth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('OperatingIncome4').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCCF4').value = numUSD.format(a);  
    } else {
        document.getElementById('OperatingIncomeCCF4').value = numUSD.format(document.getElementById('OperatingIncomeCCF4').value.replaceAll(/,/g, ''));
    }
    // Fifth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('OperatingIncome5').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCCF5').value = numUSD.format(a);
    } else {
        document.getElementById('OperatingIncomeCCF5').value = numUSD.format(document.getElementById('OperatingIncomeCCF5').value.replaceAll(/,/g, ''));
    }
    // Fifth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('OperatingIncome6').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCCF6').value = numUSD.format(a);
    } else {
        document.getElementById('OperatingIncomeCCF6').value = numUSD.format(document.getElementById('OperatingIncomeCCF6').value.replaceAll(/,/g, ''));
    }
};

function DepreciationDepletionAndAmortizationCCF(DepreciationDepletionAndAmortizationCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0 
    d = document.getElementById('OpenEditor').checked;
    // Last Year
    if (d == false) {
        a = parseInt(document.getElementById('DepreciationDepletionAndAmortization1').value.replaceAll(/,/g, ''));
        document.getElementById('DepreciationDepletionAndAmortizationCCF1').value = numUSD.format(a);
    } else {
        document.getElementById('DepreciationDepletionAndAmortizationCCF1').value = numUSD.format(document.getElementById('DepreciationDepletionAndAmortizationCCF1').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    if (d == false) {
        a = parseInt(document.getElementById('DepreciationDepletionAndAmortization2').value.replaceAll(/,/g, ''));
        document.getElementById('DepreciationDepletionAndAmortizationCCF2').value = numUSD.format(a);
    } else {
        document.getElementById('DepreciationDepletionAndAmortizationCCF2').value = numUSD.format(document.getElementById('DepreciationDepletionAndAmortizationCCF2').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    if (d == false) {
        a = parseInt(document.getElementById('DepreciationDepletionAndAmortization3').value.replaceAll(/,/g, ''));
        document.getElementById('DepreciationDepletionAndAmortizationCCF3').value = numUSD.format(a);
    } else {
        document.getElementById('DepreciationDepletionAndAmortizationCCF3').value = numUSD.format(document.getElementById('DepreciationDepletionAndAmortizationCCF3').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('DepreciationDepletionAndAmortization4').value.replaceAll(/,/g, ''));
        document.getElementById('DepreciationDepletionAndAmortizationCCF4').value = numUSD.format(a);
    } else {
        document.getElementById('DepreciationDepletionAndAmortizationCCF4').value = numUSD.format(document.getElementById('DepreciationDepletionAndAmortizationCCF4').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Fifth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('DepreciationDepletionAndAmortization5').value.replaceAll(/,/g, ''));
        document.getElementById('DepreciationDepletionAndAmortizationCCF5').value = numUSD.format(a);
    } else {
        document.getElementById('DepreciationDepletionAndAmortizationCCF5').value = numUSD.format(document.getElementById('DepreciationDepletionAndAmortizationCCF5').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Sixth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('DepreciationDepletionAndAmortization6').value.replaceAll(/,/g, ''));
        document.getElementById('DepreciationDepletionAndAmortizationCCF6').value = numUSD.format(a);
    } else {
        document.getElementById('DepreciationDepletionAndAmortizationCCF6').value = numUSD.format(document.getElementById('DepreciationDepletionAndAmortizationCCF6').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    document.getElementById('DepreciationDepletionAndAmortizationCCF6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
    } else {
        a = '';
    }
    document.getElementById('DepreciationDepletionAndAmortizationCCFRow').style.display = a
};

function AnnualReinvestmentOfMaintenanceCCF(AnnualReinvestmentOfMaintenanceCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    // Last Year
    a = -parseInt(document.getElementById('ReinvestmentOfMaintenance1').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('ReinvestmentOfMaintenance2').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('ReinvestmentOfMaintenance3').value.replaceAll(/,/g, ''));
    a = Math.round(a / 3);
    document.getElementById('AnnualReinvestmentOfMaintenanceCCF1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    a = -parseInt(document.getElementById('ReinvestmentOfMaintenance2').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('ReinvestmentOfMaintenance3').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('ReinvestmentOfMaintenance4').value.replaceAll(/,/g, ''));
    a = Math.round(a / 3);
    document.getElementById('AnnualReinvestmentOfMaintenanceCCF2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    a = -parseInt(document.getElementById('ReinvestmentOfMaintenance3').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('ReinvestmentOfMaintenance4').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('ReinvestmentOfMaintenance5').value.replaceAll(/,/g, ''));
    a = Math.round(a / 3);
    document.getElementById('AnnualReinvestmentOfMaintenanceCCF3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    a = -parseInt(document.getElementById('ReinvestmentOfMaintenance4').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('ReinvestmentOfMaintenance5').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('ReinvestmentOfMaintenance6').value.replaceAll(/,/g, ''));
    a = Math.round(a / 3);
    document.getElementById('AnnualReinvestmentOfMaintenanceCCF4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Fifth Last Year
    document.getElementById('AnnualReinvestmentOfMaintenanceCCF5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Sixth Last Year
    document.getElementById('AnnualReinvestmentOfMaintenanceCCF6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
    } else {
        a = '';
    }
    document.getElementById('AnnualReinvestmentOfMaintenanceCCFRow').style.display = a
};

function TaxesCCF(TaxesCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    // Last Year
    a = -parseFloat(document.getElementById('TheoricalTaxRate1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('OperatingIncomeCCF1').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF1').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('OthersCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('TaxesPaidAdjustmentsCCF1').value = numUSD.format(Math.round(a/100 * b));
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    a = -parseFloat(document.getElementById('TheoricalTaxRate2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('OperatingIncomeCCF2').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF2').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('OthersCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('TaxesPaidAdjustmentsCCF2').value = numUSD.format(Math.round(a/100 * b));
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    a = -parseFloat(document.getElementById('TheoricalTaxRate3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('OperatingIncomeCCF3').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF3').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('OthersCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('TaxesPaidAdjustmentsCCF3').value = numUSD.format(Math.round(a/100 * b));
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    a = -parseFloat(document.getElementById('TheoricalTaxRate4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('OperatingIncomeCCF4').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF4').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('OthersCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('TaxesPaidAdjustmentsCCF4').value = numUSD.format(Math.round(a/100 * b));
    if (a == 0) {
        z = z + 1
    }
    // Fifth Last Year
    a = -parseFloat(document.getElementById('TheoricalTaxRate5').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('OperatingIncomeCCF5').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF5').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('OthersCCF5').value.replaceAll(/,/g, ''));
    document.getElementById('TaxesPaidAdjustmentsCCF5').value = numUSD.format(Math.round(a/100 * b));
    if (a == 0) {
        z = z + 1
    }
    // Sixth Last Year
    a = -parseFloat(document.getElementById('TheoricalTaxRate6').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('OperatingIncomeCCF6').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF6').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('OthersCCF6').value.replaceAll(/,/g, ''));
    document.getElementById('TaxesPaidAdjustmentsCCF6').value = numUSD.format(Math.round(a/100 * b));
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
    } else {
        a = '';
    }
    document.getElementById('TaxesPaidAdjustmentsCCFRow').style.display = a
};

function EquityMethodInvesteesIncomeCCF(EquityMethodInvesteesIncomeCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    d = document.getElementById('OpenEditor').checked;
    // Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome1').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCCF1').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCCF1').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCCF1').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome2').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCCF2').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCCF2').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCCF2').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome3').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCCF3').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCCF3').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCCF3').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome4').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCCF4').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCCF4').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCCF4').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Fifth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome5').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCCF5').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCCF5').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCCF5').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Sixth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome6').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCCF6').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCCF6').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCCF6').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
    } else {
        a = '';
    }
    document.getElementById('EquityMethodInvesteesIncomeCCFRow').style.display = a
};

function BalanceNormalizedOperatingCashFlowCCF(BalanceNormalizedOperatingCashFlowCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Column 1
    a = parseInt(document.getElementById('OperatingIncomeCCF1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TaxesPaidAdjustmentsCCF1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AnnualReinvestmentOfMaintenanceCCF1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCCF1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('NormalizedOperatingCashFlowCCF1').value = numUSD.format(Math.round(a));
    // Column 2
    a = parseInt(document.getElementById('OperatingIncomeCCF2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TaxesPaidAdjustmentsCCF2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AnnualReinvestmentOfMaintenanceCCF2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCCF2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('NormalizedOperatingCashFlowCCF2').value = numUSD.format(Math.round(a));
    // Column 3
    a = parseInt(document.getElementById('OperatingIncomeCCF3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TaxesPaidAdjustmentsCCF3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AnnualReinvestmentOfMaintenanceCCF3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCCF3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('NormalizedOperatingCashFlowCCF3').value = numUSD.format(Math.round(a));
    // Column 4
    a = parseInt(document.getElementById('OperatingIncomeCCF4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TaxesPaidAdjustmentsCCF4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AnnualReinvestmentOfMaintenanceCCF4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCCF4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('NormalizedOperatingCashFlowCCF4').value = numUSD.format(Math.round(a));
    // Column 5
    a = parseInt(document.getElementById('OperatingIncomeCCF5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TaxesPaidAdjustmentsCCF5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AnnualReinvestmentOfMaintenanceCCF5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCCF5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCCF5').value.replaceAll(/,/g, ''));
    document.getElementById('NormalizedOperatingCashFlowCCF5').value = numUSD.format(Math.round(a));
    // Column 6
    b = parseInt(document.getElementById('OperatingIncomeCCF6').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('TaxesPaidAdjustmentsCCF6').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('DepreciationDepletionAndAmortizationCCF6').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('AnnualReinvestmentOfMaintenanceCCF6').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('OthersCCF6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCCF6').value.replaceAll(/,/g, ''));
    if (a == 0) {
        b = a;
    }
    document.getElementById('NormalizedOperatingCashFlowCCF6').value = numUSD.format(Math.round(b));
};

function BalanceNormalizedWeightedOperatingCashFlow(BalanceNormalizedWeightedOperatingCashFlow) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF2').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF3').value.replaceAll(/,/g, ''));
    i = parseFloat(document.getElementById('WeightCCF1').value);
    ii = parseFloat(document.getElementById('WeightCCF2').value);
    iii = parseFloat(document.getElementById('WeightCCF3').value);
    if (a != 0) {
        if (b != 0) {
            if (c != 0) {
                document.getElementById('NormalizedWeightedOperatingCashFlow1').value = numUSD.format(Math.round(a * i / (i + ii + iii) + b * ii / (i + ii + iii) + c * iii / (i + ii + iii)));
            }
        }
    }
    // Column 2
    a = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF3').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF4').value.replaceAll(/,/g, ''));
    i = parseFloat(document.getElementById('WeightCCF1').value);
    ii = parseFloat(document.getElementById('WeightCCF2').value);
    iii = parseFloat(document.getElementById('WeightCCF3').value);
    if (a != 0) {
        if (b != 0) {
            if (c != 0) {
                document.getElementById('NormalizedWeightedOperatingCashFlow2').value = numUSD.format(Math.round(a * i / (i + ii + iii) + b * ii / (i + ii + iii) + c * iii / (i + ii + iii)));
            }
        }
    }
    // Column 3
    a = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF4').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF5').value.replaceAll(/,/g, ''));
    i = parseFloat(document.getElementById('WeightCCF1').value);
    ii = parseFloat(document.getElementById('WeightCCF2').value);
    iii = parseFloat(document.getElementById('WeightCCF3').value);
    if (a != 0) {
        if (b != 0) {
            if (c != 0) {
                document.getElementById('NormalizedWeightedOperatingCashFlow3').value = numUSD.format(Math.round(a * i / (i + ii + iii) + b * ii / (i + ii + iii) + c * iii / (i + ii + iii)));
            }
        }
    }
    // Column 4
    a = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF5').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('NormalizedOperatingCashFlowCCF6').value.replaceAll(/,/g, ''));
    i = parseFloat(document.getElementById('WeightCCF1').value);
    ii = parseFloat(document.getElementById('WeightCCF2').value);
    iii = parseFloat(document.getElementById('WeightCCF3').value);
    if (a != 0) {
        if (b != 0) {
            if (c != 0) {
                document.getElementById('NormalizedWeightedOperatingCashFlow4').value = numUSD.format(Math.round(a * i / (i + ii + iii) + b * ii / (i + ii + iii) + c * iii / (i + ii + iii)));
            }
        }
    }
};

function BalanceCharacteristicCashFlow(BalanceCharacteristicCashFlow) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('NormalizedWeightedOperatingCashFlow1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersWeightedCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('CharacteristicCashFlow1').value = numUSD.format(Math.round(a));
    // Column 2
    a = parseInt(document.getElementById('NormalizedWeightedOperatingCashFlow2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersWeightedCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('CharacteristicCashFlow2').value = numUSD.format(Math.round(a));
    // Column 3
    a = parseInt(document.getElementById('NormalizedWeightedOperatingCashFlow3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersWeightedCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('CharacteristicCashFlow3').value = numUSD.format(Math.round(a));
    // Column 4
    a = parseInt(document.getElementById('NormalizedWeightedOperatingCashFlow4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersWeightedCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('CharacteristicCashFlow4').value = numUSD.format(Math.round(a));
};

function BalanceCapitalizationRateCCF(BalanceCapitalizationRateCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    // Column 1
    a = parseFloat(document.getElementById('CapitalizationRate1').value);
    document.getElementById('CapitalizationRateCCF1').value = numUSD.format(a/100);
    // Column 2
    a = parseFloat(document.getElementById('CapitalizationRate2').value);
    document.getElementById('CapitalizationRateCCF2').value = numUSD.format(a/100);
    // Column 3
    a = parseFloat(document.getElementById('CapitalizationRate3').value);
    document.getElementById('CapitalizationRateCCF3').value = numUSD.format(a/100);
    // Column 4
    a = parseFloat(document.getElementById('CapitalizationRate4').value);
    document.getElementById('CapitalizationRateCCF4').value = numUSD.format(a/100);
};

function BalanceCapitalizedCharacteristicCashFlowCCF(BalanceCapitalizedCharacteristicCashFlowCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('CharacteristicCashFlow1').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('CapitalizationRateCCF1').value);
    document.getElementById('CapitalizedCharacteristicCashFlow1').value = numUSD.format(Math.round(a / (b/100)));
    // Column 2
    a = parseInt(document.getElementById('CharacteristicCashFlow2').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('CapitalizationRateCCF2').value);
    document.getElementById('CapitalizedCharacteristicCashFlow2').value = numUSD.format(Math.round(a / (b/100)));
    // Column 3
    a = parseInt(document.getElementById('CharacteristicCashFlow3').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('CapitalizationRateCCF3').value);
    document.getElementById('CapitalizedCharacteristicCashFlow3').value = numUSD.format(Math.round(a / (b/100)));
    // Column 4
    a = parseInt(document.getElementById('CharacteristicCashFlow4').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('CapitalizationRateCCF4').value);
    document.getElementById('CapitalizedCharacteristicCashFlow4').value = numUSD.format(Math.round(a / (b/100)));
};

function BalanceExcessWorkingCapitalCCF(BalanceExcessWorkingCapitalCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Column 1
    twk = parseInt(document.getElementById('TargetWorkingCapital1').value.replaceAll(/,/g, ''));
    a = parseInt(document.getElementById('CurrentAssets1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CurrentLiabilities1').value.replaceAll(/,/g, '')) * twk;
    document.getElementById('ExcessWorkingCapitalCCF1').value = numUSD.format(Math.round(a - b));
    if (a == 0) {
        z = z + 1
    }
    // Column 2
    twk = parseInt(document.getElementById('TargetWorkingCapital2').value.replaceAll(/,/g, ''));
    a = parseInt(document.getElementById('CurrentAssets2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CurrentLiabilities2').value.replaceAll(/,/g, '')) * twk;
    document.getElementById('ExcessWorkingCapitalCCF2').value = numUSD.format(Math.round(a - b));
    if (a == 0) {
        z = z + 1
    }
    // Column 3
    twk = parseInt(document.getElementById('TargetWorkingCapital3').value.replaceAll(/,/g, ''));
    a = parseInt(document.getElementById('CurrentAssets3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CurrentLiabilities3').value.replaceAll(/,/g, '')) * twk;
    document.getElementById('ExcessWorkingCapitalCCF3').value = numUSD.format(Math.round(a - b));
    if (a == 0) {
        z = z + 1
    }
    // Column 4
    twk = parseInt(document.getElementById('TargetWorkingCapital4').value.replaceAll(/,/g, ''));
    a = parseInt(document.getElementById('CurrentAssets4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('CurrentLiabilities4').value.replaceAll(/,/g, '')) * twk;
    document.getElementById('ExcessWorkingCapitalCCF4').value = numUSD.format(Math.round(a - b));
    if (a == 0) {
        z = z + 1
    }
    if (z == 4) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
    } else {
        a = '';
    }
    document.getElementById('ExcessWorkingCapitalCCFRow').style.display = a;
};


function BalanceInvestmentsExcessAssetsCCF(BalanceInvestmentsExcessAssetsCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    d = document.getElementById('OpenEditor').checked;
    // Column 1
    if (d == false) {
        a = parseInt(document.getElementById('Investments1').value.replaceAll(/,/g, ''));
        document.getElementById('InvestmentsExcessAssetsCCF1').value = numUSD.format(a);
    } else {
        document.getElementById('InvestmentsExcessAssetsCCF1').value = numUSD.format(document.getElementById('InvestmentsExcessAssetsCCF1').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 2
    if (d == false) {
        a = parseInt(document.getElementById('Investments2').value.replaceAll(/,/g, ''));
        document.getElementById('InvestmentsExcessAssetsCCF2').value = numUSD.format(a);
    } else {
        document.getElementById('InvestmentsExcessAssetsCCF2').value = numUSD.format(document.getElementById('InvestmentsExcessAssetsCCF2').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 3
    if (d == false) {
        a = parseInt(document.getElementById('Investments3').value.replaceAll(/,/g, ''));
        document.getElementById('InvestmentsExcessAssetsCCF3').value = numUSD.format(a);
    } else {
        document.getElementById('InvestmentsExcessAssetsCCF3').value = numUSD.format(document.getElementById('InvestmentsExcessAssetsCCF3').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 4
    if (d == false) {
        a = parseInt(document.getElementById('Investments4').value.replaceAll(/,/g, ''));
        document.getElementById('InvestmentsExcessAssetsCCF4').value = numUSD.format(a);
    } else {
        document.getElementById('InvestmentsExcessAssetsCCF4').value = numUSD.format(document.getElementById('InvestmentsExcessAssetsCCF4').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    if (z == 4) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
    } else {
        a = '';
    }
    document.getElementById('InvestmentsExcessAssetsCCFRow').style.display = a
};

function BalanceDiscontinuedOperationsExcessAssetsCCF(BalanceDiscontinuedOperationsExcessAssetsCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    d = document.getElementById('OpenEditor').checked;
    // Column 1
    if (d == false) {
        a = parseInt(document.getElementById('DiscontinuedOperations1').value.replaceAll(/,/g, ''));
        document.getElementById('DiscontinuedOperationsExcessAssetsCCF1').value = numUSD.format(a);
    } else {
        document.getElementById('DiscontinuedOperationsExcessAssetsCCF1').value = numUSD.format(document.getElementById('DiscontinuedOperationsExcessAssetsCCF1').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 2
    if (d == false) {
        a = parseInt(document.getElementById('DiscontinuedOperations2').value.replaceAll(/,/g, ''));
        document.getElementById('DiscontinuedOperationsExcessAssetsCCF2').value = numUSD.format(a);
    } else {
        document.getElementById('DiscontinuedOperationsExcessAssetsCCF2').value = numUSD.format(document.getElementById('DiscontinuedOperationsExcessAssetsCCF2').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 3
    if (d == false) {
        a = parseInt(document.getElementById('DiscontinuedOperations3').value.replaceAll(/,/g, ''));
        document.getElementById('DiscontinuedOperationsExcessAssetsCCF3').value = numUSD.format(a);
    } else {
        document.getElementById('DiscontinuedOperationsExcessAssetsCCF3').value = numUSD.format(document.getElementById('DiscontinuedOperationsExcessAssetsCCF3').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 4
    if (d == false) {
        a = parseInt(document.getElementById('DiscontinuedOperations4').value.replaceAll(/,/g, ''));
        document.getElementById('DiscontinuedOperationsExcessAssetsCCF4').value = numUSD.format(a);
    } else {
        document.getElementById('DiscontinuedOperationsExcessAssetsCCF4').value = numUSD.format(document.getElementById('DiscontinuedOperationsExcessAssetsCCF4').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    if (z == 4) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
    } else {
        a = '';
    }
    document.getElementById('DiscontinuedOperationsExcessAssetsCCFRow').style.display = a
};

function BalancePresentvalueOfTaxProtectionCCF(BalancePresentvalueOfTaxProtectionCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    d = document.getElementById('OpenEditor').checked;
    // Column 1
    if (d == false) {
        a = parseInt(document.getElementById('RefundableTaxAssetsNonCurrent1').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('AccruedTaxLiabilities1').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent1').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
        document.getElementById('PresentValueOfTaxProtectionCCF1').value = numUSD.format(a);
    } else {
        document.getElementById('PresentValueOfTaxProtectionCCF1').value = numUSD.format(document.getElementById('PresentValueOfTaxProtectionCCF1').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 2
    if (d == false) {
        a = parseInt(document.getElementById('RefundableTaxAssetsNonCurrent2').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('AccruedTaxLiabilities2').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent2').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
        document.getElementById('PresentValueOfTaxProtectionCCF2').value = numUSD.format(a);
    } else {
        document.getElementById('PresentValueOfTaxProtectionCCF2').value = numUSD.format(document.getElementById('PresentValueOfTaxProtectionCCF2').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 3
    if (d == false) {
        a = parseInt(document.getElementById('RefundableTaxAssetsNonCurrent3').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('AccruedTaxLiabilities3').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent3').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
        document.getElementById('PresentValueOfTaxProtectionCCF3').value = numUSD.format(a);
    } else {
        document.getElementById('PresentValueOfTaxProtectionCCF3').value = numUSD.format(document.getElementById('PresentValueOfTaxProtectionCCF3').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 4
    if (d == false) {
        a = parseInt(document.getElementById('RefundableTaxAssetsNonCurrent4').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('AccruedTaxLiabilities4').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent4').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
        document.getElementById('PresentValueOfTaxProtectionCCF4').value = numUSD.format(a);
    } else {
        document.getElementById('PresentValueOfTaxProtectionCCF4').value = numUSD.format(document.getElementById('PresentValueOfTaxProtectionCCF4').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    if (z == 4) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
    } else {
        a = '';
    }
    document.getElementById('PresentValueOfTaxProtectionCCFRow').style.display = a;
};

function BalanceBusinessValueCCF(BalanceBusinessValueCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('CapitalizedCharacteristicCashFlow1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ExcessWorkingCapitalCCF1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PresentValueOfTaxProtectionCCF1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestmentsExcessAssetsCCF1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCCF1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCCF1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCapitalizedCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('BusinessValueCCF1').value = numUSD.format(Math.round(a));
    // Column 2
    a = parseInt(document.getElementById('CapitalizedCharacteristicCashFlow2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ExcessWorkingCapitalCCF2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PresentValueOfTaxProtectionCCF2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestmentsExcessAssetsCCF2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCCF2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCCF2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCapitalizedCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('BusinessValueCCF2').value = numUSD.format(Math.round(a));
    // Column 3
    a = parseInt(document.getElementById('CapitalizedCharacteristicCashFlow3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ExcessWorkingCapitalCCF3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PresentValueOfTaxProtectionCCF3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestmentsExcessAssetsCCF3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCCF3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCCF3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCapitalizedCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('BusinessValueCCF3').value = numUSD.format(Math.round(a));
    // Column 4
    a = parseInt(document.getElementById('CapitalizedCharacteristicCashFlow4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ExcessWorkingCapitalCCF4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PresentValueOfTaxProtectionCCF4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestmentsExcessAssetsCCF4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCCF4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCCF4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCapitalizedCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('BusinessValueCCF4').value = numUSD.format(Math.round(a));
};

function BalanceLongTermDebtAndLeaseObligation(BalanceLongTermDebtAndLeaseObligation) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    d = document.getElementById('OpenEditor').checked;
    // Column 1
    if (d == false) {
        a = parseInt(document.getElementById('NonCurrentLiabilitiesNote1').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent1').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
        document.getElementById('TotalDebtAndLeaseObligationCCF1').value = numUSD.format(a);
    } else {
        document.getElementById('TotalDebtAndLeaseObligationCCF1').value = numUSD.format(document.getElementById('TotalDebtAndLeaseObligationCCF1').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 2
    if (d == false) {
        a = parseInt(document.getElementById('NonCurrentLiabilitiesNote2').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent2').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
        document.getElementById('TotalDebtAndLeaseObligationCCF2').value = numUSD.format(a);
    } else {
        document.getElementById('TotalDebtAndLeaseObligationCCF2').value = numUSD.format(document.getElementById('TotalDebtAndLeaseObligationCCF2').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 3
    if (d == false) {
        a = parseInt(document.getElementById('NonCurrentLiabilitiesNote3').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent3').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
        document.getElementById('TotalDebtAndLeaseObligationCCF3').value = numUSD.format(a);
    } else {
        document.getElementById('TotalDebtAndLeaseObligationCCF3').value = numUSD.format(document.getElementById('TotalDebtAndLeaseObligationCCF3').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Column 4
    if (d == false) {
        a = parseInt(document.getElementById('NonCurrentLiabilitiesNote4').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent4').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
        a = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
        document.getElementById('TotalDebtAndLeaseObligationCCF4').value = numUSD.format(a);
    } else {
        document.getElementById('TotalDebtAndLeaseObligationCCF4').value = numUSD.format(document.getElementById('TotalDebtAndLeaseObligationCCF4').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    if (z == 4) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
    } else {
        a = '';
    }
    document.getElementById('TotalDebtAndLeaseObligationCCFRow').style.display = a;
};

function BalanceValueOfAllCategoryOfSharesCCF(BalanceValueOfAllCategoryOfSharesCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('BusinessValueCCF1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalDebtAndLeaseObligationCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('ValueOfAllCategoryOfSharesCCF1').value = numUSD.format(Math.round(a + b));
    // Column 2
    a = parseInt(document.getElementById('BusinessValueCCF2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalDebtAndLeaseObligationCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('ValueOfAllCategoryOfSharesCCF2').value = numUSD.format(Math.round(a + b));
    // Column 3
    a = parseInt(document.getElementById('BusinessValueCCF3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalDebtAndLeaseObligationCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('ValueOfAllCategoryOfSharesCCF3').value = numUSD.format(Math.round(a + b));
    // Column 4
    a = parseInt(document.getElementById('BusinessValueCCF4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalDebtAndLeaseObligationCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('ValueOfAllCategoryOfSharesCCF4').value = numUSD.format(Math.round(a + b));
};

function BalanceCommonSharesValueCCF(BalanceCommonSharesValueCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('ValueOfAllCategoryOfSharesCCF1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('CommonSharesValueCCF1').value = numUSD.format(Math.round(a));
    // Column 2
    a = parseInt(document.getElementById('ValueOfAllCategoryOfSharesCCF2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('CommonSharesValueCCF2').value = numUSD.format(Math.round(a));
    // Column 3
    a = parseInt(document.getElementById('ValueOfAllCategoryOfSharesCCF3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('CommonSharesValueCCF3').value = numUSD.format(Math.round(a));
    // Column 4
    a = parseInt(document.getElementById('ValueOfAllCategoryOfSharesCCF4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('CommonSharesValueCCF4').value = numUSD.format(Math.round(a));
};

function BalanceNetAssetsCCF(BalanceNetAssetsCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    d = document.getElementById('OpenEditor').checked;
    // Column 1
    if (d == false) {
        a = parseInt(document.getElementById('ShareholdersEquity1').value.replaceAll(/,/g, ''));
        document.getElementById('FairValueOfIdentifiableAssetsCCF1').value = numUSD.format(a);
    } else {
        document.getElementById('FairValueOfIdentifiableAssetsCCF1').value = numUSD.format(document.getElementById('FairValueOfIdentifiableAssetsCCF1').value.replaceAll(/,/g, ''));
    }
    // Column 2
    if (d == false) {
        a = parseInt(document.getElementById('ShareholdersEquity2').value.replaceAll(/,/g, ''));
        document.getElementById('FairValueOfIdentifiableAssetsCCF2').value = numUSD.format(a);
    } else {
        document.getElementById('FairValueOfIdentifiableAssetsCCF2').value = numUSD.format(document.getElementById('FairValueOfIdentifiableAssetsCCF2').value.replaceAll(/,/g, ''));
    }
    // Column 3
    if (d == false) {
        a = parseInt(document.getElementById('ShareholdersEquity3').value.replaceAll(/,/g, ''));
        document.getElementById('FairValueOfIdentifiableAssetsCCF3').value = numUSD.format(a);
    } else {
        document.getElementById('FairValueOfIdentifiableAssetsCCF3').value = numUSD.format(document.getElementById('FairValueOfIdentifiableAssetsCCF3').value.replaceAll(/,/g, ''));
    }
    // Column 4
    if (d == false) {
        a = parseInt(document.getElementById('ShareholdersEquity4').value.replaceAll(/,/g, ''));
        document.getElementById('FairValueOfIdentifiableAssetsCCF4').value = numUSD.format(a);
    } else {
        document.getElementById('FairValueOfIdentifiableAssetsCCF4').value = numUSD.format(document.getElementById('FairValueOfIdentifiableAssetsCCF4').value.replaceAll(/,/g, ''));
    }
    if (z == 4) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
    } else {
        a = '';
    }
    document.getElementById('TotalDebtAndLeaseObligationCCFRow').style.display = a;
};

function BalanceGoodwillFairValueCCF(BalanceGoodwillFairValueCCF) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('CommonSharesValueCCF1').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('FairValueOfIdentifiableAssetsCCF1').value.replaceAll(/,/g, ''));
    a = Math.max(0, a)
    document.getElementById('GoodwillFairValueCCF1').value = numUSD.format(Math.round(a));
    // Column 2
    a = parseInt(document.getElementById('CommonSharesValueCCF2').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('FairValueOfIdentifiableAssetsCCF2').value.replaceAll(/,/g, ''));
    a = Math.max(0, a)
    document.getElementById('GoodwillFairValueCCF2').value = numUSD.format(Math.round(a));
    // Column 3
    a = parseInt(document.getElementById('CommonSharesValueCCF3').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('FairValueOfIdentifiableAssetsCCF3').value.replaceAll(/,/g, ''));
    a = Math.max(0, a)
    document.getElementById('GoodwillFairValueCCF3').value = numUSD.format(Math.round(a));
    // Column 4
    a = parseInt(document.getElementById('CommonSharesValueCCF4').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('FairValueOfIdentifiableAssetsCCF4').value.replaceAll(/,/g, ''));
    a = Math.max(0, a)
    document.getElementById('GoodwillFairValueCCF4').value = numUSD.format(Math.round(a));
};
