

// analysis/financials/trialbalances.js

function DateTrialBalances(DateTrialBalances) {
    document.getElementById('DateTrialBalance1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateTrialBalance2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateTrialBalance3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateTrialBalance4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateTrialBalance5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateTrialBalance6').innerHTML = document.getElementById('ContextDate6').value;
};

function TrialBalancesAmend(TrialBalancesAmend) {
    document.getElementById('TrialBalancesAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('TrialBalancesAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('TrialBalancesAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('TrialBalancesAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('TrialBalancesAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('TrialBalancesAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefTrialBalances() {
    document.getElementById('TrialBalancesFilings1').href = document.getElementById('Filings1').href
    document.getElementById('TrialBalancesFilings2').href = document.getElementById('Filings2').href
    document.getElementById('TrialBalancesFilings3').href = document.getElementById('Filings3').href
    document.getElementById('TrialBalancesFilings4').href = document.getElementById('Filings4').href
    document.getElementById('TrialBalancesFilings5').href = document.getElementById('Filings5').href
    document.getElementById('TrialBalancesFilings6').href = document.getElementById('Filings6').href
};

function Balance(Balance) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    ////////////////////
    // Last Year
    // Current Assets
    a = parseInt(document.getElementById('TrialBalanceCash1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermInvestments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccountsReceivable1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceWorkInProgress1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInventories1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidExpenses1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonTradeReceivables1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent1').value.replaceAll(/,/g, ''));
    // Non-Current Assets
    a = a + parseInt(document.getElementById('TrialBalanceLongTermReceivables1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredCharges1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInvestments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIntangibleAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceGoodwill1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperations1').value.replaceAll(/,/g, ''));
    // Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommercialPapers1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermBorrowings1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsPayable1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt1').value.replaceAll(/,/g, ''));
    // Non-Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceLongTermDebt1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePreferredSharesLiability1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetirementBenefits1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceContingentConsideration1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRedeemableNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    // Convertible Debt
    a = a + parseInt(document.getElementById('TrialBalanceConvertibleDebt1').value.replaceAll(/,/g, ''));
    // Common Shares
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesIssued1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensation1').value.replaceAll(/,/g, ''));
    // Accumulated Other Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss1').value.replaceAll(/,/g, ''));
    // Retained Earnings
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers1').value.replaceAll(/,/g, ''));
    // Treasury Shares
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares1').value.replaceAll(/,/g, ''));
    // Employee Benefit Trust
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust1').value.replaceAll(/,/g, ''));
    // Non Controlling Interests
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers1').value.replaceAll(/,/g, ''));
    // Income
    a = a + parseInt(document.getElementById('TrialBalanceSales1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCostOfSales1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceResearchAndDevelopment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations1').value.replaceAll(/,/g, ''));
    // Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans1').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome1').value.replaceAll(/,/g, ''));
    ////////////////////
    // Balance
    document.getElementById('TrialBalance1').value = numUSD.format(Math.round(a));
    ////////////////////
    // Second Last Year
    // Current Assets
    a = parseInt(document.getElementById('TrialBalanceCash2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermInvestments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccountsReceivable2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceWorkInProgress2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInventories2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidExpenses2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonTradeReceivables2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent2').value.replaceAll(/,/g, ''));
    // Non-Current Assets
    a = a + parseInt(document.getElementById('TrialBalanceLongTermReceivables2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredCharges2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInvestments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIntangibleAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceGoodwill2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperations2').value.replaceAll(/,/g, ''));
    // Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommercialPapers2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermBorrowings2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsPayable2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt2').value.replaceAll(/,/g, ''));
    // Non-Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceLongTermDebt2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePreferredSharesLiability2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetirementBenefits2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceContingentConsideration2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    // Convertible Debt
    a = a + parseInt(document.getElementById('TrialBalanceConvertibleDebt2').value.replaceAll(/,/g, ''));
    // Common Shares
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesIssued2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensation2').value.replaceAll(/,/g, ''));
    // Accumulated Other Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss2').value.replaceAll(/,/g, ''));
    // Retained Earnings
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers2').value.replaceAll(/,/g, ''));
    // Treasury Shares
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares2').value.replaceAll(/,/g, ''));
    // Employee Benefit Trust
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust2').value.replaceAll(/,/g, ''));
    // Non Controlling Interests
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers2').value.replaceAll(/,/g, ''));
    // Income
    a = a + parseInt(document.getElementById('TrialBalanceSales2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCostOfSales2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceResearchAndDevelopment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations2').value.replaceAll(/,/g, ''));
    // Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans2').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome2').value.replaceAll(/,/g, ''));
    ////////////////////
    // Balance
    document.getElementById('TrialBalance2').value = numUSD.format(Math.round(a));
    ////////////////////
    // Third Last Year
    // Current Assets
    a = parseInt(document.getElementById('TrialBalanceCash3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermInvestments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccountsReceivable3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceWorkInProgress3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInventories3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidExpenses3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonTradeReceivables3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent3').value.replaceAll(/,/g, ''));
    // Non-Current Assets
    a = a + parseInt(document.getElementById('TrialBalanceLongTermReceivables3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredCharges3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInvestments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIntangibleAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceGoodwill3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperations3').value.replaceAll(/,/g, ''));
    // Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommercialPapers3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermBorrowings3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsPayable3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt3').value.replaceAll(/,/g, ''));
    // Non-Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceLongTermDebt3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePreferredSharesLiability3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetirementBenefits3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceContingentConsideration3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRedeemableNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    // Convertible Debt
    a = a + parseInt(document.getElementById('TrialBalanceConvertibleDebt3').value.replaceAll(/,/g, ''));
    // Common Shares
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesIssued3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensation3').value.replaceAll(/,/g, ''));
    // Accumulated Other Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss3').value.replaceAll(/,/g, ''));
    // Retained Earnings
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers3').value.replaceAll(/,/g, ''));
    // Treasury Shares
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares3').value.replaceAll(/,/g, ''));
    // Employee Benefit Trust
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust3').value.replaceAll(/,/g, ''));
    // Non Controlling Interests
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers3').value.replaceAll(/,/g, ''));
    // Income
    a = a + parseInt(document.getElementById('TrialBalanceSales3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCostOfSales3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceResearchAndDevelopment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations3').value.replaceAll(/,/g, ''));
    // Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans3').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome3').value.replaceAll(/,/g, ''));
    ////////////////////
    // Balance
    document.getElementById('TrialBalance3').value = numUSD.format(Math.round(a));
    ////////////////////
    // Fourth Last Year
    // Current Assets
    a = parseInt(document.getElementById('TrialBalanceCash4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermInvestments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccountsReceivable4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceWorkInProgress4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInventories4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidExpenses4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonTradeReceivables4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent4').value.replaceAll(/,/g, ''));
    // Non-Current Assets
    a = a + parseInt(document.getElementById('TrialBalanceLongTermReceivables4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredCharges4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInvestments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIntangibleAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceGoodwill4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperations4').value.replaceAll(/,/g, ''));
    // Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommercialPapers4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermBorrowings4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsPayable4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt4').value.replaceAll(/,/g, ''));
    // Non-Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceLongTermDebt4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePreferredSharesLiability4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetirementBenefits4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceContingentConsideration4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRedeemableNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    // Convertible Debt
    a = a + parseInt(document.getElementById('TrialBalanceConvertibleDebt4').value.replaceAll(/,/g, ''));
    // Common Shares
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesIssued4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensation4').value.replaceAll(/,/g, ''));
    // Accumulated Other Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss4').value.replaceAll(/,/g, ''));
    // Retained Earnings
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers4').value.replaceAll(/,/g, ''));
    // Treasury Shares
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares4').value.replaceAll(/,/g, ''));
    // Employee Benefit Trust
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust4').value.replaceAll(/,/g, ''));
    // Non Controlling Interests
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers4').value.replaceAll(/,/g, ''));
    // Income
    a = a + parseInt(document.getElementById('TrialBalanceSales4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCostOfSales4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceResearchAndDevelopment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations4').value.replaceAll(/,/g, ''));
    // Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans4').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome4').value.replaceAll(/,/g, ''));
    ////////////////////
    // Balance
    document.getElementById('TrialBalance4').value = numUSD.format(Math.round(a));
    ////////////////////
    // Fifth Last Year
    // Current Assets
    a = parseInt(document.getElementById('TrialBalanceCash5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermInvestments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccountsReceivable5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceWorkInProgress5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInventories5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidExpenses5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonTradeReceivables5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent5').value.replaceAll(/,/g, ''));
    // Non-Current Assets
    a = a + parseInt(document.getElementById('TrialBalanceLongTermReceivables5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredCharges5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInvestments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIntangibleAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceGoodwill5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperations5').value.replaceAll(/,/g, ''));
    // Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommercialPapers5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermBorrowings5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsPayable5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt5').value.replaceAll(/,/g, ''));
    // Non-Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceLongTermDebt5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePreferredSharesLiability5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetirementBenefits5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceContingentConsideration5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRedeemableNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    // Convertible Debt
    a = a + parseInt(document.getElementById('TrialBalanceConvertibleDebt5').value.replaceAll(/,/g, ''));
    // Common Shares
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesIssued5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensation5').value.replaceAll(/,/g, ''));
    // Accumulated Other Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss5').value.replaceAll(/,/g, ''));
    // Retained Earnings
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers5').value.replaceAll(/,/g, ''));
    // Treasury Shares
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares5').value.replaceAll(/,/g, ''));
    // Employee Benefit Trust
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust5').value.replaceAll(/,/g, ''));
    // Non Controlling Interests
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers5').value.replaceAll(/,/g, ''));
    // Income
    a = a + parseInt(document.getElementById('TrialBalanceSales5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCostOfSales5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceResearchAndDevelopment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations5').value.replaceAll(/,/g, ''));
    // Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans5').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome5').value.replaceAll(/,/g, ''));
    ////////////////////
    // Balance
    document.getElementById('TrialBalance5').value = numUSD.format(Math.round(a));
    ////////////////////
    // Sixth Last Year
    // Current Assets
    a = parseInt(document.getElementById('TrialBalanceCash6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermInvestments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccountsReceivable6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceWorkInProgress6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInventories6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidExpenses6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonTradeReceivables6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePrepaidTaxAssetsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRightOfUseAssetsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsCurrent6').value.replaceAll(/,/g, ''));
    // Non-Current Assets
    a = a + parseInt(document.getElementById('TrialBalanceLongTermReceivables6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredCharges6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceInvestments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePropertyPlantAndEquipment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeaseRightOfUseAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeaseRightOfUseAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIntangibleAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceGoodwill6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRefundableTaxAssetsNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDefinedBenefitPensionAndOtherSimilarPlans6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxAssetsNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentAssets6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperations6').value.replaceAll(/,/g, ''));
    // Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceAccountsPayableAndAccruedLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeCompensationCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommercialPapers6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermBorrowings6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherCurrentLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsPayable6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShortTermPortionOfLongTermDebt6').value.replaceAll(/,/g, ''));
    // Non-Current Liabilities
    a = a + parseInt(document.getElementById('TrialBalanceLongTermDebt6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePreferredSharesLiability6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetirementBenefits6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOperatingLeasesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceFinanceLeasesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceLeaseIncentiveObligation6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceContingentConsideration6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAccruedTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDeferredRevenueAndDepositsNonCurrent6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceOtherNonCurrentLiabilities6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRedeemableNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDiscontinuedOperationsLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    // Convertible Debt
    a = a + parseInt(document.getElementById('TrialBalanceConvertibleDebt6').value.replaceAll(/,/g, ''));
    // Common Shares
    a = a + parseInt(document.getElementById('TrialBalanceCommonShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesIssued6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensation6').value.replaceAll(/,/g, ''));
    // Accumulated Other Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceAccumulatedOtherComprehensiveIncomeLoss6').value.replaceAll(/,/g, ''));
    // Retained Earnings
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsAccumulatedDeficit6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsAndDividendEquivalentsDeclared6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceShareBasedCompensationRetainedEarnings6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCommonSharesRepurchasedAndRetired6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceRetainedEarningsOthers6').value.replaceAll(/,/g, ''));
    // Treasury Shares
    a = a + parseInt(document.getElementById('TrialBalanceTreasuryShares6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalancePurchaseAndSellOfTreasuryShares6').value.replaceAll(/,/g, ''));
    // Employee Benefit Trust
    a = a + parseInt(document.getElementById('TrialBalanceEmployeeBenefitTrust6').value.replaceAll(/,/g, ''));
    // Non Controlling Interests
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceDividendsDeclaredToNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceAcquisitionOfNonControllingInterests6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonControllingInterestsOthers6').value.replaceAll(/,/g, ''));
    // Income
    a = a + parseInt(document.getElementById('TrialBalanceSales6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceCostOfSales6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceResearchAndDevelopment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceSellingGeneralAdministrativeAndMarketing6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNonOperatingIncomeExpense6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceImpairmentRestructuringAndOtherSpecialCharges6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxExpenseBenefit6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceEquityMethodInvesteesIncome6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceNetIncomeFromDiscontinuedOperations6').value.replaceAll(/,/g, ''));
    // Comprehensive Income
    a = a + parseInt(document.getElementById('TrialBalanceChangeInForeignCurrencyTranslationAdjustment6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnDerivativeInstruments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInUnrealizedGainsLossesOnInvestments6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceChangeInDefinedBenefitPensionAndOtherSimilarPlans6').value.replaceAll(/,/g, ''));
    a = a + parseInt(document.getElementById('TrialBalanceIncomeTaxOnOtherComprehensiveIncome6').value.replaceAll(/,/g, ''));
    ////////////////////
    // Balance
    document.getElementById('TrialBalance6').value = numUSD.format(Math.round(a));
};

