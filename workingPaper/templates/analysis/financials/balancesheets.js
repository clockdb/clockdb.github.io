
// analysis/financials/balancesheets.js

function DateBalanceSheets(DateBalanceSheets) {
    document.getElementById('DateBalanceSheets1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateBalanceSheets2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateBalanceSheets3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateBalanceSheets4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateBalanceSheets5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateBalanceSheets6').innerHTML = document.getElementById('ContextDate6').value;
};

function BalanceSheetsAmend(BalanceSheetsAmend) {
    document.getElementById('BalanceSheetsAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('BalanceSheetsAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('BalanceSheetsAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('BalanceSheetsAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('BalanceSheetsAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('BalanceSheetsAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefBalanceSheets() {
    document.getElementById('BalanceSheetsFilings1').href = document.getElementById('Filings1').href
    document.getElementById('BalanceSheetsFilings2').href = document.getElementById('Filings2').href
    document.getElementById('BalanceSheetsFilings3').href = document.getElementById('Filings3').href
    document.getElementById('BalanceSheetsFilings4').href = document.getElementById('Filings4').href
    document.getElementById('BalanceSheetsFilings5').href = document.getElementById('Filings5').href
    document.getElementById('BalanceSheetsFilings6').href = document.getElementById('Filings6').href
};

function BalanceCash(BalanceCash) {
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceCash1').value.replaceAll(/,/g, '')))
    document.getElementById('Cash1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceCash2').value.replaceAll(/,/g, '')))
    document.getElementById('Cash2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceCash3').value.replaceAll(/,/g, '')))
    document.getElementById('Cash3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceCash4').value.replaceAll(/,/g, '')))
    document.getElementById('Cash4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceCash5').value.replaceAll(/,/g, '')))
    document.getElementById('Cash5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceCash6').value.replaceAll(/,/g, '')))
    document.getElementById('Cash6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // display
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('CashRow').style.display = a;
        document.getElementById('TrialBalanceCashRow').style.display = a;
    }
};

function BalanceShortTermInvestments(BalanceShortTermInvestments) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceShortTermInvestments1').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermInvestments1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceShortTermInvestments2').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermInvestments2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceShortTermInvestments3').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermInvestments3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceShortTermInvestments4').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermInvestments4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceShortTermInvestments5').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermInvestments5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceShortTermInvestments6').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermInvestments6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ShortTermInvestmentsRow').style.display = a;
        document.getElementById('TrialBalanceShortTermInvestmentsRow').style.display = a;
    }
};

function BalanceAccountsReceivable(BalanceAccountsReceivable) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceAccountsReceivable1').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsReceivable1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceAccountsReceivable2').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsReceivable2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceAccountsReceivable3').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsReceivable3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceAccountsReceivable4').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsReceivable4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceAccountsReceivable5').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsReceivable5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceAccountsReceivable6').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsReceivable6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('AccountsReceivableRow').style.display = a;
        document.getElementById('TrialBalanceAccountsReceivableRow').style.display = a;
    }
};

function BalanceWorkInProgress(BalanceWorkInProgress) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceWorkInProgress1').value.replaceAll(/,/g, '')))
    document.getElementById('WorkInProgress1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceWorkInProgress2').value.replaceAll(/,/g, '')))
    document.getElementById('WorkInProgress2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceWorkInProgress3').value.replaceAll(/,/g, '')))
    document.getElementById('WorkInProgress3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceWorkInProgress4').value.replaceAll(/,/g, '')))
    document.getElementById('WorkInProgress4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceWorkInProgress5').value.replaceAll(/,/g, '')))
    document.getElementById('WorkInProgress5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceWorkInProgress6').value.replaceAll(/,/g, '')))
    document.getElementById('WorkInProgress6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('WorkInProgressRow').style.display = a;
        document.getElementById('TrialBalanceWorkInProgressRow').style.display = a;
    }
};

function BalanceInventories(BalanceInventories) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInventories1').value.replaceAll(/,/g, '')))
    document.getElementById('Inventories1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInventories2').value.replaceAll(/,/g, '')))
    document.getElementById('Inventories2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInventories3').value.replaceAll(/,/g, '')))
    document.getElementById('Inventories3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInventories4').value.replaceAll(/,/g, '')))
    document.getElementById('Inventories4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInventories5').value.replaceAll(/,/g, '')))
    document.getElementById('Inventories5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInventories6').value.replaceAll(/,/g, '')))
    document.getElementById('Inventories6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('InventoriesRow').style.display = a;
        document.getElementById('TrialBalanceInventoriesRow').style.display = a;
    }
};

