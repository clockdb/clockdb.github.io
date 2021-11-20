
// analysis/financials/shareholdersequity.js

function DateStatementsOfShareholdersEquity(DateStatementsOfShareholdersEquity) {
    document.getElementById('DateStatementsOfShareholdersEquity1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateStatementsOfShareholdersEquity2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateStatementsOfShareholdersEquity3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateStatementsOfShareholdersEquity4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateStatementsOfShareholdersEquity5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateStatementsOfShareholdersEquity6').innerHTML = document.getElementById('ContextDate6').value;
};

function StatementsOfShareholdersAmend(StatementsOfShareholdersAmend) {
    document.getElementById('StatementsOfShareholdersAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('StatementsOfShareholdersAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('StatementsOfShareholdersAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('StatementsOfShareholdersAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('StatementsOfShareholdersAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('StatementsOfShareholdersAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefStatementsOfShareholders() {
    document.getElementById('StatementsOfShareholdersFilings1').href = document.getElementById('Filings1').href
    document.getElementById('StatementsOfShareholdersFilings2').href = document.getElementById('Filings2').href
    document.getElementById('StatementsOfShareholdersFilings3').href = document.getElementById('Filings3').href
    document.getElementById('StatementsOfShareholdersFilings4').href = document.getElementById('Filings4').href
    document.getElementById('StatementsOfShareholdersFilings5').href = document.getElementById('Filings5').href
    document.getElementById('StatementsOfShareholdersFilings6').href = document.getElementById('Filings6').href
};

function BalanceShareholdersEquityBeginning(BalanceShareholdersEquityBeginning) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });                                
    // Last Year
    a = parseInt(document.getElementById('TrialBalanceConvertibleDebt1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests1').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityBeginning1').value = numUSD.format(Math.round(-a));
    // Second Last Year
    a = parseInt(document.getElementById('TrialBalanceConvertibleDebt2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests2').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityBeginning2').value = numUSD.format(Math.round(-a));
    // Third Last Year
    a = parseInt(document.getElementById('TrialBalanceConvertibleDebt3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests3').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityBeginning3').value = numUSD.format(Math.round(-a));
    // Fourth Last Year
    a = parseInt(document.getElementById('TrialBalanceConvertibleDebt4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests4').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityBeginning4').value = numUSD.format(Math.round(-a));
    // Fifth Last Year
    a = parseInt(document.getElementById('TrialBalanceConvertibleDebt5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests5').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityBeginning5').value = numUSD.format(Math.round(-a));
    // Sixth Last Year
    a = parseInt(document.getElementById('TrialBalanceConvertibleDebt6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests6').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityBeginning6').value = numUSD.format(Math.round(-a));
};

function BalanceCommonSharesIssued(BalanceCommonSharesIssued) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesIssued1').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesIssued1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesIssued2').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesIssued2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesIssued3').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesIssued3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesIssued4').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesIssued4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesIssued5').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesIssued5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesIssued6').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesIssued6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('CommonSharesIssuedRow').style.display = a;
        document.getElementById('TrialBalanceCommonSharesIssuedRow').style.display = a;
    }
};

function BalanceShareBasedCompensation(BalanceShareBasedCompensation) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensation1').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensation1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensation2').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensation2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensation3').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensation3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensation4').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensation4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensation5').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensation5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensation6').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensation6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ShareBasedCompensationRow').style.display = a;
        document.getElementById('TrialBalanceShareBasedCompensationRow').style.display = a;
    }
};

function BalanceShareBasedCompensationRetainedEarnings(BalanceShareBasedCompensationRetainedEarnings) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings1').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensationRetainedEarnings1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings2').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensationRetainedEarnings2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings3').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensationRetainedEarnings3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings4').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensationRetainedEarnings4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings5').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensationRetainedEarnings5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings6').value.replaceAll(/,/g, '')))
    document.getElementById('ShareBasedCompensationRetainedEarnings6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ShareBasedCompensationRetainedEarningsRow').style.display = a;
        document.getElementById('TrialBalanceShareBasedCompensationRetainedEarningsRow').style.display = a;
    }
};

