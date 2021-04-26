from django.db import models, migrations

class Database(models.Model):
    #
    phase1 = models.IntegerField(default=0)
    #
    phase2 = models.IntegerField(default=0)
    #
    phase3 = models.IntegerField(default=0)
    #
    phase4 = models.IntegerField(default=0)
    #
    phase41 = models.IntegerField(default=0)
    #
    phase42 = models.IntegerField(default=0)
    #
    phase43 = models.IntegerField(default=0)
    #
    phase5 = models.IntegerField(default=0)
    #
    phase6 = models.IntegerField(default=0)
    #
    phase61 = models.IntegerField(default=0)
    #
    phase62 = models.IntegerField(default=0)
    #
    phase63 = models.IntegerField(default=0)
    #
    phase64 = models.IntegerField(default=0)
    #
    phase65 = models.IntegerField(default=0)
    #
    phase7 = models.IntegerField(default=0)
    #
    phase71 = models.IntegerField(default=0)
    #
    phase72 = models.IntegerField(default=0)
    #
    phase73 = models.IntegerField(default=0)
    #
    phase74 = models.IntegerField(default=0)
    #
    phase75 = models.IntegerField(default=0)
    #
    phase76 = models.IntegerField(default=0)
    #
    phase77 = models.IntegerField(default=0)
    #
    phase78 = models.IntegerField(default=0)
    #
    phase8 = models.IntegerField(default=0)
    #
    prepared = models.IntegerField(default=0)
    #
    audited = models.IntegerField(default=0)
    #
    total = models.IntegerField(default=0)
    #
    onboarded = models.IntegerField(default=0)
    #
    completed = models.IntegerField(default=0)
    #
    progress = models.FloatField(default=0)

