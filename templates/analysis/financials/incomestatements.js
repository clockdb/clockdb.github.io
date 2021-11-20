

// analysis/financials/incomestatements.js

function DateStatementsOfIncome(DateStatementsOfIncome) {
    document.getElementById('DateStatementsOfIncome1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateStatementsOfIncome2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateStatementsOfIncome3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateStatementsOfIncome4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateStatementsOfIncome5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateStatementsOfIncome6').innerHTML = document.getElementById('ContextDate6').value;
};

function IncomeStatementsAmend(IncomeStatementsAmend) {
    document.getElementById('IncomeStatementsAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('IncomeStatementsAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('IncomeStatementsAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('IncomeStatementsAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('IncomeStatementsAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('IncomeStatementsAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefIncomeStatements() {
    document.getElementById('IncomeStatementsFilings1').href = document.getElementById('Filings1').href
    document.getElementById('IncomeStatementsFilings2').href = document.getElementById('Filings2').href
    document.getElementById('IncomeStatementsFilings3').href = document.getElementById('Filings3').href
    document.getElementById('IncomeStatementsFilings4').href = document.getElementById('Filings4').href
    document.getElementById('IncomeStatementsFilings5').href = document.getElementById('Filings5').href
    document.getElementById('IncomeStatementsFilings6').href = document.getElementById('Filings6').href
};

function BalanceSales(BalanceSales) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceSales1').value.replaceAll(/,/g, ''))));
    document.getElementById('Sales1').value = a
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceSales2').value.replaceAll(/,/g, ''))));
    document.getElementById('Sales2').value = a
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceSales3').value.replaceAll(/,/g, ''))));
    document.getElementById('Sales3').value = a
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceSales4').value.replaceAll(/,/g, ''))));
    document.getElementById('Sales4').value = a
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceSales5').value.replaceAll(/,/g, ''))));
    document.getElementById('Sales5').value = a
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceSales6').value.replaceAll(/,/g, ''))));
    document.getElementById('Sales6').value = a
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        //
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('TrialBalanceSalesRow').style.display = a
    }
};

function BalanceCostOfSales(BalanceCostOfSales) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCostOfSales1').value.replaceAll(/,/g, '')));
    document.getElementById('CostOfSales1').value = numUSD.format(a)
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCostOfSales2').value.replaceAll(/,/g, '')));
    document.getElementById('CostOfSales2').value = numUSD.format(a)
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCostOfSales3').value.replaceAll(/,/g, '')));
    document.getElementById('CostOfSales3').value = numUSD.format(a)
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCostOfSales4').value.replaceAll(/,/g, '')));
    document.getElementById('CostOfSales4').value = numUSD.format(a)
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCostOfSales5').value.replaceAll(/,/g, '')));
    document.getElementById('CostOfSales5').value = numUSD.format(a)
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCostOfSales6').value.replaceAll(/,/g, '')));
    document.getElementById('CostOfSales6').value = numUSD.format(a)
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        //
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('CostOfSalesRow').style.display = a;
        document.getElementById('GrossMarginRow').style.display = a;
        document.getElementById('TrialBalanceCostOfSalesRow').style.display = a;
    };
};

function BalanceGrossMargin(BalanceGrossMargin) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Last Year
    a = parseInt(document.getElementById('Sales1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CostOfSales1').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMargin1').value = numUSD.format(Math.round(a));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssets1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('Sales2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CostOfSales2').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMargin2').value = numUSD.format(Math.round(a));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssets2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('Sales3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CostOfSales3').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMargin3').value = numUSD.format(Math.round(a));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssets3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('Sales4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CostOfSales4').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMargin4').value = numUSD.format(Math.round(a));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssets4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('Sales5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CostOfSales5').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMargin5').value = numUSD.format(Math.round(a));
    // Sixth Last Year
    a = parseInt(document.getElementById('Sales6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CostOfSales6').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMargin6').value = numUSD.format(Math.round(a));
};