function BalanceDividendsAndDividendEquivalentsDeclared(BalanceDividendsAndDividendEquivalentsDeclared) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared1').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsAndDividendEquivalentsDeclared1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared2').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsAndDividendEquivalentsDeclared2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared3').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsAndDividendEquivalentsDeclared3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared4').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsAndDividendEquivalentsDeclared4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared5').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsAndDividendEquivalentsDeclared5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared6').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsAndDividendEquivalentsDeclared6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DividendsAndDividendEquivalentsDeclaredRow').style.display = a;
        document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclaredRow').style.display = a;
    }
};

function BalanceCommonSharesRepurchasedAndRetired(BalanceCommonSharesRepurchasedAndRetired) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired1').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesRepurchasedAndRetired1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired2').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesRepurchasedAndRetired2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired3').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesRepurchasedAndRetired3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired4').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesRepurchasedAndRetired4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired5').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesRepurchasedAndRetired5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired6').value.replaceAll(/,/g, '')))
    document.getElementById('CommonSharesRepurchasedAndRetired6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('CommonSharesRepurchasedAndRetiredRow').style.display = a;
        document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetiredRow').style.display = a;
    }
};

function BalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts(BalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts1').value.replaceAll(/,/g, '')))
    document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts2').value.replaceAll(/,/g, '')))
    document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts3').value.replaceAll(/,/g, '')))
    document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts4').value.replaceAll(/,/g, '')))
    document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts5').value.replaceAll(/,/g, '')))
    document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts6').value.replaceAll(/,/g, '')))
    document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCutsRow').style.display = a;
        document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCutsRow').style.display = a
    }
};

function BalanceRetainedEarningsOthers(BalanceRetainedEarningsOthers) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers1').value.replaceAll(/,/g, '')))
    document.getElementById('RetainedEarningsOthers1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers2').value.replaceAll(/,/g, '')))
    document.getElementById('RetainedEarningsOthers2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers3').value.replaceAll(/,/g, '')))
    document.getElementById('RetainedEarningsOthers3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers4').value.replaceAll(/,/g, '')))
    document.getElementById('RetainedEarningsOthers4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers5').value.replaceAll(/,/g, '')))
    document.getElementById('RetainedEarningsOthers5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers6').value.replaceAll(/,/g, '')))
    document.getElementById('RetainedEarningsOthers6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('RetainedEarningsOthersRow').style.display = a;
        document.getElementById('TrialBalanceRetainedEarningsOthersRow').style.display = a;
    }
};

function BalancePurchaseAndSellOfTreasuryShares(BalancePurchaseAndSellOfTreasuryShares) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares1').value.replaceAll(/,/g, '')))
    document.getElementById('PurchaseAndSellOfTreasuryShares1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares2').value.replaceAll(/,/g, '')))
    document.getElementById('PurchaseAndSellOfTreasuryShares2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares3').value.replaceAll(/,/g, '')))
    document.getElementById('PurchaseAndSellOfTreasuryShares3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares4').value.replaceAll(/,/g, '')))
    document.getElementById('PurchaseAndSellOfTreasuryShares4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares5').value.replaceAll(/,/g, '')))
    document.getElementById('PurchaseAndSellOfTreasuryShares5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares6').value.replaceAll(/,/g, '')))
    document.getElementById('PurchaseAndSellOfTreasuryShares6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PurchaseAndSellOfTreasurySharesRow').style.display = a;
        document.getElementById('TrialBalancePurchaseAndSellOfTreasurySharesRow').style.display = a;
    }
};

function BalanceDividendsDeclaredToNonControllingInterests(BalanceDividendsDeclaredToNonControllingInterests) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests1').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsDeclaredToNonControllingInterests1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests2').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsDeclaredToNonControllingInterests2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests3').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsDeclaredToNonControllingInterests3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests4').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsDeclaredToNonControllingInterests4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests5').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsDeclaredToNonControllingInterests5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests6').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsDeclaredToNonControllingInterests6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DividendsDeclaredToNonControllingInterestsRow').style.display = a;
        document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterestsRow').style.display = a;
    }
};

