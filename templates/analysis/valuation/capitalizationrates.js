
// analysis/valuation/capitalizationrates.js

function DateCapitalizationRate(DateCapitalizationRate) {
    document.getElementById('DateCapitalizationRate1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateCapitalizationRate2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateCapitalizationRate3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateCapitalizationRate4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateCapitalizationRate5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateCapitalizationRate6').innerHTML = document.getElementById('ContextDate6').value;
};

function CapitalizationRateAmend(CapitalizationRateAmend) {
    document.getElementById('CapitalizationRateAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('CapitalizationRateAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('CapitalizationRateAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('CapitalizationRateAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('CapitalizationRateAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('CapitalizationRateAmend6').innerHTML = document.getElementById('Amend6').value;
};

function FilingsHrefCapitalizationRate() {
    document.getElementById('CapitalizationRateFilings1').href = document.getElementById('Filings1').href
    document.getElementById('CapitalizationRateFilings2').href = document.getElementById('Filings2').href
    document.getElementById('CapitalizationRateFilings3').href = document.getElementById('Filings3').href
    document.getElementById('CapitalizationRateFilings4').href = document.getElementById('Filings4').href
    document.getElementById('CapitalizationRateFilings5').href = document.getElementById('Filings5').href
    document.getElementById('CapitalizationRateFilings6').href = document.getElementById('Filings6').href
};

function TotalAssetsExpectedReturn(TotalAssetsExpectedReturn) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    // Column 1
    a = parseFloat(document.getElementById('TotalAssetsExpectedReturnAI1').value);
    document.getElementById('TotalAssetsExpectedReturn1').value = numUSD.format(a / 100);
    // Column 2
    a = parseFloat(document.getElementById('TotalAssetsExpectedReturnAI2').value);
    document.getElementById('TotalAssetsExpectedReturn2').value = numUSD.format(a / 100);
    // Column 3
    a = parseFloat(document.getElementById('TotalAssetsExpectedReturnAI3').value);
    document.getElementById('TotalAssetsExpectedReturn3').value = numUSD.format(a / 100);
    // Column 4
    a = parseFloat(document.getElementById('TotalAssetsExpectedReturnAI4').value);
    document.getElementById('TotalAssetsExpectedReturn4').value = numUSD.format(a / 100);
};

function BalanceCapitalizationRateBeforeGrowth(BalanceCapitalizationRateBeforeGrowth) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    // Column 1
    a = parseFloat(document.getElementById('TotalAssetsExpectedReturn1').value);
    a = a + parseFloat(document.getElementById('WeightedAverageCostOfTotalAssets1').value);
    a = a + parseFloat(document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssets1').value);
    a = a + parseFloat(document.getElementById('OtherRateAddition1').value);
    document.getElementById('CapitalizationRateBeforeGrowth1').value = numUSD.format(a / 100);
    // Column 2
    a = parseFloat(document.getElementById('TotalAssetsExpectedReturn2').value);
    a = a + parseFloat(document.getElementById('WeightedAverageCostOfTotalAssets2').value);
    a = a + parseFloat(document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssets2').value);
    a = a + parseFloat(document.getElementById('OtherRateAddition2').value);
    document.getElementById('CapitalizationRateBeforeGrowth2').value = numUSD.format(a / 100);
    // Column 3
    a = parseFloat(document.getElementById('TotalAssetsExpectedReturn3').value);
    a = a + parseFloat(document.getElementById('WeightedAverageCostOfTotalAssets3').value);
    a = a + parseFloat(document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssets3').value);
    a = a + parseFloat(document.getElementById('OtherRateAddition3').value);
    document.getElementById('CapitalizationRateBeforeGrowth3').value = numUSD.format(a / 100);
    // Column 4
    a = parseFloat(document.getElementById('TotalAssetsExpectedReturn4').value);
    a = a + parseFloat(document.getElementById('WeightedAverageCostOfTotalAssets4').value);
    a = a + parseFloat(document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssets4').value);
    a = a + parseFloat(document.getElementById('OtherRateAddition4').value);
    document.getElementById('CapitalizationRateBeforeGrowth4').value = numUSD.format(a / 100);
};

function BalancePreliminaryCapitalizationRate(BalancePreliminaryCapitalizationRate) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    // Column 1
    a = parseFloat(document.getElementById('CapitalizationRateBeforeGrowth1').value)/100;
    a = a + parseFloat(document.getElementById('CostOfTotalAssetsAccruingToCommonShareholders1').value)/100;
    a = a + parseFloat(document.getElementById('ExpectedGrowth1').value)/100;
    a = a + parseFloat(document.getElementById('OtherRateSubstraction1').value)/100;
    document.getElementById('PreliminaryCapitalizationRate1').value = numUSD.format(a);
    document.getElementById('CapitalizationRateBeforeProvision1').value = numUSD.format(a);
    // Column 2
    a = parseFloat(document.getElementById('CapitalizationRateBeforeGrowth2').value)/100;
    a = a + parseFloat(document.getElementById('CostOfTotalAssetsAccruingToCommonShareholders2').value)/100;
    a = a + parseFloat(document.getElementById('ExpectedGrowth2').value)/100;
    a = a + parseFloat(document.getElementById('OtherRateSubstraction2').value)/100;
    document.getElementById('PreliminaryCapitalizationRate2').value = numUSD.format(Math.max(a));
    document.getElementById('CapitalizationRateBeforeProvision2').value = numUSD.format(a);
    // Column 3
    a = parseFloat(document.getElementById('CapitalizationRateBeforeGrowth3').value)/100;
    a = a + parseFloat(document.getElementById('CostOfTotalAssetsAccruingToCommonShareholders3').value)/100;
    a = a + parseFloat(document.getElementById('ExpectedGrowth3').value)/100;
    a = a + parseFloat(document.getElementById('OtherRateSubstraction3').value)/100;
    document.getElementById('PreliminaryCapitalizationRate3').value = numUSD.format(Math.max(a));
    document.getElementById('CapitalizationRateBeforeProvision3').value = numUSD.format(a);
    // Column 4
    a = parseFloat(document.getElementById('CapitalizationRateBeforeGrowth4').value)/100;
    a = a + parseFloat(document.getElementById('CostOfTotalAssetsAccruingToCommonShareholders4').value)/100;
    a = a + parseFloat(document.getElementById('ExpectedGrowth4').value)/100;
    a = a + parseFloat(document.getElementById('OtherRateSubstraction4').value)/100;
    document.getElementById('PreliminaryCapitalizationRate4').value = numUSD.format(Math.max(a));
    document.getElementById('CapitalizationRateBeforeProvision4').value = numUSD.format(a);
};

function BalanceCapitalizationRate(BalanceCapitalizationRate) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    // Column 1
    a = parseFloat(document.getElementById('PreliminaryCapitalizationRate1').value)/100;
    a = a + parseFloat(document.getElementById('GrowthRelatedRiskProvision1').value)/100;
    document.getElementById('CapitalizationRate1').value = numUSD.format(a);
    // Column 2
    a = parseFloat(document.getElementById('PreliminaryCapitalizationRate2').value)/100;
    a = a + parseFloat(document.getElementById('GrowthRelatedRiskProvision2').value)/100;
    document.getElementById('CapitalizationRate2').value = numUSD.format(Math.max(a));
    // Column 3
    a = parseFloat(document.getElementById('PreliminaryCapitalizationRate3').value)/100;
    a = a + parseFloat(document.getElementById('GrowthRelatedRiskProvision3').value)/100;
    document.getElementById('CapitalizationRate3').value = numUSD.format(Math.max(a));
    // Column 4
    a = parseFloat(document.getElementById('PreliminaryCapitalizationRate4').value)/100;
    a = a + parseFloat(document.getElementById('GrowthRelatedRiskProvision4').value)/100;
    document.getElementById('CapitalizationRate4').value = numUSD.format(Math.max(a));
};

function BalanceDividendPaidWeightedAverageCostOfTotalAssets(BalanceDividendPaidWeightedAverageCostOfTotalAssets) {
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // last year
    a = -Math.round(parseInt(document.getElementById('PaymentsOfDividends1').value.replaceAll(/,/g, '')))
    a = a - Math.round(parseInt(document.getElementById('PaymentsOfDividends2').value.replaceAll(/,/g, '')))
    a = a - Math.round(parseInt(document.getElementById('PaymentsOfDividends3').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidWeightedAverageCostOfTotalAssets1').value = numUSD.format(a);
    // second last year
    a = -Math.round(parseInt(document.getElementById('PaymentsOfDividends2').value.replaceAll(/,/g, '')))
    a = a - Math.round(parseInt(document.getElementById('PaymentsOfDividends3').value.replaceAll(/,/g, '')))
    a = a - Math.round(parseInt(document.getElementById('PaymentsOfDividends4').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidWeightedAverageCostOfTotalAssets2').value = numUSD.format(a);
    // third last year
    a = -Math.round(parseInt(document.getElementById('PaymentsOfDividends3').value.replaceAll(/,/g, '')))
    a = a - Math.round(parseInt(document.getElementById('PaymentsOfDividends4').value.replaceAll(/,/g, '')))
    a = a - Math.round(parseInt(document.getElementById('PaymentsOfDividends5').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidWeightedAverageCostOfTotalAssets3').value = numUSD.format(a);
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('PaymentsOfDividends4').value.replaceAll(/,/g, '')))
    a = a - Math.round(parseInt(document.getElementById('PaymentsOfDividends5').value.replaceAll(/,/g, '')))
    a = a - Math.round(parseInt(document.getElementById('PaymentsOfDividends6').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidWeightedAverageCostOfTotalAssets4').value = numUSD.format(a);
};

function BalanceAssetsWeightedAverageCostOfTotalAssets(BalanceAssetsWeightedAverageCostOfTotalAssets) {
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "percent"
    })
    // last year
    a = Math.round(parseInt(document.getElementById('TotalAssets1').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TotalAssets2').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TotalAssets3').value.replaceAll(/,/g, '')))
    document.getElementById('AssetsWeightedAverageCostOfTotalAssets1').value = numUSD.format(a);
    // second last year
    a = Math.round(parseInt(document.getElementById('TotalAssets2').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TotalAssets3').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TotalAssets4').value.replaceAll(/,/g, '')))
    document.getElementById('AssetsWeightedAverageCostOfTotalAssets2').value = numUSD.format(a);
    // third last year
    a = Math.round(parseInt(document.getElementById('TotalAssets3').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TotalAssets4').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TotalAssets5').value.replaceAll(/,/g, '')))
    document.getElementById('AssetsWeightedAverageCostOfTotalAssets3').value = numUSD.format(a);
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TotalAssets4').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TotalAssets5').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TotalAssets6').value.replaceAll(/,/g, '')))
    document.getElementById('AssetsWeightedAverageCostOfTotalAssets4').value = numUSD.format(a);
};

function BalanceCostOfAssetsWeightedAverageCostOfTotalAssets(BalanceCostOfAssetsWeightedAverageCostOfTotalAssets) {
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('DividendPaidWeightedAverageCostOfTotalAssets1').value.replaceAll(/,/g, '')));
    a = a / Math.round(parseInt(document.getElementById('AssetsWeightedAverageCostOfTotalAssets1').value.replaceAll(/,/g, '')));
    document.getElementById('CostOfAssetsWeightedAverageCostOfTotalAssets1').value = numUSD.format(a);
    document.getElementById('CostOfAssetCostOfTotalAssetAccruingToCommonShareholders1').value = numUSD.format(a);
    // second last year
    a = Math.round(parseInt(document.getElementById('DividendPaidWeightedAverageCostOfTotalAssets2').value.replaceAll(/,/g, '')));
    a = a / Math.round(parseInt(document.getElementById('AssetsWeightedAverageCostOfTotalAssets2').value.replaceAll(/,/g, '')));
    document.getElementById('CostOfAssetsWeightedAverageCostOfTotalAssets2').value = numUSD.format(a);
    document.getElementById('CostOfAssetCostOfTotalAssetAccruingToCommonShareholders2').value = numUSD.format(a);
    // third last year
    a = Math.round(parseInt(document.getElementById('DividendPaidWeightedAverageCostOfTotalAssets3').value.replaceAll(/,/g, '')));
    a = a / Math.round(parseInt(document.getElementById('AssetsWeightedAverageCostOfTotalAssets3').value.replaceAll(/,/g, '')));
    document.getElementById('CostOfAssetsWeightedAverageCostOfTotalAssets3').value = numUSD.format(a);
    document.getElementById('CostOfAssetCostOfTotalAssetAccruingToCommonShareholders3').value = numUSD.format(a);
    // fourth last year
    a = Math.round(parseInt(document.getElementById('DividendPaidWeightedAverageCostOfTotalAssets4').value.replaceAll(/,/g, '')));
    a = a / Math.round(parseInt(document.getElementById('AssetsWeightedAverageCostOfTotalAssets4').value.replaceAll(/,/g, '')));
    document.getElementById('CostOfAssetsWeightedAverageCostOfTotalAssets4').value = numUSD.format(a);
    document.getElementById('CostOfAssetCostOfTotalAssetAccruingToCommonShareholders4').value = numUSD.format(a);
};

function BalanceInterestPaidWeightedAverageCostOfTotalAssets(BalanceInterestPaidWeightedAverageCostOfTotalAssets) { 
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // last year
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    Debt1 = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    //
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    Debt2 = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    //
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    Debt3 = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    //
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    Debt4 = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    //
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    Debt5 = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    //
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    Debt6 = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    //
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate1').value) / 100;
    Interest = (Debt1 + Debt2 + Debt3)/3 * InterestRate;
    document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets1').value = numUSD.format(Math.round(Interest)) ;
    // second last year
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate2').value) / 100;
    Interest = (Debt2 + Debt3 + Debt4)/3 * InterestRate;
    document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets2').value = numUSD.format(Math.round(Interest)) ;
    // third last year
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate3').value) / 100;
    Interest = (Debt3 + Debt4 + Debt5)/3 * InterestRate;
    document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets3').value = numUSD.format(Math.round(Interest)) ;
    // fourth last year
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate4').value) / 100;
    Interest = (Debt4 + Debt5 + Debt6)/3 * InterestRate;
    document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets4').value = numUSD.format(Math.round(Interest)) ;
};

function BalanceTaxDeductionWeightedAverageCostOfTotalAssets(BalanceTaxDeductionWeightedAverageCostOfTotalAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets1').value.replaceAll(/,/g, '')))
    a = -a * parseFloat(document.getElementById('TheoricalTaxRate1').value) / 100
    document.getElementById('TaxDeductionWeightedAverageCostOfTotalAssets1').value = numUSD.format(Math.round(a));
    // second last year
    a = Math.round(parseInt(document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets2').value.replaceAll(/,/g, '')))
    a = -a * parseFloat(document.getElementById('TheoricalTaxRate2').value) / 100
    document.getElementById('TaxDeductionWeightedAverageCostOfTotalAssets2').value = numUSD.format(Math.round(a));
    // third last year
    a = Math.round(parseInt(document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets3').value.replaceAll(/,/g, '')))
    a = -a * parseFloat(document.getElementById('TheoricalTaxRate3').value) / 100
    document.getElementById('TaxDeductionWeightedAverageCostOfTotalAssets3').value = numUSD.format(Math.round(a));
    // fourth last year
    a = Math.round(parseInt(document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets4').value.replaceAll(/,/g, '')))
    a = -a * parseFloat(document.getElementById('TheoricalTaxRate4').value) / 100
    document.getElementById('TaxDeductionWeightedAverageCostOfTotalAssets4').value = numUSD.format(Math.round(a));
};

function BalanceAssets2WeightedAverageCostOfTotalAssets(BalanceAssets2WeightedAverageCostOfTotalAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // last year
    a = Math.round(parseInt(document.getElementById('TotalAssets1').value.replaceAll(/,/g, '')))
    document.getElementById('Assets2WeightedAverageCostOfTotalAssets1').value = numUSD.format(a);
    // second last year
    a = Math.round(parseInt(document.getElementById('TotalAssets2').value.replaceAll(/,/g, '')))
    document.getElementById('Assets2WeightedAverageCostOfTotalAssets2').value = numUSD.format(a);
    // third last year
    a = Math.round(parseInt(document.getElementById('TotalAssets3').value.replaceAll(/,/g, '')))
    document.getElementById('Assets2WeightedAverageCostOfTotalAssets3').value = numUSD.format(a);
    // fourth last year
    a = Math.round(parseInt(document.getElementById('TotalAssets4').value.replaceAll(/,/g, '')))
    document.getElementById('Assets2WeightedAverageCostOfTotalAssets4').value = numUSD.format(a);
};

function BalanceCostOfLiabilitiesWeightedAverageCostOfTotalAssets(BalanceCostOfLiabilitiesWeightedAverageCostOfTotalAssets) {
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    z = 0
    // last year
    a = Math.round(parseInt(document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets1').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TaxDeductionWeightedAverageCostOfTotalAssets1').value.replaceAll(/,/g, '')))
    a = a / Math.round(parseInt(document.getElementById('Assets2WeightedAverageCostOfTotalAssets1').value.replaceAll(/,/g, '')))
    document.getElementById('CostOfLiabilitiesWeightedAverageCostOfTotalAssets1').value = numUSD.format(a);
    // second last year
    a = Math.round(parseInt(document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets2').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TaxDeductionWeightedAverageCostOfTotalAssets2').value.replaceAll(/,/g, '')))
    a = a / Math.round(parseInt(document.getElementById('Assets2WeightedAverageCostOfTotalAssets2').value.replaceAll(/,/g, '')))
    document.getElementById('CostOfLiabilitiesWeightedAverageCostOfTotalAssets2').value = numUSD.format(a);
    // third last year
    a = Math.round(parseInt(document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets3').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TaxDeductionWeightedAverageCostOfTotalAssets3').value.replaceAll(/,/g, '')))
    a = a / Math.round(parseInt(document.getElementById('Assets2WeightedAverageCostOfTotalAssets3').value.replaceAll(/,/g, '')))
    document.getElementById('CostOfLiabilitiesWeightedAverageCostOfTotalAssets3').value = numUSD.format(a);
    // fourth last year
    a = Math.round(parseInt(document.getElementById('InterestPaidWeightedAverageCostOfTotalAssets4').value.replaceAll(/,/g, '')))
    a = a + Math.round(parseInt(document.getElementById('TaxDeductionWeightedAverageCostOfTotalAssets4').value.replaceAll(/,/g, '')))
    a = a / Math.round(parseInt(document.getElementById('Assets2WeightedAverageCostOfTotalAssets4').value.replaceAll(/,/g, '')))
    document.getElementById('CostOfLiabilitiesWeightedAverageCostOfTotalAssets4').value = numUSD.format(a);
};

function BalanceWeightedAverageCostOfTotalAssets(BalanceWeightedAverageCostOfTotalAssets) {
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    z = 0
    // last year
    a = parseFloat(document.getElementById('CostOfAssetsWeightedAverageCostOfTotalAssets1').value) / 100;
    a = a + parseFloat(document.getElementById('CostOfLiabilitiesWeightedAverageCostOfTotalAssets1').value) / 100;
    document.getElementById('WeightedAverageCostOfTotalAssetsNote1').value = numUSD.format(a);
    document.getElementById('WeightedAverageCostOfTotalAssets1').value = numUSD.format(a);
    // second last year
    a = parseFloat(document.getElementById('CostOfAssetsWeightedAverageCostOfTotalAssets2').value) / 100;
    a = a + parseFloat(document.getElementById('CostOfLiabilitiesWeightedAverageCostOfTotalAssets2').value) / 100;
    document.getElementById('WeightedAverageCostOfTotalAssetsNote2').value = numUSD.format(a);
    document.getElementById('WeightedAverageCostOfTotalAssets2').value = numUSD.format(a);
    // third last year
    a = parseFloat(document.getElementById('CostOfAssetsWeightedAverageCostOfTotalAssets3').value) / 100;
    a = a + parseFloat(document.getElementById('CostOfLiabilitiesWeightedAverageCostOfTotalAssets3').value) / 100;
    document.getElementById('WeightedAverageCostOfTotalAssetsNote3').value = numUSD.format(a);
    document.getElementById('WeightedAverageCostOfTotalAssets3').value = numUSD.format(a);
    // fourth last year
    a = parseFloat(document.getElementById('CostOfAssetsWeightedAverageCostOfTotalAssets4').value) / 100;
    a = a + parseFloat(document.getElementById('CostOfLiabilitiesWeightedAverageCostOfTotalAssets4').value) / 100;
    document.getElementById('WeightedAverageCostOfTotalAssetsNote4').value = numUSD.format(a);
    document.getElementById('WeightedAverageCostOfTotalAssets4').value = numUSD.format(a);
};

function BalanceAverageReturnOnAssets(BalanceAverageReturnOnAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    // last year
    a = parseFloat(document.getElementById('ReturnOnAssetsVolatility1').value);
    a = a + parseFloat(document.getElementById('ReturnOnAssetsPriorYearVolatility1').value);
    a = a + parseFloat(document.getElementById('ReturnOnAssetsSecondPriorYearVolatility1').value);
    document.getElementById('AverageReturnOnAssetsVolatility1').value = numUSD.format(a / 300);
    // second last year
    a = parseFloat(document.getElementById('ReturnOnAssetsVolatility2').value);
    a = a + parseFloat(document.getElementById('ReturnOnAssetsPriorYearVolatility2').value);
    a = a + parseFloat(document.getElementById('ReturnOnAssetsSecondPriorYearVolatility2').value);
    document.getElementById('AverageReturnOnAssetsVolatility2').value = numUSD.format(a / 300);
    // third last year
    a = parseFloat(document.getElementById('ReturnOnAssetsVolatility3').value);
    a = a + parseFloat(document.getElementById('ReturnOnAssetsPriorYearVolatility3').value);
    a = a + parseFloat(document.getElementById('ReturnOnAssetsSecondPriorYearVolatility3').value);
    document.getElementById('AverageReturnOnAssetsVolatility3').value = numUSD.format(a / 300);
    // fourth last year
    a = parseFloat(document.getElementById('ReturnOnAssetsVolatility4').value);
    a = a + parseFloat(document.getElementById('ReturnOnAssetsPriorYearVolatility4').value);
    a = a + parseFloat(document.getElementById('ReturnOnAssetsSecondPriorYearVolatility4').value);
    document.getElementById('AverageReturnOnAssetsVolatility4').value = numUSD.format(a / 300);
};

function BalanceDifferenceReturnOnAssetsVSAverage(BalanceDifferenceReturnOnAssetsVSAverage) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    // last year
    a = parseFloat(document.getElementById('ReturnOnAssetsVolatility1').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility1').value);
    document.getElementById('DifferenceReturnOnAssetsVSAverage1').value = numUSD.format(a / 100);
    // second last year
    a = parseFloat(document.getElementById('ReturnOnAssetsVolatility2').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility2').value);
    document.getElementById('DifferenceReturnOnAssetsVSAverage2').value = numUSD.format(a / 100);
    // third last year
    a = parseFloat(document.getElementById('ReturnOnAssetsVolatility3').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility3').value);
    document.getElementById('DifferenceReturnOnAssetsVSAverage3').value = numUSD.format(a / 100);
    // fourth last year
    a = parseFloat(document.getElementById('ReturnOnAssetsVolatility4').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility4').value);
    document.getElementById('DifferenceReturnOnAssetsVSAverage4').value = numUSD.format(a / 100);
};

function BalanceDifferenceReturnOnAssetsPriorYearVSAverage(BalanceDifferenceReturnOnAssetsPriorYearVSAverage) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    // last year
    a = parseFloat(document.getElementById('ReturnOnAssetsPriorYearVolatility1').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility1').value);
    document.getElementById('DifferenceReturnOnAssetsPriorYearVSAverage1').value = numUSD.format(a / 100);
    // second last year
    a = parseFloat(document.getElementById('ReturnOnAssetsPriorYearVolatility2').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility2').value);
    document.getElementById('DifferenceReturnOnAssetsPriorYearVSAverage2').value = numUSD.format(a / 100);
    // third last year
    a = parseFloat(document.getElementById('ReturnOnAssetsPriorYearVolatility3').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility3').value);
    document.getElementById('DifferenceReturnOnAssetsPriorYearVSAverage3').value = numUSD.format(a / 100);
    // fourth last year
    a = parseFloat(document.getElementById('ReturnOnAssetsPriorYearVolatility4').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility4').value);
    document.getElementById('DifferenceReturnOnAssetsPriorYearVSAverage4').value = numUSD.format(a / 100);
};

function BalanceDifferenceReturnOnAssetsSecondPriorYearVSAverage(BalanceDifferenceReturnOnAssetsSecondPriorYearVSAverage) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    // last year
    a = parseFloat(document.getElementById('ReturnOnAssetsSecondPriorYearVolatility1').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility1').value);
    document.getElementById('DifferenceReturnOnAssetsSecondPriorYearVSAverage1').value = numUSD.format(a / 100);
    // second last year
    a = parseFloat(document.getElementById('ReturnOnAssetsSecondPriorYearVolatility2').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility2').value);
    document.getElementById('DifferenceReturnOnAssetsSecondPriorYearVSAverage2').value = numUSD.format(a / 100);
    // third last year
    a = parseFloat(document.getElementById('ReturnOnAssetsSecondPriorYearVolatility3').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility3').value);
    document.getElementById('DifferenceReturnOnAssetsSecondPriorYearVSAverage3').value = numUSD.format(a / 100);
    // fourth last year
    a = parseFloat(document.getElementById('ReturnOnAssetsSecondPriorYearVolatility4').value);
    a = a - parseFloat(document.getElementById('AverageReturnOnAssetsVolatility4').value);
    document.getElementById('DifferenceReturnOnAssetsSecondPriorYearVSAverage4').value = numUSD.format(a / 100);
};

function BalanceSquareDifferenceReturnOnAssetsVSAverage(BalanceSquareDifferenceReturnOnAssetsVSAverage) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    // last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsVSAverage1').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAverage1').value = numUSD.format(a / 100);
    // second last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsVSAverage2').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAverage2').value = numUSD.format(a / 100);
    // third last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsVSAverage3').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAverage3').value = numUSD.format(a / 100);
    // fourth last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsVSAverage4').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAverage4').value = numUSD.format(a / 100);
};

function BalanceSquareDifferenceReturnOnAssetsVSAveragePriorYear(BalanceSquareDifferenceReturnOnAssetsVSAveragePriorYear) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    // last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsPriorYearVSAverage1').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAveragePriorYear1').value = numUSD.format(a / 100);
    // second last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsPriorYearVSAverage2').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAveragePriorYear2').value = numUSD.format(a / 100);
    // third last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsPriorYearVSAverage3').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAveragePriorYear3').value = numUSD.format(a / 100);
    // fourth last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsPriorYearVSAverage4').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAveragePriorYear4').value = numUSD.format(a / 100);
};

function BalanceSquareDifferenceReturnOnAssetsVSAverageSecondPriorYear(BalanceSquareDifferenceReturnOnAssetsVSAverageSecondPriorYear) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    // last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsSecondPriorYearVSAverage1').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAverageSecondPriorYear1').value = numUSD.format(a / 100);
    // second last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsSecondPriorYearVSAverage2').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAverageSecondPriorYear2').value = numUSD.format(a / 100);
    // third last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsSecondPriorYearVSAverage3').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAverageSecondPriorYear3').value = numUSD.format(a / 100);
    // fourth last year
    a = parseFloat(document.getElementById('DifferenceReturnOnAssetsSecondPriorYearVSAverage4').value);
    a = Math.pow(a, 2)
    document.getElementById('SquareDifferenceReturnOnAssetsVSAverageSecondPriorYear4').value = numUSD.format(a / 100);
};

function BalanceVariance(BalanceVariance) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    // last year
    a = parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAverage1').value);
    a = a + parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAveragePriorYear1').value);
    a = a + parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAverageSecondPriorYear1').value);
    document.getElementById('Variance1').value = numUSD.format(a / 300);
    // second last year
    a = parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAverage2').value);
    a = a + parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAveragePriorYear2').value);
    a = a + parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAverageSecondPriorYear2').value);
    document.getElementById('Variance2').value = numUSD.format(a / 300);
    // third last year
    a = parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAverage3').value);
    a = a + parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAveragePriorYear3').value);
    a = a + parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAverageSecondPriorYear3').value);
    document.getElementById('Variance3').value = numUSD.format(a / 300);
    // fourth last year
    a = parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAverage4').value);
    a = a + parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAveragePriorYear4').value);
    a = a + parseFloat(document.getElementById('SquareDifferenceReturnOnAssetsVSAverageSecondPriorYear4').value);
    document.getElementById('Variance4').value = numUSD.format(a / 300);
};

function BalanceStandardDeviation(BalanceStandardDeviation) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    // last year
    a = parseFloat(document.getElementById('Variance1').value);
    a = Math.pow(a, 0.5)
    document.getElementById('StandardDeviation1').value = numUSD.format(a / 100);
    document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssets1').value = numUSD.format(a / 200);
    document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssetsNote1').value = numUSD.format(a / 200);
    // second last year
    a = parseFloat(document.getElementById('Variance2').value);
    a = Math.pow(a, 0.5)
    document.getElementById('StandardDeviation2').value = numUSD.format(a / 100);
    document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssets2').value = numUSD.format(a / 200);
    document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssetsNote2').value = numUSD.format(a / 200);
    // third last year
    a = parseFloat(document.getElementById('Variance3').value);
    a = Math.pow(a, 0.5)
    document.getElementById('StandardDeviation3').value = numUSD.format(a / 100);
    document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssets3').value = numUSD.format(a / 200);
    document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssetsNote3').value = numUSD.format(a / 200);
    // fourth last year
    a = parseFloat(document.getElementById('Variance4').value);
    a = Math.pow(a, 0.5)
    document.getElementById('StandardDeviation4').value = numUSD.format(a / 100);
    document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssets4').value = numUSD.format(a / 200);
    document.getElementById('RiskRelatedToVolatilityOfReturnOnTotalAssetsNote4').value = numUSD.format(a / 200);
};

function GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear(GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Column 1
    a = parseInt(document.getElementById('GrossMargin2').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear1').value = numUSD.format(a);
    // Column 2
    a = parseInt(document.getElementById('GrossMargin3').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear2').value = numUSD.format(a);
    // Column 3
    a = parseInt(document.getElementById('GrossMargin4').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear3').value = numUSD.format(a);
    // Column 4
    a = parseInt(document.getElementById('GrossMargin5').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear4').value = numUSD.format(a);
};

function GrossMarginExpectedGrowthOnReturnOnAssetsSecondPriorYear(GrossMarginExpectedGrowthOnReturnOnAssetsSecondPriorYear) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    });
    // Column 1
    a = parseInt(document.getElementById('GrossMargin3').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsSecondPriorYear1').value = numUSD.format(a);
    // Column 2
    a = parseInt(document.getElementById('GrossMargin4').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsSecondPriorYear2').value = numUSD.format(a);
    // Column 3
    a = parseInt(document.getElementById('GrossMargin5').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsSecondPriorYear3').value = numUSD.format(a);
    // Column 4
    a = parseInt(document.getElementById('GrossMargin6').value.replaceAll(/,/g, ''));
    document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsSecondPriorYear4').value = numUSD.format(a);
};

function GrossMarginGrowth(GrossMarginGrowth) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    })
    // Column 1
    a = parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssets1').value.replaceAll(/,/g, ''));
    b = a - parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear1').value.replaceAll(/,/g, ''));
    a = b / a
    document.getElementById('GrossMarginGrowth1').value = numUSD.format(a);
    // Column 2
    a = parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssets2').value.replaceAll(/,/g, ''));
    b = a - parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear2').value.replaceAll(/,/g, ''));
    a = b / a
    document.getElementById('GrossMarginGrowth2').value = numUSD.format(a);
    // Column 3
    a = parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssets3').value.replaceAll(/,/g, ''));
    b = a - parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear3').value.replaceAll(/,/g, ''));
    a = b / a
    document.getElementById('GrossMarginGrowth3').value = numUSD.format(a);
    // Column 4
    a = parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssets4').value.replaceAll(/,/g, ''));
    b = a - parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear4').value.replaceAll(/,/g, ''));
    a = b / a
    document.getElementById('GrossMarginGrowth4').value = numUSD.format(a);
};

function GrossMarginGrowthPriorYear(GrossMarginGrowthPriorYear) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    })
    // Column 1
    a = parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear1').value.replaceAll(/,/g, ''));
    b = a - parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsSecondPriorYear1').value.replaceAll(/,/g, ''));
    a = b / a
    document.getElementById('GrossMarginGrowthPriorYear1').value = numUSD.format(a);
    // Column 2
    a = parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear2').value.replaceAll(/,/g, ''));
    b = a - parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsSecondPriorYear2').value.replaceAll(/,/g, ''));
    a = b / a
    document.getElementById('GrossMarginGrowthPriorYear2').value = numUSD.format(a);
    // Column 3
    a = parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear3').value.replaceAll(/,/g, ''));
    b = a - parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsSecondPriorYear3').value.replaceAll(/,/g, ''));
    a = b / a
    document.getElementById('GrossMarginGrowthPriorYear3').value = numUSD.format(a);
    // Column 4
    a = parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsPriorYear4').value.replaceAll(/,/g, ''));
    b = a - parseInt(document.getElementById('GrossMarginExpectedGrowthOnReturnOnAssetsSecondPriorYear4').value.replaceAll(/,/g, ''));
    a = b / a
    document.getElementById('GrossMarginGrowthPriorYear4').value = numUSD.format(a);
};

function ExpectedGrowthNote(ExpectedGrowthNote) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    // Column 1
    a = parseFloat(document.getElementById('GrossMarginGrowth1').value);
    a = a + parseFloat(document.getElementById('GrossMarginGrowthPriorYear1').value);
    document.getElementById('ExpectedGrowthNote1').value = numUSD.format(a / 200);
    document.getElementById('ExpectedGrowth1').value = numUSD.format(-a / 200);
    // Column 2
    a = parseFloat(document.getElementById('GrossMarginGrowth2').value);
    a = a + parseFloat(document.getElementById('GrossMarginGrowthPriorYear2').value);
    document.getElementById('ExpectedGrowthNote2').value = numUSD.format(a / 200);
    document.getElementById('ExpectedGrowth2').value = numUSD.format(-a / 200);
    // Column 3
    a = parseFloat(document.getElementById('GrossMarginGrowth3').value);
    a = a + parseFloat(document.getElementById('GrossMarginGrowthPriorYear3').value);
    document.getElementById('ExpectedGrowthNote3').value = numUSD.format(a / 200);
    document.getElementById('ExpectedGrowth3').value = numUSD.format(-a / 200);
    // Column 4
    a = parseFloat(document.getElementById('GrossMarginGrowth4').value);
    a = a + parseFloat(document.getElementById('GrossMarginGrowthPriorYear4').value);
    document.getElementById('ExpectedGrowthNote4').value = numUSD.format(a / 200);
    document.getElementById('ExpectedGrowth4').value = numUSD.format(-a / 200);
};

function BalanceDividendPaidCostOfTotalAssetsAccruingToCommonShareholders(BalanceDividendPaidCostOfTotalAssetsAccruingToCommonShareholders) {
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // last year
    a = -Math.round(parseInt(document.getElementById('PaymentsOfDividends1').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidCostOfTotalAssetsAccruingToCommonShareholders1').value = numUSD.format(a);
    // second last year
    a = -Math.round(parseInt(document.getElementById('PaymentsOfDividends2').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidCostOfTotalAssetsAccruingToCommonShareholders2').value = numUSD.format(a);
    // third last year
    a = -Math.round(parseInt(document.getElementById('PaymentsOfDividends3').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidCostOfTotalAssetsAccruingToCommonShareholders3').value = numUSD.format(a);
    // fourth last year
    a = -Math.round(parseInt(document.getElementById('PaymentsOfDividends4').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidCostOfTotalAssetsAccruingToCommonShareholders4').value = numUSD.format(a);
};

function BalanceDividendPaidToMinorityInterestCostOfTotalAssetsAccruingToCommonShareholders(BalanceDividendPaidToMinorityInterestCostOfTotalAssetsAccruingToCommonShareholders) {
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // last year
    a = Math.round(parseInt(document.getElementById('NormalizedDividendPaymentToNonControllingInterests1').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidToMinorityInterestCostOfTotalAssetsAccruingToCommonShareholders1').value = numUSD.format(a);
    // second last year
    a = Math.round(parseInt(document.getElementById('NormalizedDividendPaymentToNonControllingInterests2').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidToMinorityInterestCostOfTotalAssetsAccruingToCommonShareholders2').value = numUSD.format(a);
    // third last year
    a = Math.round(parseInt(document.getElementById('NormalizedDividendPaymentToNonControllingInterests3').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidToMinorityInterestCostOfTotalAssetsAccruingToCommonShareholders3').value = numUSD.format(a);
    // fourth last year
    a = Math.round(parseInt(document.getElementById('NormalizedDividendPaymentToNonControllingInterests4').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidToMinorityInterestCostOfTotalAssetsAccruingToCommonShareholders4').value = numUSD.format(a);
};

function BalanceDividendPaidToPreferredShareholdersCostOfTotalAssetsAccruingToCommonShareholders(BalanceDividendPaidToPreferredShareholdersCostOfTotalAssetsAccruingToCommonShareholders) {
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number"
    })
    // last year
    a = Math.round(parseInt(document.getElementById('NormalizedDividendPaymentToPreferredShareholders1').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidToPreferredShareholdersCostOfTotalAssetsAccruingToCommonShareholders1').value = numUSD.format(a);
    // second last year
    a = Math.round(parseInt(document.getElementById('NormalizedDividendPaymentToPreferredShareholders2').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidToPreferredShareholdersCostOfTotalAssetsAccruingToCommonShareholders2').value = numUSD.format(a);
    // third last year
    a = Math.round(parseInt(document.getElementById('NormalizedDividendPaymentToPreferredShareholders3').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidToPreferredShareholdersCostOfTotalAssetsAccruingToCommonShareholders3').value = numUSD.format(a);
    // fourth last year
    a = Math.round(parseInt(document.getElementById('NormalizedDividendPaymentToPreferredShareholders4').value.replaceAll(/,/g, '')))
    document.getElementById('DividendPaidToPreferredShareholdersCostOfTotalAssetsAccruingToCommonShareholders4').value = numUSD.format(a);
};

function CostOfTotalAssetsAccruingToCommonShareholders(CostOfTotalAssetsAccruingToCommonShareholders) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    // last year
    a = Math.round(parseInt(document.getElementById('DividendPaidCostOfTotalAssetsAccruingToCommonShareholders1').value.replaceAll(/,/g, '')));
    b = a - Math.round(parseInt(document.getElementById('DividendPaidToMinorityInterestCostOfTotalAssetsAccruingToCommonShareholders1').value.replaceAll(/,/g, '')));
    b = b - Math.round(parseInt(document.getElementById('DividendPaidToPreferredShareholdersCostOfTotalAssetsAccruingToCommonShareholders1').value.replaceAll(/,/g, '')));
    if (a == 0) {
    } else {
        a = b / a
    }
    a = a * parseFloat(document.getElementById('CostOfAssetCostOfTotalAssetAccruingToCommonShareholders1').value);
    document.getElementById('CostOfTotalAssetsAccruingToCommonShareholdersNote1').value = numUSD.format(a / 100);
    document.getElementById('CostOfTotalAssetsAccruingToCommonShareholders1').value = numUSD.format(-a / 100);
    // second last year
    a = Math.round(parseInt(document.getElementById('DividendPaidCostOfTotalAssetsAccruingToCommonShareholders2').value.replaceAll(/,/g, '')));
    b = a - Math.round(parseInt(document.getElementById('DividendPaidToMinorityInterestCostOfTotalAssetsAccruingToCommonShareholders2').value.replaceAll(/,/g, '')));
    b = b - Math.round(parseInt(document.getElementById('DividendPaidToPreferredShareholdersCostOfTotalAssetsAccruingToCommonShareholders2').value.replaceAll(/,/g, '')));
    if (a == 0) {
    } else {
        a = b / a
    }
    a = a * parseFloat(document.getElementById('CostOfAssetCostOfTotalAssetAccruingToCommonShareholders2').value);
    document.getElementById('CostOfTotalAssetsAccruingToCommonShareholdersNote2').value = numUSD.format(a / 100);
    document.getElementById('CostOfTotalAssetsAccruingToCommonShareholders2').value = numUSD.format(-a / 100);
    // third last year
    a = Math.round(parseInt(document.getElementById('DividendPaidCostOfTotalAssetsAccruingToCommonShareholders3').value.replaceAll(/,/g, '')));
    b = a - Math.round(parseInt(document.getElementById('DividendPaidToMinorityInterestCostOfTotalAssetsAccruingToCommonShareholders3').value.replaceAll(/,/g, '')));
    b = b - Math.round(parseInt(document.getElementById('DividendPaidToPreferredShareholdersCostOfTotalAssetsAccruingToCommonShareholders3').value.replaceAll(/,/g, '')));
    if (a == 0) {
    } else {
        a = b / a
    }
    a = a * parseFloat(document.getElementById('CostOfAssetCostOfTotalAssetAccruingToCommonShareholders3').value);
    document.getElementById('CostOfTotalAssetsAccruingToCommonShareholdersNote3').value = numUSD.format(a / 100);
    document.getElementById('CostOfTotalAssetsAccruingToCommonShareholders3').value = numUSD.format(-a / 100);
    // fourth last year
    a = Math.round(parseInt(document.getElementById('DividendPaidCostOfTotalAssetsAccruingToCommonShareholders4').value.replaceAll(/,/g, '')));
    b = a - Math.round(parseInt(document.getElementById('DividendPaidToMinorityInterestCostOfTotalAssetsAccruingToCommonShareholders4').value.replaceAll(/,/g, '')));
    b = b - Math.round(parseInt(document.getElementById('DividendPaidToPreferredShareholdersCostOfTotalAssetsAccruingToCommonShareholders4').value.replaceAll(/,/g, '')));
    if (a == 0) {
    } else {
        a = b / a
    }
    a = a * parseFloat(document.getElementById('CostOfAssetCostOfTotalAssetAccruingToCommonShareholders4').value);
    document.getElementById('CostOfTotalAssetsAccruingToCommonShareholdersNote4').value = numUSD.format(a / 100);
    document.getElementById('CostOfTotalAssetsAccruingToCommonShareholders4').value = numUSD.format(-a / 100);
};

function CapitalizationRateFloor(CapitalizationRateFloor) {
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    // last year
    a = parseFloat(document.getElementById('CapitalizationRateFloor1').value);
    document.getElementById('CapitalizationRateFloorProvision1').value = numUSD.format(a / 100);
    // second last year
    a = parseFloat(document.getElementById('CapitalizationRateFloor2').value);
    document.getElementById('CapitalizationRateFloorProvision2').value = numUSD.format(a / 100);
    // third last year
    a = parseFloat(document.getElementById('CapitalizationRateFloor3').value);
    document.getElementById('CapitalizationRateFloorProvision3').value = numUSD.format(a / 100);
    // fourth last year
    a = parseFloat(document.getElementById('CapitalizationRateFloor4').value);
    document.getElementById('CapitalizationRateFloorProvision4').value = numUSD.format(a / 100);
};

function GrowthRelatedRiskProvision(GrowthRelatedRiskProvision) {
    //
    var numUSD = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    // last year
    a = parseFloat(document.getElementById('CapitalizationRateBeforeProvision1').value);
    a = a - parseFloat(document.getElementById('CapitalizationRateFloor1').value);
    a = Math.max(0, -a)
    document.getElementById('GrowthRelatedRiskProvisionNote1').value = numUSD.format(-a / 100);
    document.getElementById('GrowthRelatedRiskProvision1').value = numUSD.format(a / 100);
    // second last year
    a = parseFloat(document.getElementById('CapitalizationRateBeforeProvision2').value);
    a = a - parseFloat(document.getElementById('CapitalizationRateFloor2').value);
    a = Math.max(0, -a)
    document.getElementById('GrowthRelatedRiskProvisionNote2').value = numUSD.format(-a / 100);
    document.getElementById('GrowthRelatedRiskProvision2').value = numUSD.format(a / 100);
    // third last year
    a = parseFloat(document.getElementById('CapitalizationRateBeforeProvision3').value);
    a = a - parseFloat(document.getElementById('CapitalizationRateFloor3').value);
    a = Math.max(0, -a)
    document.getElementById('GrowthRelatedRiskProvisionNote3').value = numUSD.format(-a / 100);
    document.getElementById('GrowthRelatedRiskProvision3').value = numUSD.format(a / 100);
    // fourth last year
    a = parseFloat(document.getElementById('CapitalizationRateBeforeProvision4').value);
    a = a - parseFloat(document.getElementById('CapitalizationRateFloor4').value);
    a = Math.max(0, -a)
    document.getElementById('GrowthRelatedRiskProvisionNote4').value = numUSD.format(-a / 100);
    document.getElementById('GrowthRelatedRiskProvision4').value = numUSD.format(a / 100);
};

