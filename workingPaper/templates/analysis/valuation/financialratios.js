
// analysis/valuation/financialratios.js

function DateRatios(DateRatios) {
    document.getElementById('DateRatios1').innerHTML = document.getElementById('ContextDate1').value;
    document.getElementById('DateRatios2').innerHTML = document.getElementById('ContextDate2').value;
    document.getElementById('DateRatios3').innerHTML = document.getElementById('ContextDate3').value;
    document.getElementById('DateRatios4').innerHTML = document.getElementById('ContextDate4').value;
    document.getElementById('DateRatios5').innerHTML = document.getElementById('ContextDate5').value;
    document.getElementById('DateRatios6').innerHTML = document.getElementById('ContextDate6').value;
};


function RatiosAmend(RatiosAmend) {
    document.getElementById('RatiosAmend1').innerHTML = document.getElementById('Amend1').value;
    document.getElementById('RatiosAmend2').innerHTML = document.getElementById('Amend2').value;
    document.getElementById('RatiosAmend3').innerHTML = document.getElementById('Amend3').value;
    document.getElementById('RatiosAmend4').innerHTML = document.getElementById('Amend4').value;
    document.getElementById('RatiosAmend5').innerHTML = document.getElementById('Amend5').value;
    document.getElementById('RatiosAmend6').innerHTML = document.getElementById('Amend6').value;
};


function FilingsHrefRatios() {
    document.getElementById('RatiosFilings1').href = document.getElementById('Filings1').href
    document.getElementById('RatiosFilings2').href = document.getElementById('Filings2').href
    document.getElementById('RatiosFilings3').href = document.getElementById('Filings3').href
    document.getElementById('RatiosFilings4').href = document.getElementById('Filings4').href
    document.getElementById('RatiosFilings5').href = document.getElementById('Filings5').href
    document.getElementById('RatiosFilings6').href = document.getElementById('Filings6').href
};

function SharePriceUpdateRatio(SharePriceUpdateRatio) {
    document.getElementById('SharePriceUpdateRatio').innerHTML = 'Shares Price as of ' + document.getElementById('SharePriceAsOf1').value;
};


function PriceEarnings(PriceEarnings) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
        
    });                                
    // Last Year
    a = parseInt(document.getElementById('MarketCapitalization1').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('NetIncome1').value.replaceAll(/,/g, ''));
    document.getElementById('PE1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('MarketCapitalization2').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('NetIncome2').value.replaceAll(/,/g, ''));
    document.getElementById('PE2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('MarketCapitalization3').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('NetIncome3').value.replaceAll(/,/g, ''));
    document.getElementById('PE3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('MarketCapitalization4').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('NetIncome4').value.replaceAll(/,/g, ''));
    document.getElementById('PE4').value = numUSD.format(a);
};

function MarketToBook(MarketToBook) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });                                
    // Last Year
    a = parseInt(document.getElementById('MarketCapitalization1').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity1').value.replaceAll(/,/g, ''));
    document.getElementById('MarketToBook1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('MarketCapitalization2').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity2').value.replaceAll(/,/g, ''));
    document.getElementById('MarketToBook2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('MarketCapitalization3').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity3').value.replaceAll(/,/g, ''));
    document.getElementById('MarketToBook3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('MarketCapitalization4').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity4').value.replaceAll(/,/g, ''));
    document.getElementById('MarketToBook4').value = numUSD.format(Math.round(a));
};


function ReturnOnEquity(ReturnOnEquity) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });                                
    // Last Year
    a = parseInt(document.getElementById('NetIncome1').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity1').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnEquity1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('NetIncome2').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity2').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnEquity2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('NetIncome3').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity3').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnEquity3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('NetIncome4').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity4').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnEquity4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('NetIncome5').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity5').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnEquity5').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('NetIncome6').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity6').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnEquity6').value = numUSD.format(a);
};