function BalanceResearchAndDevelopment(BalanceResearchAndDevelopment) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceResearchAndDevelopment1').value.replaceAll(/,/g, '')))
    document.getElementById('ResearchAndDevelopment1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceResearchAndDevelopment2').value.replaceAll(/,/g, '')))
    document.getElementById('ResearchAndDevelopment2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceResearchAndDevelopment3').value.replaceAll(/,/g, '')))
    document.getElementById('ResearchAndDevelopment3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceResearchAndDevelopment4').value.replaceAll(/,/g, '')))
    document.getElementById('ResearchAndDevelopment4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceResearchAndDevelopment5').value.replaceAll(/,/g, '')))
    document.getElementById('ResearchAndDevelopment5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceResearchAndDevelopment6').value.replaceAll(/,/g, '')))
    document.getElementById('ResearchAndDevelopment6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ResearchAndDevelopmentRow').style.display = a;
        document.getElementById('TrialBalanceResearchAndDevelopmentRow').style.display = a;
    }
};

function BalanceSellingGeneralAdministrativeAndMarketing(BalanceSellingGeneralAdministrativeAndMarketing) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    a = parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing1').value.replaceAll(/,/g, ''));
    document.getElementById('SellingGeneralAdministrativeAndMarketing1').value = numUSD.format(-Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    a = parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing2').value.replaceAll(/,/g, ''));
    document.getElementById('SellingGeneralAdministrativeAndMarketing2').value = numUSD.format(-Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    a = parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing3').value.replaceAll(/,/g, ''));
    document.getElementById('SellingGeneralAdministrativeAndMarketing3').value = numUSD.format(-Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    a = parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing4').value.replaceAll(/,/g, ''));
    document.getElementById('SellingGeneralAdministrativeAndMarketing4').value = numUSD.format(-Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    a = parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing5').value.replaceAll(/,/g, ''));
    document.getElementById('SellingGeneralAdministrativeAndMarketing5').value = numUSD.format(-Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    a = parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing6').value.replaceAll(/,/g, ''));
    document.getElementById('SellingGeneralAdministrativeAndMarketing6').value = numUSD.format(-Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketingRow').style.display = a
    }
};

function BalanceOperatingIncome(BalanceOperatingIncome) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });                                
    // Last Year
    a = parseInt(document.getElementById('GrossMargin1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing1').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingIncome1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('GrossMargin2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing2').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingIncome2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('GrossMargin3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing3').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingIncome3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('GrossMargin4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing4').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingIncome4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('GrossMargin5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing5').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingIncome5').value = numUSD.format(Math.round(a));
    // Sixth Last Year
    a = parseInt(document.getElementById('GrossMargin6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ResearchAndDevelopment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing6').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingIncome6').value = numUSD.format(Math.round(a));
};

function BalanceImpairmentRestructuringAndOtherSpecialCharges(BalanceImpairmentRestructuringAndOtherSpecialCharges) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges1').value.replaceAll(/,/g, '')))
    document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges2').value.replaceAll(/,/g, '')))
    document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges3').value.replaceAll(/,/g, '')))
    document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges4').value.replaceAll(/,/g, '')))
    document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges5').value.replaceAll(/,/g, '')))
    document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges6').value.replaceAll(/,/g, '')))
    document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ImpairmentRestructuringAndOtherSpecialChargesRow').style.display = a;
        document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialChargesRow').style.display = a;
    }
};

function BalanceNonOperatingIncomeExpense(BalanceNonOperatingIncomeExpense) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense1').value.replaceAll(/,/g, ''))));
    document.getElementById('NonOperatingIncomeExpense1').value = a;
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense2').value.replaceAll(/,/g, ''))));
    document.getElementById('NonOperatingIncomeExpense2').value = a;
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense3').value.replaceAll(/,/g, ''))));
    document.getElementById('NonOperatingIncomeExpense3').value = a;
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense4').value.replaceAll(/,/g, ''))));
    document.getElementById('NonOperatingIncomeExpense4').value = a;
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense5').value.replaceAll(/,/g, ''))));
    document.getElementById('NonOperatingIncomeExpense5').value = a;
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense6').value.replaceAll(/,/g, ''))));
    document.getElementById('NonOperatingIncomeExpense6').value = a;
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('TrialBalanceNonOperatingIncomeExpenseRow').style.display = a
    }
};

