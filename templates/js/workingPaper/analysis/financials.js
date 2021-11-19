
// analysis/financials.js

function TrialBalances() {
    document.getElementById('EntityRegistrantNameTrialBalances').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateTrialBalances();
    TrialBalancesAmend();
    Balance();	
}

function BalanceSheets() {
    document.getElementById('EntityRegistrantNameBalanceSheets').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateBalanceSheets();
    BalanceSheetsAmend();
    BalanceCash();
    BalanceShortTermInvestments();
    BalanceAccountsReceivable();
    BalanceWorkInProgress();
    BalanceInventories();
    BalancePrepaidExpenses();
    BalanceNonTradeReceivables();
    BalancePrepaidTaxAssetsCurrent();
    BalanceDeferredTaxAssetsCurrent();
    BalanceRightOfUseAssetsCurrent();
    BalanceOtherCurrentAssets();
    BalanceDiscontinuedOperationsCurrent();
    BalanceCurrentAssets();
    BalanceLongTermReceivables();
    BalanceDeferredCharges();
    BalanceInvestments();
    BalancePropertyPlantAndEquipment();
    BalanceOperatingLeaseRightOfUseAssets();
    BalanceFinanceLeaseRightOfUseAssets();
    BalanceIntangibleAssets();
    BalanceGoodwill();
    BalanceRefundableTaxAssetsNonCurrent();
    BalanceDeferredTaxAssetsNonCurrent();
    BalanceDefinedBenefitPensionAndOtherSimilarPlans();
    BalanceOtherNonCurrentAssets();
    BalanceDiscontinuedOperationsNonCurrent();
    BalanceNonCurrentAssets();
    BalanceAccountsPayableAndAccruedLiabilities();
    BalanceEmployeeCompensationCurrent();
    BalanceOperatingLeasesCurrent();
    BalanceFinanceLeasesCurrent();
    BalanceDeferredRevenueAndDepositsCurrent();
    BalanceAccruedTaxLiabilities();
    BalanceDeferredTaxLiabilitiesCurrent();
    BalanceCommercialPapers();
    BalanceShortTermBorrowings();
    BalanceOtherCurrentLiabilities();
    BalanceDiscontinuedOperationsLiabilitiesCurrent();
    BalanceDividendsPayable();
    BalanceShortTermPortionOfLongTermDebt();
    BalanceCurrentLiabilities();
    BalanceLongTermDebt();
    BalancePreferredSharesLiability();
    BalanceRetirementBenefits();
    BalanceOperatingLeasesNonCurrent();
    BalanceFinanceLeasesNonCurrent();
    BalanceLeaseIncentiveObligation();
    BalanceContingentConsideration();
    BalanceAccruedTaxLiabilitiesNonCurrent();
    BalanceDeferredTaxLiabilitiesNonCurrent();
    BalanceDeferredRevenueAndDepositsNonCurrent();
    BalanceOtherNonCurrentLiabilities();
    BalanceRedeemableNonControllingInterests();
    BalanceDiscontinuedOperationsLiabilitiesNonCurrent();
    BalanceNonCurrentLiabilities();		
}

function IncomeStatements() {
    document.getElementById('EntityRegistrantNameIncomeStatements').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateStatementsOfIncome();
    IncomeStatementsAmend();
    BalanceSales();
    BalanceCostOfSales();
    BalanceGrossMargin();
    BalanceResearchAndDevelopment();
    BalanceSellingGeneralAdministrativeAndMarketing();
    BalanceOperatingIncome();
    BalanceImpairmentRestructuringAndOtherSpecialCharges();
    BalanceNonOperatingIncomeExpense();
    BalanceIncomeBeforeTaxes();
    BalanceIncomeTaxExpenseBenefit();
    BalanceEquityMethodInvesteesIncome();
    BalanceNetIncomeFromDiscontinuedOperations();
    BalanceNetIncome();
}

function ComprehensiveIncome() {
    document.getElementById('EntityRegistrantNameComprehensiveIncome').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateStatementsOfComprehensiveIncome();
    StatementsOfComprehensiveAmend();
    BalanceNetIncomeLossComprehensiveIncome();
    BalanceChangeInForeignCurrencyTranslationAdjustment();
    BalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments();
    BalanceChangeInUnrealizedGainsLossesOnInvestments();
    BalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans();
    BalanceIncomeTaxOnOtherComprehensiveIncome();
    BalanceComprehensiveIncome();
}

