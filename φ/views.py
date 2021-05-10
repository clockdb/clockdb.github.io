from django.core.paginator import Paginator
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

# AUDITED
def audited(request):
    return render(request, "./φ/audited.html", {
        "db": Database.objects.all()[0]
    })

# DATABASE
def database(request):
    return render(request, "./φ/database.html", {
        "entities": Entity.objects.all().order_by('-Clockφ')
        .filter(Status='Audited')
    })

# CAPITALIZATION
def capitalization(request):
    return render(request, "./φ/capitalization.html")

# CONSOLIDATED
def consolidated(request):
    return render(request, "./φ/consolidated.html")

# DISCLAIMER
def disclaimer(request):
    return render(request, "./φ/disclaimer.html")

# ECONOMICS
def economics(request):
    return render(request, "./φ/economics.html")

# REGIONAL
def regional(request):
    return render(request, "./φ/regional.html")
    
# INDEX
def index(request):
    return render(request, "./φ/index.html", {
        "db": Database.objects.all()[0]
    })

# INDUSTRIAL
def industrial(request):
    return render(request, "./φ/industrial.html")

# MASTER
def master(request):
    return render(request, "./φ/master.html", {
        "db": Database.objects.all()[0]
    })

# MEMO
def memo(request):
    return render(request, "./φ/memo.html")

# MEMO1
def memo1(request):
    return render(request, "./φ/memo1.html")

# MINING
def mining(request):
    return render(request, "./φ/mining.html", {
        "db": Database.objects.all()[0]
    })

# OVERVIEW
def overview(request):
    return render(request, "./φ/overview.html", {
        "entities": Entity.objects.all().order_by('-Status', '-lastyear', 'TradingSymbol')
        .exclude(Status='Inactive')
    })

# PHASE 1
def phase1(request):
    return render(request, "./φ/phases/phase1.html", {
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
        .exclude(Status='Phase 6.3')
        .exclude(Status='Phase 7.0')
        .exclude(Status='Phase 7.1')
        .exclude(Status='Phase 7.2')
        .exclude(Status='Phase 7.3')
        .exclude(Status='Phase 7.4')
        .exclude(Status='Phase 7.5')
        .exclude(Status='Phase 7.6')
        .exclude(Status='Phase 7.7')
        .exclude(Status='Phase 7.8')
        .exclude(Status='Phase 8')
        .exclude(Status='Prepared')
        .exclude(Status='Audited')
    })

# PHASE 2
def phase2(request):
    return render(request, "./φ/phases/phase2.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .filter(Status='Phase 2')
    })

# PHASE 3
def phase3(request):
    return render(request, "./φ/phases/phase3.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .filter(Status='Phase 3')
    })

# PHASE 4
def phase4(request):
    return render(request, "./φ/phases/phase4.html", {
        "db": Database.objects.all()[0]
    })

# PHASE 4.1
def phase41(request):
    return render(request, "./φ/phases/phase4.1.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .filter(Status='Phase 4.1')
    })
    
# PHASE 4.2
def phase42(request):
    return render(request, "./φ/phases/phase4.2.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .filter(Status='Phase 4.2')
    })
    
# PHASE 4.3
def phase43(request):
    return render(request, "./φ/phases/phase4.3.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .filter(Status='Phase 4.3')
    })

# PHASE 5
def phase5(request):
    return render(request, "./φ/phases/phase5.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .filter(Status='Phase 5')
    })

# PHASE 6
def phase6(request):
    return render(request, "./φ/phases/phase6.html", {
        "db": Database.objects.all()[0]
    })

# PHASE 6.1
def phase61(request):
    return render(request, "./φ/phases/phase6.1.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .filter(Status='Phase 6.1')
    })

# PHASE 6.2
def phase62(request):
    return render(request, "./φ/phases/phase6.2.html", {
        "entities": Entity.objects.all().order_by('TradingSymbol')
        .filter(Status='Phase 6.2')
    })

# PHASE 6.3
def phase63(request):
    return render(request, "./φ/phases/phase6.3.html", {
        "entities": Entity.objects.all().order_by('-lastyear', 'TradingSymbol')
        .filter(Status='Phase 6.3')
    })

# PHASE 7
def phase7(request):
    return render(request, "./φ/phases/phase7.html", {
        "db": Database.objects.all()[0]
    })

# PHASE 7.1
def phase71(request):
    return render(request, "./φ/phases/phase7.1.html", {
        "entities": Entity.objects.all().order_by('-NumberOfYearsAudited', 'AnomaliesRatio1',  'AnomaliesRatio2', 'AnomaliesRatio3', 'AnomaliesRatio4', 'AnomaliesRatio5', 'AnomaliesRatio6', '-lastyear', 'TradingSymbol')
        .filter(Status='Phase 7.1')
    })

# PHASE 7.2
def phase72(request):
    return render(request, "./φ/phases/phase7.2.html", {
        "entities": Entity.objects.all().order_by('-NumberOfYearsAudited', 'AnomaliesRatio1',  'AnomaliesRatio2', 'AnomaliesRatio3', 'AnomaliesRatio4', 'AnomaliesRatio5', 'AnomaliesRatio6', '-lastyear', 'TradingSymbol')
        .filter(Status='Phase 7.2')

    })

# PHASE 7.3
def phase73(request):
    return render(request, "./φ/phases/phase7.3.html", {
        "entities": Entity.objects.all().order_by('-NumberOfYearsAudited', 'AnomaliesRatio1',  'AnomaliesRatio2', 'AnomaliesRatio3', 'AnomaliesRatio4', 'AnomaliesRatio5', 'AnomaliesRatio6', '-lastyear', 'TradingSymbol')
        .filter(Status='Phase 7.3')
    })

# PHASE 7.4
def phase74(request):
    return render(request, "./φ/phases/phase7.4.html", {
        "entities": Entity.objects.all().order_by('-NumberOfYearsAudited', 'AnomaliesRatio1',  'AnomaliesRatio2', 'AnomaliesRatio3', 'AnomaliesRatio4', 'AnomaliesRatio5', 'AnomaliesRatio6', '-lastyear', 'TradingSymbol')
        .filter(Status='Phase 7.4')
    })