class Entity(models.Model):
    #
    EntityRegistrantName = models.CharField(max_length=93)
    TradingSymbol = models.CharField(max_length=7, null=False, unique=True)
    EntityCentralIndexKey = models.CharField(max_length=10)
    Industry = models.CharField(max_length=61)
    EntityIncorporationStateCountryCode = models.CharField(max_length=44)
    Region = models.CharField(max_length=44)
    CurrentFiscalYearEndDate = models.CharField(max_length=13, default=0)
    SecurityExchangeName = models.CharField(max_length=55, default=0)
    Regulator = models.CharField(max_length=3)
    Update = models.DateField(null=True)
    UpdateDateAndTime = models.DateTimeField(null=True)
    StockPriceUpdate = models.DateTimeField(null=True)
    Clockφ = models.IntegerField(default=0)
    ClockφChange = models.IntegerField(default=0)
    Bridgeφ = models.CharField(max_length=100, default=0)
    Status = models.CharField(max_length=7, default=0)
    Reviewed = models.IntegerField(default=0)
    Anomalies = models.CharField(max_length=100, default=0)
    SECurl = models.CharField(max_length=66, default=0)    
    #
    MarketCapitalization = models.IntegerField(default=0)
    StockPrice = models.IntegerField(default=0)
    EntityCommonStockSharesOutstanding = models.IntegerField(default=0)
    #
    AnomaliesRatio1 = models.IntegerField(default=9999)
    AnomaliesRatio2 = models.IntegerField(default=9999)
    AnomaliesRatio3 = models.IntegerField(default=9999)
    AnomaliesRatio4 = models.IntegerField(default=9999)
    AnomaliesRatio5 = models.IntegerField(default=9999)
    AnomaliesRatio6 = models.IntegerField(default=9999)
    #
    NumberOfYearsAudited = models.IntegerField(default=0)
    #
    accessionnumberlastyear = models.CharField(max_length=20, default='')
    accessionnumbersecondlastyear = models.CharField(max_length=20, default='')
    accessionnumberthirdlastyear = models.CharField(max_length=20, default='')
    accessionnumberfourthlastyear = models.CharField(max_length=20, default='')
    accessionnumberfifthlastyear = models.CharField(max_length=20, default='')
    accessionnumbersixthlastyear =  models.CharField(max_length=20, default='')
    accessionnumberseventhlastyear =  models.CharField(max_length=20, default='')
    #
    lastyear = models.DateField(null=True)
    secondlastyear = models.DateField(null=True)
    thirdlastyear = models.DateField(null=True)
    fourthlastyear = models.DateField(null=True)
    fifthlastyear = models.DateField(null=True)
    sixthlastyear = models.DateField(null=True)
    seventhlastyear = models.DateField(null=True)
    #
    amendlastyear =  models.CharField(max_length=5, default='')
    amendsecondlastyear =  models.CharField(max_length=5, default='')
    amendthirdlastyear =  models.CharField(max_length=5, default='')
    amendfourthlastyear =  models.CharField(max_length=5, default='')
    amendfifthlastyear =  models.CharField(max_length=5, default='')
    amendsixthlastyear =  models.CharField(max_length=5, default='')
    amendseventhlastyear =  models.CharField(max_length=5, default='')
    #
    urlbalancesheetlastyear =  models.CharField(max_length=170, default='')
    urlbalancesheetsecondlastyear =  models.CharField(max_length=170, default='')
    urlbalancesheetthirdlastyear =  models.CharField(max_length=170, default='')
    urlbalancesheetfourthlastyear =  models.CharField(max_length=170, default='')
    urlbalancesheetfifthlastyear =  models.CharField(max_length=170, default='')
    urlbalancesheetsixthlastyear =  models.CharField(max_length=170, default='')
    urlbalancesheetseventhlastyear =  models.CharField(max_length=170, default='')
    #
    urlincomestatementlastyear =  models.CharField(max_length=170, default='')
    urlincomestatementsecondlastyear =  models.CharField(max_length=170, default='')
    urlincomestatementthirdlastyear =  models.CharField(max_length=170, default='')
    urlincomestatementfourthlastyear =  models.CharField(max_length=170, default='')
    urlincomestatementfifthlastyear =  models.CharField(max_length=170, default='')
    urlincomestatementsixthlastyear =  models.CharField(max_length=170, default='')
    urlincomestatementseventhlastyear =  models.CharField(max_length=170, default='')
    #
    urlcomprehensiveincomelastyear =  models.CharField(max_length=170, default='')
    urlcomprehensiveincomesecondlastyear =  models.CharField(max_length=170, default='')
    urlcomprehensiveincomethirdlastyear =  models.CharField(max_length=170, default='')
    urlcomprehensiveincomefourthlastyear =  models.CharField(max_length=170, default='')
    urlcomprehensiveincomefifthlastyear =  models.CharField(max_length=170, default='')
    urlcomprehensiveincomesixthlastyear =  models.CharField(max_length=170, default='')
    urlcomprehensiveincomeseventhlastyear =  models.CharField(max_length=170, default='')
    #
    urlstockholdersequitylastyear =  models.CharField(max_length=170, default='')
    urlstockholdersequitysecondlastyear =  models.CharField(max_length=170, default='')
    urlstockholdersequitythirdlastyear =  models.CharField(max_length=170, default='')
    urlstockholdersequityfourthlastyear =  models.CharField(max_length=170, default='')
    urlstockholdersequityfifthlastyear =  models.CharField(max_length=170, default='')
    urlstockholdersequitysixthlastyear =  models.CharField(max_length=170, default='')
    urlstockholdersequityseventhlastyear =  models.CharField(max_length=170, default='')
    #
    urlcashflowlastyear =  models.CharField(max_length=170, default='')
    urlcashflowsecondlastyear =  models.CharField(max_length=170, default='')
    urlcashflowthirdlastyear =  models.CharField(max_length=170, default='')
    urlcashflowfourthlastyear =  models.CharField(max_length=170, default='')
    urlcashflowfifthlastyear =  models.CharField(max_length=170, default='')
    urlcashflowsixthlastyear =  models.CharField(max_length=170, default='')
    urlcashflowseventhlastyear =  models.CharField(max_length=170, default='')
    #
    urlsauditlastyear = models.IntegerField(default=0)
    urlsauditsecondlastyear = models.IntegerField(default=0)
    urlsauditthirdlastyear = models.IntegerField(default=0)
    urlsauditfourthlastyear = models.IntegerField(default=0)
    urlsauditfifthlastyear = models.IntegerField(default=0)
    urlsauditsixthlastyear = models.IntegerField(default=0)
    #
    def __str__(self):
        return f"{self.TradingSymbol}"

