from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import views

app_name = "φ"

urlpatterns = [
    #
    path("about/", views.about, name="about"),
    #
    path("commands/", views.commands, name="commands"),
    #
    path("disclaimer/", views.disclaimer, name="disclaimer"),
    #
    path("documentation/", views.documentation, name="documentation"),
    #
    path("", views.index, name="index"),
    #
    path(
        "<str:industry_db>/<str:industry_SEC_db>/<str:periodenddate_db>/<str:db>/<str:region_db>/<str:order_db>/<str:sort_db>/",
        views.posts,
        name="posts"
        ),
    #
    path("master/", views.master, name="master"),
    #
    path("phases/", views.phases, name="phases"),
    path("phases/<str:db>/", views.phase, name="phase"),
    #
    path(
        "<str:industry_db>/<str:industry_SEC_db>/<str:periodenddate_db>/<str:db>/<str:region_db>/<str:order_db>/<str:sort_db>/",
        views.results,
        name="results"
        ),
    #
    path("<str:entity_TradingSymbol>/", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Community", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Arch", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Bridge", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Clock", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Summary", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Graph", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Opinion", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Settings", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Documentation", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Commands", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Context", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualCashFlow", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualBalanceSheets", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualIncomeStatements", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualComprehensiveIncome", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualShareholdersEquity", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualTrialBalances", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Mission", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/MaterialityThreshold", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Procedures", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/ProcedureAnnualCashFlow", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/ProcedureAnnualBalanceSheets", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/ProcedureAnnualIncomeStatements", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/ProcedureAnnualComprehensiveIncome", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/ProcedureAnnualShareholdersEquity", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AuditDetailed", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AuditSummary", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualFinancialRatios", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AdditionalInformation", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/CapitalizedCashFlow", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/CapitalizedIncome", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/IntrinsicValues", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/CapitalizationRate", views.analysis, name="analysis"),
    #
    path("<str:entity_TradingSymbol>/Files", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/ReferenceMap", views.analysis, name="analysis"),
    
    #
]

urlpatterns += staticfiles_urlpatterns()