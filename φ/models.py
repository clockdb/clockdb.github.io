from django.db import models, migrations
from django.db.models.fields import IntegerField

class Master(models.Model):
    entities = models.IntegerField(default=0)
    audited = models.IntegerField(default=0)
    capitalizations = models.IntegerField(default=0)
    industries = models.IntegerField(default=0)
    regions = models.IntegerField(default=0)
    eq = models.IntegerField(default=0)
    onboarded = models.IntegerField(default=0)
    progress = models.FloatField(default=0)

class Capitalization(models.Model):
    db = models.IntegerField(default=0, unique=True)
    dbp = models.IntegerField(default=0)
    leader = models.CharField(max_length=93, default='')
    Len = models.IntegerField(default=0)
    #
    def __str__(self):
        return f"{self.dbp}, {self.db}, {self.Len}"

class PeriodEndDate(models.Model):
    db = models.DateField(null=True, unique=True)
    dbp = models.DateField(null=True)
    Len = models.IntegerField(default=0)
    #
    def __str__(self):
        return f"{self.dbp}, {self.db}, {self.Len}"

class Intrinsic(models.Model):
    db = models.IntegerField(default=0, unique=True)
    Description = models.CharField(max_length=21)
    Len = models.IntegerField(default=0)
    #
    def __str__(self):
        return f"{self.db}, {self.Description}, {self.Len}"

class Phase(models.Model):
    db = models.IntegerField(default=0, unique=True)
    Description = models.CharField(max_length=93)
    Len = models.IntegerField(default=0)
    #
    def __str__(self):
        return f"{self.db}, {self.Description}, {self.Len}"

class Region(models.Model):
    db = models.IntegerField(default=0, unique=True)
    Description = models.CharField(max_length=44)
    Len = models.IntegerField(default=0)
    #
    def __str__(self):
        return f"{self.db}, {self.Description}, {self.Len}"

class Sector(models.Model):
    db = models.IntegerField(default=0, unique=True)
    Description = models.CharField(max_length=44)
    #
    def __str__(self):
        return f"{self.db}, {self.Description}"

class Industry(models.Model):
    db = models.IntegerField(default=0, unique=True)
    Sector_db = models.IntegerField(default=0)
    Description = models.CharField(max_length=61)
    Len = models.IntegerField(default=0)
    #
    def __str__(self):
        return f"{self.db}, {self.Description}, {self.Len}"