class AuditData(models.Model):
    #
    # General - Audit
    #
    EntityRegistrantName = models.CharField(max_length=93)
    TradingSymbol = models.CharField(max_length=13, default=0)
    AccessionNumber = models.CharField(max_length=20, default='')
    AmendmentFlag = models.CharField(max_length=5, default=0)
    PeriodEndDate = models.DateField(null=True)
    CurrentFiscalYearEndDate = models.CharField(max_length=7, default=0)
    DocumentFiscalPeriodFocus = models.CharField(max_length=2, default=0)
    DocumentFiscalYearFocus = models.CharField(max_length=4, default=0)
    DocumentPeriodEndDate = models.CharField(max_length=13, default=0)
    Period = models.CharField(max_length=27, default=0)
    #
    Status = models.CharField(max_length=7, default='')
    #
    # Balance Sheets - Audit
    #
    CurrentAssets = models.IntegerField(default=0)
    NonCurrentAssets = models.IntegerField(default=0)
    Assets = models.IntegerField(default=0)
    CurrentLiabilities = models.IntegerField(default=0)
    NonCurrentLiabilities = models.IntegerField(default=0)
    Liabilities = models.IntegerField(default=0)
    StockholdersEquity = models.IntegerField(default=0)
    LiabilitiesAndStockholdersEquity = models.IntegerField(default=0)
    #
    AnomalyCurrentAssets = models.IntegerField(default=0)
    AnomalyCurrentAssetsSEC = models.IntegerField(default=0)
    AnomalyNonCurrentAssets = models.IntegerField(default=0)
    AnomalyNonCurrentAssetsSEC = models.IntegerField(default=0)
    AnomalyAssets = models.IntegerField(default=0)
    AnomalyCurrentLiabilities = models.IntegerField(default=0)
    AnomalyCurrentLiabilitiesSEC = models.IntegerField(default=0)
    AnomalyNonCurrentLiabilities = models.IntegerField(default=0)
    AnomalyNonCurrentLiabilitiesSEC = models.IntegerField(default=0)
    AnomalyLiabilities = models.IntegerField(default=0)
    AnomalyStockholdersEquity = models.IntegerField(default=0)
    AnomalyStockholdersEquitySEC = models.IntegerField(default=0)
    AnomalyLiabilitiesAndStockholdersEquity = models.IntegerField(default=0)
    #
    #
    # Income Statements - Audit
    #
    Sales = models.IntegerField(default=0)
    CostOfSales = models.IntegerField(default=0)
    GrossMargin = models.IntegerField(default=0)
    OperatingExpenses = models.IntegerField(default=0)
    OperatingIncome = models.IntegerField(default=0)
    IncomeBeforeTaxes = models.IntegerField(default=0)
    NetIncome = models.IntegerField(default=0)
    NetIncomeAttributableToNonControllingInterest = models.IntegerField(default=0)
    #
    AnomalyGrossMargin = models.IntegerField(default=0)
    AnomalyOperatingExpenses = models.IntegerField(default=0)
    AnomalyOperatingIncome = models.IntegerField(default=0)
    AnomalyIncomeBeforeTaxes = models.IntegerField(default=0)
    AnomalyNetIncome = models.IntegerField(default=0)
    #
    #
    # Comprehensive Income - Audit
    #
    OtherComprehensiveIncome = models.IntegerField(default=0)
    ComprehensiveIncome = models.IntegerField(default=0)
    #
    AnomalyOtherComprehensiveIncome = models.IntegerField(default=0)
    AnomalyComprehensiveIncome = models.IntegerField(default=0)
    #
    #
    # Stockholders Equity - Audit
    #
    StockholdersEquityBeginning = models.IntegerField(default=0)
    #
    CommonShares = models.IntegerField(default=0)
    RetainedEarnings = models.IntegerField(default=0)
    AccumulatedOtherComprehensiveIncome = models.IntegerField(default=0)
    TreasuryShares = models.IntegerField(default=0)
    EmployeeBenefitTrust = models.IntegerField(default=0)
    NonControllingInterests = models.IntegerField(default=0)
    #
    AnomalyCommonShares = models.IntegerField(default=0)
    AnomalyRetainedEarnings = models.IntegerField(default=0)
    AnomalyAccumulatedOtherComprehensiveIncome = models.IntegerField(default=0)
    AnomalyTreasuryShares = models.IntegerField(default=0)
    AnomalyEmployeeBenefitTrust = models.IntegerField(default=0)
    AnomalyNonControllingInterests = models.IntegerField(default=0)
    #
    #
    # Cash Flow - Audit
    #
    OperatingActivities = models.IntegerField(default=0)
    InvestingActivities = models.IntegerField(default=0)
    FinancingActivities = models.IntegerField(default=0)
    IncreaseDecreaseInCash = models.IntegerField(default=0)
    #
    AnomalyOperatingActivities = models.IntegerField(default=0)
    AnomalyOperatingActivitiesSEC = models.IntegerField(default=0)
    AnomalyInvestingActivities = models.IntegerField(default=0)
    AnomalyInvestingActivitiesSEC = models.IntegerField(default=0)
    AnomalyFinancingActivities = models.IntegerField(default=0)
    AnomalyFinancingActivitiesSEC = models.IntegerField(default=0)
    #
    #
    # Supplemental - Audit
    #
    MarketCapitalization = models.IntegerField(default=0)
    EntityCommonStockSharesOutstanding = models.IntegerField(default=0)
    StockPrice = models.FloatField(default=0)
    #
    NormalizedTheoricalInterestCharge = models.IntegerField(default=0)
    TheoricalTaxRate = models.FloatField(default=0)
    TheoricalOperatingIncomeAttributableToNonControllingInterests = models.FloatField(default=0) 
    #
    #
    def __str__(self):
        return f"{self.TradingSymbol}:{self.Period}"