function ReturnOnAssets(ReturnOnAssets) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
    });                                
    // Last Year
    a = parseInt(document.getElementById('NetIncome1').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('TotalAssets1').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnAssets1').value = numUSD.format(a);
    document.getElementById('ReturnOnAssetsVolatility1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('NetIncome2').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('TotalAssets2').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnAssets2').value = numUSD.format(a);
    document.getElementById('ReturnOnAssetsVolatility2').value = numUSD.format(a);
    //
    document.getElementById('ReturnOnAssetsPriorYearVolatility1').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('NetIncome3').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('TotalAssets3').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnAssets3').value = numUSD.format(a);
    document.getElementById('ReturnOnAssetsVolatility3').value = numUSD.format(a);
    //
    document.getElementById('ReturnOnAssetsPriorYearVolatility2').value = numUSD.format(a);
    document.getElementById('ReturnOnAssetsSecondPriorYearVolatility1').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('NetIncome4').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('TotalAssets4').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnAssets4').value = numUSD.format(a);
    document.getElementById('ReturnOnAssetsVolatility4').value = numUSD.format(a);
    //
    document.getElementById('ReturnOnAssetsPriorYearVolatility3').value = numUSD.format(a);
    document.getElementById('ReturnOnAssetsSecondPriorYearVolatility2').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('NetIncome5').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('TotalAssets5').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnAssets5').value = numUSD.format(a);
    //
    document.getElementById('ReturnOnAssetsPriorYearVolatility4').value = numUSD.format(a);
    document.getElementById('ReturnOnAssetsSecondPriorYearVolatility3').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('NetIncome6').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('TotalAssets6').value.replaceAll(/,/g, ''));
    document.getElementById('ReturnOnAssets6').value = numUSD.format(a);
    //
    document.getElementById('ReturnOnAssetsSecondPriorYearVolatility4').value = numUSD.format(a);
};

function ProfitMargin(ProfitMargin) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });                                
    // Last Year
    a = parseInt(document.getElementById('NetIncome1').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales1').value.replaceAll(/,/g, ''));
    document.getElementById('ProfitMargin1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('NetIncome2').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales2').value.replaceAll(/,/g, ''));
    document.getElementById('ProfitMargin2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('NetIncome3').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales3').value.replaceAll(/,/g, ''));
    document.getElementById('ProfitMargin3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('NetIncome4').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales4').value.replaceAll(/,/g, ''));
    document.getElementById('ProfitMargin4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('NetIncome5').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales5').value.replaceAll(/,/g, ''));
    document.getElementById('ProfitMargin5').value = numUSD.format(a);
    // sixth Last Year
    a = parseInt(document.getElementById('NetIncome6').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales6').value.replaceAll(/,/g, ''));
    document.getElementById('ProfitMargin6').value = numUSD.format(a);
};

function OperatingMargin(OperatingMargin) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });                                
    // Last Year
    a = parseInt(document.getElementById('OperatingIncome1').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales1').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingMargin1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('OperatingIncome2').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales2').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingMargin2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('OperatingIncome3').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales3').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingMargin3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('OperatingIncome4').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales4').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingMargin4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('OperatingIncome5').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales5').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingMargin5').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('OperatingIncome6').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('Sales6').value.replaceAll(/,/g, ''));
    document.getElementById('OperatingMargin6').value = numUSD.format(a);
};

function DividendPayments(DividendPayments) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });                                
    // Last Year
    a = -parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared1').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('NetIncome1').value.replaceAll(/,/g, ''));
    document.getElementById('DividendPayments1').value = numUSD.format(a);
    // Second Last Year
    a = -parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared2').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('NetIncome2').value.replaceAll(/,/g, ''));
    document.getElementById('DividendPayments2').value = numUSD.format(a);
    // Third Last Year
    a = -parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared3').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('NetIncome3').value.replaceAll(/,/g, ''));
    document.getElementById('DividendPayments3').value = numUSD.format(a);
    // Fourth Last Year
    a = -parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared4').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('NetIncome4').value.replaceAll(/,/g, ''));
    document.getElementById('DividendPayments4').value = numUSD.format(a);
    // Fifth Last Year
    a = -parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared5').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('NetIncome5').value.replaceAll(/,/g, ''));
    document.getElementById('DividendPayments5').value = numUSD.format(a);
    // Sixth Last Year
    a = -parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared6').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('NetIncome6').value.replaceAll(/,/g, ''));
    document.getElementById('DividendPayments6').value = numUSD.format(a);
};

