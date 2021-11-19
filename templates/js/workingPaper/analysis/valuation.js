
// analysis/valuation.js

function FinancialRatios() {
    document.getElementById('EntityRegistrantNameFinancialRatios').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateRatios();
    RatiosAmend();
    SharePriceUpdateRatio();
    ReturnOnEquity();
    ReturnOnAssets();
    ProfitMargin();
    OperatingMargin();
    DividendPayments();
    EarningsRetention();
    BasicEarningPower();
    DebtToEquity();
    EquityMultiplier();
    DegreeOfFinancialLeverage();
    DebtToEBITDA();
    InterestCoverage();
    FixedChargeCoverage();
    Current();
    Quick();
    InventoryTurnover();
    DaysOfInventoryOnHand();
    NumberOfDaysPayable();
    FixedAssetsTurnover();
    TotalAssetsTurnover();
    DuPont();
}

function AdditionalInformation() {
    document.getElementById('EntityRegistrantNameAdditionalInformation').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateAdditionalInformation();
    AdditionalInformationAmend();		
}

function CapitalizationRates() {
    document.getElementById('EntityRegistrantNameCapitalizationRates').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateCapitalizationRate();
    CapitalizationRateAmend();
    TotalAssetsExpectedReturn();
    BalanceDividendPaidWeightedAverageCostOfTotalAssets();
    BalanceAssetsWeightedAverageCostOfTotalAssets();
    BalanceCostOfAssetsWeightedAverageCostOfTotalAssets();
    BalanceInterestPaidWeightedAverageCostOfTotalAssets();
    BalanceTaxDeductionWeightedAverageCostOfTotalAssets();
    BalanceAssets2WeightedAverageCostOfTotalAssets();
    BalanceCostOfLiabilitiesWeightedAverageCostOfTotalAssets();
    BalanceWeightedAverageCostOfTotalAssets();
    BalanceAverageReturnOnAssets();
    BalanceDifferenceReturnOnAssetsVSAverage();
    BalanceDifferenceReturnOnAssetsPriorYearVSAverage();
    BalanceDifferenceReturnOnAssetsSecondPriorYearVSAverage();
    BalanceSquareDifferenceReturnOnAssetsVSAverage();
    BalanceSquareDifferenceReturnOnAssetsVSAveragePriorYear();
    BalanceSquareDifferenceReturnOnAssetsVSAverageSecondPriorYear();
    BalanceVariance();
    BalanceStandardDeviation();
    GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear();
    GrossMarginExpectedGrowthOnReturnOnAssetsSecondPriorYear();
    GrossMarginGrowth();
    GrossMarginGrowthPriorYear();
    ExpectedGrowthNote();
    BalanceDividendPaidCostOfTotalAssetsAccruingToCommonShareholders();
    BalanceDividendPaidToMinorityInterestCostOfTotalAssetsAccruingToCommonShareholders();
    BalanceDividendPaidToPreferredShareholdersCostOfTotalAssetsAccruingToCommonShareholders();
    CostOfTotalAssetsAccruingToCommonShareholders();
    BalanceCapitalizationRateBeforeGrowth();
    BalancePreliminaryCapitalizationRate();
    CapitalizationRateFloor();
    GrowthRelatedRiskProvision();
    BalanceCapitalizationRate();
}

function CapitalizedCashFlow() {
    document.getElementById('EntityRegistrantNameCapitalizedCashFlow').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateCapitalizedCashFlow();
    CapitalizedCashFlowAmend();
    OperatingIncomeCCF();
    DepreciationDepletionAndAmortizationCCF();
    AnnualReinvestmentOfMaintenanceCCF();
    TaxesCCF();
    EquityMethodInvesteesIncomeCCF();
    BalanceNormalizedOperatingCashFlowCCF();
    BalanceNormalizedWeightedOperatingCashFlow();
    BalanceCharacteristicCashFlow();
    BalanceCapitalizationRateCCF();
    BalanceCapitalizedCharacteristicCashFlowCCF();
    BalanceExcessWorkingCapitalCCF();
    BalanceInvestmentsExcessAssetsCCF();
    BalanceDiscontinuedOperationsExcessAssetsCCF();
    BalancePresentvalueOfTaxProtectionCCF();
    BalanceBusinessValueCCF();
    BalanceLongTermDebtAndLeaseObligation();
    BalanceValueOfAllCategoryOfSharesCCF();
    BalanceCommonSharesValueCCF();
    BalanceNetAssetsCCF();
    BalanceGoodwillFairValueCCF();
}

function CapitalizedIncome() {
    document.getElementById('EntityRegistrantNameCapitalizedIncome').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateCapitalizedIncome();
    CapitalizedIncomeAmend();
    OperatingIncomeCI();
    TaxesCI();
    EquityMethodInvesteesIncomeCI();
    BalanceNormalizedCashFlowBeforeTaxesCI();
    BalanceNormalizedWeightedCashFlowBeforeTaxes();
    BalanceCharacteristicIncomeBeforeInterestAfterTaxes();
    BalanceCapitalizationRateCI();
    BalanceCapitalizedCharacteristicCashFlowCI();
    BalanceExcessWorkingCapitalCI();
    BalanceInvestmentsExcessAssetsCI();
    BalanceDiscontinuedOperationsExcessAssetsCI();
    UnrealizedCapitalGainOnRealEstateNetOfTaxesCI();
    BalancePresentvalueOfTaxProtectionCI();
    BalanceBusinessValueCI();
    BalanceLongTermDebtAndLeaseObligationCI();
    BalanceValueOfAllCategoryOfSharesCI();
    BalanceCommonSharesValueCI();
    BalanceShareholdersEquityCI();
    BalanceNetAssetsCI();
    BalanceGoodwillFairValueCI();
}

function IntrinsicValues() {
    document.getElementById('EntityRegistrantNameIntrinsicValues').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateIntrinsicValues();
    IntrinsicValuesAmend();
    BalanceIntrinsicValuesCCF();
    BalanceGoowillFairValueCCF();
    BalanceIntrinsicValuesCI();
    BalanceGoowillFairValueCI();		
}

function Opinion() {
    document.getElementById('EntityRegistrantNameOpinion').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateSummary();
    SummaryAmend();
    SharePriceUpdate();
    BalanceIntrinsicValues();
    BalanceMarketCapitalization();
    PriceEarnings();
    MarketToBook();
    BalanceClock();
    CommonShareIntrinsicValuePerUnitAndPricePerUnit();	
}

function Graph() {
    document.getElementById('EntityRegistrantNameGraph').innerHTML = document.getElementById('EntityRegistrantName1').value;
    LineChart();
    Puck();
}