function BalancePrepaidExpenses(BalancePrepaidExpenses) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidExpenses1').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidExpenses1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidExpenses2').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidExpenses2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidExpenses3').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidExpenses3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidExpenses4').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidExpenses4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidExpenses5').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidExpenses5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidExpenses6').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidExpenses6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PrepaidExpensesRow').style.display = a;
        document.getElementById('TrialBalancePrepaidExpensesRow').style.display = a;
    }
};

function BalanceNonTradeReceivables(BalanceNonTradeReceivables) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceNonTradeReceivables1').value.replaceAll(/,/g, '')))
    document.getElementById('NonTradeReceivables1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceNonTradeReceivables2').value.replaceAll(/,/g, '')))
    document.getElementById('NonTradeReceivables2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceNonTradeReceivables3').value.replaceAll(/,/g, '')))
    document.getElementById('NonTradeReceivables3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceNonTradeReceivables4').value.replaceAll(/,/g, '')))
    document.getElementById('NonTradeReceivables4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceNonTradeReceivables5').value.replaceAll(/,/g, '')))
    document.getElementById('NonTradeReceivables5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceNonTradeReceivables6').value.replaceAll(/,/g, '')))
    document.getElementById('NonTradeReceivables6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('NonTradeReceivablesRow').style.display = a;
        document.getElementById('TrialBalanceNonTradeReceivablesRow').style.display = a;
    }
};

function BalancePrepaidTaxAssetsCurrent(BalancePrepaidTaxAssetsCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidTaxAssetsCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidTaxAssetsCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidTaxAssetsCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidTaxAssetsCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidTaxAssetsCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('PrepaidTaxAssetsCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PrepaidTaxAssetsCurrentRow').style.display = a;
        document.getElementById('TrialBalancePrepaidTaxAssetsCurrentRow').style.display = a;
    }
};

function BalanceDeferredTaxAssetsCurrent(BalanceDeferredTaxAssetsCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DeferredTaxAssetsCurrentRow').style.display = a;
        document.getElementById('TrialBalanceDeferredTaxAssetsCurrentRow').style.display = a;
    }
};

function BalanceRightOfUseAssetsCurrent(BalanceRightOfUseAssetsCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('RightOfUseAssetsCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('RightOfUseAssetsCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('RightOfUseAssetsCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('RightOfUseAssetsCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('RightOfUseAssetsCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('RightOfUseAssetsCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('RightOfUseAssetsCurrentRow').style.display = a;
        document.getElementById('TrialBalanceRightOfUseAssetsCurrentRow').style.display = a;
    }
};

function BalanceOtherCurrentAssets(BalanceOtherCurrentAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentAssets1').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentAssets1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentAssets2').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentAssets2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentAssets3').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentAssets3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentAssets4').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentAssets4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentAssets5').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentAssets5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentAssets6').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentAssets6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('OtherCurrentAssetsRow').style.display = a;
        document.getElementById('TrialBalanceOtherCurrentAssetsRow').style.display = a;
    }
};

function BalanceDiscontinuedOperationsCurrent(BalanceDiscontinuedOperationsCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DiscontinuedOperationsCurrentRow').style.display = a;
        document.getElementById('TrialBalanceDiscontinuedOperationsCurrentRow').style.display = a;
    }
};

function BalanceCurrentAssets(BalanceCurrentAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Last Year
    a = parseInt(document.getElementById('Cash1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent1').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentAssetsNote1').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentAssets1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('Cash2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent2').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentAssetsNote2').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentAssets2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('Cash3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent3').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentAssetsNote3').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentAssets3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('Cash4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent4').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentAssetsNote4').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentAssets4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('Cash5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent5').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentAssetsNote5').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentAssets5').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('Cash6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermInvestments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccountsReceivable6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('WorkInProgress6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Inventories6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidExpenses6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonTradeReceivables6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PrepaidTaxAssetsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RightOfUseAssetsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsCurrent6').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentAssetsNote6').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentAssets6').value = numUSD.format(Math.round(a));
};

function BalanceLongTermReceivables(BalanceLongTermReceivables) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceLongTermReceivables1').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermReceivables1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceLongTermReceivables2').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermReceivables2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceLongTermReceivables3').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermReceivables3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceLongTermReceivables4').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermReceivables4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceLongTermReceivables5').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermReceivables5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceLongTermReceivables6').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermReceivables6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('LongTermReceivablesRow').style.display = a;
        document.getElementById('TrialBalanceLongTermReceivablesRow').style.display = a;
    }
};