function EarningsRetention(EarningsRetention) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });                                
    // Last Year
    a = parseInt(document.getElementById('NetIncome1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared1').value.replaceAll(/,/g, ''));
    document.getElementById('EarningsRetention1').value = numUSD.format((a + b) / a);
    // Second Last Year
    a = parseInt(document.getElementById('NetIncome2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared2').value.replaceAll(/,/g, ''));
    document.getElementById('EarningsRetention2').value = numUSD.format((a + b) / a);
    // Third Last Year
    a = parseInt(document.getElementById('NetIncome3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared3').value.replaceAll(/,/g, ''));
    document.getElementById('EarningsRetention3').value = numUSD.format((a + b) / a);
    // Fourth Last Year
    a = parseInt(document.getElementById('NetIncome4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared4').value.replaceAll(/,/g, ''));
    document.getElementById('EarningsRetention4').value = numUSD.format((a + b) / a);
    // Fifth Last Year
    a = parseInt(document.getElementById('NetIncome5').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared5').value.replaceAll(/,/g, ''));
    document.getElementById('EarningsRetention5').value = numUSD.format((a + b) / a);
    // Sixth Last Year
    a = parseInt(document.getElementById('NetIncome6').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('DividendsAndDividendEquivalentsDeclared6').value.replaceAll(/,/g, ''));
    document.getElementById('EarningsRetention6').value = numUSD.format((a + b) / a);
};


function BasicEarningPower(BasicEarningPower) {
    var numUSD = new Intl.NumberFormat("en-US", {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });                                
    // Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes1').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    InterestRate = parseInt(document.getElementById('TheoricalInterestRate1').value.replaceAll(/,/g, ''));
    Assets = parseInt(document.getElementById('TotalAssets1').value.replaceAll(/,/g, ''));
    EBIT = EBT + (Debt * InterestRate)
    a = EBIT / Assets
    document.getElementById('BasicEarningPower1').value = numUSD.format(a);
    // Second Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes2').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    Debt = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    InterestRate = parseInt(document.getElementById('TheoricalInterestRate2').value.replaceAll(/,/g, ''));
    Assets = parseInt(document.getElementById('TotalAssets2').value.replaceAll(/,/g, ''));
    EBIT = EBT + (Debt * InterestRate)
    a = EBIT / Assets
    document.getElementById('BasicEarningPower2').value = numUSD.format(a);
    // Third Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes3').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    Debt = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    InterestRate = parseInt(document.getElementById('TheoricalInterestRate3').value.replaceAll(/,/g, ''));
    Assets = parseInt(document.getElementById('TotalAssets3').value.replaceAll(/,/g, ''));
    EBIT = EBT + (Debt * InterestRate)
    a = EBIT / Assets
    document.getElementById('BasicEarningPower3').value = numUSD.format(a);
    // Fourth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes4').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    Debt = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    InterestRate = parseInt(document.getElementById('TheoricalInterestRate4').value.replaceAll(/,/g, ''));
    Assets = parseInt(document.getElementById('TotalAssets4').value.replaceAll(/,/g, ''));
    EBIT = EBT + (Debt * InterestRate)
    a = EBIT / Assets
    document.getElementById('BasicEarningPower4').value = numUSD.format(a);
    // Fifth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes5').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    Debt = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    InterestRate = parseInt(document.getElementById('TheoricalInterestRate5').value.replaceAll(/,/g, ''));
    Assets = parseInt(document.getElementById('TotalAssets5').value.replaceAll(/,/g, ''));
    EBIT = EBT + (Debt * InterestRate)
    a = EBIT / Assets
    document.getElementById('BasicEarningPower5').value = numUSD.format(a);
    // Sitch Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes6').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    Debt = a - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    InterestRate = parseInt(document.getElementById('TheoricalInterestRate6').value.replaceAll(/,/g, ''));
    Assets = parseInt(document.getElementById('TotalAssets6').value.replaceAll(/,/g, ''));
    EBIT = EBT + (Debt * InterestRate)
    a = EBIT / Assets
    document.getElementById('BasicEarningPower6').value = numUSD.format(a);
};