class CashFlow(models.Model):
    #
    # General - Cash Flow
    #
    EntityRegistrantName = models.CharField(max_length=93)
    TradingSymbol = models.CharField(max_length=13, default=0)
    AccessionNumber = models.CharField(max_length=20, default='')
    AmendmentFlag = models.CharField(max_length=5, default=0)
    PeriodEndDate = models.DateField(null=True)
    CurrentFiscalYearEndDate = models.CharField(max_length=7, default=0)
    DocumentFiscalPeriodFocus = models.CharField(max_length=2, default=0)
    DocumentFiscalYearFocus = models.CharField(max_length=4, default=0)
    DocumentPeriodEndDate = models.CharField(max_length=13, default=0)
    Period = models.CharField(max_length=27, default=0)
    #
    # Cash - Cash Flow
    #
    CashBeginningBalance = models.IntegerField(default=0)
    EffectOfExchangeRateOnCash = models.IntegerField(default=0)
    #
    # Operating Activities - Cash Flow
    #
    DepreciationDepletionAndAmortization = models.IntegerField(default=0)
    GainRelatedToDisposalOrSale = models.IntegerField(default=0)
    RestructuringAndOtherSpecialCharges = models.IntegerField(default=0)
    AccruedEmployeeCompensation = models.IntegerField(default=0)
    ShareBasedCompensation = models.IntegerField(default=0)
    IncreaseDecreaseInIncomeTaxExpenseBenefit = models.IntegerField(default=0)
    OtherNonCashIncomeExpense = models.IntegerField(default=0)
    IncreaseDecreaseInAccountsReceivable = models.IntegerField(default=0)
    IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets = models.IntegerField(default=0)
    IncreaseDecreaseInInventories = models.IntegerField(default=0)
    IncreaseDecreaseInOtherReceivables = models.IntegerField(default=0)
    IncreaseDecreaseInAccountsPayableAndAccruedLiabilities = models.IntegerField(default=0)
    IncreaseDecreaseInContractWithCustomerLiability = models.IntegerField(default=0)
    IncreaseDecreaseInRetirementBenefits = models.IntegerField(default=0)
    IncreaseDecreaseOperatingLeaseCurrent = models.IntegerField(default=0)
    IncreaseDecreaseInFairValueOfDerivativesOperating = models.IntegerField(default=0)
    IncreaseDecreaseInOtherOperatingActivities = models.IntegerField(default=0)
    #
    # Investing Activities - Cash Flow
    #
    PaymentsToAcquireInvestments = models.IntegerField(default=0)
    ProceedsOfInvestments = models.IntegerField(default=0)
    PaymentsToAcquirePropertyPlantAndEquipment = models.IntegerField(default=0)
    ProceedsFromDisposalsOfPropertyAndEquipment = models.IntegerField(default=0)
    PaymentsToAcquireBusinessesAndIntangibles = models.IntegerField(default=0)
    ProceedsFromDisposalsOfBusinessesAndIntangibles = models.IntegerField(default=0)
    ProceedsFromCompanyOwnedLifeInsurance = models.IntegerField(default=0)
    ReveiptOfGovernmentGrants = models.IntegerField(default=0)
    OtherInvestingActivities = models.IntegerField(default=0)
    InvestingActivitiesInDiscontinuedOperations = models.IntegerField(default=0)
    #
    # Financing Activities - Cash Flow
    #
    FinanceLeasePrincipalPayments = models.IntegerField(default=0)
    ProceedsFromIssuanceOfCommonStock = models.IntegerField(default=0)
    ProceedsFromStockOptionExercices = models.IntegerField(default=0)
    PaymentsRelatedToTaxWithholdingForShareBasedCompensation = models.IntegerField(default=0)
    PaymentsForRepurchaseOfCommonStock = models.IntegerField(default=0)
    PaymentsOfDividends = models.IntegerField(default=0)
    PaymentsForTaxesRelatedToNetShareSettlementOfEquityAward = models.IntegerField(default=0)
    ProceedsFromIssuanceOfLongTermDebt = models.IntegerField(default=0)
    RepaymentsOfLongTermDebt = models.IntegerField(default=0)
    NetChangeInShortTermBorrowings = models.IntegerField(default=0)
    ProceedsFromRepaymentsOfCommercialPaper = models.IntegerField(default=0)
    RepaymentsOfConvertible = models.IntegerField(default=0)
    IssuanceOfConvertible = models.IntegerField(default=0)
    OtherFinancingActivities = models.IntegerField(default=0)
    #
    # Supplemental - Cash Flow
    #
    CashPaidForTaxes = models.IntegerField(default=0)
    CashPaidForInterest = models.IntegerField(default=0)
    #
    #
    def __str__(self):
        return f"{self.TradingSymbol}:{self.Period}"