function BalanceDeferredCharges(BalanceDeferredCharges) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredCharges1').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredCharges1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredCharges2').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredCharges2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredCharges3').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredCharges3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredCharges4').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredCharges4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredCharges5').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredCharges5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredCharges6').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredCharges6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DeferredChargesRow').style.display = a;
        document.getElementById('TrialBalanceDeferredChargesRow').style.display = a;
    }
};

function BalanceInvestments(BalanceInvestments) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInvestments1').value.replaceAll(/,/g, '')))
    document.getElementById('Investments1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInvestments2').value.replaceAll(/,/g, '')))
    document.getElementById('Investments2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInvestments3').value.replaceAll(/,/g, '')))
    document.getElementById('Investments3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInvestments4').value.replaceAll(/,/g, '')))
    document.getElementById('Investments4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInvestments5').value.replaceAll(/,/g, '')))
    document.getElementById('Investments5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceInvestments6').value.replaceAll(/,/g, '')))
    document.getElementById('Investments6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('InvestmentsRow').style.display = a;
        document.getElementById('TrialBalanceInvestmentsRow').style.display = a;
    }
};

function BalancePropertyPlantAndEquipment(BalancePropertyPlantAndEquipment) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment1').value.replaceAll(/,/g, '')))
    document.getElementById('PropertyPlantAndEquipment1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment2').value.replaceAll(/,/g, '')))
    document.getElementById('PropertyPlantAndEquipment2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment3').value.replaceAll(/,/g, '')))
    document.getElementById('PropertyPlantAndEquipment3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment4').value.replaceAll(/,/g, '')))
    document.getElementById('PropertyPlantAndEquipment4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment5').value.replaceAll(/,/g, '')))
    document.getElementById('PropertyPlantAndEquipment5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment6').value.replaceAll(/,/g, '')))
    document.getElementById('PropertyPlantAndEquipment6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PropertyPlantAndEquipmentRow').style.display = a;
        document.getElementById('TrialBalancePropertyPlantAndEquipmentRow').style.display = a;
    }
};

function BalanceOperatingLeaseRightOfUseAssets(BalanceOperatingLeaseRightOfUseAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets1').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeaseRightOfUseAssets1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets2').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeaseRightOfUseAssets2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets3').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeaseRightOfUseAssets3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets4').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeaseRightOfUseAssets4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets5').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeaseRightOfUseAssets5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets6').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeaseRightOfUseAssets6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('OperatingLeaseRightOfUseAssetsRow').style.display = a;
        document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssetsRow').style.display = a;
    }
};

function BalanceFinanceLeaseRightOfUseAssets(BalanceFinanceLeaseRightOfUseAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets1').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeaseRightOfUseAssets1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets2').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeaseRightOfUseAssets2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets3').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeaseRightOfUseAssets3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets4').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeaseRightOfUseAssets4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets5').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeaseRightOfUseAssets5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets6').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeaseRightOfUseAssets6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('FinanceLeaseRightOfUseAssetsRow').style.display = a;
        document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssetsRow').style.display = a;
    }
};

function BalanceIntangibleAssets(BalanceIntangibleAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceIntangibleAssets1').value.replaceAll(/,/g, '')))
    document.getElementById('IntangibleAssets1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceIntangibleAssets2').value.replaceAll(/,/g, '')))
    document.getElementById('IntangibleAssets2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceIntangibleAssets3').value.replaceAll(/,/g, '')))
    document.getElementById('IntangibleAssets3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceIntangibleAssets4').value.replaceAll(/,/g, '')))
    document.getElementById('IntangibleAssets4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceIntangibleAssets5').value.replaceAll(/,/g, '')))
    document.getElementById('IntangibleAssets5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceIntangibleAssets6').value.replaceAll(/,/g, '')))
    document.getElementById('IntangibleAssets6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('IntangibleAssetsRow').style.display = a;
        document.getElementById('TrialBalanceIntangibleAssetsRow').style.display = a;
    }
};

function BalanceGoodwill(BalanceGoodwill) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceGoodwill1').value.replaceAll(/,/g, '')))
    document.getElementById('Goodwill1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceGoodwill2').value.replaceAll(/,/g, '')))
    document.getElementById('Goodwill2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceGoodwill3').value.replaceAll(/,/g, '')))
    document.getElementById('Goodwill3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceGoodwill4').value.replaceAll(/,/g, '')))
    document.getElementById('Goodwill4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceGoodwill5').value.replaceAll(/,/g, '')))
    document.getElementById('Goodwill5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceGoodwill6').value.replaceAll(/,/g, '')))
    document.getElementById('Goodwill6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('GoodwillRow').style.display = a;
        document.getElementById('TrialBalanceGoodwillRow').style.display = a;
    }
};