function ShareholdersEquity() {
    document.getElementById('EntityRegistrantNameShareholdersEquity').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateStatementsOfShareholdersEquity();
    StatementsOfShareholdersAmend();
    BalanceShareholdersEquityBeginning();
    BalanceCommonSharesIssued();
    BalanceShareBasedCompensation();
    BalanceShareBasedCompensationRetainedEarnings();
    BalanceDividendsAndDividendEquivalentsDeclared();
    BalanceCommonSharesRepurchasedAndRetired();
    BalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts();
    BalanceRetainedEarningsOthers();
    BalancePurchaseAndSellOfTreasuryShares();
    BalanceDividendsDeclaredToNonControllingInterests();
    BalanceAcquisitionOfNonControllingInterests();
    BalanceNonControllingInterestsOthers();
    BalanceComprehensiveIncomeShareholdersEquity();
    BalanceNetIncomeLossShareholdersEquity();
    BalanceShareholdersEquity();
}

function CashFlow() {
    document.getElementById('EntityRegistrantNameCashFlow').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateStatementsOfCashFlow();
    StatementsOfCashFlowAmend();
    EffectOfExchangeRateOnCashRow();
    NetIncomeCashFlow();
    DepreciationDepletionAndAmortizationRow();
    GainRelatedToDisposalOrSaleRow();
    RestructuringAndOtherSpecialChargesRow();
    AccruedEmployeeCompensationRow();
    ShareBasedCompensationOperatingActivitiesRow();
    IncreaseDecreaseInIncomeTaxExpenseBenefitRow();
    OtherNonCashIncomeExpenseRow();
    IncreaseDecreaseInAccountsReceivableRow();
    IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssetsRow();
    IncreaseDecreaseInInventoriesRow();
    IncreaseDecreaseInOtherReceivablesRow();
    IncreaseDecreaseInAccountsPayableRow();
    IncreaseDecreaseInContractWithCustomerLiabilityRow();
    IncreaseDecreaseInRetirementBenefitsRow();
    IncreaseDecreaseFinanceLeaseCurrentRow();
    IncreaseDecreaseOperatingLeaseCurrentRow();
    IncreaseDecreaseInFairValueOfDerivativesOperatingRow();
    IncreaseDecreaseInOtherOperatingActivitiesRow();
    OperatingActivities();
    PaymentsToAcquireInvestmentsRow();
    ProceedsOfInvestmentsRow();
    PaymentsToAcquirePropertyPlantAndEquipmentRow();
    ProceedsFromDisposalsOfPropertyAndEquipmentRow();
    PaymentsToAcquireBusinessesAndIntangiblesRow();
    ProceedsFromDisposalsOfBusinessesAndIntangiblesRow();
    ProceedsRelatedToInsuranceSettlementRow();
    ReveiptOfGovernmentGrantsRow();
    EquityInvesteeAdvancesRepaymentsRow();
    PaymentOfLicenseFeeRow();
    OtherInvestingActivitiesRow();
    InvestingActivitiesInDiscontinuedOperationsRow();
    InvestingActivities();
    FinanceLeasePrincipalPaymentsRow();
    ProceedsFromIssuanceOfCommonSharesRow();
    ProceedsFromSharePurchasePlanAndOptionsExerciceRow();
    PaymentsRelatedToTaxWithholdingForShareBasedCompensationRow();
    PaymentsForRepurchaseOfCommonSharesRow();
    PaymentsOfDividendsRow();
    IncreaseDecreaseDeferredContingentConsiderationRow();
    ProceedsFromIssuanceOfLongTermDebtRow();
    RepaymentsOfLongTermDebtRow();
    FinancingCostsRow();
    NetChangeInShortTermBorrowingsRow();
    NetChangeInForwardAndHedgesClassifiedAsFinancingActivitiesRow();
    NetChangeInNonControllingInterestsRow();
    ProceedsFromRepaymentsOfCommercialPaperRow();
    RepaymentsOfConvertibleRow();
    IssuanceOfConvertibleRow();
    OtherFinancingActivitiesRow();
    FinancingActivities();
    CashEndingBalance();
}