function DebtToEquity(DebtToEquity) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });                                
    // Last Year
    a = parseInt(document.getElementById('TotalLiabilities1').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity1').value.replaceAll(/,/g, ''));
    document.getElementById('DebtToEquity1').value = numUSD.format(a);
    // Second Last Year
    a = parseInt(document.getElementById('TotalLiabilities2').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity2').value.replaceAll(/,/g, ''));
    document.getElementById('DebtToEquity2').value = numUSD.format(a);
    // Third Last Year
    a = parseInt(document.getElementById('TotalLiabilities3').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity3').value.replaceAll(/,/g, ''));
    document.getElementById('DebtToEquity3').value = numUSD.format(a);
    // Fourth Last Year
    a = parseInt(document.getElementById('TotalLiabilities4').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity4').value.replaceAll(/,/g, ''));
    document.getElementById('DebtToEquity4').value = numUSD.format(a);
    // Fifth Last Year
    a = parseInt(document.getElementById('TotalLiabilities5').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity5').value.replaceAll(/,/g, ''));
    document.getElementById('DebtToEquity5').value = numUSD.format(a);
    // Sixth Last Year
    a = parseInt(document.getElementById('TotalLiabilities6').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('ShareholdersEquity6').value.replaceAll(/,/g, ''));
    document.getElementById('DebtToEquity6').value = numUSD.format(a);
};

function EquityMultiplier(EquityMultiplier) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });
    // Last Year
    a = parseInt(document.getElementById('TotalAssets1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('ShareholdersEquity1').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('ShareholdersEquity2').value.replaceAll(/,/g, ''));
    document.getElementById('EquityMultiplier1').value = Math.round(a / ((b + c) / 2) * 10) / 10 ;
    // Second Last Year
    a = parseInt(document.getElementById('TotalAssets2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('ShareholdersEquity2').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('ShareholdersEquity3').value.replaceAll(/,/g, ''));
    document.getElementById('EquityMultiplier2').value = Math.round(a / ((b + c) / 2) * 10) / 10 ;
    // Third Last Year
    a = parseInt(document.getElementById('TotalAssets3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('ShareholdersEquity3').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('ShareholdersEquity4').value.replaceAll(/,/g, ''));
    document.getElementById('EquityMultiplier3').value = Math.round(a / ((b + c) / 2) * 10) / 10 ;
    // Fourth Last Year
    a = parseInt(document.getElementById('TotalAssets4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('ShareholdersEquity4').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('ShareholdersEquity5').value.replaceAll(/,/g, ''));
    document.getElementById('EquityMultiplier4').value = Math.round(a / ((b + c) / 2) * 10) / 10 ;
    // Fifth Last Year
    a = parseInt(document.getElementById('TotalAssets5').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('ShareholdersEquity5').value.replaceAll(/,/g, ''));
    c = parseInt(document.getElementById('ShareholdersEquity6').value.replaceAll(/,/g, ''));
    document.getElementById('EquityMultiplier5').value = Math.round(a / ((b + c) / 2) * 10) / 10 ;
};

function DegreeOfFinancialLeverage(DegreeOfFinancialLeverage) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes1').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate1').value) / 100;
    Interest = Debt * InterestRate
    EBIT = EBT + Interest
    document.getElementById('DegreeOfFinancialLeverage1').value = numUSD.format(EBIT / Interest);
    // Second Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes2').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate2').value) / 100;
    Interest = Debt * InterestRate
    EBIT = EBT + Interest
    document.getElementById('DegreeOfFinancialLeverage2').value = numUSD.format(EBIT / Interest);
    // Third Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes3').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate3').value) / 100;
    Interest = Debt * InterestRate
    EBIT = EBT + Interest
    document.getElementById('DegreeOfFinancialLeverage3').value = numUSD.format(EBIT / Interest);
    // Fourth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes4').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate4').value) / 100;
    Interest = Debt * InterestRate
    EBIT = EBT + Interest
    document.getElementById('DegreeOfFinancialLeverage4').value = numUSD.format(EBIT / Interest);
    // Fifth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes5').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate5').value) / 100;
    Interest = Debt * InterestRate
    EBIT = EBT + Interest
    document.getElementById('DegreeOfFinancialLeverage5').value = numUSD.format(EBIT / Interest);
    // Sixth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes6').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate6').value) / 100;
    Interest = Debt * InterestRate
    EBIT = EBT + Interest
    document.getElementById('DegreeOfFinancialLeverage6').value = numUSD.format(EBIT / Interest);
};

function DebtToEBITDA(DebtToEBITDA) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });
    // Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes1').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate1').value) / 100;
    Interest = Debt * InterestRate;
    Amort = parseInt(document.getElementById('DepreciationDepletionAndAmortization1').value.replaceAll(/,/g, ''));
    EBITDA = EBT + Interest + Amort;
    document.getElementById('DebtToEBITDA1').value = numUSD.format(Debt / EBITDA);
    // Second Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes2').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate2').value) / 100;
    Interest = Debt * InterestRate;
    Amort = parseInt(document.getElementById('DepreciationDepletionAndAmortization2').value.replaceAll(/,/g, ''));
    EBITDA = EBT + Interest + Amort;
    document.getElementById('DebtToEBITDA2').value = numUSD.format(Debt / EBITDA);
    // Third Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes3').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate3').value) / 100;
    Interest = Debt * InterestRate;
    Amort = parseInt(document.getElementById('DepreciationDepletionAndAmortization3').value.replaceAll(/,/g, ''));
    EBITDA = EBT + Interest + Amort;
    document.getElementById('DebtToEBITDA3').value = numUSD.format(Debt / EBITDA);
    // Fourth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes4').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate4').value) / 100;
    Interest = Debt * InterestRate;
    Amort = parseInt(document.getElementById('DepreciationDepletionAndAmortization4').value.replaceAll(/,/g, ''));
    EBITDA = EBT + Interest + Amort;
    document.getElementById('DebtToEBITDA4').value = numUSD.format(Debt / EBITDA);
    // Fourth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes5').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate5').value) / 100;
    Interest = Debt * InterestRate;
    Amort = parseInt(document.getElementById('DepreciationDepletionAndAmortization5').value.replaceAll(/,/g, ''));
    EBITDA = EBT + Interest + Amort;
    document.getElementById('DebtToEBITDA5').value = numUSD.format(Debt / EBITDA);
    // Fourth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes6').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate6').value) / 100;
    Interest = Debt * InterestRate;
    Amort = parseInt(document.getElementById('DepreciationDepletionAndAmortization6').value.replaceAll(/,/g, ''));
    EBITDA = EBT + Interest + Amort;
    document.getElementById('DebtToEBITDA6').value = numUSD.format(Debt / EBITDA);
};

function InterestCoverage(InterestCoverage) {  
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });
    // Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes1').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate1').value) / 100;
    Interest = Debt * InterestRate;
    document.getElementById('InterestCoverage1').value = numUSD.format(EBT / Interest);
    // Second Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes2').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate2').value) / 100;
    Interest = Debt * InterestRate;
    document.getElementById('InterestCoverage2').value = numUSD.format(EBT / Interest);
    // Third Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes3').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate3').value) / 100;
    Interest = Debt * InterestRate;
    document.getElementById('InterestCoverage3').value = numUSD.format(EBT / Interest);
    // Fourth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes4').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate4').value) / 100;
    Interest = Debt * InterestRate;
    document.getElementById('InterestCoverage4').value = numUSD.format(EBT / Interest);
    // Fourth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes5').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate5').value) / 100;
    Interest = Debt * InterestRate;
    document.getElementById('InterestCoverage5').value = numUSD.format(EBT / Interest);
    // Fourth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes6').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate6').value) / 100;
    Interest = Debt * InterestRate;
    document.getElementById('InterestCoverage6').value = numUSD.format(EBT / Interest);
};

function FixedChargeCoverage(FixedChargeCoverage) {
    var numUSD = new Intl.NumberFormat("en-US", {
        format: "number",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });
    // Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes1').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent1').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate1').value) / 100;
    Interest = Debt * InterestRate;
    Admin = -parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing1').value.replaceAll(/,/g, ''));
    EBIT = EBT + Interest;
    document.getElementById('FixedChargeCoverage1').value = numUSD.format((EBIT + Admin) / (Admin + Interest)) ;
    // Second Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes2').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent2').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate2').value) / 100;
    Interest = Debt * InterestRate;
    Admin = -parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing2').value.replaceAll(/,/g, ''));
    EBIT = EBT + Interest;
    document.getElementById('FixedChargeCoverage2').value = numUSD.format((EBIT + Admin) / (Admin + Interest)) ;
    // Third Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes3').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent3').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate3').value) / 100;
    Interest = Debt * InterestRate;
    Admin = -parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing3').value.replaceAll(/,/g, ''));
    EBIT = EBT + Interest;
    document.getElementById('FixedChargeCoverage3').value = numUSD.format((EBIT + Admin) / (Admin + Interest)) ;
    // Fourth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes4').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent4').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate4').value) / 100;
    Interest = Debt * InterestRate;
    Admin = -parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing4').value.replaceAll(/,/g, ''));
    EBIT = EBT + Interest;
    document.getElementById('FixedChargeCoverage4').value = numUSD.format((EBIT + Admin) / (Admin + Interest)) ;
    // Fifth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes5').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent5').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate5').value) / 100;
    Interest = Debt * InterestRate;
    Admin = -parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing5').value.replaceAll(/,/g, ''));
    EBIT = EBT + Interest;
    document.getElementById('FixedChargeCoverage5').value = numUSD.format((EBIT + Admin) / (Admin + Interest)) ;
    // Sixth Last Year
    EBT = parseInt(document.getElementById('IncomeBeforeTaxes6').value.replaceAll(/,/g, ''));
    Debt = parseInt(document.getElementById('NonCurrentLiabilitiesNote6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredRevenueAndDepositsNonCurrent6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('AccruedTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    Debt = Debt - parseInt(document.getElementById('DeferredTaxLiabilitiesNonCurrent6').value.replaceAll(/,/g, ''));
    InterestRate = parseFloat(document.getElementById('TheoricalInterestRate6').value) / 100;
    Interest = Debt * InterestRate;
    Admin = -parseInt(document.getElementById('SellingGeneralAdministrativeAndMarketing6').value.replaceAll(/,/g, ''));
    EBIT = EBT + Interest;
    document.getElementById('FixedChargeCoverage6').value = numUSD.format((EBIT + Admin) / (Admin + Interest)) ;

};

function Current(Current) {                          
    // Last Year
    a = parseInt(document.getElementById('CurrentAssets1').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities1').value.replaceAll(/,/g, ''));
    document.getElementById('Current1').value = Math.round(a * 10) / 10;
    // Second Last Year
    a = parseInt(document.getElementById('CurrentAssets2').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities2').value.replaceAll(/,/g, ''));
    document.getElementById('Current2').value = Math.round(a * 10) / 10;
    // Third Last Year
    a = parseInt(document.getElementById('CurrentAssets3').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities3').value.replaceAll(/,/g, ''));
    document.getElementById('Current3').value = Math.round(a * 10) / 10;
    // Fourth Last Year
    a = parseInt(document.getElementById('CurrentAssets4').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities4').value.replaceAll(/,/g, ''));
    document.getElementById('Current4').value = Math.round(a * 10) / 10;
    // Fifth Last Year
    a = parseInt(document.getElementById('CurrentAssets5').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities5').value.replaceAll(/,/g, ''));
    document.getElementById('Current5').value = Math.round(a * 10) / 10;
    // Sixth Last Year
    a = parseInt(document.getElementById('CurrentAssets6').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities6').value.replaceAll(/,/g, ''));
    document.getElementById('Current6').value = Math.round(a * 10) / 10;
};


function Quick(Quick) {                             
    // Last Year
    a = parseInt(document.getElementById('CurrentAssets1').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('Inventories1').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities1').value.replaceAll(/,/g, ''));
    document.getElementById('Quick1').value = Math.round(a * 10) / 10;
    // Second Last Year
    a = parseInt(document.getElementById('CurrentAssets2').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('Inventories2').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities2').value.replaceAll(/,/g, ''));
    document.getElementById('Quick2').value = Math.round(a * 10) / 10;
    // Third Last Year
    a = parseInt(document.getElementById('CurrentAssets3').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('Inventories3').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities3').value.replaceAll(/,/g, ''));
    document.getElementById('Quick3').value = Math.round(a * 10) / 10;
    // Fourth Last Year
    a = parseInt(document.getElementById('CurrentAssets4').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('Inventories4').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities4').value.replaceAll(/,/g, ''));
    document.getElementById('Quick4').value = Math.round(a * 10) / 10;
    // Fifth Last Year
    a = parseInt(document.getElementById('CurrentAssets5').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('Inventories5').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities5').value.replaceAll(/,/g, ''));
    document.getElementById('Quick5').value = Math.round(a * 10) / 10;
    // Sixth Last Year
    a = parseInt(document.getElementById('CurrentAssets6').value.replaceAll(/,/g, ''));
    a = a - parseInt(document.getElementById('Inventories6').value.replaceAll(/,/g, ''));
    a = a / parseInt(document.getElementById('CurrentLiabilities6').value.replaceAll(/,/g, ''));
    document.getElementById('Quick6').value = Math.round(a * 10) / 10;
};

function InventoryTurnover(InventoryTurnover) {                            
    // Last Year
    a = parseInt(document.getElementById('Sales1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('Inventories1').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('Inventories2').value.replaceAll(/,/g, ''));
    document.getElementById('InventoryTurnover1').value = Math.round(a / (b / 2));
    // Second Last Year
    a = parseInt(document.getElementById('Sales2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('Inventories2').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('Inventories3').value.replaceAll(/,/g, ''));
    document.getElementById('InventoryTurnover2').value = Math.round(a / (b / 2));
    // Third Last Year
    a = parseInt(document.getElementById('Sales3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('Inventories3').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('Inventories4').value.replaceAll(/,/g, ''));
    document.getElementById('InventoryTurnover3').value = Math.round(a / (b / 2));
    // Fourth Last Year
    a = parseInt(document.getElementById('Sales4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('Inventories4').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('Inventories5').value.replaceAll(/,/g, ''));
    document.getElementById('InventoryTurnover4').value = Math.round(a / (b / 2));
    // Fifth Last Year
    a = parseInt(document.getElementById('Sales5').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('Inventories5').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('Inventories6').value.replaceAll(/,/g, ''));
    document.getElementById('InventoryTurnover5').value = Math.round(a / (b / 2));
};

function DaysOfInventoryOnHand(DaysOfInventoryOnHand) {                       
    // Last Year
    a = parseInt(document.getElementById('InventoryTurnover1').value.replaceAll(/,/g, ''));
    document.getElementById('DaysOfInventoryOnHand1').value = Math.round(365 / a);
    // Second Last Year
    a = parseInt(document.getElementById('InventoryTurnover2').value.replaceAll(/,/g, ''));
    document.getElementById('DaysOfInventoryOnHand2').value = Math.round(365 / a);
    // Third Last Year
    a = parseInt(document.getElementById('InventoryTurnover3').value.replaceAll(/,/g, ''));
    document.getElementById('DaysOfInventoryOnHand3').value = Math.round(365 / a);
    // Fourth Last Year
    a = parseInt(document.getElementById('InventoryTurnover4').value.replaceAll(/,/g, ''));
    document.getElementById('DaysOfInventoryOnHand4').value = Math.round(365 / a);
    // Fifth Last Year
    a = parseInt(document.getElementById('InventoryTurnover5').value.replaceAll(/,/g, ''));
    document.getElementById('DaysOfInventoryOnHand5').value = Math.round(365 / a);
    // Sixth Last Year
    a = parseInt(document.getElementById('InventoryTurnover6').value.replaceAll(/,/g, ''));
    document.getElementById('DaysOfInventoryOnHand6').value = Math.round(365 / a);
};

function NumberOfDaysPayable(NumberOfDaysPayable) {                        
    // Last Year
    a = 365 * parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities1').value.replaceAll(/,/g, ''));
    a = a / -parseInt(document.getElementById('CostOfSales1').value.replaceAll(/,/g, ''));
    document.getElementById('NumberOfDaysPayable1').value = Math.round(a);
    // Second Last Year
    a = 365 * parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities2').value.replaceAll(/,/g, ''));
    a = a / -parseInt(document.getElementById('CostOfSales2').value.replaceAll(/,/g, ''));
    document.getElementById('NumberOfDaysPayable2').value = Math.round(a);
    // Third Last Year
    a = 365 * parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities3').value.replaceAll(/,/g, ''));
    a = a / -parseInt(document.getElementById('CostOfSales3').value.replaceAll(/,/g, ''));
    document.getElementById('NumberOfDaysPayable3').value = Math.round(a);
    // Fourth Last Year
    a = 365 * parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities4').value.replaceAll(/,/g, ''));
    a = a / -parseInt(document.getElementById('CostOfSales4').value.replaceAll(/,/g, ''));
    document.getElementById('NumberOfDaysPayable4').value = Math.round(a);
    // Fourth Last Year
    a = 365 * parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities5').value.replaceAll(/,/g, ''));
    a = a / -parseInt(document.getElementById('CostOfSales5').value.replaceAll(/,/g, ''));
    document.getElementById('NumberOfDaysPayable5').value = Math.round(a);
    // Fourth Last Year
    a = 365 * parseInt(document.getElementById('AccountsPayableAndAccruedLiabilities6').value.replaceAll(/,/g, ''));
    a = a / -parseInt(document.getElementById('CostOfSales6').value.replaceAll(/,/g, ''));
    document.getElementById('NumberOfDaysPayable6').value = Math.round(a);
};

function FixedAssetsTurnover(FixedAssetsTurnover) {                            
    // Last Year
    a = parseInt(document.getElementById('GrossMargin1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PropertyPlantAndEquipment1').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('PropertyPlantAndEquipment2').value.replaceAll(/,/g, ''));
    document.getElementById('FixedAssetsTurnover1').value = Math.round(a / (b / 2) * 10) / 10;
    // Second Last Year
    a = parseInt(document.getElementById('GrossMargin2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PropertyPlantAndEquipment2').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('PropertyPlantAndEquipment3').value.replaceAll(/,/g, ''));
    document.getElementById('FixedAssetsTurnover2').value = Math.round(a / (b / 2) * 10) / 10;
    // Third Last Year
    a = parseInt(document.getElementById('GrossMargin3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PropertyPlantAndEquipment3').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('PropertyPlantAndEquipment4').value.replaceAll(/,/g, ''));
    document.getElementById('FixedAssetsTurnover3').value = Math.round(a / (b / 2) * 10) / 10;
    // Fourth Last Year
    a = parseInt(document.getElementById('GrossMargin4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PropertyPlantAndEquipment4').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('PropertyPlantAndEquipment5').value.replaceAll(/,/g, ''));
    document.getElementById('FixedAssetsTurnover4').value = Math.round(a / (b / 2) * 10) / 10;
    // Fifth Last Year
    a = parseInt(document.getElementById('GrossMargin5').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('PropertyPlantAndEquipment5').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('PropertyPlantAndEquipment6').value.replaceAll(/,/g, ''));
    document.getElementById('FixedAssetsTurnover5').value = Math.round(a / (b / 2) * 10) / 10;
};

function TotalAssetsTurnover(TotalAssetsTurnover) {
    // Last Year
    a = parseInt(document.getElementById('Sales1').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalAssets1').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('TotalAssets2').value.replaceAll(/,/g, ''));
    document.getElementById('TotalAssetsTurnover1').value = Math.round(a / (b / 2) * 10) /  10;
    // Second Last Year
    a = parseInt(document.getElementById('Sales2').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalAssets2').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('TotalAssets3').value.replaceAll(/,/g, ''));
    document.getElementById('TotalAssetsTurnover2').value = Math.round(a / (b / 2) * 10) /  10;
    // Third Last Year
    a = parseInt(document.getElementById('Sales3').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalAssets3').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('TotalAssets4').value.replaceAll(/,/g, ''));
    document.getElementById('TotalAssetsTurnover3').value = Math.round(a / (b / 2) * 10) /  10;
    // Fourth Last Year
    a = parseInt(document.getElementById('Sales4').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalAssets4').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('TotalAssets5').value.replaceAll(/,/g, ''));
    document.getElementById('TotalAssetsTurnover4').value = Math.round(a / (b / 2) * 10) /  10;
    // Fourth Last Year
    a = parseInt(document.getElementById('Sales5').value.replaceAll(/,/g, ''));
    b = parseInt(document.getElementById('TotalAssets5').value.replaceAll(/,/g, ''));
    b = b + parseInt(document.getElementById('TotalAssets6').value.replaceAll(/,/g, ''));
    document.getElementById('TotalAssetsTurnover5').value = Math.round(a / (b / 2) * 10) /  10;
};

function DuPont(DuPont) {
    // Last Year
    a = parseFloat(document.getElementById('ProfitMargin1').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('TotalAssetsTurnover1').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('EquityMultiplier1').value.replaceAll(/,/g, ''));
    document.getElementById('DuPont1').value = Math.round(a * 10) / 10;
    // Second Last Year
    a = parseFloat(document.getElementById('ProfitMargin2').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('TotalAssetsTurnover2').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('EquityMultiplier2').value.replaceAll(/,/g, ''));
    document.getElementById('DuPont2').value = Math.round(a * 10) / 10;
    // Third Last Year
    a = parseFloat(document.getElementById('ProfitMargin3').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('TotalAssetsTurnover3').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('EquityMultiplier3').value.replaceAll(/,/g, ''));
    document.getElementById('DuPont3').value = Math.round(a * 10) / 10;
    // Fourth Last Year
    a = parseFloat(document.getElementById('ProfitMargin4').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('TotalAssetsTurnover4').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('EquityMultiplier4').value.replaceAll(/,/g, ''));
    document.getElementById('DuPont4').value = Math.round(a * 10) / 10;
    // Fifth Last Year
    a = parseFloat(document.getElementById('ProfitMargin5').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('TotalAssetsTurnover5').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('EquityMultiplier5').value.replaceAll(/,/g, ''));
    document.getElementById('DuPont5').value = Math.round(a * 10) / 10;
    // Sixth Last Year
    a = parseFloat(document.getElementById('ProfitMargin6').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('TotalAssetsTurnover6').value.replaceAll(/,/g, ''));
    a = a * parseFloat(document.getElementById('EquityMultiplier6').value.replaceAll(/,/g, ''));
    document.getElementById('DuPont6').value = Math.round(a * 10) / 10;
};