function BalanceRefundableTaxAssetsNonCurrent(BalanceRefundableTaxAssetsNonCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('RefundableTaxAssetsNonCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('RefundableTaxAssetsNonCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('RefundableTaxAssetsNonCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('RefundableTaxAssetsNonCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('RefundableTaxAssetsNonCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('RefundableTaxAssetsNonCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('RefundableTaxAssetsNonCurrentRow').style.display = a;
        document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrentRow').style.display = a;
    }
};

function BalanceDeferredTaxAssetsNonCurrent(BalanceDeferredTaxAssetsNonCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsNonCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsNonCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsNonCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsNonCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsNonCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxAssetsNonCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DeferredTaxAssetsNonCurrentRow').style.display = a;
        document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrentRow').style.display = a;
    }
};

function BalanceDefinedBenefitPensionAndOtherSimilarPlans(BalanceDefinedBenefitPensionAndOtherSimilarPlans) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans1').value.replaceAll(/,/g, '')))
    document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans2').value.replaceAll(/,/g, '')))
    document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans3').value.replaceAll(/,/g, '')))
    document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans4').value.replaceAll(/,/g, '')))
    document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans5').value.replaceAll(/,/g, '')))
    document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans6').value.replaceAll(/,/g, '')))
    document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DefinedBenefitPensionAndOtherSimilarPlansRow').style.display = a;
        document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlansRow').style.display = a;
    }
};

function BalanceOtherNonCurrentAssets(BalanceOtherNonCurrentAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets1').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentAssets1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets2').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentAssets2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets3').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentAssets3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets4').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentAssets4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets5').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentAssets5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets6').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentAssets6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('OtherNonCurrentAssetsRow').style.display = a;
        document.getElementById('TrialBalanceOtherNonCurrentAssetsRow').style.display = a;
    }
};

function BalanceDiscontinuedOperationsNonCurrent(BalanceDiscontinuedOperationsNonCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperations1').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperations1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperations2').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperations2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperations3').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperations3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperations4').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperations4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperations5').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperations5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperations6').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperations6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DiscontinuedOperationsRow').style.display = a;
        document.getElementById('TrialBalanceDiscontinuedOperationsRow').style.display = a;
    }
};

function BalanceNonCurrentAssets(BalanceNonCurrentAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Last Year
        // Non-Current Assets
    a = parseInt(document.getElementById('LongTermReceivables1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations1').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentAssetsNote1').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentAssets1').value = numUSD.format(Math.round(a));
        // Total Assets
    a = parseInt(document.getElementById('CurrentAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentAssets1').value.replaceAll(/,/g, ''));
    document.getElementById('TotalAssets1').value = numUSD.format(Math.round(a));
    // Second Last Year
        // Non-Current Assets
    a = parseInt(document.getElementById('LongTermReceivables2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations2').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentAssetsNote2').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentAssets2').value = numUSD.format(Math.round(a));
        // Total Assets
    a = parseInt(document.getElementById('CurrentAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentAssets2').value.replaceAll(/,/g, ''));
    document.getElementById('TotalAssets2').value = numUSD.format(Math.round(a));
    // Third Last Year
        // Non-Current Assets
    a = parseInt(document.getElementById('LongTermReceivables3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations3').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentAssetsNote3').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentAssets3').value = numUSD.format(Math.round(a));
        // Total Assets
    a = parseInt(document.getElementById('CurrentAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentAssets3').value.replaceAll(/,/g, ''));
    document.getElementById('TotalAssets3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
        // Non-Current Assets
    a = parseInt(document.getElementById('LongTermReceivables4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations4').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentAssetsNote4').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentAssets4').value = numUSD.format(Math.round(a));
        // Total Assets
    a = parseInt(document.getElementById('CurrentAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentAssets4').value.replaceAll(/,/g, ''));
    document.getElementById('TotalAssets4').value = numUSD.format(Math.round(a));
    // Fifth Year
        // Non-Current Assets
    a = parseInt(document.getElementById('LongTermReceivables5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations5').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentAssetsNote5').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentAssets5').value = numUSD.format(Math.round(a));
        // Total Assets
    a = parseInt(document.getElementById('CurrentAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentAssets5').value.replaceAll(/,/g, ''));
    document.getElementById('TotalAssets5').value = numUSD.format(Math.round(a));
    // Sixth Year
        // Non-Current Assets
    a = parseInt(document.getElementById('LongTermReceivables6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredCharges6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Investments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PropertyPlantAndEquipment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeaseRightOfUseAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeaseRightOfUseAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('IntangibleAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('Goodwill6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RefundableTaxAssetsNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxAssetsNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DefinedBenefitPensionAndOtherSimilarPlans6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperations6').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentAssetsNote6').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentAssets6').value = numUSD.format(Math.round(a));
        // Total Assets
    a = parseInt(document.getElementById('CurrentAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentAssets6').value.replaceAll(/,/g, ''));
    document.getElementById('TotalAssets6').value = numUSD.format(Math.round(a));
};

function BalanceAccountsPayableAndAccruedLiabilities(BalanceAccountsPayableAndAccruedLiabilities) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities1').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsPayableAndAccruedLiabilities1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities2').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsPayableAndAccruedLiabilities2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities3').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsPayableAndAccruedLiabilities3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities4').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsPayableAndAccruedLiabilities4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities5').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsPayableAndAccruedLiabilities5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities6').value.replaceAll(/,/g, '')))
    document.getElementById('AccountsPayableAndAccruedLiabilities6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('AccountsPayableAndAccruedLiabilitiesRow').style.display = a;
        document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilitiesRow').style.display = a;
    }
};

