

// analysis/financials/cashflow.js

function DateStatementsOfCashFlow(DateStatementsOfCashFlow) {
    document.getElementById('DateStatementsOfCashFlow1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateStatementsOfCashFlow2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateStatementsOfCashFlow3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateStatementsOfCashFlow4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateStatementsOfCashFlow5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateStatementsOfCashFlow6').innerHTML = document.getElementById('ContextDate6').value;
};

function StatementsOfCashFlowAmend(StatementsOfCashFlowAmend) {
    document.getElementById('StatementsOfCashFlowAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('StatementsOfCashFlowAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('StatementsOfCashFlowAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('StatementsOfCashFlowAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('StatementsOfCashFlowAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('StatementsOfCashFlowAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefStatementsOfCashFlow() {
    document.getElementById('StatementsOfCashFlowFilings1').href = document.getElementById('Filings1').href
    document.getElementById('StatementsOfCashFlowFilings2').href = document.getElementById('Filings2').href
    document.getElementById('StatementsOfCashFlowFilings3').href = document.getElementById('Filings3').href
    document.getElementById('StatementsOfCashFlowFilings4').href = document.getElementById('Filings4').href
    document.getElementById('StatementsOfCashFlowFilings5').href = document.getElementById('Filings5').href
    document.getElementById('StatementsOfCashFlowFilings6').href = document.getElementById('Filings6').href
};

function EffectOfExchangeRateOnCashRow(EffectOfExchangeRateOnCashRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('EffectOfExchangeRateOnCash1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('EffectOfExchangeRateOnCash2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('EffectOfExchangeRateOnCash3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('EffectOfExchangeRateOnCash4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('EffectOfExchangeRateOnCash5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('EffectOfExchangeRateOnCash6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('EffectOfExchangeRateOnCashRow').style.display = a;
    }
};

function NetIncomeCashFlow(NetIncomeCashFlow) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Last Year
    a = parseInt(document.getElementById('NetIncome1').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncomeCashFlow1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('NetIncome2').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncomeCashFlow2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('NetIncome3').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncomeCashFlow3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('NetIncome4').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncomeCashFlow4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('NetIncome5').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncomeCashFlow5').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('NetIncome6').value.replaceAll(/,/g, ''));
    document.getElementById('NetIncomeCashFlow6').value = numUSD.format(a);
};

function DepreciationDepletionAndAmortizationRow(DepreciationDepletionAndAmortizationRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('DepreciationDepletionAndAmortization1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('DepreciationDepletionAndAmortization2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('DepreciationDepletionAndAmortization3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('DepreciationDepletionAndAmortization4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('DepreciationDepletionAndAmortization5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('DepreciationDepletionAndAmortization6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DepreciationDepletionAndAmortizationRow').style.display = a;
    }
};

function GainRelatedToDisposalOrSaleRow(GainRelatedToDisposalOrSaleRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('GainRelatedToDisposalOrSale1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('GainRelatedToDisposalOrSale2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('GainRelatedToDisposalOrSale3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('GainRelatedToDisposalOrSale4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('GainRelatedToDisposalOrSale5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('GainRelatedToDisposalOrSale6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('GainRelatedToDisposalOrSaleRow').style.display = a;
    }
};

function RestructuringAndOtherSpecialChargesRow(RestructuringAndOtherSpecialChargesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('RestructuringAndOtherSpecialCharges1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RestructuringAndOtherSpecialCharges2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RestructuringAndOtherSpecialCharges3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RestructuringAndOtherSpecialCharges4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RestructuringAndOtherSpecialCharges5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RestructuringAndOtherSpecialCharges6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('RestructuringAndOtherSpecialChargesRow').style.display = a;
    }
};

function AccruedEmployeeCompensationRow(AccruedEmployeeCompensationRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('AccruedEmployeeCompensation1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('AccruedEmployeeCompensation2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('AccruedEmployeeCompensation3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('AccruedEmployeeCompensation4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('AccruedEmployeeCompensation5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('AccruedEmployeeCompensation6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('AccruedEmployeeCompensationRow').style.display = a;
    }
};

function ShareBasedCompensationOperatingActivitiesRow(ShareBasedCompensationOperatingActivitiesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('ShareBasedCompensationOperatingActivities1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ShareBasedCompensationOperatingActivities2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ShareBasedCompensationOperatingActivities3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ShareBasedCompensationOperatingActivities4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ShareBasedCompensationOperatingActivities5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ShareBasedCompensationOperatingActivities6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ShareBasedCompensationOperatingActivitiesRow').style.display = a
    }
};

function IncreaseDecreaseInIncomeTaxExpenseBenefitRow(IncreaseDecreaseInIncomeTaxExpenseBenefitRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefitRow').style.display = a
    }
};

function OtherNonCashIncomeExpenseRow(OtherNonCashIncomeExpenseRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('OtherNonCashIncomeExpense1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherNonCashIncomeExpense2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherNonCashIncomeExpense3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherNonCashIncomeExpense4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherNonCashIncomeExpense5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherNonCashIncomeExpense6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('OtherNonCashIncomeExpenseRow').style.display = a
    }
};

function IncreaseDecreaseInAccountsReceivableRow(IncreaseDecreaseInAccountsReceivableRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseInAccountsReceivableRow').style.display = a
    }
};

function IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssetsRow(IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssetsRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssetsRow').style.display = a
    }
};

function IncreaseDecreaseInInventoriesRow(IncreaseDecreaseInInventoriesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInInventories1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInInventories2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInInventories3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInInventories4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInInventories5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInInventories6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseInInventoriesRow').style.display = a
    }
};

function IncreaseDecreaseInOtherReceivablesRow(IncreaseDecreaseInOtherReceivablesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseInOtherReceivablesRow').style.display = a
    }
};

function IncreaseDecreaseInAccountsPayableRow(IncreaseDecreaseInAccountsPayableRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilitiesRow').style.display = a
    }
};

function IncreaseDecreaseInContractWithCustomerLiabilityRow(IncreaseDecreaseInContractWithCustomerLiabilityRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseInContractWithCustomerLiabilityRow').style.display = a
    }
};

function IncreaseDecreaseInRetirementBenefitsRow(IncreaseDecreaseInRetirementBenefitsRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseInRetirementBenefitsRow').style.display = a
    }
};

function IncreaseDecreaseFinanceLeaseCurrentRow(IncreaseDecreaseFinanceLeaseCurrentRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseFinanceLeaseCurrentRow').style.display = a
    }
};

function IncreaseDecreaseOperatingLeaseCurrentRow(IncreaseDecreaseOperatingLeaseCurrentRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseOperatingLeaseCurrentRow').style.display = a
    }
};

function IncreaseDecreaseInFairValueOfDerivativesOperatingRow(IncreaseDecreaseInFairValueOfDerivativesOperatingRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperatingRow').style.display = a
    }
};

