from django.http import HttpResponse
from django.shortcuts import render
from .models import *
import datetime

# INDEX
def index(request):
    return render(request, "./φ/index.html")

# ANALYSIS
def analysis(request, entity_TradingSymbol):
    # ENTITY
    entity = Entity.objects.get(TradingSymbol=entity_TradingSymbol)
    # TRIAL BALANCE
    TrialBalance_lastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="lastyear")
    TrialBalance_secondlastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="secondlastyear")
    TrialBalance_thirdlastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="thirdlastyear")
    TrialBalance_fourthlastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="fourthlastyear")
    TrialBalance_fifthlastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="fifthlastyear")
    TrialBalance_sixthlastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="sixthlastyear")
    # CASH FLOW
    CashFlow_lastyear = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="lastyear")
    CashFlow_secondlastyear = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="secondlastyear")
    CashFlow_thirdlastyear = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="thirdlastyear")
    CashFlow_fourthlastyear = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="fourthlastyear")
    CashFlow_fifthlastyear = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="fifthlastyear")
    CashFlow_sixthlastyear = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="sixthlastyear")
    # AuditData
    AuditData_lastyear = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="lastyear")
    AuditData_secondlastyear = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="secondlastyear")
    AuditData_thirdlastyear = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="thirdlastyear")
    AuditData_fourthlastyear = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="fourthlastyear")
    AuditData_fifthlastyear = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="fifthlastyear")
    AuditData_sixthlastyear = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="sixthlastyear")
    return render(request, "./φ/analysis.html", {
        #
        "entity": entity,
        #
        "TrialBalance_lastyear": TrialBalance_lastyear,
        "TrialBalance_secondlastyear": TrialBalance_secondlastyear,
        "TrialBalance_thirdlastyear": TrialBalance_thirdlastyear,
        "TrialBalance_fourthlastyear": TrialBalance_fourthlastyear,
        "TrialBalance_fifthlastyear": TrialBalance_fifthlastyear,
        "TrialBalance_sixthlastyear": TrialBalance_sixthlastyear,
        #
        "CashFlow_lastyear": CashFlow_lastyear,
        "CashFlow_secondlastyear": CashFlow_secondlastyear,
        "CashFlow_thirdlastyear": CashFlow_thirdlastyear,
        "CashFlow_fourthlastyear": CashFlow_fourthlastyear,
        "CashFlow_fifthlastyear": CashFlow_fifthlastyear,
        "CashFlow_sixthlastyear": CashFlow_sixthlastyear,
        #
        "AuditData_lastyear": AuditData_lastyear,
        "AuditData_secondlastyear": AuditData_secondlastyear,
        "AuditData_thirdlastyear": AuditData_thirdlastyear,
        "AuditData_fourthlastyear": AuditData_fourthlastyear,
        "AuditData_fifthlastyear": AuditData_fifthlastyear,
        "AuditData_sixthlastyear": AuditData_sixthlastyear,
    })

# FILTERKING
def filterking(request):
    return render(request, "./φ/filterking.html", {
        "entities": Entity.objects.all().order_by('EntityRegistrantName')
    })

# DISCLAIMER
def disclaimer(request):
    return render(request, "./φ/disclaimer.html")
    
# ENTITIES
def entities(request):
    return render(request, "./φ/entities.html", {
        "entities": Entity.objects.all().order_by('-TradingSymbol')
    })

# DOCUMENTATION
def documentation(request):
    return render(request, "./φ/documentation.html")
    