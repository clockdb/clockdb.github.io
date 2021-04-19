from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import views

app_name = "φ"

urlpatterns = [
    #
    path("about/", views.about, name="about"),
    #
    path("auditeddatabase/", views.auditeddatabase, name="auditeddatabase"),
    #
    path("db/", views.db, name="db"),
    #
    path("disclaimer/", views.disclaimer, name="disclaimer"),
    #
    path("economics/", views.economics, name="economics"),
    #
    path("", views.index, name="index"),
    #
    path("master/", views.master, name="master"),
    #
    path("memo/", views.memo, name="memo"),
    path("memo1/", views.memo1, name="memo1"),
    #
    path("mining/", views.mining, name="mining"),
    #
    path("phase1/", views.phase1, name="phase1"),
    path("phase2/", views.phase2, name="phase2"),
    path("phase3/", views.phase3, name="phase3"),
    path("phase4/", views.phase4, name="phase4"),
    path("phase4.1/", views.phase41, name="phase4.1"),
    path("phase4.2/", views.phase42, name="phase4.2"),
    path("phase4.3/", views.phase43, name="phase4.3"),
    path("phase5/", views.phase5, name="phase5"),
    path("phase6/", views.phase6, name="phase6"),
    path("phase6.1/", views.phase61, name="phase6.1"),
    path("phase6.2/", views.phase62, name="phase6.2"),
    path("phase6.3/", views.phase63, name="phase6.3"),
    path("phase7/", views.phase7, name="phase7"),
    path("phase7.1/", views.phase71, name="phase7.1"),
    path("phase7.2/", views.phase72, name="phase7.2"),
    path("phase7.3/", views.phase73, name="phase7.3"),
    path("phase7.4/", views.phase74, name="phase7.4"),
    path("phase7.5/", views.phase75, name="phase7.5"),
    path("phase7.6/", views.phase76, name="phase7.6"),
    path("phase7.7/", views.phase77, name="phase7.7"),
    path("phase7.8/", views.phase78, name="phase7.8"),
    path("phase8/", views.phase8, name="phase8"),
    #
    path("phases/", views.phases, name="phases"),
    #
    path("prepared/", views.prepared, name="prepared"),
    #
    path("<str:entity_TradingSymbol>/", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Community", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Arch", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Bridge", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Clock", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Summary", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Graph", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Opinion", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Context", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualCashFlow", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualBalanceSheets", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualIncomeStatements", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualComprehensiveIncome", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualStockholdersEquity", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualTrialBalances", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Mission", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/MaterialityThreshold", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Procedure", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/ProcedureAnnualCashFlow", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/ProcedureAnnualBalanceSheets", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/ProcedureAnnualIncomeStatements", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/ProcedureAnnualComprehensiveIncome", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/ProcedureAnnualStockholdersEquity", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AuditDetailed", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AuditSummary", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualFinancialRatios", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AdditionalInformation", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/CapitalizedCashFlow", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/CapitalizedIncome", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/IntrinsicValues", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/CapitalizationRate", views.analysis, name="analysis"),
    #
]

urlpatterns += staticfiles_urlpatterns()