# PHASE 7.5
def phase75(request):
    return render(request, "./φ/phases/phase7.5.html", {
        "entities": Entity.objects.all().order_by('-NumberOfYearsAudited', 'AnomaliesRatio1',  'AnomaliesRatio2', 'AnomaliesRatio3', 'AnomaliesRatio4', 'AnomaliesRatio5', 'AnomaliesRatio6', '-lastyear', 'TradingSymbol')
        .filter(Status='Phase 7.5')
    })

# PHASE 7.6
def phase76(request):
    return render(request, "./φ/phases/phase7.6.html", {
        "entities": Entity.objects.all().order_by('-NumberOfYearsAudited', 'AnomaliesRatio1',  'AnomaliesRatio2', 'AnomaliesRatio3', 'AnomaliesRatio4', 'AnomaliesRatio5', 'AnomaliesRatio6', '-lastyear', 'TradingSymbol')
        .filter(Status='Phase 7.6')
    })
    
# PHASE 7.7
def phase77(request):
    return render(request, "./φ/phases/phase7.7.html", {
        "entities": Entity.objects.all().order_by('-NumberOfYearsAudited', 'AnomaliesRatio1',  'AnomaliesRatio2', 'AnomaliesRatio3', 'AnomaliesRatio4', 'AnomaliesRatio5', 'AnomaliesRatio6', '-lastyear', 'TradingSymbol')
        .filter(Status='Phase 7.7')
    })
    
# PHASE 7.8
def phase78(request):
    return render(request, "./φ/phases/phase7.8.html", {
        "entities": Entity.objects.all().order_by('-NumberOfYearsAudited', 'AnomaliesRatio1',  'AnomaliesRatio2', 'AnomaliesRatio3', 'AnomaliesRatio4', 'AnomaliesRatio5', 'AnomaliesRatio6', '-lastyear', 'TradingSymbol')
        .filter(Status='Phase 7.8')
    })

# PHASE 8
def phase8(request):
    return render(request, "./φ/phases/phase8.html", {
        "entities": Entity.objects.all().order_by('-lastyear', 'TradingSymbol')
        .filter(Status='Phase 8')
    })

# PHASES
def phases(request):
    return render(request, "./φ/phases/phases.html", {
        "db": Database.objects.all()[0]
    })

# PREPARED
def prepared(request):
    return render(request, "./φ/prepared.html", {
        "entities": Entity.objects.all().order_by('-lastyear', 'TradingSymbol')
        .filter(Status='Prepared')
    })

# REVIEWED
def reviewed(request):
    return render(request, "./φ/reviewed.html", {
        "entities": Entity.objects.all().order_by('-lastyear', 'TradingSymbol')
        .filter(Status='Audited')
    })
   