function BalanceEmployeeCompensationCurrent(BalanceEmployeeCompensationCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('EmployeeCompensationCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('EmployeeCompensationCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('EmployeeCompensationCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('EmployeeCompensationCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('EmployeeCompensationCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('EmployeeCompensationCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('EmployeeCompensationCurrentRow').style.display = a;
        document.getElementById('TrialBalanceEmployeeCompensationCurrentRow').style.display = a;
    }
};

function BalanceOperatingLeasesCurrent(BalanceOperatingLeasesCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('OperatingLeasesCurrentRow').style.display = a;
        document.getElementById('TrialBalanceOperatingLeasesCurrentRow').style.display = a;
    }
};

function BalanceFinanceLeasesCurrent(BalanceFinanceLeasesCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('FinanceLeasesCurrentRow').style.display = a;
        document.getElementById('TrialBalanceFinanceLeasesCurrentRow').style.display = a;
    }
};

function BalanceDeferredRevenueAndDepositsCurrent(BalanceDeferredRevenueAndDepositsCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DeferredRevenueAndDepositsCurrentRow').style.display = a;
        document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrentRow').style.display = a;
    }
};

function BalanceAccruedTaxLiabilities(BalanceBalanceAccruedTaxLiabilities) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities1').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilities1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities2').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilities2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities3').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilities3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities4').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilities4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities5').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilities5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities6').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilities6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('AccruedTaxLiabilitiesRow').style.display = a;
        document.getElementById('TrialBalanceAccruedTaxLiabilitiesRow').style.display = a;
    }
};

function BalanceDeferredTaxLiabilitiesCurrent(BalanceBalanceDeferredTaxLiabilitiesCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DeferredTaxLiabilitiesCurrentRow').style.display = a;
        document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrentRow').style.display = a;
    }
};

function BalanceCommercialPapers(BalanceCommercialPapers) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommercialPapers1').value.replaceAll(/,/g, '')))
    document.getElementById('CommercialPapers1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommercialPapers2').value.replaceAll(/,/g, '')))
    document.getElementById('CommercialPapers2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommercialPapers3').value.replaceAll(/,/g, '')))
    document.getElementById('CommercialPapers3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommercialPapers4').value.replaceAll(/,/g, '')))
    document.getElementById('CommercialPapers4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommercialPapers5').value.replaceAll(/,/g, '')))
    document.getElementById('CommercialPapers5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceCommercialPapers6').value.replaceAll(/,/g, '')))
    document.getElementById('CommercialPapers6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('CommercialPapersRow').style.display = a;
        document.getElementById('TrialBalanceCommercialPapersRow').style.display = a;
    }
};

function BalanceShortTermBorrowings(BalanceShortTermBorrowings) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermBorrowings1').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermBorrowings1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermBorrowings2').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermBorrowings2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermBorrowings3').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermBorrowings3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermBorrowings4').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermBorrowings4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermBorrowings5').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermBorrowings5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermBorrowings6').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermBorrowings6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ShortTermBorrowingsRow').style.display = a;
        document.getElementById('TrialBalanceShortTermBorrowingsRow').style.display = a;
    }
};

function BalanceOtherCurrentLiabilities(BalanceOtherCurrentLiabilities) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities1').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentLiabilities1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities2').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentLiabilities2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities3').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentLiabilities3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities4').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentLiabilities4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities5').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentLiabilities5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities6').value.replaceAll(/,/g, '')))
    document.getElementById('OtherCurrentLiabilities6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('OtherCurrentLiabilitiesRow').style.display = a;
        document.getElementById('TrialBalanceOtherCurrentLiabilitiesRow').style.display = a;
    }
};

