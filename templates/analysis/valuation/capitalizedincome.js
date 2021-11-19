
// analysis/valuation/capitalizedincome.js

function DateCapitalizedIncome(DateCapitalizedIncome) {
    document.getElementById('DateCapitalizedIncome1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateCapitalizedIncome2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateCapitalizedIncome3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateCapitalizedIncome4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateCapitalizedIncome5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateCapitalizedIncome6').innerHTML = document.getElementById('ContextDate6').value;
};

function CapitalizedIncomeAmend(CapitalizedIncomeAmend) {
    document.getElementById('CapitalizedIncomeAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('CapitalizedIncomeAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('CapitalizedIncomeAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('CapitalizedIncomeAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('CapitalizedIncomeAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('CapitalizedIncomeAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefCapitalizedIncome() {
    document.getElementById('CapitalizedIncomeFilings1').href = document.getElementById('Filings1').href
    document.getElementById('CapitalizedIncomeFilings2').href = document.getElementById('Filings2').href
    document.getElementById('CapitalizedIncomeFilings3').href = document.getElementById('Filings3').href
    document.getElementById('CapitalizedIncomeFilings4').href = document.getElementById('Filings4').href
    document.getElementById('CapitalizedIncomeFilings5').href = document.getElementById('Filings5').href
    document.getElementById('CapitalizedIncomeFilings6').href = document.getElementById('Filings6').href
};

function OperatingIncomeCI(OperatingIncomeCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    if (document.getElementById('OpenEditor').checked == false) {
        // Last Year
        a = parseInt(document.getElementById('OperatingIncome1').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCI1').value = numUSD.format(a);
        // Second Last Year
        a = parseInt(document.getElementById('OperatingIncome2').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCI2').value = numUSD.format(a);
        // Third Last Year
        a = parseInt(document.getElementById('OperatingIncome3').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCI3').value = numUSD.format(a);
        // Fourth Last Year
        a = parseInt(document.getElementById('OperatingIncome4').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCI4').value = numUSD.format(a);
        // Fifth Last Year
        a = parseInt(document.getElementById('OperatingIncome5').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCI5').value = numUSD.format(a);
        // Fifth Last Year
        a = parseInt(document.getElementById('OperatingIncome6').value.replaceAll(/,/g, ''));
        document.getElementById('OperatingIncomeCI6').value = numUSD.format(a);
    };
};

function TaxesCI(TaxesCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    if (document.getElementById('OpenEditor').checked == false) {
        z = 0
        // Last Year
        a = -parseFloat(document.getElementById('TheoricalTaxRate1').value.replaceAll(/,/g, ''));
        b = parseInt(document.getElementById('OperatingIncomeCI1').value.replaceAll(/,/g, ''));
        b = b + parseInt(document.getElementById('OthersCI1').value.replaceAll(/,/g, ''));
        document.getElementById('TaxesAdjustmentCI1').value = numUSD.format(Math.round(a/100 * b));
        if (a == 0) {
            z = z + 1
        }
        // Second Last Year
        a = -parseFloat(document.getElementById('TheoricalTaxRate2').value.replaceAll(/,/g, ''));
        b = parseInt(document.getElementById('OperatingIncomeCI2').value.replaceAll(/,/g, ''));
        b = b + parseInt(document.getElementById('OthersCI2').value.replaceAll(/,/g, ''));
        document.getElementById('TaxesAdjustmentCI2').value = numUSD.format(Math.round(a/100 * b));
        if (a == 0) {
            z = z + 1
        }
        // Third Last Year
        a = -parseFloat(document.getElementById('TheoricalTaxRate3').value.replaceAll(/,/g, ''));
        b = parseInt(document.getElementById('OperatingIncomeCI3').value.replaceAll(/,/g, ''));
        b = b + parseInt(document.getElementById('OthersCI3').value.replaceAll(/,/g, ''));
        document.getElementById('TaxesAdjustmentCI3').value = numUSD.format(Math.round(a/100 * b));
        if (a == 0) {
            z = z + 1
        }
        // Fourth Last Year
        a = -parseFloat(document.getElementById('TheoricalTaxRate4').value.replaceAll(/,/g, ''));
        b = parseInt(document.getElementById('OperatingIncomeCI4').value.replaceAll(/,/g, ''));
        b = b + parseInt(document.getElementById('OthersCI4').value.replaceAll(/,/g, ''));
        document.getElementById('TaxesAdjustmentCI4').value = numUSD.format(Math.round(a/100 * b));
        if (a == 0) {
            z = z + 1
        }
        // Fifth Last Year
        a = -parseFloat(document.getElementById('TheoricalTaxRate5').value.replaceAll(/,/g, ''));
        b = parseInt(document.getElementById('OperatingIncomeCI5').value.replaceAll(/,/g, ''));
        b = b + parseInt(document.getElementById('OthersCI5').value.replaceAll(/,/g, ''));
        document.getElementById('TaxesAdjustmentCI5').value = numUSD.format(Math.round(a/100 * b));
        if (a == 0) {
            z = z + 1
        }
        // Sixth Last Year
        a = -parseFloat(document.getElementById('TheoricalTaxRate6').value.replaceAll(/,/g, ''));
        b = parseInt(document.getElementById('OperatingIncomeCI6').value.replaceAll(/,/g, ''));
        b = b + parseInt(document.getElementById('OthersCI6').value.replaceAll(/,/g, ''));
        document.getElementById('TaxesAdjustmentCI6').value = numUSD.format(Math.round(a/100 * b));
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
    } else {
        a = '';
    }
    document.getElementById('TaxesAdjustmentCIRow').style.display = a
};

function EquityMethodInvesteesIncomeCI(EquityMethodInvesteesIncomeCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    d = document.getElementById('OpenEditor').checked;
    // Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome1').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCI1').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCI1').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCI1').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome2').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCI2').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCI2').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCI2').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome3').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCI3').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCI3').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCI3').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome4').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCI4').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCI4').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCI4').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Fifth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome5').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCI5').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCI5').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCI5').value.replaceAll(/,/g, ''));
    }
    if (a == 0) {
        z = z + 1
    }
    // Sixth Last Year
    if (d == false) {
        a = parseInt(document.getElementById('EquityMethodInvesteesIncome6').value.replaceAll(/,/g, ''));
        document.getElementById('EquityMethodInvesteesIncomeCI6').value = numUSD.format(a);
    } else {
        document.getElementById('EquityMethodInvesteesIncomeCI6').value = numUSD.format(document.getElementById('EquityMethodInvesteesIncomeCI6').value.replaceAll(/,/g, ''));
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
    document.getElementById('EquityMethodInvesteesIncomeCIRow').style.display = a;
};

function BalanceNormalizedCashFlowBeforeTaxesCI(BalanceNormalizedCashFlowBeforeTaxesCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    if (document.getElementById('OpenEditor').checked == false) {
        // Column 1
        a = parseInt(document.getElementById('OperatingIncomeCI1').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('OthersCI1').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('TaxesAdjustmentCI1').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCI1').value.replaceAll(/,/g, ''));
        document.getElementById('NormalizedIncomeBeforeInterestCI1').value = numUSD.format(Math.round(a));
        // Column 2
        a = parseInt(document.getElementById('OperatingIncomeCI2').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('OthersCI2').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('TaxesAdjustmentCI2').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCI2').value.replaceAll(/,/g, ''));
        document.getElementById('NormalizedIncomeBeforeInterestCI2').value = numUSD.format(Math.round(a));
        // Column 3
        a = parseInt(document.getElementById('OperatingIncomeCI3').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('OthersCI3').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('TaxesAdjustmentCI3').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCI3').value.replaceAll(/,/g, ''));
        document.getElementById('NormalizedIncomeBeforeInterestCI3').value = numUSD.format(Math.round(a));
        // Column 4
        a = parseInt(document.getElementById('OperatingIncomeCI4').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('OthersCI4').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('TaxesAdjustmentCI4').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCI4').value.replaceAll(/,/g, ''));
        document.getElementById('NormalizedIncomeBeforeInterestCI4').value = numUSD.format(Math.round(a));
        // Column 5
        a = parseInt(document.getElementById('OperatingIncomeCI5').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('OthersCI5').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('TaxesAdjustmentCI5').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCI5').value.replaceAll(/,/g, ''));
        document.getElementById('NormalizedIncomeBeforeInterestCI5').value = numUSD.format(Math.round(a));
        // Column 6
        b = parseInt(document.getElementById('OperatingIncomeCI6').value.replaceAll(/,/g, ''));
        b = b + parseInt(document.getElementById('OthersCI6').value.replaceAll(/,/g, ''));
        b = b + parseInt(document.getElementById('TaxesAdjustmentCI6').value.replaceAll(/,/g, ''));
        a = a + parseInt(document.getElementById('EquityMethodInvesteesIncomeCI6').value.replaceAll(/,/g, ''));
        if (a == 0) {
            b = a;
        }
        document.getElementById('NormalizedIncomeBeforeInterestCI6').value = numUSD.format(Math.round(b));
    };
};

function BalanceNormalizedWeightedCashFlowBeforeTaxes(BalanceNormalizedWeightedCashFlowBeforeTaxes) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI2').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI3').value.replaceAll(/,/g, ''));
    i = parseFloat(document.getElementById('WeightCI1').value);
    ii = parseFloat(document.getElementById('WeightCI2').value);
    iii = parseFloat(document.getElementById('WeightCI3').value);
    if (a != 0) {
        if (b != 0) {
            if (c != 0) {
                document.getElementById('NormalizedWeightedIncomeBeforeInterest1').value = numUSD.format(Math.round(a * i / (i + ii + iii) + b * ii / (i + ii + iii) + c * iii / (i + ii + iii)));
            }
        }
    }
    // Column 2
    a = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI3').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI4').value.replaceAll(/,/g, ''));
    i = parseFloat(document.getElementById('WeightCI1').value);
    ii = parseFloat(document.getElementById('WeightCI2').value);
    iii = parseFloat(document.getElementById('WeightCI3').value);
    if (a != 0) {
        if (b != 0) {
            if (c != 0) {
                document.getElementById('NormalizedWeightedIncomeBeforeInterest2').value = numUSD.format(Math.round(a * i / (i + ii + iii) + b * ii / (i + ii + iii) + c * iii / (i + ii + iii)));
            }
        }
    }
    // Column 3
    a = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI4').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI5').value.replaceAll(/,/g, ''));
    i = parseFloat(document.getElementById('WeightCI1').value);
    ii = parseFloat(document.getElementById('WeightCI2').value);
    iii = parseFloat(document.getElementById('WeightCI3').value);
    if (a != 0) {
        if (b != 0) {
            if (c != 0) {
                document.getElementById('NormalizedWeightedIncomeBeforeInterest3').value = numUSD.format(Math.round(a * i / (i + ii + iii) + b * ii / (i + ii + iii) + c * iii / (i + ii + iii)));
            }
        }
    }
    // Column 4
    a = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI5').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('NormalizedIncomeBeforeInterestCI6').value.replaceAll(/,/g, ''));
    i = parseFloat(document.getElementById('WeightCI1').value);
    ii = parseFloat(document.getElementById('WeightCI2').value);
    iii = parseFloat(document.getElementById('WeightCI3').value);
    if (a != 0) {
        if (b != 0) {
            if (c != 0) {
                document.getElementById('NormalizedWeightedIncomeBeforeInterest4').value = numUSD.format(Math.round(a * i / (i + ii + iii) + b * ii / (i + ii + iii) + c * iii / (i + ii + iii)));
            }
        }
    }
};

function BalanceCharacteristicIncomeBeforeInterestAfterTaxes(BalanceCharacteristicIncomeBeforeInterestAfterTaxes) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('NormalizedWeightedIncomeBeforeInterest1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersWeightedCI1').value.replaceAll(/,/g, ''));
    document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes1').value = numUSD.format(Math.round(a));
    // Column 2
    a = parseInt(document.getElementById('NormalizedWeightedIncomeBeforeInterest2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersWeightedCI2').value.replaceAll(/,/g, ''));
    document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes2').value = numUSD.format(Math.round(a));
    // Column 3
    a = parseInt(document.getElementById('NormalizedWeightedIncomeBeforeInterest3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersWeightedCI3').value.replaceAll(/,/g, ''));
    document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes3').value = numUSD.format(Math.round(a));
    // Column 4
    a = parseInt(document.getElementById('NormalizedWeightedIncomeBeforeInterest4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersWeightedCI4').value.replaceAll(/,/g, ''));
    if (a.isNaN) {
        a = 0;
    }
    document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes4').value = numUSD.format(Math.round(a));
};

function BalanceCapitalizationRateCI(BalanceCapitalizationRateCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    // Column 1
    a = parseFloat(document.getElementById('CapitalizationRate1').value);
    document.getElementById('CapitalizationRateCI1').value = numUSD.format(a/100);
    // Column 2
    a = parseFloat(document.getElementById('CapitalizationRate2').value);
    document.getElementById('CapitalizationRateCI2').value = numUSD.format(a/100);
    // Column 3
    a = parseFloat(document.getElementById('CapitalizationRate3').value);
    document.getElementById('CapitalizationRateCI3').value = numUSD.format(a/100);
    // Column 4
    a = parseFloat(document.getElementById('CapitalizationRate4').value);
    document.getElementById('CapitalizationRateCI4').value = numUSD.format(a/100);
};

function BalanceCapitalizedCharacteristicCashFlowCI(BalanceCapitalizedCharacteristicCashFlowCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes1').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('CapitalizationRateCI1').value);
    document.getElementById('CapitalizedCharacteristicIncomeBeforeInterestAfterTaxes1').value = numUSD.format(Math.round(a / (b/100)));
    // Column 2
    a = parseInt(document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes2').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('CapitalizationRateCI2').value);
    document.getElementById('CapitalizedCharacteristicIncomeBeforeInterestAfterTaxes2').value = numUSD.format(Math.round(a / (b/100)));
    // Column 3
    a = parseInt(document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes3').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('CapitalizationRateCI3').value);
    document.getElementById('CapitalizedCharacteristicIncomeBeforeInterestAfterTaxes3').value = numUSD.format(Math.round(a / (b/100)));
    // Column 4
    a = parseInt(document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes4').value.replaceAll(/,/g, ''));
    b = parseFloat(document.getElementById('CapitalizationRateCI4').value);
    document.getElementById('CapitalizedCharacteristicIncomeBeforeInterestAfterTaxes4').value = numUSD.format(Math.round(a / (b/100)));
};

function BalanceExcessWorkingCapitalCI(BalanceExcessWorkingCapitalCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    // Column 1
    a = parseInt(document.getElementById('ExcessWorkingCapitalCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('ExcessWorkingCapitalCI1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 2
    a = parseInt(document.getElementById('ExcessWorkingCapitalCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('ExcessWorkingCapitalCI2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 3
    a = parseInt(document.getElementById('ExcessWorkingCapitalCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('ExcessWorkingCapitalCI3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 4
    a = parseInt(document.getElementById('ExcessWorkingCapitalCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('ExcessWorkingCapitalCI4').value = numUSD.format(a);
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
    document.getElementById('ExcessWorkingCapitalCIRow').style.display = a;
};

function BalanceInvestmentsExcessAssetsCI(BalanceInvestmentsExcessAssetsCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    // Column 1
    a = parseInt(document.getElementById('InvestmentsExcessAssetsCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('InvestmentsExcessAssetsCI1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 2
    a = parseInt(document.getElementById('InvestmentsExcessAssetsCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('InvestmentsExcessAssetsCI2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 3
    a = parseInt(document.getElementById('InvestmentsExcessAssetsCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('InvestmentsExcessAssetsCI3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 4
    a = parseInt(document.getElementById('InvestmentsExcessAssetsCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('InvestmentsExcessAssetsCI4').value = numUSD.format(a);
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
    document.getElementById('InvestmentsExcessAssetsCIRow').style.display = a;
};

function BalanceDiscontinuedOperationsExcessAssetsCI(BalanceDiscontinuedOperationsExcessAssetsCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    // Column 1
    a = parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('DiscontinuedOperationsExcessAssetsCI1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 2
    a = parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('DiscontinuedOperationsExcessAssetsCI2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 3
    a = parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('DiscontinuedOperationsExcessAssetsCI3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 4
    a = parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('DiscontinuedOperationsExcessAssetsCI4').value = numUSD.format(a);
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
    document.getElementById('DiscontinuedOperationsExcessAssetsCIRow').style.display = a;
};

function UnrealizedCapitalGainOnRealEstateNetOfTaxesCI(UnrealizedCapitalGainOnRealEstateNetOfTaxesCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    // Column 1
    a = parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCI1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 2
    a = parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCI2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 3
    a = parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCI3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 4
    a = parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCI4').value = numUSD.format(a);
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
    document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCIRow').style.display = a;
};

function BalancePresentvalueOfTaxProtectionCI(BalancePresentvalueOfTaxProtectionCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    // Column 1
    a = parseInt(document.getElementById('PresentValueOfTaxProtectionCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('PresentValueOfTaxProtectionCI1').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Column 2
    a = parseInt(document.getElementById('PresentValueOfTaxProtectionCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('PresentValueOfTaxProtectionCI2').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Column 3
    a = parseInt(document.getElementById('PresentValueOfTaxProtectionCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('PresentValueOfTaxProtectionCI3').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Column 4
    a = parseInt(document.getElementById('PresentValueOfTaxProtectionCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('PresentValueOfTaxProtectionCI4').value = numUSD.format(Math.round(a));
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
    document.getElementById('PresentValueOfTaxProtectionCIRow').style.display = a;
};

function BalanceBusinessValueCI(BalanceBusinessValueCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('CapitalizedCharacteristicIncomeBeforeInterestAfterTaxes1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ExcessWorkingCapitalCI1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PresentValueOfTaxProtectionCI1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestmentsExcessAssetsCI1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCI1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCI1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCapitalizedCI1').value.replaceAll(/,/g, ''));
    document.getElementById('BusinessValueCI1').value = numUSD.format(Math.round(a));
    // Column 2
    a = parseInt(document.getElementById('CapitalizedCharacteristicIncomeBeforeInterestAfterTaxes2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ExcessWorkingCapitalCI2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PresentValueOfTaxProtectionCI2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestmentsExcessAssetsCI2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCI2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCI2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCapitalizedCI2').value.replaceAll(/,/g, ''));
    document.getElementById('BusinessValueCI2').value = numUSD.format(Math.round(a));
    // Column 3
    a = parseInt(document.getElementById('CapitalizedCharacteristicIncomeBeforeInterestAfterTaxes3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ExcessWorkingCapitalCI3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PresentValueOfTaxProtectionCI3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestmentsExcessAssetsCI3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCI3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCI3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCapitalizedCI3').value.replaceAll(/,/g, ''));
    document.getElementById('BusinessValueCI3').value = numUSD.format(Math.round(a));
    // Column 4
    a = parseInt(document.getElementById('CapitalizedCharacteristicIncomeBeforeInterestAfterTaxes4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ExcessWorkingCapitalCI4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PresentValueOfTaxProtectionCI4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestmentsExcessAssetsCI4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsExcessAssetsCI4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('UnrealizedCapitalGainOnRealEstateNetOfTaxesCI4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OthersCapitalizedCI4').value.replaceAll(/,/g, ''));
    document.getElementById('BusinessValueCI4').value = numUSD.format(Math.round(a));
};

function BalanceLongTermDebtAndLeaseObligationCI(BalanceLongTermDebtAndLeaseObligationCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    z = 0
    // Column 1
    a = parseInt(document.getElementById('TotalDebtAndLeaseObligationCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('TotalDebtAndLeaseObligationCI1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 2
    a = parseInt(document.getElementById('TotalDebtAndLeaseObligationCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('TotalDebtAndLeaseObligationCI2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 3
    a = parseInt(document.getElementById('TotalDebtAndLeaseObligationCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('TotalDebtAndLeaseObligationCI3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // Column 4
    a = parseInt(document.getElementById('TotalDebtAndLeaseObligationCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('TotalDebtAndLeaseObligationCI4').value = numUSD.format(a);
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
    document.getElementById('TotalDebtAndLeaseObligationCIRow').style.display = a;
};

function BalanceValueOfAllCategoryOfSharesCI(BalanceValueOfAllCategoryOfSharesCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Column 1
    a = parseInt(document.getElementById('BusinessValueCI1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalDebtAndLeaseObligationCI1').value.replaceAll(/,/g, ''));
    document.getElementById('ValueOfAllCategoryOfSharesCI1').value = numUSD.format(Math.round(a + b));
    // Column 2
    a = parseInt(document.getElementById('BusinessValueCI2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalDebtAndLeaseObligationCI2').value.replaceAll(/,/g, ''));
    document.getElementById('ValueOfAllCategoryOfSharesCI2').value = numUSD.format(Math.round(a + b));
    // Column 3
    a = parseInt(document.getElementById('BusinessValueCI3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalDebtAndLeaseObligationCI3').value.replaceAll(/,/g, ''));
    document.getElementById('ValueOfAllCategoryOfSharesCI3').value = numUSD.format(Math.round(a + b));
    // Column 4
    a = parseInt(document.getElementById('BusinessValueCI4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalDebtAndLeaseObligationCI4').value.replaceAll(/,/g, ''));
    document.getElementById('ValueOfAllCategoryOfSharesCI4').value = numUSD.format(Math.round(a + b));
};

function BalanceShareholdersEquityCI(BalanceShareholdersEquityCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCCF1').value.replaceAll(/,/g, ''));
    document.getElementById('ValueAccruingToPreferredShareholdersCI1').value = numUSD.format(Math.round(a));
    // Column 2
    a = parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCCF2').value.replaceAll(/,/g, ''));
    document.getElementById('ValueAccruingToPreferredShareholdersCI2').value = numUSD.format(Math.round(a));
    // Column 3
    a = parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCCF3').value.replaceAll(/,/g, ''));
    document.getElementById('ValueAccruingToPreferredShareholdersCI3').value = numUSD.format(Math.round(a));
    // Column 4
    a = parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCCF4').value.replaceAll(/,/g, ''));
    document.getElementById('ValueAccruingToPreferredShareholdersCI4').value = numUSD.format(Math.round(a));
};

function BalanceCommonSharesValueCI(BalanceCommonSharesValueCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('ValueOfAllCategoryOfSharesCI1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCI1').value.replaceAll(/,/g, ''));
    document.getElementById('CommonSharesValueCI1').value = numUSD.format(Math.round(a));
    // Column 2
    a = parseInt(document.getElementById('ValueOfAllCategoryOfSharesCI2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCI2').value.replaceAll(/,/g, ''));
    document.getElementById('CommonSharesValueCI2').value = numUSD.format(Math.round(a));
    // Column 3
    a = parseInt(document.getElementById('ValueOfAllCategoryOfSharesCI3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCI3').value.replaceAll(/,/g, ''));
    document.getElementById('CommonSharesValueCI3').value = numUSD.format(Math.round(a));
    // Column 4
    a = parseInt(document.getElementById('ValueOfAllCategoryOfSharesCI4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ValueAccruingToPreferredShareholdersCI4').value.replaceAll(/,/g, ''));
    document.getElementById('CommonSharesValueCI4').value = numUSD.format(Math.round(a));
};

function BalanceNetAssetsCI(BalanceNetAssetsCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    if (document.getElementById('OpenEditor').checked == false) {
        // Column 1
        a = Math.round(parseInt(document.getElementById('ShareholdersEquity1').value.replaceAll(/,/g, '')));
        document.getElementById('FairValueOfIdentifiableAssetsCI1').value = numUSD.format(a)
        // Column 2
        a = Math.round(parseInt(document.getElementById('ShareholdersEquity2').value.replaceAll(/,/g, '')));
        document.getElementById('FairValueOfIdentifiableAssetsCI2').value = numUSD.format(a)
        // Column 3
        a = Math.round(parseInt(document.getElementById('ShareholdersEquity3').value.replaceAll(/,/g, '')));
        document.getElementById('FairValueOfIdentifiableAssetsCI3').value = numUSD.format(a)
        // Column 4
        a = Math.round(parseInt(document.getElementById('ShareholdersEquity4').value.replaceAll(/,/g, '')));
        document.getElementById('FairValueOfIdentifiableAssetsCI4').value = numUSD.format(a)
    };
};

function BalanceGoodwillFairValueCI(BalanceGoodwillFairValueCI) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Column 1
    a = parseInt(document.getElementById('CommonSharesValueCI1').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('FairValueOfIdentifiableAssetsCI1').value.replaceAll(/,/g, ''));
    a = Math.max(0, a)
    document.getElementById('GoodwillFairValueCI1').value = numUSD.format(Math.round(a));
    // Column 2
    a = parseInt(document.getElementById('CommonSharesValueCI2').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('FairValueOfIdentifiableAssetsCI2').value.replaceAll(/,/g, ''));
    a = Math.max(0, a)
    document.getElementById('GoodwillFairValueCI2').value = numUSD.format(Math.round(a));
    // Column 3
    a = parseInt(document.getElementById('CommonSharesValueCI3').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('FairValueOfIdentifiableAssetsCI3').value.replaceAll(/,/g, ''));
    a = Math.max(0, a)
    document.getElementById('GoodwillFairValueCI3').value = numUSD.format(Math.round(a));
    // Column 4
    a = parseInt(document.getElementById('CommonSharesValueCI4').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('FairValueOfIdentifiableAssetsCI4').value.replaceAll(/,/g, ''));
    a = Math.max(0, a)
    document.getElementById('GoodwillFairValueCI4').value = numUSD.format(Math.round(a));
};

