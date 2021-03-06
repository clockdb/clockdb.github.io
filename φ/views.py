from django.core.paginator import Paginator
from django.http import HttpResponse
from django.shortcuts import render
from .models import *
import datetime


def about(request):
    return render(request, "./φ/administrative/about.html")


def commands(request):
    return render(request, "./φ/administrative/commands.html")


def disclaimer(request):
    return render(request, "./φ/administrative/disclaimer.html")


def documentation(request):
    return render(request, "./φ/administrative/documentation.html")


def phase(request, db):
    return render(request, "./φ/phases/phase.html", {
        #
        "phase": Phase.objects.get(db=db),
        #
        "entities": Entity.objects.all()
        .order_by(
            '-NumberOfYearsAudited',
            '-AnomaliesRatio1',
            '-AnomaliesRatio2',
            '-AnomaliesRatio3',
            '-AnomaliesRatio4',
            '-AnomaliesRatio5',
            '-AnomaliesRatio6'
            )
        .filter(db=db),
    })


def phases(request):
    return render(request, "./φ/phases/phases.html", {
        "phases": Phase.objects.all().order_by('-db')
    })


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


def index(request):
    return render(request, "./φ/index.html", {
        #
        "master": Master.objects.all().first(),
        #
        "entities": Entity.objects.all(),
        #
        "Capitalizations": Capitalization.objects.all(),
        "Industries": Industry.objects.all(),
        "Phases": Phase.objects.all(),
        "Regions": Region.objects.all(),
        #
    })


def master(request):
    return render(request, "./φ/master/master.html", {
        "master": Master.objects.all().first()
    })


def results(
    request, 
    industry_db, 
    industry_SEC_db, 
    periodenddate_db,
    db, 
    region_db,
    order_db,
    sort_db,
    ):
    e = Entity.objects.all()
    #
    a = '-db'
    b = '-NumberOfYearsAudited'
    c = 'AnomaliesRatio1'
    d = 'AnomaliesRatio2'
    ee = 'AnomaliesRatio3'
    f = 'AnomaliesRatio4'
    g = 'AnomaliesRatio5'
    h = 'AnomaliesRatio6'
    #
    if sort_db == 'any':
        e = e.order_by(a, b, c, d, ee, f, g, h)
        #
    else:
        sort = sort_db
        if order_db != 'any':
            if order_db != '+':
                sort = order_db + sort
        e = e.order_by(sort, a, b, c, d, ee, f, g, h)
    #
    if industry_db != 'any':
        e = e.filter(Industry_db=industry_db)
    #
    if industry_SEC_db != 'any':
        e = e.filter(Industry_SEC_db=industry_SEC_db)
    #
    if periodenddate_db != 'any':
        e = e.filter(PeriodEndDate_db=periodenddate_db)
    #
    if db != 'any':
        e = e.filter(db=db)
    #
    if region_db != 'any':
        e = e.filter(Region_db=region_db)
    #
    e = e.exclude(ClockφLastYear=0)
    #
    g = len(e)
    #
    h = 'result'
    if g > 1:
        h = h + 's'
    if g == 0:
        g = ''
        h = 'Nothing in sight, try different criteria.'
    #
    return render(request, "./φ/results.html", {
        "entities": e,
        "len_entities": g,
        "results": h,
        "industry_db": industry_db,
        "industry_SEC_db": industry_SEC_db,
        "periodenddate_db": periodenddate_db,
        "db": db,
        "region_db": region_db,
        "order_db": order_db,
        "sort_db": sort_db,
    })