function BalanceDiscontinuedOperationsLiabilitiesCurrent(BalanceDiscontinuedOperationsLiabilitiesCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DiscontinuedOperationsLiabilitiesCurrentRow').style.display = a;
        document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrentRow').style.display = a;
    }
};

function BalanceDividendsPayable(BalanceDividendsPayable) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsPayable1').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsPayable1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsPayable2').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsPayable2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsPayable3').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsPayable3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsPayable4').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsPayable4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsPayable5').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsPayable5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDividendsPayable6').value.replaceAll(/,/g, '')))
    document.getElementById('DividendsPayable6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DividendsPayableRow').style.display = a;
        document.getElementById('TrialBalanceDividendsPayableRow').style.display = a;
    }
};

function BalanceShortTermPortionOfLongTermDebt(BalanceShortTermPortionOfLongTermDebt) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt1').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermPortionOfLongTermDebt1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt2').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermPortionOfLongTermDebt2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt3').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermPortionOfLongTermDebt3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt4').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermPortionOfLongTermDebt4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt5').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermPortionOfLongTermDebt5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt6').value.replaceAll(/,/g, '')))
    document.getElementById('ShortTermPortionOfLongTermDebt6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ShortTermPortionOfLongTermDebtRow').style.display = a;
        document.getElementById('TrialBalanceShortTermPortionOfLongTermDebtRow').style.display = a;
    }
};

function BalanceCurrentLiabilities(BalanceCurrentLiabilities) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt1').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentLiabilitiesNote1').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentLiabilities1').value = numUSD.format(Math.round(a));
    // Second Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt2').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentLiabilitiesNote2').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentLiabilities2').value = numUSD.format(Math.round(a));
    // Third Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt3').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentLiabilitiesNote3').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentLiabilities3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt4').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentLiabilitiesNote4').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentLiabilities4').value = numUSD.format(Math.round(a));
    // Fifth Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt5').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentLiabilitiesNote5').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentLiabilities5').value = numUSD.format(Math.round(a));
    // Sixth Last Year
    a = parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('EmployeeCompensationCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('CommercialPapers6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermBorrowings6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherCurrentLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DividendsPayable6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ShortTermPortionOfLongTermDebt6').value.replaceAll(/,/g, ''));
    document.getElementById('CurrentLiabilitiesNote6').value = numUSD.format(Math.round(a));
    document.getElementById('CurrentLiabilities6').value = numUSD.format(Math.round(a));
};

function BalanceLongTermDebt(BalanceLongTermDebt) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLongTermDebt1').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermDebt1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLongTermDebt2').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermDebt2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLongTermDebt3').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermDebt3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLongTermDebt4').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermDebt4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLongTermDebt5').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermDebt5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLongTermDebt6').value.replaceAll(/,/g, '')))
    document.getElementById('LongTermDebt6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('LongTermDebtRow').style.display = a;
        document.getElementById('TrialBalanceLongTermDebtRow').style.display = a;
    }
};

function BalancePreferredSharesLiability(BalancePreferredSharesLiability) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePreferredSharesLiability1').value.replaceAll(/,/g, '')))
    document.getElementById('PreferredSharesLiability1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePreferredSharesLiability2').value.replaceAll(/,/g, '')))
    document.getElementById('PreferredSharesLiability2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePreferredSharesLiability3').value.replaceAll(/,/g, '')))
    document.getElementById('PreferredSharesLiability3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePreferredSharesLiability4').value.replaceAll(/,/g, '')))
    document.getElementById('PreferredSharesLiability4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePreferredSharesLiability5').value.replaceAll(/,/g, '')))
    document.getElementById('PreferredSharesLiability5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalancePreferredSharesLiability6').value.replaceAll(/,/g, '')))
    document.getElementById('PreferredSharesLiability6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('PreferredSharesLiabilityRow').style.display = a;
        document.getElementById('TrialBalancePreferredSharesLiabilityRow').style.display = a;
    }
};

function BalanceRetirementBenefits(BalanceRetirementBenefits) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetirementBenefits1').value.replaceAll(/,/g, '')))
    document.getElementById('RetirementBenefits1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetirementBenefits2').value.replaceAll(/,/g, '')))
    document.getElementById('RetirementBenefits2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetirementBenefits3').value.replaceAll(/,/g, '')))
    document.getElementById('RetirementBenefits3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetirementBenefits4').value.replaceAll(/,/g, '')))
    document.getElementById('RetirementBenefits4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetirementBenefits5').value.replaceAll(/,/g, '')))
    document.getElementById('RetirementBenefits5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRetirementBenefits6').value.replaceAll(/,/g, '')))
    document.getElementById('RetirementBenefits6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('RetirementBenefitsRow').style.display = a;
        document.getElementById('TrialBalanceRetirementBenefitsRow').style.display = a;
    }
};

