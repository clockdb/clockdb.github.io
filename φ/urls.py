from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import views

app_name = "φ"

urlpatterns = [
    #
    # administrative
    #
    path("about/", views.about, name="about"),
    #
    path("commands/", views.commands, name="commands"),
    #
    path("database/", views.database, name="database"),
    #
    path("disclaimer/", views.disclaimer, name="disclaimer"),
    #
    path("documentation/", views.documentation, name="documentation"),
    #
    path("", views.index, name="index"),
    #
    # high level
    #
    path("capitalizations/", views.capitalizations, name="capitalizations"),
    path("capitalizations/<str:capitalization_db>/", views.capitalization, name="capitalization"),
    #
    path("industries/", views.industries, name="industries"),
    path("industries/<str:industry_db>/", views.industry, name="industry"),
    #
    path("intrinsics/", views.intrinsics, name="intrinsics"),
    path("intrinsics/<str:intrinsic_db>/", views.intrinsic, name="intrinsic"),
    #
    path("phases/", views.phases, name="phases"),
    path("phases/<str:db>/", views.phase, name="phase"),
    #
    path("regions/", views.regions, name="regions"),
    path("regions/<str:region_db>/", views.region, name="region"),
    #
    # master
    #
    path("master/", views.master, name="master"),
    #
    path("menu/", views.menu, name="menu"),
    #
    path(
        "<str:industry_db>/<str:industry_SEC_db>/<str:periodenddate_db>/<str:db>/<str:region_db>/<str:order_db>/<str:sort_db>/",
        views.results,
        name="results"
        ),
    #
    # analysis
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
    path("<str:entity_TradingSymbol>/AnnualShareholdersEquity", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/AnnualTrialBalances", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Mission", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/MaterialityThreshold", views.analysis, name="analysis"),
    path("<str:entity_TradingSymbol>/Procedure", views.analysis, name="analysis"),
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
]

urlpatterns += staticfiles_urlpatterns()