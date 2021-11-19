
// analysis/audit/summary.js

function DateAnomaliesii(DateAnomaliesii) {
    document.getElementById('DateAuditSummary1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateAuditSummary2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateAuditSummary3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateAuditSummary4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateAuditSummary5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateAuditSummary6').innerHTML = document.getElementById('ContextDate6').value;
};

function AuditSummaryAmend(AuditSummaryAmend) {
    document.getElementById('AuditSummaryAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('AuditSummaryAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('AuditSummaryAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('AuditSummaryAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('AuditSummaryAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('AuditSummaryAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefAuditSummary() {
    document.getElementById('AuditSummaryFilings1').href = document.getElementById('Filings1').href
    document.getElementById('AuditSummaryFilings2').href = document.getElementById('Filings2').href
    document.getElementById('AuditSummaryFilings3').href = document.getElementById('Filings3').href
    document.getElementById('AuditSummaryFilings4').href = document.getElementById('Filings4').href
    document.getElementById('AuditSummaryFilings5').href = document.getElementById('Filings5').href
    document.getElementById('AuditSummaryFilings6').href = document.getElementById('Filings6').href
};

function TrialBalanceAnomalySummary(TrialBalanceAnomalySummary) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('TrialBalance1').value.replaceAll(/,/g, ''));
    document.getElementById('TrialBalanceAnomalySummary1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('TrialBalance2').value.replaceAll(/,/g, ''));
    document.getElementById('TrialBalanceAnomalySummary2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('TrialBalance3').value.replaceAll(/,/g, ''));
    document.getElementById('TrialBalanceAnomalySummary3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('TrialBalance4').value.replaceAll(/,/g, ''));
    document.getElementById('TrialBalanceAnomalySummary4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('TrialBalance5').value.replaceAll(/,/g, ''));
    document.getElementById('TrialBalanceAnomalySummary5').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('TrialBalance6').value.replaceAll(/,/g, ''));
    document.getElementById('TrialBalanceAnomalySummary6').value = numUSD.format(a);
};

function AccountingEquationAnomalySummary(AccountingEquationAnomalySummary) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('PRO-1.1.31').value.replaceAll(/,/g, ''));
    document.getElementById('AccountingEquationAnomalySummary1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('PRO-1.1.32').value.replaceAll(/,/g, ''));
    document.getElementById('AccountingEquationAnomalySummary2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('PRO-1.1.33').value.replaceAll(/,/g, ''));
    document.getElementById('AccountingEquationAnomalySummary3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('PRO-1.1.34').value.replaceAll(/,/g, ''));
    document.getElementById('AccountingEquationAnomalySummary4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('PRO-1.1.35').value.replaceAll(/,/g, ''));
    document.getElementById('AccountingEquationAnomalySummary5').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('PRO-1.1.36').value.replaceAll(/,/g, ''));
    document.getElementById('AccountingEquationAnomalySummary6').value = numUSD.format(a);
};

function BalanceSheetsAnomalySummary(BalanceSheetsAnomalySummary) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('TotalAnomaliesBalanceSheets1').value.replaceAll(/,/g, ''));
    document.getElementById('BalanceSheetsAnomalySummary1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('TotalAnomaliesBalanceSheets2').value.replaceAll(/,/g, ''));
    document.getElementById('BalanceSheetsAnomalySummary2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('TotalAnomaliesBalanceSheets3').value.replaceAll(/,/g, ''));
    document.getElementById('BalanceSheetsAnomalySummary3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('TotalAnomaliesBalanceSheets4').value.replaceAll(/,/g, ''));
    document.getElementById('BalanceSheetsAnomalySummary4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('TotalAnomaliesBalanceSheets5').value.replaceAll(/,/g, ''));
    document.getElementById('BalanceSheetsAnomalySummary5').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('TotalAnomaliesBalanceSheets6').value.replaceAll(/,/g, ''));
    document.getElementById('BalanceSheetsAnomalySummary6').value = numUSD.format(a);
};

function IncomeAnomalySummary(IncomeAnomalySummary) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('TotalAnomaliesIncomeStatement1').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeAnomalySummary1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('TotalAnomaliesIncomeStatement2').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeAnomalySummary2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('TotalAnomaliesIncomeStatement3').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeAnomalySummary3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('TotalAnomaliesIncomeStatement4').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeAnomalySummary4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('TotalAnomaliesIncomeStatement5').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeAnomalySummary5').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('TotalAnomaliesIncomeStatement6').value.replaceAll(/,/g, ''));
    document.getElementById('IncomeAnomalySummary6').value = numUSD.format(a);
};

function ComprehensiveIncomeAnomalySummary(ComprehensiveIncomeAnomalySummary) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('AnomaliesComprehensiveIncome1').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeAnomalySummary1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('AnomaliesComprehensiveIncome2').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeAnomalySummary2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('AnomaliesComprehensiveIncome3').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeAnomalySummary3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('AnomaliesComprehensiveIncome4').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeAnomalySummary4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('AnomaliesComprehensiveIncome5').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeAnomalySummary5').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('AnomaliesComprehensiveIncome6').value.replaceAll(/,/g, ''));
    document.getElementById('ComprehensiveIncomeAnomalySummary6').value = numUSD.format(a);
};

function ShareholdersEquityAnomalySummary(ShareholdersEquityAnomalySummary) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('AnomaliesShareholdersEquity1').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityAnomalySummary1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('AnomaliesShareholdersEquity2').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityAnomalySummary2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('AnomaliesShareholdersEquity3').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityAnomalySummary3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('AnomaliesShareholdersEquity4').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityAnomalySummary4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('AnomaliesShareholdersEquity5').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityAnomalySummary5').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('AnomaliesShareholdersEquity6').value.replaceAll(/,/g, ''));
    document.getElementById('ShareholdersEquityAnomalySummary6').value = numUSD.format(a);
};

function CashFlowAnomalySummary(CashFlowAnomalySummary) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('TotalAnomaliesCashFlow1').value.replaceAll(/,/g, ''));
    document.getElementById('CashFlowAnomalySummary1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('TotalAnomaliesCashFlow2').value.replaceAll(/,/g, ''));
    document.getElementById('CashFlowAnomalySummary2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('TotalAnomaliesCashFlow3').value.replaceAll(/,/g, ''));
    document.getElementById('CashFlowAnomalySummary3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('TotalAnomaliesCashFlow4').value.replaceAll(/,/g, ''));
    document.getElementById('CashFlowAnomalySummary4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('TotalAnomaliesCashFlow5').value.replaceAll(/,/g, ''));
    document.getElementById('CashFlowAnomalySummary5').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('TotalAnomaliesCashFlow6').value.replaceAll(/,/g, ''));
    document.getElementById('CashFlowAnomalySummary6').value = numUSD.format(a);
};

function MarketCapitalizationAnomalySummary(MarketCapitalizationAnomalySummary) {
    // Last Year
    a = parseInt(document.getElementById('MarketCapitalization1').value.replaceAll(/,/g, ''));
    if (a === 0) {
        document.getElementById('MarketCapitalizationAnomalySummary1').value = 'Market Cap. is null.';
    }
    // Second Last Year
    a = parseInt(document.getElementById('MarketCapitalization2').value.replaceAll(/,/g, ''));
    if (a === 0) {
        document.getElementById('MarketCapitalizationAnomalySummary2').value = 'Market Cap. is null.';
    }
    // Third Last Year
    a = parseInt(document.getElementById('MarketCapitalization3').value.replaceAll(/,/g, ''));
    if (a === 0) {
        document.getElementById('MarketCapitalizationAnomalySummary3').value = 'Market Cap. is null.';
    }
    // Fourth Last Year
    a = parseInt(document.getElementById('MarketCapitalization4').value.replaceAll(/,/g, ''));
    if (a === 0) {
        document.getElementById('MarketCapitalizationAnomalySummary4').value = 'Market Cap. is null.';
    }
};

function WorstCaseScenario(WorstCaseScenario) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = Math.abs(parseInt(document.getElementById('TrialBalanceAnomalySummary1').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('AccountingEquationAnomalySummary1').value.replaceAll(/,/g, '')));
    c = Math.abs(parseInt(document.getElementById('BalanceSheetsAnomalySummary1').value.replaceAll(/,/g, '')));
    d = Math.abs(parseInt(document.getElementById('IncomeAnomalySummary1').value.replaceAll(/,/g, '')));
    e = Math.abs(parseInt(document.getElementById('ComprehensiveIncomeAnomalySummary1').value.replaceAll(/,/g, '')));
    f = Math.abs(parseInt(document.getElementById('ShareholdersEquityAnomalySummary1').value.replaceAll(/,/g, '')));
    g = Math.abs(parseInt(document.getElementById('CashFlowAnomalySummary1').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesWorstCaseScenario1').value = numUSD.format(Math.max(a, b, c, d, e, f, g))
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('TrialBalanceAnomalySummary2').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('AccountingEquationAnomalySummary2').value.replaceAll(/,/g, '')));
    c = Math.abs(parseInt(document.getElementById('BalanceSheetsAnomalySummary2').value.replaceAll(/,/g, '')));
    d = Math.abs(parseInt(document.getElementById('IncomeAnomalySummary2').value.replaceAll(/,/g, '')));
    e = Math.abs(parseInt(document.getElementById('ComprehensiveIncomeAnomalySummary2').value.replaceAll(/,/g, '')));
    f = Math.abs(parseInt(document.getElementById('ShareholdersEquityAnomalySummary2').value.replaceAll(/,/g, '')));
    g = Math.abs(parseInt(document.getElementById('CashFlowAnomalySummary2').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesWorstCaseScenario2').value = numUSD.format(Math.max(a, b, c, d, e, f, g))
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('TrialBalanceAnomalySummary3').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('AccountingEquationAnomalySummary3').value.replaceAll(/,/g, '')));
    c = Math.abs(parseInt(document.getElementById('BalanceSheetsAnomalySummary3').value.replaceAll(/,/g, '')));
    d = Math.abs(parseInt(document.getElementById('IncomeAnomalySummary3').value.replaceAll(/,/g, '')));
    e = Math.abs(parseInt(document.getElementById('ComprehensiveIncomeAnomalySummary3').value.replaceAll(/,/g, '')));
    f = Math.abs(parseInt(document.getElementById('ShareholdersEquityAnomalySummary3').value.replaceAll(/,/g, '')));
    g = Math.abs(parseInt(document.getElementById('CashFlowAnomalySummary3').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesWorstCaseScenario3').value = numUSD.format(Math.max(a, b, c, d, e, f, g))
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('TrialBalanceAnomalySummary4').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('AccountingEquationAnomalySummary4').value.replaceAll(/,/g, '')));
    c = Math.abs(parseInt(document.getElementById('BalanceSheetsAnomalySummary4').value.replaceAll(/,/g, '')));
    d = Math.abs(parseInt(document.getElementById('IncomeAnomalySummary4').value.replaceAll(/,/g, '')));
    e = Math.abs(parseInt(document.getElementById('ComprehensiveIncomeAnomalySummary4').value.replaceAll(/,/g, '')));
    f = Math.abs(parseInt(document.getElementById('ShareholdersEquityAnomalySummary4').value.replaceAll(/,/g, '')));
    g = Math.abs(parseInt(document.getElementById('CashFlowAnomalySummary4').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesWorstCaseScenario4').value = numUSD.format(Math.max(a, b, c, d, e, f, g))
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('TrialBalanceAnomalySummary5').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('AccountingEquationAnomalySummary5').value.replaceAll(/,/g, '')));
    c = Math.abs(parseInt(document.getElementById('BalanceSheetsAnomalySummary5').value.replaceAll(/,/g, '')));
    d = Math.abs(parseInt(document.getElementById('IncomeAnomalySummary5').value.replaceAll(/,/g, '')));
    e = Math.abs(parseInt(document.getElementById('ComprehensiveIncomeAnomalySummary5').value.replaceAll(/,/g, '')));
    f = Math.abs(parseInt(document.getElementById('ShareholdersEquityAnomalySummary5').value.replaceAll(/,/g, '')));
    g = Math.abs(parseInt(document.getElementById('CashFlowAnomalySummary5').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesWorstCaseScenario5').value = numUSD.format(Math.max(a, b, c, d, e, f, g))
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('TrialBalanceAnomalySummary6').value.replaceAll(/,/g, '')));
    b = Math.abs(parseInt(document.getElementById('AccountingEquationAnomalySummary6').value.replaceAll(/,/g, '')));
    c = Math.abs(parseInt(document.getElementById('BalanceSheetsAnomalySummary6').value.replaceAll(/,/g, '')));
    d = Math.abs(parseInt(document.getElementById('IncomeAnomalySummary6').value.replaceAll(/,/g, '')));
    e = Math.abs(parseInt(document.getElementById('ComprehensiveIncomeAnomalySummary6').value.replaceAll(/,/g, '')));
    f = Math.abs(parseInt(document.getElementById('ShareholdersEquityAnomalySummary6').value.replaceAll(/,/g, '')));
    g = Math.abs(parseInt(document.getElementById('CashFlowAnomalySummary6').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesWorstCaseScenario6').value = numUSD.format(Math.max(a, b, c, d, e, f, g))
};

function BalanceAnomaliesMatherialityThreshold(BalanceAnomaliesMatherialityThreshold) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // Last Year
    a = parseInt(document.getElementById('MaterialityThresholdValue6').value.replace(/,/g, ''));
    document.getElementById('AnomaliesMaterialityThreshold1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('MaterialityThresholdValue6').value.replace(/,/g, ''));
    document.getElementById('AnomaliesMaterialityThreshold2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('MaterialityThresholdValue6').value.replace(/,/g, ''));
    document.getElementById('AnomaliesMaterialityThreshold3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('MaterialityThresholdValue6').value.replace(/,/g, ''));
    document.getElementById('AnomaliesMaterialityThreshold4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('MaterialityThresholdValue6').value.replace(/,/g, ''));
    document.getElementById('AnomaliesMaterialityThreshold5').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('MaterialityThresholdValue6').value.replace(/,/g, ''));
    document.getElementById('AnomaliesMaterialityThreshold6').value = numUSD.format(a);
};

function AnomaliesRatio(AnomaliesRatio) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    // Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesWorstCaseScenario1').value.replaceAll(/,/g, '')));
    a = a / Math.abs(parseInt(document.getElementById('AnomaliesMaterialityThreshold1').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesRatio1').value = numUSD.format(a)
    // Second Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesWorstCaseScenario2').value.replaceAll(/,/g, '')));
    a = a / Math.abs(parseInt(document.getElementById('AnomaliesMaterialityThreshold2').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesRatio2').value = numUSD.format(a)
    // Third Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesWorstCaseScenario3').value.replaceAll(/,/g, '')));
    a = a / Math.abs(parseInt(document.getElementById('AnomaliesMaterialityThreshold3').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesRatio3').value = numUSD.format(a)
    // Fourth Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesWorstCaseScenario4').value.replaceAll(/,/g, '')));
    a = a / Math.abs(parseInt(document.getElementById('AnomaliesMaterialityThreshold4').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesRatio4').value = numUSD.format(a)
    // Fifth Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesWorstCaseScenario5').value.replaceAll(/,/g, '')));
    a = a / Math.abs(parseInt(document.getElementById('AnomaliesMaterialityThreshold5').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesRatio5').value = numUSD.format(a)
    // Sixth Last Year
    a = Math.abs(parseInt(document.getElementById('AnomaliesWorstCaseScenario6').value.replaceAll(/,/g, '')));
    a = a / Math.abs(parseInt(document.getElementById('AnomaliesMaterialityThreshold6').value.replaceAll(/,/g, '')));
    document.getElementById('AnomaliesRatio6').value = numUSD.format(a)
};

function AuditOpinion(AuditOpinion) {
    // Second Last Year
    mt = parseInt(document.getElementById('AnomaliesMaterialityThreshold1').value.replaceAll(/,/g, ''));
    a = parseInt(document.getElementById('AnomaliesWorstCaseScenario1').value.replaceAll(/,/g, ''));
    z = 'There are still some unexplained differences in the financial statements and it might not be exempt from material misstatements.'
    if (Math.abs(a) - Math.abs(mt) >= 0) {
        document.getElementById('Validity1').innerHTML = z
    } else {
        f = 0
        a = parseInt(document.getElementById('CurrentAssets1').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NonCurrentAssets1').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('TotalAssets1').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('Sales1').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('CostOfSales1').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing1').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('OperatingIncome1').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('IncomeBeforeTaxes1').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NetIncome1').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = document.getElementById('MarketCapitalizationAnomalySummary1').value.replaceAll(/,/g, '');
        if (a === 'Market Capitalization is null.') {
            f = f + 1
        }
        if (f === 0) {
            document.getElementById('Validity1').innerHTML = "Nothing leads to believe that the financial statements are not exempt from material misstatements."
        } else {
            document.getElementById('Validity1').innerHTML = z
        }
    }
    // Second Last Year
    mt = parseInt(document.getElementById('AnomaliesMaterialityThreshold2').value.replaceAll(/,/g, ''));
    a = parseInt(document.getElementById('AnomaliesWorstCaseScenario2').value.replaceAll(/,/g, ''));
    z = 'There are still some unexplained differences in the financial statements and it might not be exempt from material misstatements.'
    if (Math.abs(a) - Math.abs(mt) >= 0) {
        document.getElementById('Validity2').innerHTML = z
    } else {
        f = 0
        a = parseInt(document.getElementById('CurrentAssets2').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NonCurrentAssets2').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('TotalAssets2').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('Sales2').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('CostOfSales2').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing2').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('OperatingIncome2').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('IncomeBeforeTaxes2').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NetIncome2').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = document.getElementById('MarketCapitalizationAnomalySummary2').value.replaceAll(/,/g, '');
        if (a === 'Market Capitalization is null.') {
            f = f + 1
        }
        if (f === 0) {
            document.getElementById('Validity2').innerHTML = "Nothing leads to believe that the financial statements are not exempt from material misstatements."
        } else {
            document.getElementById('Validity2').innerHTML = z
        }
    }
    // Third Last Year
    mt = parseInt(document.getElementById('AnomaliesMaterialityThreshold3').value.replaceAll(/,/g, ''));
    a = parseInt(document.getElementById('AnomaliesWorstCaseScenario3').value.replaceAll(/,/g, ''));
    z = 'There are still some unexplained differences in the financial statements and it might not be exempt from material misstatements.'
    if (Math.abs(a) - Math.abs(mt) >= 0) {
        document.getElementById('Validity3').innerHTML = z
    } else {
        f = 0
        a = parseInt(document.getElementById('CurrentAssets3').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NonCurrentAssets3').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('TotalAssets3').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('Sales3').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('CostOfSales3').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing3').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('OperatingIncome3').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('IncomeBeforeTaxes3').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NetIncome3').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = document.getElementById('MarketCapitalizationAnomalySummary3').value.replaceAll(/,/g, '');
        if (a === 'Market Capitalization is null.') {
            f = f + 1
        }
        if (f === 0) {
            document.getElementById('Validity3').innerHTML = "Nothing leads to believe that the financial statements are not exempt from material misstatements."
        } else {
            document.getElementById('Validity3').innerHTML = z
        }
    }
    // Fourth Last Year
    mt = parseInt(document.getElementById('AnomaliesMaterialityThreshold4').value.replaceAll(/,/g, ''));
    a = parseInt(document.getElementById('AnomaliesWorstCaseScenario4').value.replaceAll(/,/g, ''));
    z = 'There are still some unexplained differences in the financial statements and it might not be exempt from material misstatements.'
    if (Math.abs(a) - Math.abs(mt) >= 0) {
        document.getElementById('Validity4').innerHTML = z
    } else {
        f = 0
        a = parseInt(document.getElementById('CurrentAssets4').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NonCurrentAssets4').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('TotalAssets4').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('Sales4').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('CostOfSales4').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing4').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('OperatingIncome4').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('IncomeBeforeTaxes4').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NetIncome4').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = document.getElementById('MarketCapitalizationAnomalySummary4').value.replaceAll(/,/g, '');
        if (a === 'Market Capitalization is null.') {
            f = f + 1
        }
        if (f === 0) {
            document.getElementById('Validity4').innerHTML = "Nothing leads to believe that the financial statements are not exempt from material misstatements."
        } else {
            document.getElementById('Validity4').innerHTML = z
        }
    }
    // Fifth Last Year
    mt = parseInt(document.getElementById('AnomaliesMaterialityThreshold5').value.replaceAll(/,/g, ''));
    a = parseInt(document.getElementById('AnomaliesWorstCaseScenario5').value.replaceAll(/,/g, ''));
    z = 'There are still some unexplained differences in the financial statements and it might not be exempt from material misstatements.'
    if (Math.abs(a) - Math.abs(mt) >= 0) {
        document.getElementById('Validity5').innerHTML = z
    } else {
        f = 0
        a = parseInt(document.getElementById('CurrentAssets5').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NonCurrentAssets5').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('TotalAssets5').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('Sales5').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('CostOfSales5').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing5').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('OperatingIncome5').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('IncomeBeforeTaxes5').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NetIncome5').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = document.getElementById('MarketCapitalizationAnomalySummary5').value.replaceAll(/,/g, '');
        if (a === 'Market Capitalization is null.') {
            f = f + 1
        }
        if (f === 0) {
            document.getElementById('Validity5').innerHTML = "Nothing leads to believe that the financial statements are not exempt from material misstatements."
        } else {
            document.getElementById('Validity5').innerHTML = z
        }
    }
    // Sixth Last Year
    mt = parseInt(document.getElementById('AnomaliesMaterialityThreshold6').value.replaceAll(/,/g, ''));
    a = parseInt(document.getElementById('AnomaliesWorstCaseScenario6').value.replaceAll(/,/g, ''));
    z = 'There are still some unexplained differences in the financial statements and it might not be exempt from material misstatements.'
    if (Math.abs(a) - Math.abs(mt) >= 0) {
        document.getElementById('Validity6').innerHTML = z
    } else {
        f = 0
        a = parseInt(document.getElementById('CurrentAssets6').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NonCurrentAssets6').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('TotalAssets6').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('Sales6').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('CostOfSales6').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing6').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('OperatingIncome6').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('IncomeBeforeTaxes6').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = parseInt(document.getElementById('NetIncome6').value.replaceAll(/,/g, ''));
        if (a === 0) {
            f = f + 1
        }
        a = document.getElementById('MarketCapitalizationAnomalySummary6').value.replaceAll(/,/g, '');
        if (a === 'Market Capitalization is null.') {
            f = f + 1
        }
        if (f === 0) {
            document.getElementById('Validity6').innerHTML = "Nothing leads to believe that the financial statements are not exempt from material misstatements."
        } else {
            document.getElementById('Validity6').innerHTML = z
        }
    }
};
// AUDIT
function BalanceBridgeφ(BalanceBridgeφ) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
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
    //
    a = document.getElementById('Validity1').innerHTML
    b = document.getElementById('Validity2').innerHTML
    c = document.getElementById('Validity3').innerHTML
    d = document.getElementById('Validity4').innerHTML
    e = document.getElementById('Validity5').innerHTML
    f = document.getElementById('Validity6').innerHTML
    //
    z = 'There are still some unexplained differences in the financial statements and it might not be exempt from material misstatements.'
    // Column 1
    if (a === b) {
        if (b === c) {
            g = a
        } else {
            g = z
        }
    } else {
        g = z
    }
    document.getElementById('Bridgeφ1').innerHTML = g
    // Column 2
    if (b === c) {
        if (c === d) {
            g = b
        } else {
            g = z
        }
    } else {
        g = z
    }
    document.getElementById('Bridgeφ2').innerHTML = g
    // Column 3
    if (c === d) {
        if (d === e) {
            g = c
        } else {
            g = z
        }
    } else {
        g = z
    }
    document.getElementById('Bridgeφ3').innerHTML = g
    // Column 4
    if (d === e) {
        if (e === f) {
            g = d
        } else {
            g = z
        }
    } else {
        g = z
    }
    document.getElementById('Bridgeφ4').innerHTML = g
////////////////////
// OPINION
//
// Column 1
a = parseFloat(document.getElementById('Clockφ1').innerHTML.replaceAll(/,/g, ''))
b = parseFloat(document.getElementById('ExpectedGrowth1').value.replaceAll(/,/g, ''))
c = parseFloat(document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes1').value.replaceAll(/,/g, ''))
if (isNaN(a)) {
} else {
    if (document.getElementById('Bridgeφ1').innerHTML.length === 98) {
        if (a > 100) {
            if (b < 1) {
                if (c > 1) {
                    document.getElementById('Opinionφ1').innerHTML = "Buy" ;
                }
            }
        } else {
            if (a < 70) {
                document.getElementById('Opinionφ1').innerHTML = "Hedge For A Loss In Value" ;
            }
        }
    }
}
// Column 2
a = parseFloat(document.getElementById('Clockφ2').innerHTML.replaceAll(/,/g, ''))
b = parseFloat(document.getElementById('ExpectedGrowth2').value.replaceAll(/,/g, ''))
c = parseFloat(document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes2').value.replaceAll(/,/g, ''))
if (isNaN(a)) {
} else {
    if (document.getElementById('Bridgeφ2').innerHTML.length === 98) {
        if (a > 100) {
            if (b < 1) {
                if (c > 1) {
                    document.getElementById('Opinionφ2').innerHTML = "Buy" ;
                }
            }
        } else {
            if (a < 70) {
                if (b > 1) {
                    document.getElementById('Opinionφ2').innerHTML = "Hedge For A Loss In Value" ;
                }
            }
        }
    }
}
// Column 3
a = parseFloat(document.getElementById('Clockφ3').innerHTML.replaceAll(/,/g, ''))
b = parseFloat(document.getElementById('ExpectedGrowth3').value.replaceAll(/,/g, ''))
c = parseFloat(document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes3').value.replaceAll(/,/g, ''))                                
if (isNaN(a)) {
} else {
    if (document.getElementById('Bridgeφ3').innerHTML.length === 98) {
        if (a > 100) {
            if (b < 1) {
                if (c > 1) {
                    document.getElementById('Opinionφ3').innerHTML = "Buy" ;
                }
            }
        } else {
            if (a < 70) {
                if (b > 1) {
                    document.getElementById('Opinionφ3').innerHTML = "Hedge For A Loss In Value" ;
                }
            }
        }
    }
}
// Column 4
a = parseFloat(document.getElementById('Clockφ4').innerHTML.replaceAll(/,/g, ''))
b = parseFloat(document.getElementById('ExpectedGrowth4').value.replaceAll(/,/g, ''))
c = parseFloat(document.getElementById('CharacteristicIncomeBeforeInterestAfterTaxes4').value.replaceAll(/,/g, ''))                                
if (isNaN(a)) {
} else {
    if (document.getElementById('Bridgeφ4').innerHTML.length === 98) {
        if (a > 100) {
            if (b < 1) {
                if (c > 1) {
                    document.getElementById('Opinionφ4').innerHTML = "Buy" ;
                }
            }
        } else {
            if (a < 70) {
                if (b > 1) {
                    document.getElementById('Opinionφ4').innerHTML = "Hedge For A Loss In Value" ;
                }
            }
        }
    }
}
}