function BalanceOperatingLeasesNonCurrent(BalanceOperatingLeasesNonCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesNonCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesNonCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesNonCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesNonCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesNonCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('OperatingLeasesNonCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('OperatingLeasesNonCurrentRow').style.display = a;
        document.getElementById('TrialBalanceOperatingLeasesNonCurrentRow').style.display = a;
    }
};

function BalanceFinanceLeasesNonCurrent(BalanceFinanceLeasesNonCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesNonCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesNonCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesNonCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesNonCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesNonCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('FinanceLeasesNonCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('FinanceLeasesNonCurrentRow').style.display = a;
        document.getElementById('TrialBalanceFinanceLeasesNonCurrentRow').style.display = a;
    }
};

function BalanceLeaseIncentiveObligation(BalanceLeaseIncentiveObligation) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation1').value.replaceAll(/,/g, '')))
    document.getElementById('LeaseIncentiveObligation1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation2').value.replaceAll(/,/g, '')))
    document.getElementById('LeaseIncentiveObligation2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation3').value.replaceAll(/,/g, '')))
    document.getElementById('LeaseIncentiveObligation3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation4').value.replaceAll(/,/g, '')))
    document.getElementById('LeaseIncentiveObligation4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation5').value.replaceAll(/,/g, '')))
    document.getElementById('LeaseIncentiveObligation5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation6').value.replaceAll(/,/g, '')))
    document.getElementById('LeaseIncentiveObligation6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('LeaseIncentiveObligationRow').style.display = a;
        document.getElementById('TrialBalanceLeaseIncentiveObligationRow').style.display = a;
    }
};

function BalanceContingentConsideration(BalanceContingentConsideration) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceContingentConsideration1').value.replaceAll(/,/g, '')))
    document.getElementById('ContingentConsideration1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceContingentConsideration2').value.replaceAll(/,/g, '')))
    document.getElementById('ContingentConsideration2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceContingentConsideration3').value.replaceAll(/,/g, '')))
    document.getElementById('ContingentConsideration3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceContingentConsideration4').value.replaceAll(/,/g, '')))
    document.getElementById('ContingentConsideration4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceContingentConsideration5').value.replaceAll(/,/g, '')))
    document.getElementById('ContingentConsideration5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceContingentConsideration6').value.replaceAll(/,/g, '')))
    document.getElementById('ContingentConsideration6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('ContingentConsiderationRow').style.display = a;
        document.getElementById('TrialBalanceContingentConsiderationRow').style.display = a;
    }
};

function BalanceAccruedTaxLiabilitiesNonCurrent(BalanceAccruedTaxLiabilitiesNonCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilitiesNonCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilitiesNonCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilitiesNonCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilitiesNonCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilitiesNonCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('AccruedTaxLiabilitiesNonCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('AccruedTaxLiabilitiesNonCurrentRow').style.display = a;
        document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrentRow').style.display = a;
    }
};

function BalanceDeferredTaxLiabilitiesNonCurrent(BalanceDeferredTaxLiabilitiesNonCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesNonCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesNonCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesNonCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesNonCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesNonCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredTaxLiabilitiesNonCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DeferredTaxLiabilitiesNonCurrentRow').style.display = a;
        document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrentRow').style.display = a;
    }
};

function BalanceDeferredRevenueAndDepositsNonCurrent(BalanceDeferredRevenueAndDepositsNonCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsNonCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsNonCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsNonCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsNonCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsNonCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('DeferredRevenueAndDepositsNonCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DeferredRevenueAndDepositsNonCurrentRow').style.display = a;
        document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrentRow').style.display = a;
    }
};

function BalanceOtherNonCurrentLiabilities(BalanceOtherNonCurrentLiabilities) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities1').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentLiabilities1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities2').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentLiabilities2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities3').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentLiabilities3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities4').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentLiabilities4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities5').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentLiabilities5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities6').value.replaceAll(/,/g, '')))
    document.getElementById('OtherNonCurrentLiabilities6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('OtherNonCurrentLiabilitiesRow').style.display = a;
        document.getElementById('TrialBalanceOtherNonCurrentLiabilitiesRow').style.display = a;
    }
};