function IncreaseDecreaseInOtherOperatingActivitiesRow(IncreaseDecreaseInOtherOperatingActivitiesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseInOtherOperatingActivitiesRow').style.display = a
    }
};

function OperatingActivities(OperatingActivities) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Last Year
    a = parseInt(document.getElementById('NetIncomeCashFlow1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DepreciationDepletionAndAmortization1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('GainRelatedToDisposalOrSale1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RestructuringAndOtherSpecialCharges1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedEmployeeCompensation1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationOperatingActivities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCashIncomeExpense1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInInventories1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities1').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingActivitiesNote1').value = numUSD.format(Math.round(a));
    document.getElementById('OperatingActivities1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('NetIncomeCashFlow2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DepreciationDepletionAndAmortization2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('GainRelatedToDisposalOrSale2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RestructuringAndOtherSpecialCharges2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedEmployeeCompensation2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationOperatingActivities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCashIncomeExpense2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInInventories2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities2').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingActivitiesNote2').value = numUSD.format(Math.round(a));
    document.getElementById('OperatingActivities2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('NetIncomeCashFlow3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DepreciationDepletionAndAmortization3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RestructuringAndOtherSpecialCharges3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('GainRelatedToDisposalOrSale3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedEmployeeCompensation3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationOperatingActivities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCashIncomeExpense3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInInventories3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities3').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingActivitiesNote3').value = numUSD.format(Math.round(a));
    document.getElementById('OperatingActivities3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('NetIncomeCashFlow4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DepreciationDepletionAndAmortization4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RestructuringAndOtherSpecialCharges4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('GainRelatedToDisposalOrSale4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedEmployeeCompensation4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationOperatingActivities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCashIncomeExpense4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInInventories4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities4').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingActivitiesNote4').value = numUSD.format(Math.round(a));
    document.getElementById('OperatingActivities4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('NetIncomeCashFlow5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DepreciationDepletionAndAmortization5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('GainRelatedToDisposalOrSale5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RestructuringAndOtherSpecialCharges5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedEmployeeCompensation5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationOperatingActivities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCashIncomeExpense5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInInventories5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities5').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingActivitiesNote5').value = numUSD.format(Math.round(a));
    document.getElementById('OperatingActivities5').value = numUSD.format(Math.round(a));
    // Sixth Last Year
    a = parseInt(document.getElementById('NetIncomeCashFlow6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DepreciationDepletionAndAmortization6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('GainRelatedToDisposalOrSale6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RestructuringAndOtherSpecialCharges6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedEmployeeCompensation6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShareBasedCompensationOperatingActivities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInIncomeTaxExpenseBenefit6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCashIncomeExpense6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsReceivable6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInInventories6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherReceivables6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInAccountsPayableAndAccruedLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInContractWithCustomerLiability6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInRetirementBenefits6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseFinanceLeaseCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseOperatingLeaseCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInFairValueOfDerivativesOperating6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseInOtherOperatingActivities6').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingActivitiesNote6').value = numUSD.format(Math.round(a));
    document.getElementById('OperatingActivities6').value = numUSD.format(Math.round(a));
};

function PaymentsToAcquireInvestmentsRow(PaymentsToAcquireInvestmentsRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireInvestments1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireInvestments2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireInvestments3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireInvestments4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireInvestments5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireInvestments6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PaymentsToAcquireInvestmentsRow').style.display = a
    }
};

function ProceedsOfInvestmentsRow(ProceedsOfInvestmentsRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsOfInvestments1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsOfInvestments2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsOfInvestments3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsOfInvestments4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsOfInvestments5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsOfInvestments6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ProceedsOfInvestmentsRow').style.display = a
    }
};

function PaymentsToAcquirePropertyPlantAndEquipmentRow(PaymentsToAcquirePropertyPlantAndEquipmentRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PaymentsToAcquirePropertyPlantAndEquipmentRow').style.display = a
    }
};

function ProceedsFromDisposalsOfPropertyAndEquipmentRow(ProceedsFromDisposalsOfPropertyAndEquipmentRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipmentRow').style.display = a
    }
};

function PaymentsToAcquireBusinessesAndIntangiblesRow(PaymentsToAcquireBusinessesAndIntangiblesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PaymentsToAcquireBusinessesAndIntangiblesRow').style.display = a
    }
};