class Entity(models.Model):
    #
    db = models.IntegerField(default=0)
    #
    Capitalization_db = models.IntegerField(default=0)
    Intrinsic_db = models.IntegerField(default=0)
    Industry_db = models.IntegerField(default=0)
    PeriodEndDate_db = models.DateField(null=True)
    Region_db = models.IntegerField(default=0)
    Sector_db = models.IntegerField(default=0)
    #
    EntityRegistrantName = models.CharField(max_length=93)
    EntityCentralIndexKey = models.CharField(max_length=10)
    #
    Industry = models.CharField(max_length=61, default='')
    #
    Industry_SEC = models.CharField(max_length=61)
    Industry_SEC_db = models.IntegerField(default=0)
    Industry_SECCode = models.CharField(max_length=10, default='')
    #
    Region = models.CharField(max_length=44)
    RegionCode = models.CharField(max_length=4, default='')
    #
    SecurityExchangeName = models.CharField(max_length=55, default=0)
    TradingSymbol = models.CharField(max_length=7, null=False, unique=True)
    #
    SECurl = models.CharField(max_length=66, default=0)    
    URL = models.CharField(max_length=99, default='')
    #
    SEC_Update = models.DateField(null=True)
    SEC_UpdateDateAndTime = models.DateTimeField(null=True)
    #
    SecuritiesUpdate = models.DateTimeField(null=True)
    #
    OpinionφLastYear = models.CharField(max_length=55, null=True)
    OpinionφSecondLastYear = models.CharField(max_length=55, null=True)
    OpinionφThirdLastYear = models.CharField(max_length=55, null=True)
    OpinionφFourthLastYear = models.CharField(max_length=55, null=True)
    #
    ClockφLastYear = models.IntegerField(default=0, null=True)
    ClockφSecondLastYear = models.IntegerField(default=0, null=True)
    ClockφThirdLastYear = models.IntegerField(default=0, null=True)
    ClockφFourthLastYear = models.IntegerField(default=0, null=True)
    #
    BridgeφLastYear = models.CharField(max_length=100, default=0)
    BridgeφSecondLastYear = models.CharField(max_length=100, default=0)
    BridgeφThirdLastYear = models.CharField(max_length=100, default=0)
    BridgeφFourthLastYear = models.CharField(max_length=100, default=0)
    #
    Anomalies = models.CharField(max_length=100, default=0)
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
    CommonSharesIntrinsicValueLastYear = models.IntegerField(default=0, null=True)
    CommonSharesIntrinsicValueSecondLastYear = models.IntegerField(default=0, null=True)
    CommonSharesIntrinsicValueThirdLastYear = models.IntegerField(default=0, null=True)
    CommonSharesIntrinsicValueFourthLastYear = models.IntegerField(default=0, null=True)
    #
    MarketCapitalizationLastYear = models.IntegerField(default=0, null=True)
    MarketCapitalizationSecondLastYear = models.IntegerField(default=0, null=True)
    MarketCapitalizationThirdLastYear = models.IntegerField(default=0, null=True)
    MarketCapitalizationFourthLastYear = models.IntegerField(default=0, null=True)
    #
    CommonShareIntrinsicValueLastYear = models.FloatField(default=0, null=True)
    CommonShareIntrinsicValueSecondLastYear = models.FloatField(default=0, null=True)
    CommonShareIntrinsicValueThirdLastYear = models.FloatField(default=0, null=True)
    CommonShareIntrinsicValueFourthLastYear = models.FloatField(default=0, null=True)
    #
    CommonSharePriceLastYear = models.FloatField(default=0, null=True)
    CommonSharePriceSecondLastYear = models.FloatField(default=0, null=True)
    CommonSharePriceThirdLastYear = models.FloatField(default=0, null=True)
    CommonSharePriceFourthLastYear = models.FloatField(default=0, null=True)
    #
    CommonSharesOutstandingLastYear = models.IntegerField(default=0, null=True)
    CommonSharesOutstandingSecondLastYear = models.IntegerField(default=0, null=True)
    CommonSharesOutstandingThirdLastYear = models.IntegerField(default=0, null=True)
    CommonSharesOutstandingFourthLastYear = models.IntegerField(default=0, null=True)
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
    urlshareholdersequitylastyear =  models.CharField(max_length=170, default='')
    urlshareholdersequitysecondlastyear =  models.CharField(max_length=170, default='')
    urlshareholdersequitythirdlastyear =  models.CharField(max_length=170, default='')
    urlshareholdersequityfourthlastyear =  models.CharField(max_length=170, default='')
    urlshareholdersequityfifthlastyear =  models.CharField(max_length=170, default='')
    urlshareholdersequitysixthlastyear =  models.CharField(max_length=170, default='')
    urlshareholdersequityseventhlastyear =  models.CharField(max_length=170, default='')
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
    db = models.IntegerField(default=0)
    AccessionNumber = models.CharField(max_length=20, default='')
    AmendmentFlag = models.CharField(max_length=5, default=0)
    CurrentFiscalYearEndDate = models.CharField(max_length=7, default=0)
    DocumentFiscalPeriodFocus = models.CharField(max_length=2, default=0)
    DocumentFiscalYearFocus = models.CharField(max_length=4, default=0)
    DocumentPeriodEndDate = models.CharField(max_length=13, default=0)
    EntityRegistrantName = models.CharField(max_length=93)
    Period = models.CharField(max_length=27, default=0)
    PeriodEndDate = models.DateField(null=True)
    TradingSymbol = models.CharField(max_length=13, default=0)
    #
    # Balance Sheets - Audit
    #
    CurrentAssets = models.IntegerField(default=0)
    NonCurrentAssets = models.IntegerField(default=0)
    Assets = models.IntegerField(default=0)
    CurrentLiabilities = models.IntegerField(default=0)
    NonCurrentLiabilities = models.IntegerField(default=0)
    Liabilities = models.IntegerField(default=0)
    ShareholdersEquity = models.IntegerField(default=0)
    LiabilitiesAndShareholdersEquity = models.IntegerField(default=0)
    #
    AnomalyCurrentAssetsGL_i = models.CharField(max_length=180, default='')
    AnomalyCurrentAssetsValue_i = models.IntegerField(default=0)
    AnomalyCurrentAssetsGL_ii = models.CharField(max_length=180, default='')
    AnomalyCurrentAssetsValue_ii = models.IntegerField(default=0)
    AnomalyCurrentAssetsGL_iii = models.CharField(max_length=180, default='')
    AnomalyCurrentAssetsValue_iii = models.IntegerField(default=0)
    AnomalyCurrentAssets = models.IntegerField(default=0)
    AnomalyCurrentAssetsSEC = models.IntegerField(default=0)
    #
    AnomalyNonCurrentAssetsGL_i = models.CharField(max_length=180, default='')
    AnomalyNonCurrentAssetsValue_i = models.IntegerField(default=0)
    AnomalyNonCurrentAssetsGL_ii = models.CharField(max_length=180, default='')
    AnomalyNonCurrentAssetsValue_ii = models.IntegerField(default=0)
    AnomalyNonCurrentAssetsGL_iii = models.CharField(max_length=180, default='')
    AnomalyNonCurrentAssetsValue_iii = models.IntegerField(default=0)
    AnomalyNonCurrentAssets = models.IntegerField(default=0)
    AnomalyNonCurrentAssetsSEC = models.IntegerField(default=0)
    #
    AnomalyAssets = models.IntegerField(default=0)
    #
    AnomalyCurrentLiabilitiesGL_i = models.CharField(max_length=180, default='')
    AnomalyCurrentLiabilitiesValue_i = models.IntegerField(default=0)
    AnomalyCurrentLiabilitiesGL_ii = models.CharField(max_length=180, default='')
    AnomalyCurrentLiabilitiesValue_ii = models.IntegerField(default=0)
    AnomalyCurrentLiabilitiesGL_iii = models.CharField(max_length=180, default='')
    AnomalyCurrentLiabilitiesValue_iii = models.IntegerField(default=0)
    AnomalyCurrentLiabilities = models.IntegerField(default=0)
    AnomalyCurrentLiabilitiesSEC = models.IntegerField(default=0)
    #
    AnomalyNonCurrentLiabilitiesGL_i = models.CharField(max_length=180, default='')
    AnomalyNonCurrentLiabilitiesValue_i = models.IntegerField(default=0)
    AnomalyNonCurrentLiabilitiesGL_ii = models.CharField(max_length=180, default='')
    AnomalyNonCurrentLiabilitiesValue_ii = models.IntegerField(default=0)
    AnomalyNonCurrentLiabilitiesGL_iii = models.CharField(max_length=180, default='')
    AnomalyNonCurrentLiabilitiesValue_iii = models.IntegerField(default=0)
    AnomalyNonCurrentLiabilities = models.IntegerField(default=0)
    AnomalyNonCurrentLiabilitiesSEC = models.IntegerField(default=0)
    #
    AnomalyLiabilities = models.IntegerField(default=0)
    AnomalyShareholdersEquity = models.IntegerField(default=0)
    #
    AnomalyShareholdersEquityGL_i = models.CharField(max_length=180, default='')
    AnomalyShareholdersEquityValue_i = models.IntegerField(default=0)
    AnomalyShareholdersEquityGL_ii = models.CharField(max_length=180, default='')
    AnomalyShareholdersEquityValue_ii = models.IntegerField(default=0)
    AnomalyShareholdersEquityGL_iii = models.CharField(max_length=180, default='')
    AnomalyShareholdersEquityValue_iii = models.IntegerField(default=0)
    AnomalyShareholdersEquitySEC = models.IntegerField(default=0)
    AnomalyLiabilitiesAndShareholdersEquity = models.IntegerField(default=0)
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
    AnomalyGrossMarginGL_i = models.CharField(max_length=180, default='')
    AnomalyGrossMarginValue_i = models.IntegerField(default=0)
    AnomalyGrossMarginGL_ii = models.CharField(max_length=180, default='')
    AnomalyGrossMarginValue_ii = models.IntegerField(default=0)
    AnomalyGrossMarginGL_iii = models.CharField(max_length=180, default='')
    AnomalyGrossMarginValue_iii = models.IntegerField(default=0)
    AnomalyGrossMargin = models.IntegerField(default=0)
    #
    AnomalyOperatingExpensesGL_i = models.CharField(max_length=180, default='')
    AnomalyOperatingExpensesValue_i = models.IntegerField(default=0)
    AnomalyOperatingExpensesGL_ii = models.CharField(max_length=180, default='')
    AnomalyOperatingExpensesValue_ii = models.IntegerField(default=0)
    AnomalyOperatingExpensesGL_iii = models.CharField(max_length=180, default='')
    AnomalyOperatingExpensesValue_iii = models.IntegerField(default=0)
    AnomalyOperatingExpenses = models.IntegerField(default=0)
    #
    AnomalyOperatingIncomeGL_i = models.CharField(max_length=180, default='')
    AnomalyOperatingIncomeValue_i = models.IntegerField(default=0)
    AnomalyOperatingIncomeGL_ii = models.CharField(max_length=180, default='')
    AnomalyOperatingIncomeValue_ii = models.IntegerField(default=0)
    AnomalyOperatingIncomeGL_iii = models.CharField(max_length=180, default='')
    AnomalyOperatingIncomeValue_iii = models.IntegerField(default=0)
    AnomalyOperatingIncome = models.IntegerField(default=0)
    #
    AnomalyIncomeBeforeTaxesGL_i = models.CharField(max_length=180, default='')
    AnomalyIncomeBeforeTaxesValue_i = models.IntegerField(default=0)
    AnomalyIncomeBeforeTaxesGL_ii = models.CharField(max_length=180, default='')
    AnomalyIncomeBeforeTaxesValue_ii = models.IntegerField(default=0)
    AnomalyIncomeBeforeTaxesGL_iii = models.CharField(max_length=180, default='')
    AnomalyIncomeBeforeTaxesValue_iii = models.IntegerField(default=0)
    AnomalyIncomeBeforeTaxes = models.IntegerField(default=0)
    #
    AnomalyNetIncomeGL_i = models.CharField(max_length=180, default='')
    AnomalyNetIncomeValue_i = models.IntegerField(default=0)
    AnomalyNetIncomeGL_ii = models.CharField(max_length=180, default='')
    AnomalyNetIncomeValue_ii = models.IntegerField(default=0)
    AnomalyNetIncomeGL_iii = models.CharField(max_length=180, default='')
    AnomalyNetIncomeValue_iii = models.IntegerField(default=0)
    AnomalyNetIncome = models.IntegerField(default=0)
    #
    #
    # Comprehensive Income - Audit
    #
    OtherComprehensiveIncome = models.IntegerField(default=0)
    ComprehensiveIncome = models.IntegerField(default=0)
    #
    AnomalyOtherComprehensiveIncomeGL_i = models.CharField(max_length=180, default='')
    AnomalyOtherComprehensiveIncomeValue_i = models.IntegerField(default=0)
    AnomalyOtherComprehensiveIncomeGL_ii = models.CharField(max_length=180, default='')
    AnomalyOtherComprehensiveIncomeValue_ii = models.IntegerField(default=0)
    AnomalyOtherComprehensiveIncomeGL_iii = models.CharField(max_length=180, default='')
    AnomalyOtherComprehensiveIncomeValue_iii = models.IntegerField(default=0)
    AnomalyOtherComprehensiveIncome = models.IntegerField(default=0)
    AnomalyComprehensiveIncome = models.IntegerField(default=0)
    #
    #
    # Shareholders Equity - Audit
    #
    ShareholdersEquityBeginning = models.IntegerField(default=0)
    #
    ConvertibleDebt = models.IntegerField(default=0)
    CommonShares = models.IntegerField(default=0)
    RetainedEarnings = models.IntegerField(default=0)
    AccumulatedOtherComprehensiveIncome = models.IntegerField(default=0)
    TreasuryShares = models.IntegerField(default=0)
    EmployeeBenefitTrust = models.IntegerField(default=0)
    NonControllingInterests = models.IntegerField(default=0)
    #
    AnomalyConvertibleDebtGL_i = models.CharField(max_length=180, default='')
    AnomalyConvertibleDebtValue_i = models.IntegerField(default=0)
    AnomalyConvertibleDebtGL_ii = models.CharField(max_length=180, default='')
    AnomalyConvertibleDebtValue_ii = models.IntegerField(default=0)
    AnomalyConvertibleDebtGL_iii = models.CharField(max_length=180, default='')
    AnomalyConvertibleDebtValue_iii = models.IntegerField(default=0)
    AnomalyConvertibleDebt = models.IntegerField(default=0)
    #
    AnomalyCommonSharesGL_i = models.CharField(max_length=180, default='')
    AnomalyCommonSharesValue_i = models.IntegerField(default=0)
    AnomalyCommonSharesGL_ii = models.CharField(max_length=180, default='')
    AnomalyCommonSharesValue_ii = models.IntegerField(default=0)
    AnomalyCommonSharesGL_iii = models.CharField(max_length=180, default='')
    AnomalyCommonSharesValue_iii = models.IntegerField(default=0)
    AnomalyCommonShares = models.IntegerField(default=0)
    #
    AnomalyRetainedEarningsGL_i = models.CharField(max_length=180, default='')
    AnomalyRetainedEarningsValue_i = models.IntegerField(default=0)
    AnomalyRetainedEarningsGL_ii = models.CharField(max_length=180, default='')
    AnomalyRetainedEarningsValue_ii = models.IntegerField(default=0)
    AnomalyRetainedEarningsGL_iii = models.CharField(max_length=180, default='')
    AnomalyRetainedEarningsValue_iii = models.IntegerField(default=0)
    AnomalyRetainedEarnings = models.IntegerField(default=0)
    #
    AnomalyAccumulatedOtherComprehensiveIncomeGL_i = models.CharField(max_length=180, default='')
    AnomalyAccumulatedOtherComprehensiveIncomeValue_i = models.IntegerField(default=0)
    AnomalyAccumulatedOtherComprehensiveIncomeGL_ii = models.CharField(max_length=180, default='')
    AnomalyAccumulatedOtherComprehensiveIncomeValue_ii = models.IntegerField(default=0)
    AnomalyAccumulatedOtherComprehensiveIncomeGL_iii = models.CharField(max_length=180, default='')
    AnomalyAccumulatedOtherComprehensiveIncomeValue_iii = models.IntegerField(default=0)
    AnomalyAccumulatedOtherComprehensiveIncome = models.IntegerField(default=0)
    #
    AnomalyTreasurySharesGL_i = models.CharField(max_length=180, default='')
    AnomalyTreasurySharesValue_i = models.IntegerField(default=0)
    AnomalyTreasurySharesGL_ii = models.CharField(max_length=180, default='')
    AnomalyTreasurySharesValue_ii = models.IntegerField(default=0)
    AnomalyTreasurySharesGL_iii = models.CharField(max_length=180, default='')
    AnomalyTreasurySharesValue_iii = models.IntegerField(default=0)
    AnomalyTreasuryShares = models.IntegerField(default=0)
    #
    AnomalyEmployeeBenefitTrustGL_i = models.CharField(max_length=180, default='')
    AnomalyEmployeeBenefitTrustValue_i = models.IntegerField(default=0)
    AnomalyEmployeeBenefitTrustGL_ii = models.CharField(max_length=180, default='')
    AnomalyEmployeeBenefitTrustValue_ii = models.IntegerField(default=0)
    AnomalyEmployeeBenefitTrustGL_iii = models.CharField(max_length=180, default='')
    AnomalyEmployeeBenefitTrustValue_iii = models.IntegerField(default=0)
    AnomalyEmployeeBenefitTrust = models.IntegerField(default=0)
    #
    AnomalyNonControllingInterestsGL_i = models.CharField(max_length=180, default='')
    AnomalyNonControllingInterestsValue_i = models.IntegerField(default=0)
    AnomalyNonControllingInterestsGL_ii = models.CharField(max_length=180, default='')
    AnomalyNonControllingInterestsValue_ii = models.IntegerField(default=0)
    AnomalyNonControllingInterestsGL_iii = models.CharField(max_length=180, default='')
    AnomalyNonControllingInterestsValue_iii = models.IntegerField(default=0)
    AnomalyNonControllingInterests = models.IntegerField(default=0)
    #
    #
    # Cash Flow - Audit
    #
    OperatingActivities = models.IntegerField(default=0)
    InvestingActivities = models.IntegerField(default=0)
    FinancingActivities = models.IntegerField(default=0)
    increaseDecreaseInCash = models.IntegerField(default=0)
    #
    AnomalyOperatingActivitiesGL_i = models.CharField(max_length=180, default='')
    AnomalyOperatingActivitiesValue_i = models.IntegerField(default=0)
    AnomalyOperatingActivitiesGL_ii = models.CharField(max_length=180, default='')
    AnomalyOperatingActivitiesValue_ii = models.IntegerField(default=0)
    AnomalyOperatingActivitiesGL_iii = models.CharField(max_length=180, default='')
    AnomalyOperatingActivitiesValue_iii = models.IntegerField(default=0)
    AnomalyOperatingActivities = models.IntegerField(default=0)
    AnomalyOperatingActivitiesSEC = models.IntegerField(default=0)
    #
    AnomalyInvestingActivitiesGL_i = models.CharField(max_length=180, default='')
    AnomalyInvestingActivitiesValue_i = models.IntegerField(default=0)
    AnomalyInvestingActivitiesGL_ii = models.CharField(max_length=180, default='')
    AnomalyInvestingActivitiesValue_ii = models.IntegerField(default=0)
    AnomalyInvestingActivitiesGL_iii = models.CharField(max_length=180, default='')
    AnomalyInvestingActivitiesValue_iii = models.IntegerField(default=0)
    AnomalyInvestingActivities = models.IntegerField(default=0)
    AnomalyInvestingActivitiesSEC = models.IntegerField(default=0)
    #
    AnomalyFinancingActivitiesGL_i = models.CharField(max_length=180, default='')
    AnomalyFinancingActivitiesValue_i = models.IntegerField(default=0)
    AnomalyFinancingActivitiesGL_ii = models.CharField(max_length=180, default='')
    AnomalyFinancingActivitiesValue_ii = models.IntegerField(default=0)
    AnomalyFinancingActivitiesGL_iii = models.CharField(max_length=180, default='')
    AnomalyFinancingActivitiesValue_iii = models.IntegerField(default=0)
    AnomalyFinancingActivities = models.IntegerField(default=0)
    AnomalyFinancingActivitiesSEC = models.IntegerField(default=0)
    #
    #
    # Supplemental - Audit
    #
    MarketCapitalization = models.IntegerField(default=0)
    CommonSharesOutstanding = models.IntegerField(default=0)
    CommonSharePrice = models.FloatField(default=0)
    CommonSharePriceUpdate = models.FloatField(default=0)
    URLoustandingshares = models.CharField(max_length=100, default='')
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
    AccessionNumber = models.CharField(max_length=20, default='')
    AmendmentFlag = models.CharField(max_length=5, default=0)
    CurrentFiscalYearEndDate = models.CharField(max_length=7, default=0)
    DocumentFiscalPeriodFocus = models.CharField(max_length=2, default=0)
    DocumentFiscalYearFocus = models.CharField(max_length=4, default=0)
    DocumentPeriodEndDate = models.CharField(max_length=13, default=0)
    EntityRegistrantName = models.CharField(max_length=93)
    Period = models.CharField(max_length=27, default=0)
    PeriodEndDate = models.DateField(null=True)
    TradingSymbol = models.CharField(max_length=13, default=0)
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
    IncreaseDecreaseFinanceLeaseCurrent = models.IntegerField(default=0)
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
    ProceedsRelatedToInsuranceSettlement = models.IntegerField(default=0)
    ReveiptOfGovernmentGrants = models.IntegerField(default=0)
    PaymentOfLicenseFee = models.IntegerField(default=0)
    InvestingActivitiesInDiscontinuedOperations = models.IntegerField(default=0)
    OtherInvestingActivities = models.IntegerField(default=0)
    #
    # Financing Activities - Cash Flow
    #
    FinanceLeasePrincipalPayments = models.IntegerField(default=0)
    ProceedsFromIssuanceOfCommonShares = models.IntegerField(default=0)
    ProceedsFromSharePurchasePlanAndOptionsExercice = models.IntegerField(default=0)
    PaymentsRelatedToTaxWithholdingForShareBasedCompensation = models.IntegerField(default=0)
    PaymentsForRepurchaseOfCommonShares = models.IntegerField(default=0)
    PaymentsOfDividends = models.IntegerField(default=0)
    IncreaseDecreaseDeferredContingentConsideration = models.IntegerField(default=0)
    ProceedsFromIssuanceOfLongTermDebt = models.IntegerField(default=0)
    RepaymentsOfLongTermDebt = models.IntegerField(default=0)
    FinancingCosts = models.IntegerField(default=0)
    NetChangeInShortTermBorrowings = models.IntegerField(default=0)
    NetChangeInForwardAndHedgesClassifiedAsFinancingActivities = models.IntegerField(default=0)
    NetChangeInNonControllingInterests = models.IntegerField(default=0)
    ProceedsFromRepaymentsOfCommercialPaper = models.IntegerField(default=0)
    RepaymentsOfConvertible = models.IntegerField(default=0)
    IssuanceOfConvertible = models.IntegerField(default=0)
    EquityInvesteeAdvancesRepayments = models.IntegerField(default=0)
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
    AccessionNumber = models.CharField(max_length=20, default='')
    AmendmentFlag = models.CharField(max_length=5, default=0)
    CurrentFiscalYearEndDate = models.CharField(max_length=7, default=0)
    DocumentFiscalPeriodFocus = models.CharField(max_length=2, default=0)
    DocumentFiscalYearFocus = models.CharField(max_length=4, default=0)
    DocumentPeriodEndDate = models.CharField(max_length=13, default=0)
    EntityRegistrantName = models.CharField(max_length=93)
    FilingDate = models.CharField(max_length=13, default=0)
    Link = models.CharField(max_length=360, default=0)
    NumberOfDays = models.IntegerField(default=0)
    Period = models.CharField(max_length=27, default=0)
    PeriodEndDate = models.DateField(null=True)
    PeriodOfReport = models.CharField(max_length=13, default=0)
    TradingSymbol = models.CharField(max_length=13, default=0)
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
    PrepaidTaxAssetsCurrent = models.IntegerField(default=0)
    DeferredTaxAssetsCurrent = models.IntegerField(default=0)
    RightOfUseAssetsCurrent = models.IntegerField(default=0)
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
    RefundableTaxAssetsNonCurrent = models.IntegerField(default=0)
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
    PreferredSharesLiability = models.IntegerField(default=0)
    RetirementBenefits = models.IntegerField(default=0)
    OperatingLeasesNonCurrent = models.IntegerField(default=0)
    FinanceLeasesNonCurrent = models.IntegerField(default=0)
    LeaseIncentiveObligation = models.IntegerField(default=0)
    DeferredRevenueAndDepositsNonCurrent = models.IntegerField(default=0)
    ContingentConsideration = models.IntegerField(default=0)
    AccruedTaxLiabilitiesNonCurrent = models.IntegerField(default=0)
    DeferredTaxLiabilitiesNonCurrent = models.IntegerField(default=0)
    OtherNonCurrentLiabilities = models.IntegerField(default=0)
    RedeemableNonControllingInterests = models.IntegerField(default=0)
    DiscontinuedOperationsLiabilitiesNonCurrent = models.IntegerField(default=0)
    #
    #
    # Shareholders Equity - Trial Balance
    #
    # convertible debt
    ConvertibleDebtBeginning = models.IntegerField(default=0)
    #
    # common shares
    CommonSharesBeginning = models.IntegerField(default=0)
    CommonSharesIssued = models.IntegerField(default=0)
    ShareBasedCompensation = models.IntegerField(default=0)
    #
    # retained earnings
    RetainedEarningsBeginning = models.IntegerField(default=0)
    DividendsAndDividendEquivalentsDeclared = models.IntegerField(default=0)
    CommonSharesRepurchasedAndRetired = models.IntegerField(default=0)
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
    AcquisitionOfNonControllingInterests = models.IntegerField(default=0)
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
    EquityMethodInvesteesIncome = models.IntegerField(default=0)
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