function BalanceRedeemableNonControllingInterests(BalanceRedeemableNonControllingInterests) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRedeemableNonControllingInterests1').value.replaceAll(/,/g, '')))
    document.getElementById('RedeemableNonControllingInterests1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRedeemableNonControllingInterests2').value.replaceAll(/,/g, '')))
    document.getElementById('RedeemableNonControllingInterests2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRedeemableNonControllingInterests3').value.replaceAll(/,/g, '')))
    document.getElementById('RedeemableNonControllingInterests3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRedeemableNonControllingInterests4').value.replaceAll(/,/g, '')))
    document.getElementById('RedeemableNonControllingInterests4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRedeemableNonControllingInterests5').value.replaceAll(/,/g, '')))
    document.getElementById('RedeemableNonControllingInterests5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceRedeemableNonControllingInterests6').value.replaceAll(/,/g, '')))
    document.getElementById('RedeemableNonControllingInterests6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('RedeemableNonControllingInterestsRow').style.display = a;
        document.getElementById('TrialBalanceRedeemableNonControllingInterestsRow').style.display = a;
    }
};

function BalanceDiscontinuedOperationsLiabilitiesNonCurrent(BalanceDiscontinuedOperationsLiabilitiesNonCurrent) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent1').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent1').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // second last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent2').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent2').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // third last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent3').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent3').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent4').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent4').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // fifth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent5').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent5').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    // sixth last year
    a = -Math.round(parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent6').value.replaceAll(/,/g, '')))
    document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent6').value = numUSD.format(a);
    if (a == 0) {
        z = z + 1
    }
    if (z == 6) {
        if (document.getElementById('UnhideCheckbox').checked == false) {
            a = 'none';
        } else {
            a = '';
        }
        document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrentRow').style.display = a;
        document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrentRow').style.display = a;
    }
};

function BalanceNonCurrentLiabilities(BalanceNonCurrentLiabilities) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Last Year
        // Non-Current Liabilities
    a = parseInt(document.getElementById('LongTermDebt1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentLiabilitiesNote1').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentLiabilities1').value = numUSD.format(Math.round(a));
        // Total Liabilities
    a = parseInt(document.getElementById('CurrentLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentLiabilities1').value.replaceAll(/,/g, ''));
    document.getElementById('TotalLiabilities1').value = numUSD.format(Math.round(a));
    // Second Last Year
        // Non-Current Liabilities
    a = parseInt(document.getElementById('LongTermDebt2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentLiabilitiesNote2').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentLiabilities2').value = numUSD.format(Math.round(a));
        // Total Liabilities
    a = parseInt(document.getElementById('CurrentLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentLiabilities2').value.replaceAll(/,/g, ''));
    document.getElementById('TotalLiabilities2').value = numUSD.format(Math.round(a));
    // Third Last Year
        // Non-Current Liabilities
    a = parseInt(document.getElementById('LongTermDebt3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentLiabilitiesNote3').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentLiabilities3').value = numUSD.format(Math.round(a));
    // Total Liabilities
    a = parseInt(document.getElementById('CurrentLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentLiabilities3').value.replaceAll(/,/g, ''));
    document.getElementById('TotalLiabilities3').value = numUSD.format(Math.round(a));
    // Fourth Last Year
        // Non-Current Liabilities
    a = parseInt(document.getElementById('LongTermDebt4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentLiabilitiesNote4').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentLiabilities4').value = numUSD.format(Math.round(a));
        // Total Liabilities
    a = parseInt(document.getElementById('CurrentLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentLiabilities4').value.replaceAll(/,/g, ''));
    document.getElementById('TotalLiabilities4').value = numUSD.format(Math.round(a));
    // Fifth Year
        // Non-Current Liabilities
    a = parseInt(document.getElementById('LongTermDebt5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentLiabilitiesNote5').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentLiabilities5').value = numUSD.format(Math.round(a));
        // Total Liabilities
    a = parseInt(document.getElementById('CurrentLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentLiabilities5').value.replaceAll(/,/g, ''));
    document.getElementById('TotalLiabilities5').value = numUSD.format(Math.round(a));
    // Sixth Year
        // Non-Current Liabilities
    a = parseInt(document.getElementById('LongTermDebt6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('PreferredSharesLiability6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OperatingLeasesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RetirementBenefits6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('FinanceLeasesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('LeaseIncentiveObligation6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('ContingentConsideration6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('OtherNonCurrentLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('RedeemableNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('DiscontinuedOperationsLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    document.getElementById('NonCurrentLiabilitiesNote6').value = numUSD.format(Math.round(a));
    document.getElementById('NonCurrentLiabilities6').value = numUSD.format(Math.round(a));
        // Total Liabilities
    a = parseInt(document.getElementById('CurrentLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('NonCurrentLiabilities6').value.replaceAll(/,/g, ''));
    document.getElementById('TotalLiabilities6').value = numUSD.format(Math.round(a));
};

