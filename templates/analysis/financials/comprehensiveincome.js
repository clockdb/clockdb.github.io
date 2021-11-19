

// analysis/financials/comprehensiveincome.js

function DateStatementsOfComprehensiveIncome(DateStatementsOfComprehensiveIncome) {
    document.getElementById('DateStatementsOfComprehensiveIncome1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateStatementsOfComprehensiveIncome2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateStatementsOfComprehensiveIncome3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateStatementsOfComprehensiveIncome4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateStatementsOfComprehensiveIncome5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateStatementsOfComprehensiveIncome6').innerHTML = document.getElementById('ContextDate6').value;
};

function StatementsOfComprehensiveAmend(StatementsOfComprehensiveAmend) {
    document.getElementById('StatementsOfComprehensiveAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('StatementsOfComprehensiveAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('StatementsOfComprehensiveAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('StatementsOfComprehensiveAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('StatementsOfComprehensiveAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('StatementsOfComprehensiveAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefStatementsOfComprehensiveIncome() {
    document.getElementById('StatementsOfComprehensiveIncomeFilings1').href = document.getElementById('Filings1').href
    document.getElementById('StatementsOfComprehensiveIncomeFilings2').href = document.getElementById('Filings2').href
    document.getElementById('StatementsOfComprehensiveIncomeFilings3').href = document.getElementById('Filings3').href
    document.getElementById('StatementsOfComprehensiveIncomeFilings4').href = document.getElementById('Filings4').href
    document.getElementById('StatementsOfComprehensiveIncomeFilings5').href = document.getElementById('Filings5').href
    document.getElementById('StatementsOfComprehensiveIncomeFilings6').href = document.getElementById('Filings6').href
};

function BalanceNetIncomeLossComprehensiveIncome(BalanceNetIncomeLossComprehensiveIncome) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    document.getElementById('NetIncomeLossComprehensiveIncome1').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome1').value.replaceAll(/,/g, ''))));
    document.getElementById('NetIncomeLossComprehensiveIncome2').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome2').value.replaceAll(/,/g, ''))));
    document.getElementById('NetIncomeLossComprehensiveIncome3').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome3').value.replaceAll(/,/g, ''))));
    document.getElementById('NetIncomeLossComprehensiveIncome4').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome4').value.replaceAll(/,/g, ''))));
    document.getElementById('NetIncomeLossComprehensiveIncome5').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome5').value.replaceAll(/,/g, ''))));
    document.getElementById('NetIncomeLossComprehensiveIncome6').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome6').value.replaceAll(/,/g, ''))));
};

function BalanceChangeInForeignCurrencyTranslationAdjustment(BalanceChangeInForeignCurrencyTranslationAdjustment) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment1').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInForeignCurrencyTranslationAdjustment1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment2').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInForeignCurrencyTranslationAdjustment2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment3').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInForeignCurrencyTranslationAdjustment3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment4').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInForeignCurrencyTranslationAdjustment4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment5').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInForeignCurrencyTranslationAdjustment5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment6').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInForeignCurrencyTranslationAdjustment6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ChangeInForeignCurrencyTranslationAdjustmentRow').style.display = a;
        document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustmentRow').style.display = a;
    }
};

function BalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments(BalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments1').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments2').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments3').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments4').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments5').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments6').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstrumentsRow').style.display = a;
        document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstrumentsRow').style.display = a;
    }
};

function BalanceChangeInUnrealizedGainsLossesOnInvestments(BalanceChangeInUnrealizedGainsLossesOnInvestments) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments1').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments2').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments3').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments4').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments5').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments6').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ChangeInUnrealizedGainsLossesOnInvestmentsRow').style.display = a;
        document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestmentsRow').style.display = a;
    }
};

function BalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans(BalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans1').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans2').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans3').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans4').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans5').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans6').value.replaceAll(/,/g, '')))
    document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlansRow').style.display = a;
        document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlansRow').style.display = a;
    }
};

function BalanceIncomeTaxOnOtherComprehensiveIncome(BalanceIncomeTaxOnOtherComprehensiveIncome) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome1').value.replaceAll(/,/g, '')))
    document.getElementById('IncomeTaxOnOtherComprehensiveIncome1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome2').value.replaceAll(/,/g, '')))
    document.getElementById('IncomeTaxOnOtherComprehensiveIncome2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome3').value.replaceAll(/,/g, '')))
    document.getElementById('IncomeTaxOnOtherComprehensiveIncome3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome4').value.replaceAll(/,/g, '')))
    document.getElementById('IncomeTaxOnOtherComprehensiveIncome4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome5').value.replaceAll(/,/g, '')))
    document.getElementById('IncomeTaxOnOtherComprehensiveIncome5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome6').value.replaceAll(/,/g, '')))
    document.getElementById('IncomeTaxOnOtherComprehensiveIncome6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncomeTaxOnOtherComprehensiveIncomeRow').style.display = a;
        document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncomeRow').style.display = a;
    }
};

function BalanceComprehensiveIncome(BalanceComprehensiveIncome) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });                                
    // Last Year
    a = parseInt(document.getElementById('NetIncomeLossComprehensiveIncome1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome1').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncome1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('NetIncomeLossComprehensiveIncome2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome2').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncome2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('NetIncomeLossComprehensiveIncome3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome3').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncome3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('NetIncomeLossComprehensiveIncome4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome4').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncome4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('NetIncomeLossComprehensiveIncome5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome5').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncome5').value = numUSD.format(Math.round(a));
    // Sixth Last Year
    a = parseInt(document.getElementById('NetIncomeLossComprehensiveIncome6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome6').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncome6').value = numUSD.format(Math.round(a));
};