function ProceedsFromDisposalsOfBusinessesAndIntangiblesRow(ProceedsFromDisposalsOfBusinessesAndIntangiblesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangiblesRow').style.display = a
    }
};

function ProceedsRelatedToInsuranceSettlementRow(ProceedsRelatedToInsuranceSettlementRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsRelatedToInsuranceSettlement1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsRelatedToInsuranceSettlement2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsRelatedToInsuranceSettlement3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsRelatedToInsuranceSettlement4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsRelatedToInsuranceSettlement5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsRelatedToInsuranceSettlement6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ProceedsRelatedToInsuranceSettlementRow').style.display = a
    }
};

function ReveiptOfGovernmentGrantsRow(ReveiptOfGovernmentGrantsRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('ReveiptOfGovernmentGrants1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ReveiptOfGovernmentGrants2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ReveiptOfGovernmentGrants3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ReveiptOfGovernmentGrants4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ReveiptOfGovernmentGrants5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ReveiptOfGovernmentGrants6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ReveiptOfGovernmentGrantsRow').style.display = a
    }
};

function EquityInvesteeAdvancesRepaymentsRow(EquityInvesteeAdvancesRepaymentsRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('EquityInvesteeAdvancesRepayments1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('EquityInvesteeAdvancesRepayments2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('EquityInvesteeAdvancesRepayments3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('EquityInvesteeAdvancesRepayments4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('EquityInvesteeAdvancesRepayments5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('EquityInvesteeAdvancesRepayments6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('EquityInvesteeAdvancesRepaymentsRow').style.display = a
    }
};


function PaymentOfLicenseFeeRow(PaymentOfLicenseFeeRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentOfLicenseFee1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentOfLicenseFee2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentOfLicenseFee3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentOfLicenseFee4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentOfLicenseFee5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentOfLicenseFee6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PaymentOfLicenseFeeRow').style.display = a
    }
};

function OtherInvestingActivitiesRow(OtherInvestingActivitiesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('OtherInvestingActivities1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherInvestingActivities2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherInvestingActivities3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherInvestingActivities4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherInvestingActivities5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherInvestingActivities6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('OtherInvestingActivitiesRow').style.display = a
    }
};

function InvestingActivitiesInDiscontinuedOperationsRow(InvestingActivitiesInDiscontinuedOperationsRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('InvestingActivitiesInDiscontinuedOperationsRow').style.display = a
    }
};