# 1000
def i1000(request):
    return render(request, "./φ/industrial/i1000.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1000')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1040
def i1040(request):
    return render(request, "./φ/industrial/i1040.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1040')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1090
def i1090(request):
    return render(request, "./φ/industrial/i1090.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1090')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1220
def i1220(request):
    return render(request, "./φ/industrial/i1220.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1220')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1221
def i1221(request):
    return render(request, "./φ/industrial/i1221.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1221')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1311
def i1311(request):
    return render(request, "./φ/industrial/i1311.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1311')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1381
def i1381(request):
    return render(request, "./φ/industrial/i1381.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1381')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1382
def i1382(request):
    return render(request, "./φ/industrial/i1382.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1382')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1389
def i1389(request):
    return render(request, "./φ/industrial/i1389.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1389')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1400
def i1400(request):
    return render(request, "./φ/industrial/i1400.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1400')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1520
def i1520(request):
    return render(request, "./φ/industrial/i1520.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1520')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1531
def i1531(request):
    return render(request, "./φ/industrial/i1531.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1531')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1540
def i1540(request):
    return render(request, "./φ/industrial/i1540.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1540')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1600
def i1600(request):
    return render(request, "./φ/industrial/i1600.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1600')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1623
def i1623(request):
    return render(request, "./φ/industrial/i1623.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1623')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1700
def i1700(request):
    return render(request, "./φ/industrial/i1700.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1700')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 1731
def i1731(request):
    return render(request, "./φ/industrial/i1731.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='1731')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2000
def i2000(request):
    return render(request, "./φ/industrial/i2000.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2000')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2011
def i2011(request):
    return render(request, "./φ/industrial/i2011.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2011')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2015
def i2015(request):
    return render(request, "./φ/industrial/i2015.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2015')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2020
def i2020(request):
    return render(request, "./φ/industrial/i2020.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2020')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2030
def i2030(request):
    return render(request, "./φ/industrial/i2030.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2030')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2033
def i2033(request):
    return render(request, "./φ/industrial/i2033.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2033')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2040
def i2040(request):
    return render(request, "./φ/industrial/i2040.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2040')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2050
def i2050(request):
    return render(request, "./φ/industrial/i2050.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2050')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2052
def i2052(request):
    return render(request, "./φ/industrial/i2052.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2052')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2060
def i2060(request):
    return render(request, "./φ/industrial/i2060.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2060')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2070
def i2070(request):
    return render(request, "./φ/industrial/i2070.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2070')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2080
def i2080(request):
    return render(request, "./φ/industrial/i2080.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2080')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2082
def i2082(request):
    return render(request, "./φ/industrial/i2082.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2082')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2086
def i2086(request):
    return render(request, "./φ/industrial/i2086.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2086')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2090
def i2090(request):
    return render(request, "./φ/industrial/i2090.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2090')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2100
def i2100(request):
    return render(request, "./φ/industrial/i2100.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2100')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2111
def i2111(request):
    return render(request, "./φ/industrial/i2111.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2111')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2200
def i2200(request):
    return render(request, "./φ/industrial/i2200.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2200')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2211
def i2211(request):
    return render(request, "./φ/industrial/i2211.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2211')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2221
def i2221(request):
    return render(request, "./φ/industrial/i2221.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2221')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2273
def i2273(request):
    return render(request, "./φ/industrial/i2273.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2273')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2300
def i2300(request):
    return render(request, "./φ/industrial/i2300.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2300')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2320
def i2320(request):
    return render(request, "./φ/industrial/i2320.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2320')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2340
def i2340(request):
    return render(request, "./φ/industrial/i2340.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2340')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2400
def i2400(request):
    return render(request, "./φ/industrial/i2400.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2400')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2421
def i2421(request):
    return render(request, "./φ/industrial/i2421.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2421')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2430
def i2430(request):
    return render(request, "./φ/industrial/i2430.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2430')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2451
def i2451(request):
    return render(request, "./φ/industrial/i2451.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2451')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2510
def i2510(request):
    return render(request, "./φ/industrial/i2510.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2510')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2511
def i2511(request):
    return render(request, "./φ/industrial/i2511.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2511')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2520
def i2520(request):
    return render(request, "./φ/industrial/i2520.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2520')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2522
def i2522(request):
    return render(request, "./φ/industrial/i2522.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2522')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2590
def i2590(request):
    return render(request, "./φ/industrial/i2590.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2590')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2611
def i2611(request):
    return render(request, "./φ/industrial/i2611.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2611')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2621
def i2621(request):
    return render(request, "./φ/industrial/i2621.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2621')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2631
def i2631(request):
    return render(request, "./φ/industrial/i2631.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2631')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2650
def i2650(request):
    return render(request, "./φ/industrial/i2650.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2650')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2670
def i2670(request):
    return render(request, "./φ/industrial/i2670.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2670')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2711
def i2711(request):
    return render(request, "./φ/industrial/i2711.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2711')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2721
def i2721(request):
    return render(request, "./φ/industrial/i2721.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2721')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2731
def i2731(request):
    return render(request, "./φ/industrial/i2731.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2731')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2750
def i2750(request):
    return render(request, "./φ/industrial/i2750.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2750')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2761
def i2761(request):
    return render(request, "./φ/industrial/i2761.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2761')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2780
def i2780(request):
    return render(request, "./φ/industrial/i2780.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2780')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2800
def i2800(request):
    return render(request, "./φ/industrial/i2800.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2800')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2810
def i2810(request):
    return render(request, "./φ/industrial/i2810.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2810')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2820
def i2820(request):
    return render(request, "./φ/industrial/i2820.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2820')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2821
def i2821(request):
    return render(request, "./φ/industrial/i2821.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2821')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2833
def i2833(request):
    return render(request, "./φ/industrial/i2833.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2833')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2834
def i2834(request):
    return render(request, "./φ/industrial/i2834.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2834')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2835
def i2835(request):
    return render(request, "./φ/industrial/i2835.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2835')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2836
def i2836(request):
    return render(request, "./φ/industrial/i2836.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2836')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2840
def i2840(request):
    return render(request, "./φ/industrial/i2840.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2840')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2842
def i2842(request):
    return render(request, "./φ/industrial/i2842.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2842')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2844
def i2844(request):
    return render(request, "./φ/industrial/i2844.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2844')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2851
def i2851(request):
    return render(request, "./φ/industrial/i2851.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2851')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2860
def i2860(request):
    return render(request, "./φ/industrial/i2860.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2860')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2870
def i2870(request):
    return render(request, "./φ/industrial/i2870.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2870')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2890
def i2890(request):
    return render(request, "./φ/industrial/i2890.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2890')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2891
def i2891(request):
    return render(request, "./φ/industrial/i2891.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2891')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2911
def i2911(request):
    return render(request, "./φ/industrial/i2911.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2911')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 2990
def i2990(request):
    return render(request, "./φ/industrial/i2990.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='2990')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3011
def i3011(request):
    return render(request, "./φ/industrial/i3011.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3011')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3021
def i3021(request):
    return render(request, "./φ/industrial/i3021.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3021')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3050
def i3050(request):
    return render(request, "./φ/industrial/i3050.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3050')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3060
def i3060(request):
    return render(request, "./φ/industrial/i3060.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3060')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3080
def i3080(request):
    return render(request, "./φ/industrial/i3080.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3080')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3081
def i3081(request):
    return render(request, "./φ/industrial/i3081.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3081')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3086
def i3086(request):
    return render(request, "./φ/industrial/i3086.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3086')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3089
def i3089(request):
    return render(request, "./φ/industrial/i3089.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3089')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3100
def i3100(request):
    return render(request, "./φ/industrial/i3100.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3100')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3140
def i3140(request):
    return render(request, "./φ/industrial/i3140.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3140')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3211
def i3211(request):
    return render(request, "./φ/industrial/i3211.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3211')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3221
def i3221(request):
    return render(request, "./φ/industrial/i3221.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3221')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3231
def i3231(request):
    return render(request, "./φ/industrial/i3231.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3231')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3241
def i3241(request):
    return render(request, "./φ/industrial/i3241.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3241')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3272
def i3272(request):
    return render(request, "./φ/industrial/i3272.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3272')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3290
def i3290(request):
    return render(request, "./φ/industrial/i3290.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3290')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3310
def i3310(request):
    return render(request, "./φ/industrial/i3310.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3310')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3312
def i3312(request):
    return render(request, "./φ/industrial/i3312.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3312')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3317
def i3317(request):
    return render(request, "./φ/industrial/i3317.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3317')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3330
def i3330(request):
    return render(request, "./φ/industrial/i3330.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3330')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3334
def i3334(request):
    return render(request, "./φ/industrial/i3334.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3334')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3341
def i3341(request):
    return render(request, "./φ/industrial/i3341.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3341')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3350
def i3350(request):
    return render(request, "./φ/industrial/i3350.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3350')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3357
def i3357(request):
    return render(request, "./φ/industrial/i3357.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3357')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3360
def i3360(request):
    return render(request, "./φ/industrial/i3360.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3360')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3390
def i3390(request):
    return render(request, "./φ/industrial/i3390.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3390')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3411
def i3411(request):
    return render(request, "./φ/industrial/i3411.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3411')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3412
def i3412(request):
    return render(request, "./φ/industrial/i3412.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3412')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3420
def i3420(request):
    return render(request, "./φ/industrial/i3420.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3420')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3430
def i3430(request):
    return render(request, "./φ/industrial/i3430.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3430')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3433
def i3433(request):
    return render(request, "./φ/industrial/i3433.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3433')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3440
def i3440(request):
    return render(request, "./φ/industrial/i3440.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3440')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3442
def i3442(request):
    return render(request, "./φ/industrial/i3442.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3442')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3443
def i3443(request):
    return render(request, "./φ/industrial/i3443.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3443')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3448
def i3448(request):
    return render(request, "./φ/industrial/i3448.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3448')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3460
def i3460(request):
    return render(request, "./φ/industrial/i3460.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3460')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3470
def i3470(request):
    return render(request, "./φ/industrial/i3470.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3470')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3480
def i3480(request):
    return render(request, "./φ/industrial/i3480.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3480')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3490
def i3490(request):
    return render(request, "./φ/industrial/i3490.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3490')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3510
def i3510(request):
    return render(request, "./φ/industrial/i3510.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3510')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3523
def i3523(request):
    return render(request, "./φ/industrial/i3523.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3523')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3524
def i3524(request):
    return render(request, "./φ/industrial/i3524.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3524')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3530
def i3530(request):
    return render(request, "./φ/industrial/i3530.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3530')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3531
def i3531(request):
    return render(request, "./φ/industrial/i3531.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3531')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3533
def i3533(request):
    return render(request, "./φ/industrial/i3533.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3533')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3537
def i3537(request):
    return render(request, "./φ/industrial/i3537.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3537')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3540
def i3540(request):
    return render(request, "./φ/industrial/i3540.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3540')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3541
def i3541(request):
    return render(request, "./φ/industrial/i3541.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3541')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3550
def i3550(request):
    return render(request, "./φ/industrial/i3550.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3550')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3555
def i3555(request):
    return render(request, "./φ/industrial/i3555.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3555')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3559
def i3559(request):
    return render(request, "./φ/industrial/i3559.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3559')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3560
def i3560(request):
    return render(request, "./φ/industrial/i3560.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3560')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3561
def i3561(request):
    return render(request, "./φ/industrial/i3561.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3561')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3562
def i3562(request):
    return render(request, "./φ/industrial/i3562.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3562')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3564
def i3564(request):
    return render(request, "./φ/industrial/i3564.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3564')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3569
def i3569(request):
    return render(request, "./φ/industrial/i3569.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3569')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3570
def i3570(request):
    return render(request, "./φ/industrial/i3570.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3570')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3571
def i3571(request):
    return render(request, "./φ/industrial/i3571.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3571')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3572
def i3572(request):
    return render(request, "./φ/industrial/i3572.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3572')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3576
def i3576(request):
    return render(request, "./φ/industrial/i3576.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3576')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3577
def i3577(request):
    return render(request, "./φ/industrial/i3577.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3577')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3578
def i3578(request):
    return render(request, "./φ/industrial/i3578.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3578')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3579
def i3579(request):
    return render(request, "./φ/industrial/i3579.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3579')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3580
def i3580(request):
    return render(request, "./φ/industrial/i3580.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3580')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3585
def i3585(request):
    return render(request, "./φ/industrial/i3585.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3585')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3590
def i3590(request):
    return render(request, "./φ/industrial/i3590.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3590')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3600
def i3600(request):
    return render(request, "./φ/industrial/i3600.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3600')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3612
def i3612(request):
    return render(request, "./φ/industrial/i3612.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3612')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3613
def i3613(request):
    return render(request, "./φ/industrial/i3613.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3613')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3620
def i3620(request):
    return render(request, "./φ/industrial/i3620.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3620')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3621
def i3621(request):
    return render(request, "./φ/industrial/i3621.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3621')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3630
def i3630(request):
    return render(request, "./φ/industrial/i3630.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3630')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3634
def i3634(request):
    return render(request, "./φ/industrial/i3634.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3634')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3640
def i3640(request):
    return render(request, "./φ/industrial/i3640.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3640')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3651
def i3651(request):
    return render(request, "./φ/industrial/i3651.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3651')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3652
def i3652(request):
    return render(request, "./φ/industrial/i3652.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3652')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3661
def i3661(request):
    return render(request, "./φ/industrial/i3661.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3661')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3663
def i3663(request):
    return render(request, "./φ/industrial/i3663.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3663')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3669
def i3669(request):
    return render(request, "./φ/industrial/i3669.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3669')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3670
def i3670(request):
    return render(request, "./φ/industrial/i3670.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3670')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3672
def i3672(request):
    return render(request, "./φ/industrial/i3672.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3672')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3674
def i3674(request):
    return render(request, "./φ/industrial/i3674.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3674')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3677
def i3677(request):
    return render(request, "./φ/industrial/i3677.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3677')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3678
def i3678(request):
    return render(request, "./φ/industrial/i3678.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3678')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3679
def i3679(request):
    return render(request, "./φ/industrial/i3679.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3679')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3690
def i3690(request):
    return render(request, "./φ/industrial/i3690.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3690')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3711
def i3711(request):
    return render(request, "./φ/industrial/i3711.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3711')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3713
def i3713(request):
    return render(request, "./φ/industrial/i3713.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3713')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3714
def i3714(request):
    return render(request, "./φ/industrial/i3714.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3714')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3715
def i3715(request):
    return render(request, "./φ/industrial/i3715.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3715')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3716
def i3716(request):
    return render(request, "./φ/industrial/i3716.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3716')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3720
def i3720(request):
    return render(request, "./φ/industrial/i3720.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3720')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3721
def i3721(request):
    return render(request, "./φ/industrial/i3721.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3721')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3724
def i3724(request):
    return render(request, "./φ/industrial/i3724.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3724')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3728
def i3728(request):
    return render(request, "./φ/industrial/i3728.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3728')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3730
def i3730(request):
    return render(request, "./φ/industrial/i3730.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3730')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3743
def i3743(request):
    return render(request, "./φ/industrial/i3743.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3743')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3751
def i3751(request):
    return render(request, "./φ/industrial/i3751.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3751')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3760
def i3760(request):
    return render(request, "./φ/industrial/i3760.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3760')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3790
def i3790(request):
    return render(request, "./φ/industrial/i3790.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3790')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3812
def i3812(request):
    return render(request, "./φ/industrial/i3812.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3812')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3821
def i3821(request):
    return render(request, "./φ/industrial/i3821.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3821')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3822
def i3822(request):
    return render(request, "./φ/industrial/i3822.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3822')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3823
def i3823(request):
    return render(request, "./φ/industrial/i3823.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3823')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3824
def i3824(request):
    return render(request, "./φ/industrial/i3824.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3824')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3825
def i3825(request):
    return render(request, "./φ/industrial/i3825.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3825')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3826
def i3826(request):
    return render(request, "./φ/industrial/i3826.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3826')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3827
def i3827(request):
    return render(request, "./φ/industrial/i3827.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3827')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3829
def i3829(request):
    return render(request, "./φ/industrial/i3829.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3829')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3841
def i3841(request):
    return render(request, "./φ/industrial/i3841.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3841')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3842
def i3842(request):
    return render(request, "./φ/industrial/i3842.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3842')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3843
def i3843(request):
    return render(request, "./φ/industrial/i3843.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3843')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3844
def i3844(request):
    return render(request, "./φ/industrial/i3844.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3844')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3845
def i3845(request):
    return render(request, "./φ/industrial/i3845.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3845')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3851
def i3851(request):
    return render(request, "./φ/industrial/i3851.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3851')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3861
def i3861(request):
    return render(request, "./φ/industrial/i3861.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3861')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3873
def i3873(request):
    return render(request, "./φ/industrial/i3873.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3873')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3910
def i3910(request):
    return render(request, "./φ/industrial/i3910.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3910')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3942
def i3942(request):
    return render(request, "./φ/industrial/i3942.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3942')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3944
def i3944(request):
    return render(request, "./φ/industrial/i3944.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3944')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3949
def i3949(request):
    return render(request, "./φ/industrial/i3949.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3949')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 3990
def i3990(request):
    return render(request, "./φ/industrial/i3990.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='3990')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4011
def i4011(request):
    return render(request, "./φ/industrial/i4011.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4011')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4013
def i4013(request):
    return render(request, "./φ/industrial/i4013.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4013')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4210
def i4210(request):
    return render(request, "./φ/industrial/i4210.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4210')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4213
def i4213(request):
    return render(request, "./φ/industrial/i4213.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4213')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4400
def i4400(request):
    return render(request, "./φ/industrial/i4400.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4400')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4412
def i4412(request):
    return render(request, "./φ/industrial/i4412.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4412')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4512
def i4512(request):
    return render(request, "./φ/industrial/i4512.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4512')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4513
def i4513(request):
    return render(request, "./φ/industrial/i4513.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4513')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4581
def i4581(request):
    return render(request, "./φ/industrial/i4581.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4581')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4610
def i4610(request):
    return render(request, "./φ/industrial/i4610.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4610')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4700
def i4700(request):
    return render(request, "./φ/industrial/i4700.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4700')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4731
def i4731(request):
    return render(request, "./φ/industrial/i4731.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4731')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4812
def i4812(request):
    return render(request, "./φ/industrial/i4812.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4812')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4813
def i4813(request):
    return render(request, "./φ/industrial/i4813.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4813')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4822
def i4822(request):
    return render(request, "./φ/industrial/i4822.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4822')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4832
def i4832(request):
    return render(request, "./φ/industrial/i4832.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4832')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4833
def i4833(request):
    return render(request, "./φ/industrial/i4833.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4833')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4841
def i4841(request):
    return render(request, "./φ/industrial/i4841.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4841')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4899
def i4899(request):
    return render(request, "./φ/industrial/i4899.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4899')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4900
def i4900(request):
    return render(request, "./φ/industrial/i4900.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4900')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4911
def i4911(request):
    return render(request, "./φ/industrial/i4911.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4911')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4922
def i4922(request):
    return render(request, "./φ/industrial/i4922.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4922')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4923
def i4923(request):
    return render(request, "./φ/industrial/i4923.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4923')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4924
def i4924(request):
    return render(request, "./φ/industrial/i4924.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4924')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4931
def i4931(request):
    return render(request, "./φ/industrial/i4931.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4931')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4932
def i4932(request):
    return render(request, "./φ/industrial/i4932.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4932')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4941
def i4941(request):
    return render(request, "./φ/industrial/i4941.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4941')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4950
def i4950(request):
    return render(request, "./φ/industrial/i4950.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4950')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4953
def i4953(request):
    return render(request, "./φ/industrial/i4953.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4953')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4955
def i4955(request):
    return render(request, "./φ/industrial/i4955.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4955')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 4991
def i4991(request):
    return render(request, "./φ/industrial/i4991.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='4991')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5000
def i5000(request):
    return render(request, "./φ/industrial/i5000.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5000')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5010
def i5010(request):
    return render(request, "./φ/industrial/i5010.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5010')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5013
def i5013(request):
    return render(request, "./φ/industrial/i5013.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5013')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5030
def i5030(request):
    return render(request, "./φ/industrial/i5030.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5030')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5031
def i5031(request):
    return render(request, "./φ/industrial/i5031.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5031')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5040
def i5040(request):
    return render(request, "./φ/industrial/i5040.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5040')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5045
def i5045(request):
    return render(request, "./φ/industrial/i5045.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5045')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5047
def i5047(request):
    return render(request, "./φ/industrial/i5047.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5047')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5051
def i5051(request):
    return render(request, "./φ/industrial/i5051.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5051')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5063
def i5063(request):
    return render(request, "./φ/industrial/i5063.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5063')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5065
def i5065(request):
    return render(request, "./φ/industrial/i5065.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5065')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5070
def i5070(request):
    return render(request, "./φ/industrial/i5070.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5070')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5080
def i5080(request):
    return render(request, "./φ/industrial/i5080.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5080')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5084
def i5084(request):
    return render(request, "./φ/industrial/i5084.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5084')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5090
def i5090(request):
    return render(request, "./φ/industrial/i5090.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5090')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5094
def i5094(request):
    return render(request, "./φ/industrial/i5094.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5094')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5110
def i5110(request):
    return render(request, "./φ/industrial/i5110.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5110')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5122
def i5122(request):
    return render(request, "./φ/industrial/i5122.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5122')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5130
def i5130(request):
    return render(request, "./φ/industrial/i5130.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5130')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5140
def i5140(request):
    return render(request, "./φ/industrial/i5140.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5140')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5141
def i5141(request):
    return render(request, "./φ/industrial/i5141.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5141')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5150
def i5150(request):
    return render(request, "./φ/industrial/i5150.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5150')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5160
def i5160(request):
    return render(request, "./φ/industrial/i5160.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5160')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5171
def i5171(request):
    return render(request, "./φ/industrial/i5171.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5171')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5172
def i5172(request):
    return render(request, "./φ/industrial/i5172.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5172')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5180
def i5180(request):
    return render(request, "./φ/industrial/i5180.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5180')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5190
def i5190(request):
    return render(request, "./φ/industrial/i5190.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5190')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5200
def i5200(request):
    return render(request, "./φ/industrial/i5200.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5200')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5211
def i5211(request):
    return render(request, "./φ/industrial/i5211.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5211')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5311
def i5311(request):
    return render(request, "./φ/industrial/i5311.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5311')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5331
def i5331(request):
    return render(request, "./φ/industrial/i5331.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5331')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5411
def i5411(request):
    return render(request, "./φ/industrial/i5411.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5411')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5412
def i5412(request):
    return render(request, "./φ/industrial/i5412.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5412')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5500
def i5500(request):
    return render(request, "./φ/industrial/i5500.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5500')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5531
def i5531(request):
    return render(request, "./φ/industrial/i5531.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5531')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5600
def i5600(request):
    return render(request, "./φ/industrial/i5600.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5600')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5621
def i5621(request):
    return render(request, "./φ/industrial/i5621.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5621')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5651
def i5651(request):
    return render(request, "./φ/industrial/i5651.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5651')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5661
def i5661(request):
    return render(request, "./φ/industrial/i5661.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5661')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5700
def i5700(request):
    return render(request, "./φ/industrial/i5700.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5700')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5712
def i5712(request):
    return render(request, "./φ/industrial/i5712.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5712')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5731
def i5731(request):
    return render(request, "./φ/industrial/i5731.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5731')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5734
def i5734(request):
    return render(request, "./φ/industrial/i5734.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5734')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5810
def i5810(request):
    return render(request, "./φ/industrial/i5810.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5810')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5812
def i5812(request):
    return render(request, "./φ/industrial/i5812.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5812')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5900
def i5900(request):
    return render(request, "./φ/industrial/i5900.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5900')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5912
def i5912(request):
    return render(request, "./φ/industrial/i5912.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5912')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5940
def i5940(request):
    return render(request, "./φ/industrial/i5940.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5940')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5944
def i5944(request):
    return render(request, "./φ/industrial/i5944.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5944')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5945
def i5945(request):
    return render(request, "./φ/industrial/i5945.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5945')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5960
def i5960(request):
    return render(request, "./φ/industrial/i5960.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5960')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5961
def i5961(request):
    return render(request, "./φ/industrial/i5961.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5961')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 5990
def i5990(request):
    return render(request, "./φ/industrial/i5990.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='5990')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6021
def i6021(request):
    return render(request, "./φ/industrial/i6021.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6021')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6022
def i6022(request):
    return render(request, "./φ/industrial/i6022.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6022')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6029
def i6029(request):
    return render(request, "./φ/industrial/i6029.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6029')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6035
def i6035(request):
    return render(request, "./φ/industrial/i6035.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6035')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6036
def i6036(request):
    return render(request, "./φ/industrial/i6036.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6036')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6099
def i6099(request):
    return render(request, "./φ/industrial/i6099.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6099')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6111
def i6111(request):
    return render(request, "./φ/industrial/i6111.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6111')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6141
def i6141(request):
    return render(request, "./φ/industrial/i6141.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6141')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6153
def i6153(request):
    return render(request, "./φ/industrial/i6153.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6153')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6159
def i6159(request):
    return render(request, "./φ/industrial/i6159.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6159')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6162
def i6162(request):
    return render(request, "./φ/industrial/i6162.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6162')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6163
def i6163(request):
    return render(request, "./φ/industrial/i6163.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6163')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6199
def i6199(request):
    return render(request, "./φ/industrial/i6199.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6199')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6200
def i6200(request):
    return render(request, "./φ/industrial/i6200.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6200')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6211
def i6211(request):
    return render(request, "./φ/industrial/i6211.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6211')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6221
def i6221(request):
    return render(request, "./φ/industrial/i6221.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6221')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6282
def i6282(request):
    return render(request, "./φ/industrial/i6282.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6282')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6311
def i6311(request):
    return render(request, "./φ/industrial/i6311.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6311')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6321
def i6321(request):
    return render(request, "./φ/industrial/i6321.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6321')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6324
def i6324(request):
    return render(request, "./φ/industrial/i6324.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6324')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6331
def i6331(request):
    return render(request, "./φ/industrial/i6331.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6331')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6351
def i6351(request):
    return render(request, "./φ/industrial/i6351.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6351')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6361
def i6361(request):
    return render(request, "./φ/industrial/i6361.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6361')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6399
def i6399(request):
    return render(request, "./φ/industrial/i6399.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6399')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6411
def i6411(request):
    return render(request, "./φ/industrial/i6411.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6411')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6500
def i6500(request):
    return render(request, "./φ/industrial/i6500.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6500')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6510
def i6510(request):
    return render(request, "./φ/industrial/i6510.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6510')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6512
def i6512(request):
    return render(request, "./φ/industrial/i6512.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6512')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6519
def i6519(request):
    return render(request, "./φ/industrial/i6519.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6519')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6531
def i6531(request):
    return render(request, "./φ/industrial/i6531.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6531')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6552
def i6552(request):
    return render(request, "./φ/industrial/i6552.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6552')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6770
def i6770(request):
    return render(request, "./φ/industrial/i6770.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6770')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6792
def i6792(request):
    return render(request, "./φ/industrial/i6792.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6792')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6794
def i6794(request):
    return render(request, "./φ/industrial/i6794.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6794')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6795
def i6795(request):
    return render(request, "./φ/industrial/i6795.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6795')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6798
def i6798(request):
    return render(request, "./φ/industrial/i6798.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6798')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 6799
def i6799(request):
    return render(request, "./φ/industrial/i6799.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='6799')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7000
def i7000(request):
    return render(request, "./φ/industrial/i7000.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7000')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7011
def i7011(request):
    return render(request, "./φ/industrial/i7011.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7011')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7200
def i7200(request):
    return render(request, "./φ/industrial/i7200.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7200')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7310
def i7310(request):
    return render(request, "./φ/industrial/i7310.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7310')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7311
def i7311(request):
    return render(request, "./φ/industrial/i7311.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7311')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7320
def i7320(request):
    return render(request, "./φ/industrial/i7320.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7320')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7330
def i7330(request):
    return render(request, "./φ/industrial/i7330.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7330')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7331
def i7331(request):
    return render(request, "./φ/industrial/i7331.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7331')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7340
def i7340(request):
    return render(request, "./φ/industrial/i7340.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7340')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7350
def i7350(request):
    return render(request, "./φ/industrial/i7350.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7350')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7359
def i7359(request):
    return render(request, "./φ/industrial/i7359.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7359')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7361
def i7361(request):
    return render(request, "./φ/industrial/i7361.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7361')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7363
def i7363(request):
    return render(request, "./φ/industrial/i7363.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7363')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7370
def i7370(request):
    return render(request, "./φ/industrial/i7370.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7370')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7371
def i7371(request):
    return render(request, "./φ/industrial/i7371.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7371')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7372
def i7372(request):
    return render(request, "./φ/industrial/i7372.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7372')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7373
def i7373(request):
    return render(request, "./φ/industrial/i7373.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7373')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7374
def i7374(request):
    return render(request, "./φ/industrial/i7374.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7374')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7380
def i7380(request):
    return render(request, "./φ/industrial/i7380.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7380')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7381
def i7381(request):
    return render(request, "./φ/industrial/i7381.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7381')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7389
def i7389(request):
    return render(request, "./φ/industrial/i7389.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7389')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7500
def i7500(request):
    return render(request, "./φ/industrial/i7500.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7500')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7510
def i7510(request):
    return render(request, "./φ/industrial/i7510.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7510')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7600
def i7600(request):
    return render(request, "./φ/industrial/i7600.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7600')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7812
def i7812(request):
    return render(request, "./φ/industrial/i7812.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7812')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7819
def i7819(request):
    return render(request, "./φ/industrial/i7819.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7819')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7822
def i7822(request):
    return render(request, "./φ/industrial/i7822.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7822')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7830
def i7830(request):
    return render(request, "./φ/industrial/i7830.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7830')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7841
def i7841(request):
    return render(request, "./φ/industrial/i7841.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7841')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7900
def i7900(request):
    return render(request, "./φ/industrial/i7900.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7900')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7948
def i7948(request):
    return render(request, "./φ/industrial/i7948.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7948')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7990
def i7990(request):
    return render(request, "./φ/industrial/i7990.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7990')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 7997
def i7997(request):
    return render(request, "./φ/industrial/i7997.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='7997')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8000
def i8000(request):
    return render(request, "./φ/industrial/i8000.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8000')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8011
def i8011(request):
    return render(request, "./φ/industrial/i8011.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8011')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8050
def i8050(request):
    return render(request, "./φ/industrial/i8050.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8050')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8051
def i8051(request):
    return render(request, "./φ/industrial/i8051.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8051')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8060
def i8060(request):
    return render(request, "./φ/industrial/i8060.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8060')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8062
def i8062(request):
    return render(request, "./φ/industrial/i8062.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8062')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8071
def i8071(request):
    return render(request, "./φ/industrial/i8071.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8071')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8082
def i8082(request):
    return render(request, "./φ/industrial/i8082.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8082')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8090
def i8090(request):
    return render(request, "./φ/industrial/i8090.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8090')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8093
def i8093(request):
    return render(request, "./φ/industrial/i8093.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8093')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8111
def i8111(request):
    return render(request, "./φ/industrial/i8111.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8111')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8200
def i8200(request):
    return render(request, "./φ/industrial/i8200.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8200')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8300
def i8300(request):
    return render(request, "./φ/industrial/i8300.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8300')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8351
def i8351(request):
    return render(request, "./φ/industrial/i8351.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8351')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8700
def i8700(request):
    return render(request, "./φ/industrial/i8700.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8700')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8711
def i8711(request):
    return render(request, "./φ/industrial/i8711.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8711')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8731
def i8731(request):
    return render(request, "./φ/industrial/i8731.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8731')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8741
def i8741(request):
    return render(request, "./φ/industrial/i8741.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8741')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8742
def i8742(request):
    return render(request, "./φ/industrial/i8742.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8742')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8744
def i8744(request):
    return render(request, "./φ/industrial/i8744.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8744')
        .order_by('-lastyear', 'TradingSymbol')
    })

# 8900
def i8900(request):
    return render(request, "./φ/industrial/i8900.html", {
        "entities": Entity.objects.all()
        .filter(IndustryCode='8900')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rAL
def rAL(request):
    return render(request, "./φ/regional/rAL.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='AL')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rAK
def rAK(request):
    return render(request, "./φ/regional/rAK.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='AK')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rA0
def rA0(request):
    return render(request, "./φ/regional/rA0.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='A0')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rC1
def rC1(request):
    return render(request, "./φ/regional/rC1.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='C1')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rAZ
def rAZ(request):
    return render(request, "./φ/regional/rAZ.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='AZ')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rAR
def rAR(request):
    return render(request, "./φ/regional/rAR.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='AR')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rC3
def rC3(request):
    return render(request, "./φ/regional/rC3.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='C3')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rC9
def rC9(request):
    return render(request, "./φ/regional/rC9.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='C9')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rD0
def rD0(request):
    return render(request, "./φ/regional/rD0.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='D0')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rD5
def rD5(request):
    return render(request, "./φ/regional/rD5.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='D5')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rA1
def rA1(request):
    return render(request, "./φ/regional/rA1.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='A1')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rCA
def rCA(request):
    return render(request, "./φ/regional/rCA.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='CA')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rE9
def rE9(request):
    return render(request, "./φ/regional/rE9.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='E9')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rF4
def rF4(request):
    return render(request, "./φ/regional/rF4.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='F4')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rF8
def rF8(request):
    return render(request, "./φ/regional/rF8.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='F8')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rCO
def rCO(request):
    return render(request, "./φ/regional/rCO.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='CO')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rCT
def rCT(request):
    return render(request, "./φ/regional/rCT.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='CT')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rDE
def rDE(request):
    return render(request, "./φ/regional/rDE.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='DE')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rG7
def rG7(request):
    return render(request, "./φ/regional/rG7.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='G7')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rDC
def rDC(request):
    return render(request, "./φ/regional/rDC.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='DC')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rFL
def rFL(request):
    return render(request, "./φ/regional/rFL.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='FL')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rI0
def rI0(request):
    return render(request, "./φ/regional/rI0.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='I0')
        .order_by('-lastyear', 'TradingSymbol')
    })

# r2Q
def r2Q(request):
    return render(request, "./φ/regional/r2Q.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='2Q')
        .order_by('-lastyear', 'TradingSymbol')
    })

# r2M
def r2M(request):
    return render(request, "./φ/regional/r2M.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='2M')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rGU
def rGU(request):
    return render(request, "./φ/regional/rGU.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='GU')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rHI
def rHI(request):
    return render(request, "./φ/regional/rHI.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='HI')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rK3
def rK3(request):
    return render(request, "./φ/regional/rK3.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='K3')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rID
def rID(request):
    return render(request, "./φ/regional/rID.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='ID')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rIL
def rIL(request):
    return render(request, "./φ/regional/rIL.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='IL')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rIN
def rIN(request):
    return render(request, "./φ/regional/rIN.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='IN')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rIA
def rIA(request):
    return render(request, "./φ/regional/rIA.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='IA')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rL2
def rL2(request):
    return render(request, "./φ/regional/rL2.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='L2')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rL3
def rL3(request):
    return render(request, "./φ/regional/rL3.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='L3')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rM0
def rM0(request):
    return render(request, "./φ/regional/rM0.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='M0')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rY9
def rY9(request):
    return render(request, "./φ/regional/rY9.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='Y9')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rKS
def rKS(request):
    return render(request, "./φ/regional/rKS.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='KS')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rKY
def rKY(request):
    return render(request, "./φ/regional/rKY.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='KY')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rLA
def rLA(request):
    return render(request, "./φ/regional/rLA.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='LA')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rN4
def rN4(request):
    return render(request, "./φ/regional/rN4.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='N4')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rME
def rME(request):
    return render(request, "./φ/regional/rME.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='ME')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rN8
def rN8(request):
    return render(request, "./φ/regional/rN8.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='N8')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rMD
def rMD(request):
    return render(request, "./φ/regional/rMD.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='MD')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rMA
def rMA(request):
    return render(request, "./φ/regional/rMA.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='MA')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rMI
def rMI(request):
    return render(request, "./φ/regional/rMI.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='MI')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rMN
def rMN(request):
    return render(request, "./φ/regional/rMN.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='MN')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rMS
def rMS(request):
    return render(request, "./φ/regional/rMS.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='MS')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rMO
def rMO(request):
    return render(request, "./φ/regional/rMO.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='MO')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rMT
def rMT(request):
    return render(request, "./φ/regional/rMT.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='MT')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rNE
def rNE(request):
    return render(request, "./φ/regional/rNE.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='NE')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rP7
def rP7(request):
    return render(request, "./φ/regional/rP7.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='P7')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rNV
def rNV(request):
    return render(request, "./φ/regional/rNV.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='NV')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rNH
def rNH(request):
    return render(request, "./φ/regional/rNH.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='NH')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rNJ
def rNJ(request):
    return render(request, "./φ/regional/rNJ.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='NJ')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rNM
def rNM(request):
    return render(request, "./φ/regional/rNM.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='NM')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rNY
def rNY(request):
    return render(request, "./φ/regional/rNY.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='NY')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rNC
def rNC(request):
    return render(request, "./φ/regional/rNC.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='NC')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rND
def rND(request):
    return render(request, "./φ/regional/rND.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='ND')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rOH
def rOH(request):
    return render(request, "./φ/regional/rOH.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='OH')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rOK
def rOK(request):
    return render(request, "./φ/regional/rOK.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='OK')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rA6
def rA6(request):
    return render(request, "./φ/regional/rA6.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='A6')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rOR
def rOR(request):
    return render(request, "./φ/regional/rOR.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='OR')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rPA
def rPA(request):
    return render(request, "./φ/regional/rPA.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='PA')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rPR
def rPR(request):
    return render(request, "./φ/regional/rPR.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='PR')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rA8
def rA8(request):
    return render(request, "./φ/regional/rA8.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='A8')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rRI
def rRI(request):
    return render(request, "./φ/regional/rRI.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='RI')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rU0
def rU0(request):
    return render(request, "./φ/regional/rU0.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='U0')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rT3
def rT3(request):
    return render(request, "./φ/regional/rT3.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='T3')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rSC
def rSC(request):
    return render(request, "./φ/regional/rSC.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='SC')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rSD
def rSD(request):
    return render(request, "./φ/regional/rSD.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='SD')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rV7
def rV7(request):
    return render(request, "./φ/regional/rV7.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='V7')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rV8
def rV8(request):
    return render(request, "./φ/regional/rV8.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='V8')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rF5
def rF5(request):
    return render(request, "./φ/regional/rF5.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='F5')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rTN
def rTN(request):
    return render(request, "./φ/regional/rTN.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='TN')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rTX
def rTX(request):
    return render(request, "./φ/regional/rTX.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='TX')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rW1
def rW1(request):
    return render(request, "./φ/regional/rW1.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='W1')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rW8
def rW8(request):
    return render(request, "./φ/regional/rW8.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='W8')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rX0
def rX0(request):
    return render(request, "./φ/regional/rX0.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='X0')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rX1
def rX1(request):
    return render(request, "./φ/regional/rX1.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='X1')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rUT
def rUT(request):
    return render(request, "./φ/regional/rUT.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='UT')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rVT
def rVT(request):
    return render(request, "./φ/regional/rVT.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='VT')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rVA
def rVA(request):
    return render(request, "./φ/regional/rVA.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='VA')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rWA
def rWA(request):
    return render(request, "./φ/regional/rWA.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='WA')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rWV
def rWV(request):
    return render(request, "./φ/regional/rWV.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='WV')
        .order_by('-lastyear', 'TradingSymbol')
    })

# rWI
def rWI(request):
    return render(request, "./φ/regional/rWI.html", {
        "entities": Entity.objects.all()
        .filter(RegionCode='WI')
        .order_by('-lastyear', 'TradingSymbol')
    })