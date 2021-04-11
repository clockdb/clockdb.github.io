from django.http import HttpResponse
from django.shortcuts import render
from .models import *
import datetime

# ABOUT
def about(request):
    return render(request, "./φ/about.html")

# ANALYSIS
def analysis(request, entity_TradingSymbol):
    # entity
    entity = Entity.objects.get(TradingSymbol=entity_TradingSymbol)
    # trial balance
    TrialBalance_lastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="lastyear")
    TrialBalance_secondlastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="secondlastyear")
    TrialBalance_thirdlastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="thirdlastyear")
    TrialBalance_fourthlastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="fourthlastyear")
    TrialBalance_fifthlastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="fifthlastyear")
    TrialBalance_sixthlastyear = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="sixthlastyear")
    # cash flow
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
    #
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

# DB
def db(request):
    return render(request, "./φ/db.html", {
        "entities": Entity.objects.all().order_by('-Clockφ')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 7.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
    })

# DISCLAIMER
def disclaimer(request):
    return render(request, "./φ/disclaimer.html")

# INDEX
def index(request):
    return render(request, "./φ/index.html")

# MASTER
def master(request):
    return render(request, "./φ/master.html", {
        "entities": Entity.objects.all().order_by('-Status', '-lastyear', 'TradingSymbol')
    })

# MEMO
def memo(request):
    return render(request, "./φ/memo.html")

# MEMO1
def memo1(request):
    return render(request, "./φ/memo1.html")

# MINING
def mining(request):
    return render(request, "./φ/mining.html")

# PHASE 1
def phase1(request):
    return render(request, "./φ/phase1.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 7.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })

# PHASE 2
def phase2(request):
    return render(request, "./φ/phase2.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 7.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })

# PHASE 3
def phase3(request):
    return render(request, "./φ/phase3.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 7.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })

# PHASE 4
def phase4(request):
    return render(request, "./φ/phase4.html", {
        "db": Database.objects.all()[0]
    })

# PHASE 4.1
def phase41(request):
    return render(request, "./φ/phase4.1.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 7.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })
    
# PHASE 4.2
def phase42(request):
    return render(request, "./φ/phase4.2.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })
    
# PHASE 4.3
def phase43(request):
    return render(request, "./φ/phase4.3.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })

# PHASE 5
def phase5(request):
    return render(request, "./φ/phase5.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })

# PHASE 6
def phase6(request):
    return render(request, "./φ/phase6.html", {
        "db": Database.objects.all()[0]
    })

# PHASE 6.1
def phase61(request):
    return render(request, "./φ/phase6.1.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })

# PHASE 6.2
def phase62(request):
    return render(request, "./φ/phase6.2.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })

# PHASE 7
def phase7(request):
    return render(request, "./φ/phase7.html", {
        "db": Database.objects.all()[0]
    })

# PHASE 7
def phase7(request):
    return render(request, "./φ/phase7.html", {
        "entities": Entity.objects.all().order_by('-lastyear', 'TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })

# PHASE 8
def phase8(request):
    return render(request, "./φ/phase8.html", {
        "entities": Entity.objects.all().order_by('-lastyear', 'TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })

# PHASES
def phases(request):
    return render(request, "./φ/phases.html", {
        "db": Database.objects.all()[0]
    })

# PREPARED
def prepared(request):
    return render(request, "./φ/prepared.html", {
        "entities": Entity.objects.all().order_by('-lastyear', 'TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Audited')
    })

# REVIEWED
def reviewed(request):
    return render(request, "./φ/reviewed.html", {
        "entities": Entity.objects.all().order_by('-lastyear', 'TradingSymbol')
        .exclude(Status='Inactive')
        .exclude(Status='Phase 1')
        .exclude(Status='Phase 2')
        .exclude(Status='Phase 3')
        .exclude(Status='Phase 4.1')
        .exclude(Status='Phase 4.2')
        .exclude(Status='Phase 4.3')
        .exclude(Status='Phase 5')
        .exclude(Status='Phase 6.1')
        .exclude(Status='Phase 6.2')
        .exclude(Status='Phase 7')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
    })
