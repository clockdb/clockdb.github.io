
// analysis/audit.js
console.log('analysis/audit.js')

function Mission() {
    document.getElementById('EntityRegistrantNameMission').innerHTML = document.getElementById('EntityRegistrantName1').value;
    Scope();
}

function Materiality() {
    document.getElementById('EntityRegistrantNameMateriality').innerHTML = document.getElementById('EntityRegistrantName1').value;
    Scope();
    BalanceContinuingOperationsMaterialityThreshold();
    BalanceNetAssetMaterialityThreshold();
    BalanceRevenuesMaterialityThreshold();
    BalanceIntrinsicValueMaterialityThreshold();
    MarketCapMaterialityThreshold();
    BalanceMaterialityThresholdValue();
}

function ProceduresBalanceSheets() {
    document.getElementById('EntityRegistrantNameProceduresBalanceSheets').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateProcedureAnnualBalanceSheets();
    ProcedureAnnualBalanceSheetsAmend();
    BalancePROAssets();
    BalancePROLiabilitiesAndShareholdersEquity();
    BalancePROAssetsLessLiabilitiesAndShareholdersEquity();
    DateProcedureAnnualBalanceSheetsii();
    ProcedureAnnualBalanceSheetsiiAmend();
    BalancePROCurrentAssetsComponents();
    BalancePROCurrentAssetsAnomaly();
    BalancePRONonCurrentAssetsComponents();
    BalancePRONonCurrentAssetsAnomaly();
    BalancePROCurrentLiabilitiesComponents();
    BalancePROCurrentLiabilitiesAnomalies();
    BalancePRONonCurrentLiabilitiesComponents();
    BalancePRONonCurrentLiabilitiesAnomalies();
    BalancePROShareholdersEquityComponents();
    BalancePROShareholdersEquityAnomalies();
    DateProcedureAnnualBalanceSheetsiii();
    ProcedureAnnualBalanceSheetsiiiAmend();
}

function ProceduresIncomeStatements() {
    document.getElementById('EntityRegistrantNameProceduresIncomeStatements').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateProcedureAnnualIncomeStatements();
    ProcedureAnnualIncomeStatementsAmend();
    BalancePROGrossMarginComponents();
    BalancePROGrossMarginAnomalies();
    BalancePROOperatingIncomeComponents();
    BalancePROOperatingIncomeAnomalies();
    BalancePROIncomeLossBeforeTaxesComponents();
    BalancePROIncomeLossBeforeTaxesAnomalies();
    BalancePRONetIncomeComponents();
    BalancePRONetIncomeAnomalies();
    DateProcedureAnnualIncomeStatementsi();
    ProcedureAnnualIncomeStatementsiAmend();
}

function ProceduresComprehensiveIncome() {
    document.getElementById('EntityRegistrantNameProceduresComprehensiveIncome').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateProcedureAnnualComprehensiveIncome();
    ProcedureAnnualComprehensiveIncomeAmend();
    BalanceOtherComprehensiveIncomeComponents();
    BalanceComprehensiveIncomeAnomalies();
    DateProcedureAnnualComprehensiveIncomeStatements();
    ProcedureAnnualComprehensiveIncomeStatementsAmend();
}

function ProceduresShareholdersEquity() {
    document.getElementById('EntityRegistrantNameProceduresShareholdersEquity').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateProcedureAnnualShareholdersEquityiii();
    ProcedureAnnualShareholdersEquityiiiAmend();
    BalanceShareholdersEquityBeginningi();
    BalanceShareholdersEquityComponents();
    BalanceShareholdersEquityAnomaliesi();
    DateProcedureAnnualShareholdersEquity();
    ProcedureAnnualShareholdersEquityAmend();
    BalanceShareholdersEquityComponentsi();
    BalanceShareholdersEquityAnomalies();
    DateProcedureAnnualShareholdersEquityi();
    ProcedureAnnualShareholdersEquityiAmend();
}

function ProceduresCashFlow() {
    document.getElementById('EntityRegistrantNameProceduresCashFlow').innerHTML = document.getElementById('EntityRegistrantName1').value;	
    DateProcedureAnnualCashFlow();
    ProcedureAnnualCashFlowAmend();
    CashFlowCashBeginning();
    CashBalanceSheetsAudit();
    CashFlowCashAnomaly();
    DateProcedureAnnualCashFlowClassification();
    ProcedureAnnualCashFlowClassificationAmend();	
}

function Anomalies() {
    document.getElementById('EntityRegistrantNameAnomalies').innerHTML = document.getElementById('EntityRegistrantName1').value;
    DateAnomaliesi();
    AnomaliesAmend();
    BalanceAnomaliesCurrentAssets();
    BalanceAnomaliesNonCurrentAssets();
    BalanceAnomaliesCurrentLiabilities();
    BalanceAnomaliesNonCurrentLiabilities();
    AnomaliesShareholdersEquityi();
    BalanceAnomaliesBalanceSheets();
    BalanceAnomaliesGrossMargin();
    BalanceAnomaliesOperatingIncome();
    BalanceAnomaliesIncomeBeforeTaxes();
    BalanceAnomaliesNetIncome();
    BalanceAnomaliesIncomeStatements();
    BalanceAnomaliesComprehensiveIncome();
    BalanceAnomaliesShareholdersEquity();
    BalanceAnomaliesCash();
    DateAnomaliesii();
}

function Summary() {
    document.getElementById('EntityRegistrantNameSummary').innerHTML = document.getElementById('EntityRegistrantName1').value;	
    AuditSummaryAmend();
    TrialBalanceAnomalySummary();
    AccountingEquationAnomalySummary();
    BalanceSheetsAnomalySummary();
    IncomeAnomalySummary();
    ComprehensiveIncomeAnomalySummary();
    ShareholdersEquityAnomalySummary();
    CashFlowAnomalySummary();
    MarketCapitalizationAnomalySummary();
    WorstCaseScenario();
    BalanceAnomaliesMatherialityThreshold();
    AnomaliesRatio();
    AuditOpinion();
    BalanceBridgeφ();
}

function Signatory() {
    document.getElementById('SignatoryShortCut').innerHTML = document.getElementById('Signatory1').value;
}

function Scope() {
    document.getElementById('Scope').innerHTML = document.getElementById('ContextDate1').value + ' and the five years prior.'
}