function BalanceAcquisitionOfNonControllingInterests(BalanceAcquisitionOfNonControllingInterests) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests1').value.replaceAll(/,/g, '')))
    document.getElementById('AcquisitionOfNonControllingInterests1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests2').value.replaceAll(/,/g, '')))
    document.getElementById('AcquisitionOfNonControllingInterests2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests3').value.replaceAll(/,/g, '')))
    document.getElementById('AcquisitionOfNonControllingInterests3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests4').value.replaceAll(/,/g, '')))
    document.getElementById('AcquisitionOfNonControllingInterests4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests5').value.replaceAll(/,/g, '')))
    document.getElementById('AcquisitionOfNonControllingInterests5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests6').value.replaceAll(/,/g, '')))
    document.getElementById('AcquisitionOfNonControllingInterests6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('AcquisitionOfNonControllingInterestsRow').style.display = a;
        document.getElementById('TrialBalanceAcquisitionOfNonControllingInterestsRow').style.display = a
    }
};

function BalanceNonControllingInterestsOthers(BalanceNonControllingInterestsOthers) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers1').value.replaceAll(/,/g, '')))
    document.getElementById('NonControllingInterestsOthers1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers2').value.replaceAll(/,/g, '')))
    document.getElementById('NonControllingInterestsOthers2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers3').value.replaceAll(/,/g, '')))
    document.getElementById('NonControllingInterestsOthers3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers4').value.replaceAll(/,/g, '')))
    document.getElementById('NonControllingInterestsOthers4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers5').value.replaceAll(/,/g, '')))
    document.getElementById('NonControllingInterestsOthers5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers6').value.replaceAll(/,/g, '')))
    document.getElementById('NonControllingInterestsOthers6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('NonControllingInterestsOthersRow').style.display = a;
        document.getElementById('TrialBalanceNonControllingInterestsOthersRow').style.display = a;
    }
};

function BalanceComprehensiveIncomeShareholdersEquity(BalanceComprehensiveIncomeShareholdersEquity) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });                                
    // Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome1').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeShareholdersEquity1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome2').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeShareholdersEquity2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome3').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeShareholdersEquity3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome4').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeShareholdersEquity4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome5').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeShareholdersEquity5').value = numUSD.format(Math.round(a));
    // Sixth Last Year
    a = parseInt(document.getElementById('ChangeInForeignCurrencyTranslationAdjustment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnDerivativeInstruments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInUnrealizedGainsLossesOnInvestments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ChangeInDefinedBenefitPensionAndOtherSimilarPlans6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncomeTaxOnOtherComprehensiveIncome6').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeShareholdersEquity6').value = numUSD.format(Math.round(a));
};

function BalanceNetIncomeLossShareholdersEquity(BalanceNetIncomeLossShareholdersEquity) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    document.getElementById('NetIncomeLossShareholdersEquity1').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome1').value.replaceAll(/,/g, ''))));
    document.getElementById('NetIncomeLossShareholdersEquity2').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome2').value.replaceAll(/,/g, ''))));
    document.getElementById('NetIncomeLossShareholdersEquity3').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome3').value.replaceAll(/,/g, ''))));
    document.getElementById('NetIncomeLossShareholdersEquity4').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome4').value.replaceAll(/,/g, ''))));
    document.getElementById('NetIncomeLossShareholdersEquity5').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome5').value.replaceAll(/,/g, ''))));
    document.getElementById('NetIncomeLossShareholdersEquity6').value = numUSD.format(Math.round(parseInt(document.getElementById('NetIncome6').value.replaceAll(/,/g, ''))));
};