function InvestingActivities(InvestingActivities) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Last Year
    a = parseInt(document.getElementById('PaymentsToAcquireInvestments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsOfInvestments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ReveiptOfGovernmentGrants1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityInvesteeAdvancesRepayments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentOfLicenseFee1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherInvestingActivities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations1').value.replaceAll(/,/g, ''));
    document.getElementById('InvestingActivitiesNote1').value = numUSD.format(Math.round(a));
    document.getElementById('InvestingActivities1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('PaymentsToAcquireInvestments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsOfInvestments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsRelatedToInsuranceSettlement2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ReveiptOfGovernmentGrants2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityInvesteeAdvancesRepayments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentOfLicenseFee2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherInvestingActivities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations2').value.replaceAll(/,/g, ''));
    document.getElementById('InvestingActivitiesNote2').value = numUSD.format(Math.round(a));
    document.getElementById('InvestingActivities2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('PaymentsToAcquireInvestments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsOfInvestments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsRelatedToInsuranceSettlement3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ReveiptOfGovernmentGrants3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityInvesteeAdvancesRepayments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentOfLicenseFee3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherInvestingActivities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations3').value.replaceAll(/,/g, ''));
    document.getElementById('InvestingActivitiesNote3').value = numUSD.format(Math.round(a));
    document.getElementById('InvestingActivities3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('PaymentsToAcquireInvestments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsOfInvestments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsRelatedToInsuranceSettlement4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ReveiptOfGovernmentGrants4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityInvesteeAdvancesRepayments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentOfLicenseFee4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherInvestingActivities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations4').value.replaceAll(/,/g, ''));
    document.getElementById('InvestingActivitiesNote4').value = numUSD.format(Math.round(a));
    document.getElementById('InvestingActivities4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('PaymentsToAcquireInvestments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsOfInvestments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsRelatedToInsuranceSettlement5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ReveiptOfGovernmentGrants5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityInvesteeAdvancesRepayments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentOfLicenseFee5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherInvestingActivities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations5').value.replaceAll(/,/g, ''));
    document.getElementById('InvestingActivitiesNote5').value = numUSD.format(Math.round(a));
    document.getElementById('InvestingActivities5').value = numUSD.format(Math.round(a));
    // Sixth Last Year
    a = parseInt(document.getElementById('PaymentsToAcquireInvestments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsOfInvestments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquirePropertyPlantAndEquipment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfPropertyAndEquipment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsToAcquireBusinessesAndIntangibles6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromDisposalsOfBusinessesAndIntangibles6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsRelatedToInsuranceSettlement6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ReveiptOfGovernmentGrants6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EquityInvesteeAdvancesRepayments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentOfLicenseFee6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherInvestingActivities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivitiesInDiscontinuedOperations6').value.replaceAll(/,/g, ''));
    document.getElementById('InvestingActivitiesNote6').value = numUSD.format(Math.round(a));
    document.getElementById('InvestingActivities6').value = numUSD.format(Math.round(a));
};

function FinanceLeasePrincipalPaymentsRow(FinanceLeasePrincipalPaymentsRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('FinanceLeasePrincipalPayments1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('FinanceLeasePrincipalPayments2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('FinanceLeasePrincipalPayments3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('FinanceLeasePrincipalPayments4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('FinanceLeasePrincipalPayments5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('FinanceLeasePrincipalPayments6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('FinanceLeasePrincipalPaymentsRow').style.display = a
    }
};

function ProceedsFromIssuanceOfCommonSharesRow(ProceedsFromIssuanceOfCommonSharesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ProceedsFromIssuanceOfCommonSharesRow').style.display = a
    }
};

function ProceedsFromSharePurchasePlanAndOptionsExerciceRow(ProceedsFromSharePurchasePlanAndOptionsExerciceRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExerciceRow').style.display = a
    }
};

function PaymentsRelatedToTaxWithholdingForShareBasedCompensationRow(PaymentsRelatedToTaxWithholdingForShareBasedCompensationRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensationRow').style.display = a
    }
};

function PaymentsForRepurchaseOfCommonSharesRow(PaymentsForRepurchaseOfCommonSharesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PaymentsForRepurchaseOfCommonSharesRow').style.display = a
    }
};

function PaymentsOfDividendsRow(PaymentsOfDividendsRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsOfDividends1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsOfDividends2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsOfDividends3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsOfDividends4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsOfDividends5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('PaymentsOfDividends6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PaymentsOfDividendsRow').style.display = a
    }
};