function BalanceIncomeBeforeTaxes(BalanceIncomeBeforeTaxes) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });                                
    // Last Year
    a = parseInt(document.getElementById('OperatingIncome1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense1').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeBeforeTaxes1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('OperatingIncome2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense2').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeBeforeTaxes2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('OperatingIncome3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges3').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeBeforeTaxes3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('OperatingIncome4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense4').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeBeforeTaxes4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('OperatingIncome5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense5').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeBeforeTaxes5').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('OperatingIncome6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ImpairmentRestructuringAndOtherSpecialCharges6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonOperatingIncomeExpense6').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeBeforeTaxes6').value = numUSD.format(Math.round(a));
};

function BalanceIncomeTaxExpenseBenefit(BalanceIncomeTaxExpenseBenefit) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit1').value.replaceAll(/,/g, ''))));
    document.getElementById('IncomeTaxExpenseBenefit1').value = a;
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit2').value.replaceAll(/,/g, ''))));
    document.getElementById('IncomeTaxExpenseBenefit2').value = a;
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit3').value.replaceAll(/,/g, ''))));
    document.getElementById('IncomeTaxExpenseBenefit3').value = a;
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit4').value.replaceAll(/,/g, ''))));
    document.getElementById('IncomeTaxExpenseBenefit4').value = a;
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit5').value.replaceAll(/,/g, ''))));
    document.getElementById('IncomeTaxExpenseBenefit5').value = a;
    if (a == 0) {
        z = z + 1
    }
    a = numUSD.format(-Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit6').value.replaceAll(/,/g, ''))));
    document.getElementById('IncomeTaxExpenseBenefit6').value = a;
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('TrialBalanceIncomeTaxExpenseBenefitRow').style.display = a
    }
};

function BalanceEquityMethodInvesteesIncome(BalanceEquityMethodInvesteesIncome) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome1').value.replaceAll(/,/g, '')))
    document.getElementById('EquityMethodInvesteesIncome1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome2').value.replaceAll(/,/g, '')))
    document.getElementById('EquityMethodInvesteesIncome2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome3').value.replaceAll(/,/g, '')))
    document.getElementById('EquityMethodInvesteesIncome3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome4').value.replaceAll(/,/g, '')))
    document.getElementById('EquityMethodInvesteesIncome4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome5').value.replaceAll(/,/g, '')))
    document.getElementById('EquityMethodInvesteesIncome5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome6').value.replaceAll(/,/g, '')))
    document.getElementById('EquityMethodInvesteesIncome6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('EquityMethodInvesteesIncomeRow').style.display = a;
        document.getElementById('TrialBalanceEquityMethodInvesteesIncomeRow').style.display = a;
    }
};

function BalanceNetIncomeFromDiscontinuedOperations(BalanceNetIncomeFromDiscontinuedOperations) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations1').value.replaceAll(/,/g, '')))
    document.getElementById('NetIncomeFromDiscontinuedOperations1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations2').value.replaceAll(/,/g, '')))
    document.getElementById('NetIncomeFromDiscontinuedOperations2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations3').value.replaceAll(/,/g, '')))
    document.getElementById('NetIncomeFromDiscontinuedOperations3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations4').value.replaceAll(/,/g, '')))
    document.getElementById('NetIncomeFromDiscontinuedOperations4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations5').value.replaceAll(/,/g, '')))
    document.getElementById('NetIncomeFromDiscontinuedOperations5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations6').value.replaceAll(/,/g, '')))
    document.getElementById('NetIncomeFromDiscontinuedOperations6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('NetIncomeFromDiscontinuedOperationsRow').style.display = a;
        document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperationsRow').style.display = a;
    }
};

function BalanceNetIncome(BalanceNetIncome) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });                                
    // Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations1').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncome1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations2').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncome2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations3').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncome3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations4').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncome4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations5').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncome5').value = numUSD.format(Math.round(a));
    // Sixth Last Year
    a = parseInt(document.getElementById('IncomeBeforeTaxes6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxExpenseBenefit6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityMethodInvesteesIncome6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeFromDiscontinuedOperations6').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncome6').value = numUSD.format(Math.round(a));
};