function BalanceShareholdersEquity(BalanceShareholdersEquity) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });       
    ////////////////////
    // Shareholders Equity             
    // Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity1').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquity1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity2').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquity2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity3').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquity3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity4').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquity4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity5').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquity5').value = numUSD.format(Math.round(a));
    // Sixth Last Year
    a = parseInt(document.getElementById('ShareholdersEquityBeginning6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity6').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquity6').value = numUSD.format(Math.round(a));
    ////////////////////
    // Convertible Debt (Balance Sheets) 
    // Last Year
    z = 0
    a = -parseInt(document.getElementById('TrialBalanceConvertibleDebt1').value.replaceAll(/,/g, ''));
    document.getElementById('ConvertibleDebt1').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    a = -parseInt(document.getElementById('TrialBalanceConvertibleDebt2').value.replaceAll(/,/g, ''));
    document.getElementById('ConvertibleDebt2').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    a = -parseInt(document.getElementById('TrialBalanceConvertibleDebt3').value.replaceAll(/,/g, ''));
    document.getElementById('ConvertibleDebt3').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    a = -parseInt(document.getElementById('TrialBalanceConvertibleDebt4').value.replaceAll(/,/g, ''));
    document.getElementById('ConvertibleDebt4').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fifth Year
    a = -parseInt(document.getElementById('TrialBalanceConvertibleDebt5').value.replaceAll(/,/g, ''));
    document.getElementById('ConvertibleDebt5').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fifth Year
    a = -parseInt(document.getElementById('TrialBalanceConvertibleDebt6').value.replaceAll(/,/g, ''));
    document.getElementById('ConvertibleDebt6').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ConvertibleDebtRow').style.display = a;
        document.getElementById('TrialBalanceConvertibleDebtRow').style.display = a;
    }
    ////////////////////
    // Common Shares (Balance Sheets) 
    // Last Year
    z = 0
    a = -parseInt(document.getElementById('TrialBalanceCommonShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation1').value.replaceAll(/,/g, ''));
    document.getElementById('CommonShares1').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    a = -parseInt(document.getElementById('TrialBalanceCommonShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation2').value.replaceAll(/,/g, ''));
    document.getElementById('CommonShares2').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    a = -parseInt(document.getElementById('TrialBalanceCommonShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation3').value.replaceAll(/,/g, ''));
    document.getElementById('CommonShares3').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    a = -parseInt(document.getElementById('TrialBalanceCommonShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation4').value.replaceAll(/,/g, ''));
    document.getElementById('CommonShares4').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fifth Year
    a = -parseInt(document.getElementById('TrialBalanceCommonShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation5').value.replaceAll(/,/g, ''));
    document.getElementById('CommonShares5').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Sixth Year
    a = -parseInt(document.getElementById('TrialBalanceCommonShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesIssued6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensation6').value.replaceAll(/,/g, ''));
    document.getElementById('CommonShares6').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('CommonSharesRow').style.display = a;
        document.getElementById('TrialBalanceCommonSharesRow').style.display = a;
    }
    ////////////////////
    // Accumulated Other Comprehensive Income (Loss), Net of Tax (Balance Sheets) 
    // Last Year
    z = 0
    a = -parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity1').value.replaceAll(/,/g, ''));
    document.getElementById('AccumulatedOtherComprehensiveIncomeLoss1').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    a = -parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity2').value.replaceAll(/,/g, ''));
    document.getElementById('AccumulatedOtherComprehensiveIncomeLoss2').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    a = -parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity3').value.replaceAll(/,/g, ''));
    document.getElementById('AccumulatedOtherComprehensiveIncomeLoss3').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    a = -parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity4').value.replaceAll(/,/g, ''));
    document.getElementById('AccumulatedOtherComprehensiveIncomeLoss4').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fifth Year
    a = -parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity5').value.replaceAll(/,/g, ''));
    document.getElementById('AccumulatedOtherComprehensiveIncomeLoss5').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Sixth Year
    a = -parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ComprehensiveIncomeShareholdersEquity6').value.replaceAll(/,/g, ''));
    document.getElementById('AccumulatedOtherComprehensiveIncomeLoss6').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('AccumulatedOtherComprehensiveIncomeLossRow').style.display = a;
        document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLossRow').style.display = a;
    }
    ////////////////////
    // Retained Earnings (Accumulated Deficit) (Balance Sheets) 
    // Last Year
    z = 0
    a = -parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity1').value.replaceAll(/,/g, ''));
    document.getElementById('RetainedEarningsAccumulatedDeficit1').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    a = -parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity2').value.replaceAll(/,/g, ''));
    document.getElementById('RetainedEarningsAccumulatedDeficit2').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    a = -parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity3').value.replaceAll(/,/g, ''));
    document.getElementById('RetainedEarningsAccumulatedDeficit3').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    a = -parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity4').value.replaceAll(/,/g, ''));
    document.getElementById('RetainedEarningsAccumulatedDeficit4').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fifth Year
    a = -parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity5').value.replaceAll(/,/g, ''));
    document.getElementById('RetainedEarningsAccumulatedDeficit5').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Sixth Year
    a = -parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonSharesRepurchasedAndRetired6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationRetainedEarnings6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsOthers6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetIncomeLossShareholdersEquity6').value.replaceAll(/,/g, ''));
    document.getElementById('RetainedEarningsAccumulatedDeficit6').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('RetainedEarningsAccumulatedDeficitRow').style.display = a;
        document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficitRow').style.display = a;
    }
    ////////////////////
    // Treasury Shares (Balance Sheets) 
    z = 0
    // Last Year
    z = 0
    a = -parseInt(document.getElementById('TrialBalanceTreasuryShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares1').value.replaceAll(/,/g, ''));
    document.getElementById('TreasuryShares1').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    a = -parseInt(document.getElementById('TrialBalanceTreasuryShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares2').value.replaceAll(/,/g, ''));
    document.getElementById('TreasuryShares2').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    a = -parseInt(document.getElementById('TrialBalanceTreasuryShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares3').value.replaceAll(/,/g, ''));
    document.getElementById('TreasuryShares3').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    a = -parseInt(document.getElementById('TrialBalanceTreasuryShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares4').value.replaceAll(/,/g, ''));
    document.getElementById('TreasuryShares4').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fifth Year
    a = -parseInt(document.getElementById('TrialBalanceTreasuryShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares5').value.replaceAll(/,/g, ''));
    document.getElementById('TreasuryShares5').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Sixth Year
    a = -parseInt(document.getElementById('TrialBalanceTreasuryShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PurchaseAndSellOfTreasuryShares6').value.replaceAll(/,/g, ''));
    document.getElementById('TreasuryShares6').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('TreasurySharesRow').style.display = a;
        document.getElementById('TrialBalanceTreasurySharesRow').style.display = a;
    }
    ////////////////////
    // Non Controlling Interests (Balance Sheets) 
    z = 0
    // Last Year
    a = -parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust1').value.replaceAll(/,/g, ''));
    document.getElementById('EmployeeBenefitTrust1').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    a = -parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust2').value.replaceAll(/,/g, ''));
    document.getElementById('EmployeeBenefitTrust2').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    a = -parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust3').value.replaceAll(/,/g, ''));
    document.getElementById('EmployeeBenefitTrust3').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    a = -parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust4').value.replaceAll(/,/g, ''));
    document.getElementById('EmployeeBenefitTrust4').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fifth Year
    a = -parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust5').value.replaceAll(/,/g, ''));
    document.getElementById('EmployeeBenefitTrust5').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Sixth Year
    a = -parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust6').value.replaceAll(/,/g, ''));
    document.getElementById('EmployeeBenefitTrust6').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('EmployeeBenefitTrustRow').style.display = a;
        document.getElementById('TrialBalanceEmployeeBenefitTrustRow').style.display = a;
    }
    ////////////////////
    // Non Controlling Interests (Balance Sheets) 
    z = 0
    // Last Year
    a = -parseInt(document.getElementById('TrialBalanceNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers1').value.replaceAll(/,/g, ''));
    document.getElementById('NonControllingInterests1').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Second Last Year
    a = -parseInt(document.getElementById('TrialBalanceNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers2').value.replaceAll(/,/g, ''));
    document.getElementById('NonControllingInterests2').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Third Last Year
    a = -parseInt(document.getElementById('TrialBalanceNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers3').value.replaceAll(/,/g, ''));
    document.getElementById('NonControllingInterests3').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fourth Last Year
    a = -parseInt(document.getElementById('TrialBalanceNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers4').value.replaceAll(/,/g, ''));
    document.getElementById('NonControllingInterests4').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Fifth Year
    a = -parseInt(document.getElementById('TrialBalanceNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers5').value.replaceAll(/,/g, ''));
    document.getElementById('NonControllingInterests5').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    // Sixth Year
    a = -parseInt(document.getElementById('TrialBalanceNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsDeclaredToNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AcquisitionOfNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterestsOthers6').value.replaceAll(/,/g, ''));
    document.getElementById('NonControllingInterests6').value = numUSD.format(Math.round(a));
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('NonControllingInterestsRow').style.display = a;
        document.getElementById('TrialBalanceNonControllingInterestsRow').style.display = a;
    }
    ////////////////////
    // Shareholders Equity (Balance Sheets) 
    // Last Year
    a = parseInt(document.getElementById('ConvertibleDebt1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests1').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityNote1').value = numUSD.format(Math.round(a));
    document.getElementById('BalanceSheetsShareholdersEquity1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('ConvertibleDebt2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests2').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityNote2').value = numUSD.format(Math.round(a));
    document.getElementById('BalanceSheetsShareholdersEquity2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('ConvertibleDebt3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests3').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityNote3').value = numUSD.format(Math.round(a));
    document.getElementById('BalanceSheetsShareholdersEquity3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('ConvertibleDebt4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests4').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityNote4').value = numUSD.format(Math.round(a));
    document.getElementById('BalanceSheetsShareholdersEquity4').value = numUSD.format(Math.round(a));
    // Fifth Year
    a = parseInt(document.getElementById('ConvertibleDebt5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust5').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityNote5').value = numUSD.format(Math.round(a));
    document.getElementById('BalanceSheetsShareholdersEquity5').value = numUSD.format(Math.round(a));
    // Sixth Year
    a = parseInt(document.getElementById('ConvertibleDebt6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommonShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccumulatedOtherComprehensiveIncomeLoss6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetainedEarningsAccumulatedDeficit6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TreasuryShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeBenefitTrust6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonControllingInterests6').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityNote6').value = numUSD.format(Math.round(a));
    document.getElementById('BalanceSheetsShareholdersEquity6').value = numUSD.format(Math.round(a));
    ////////////////////
    // Total Liabilities And Shareholders Equity (Balance Sheets) 
    // Last Year
    a = parseInt(document.getElementById('TotalLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity1').value.replaceAll(/,/g, ''));
    document.getElementById('LiabilitiesAndShareholdersShareholdersEquity1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('TotalLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity2').value.replaceAll(/,/g, ''));
    document.getElementById('LiabilitiesAndShareholdersShareholdersEquity2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('TotalLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity3').value.replaceAll(/,/g, ''));
    document.getElementById('LiabilitiesAndShareholdersShareholdersEquity3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('TotalLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity4').value.replaceAll(/,/g, ''));
    document.getElementById('LiabilitiesAndShareholdersShareholdersEquity4').value = numUSD.format(Math.round(a));
    // Fifth Year
    a = parseInt(document.getElementById('TotalLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity5').value.replaceAll(/,/g, ''));
    document.getElementById('LiabilitiesAndShareholdersShareholdersEquity5').value = numUSD.format(Math.round(a));
    // Sixth Year
    a = parseInt(document.getElementById('TotalLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('BalanceSheetsShareholdersEquity6').value.replaceAll(/,/g, ''));
    document.getElementById('LiabilitiesAndShareholdersShareholdersEquity6').value = numUSD.format(Math.round(a));
};