function IncreaseDecreaseDeferredContingentConsiderationRow(IncreaseDecreaseDeferredContingentConsiderationRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IncreaseDecreaseDeferredContingentConsiderationRow').style.display = a
    }
};

function ProceedsFromIssuanceOfLongTermDebtRow(ProceedsFromIssuanceOfLongTermDebtRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ProceedsFromIssuanceOfLongTermDebtRow').style.display = a
    }
};

function RepaymentsOfLongTermDebtRow(RepaymentsOfLongTermDebtRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfLongTermDebt1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfLongTermDebt2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfLongTermDebt3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfLongTermDebt4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfLongTermDebt5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfLongTermDebt6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('RepaymentsOfLongTermDebtRow').style.display = a
    }
};

function FinancingCostsRow(FinancingCostsRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('FinancingCosts1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('FinancingCosts2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('FinancingCosts3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('FinancingCosts4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('FinancingCosts5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('FinancingCosts6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('FinancingCostsRow').style.display = a
    }
};

function NetChangeInShortTermBorrowingsRow(NetChangeInShortTermBorrowingsRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInShortTermBorrowings1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInShortTermBorrowings2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInShortTermBorrowings3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInShortTermBorrowings4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInShortTermBorrowings5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInShortTermBorrowings6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('NetChangeInShortTermBorrowingsRow').style.display = a
    }
};

function NetChangeInForwardAndHedgesClassifiedAsFinancingActivitiesRow(NetChangeInForwardAndHedgesClassifiedAsFinancingActivitiesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivitiesRow').style.display = a
    }
};

function ProceedsFromRepaymentsOfCommercialPaperRow(ProceedsFromRepaymentsOfCommercialPaperRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ProceedsFromRepaymentsOfCommercialPaperRow').style.display = a
    }
};

function RepaymentsOfConvertibleRow(RepaymentsOfConvertibleRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfConvertible1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfConvertible2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfConvertible3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfConvertible4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfConvertible5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('RepaymentsOfConvertible6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('RepaymentsOfConvertibleRow').style.display = a
    }
};

function IssuanceOfConvertibleRow(IssuanceOfConvertibleRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('IssuanceOfConvertible1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IssuanceOfConvertible2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IssuanceOfConvertible3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IssuanceOfConvertible4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IssuanceOfConvertible5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('IssuanceOfConvertible6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IssuanceOfConvertibleRow').style.display = a
    }
};

function OtherFinancingActivitiesRow(OtherFinancingActivitiesRow) {
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('OtherFinancingActivities1').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherFinancingActivities2').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherFinancingActivities3').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherFinancingActivities4').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherFinancingActivities5').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    // last year
    a = Math.round(parseInt(document.getElementById('OtherFinancingActivities6').value.replaceAll(/,/g, '')))
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('OtherFinancingActivitiesRow').style.display = a
    }
};