class TrialBalance(models.Model):
    #
    #
    # General - Trial Balance
    #
    EntityRegistrantName = models.CharField(max_length=93)
    TradingSymbol = models.CharField(max_length=13, default=0)
    AccessionNumber = models.CharField(max_length=20, default='')
    AmendmentFlag = models.CharField(max_length=5, default=0)
    PeriodEndDate = models.DateField(null=True)
    CurrentFiscalYearEndDate = models.CharField(max_length=7, default=0)
    DocumentFiscalPeriodFocus = models.CharField(max_length=2, default=0)
    DocumentFiscalYearFocus = models.CharField(max_length=4, default=0)
    DocumentPeriodEndDate = models.CharField(max_length=13, default=0)
    PeriodOfReport = models.CharField(max_length=13, default=0)
    NumberOfDays = models.IntegerField(default=0)
    FilingDate = models.CharField(max_length=13, default=0)
    Period = models.CharField(max_length=27, default=0)
    Link = models.CharField(max_length=360, default=0)
    #
    #
    # Current Assets - Trial Balance
    #
    Cash = models.IntegerField(default=0)
    ShortTermInvestments = models.IntegerField(default=0)
    AccountsReceivable = models.IntegerField(default=0)
    WorkInProgress = models.IntegerField(default=0)
    Inventories = models.IntegerField(default=0)
    PrepaidExpenses = models.IntegerField(default=0)
    NonTradeReceivables = models.IntegerField(default=0)
    DeferredTaxAssetsCurrent = models.IntegerField(default=0)
    OtherCurrentAssets = models.IntegerField(default=0)
    DiscontinuedOperationsCurrent = models.IntegerField(default=0)
    #
    #
    # Non-Current Assets - Trial Balance
    #
    LongTermReceivables = models.IntegerField(default=0)
    DeferredCharges = models.IntegerField(default=0)
    Investments = models.IntegerField(default=0)
    PropertyPlantAndEquipment = models.IntegerField(default=0)
    OperatingLeaseRightOfUseAssets = models.IntegerField(default=0)
    FinanceLeaseRightOfUseAssets = models.IntegerField(default=0)
    IntangibleAssets = models.IntegerField(default=0)
    Goodwill = models.IntegerField(default=0)
    DeferredTaxAssetsNonCurrent = models.IntegerField(default=0)
    DefinedBenefitPensionAndOtherSimilarPlans = models.IntegerField(default=0)
    OtherNonCurrentAssets = models.IntegerField(default=0)
    DiscontinuedOperations = models.IntegerField(default=0)
    #
    #
    # Current Liabilities - Trial Balance
    #
    AccountsPayableAndAccruedLiabilities = models.IntegerField(default=0)
    EmployeeCompensationCurrent = models.IntegerField(default=0)
    OperatingLeasesCurrent = models.IntegerField(default=0)
    FinanceLeasesCurrent = models.IntegerField(default=0)
    CapitalLeaseAndFinancingObligationsCurrent = models.IntegerField(default=0)
    DeferredRevenueAndDepositsCurrent = models.IntegerField(default=0)
    AccruedTaxLiabilities = models.IntegerField(default=0)
    DeferredTaxLiabilitiesCurrent = models.IntegerField(default=0)
    CommercialPapers = models.IntegerField(default=0)
    ShortTermBorrowings = models.IntegerField(default=0)
    OtherCurrentLiabilities = models.IntegerField(default=0)
    DiscontinuedOperationsLiabilitiesCurrent = models.IntegerField(default=0)
    DividendsPayable = models.IntegerField(default=0)
    ShortTermPortionOfLongTermDebt = models.IntegerField(default=0)
    #
    #
    # Non-Current Liabilities - Trial Balance
    #
    LongTermDebt = models.IntegerField(default=0)
    RetirementBenefits = models.IntegerField(default=0)
    OperatingLeasesNonCurrent = models.IntegerField(default=0)
    FinanceLeasesNonCurrent = models.IntegerField(default=0)
    CapitalLeaseAndFinancingObligationsNonCurrent = models.IntegerField(default=0)
    DeferredRevenueAndDepositsNonCurrent = models.IntegerField(default=0)
    AccruedTaxLiabilitiesNonCurrent = models.IntegerField(default=0)
    DeferredTaxLiabilitiesNonCurrent = models.IntegerField(default=0)
    OtherNonCurrentLiabilities = models.IntegerField(default=0)
    DiscontinuedOperationsLiabilitiesNonCurrent = models.IntegerField(default=0)
    #
    #
    # Stockholders Equity - Trial Balance
    #
    # common shares
    CommonSharesBeginning = models.IntegerField(default=0)
    CommonStockIssued = models.IntegerField(default=0)
    ShareBasedCompensation = models.IntegerField(default=0)
    #
    # retained earnings
    RetainedEarningsBeginning = models.IntegerField(default=0)
    DividendsAndDividendEquivalentsDeclared = models.IntegerField(default=0)
    CommonStockRepurchasedAndRetired = models.IntegerField(default=0)
    EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts = models.IntegerField(default=0)
    RetainedEarningsOthers = models.IntegerField(default=0)
    #
    # accumulated other comprehensive income
    AccumulatedOtherComprehensiveIncomeBeginning = models.IntegerField(default=0)
    #
    # treasury shares
    TreasurySharesBeginning = models.IntegerField(default=0)
    PurchaseAndSellOfTreasuryShares = models.IntegerField(default=0)
    #
    # employee benefit trust
    EmployeeBenefitTrustBeginning = models.IntegerField(default=0)
    #
    # non controlling interests
    NonControllingInterestsBeginning = models.IntegerField(default=0)
    DividendsDeclaredToNonControllingInterests = models.IntegerField(default=0)
    NonControllingInterestsOthers = models.IntegerField(default=0)
    #
    #
    # Income Statements - Trial Balance
    #
    Sales = models.IntegerField(default=0)
    CostOfSales = models.IntegerField(default=0)
    ResearchAndDevelopment = models.IntegerField(default=0)
    SellingGeneralAdministrativeAndMarketing = models.IntegerField(default=0)
    ImpairmentRestructuringAndOtherSpecialCharges = models.IntegerField(default=0)
    NonOperatingIncome = models.IntegerField(default=0)
    IncomeTaxExpenseBenefit = models.IntegerField(default=0)
    NetIncomeFromDiscontinuedOperations = models.IntegerField(default=0)
    #
    #
    # Other Comprehensive Income - Trial Balance
    #
    ChangeInForeignCurrencyTranslationAdjustment = models.IntegerField(default=0)
    ChangeInUnrealizedGainsLossesOnDerivativeInstruments = models.IntegerField(default=0)
    ChangeInUnrealizedGainsLossesOnInvestments = models.IntegerField(default=0)
    ChangeInDefinedBenefitPensionAndOtherSimilarPlans = models.IntegerField(default=0)
    IncomeTaxOnOtherComprehensiveIncome = models.IntegerField(default=0)
    #
    #
    def __str__(self):
        return f"{self.TradingSymbol}:{self.Period}"