function FinancingActivities(FinancingActivities) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Last Year
    a = parseInt(document.getElementById('FinanceLeasePrincipalPayments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsOfDividends1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfLongTermDebt1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingCosts1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfConvertible1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IssuanceOfConvertible1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInShortTermBorrowings1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherFinancingActivities1').value.replaceAll(/,/g, ''));
    document.getElementById('FinancingActivitiesNote1').value = numUSD.format(Math.round(a));
    document.getElementById('FinancingActivities1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('FinanceLeasePrincipalPayments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsOfDividends2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfLongTermDebt2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingCosts2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfConvertible2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IssuanceOfConvertible2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInShortTermBorrowings2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherFinancingActivities2').value.replaceAll(/,/g, ''));
    document.getElementById('FinancingActivitiesNote2').value = numUSD.format(Math.round(a));
    document.getElementById('FinancingActivities2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('FinanceLeasePrincipalPayments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsOfDividends3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfLongTermDebt3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingCosts3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfConvertible3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IssuanceOfConvertible3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInShortTermBorrowings3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherFinancingActivities3').value.replaceAll(/,/g, ''));
    document.getElementById('FinancingActivitiesNote3').value = numUSD.format(Math.round(a));
    document.getElementById('FinancingActivities3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('FinanceLeasePrincipalPayments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsOfDividends4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfLongTermDebt4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingCosts4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfConvertible4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IssuanceOfConvertible4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInShortTermBorrowings4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherFinancingActivities4').value.replaceAll(/,/g, ''));
    document.getElementById('FinancingActivitiesNote4').value = numUSD.format(Math.round(a));
    document.getElementById('FinancingActivities4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('FinanceLeasePrincipalPayments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsOfDividends5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfLongTermDebt5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingCosts5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfConvertible5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IssuanceOfConvertible5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInShortTermBorrowings5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherFinancingActivities5').value.replaceAll(/,/g, ''));
    document.getElementById('FinancingActivitiesNote5').value = numUSD.format(Math.round(a));
    document.getElementById('FinancingActivities5').value = numUSD.format(Math.round(a));
    // Sixth Last Year
    a = parseInt(document.getElementById('FinanceLeasePrincipalPayments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfCommonShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromSharePurchasePlanAndOptionsExercice6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsRelatedToTaxWithholdingForShareBasedCompensation6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsForRepurchaseOfCommonShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PaymentsOfDividends6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IncreaseDecreaseDeferredContingentConsideration6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromIssuanceOfLongTermDebt6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfLongTermDebt6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingCosts6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ProceedsFromRepaymentsOfCommercialPaper6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RepaymentsOfConvertible6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IssuanceOfConvertible6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInShortTermBorrowings6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInForwardAndHedgesClassifiedAsFinancingActivities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NetChangeInNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherFinancingActivities6').value.replaceAll(/,/g, ''));
    document.getElementById('FinancingActivitiesNote6').value = numUSD.format(Math.round(a));
    document.getElementById('FinancingActivities6').value = numUSD.format(Math.round(a));
};

function CashEndingBalance(CashEndingBalance) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Last Year
    a = parseInt(document.getElementById('CashBeginningBalance1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingActivities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingActivities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfExchangeRateOnCash1').value.replaceAll(/,/g, ''));
    document.getElementById('CashEndingBalance1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('CashBeginningBalance2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingActivities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingActivities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfExchangeRateOnCash2').value.replaceAll(/,/g, ''));
    document.getElementById('CashEndingBalance2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('CashBeginningBalance3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingActivities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingActivities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfExchangeRateOnCash3').value.replaceAll(/,/g, ''));
    document.getElementById('CashEndingBalance3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('CashBeginningBalance4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingActivities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingActivities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfExchangeRateOnCash4').value.replaceAll(/,/g, ''));
    document.getElementById('CashEndingBalance4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('CashBeginningBalance5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingActivities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingActivities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfExchangeRateOnCash5').value.replaceAll(/,/g, ''));
    document.getElementById('CashEndingBalance5').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('CashBeginningBalance6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingActivities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('InvestingActivities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinancingActivities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EffectOfExchangeRateOnCash6').value.replaceAll(/,/g, ''));
    document.getElementById('CashEndingBalance6').value = numUSD.format(Math.round(a));
};