#
# Libraries
from workingPaper.models import *
from bs4 import BeautifulSoup
from io import StringIO
from datetime import datetime, date
from django.contrib.auth.models import User
from PyQt5.QtWidgets import QApplication, QTableView
from PyQt5.QtCore import QAbstractTableModel, Qt
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC, wait
from urllib.request import urlopen
import collections
import csv
import datetime
import glob
import html5lib
import json
import os
import pandas as pd
import pathlib
import pprint
import re
import requests
import time
import urllib
import xml.etree.ElementTree as ET

periods = [
    'lastyear',
    'secondlastyear',
    'thirdlastyear',
    'fourthlastyear',
    'fifthlastyear',
    'sixthlastyear',
]

#files = glob.glob("./mine/json/*.json")
files = glob.glob("./mine/json/FB.json")

for file in files:
    #
    f = open(file)
    #
    data = json.load(f)
    #
    c = data['entities'][0]
    #
    ts = c.get('TradingSymbol')
    #
    # entity
    try:
        try:
            e = Entity.objects.get(TradingSymbol=ts)
        except:
            e = Entity()
            e.TradingSymbol = ts
        #
        # entity
        for key in c:
            try:
                if key == 'EntityRegistrantName':
                    e.EntityRegistrantName = c.get(key)
                if key == 'EntityCentralIndexKey':
                    e.EntityCentralIndexKey = c.get(key)
                if key == 'db':
                    e.db = c.get(key)
                if key == 'Industry_SEC':
                    e.Industry_SEC = c.get(key)
                if key == 'Industry_SEC_db':
                    e.Industry_SEC_db = c.get(key)
                if key == 'Industry':
                    e.Industry = c.get(key)
                if key == 'Industry_db':
                    e.Industry_db = c.get(key)
                if key == 'Region':
                    e.Region = c.get(key)
                if key == 'Region_db':
                    e.Region_db = c.get(key)
                if key == 'SecurityExchangeName':
                    e.SecurityExchangeName = c.get(key)
                #
                if key == 'SECurl':
                    e.SECurl = c.get(key)
                if key == 'URL':
                    e.URL = c.get(key)
                if key == 'SEC_Update':
                    e.SEC_Update = c.get(key)
                if key == 'SEC_UpdateDateAndTime':
                    e.SEC_UpdateDateAndTime = c.get(key)
                if key == 'SecuritiesUpdate':
                    e.SecuritiesUpdate = c.get(key)
                #
                if key == 'OpinionLastYear':
                    e.OpinionφLastYear = c.get(key)
                if key == 'OpinionSecondLastYear':
                    e.OpinionφSecondLastYear = c.get(key)
                if key == 'OpinionThirdLastYear':
                    e.OpinionφThirdLastYear = c.get(key)
                if key == 'OpinionFourthLastYear':
                    e.OpinionφFourthLastYear = c.get(key)
                #
                if key == 'ClockLastYear':
                    e.ClockφLastYear = c.get(key)
                if key == 'ClockSecondLastYear':
                    e.ClockφSecondLastYear = c.get(key)
                if key == 'ClockThirdLastYear':
                    e.ClockφThirdLastYear = c.get(key)
                if key == 'ClockFourthLastYear':
                    e.ClockφFourthLastYear = c.get(key)
                #
                if key == 'BridgeLastYear':
                    e.BridgeφLastYear = c.get(key)
                if key == 'BridgeSecondLastYear':
                    e.BridgeφSecondLastYear = c.get(key)
                if key == 'BridgeThirdLastYear':
                    e.BridgeφThirdLastYear = c.get(key)
                if key == 'BridgeFourthLastYear':
                    e.BridgeφFourthLastYear = c.get(key)
                #
                if key == 'Anomalies':
                    e.Anomalies = c.get(key)
                #
                if key == 'AnomaliesRatio1':
                    e.AnomaliesRatio1 = c.get(key)
                if key == 'AnomaliesRatio2':
                    e.AnomaliesRatio2 = c.get(key)
                if key == 'AnomaliesRatio3':
                    e.AnomaliesRatio3 = c.get(key)
                if key == 'AnomaliesRatio4':
                    e.AnomaliesRatio4 = c.get(key)
                if key == 'AnomaliesRatio5':
                    e.AnomaliesRatio5 = c.get(key)
                if key == 'AnomaliesRatio6':
                    e.AnomaliesRatio6 = c.get(key)
                #
                if key == 'NumberOfYearsAudited':
                    e.NumberOfYearsAudited = c.get(key)
                #
                if key == 'CommonSharesIntrinsicValueLastYear':
                    e.CommonSharesIntrinsicValueLastYear = c.get(key)
                if key == 'CommonSharesIntrinsicValueSecondLastYear':
                    e.CommonSharesIntrinsicValueSecondLastYear = c.get(key)
                if key == 'CommonSharesIntrinsicValueThirdLastYear':
                    e.CommonSharesIntrinsicValueThirdLastYear = c.get(key)
                if key == 'CommonSharesIntrinsicValueFourthLastYear':
                    e.CommonSharesIntrinsicValueFourthLastYear = c.get(key)
                #
                if key == 'MarketCapitalizationLastYear':
                    e.MarketCapitalizationLastYear = c.get(key)
                if key == 'MarketCapitalizationSecondLastYear':
                    e.MarketCapitalizationSecondLastYear = c.get(key)
                if key == 'MarketCapitalizationThirdLastYear':
                    e.MarketCapitalizationThirdLastYear = c.get(key)
                if key == 'MarketCapitalizationFourthLastYear':
                    e.MarketCapitalizationFourthLastYear = c.get(key)
                #
                if key == 'CommonShareIntrinsicValueLastYear':
                    e.CommonShareIntrinsicValueLastYear = c.get(key)
                if key == 'CommonShareIntrinsicValueSecondLastYear':
                    e.CommonShareIntrinsicValueSecondLastYear = c.get(key)
                if key == 'CommonShareIntrinsicValueThirdLastYear':
                    e.CommonShareIntrinsicValueThirdLastYear = c.get(key)
                if key == 'CommonShareIntrinsicValueFourthLastYear':
                    e.CommonShareIntrinsicValueFourthLastYear = c.get(key)
                #
                if key == 'CommonSharePriceLastYear':
                    e.CommonSharePriceLastYear = c.get(key)
                if key == 'CommonSharePriceSecondLastYear':
                    e.CommonSharePriceSecondLastYear = c.get(key)
                if key == 'CommonSharePriceThirdLastYear':
                    e.CommonSharePriceThirdLastYear = c.get(key)
                if key == 'CommonSharePriceFourthLastYear':
                    e.CommonSharePriceFourthLastYear = c.get(key)
                #
                if key == 'CommonSharesOutstandingLastYear':
                    e.CommonSharesOutstandingLastYear = c.get(key)
                if key == 'CommonSharesOutstandingSecondLastYear':
                    e.CommonSharesOutstandingSecondLastYear = c.get(key)
                if key == 'CommonSharesOutstandingThirdLastYear':
                    e.CommonSharesOutstandingThirdLastYear = c.get(key)
                if key == 'CommonSharesOutstandingFourthLastYear':
                    e.CommonSharesOutstandingFourthLastYear = c.get(key)
                #
                if key == 'month_end':
                    e.month_end = c.get(key)
                #
                if key == 'lastyear':
                    e.lastyear = c.get(key)
                if key == 'secondlastyear':
                    e.secondlastyear = c.get(key)
                if key == 'thirdlastyear':
                    e.thirdlastyear = c.get(key)
                if key == 'fourthlastyear':
                    e.fourthlastyear = c.get(key)
                if key == 'fifthlastyear':
                    e.fifthlastyear = c.get(key)
                if key == 'sixthlastyear':
                    e.sixthlastyear = c.get(key)
                #
                if key == 'amendlastyear':
                    e.amendlastyear = c.get(key)
                if key == 'amendsecondlastyear':
                    e.amendsecondlastyear = c.get(key)
                if key == 'amendthirdlastyear':
                    e.amendthirdlastyear = c.get(key)
                if key == 'amendfourthlastyear':
                    e.amendfourthlastyear = c.get(key)
                if key == 'amendfifthlastyear':
                    e.amendfifthlastyear = c.get(key)
                if key == 'amendsixthlastyear':
                    e.amendsixthlastyear = c.get(key)
                #
                if key == 'accessionnumberlastyear':
                    e.accessionnumberlastyear = c.get(key)
                if key == 'accessionnumbersecondlastyear':
                    e.accessionnumbersecondlastyear = c.get(key)
                if key == 'accessionnumberthirdlastyear':
                    e.accessionnumberthirdlastyear = c.get(key)
                if key == 'accessionnumberfourthlastyear':
                    e.accessionnumberfourthlastyear = c.get(key)
                if key == 'accessionnumberfifthlastyear':
                    e.accessionnumberfifthlastyear = c.get(key)
                if key == 'accessionnumbersixthlastyear':
                    e.accessionnumbersixthlastyear = c.get(key)
                #
                if key == 'urlbalancesheetlastyear':
                    e.urlbalancesheetlastyear = c.get(key)
                if key == 'urlbalancesheetsecondlastyear':
                    e.urlbalancesheetsecondlastyear = c.get(key)
                if key == 'urlbalancesheetthirdlastyear':
                    e.urlbalancesheetthirdlastyear = c.get(key)
                if key == 'urlbalancesheetfourthlastyear':
                    e.urlbalancesheetfourthlastyear = c.get(key)
                if key == 'urlbalancesheetfifthlastyear':
                    e.urlbalancesheetfifthlastyear = c.get(key)
                if key == 'urlbalancesheetsixthlastyear':
                    e.urlbalancesheetsixthlastyear = c.get(key)
                #
                if key == 'urlincomestatementlastyear':
                    e.urlincomestatementlastyear = c.get(key)
                if key == 'urlincomestatementsecondlastyear':
                    e.urlincomestatementsecondlastyear = c.get(key)
                if key == 'urlincomestatementthirdlastyear':
                    e.urlincomestatementthirdlastyear = c.get(key)
                if key == 'urlincomestatementfourthlastyear':
                    e.urlincomestatementfourthlastyear = c.get(key)
                if key == 'urlincomestatementfifthlastyear':
                    e.urlincomestatementfifthlastyear = c.get(key)
                if key == 'urlincomestatementsixthlastyear':
                    e.urlincomestatementsixthlastyear = c.get(key)
                #         
                if key == 'urlcomprehensiveincomelastyear':
                    e.urlcomprehensiveincomelastyear = c.get(key)
                if key == 'urlcomprehensiveincomesecondlastyear':
                    e.urlcomprehensiveincomesecondlastyear = c.get(key)
                if key == 'urlcomprehensiveincomethirdlastyear':
                    e.urlcomprehensiveincomethirdlastyear = c.get(key)
                if key == 'urlcomprehensiveincomefourthlastyear':
                    e.urlcomprehensiveincomefourthlastyear = c.get(key)
                if key == 'urlcomprehensiveincomefifthlastyear':
                    e.urlcomprehensiveincomefifthlastyear = c.get(key)
                if key == 'urlcomprehensiveincomesixthlastyear':
                    e.urlcomprehensiveincomesixthlastyear = c.get(key)
                #
                if key == 'urlshareholdersequitylastyear':
                    e.urlshareholdersequitylastyear = c.get(key)
                if key == 'urlshareholdersequitysecondlastyear':
                    e.urlshareholdersequitysecondlastyear = c.get(key)
                if key == 'urlshareholdersequitythirdlastyear':
                    e.urlshareholdersequitythirdlastyear = c.get(key)
                if key == 'urlshareholdersequityfourthlastyear':
                    e.urlshareholdersequityfourthlastyear = c.get(key)
                if key == 'urlshareholdersequityfifthlastyear':
                    e.urlshareholdersequityfifthlastyear = c.get(key)
                if key == 'urlshareholdersequitysixthlastyear':
                    e.urlshareholdersequitysixthlastyear = c.get(key)
                #
                if key == 'urlcashflowlastyear':
                    e.urlcashflowlastyear = c.get(key)
                if key == 'urlcashflowsecondlastyear':
                    e.urlcashflowsecondlastyear = c.get(key)
                if key == 'urlcashflowthirdlastyear':
                    e.urlcashflowthirdlastyear = c.get(key)
                if key == 'urlcashflowfourthlastyear':
                    e.urlcashflowfourthlastyear = c.get(key)
                if key == 'urlcashflowfifthlastyear':
                    e.urlcashflowfifthlastyear = c.get(key)
                if key == 'urlcashflowsixthlastyear':
                    e.urlcashflowsixthlastyear = c.get(key)
                #
            except:
                pass
        e.save()
        print(e.TradingSymbol)
    except:
        pass
    #
    # audit
    for period in periods:
        try:
            ad1 = AuditData.objects.get(TradingSymbol=ts, Period=period)
        except:
            ad1 = AuditData()
            ad1.Period = period
            ad1.TradingSymbol = ts
        for key in c:
            try:
                #
                if period == 'lastyear':
                    rplcmt = 'ad1.'
                if period == 'secondlastyear':
                    rplcmt = 'ad2.'
                if period == 'thirdlastyear':
                    rplcmt = 'ad3.'
                if period == 'fourthlastyear':
                    rplcmt = 'ad4.'
                if period == 'fifthlastyear':
                    rplcmt = 'ad5.'
                if period == 'sixthlastyear':
                    rplcmt = 'ad6.'
                key = key.replace(rplcmt,'')
                #
                # AUDIT 1
                try:
                    #
                    # General - Audit
                    #
                    if key == 'db':
                        ad1.db = c.get(rplcmt + key)
                    if key == 'AccessionNumber':
                        ad1.AccessionNumber = c.get(rplcmt + key)
                    if key == 'AmendmentFlag':
                        ad1.AmendmentFlag = c.get(rplcmt + key)
                    if key == 'EntityRegistrantName':
                        ad1.EntityRegistrantName = c.get(rplcmt + key)
                    if key == 'Period':
                        ad1.Period = c.get(rplcmt + key)
                    if key == 'PeriodEndDate':
                        ad1.PeriodEndDate = c.get(rplcmt + key)
                    if key == 'TradingSymbol':
                        ad1.TradingSymbol = c.get(rplcmt + key)
                    #
                    # Balance Sheets - Audit
                    #
                    if key == 'CurrentAssets':
                        ad1.CurrentAssets = c.get(rplcmt + key)
                    if key == 'NonCurrentAssets':
                        ad1.NonCurrentAssets = c.get(rplcmt + key)
                    if key == 'Assets':
                        ad1.Assets = c.get(rplcmt + key)
                    if key == 'CurrentLiabilities':
                        ad1.CurrentLiabilities = c.get(rplcmt + key)
                    if key == 'NonCurrentLiabilities':
                        ad1.NonCurrentLiabilities = c.get(rplcmt + key)
                    if key == 'Liabilities':
                        ad1.Liabilities = c.get(rplcmt + key)
                    if key == 'ShareholdersEquity':
                        ad1.ShareholdersEquity = c.get(rplcmt + key)
                    if key == 'LiabilitiesAndShareholdersEquity':
                        ad1.LiabilitiesAndShareholdersEquity = c.get(rplcmt + key)
                    #
                    if key == 'CurrentAssetsGL_i':
                        ad1.CurrentAssetsGL_i = c.get(rplcmt + key)
                    if key == 'CurrentAssetsGL_ii':
                        ad1.CurrentAssetsGL_ii = c.get(rplcmt + key)
                    if key == 'CurrentAssetsGL_iii':
                        ad1.CurrentAssetsGL_iii = c.get(rplcmt + key)
                    if key == 'AnomalyCurrentAssets':
                        ad1.AnomalyCurrentAssets = c.get(rplcmt + key)
                    if key == 'AnomalyCurrentAssetsSEC':
                        ad1.AnomalyCurrentAssetsSEC = c.get(rplcmt + key)
                    #
                    if key == 'NonCurrentAssetsGL_i':
                        ad1.NonCurrentAssetsGL_i = c.get(rplcmt + key)
                    if key == 'NonCurrentAssetsGL_ii':
                        ad1.NonCurrentAssetsGL_ii = c.get(rplcmt + key)
                    if key == 'NonCurrentAssetsGL_iii':
                        ad1.NonCurrentAssetsGL_iii = c.get(rplcmt + key)
                    if key == 'AnomalyNonCurrentAssets':
                        ad1.AnomalyNonCurrentAssets = c.get(rplcmt + key)
                    if key == 'AnomalyNonCurrentAssetsSEC':
                        ad1.AnomalyNonCurrentAssetsSEC = c.get(rplcmt + key)
                    #
                    if key == 'AnomalyAssets':
                        ad1.AnomalyAssets = c.get(rplcmt + key)
                    #
                    if key == 'CurrentLiabilitiesGL_i':
                        ad1.CurrentLiabilitiesGL_i = c.get(rplcmt + key)
                    if key == 'CurrentLiabilitiesGL_ii':
                        ad1.CurrentLiabilitiesGL_ii = c.get(rplcmt + key)
                    if key == 'CurrentLiabilitiesGL_iii':
                        ad1.CurrentLiabilitiesGL_iii = c.get(rplcmt + key)
                    if key == 'AnomalyCurrentLiabilities':
                        ad1.AnomalyCurrentLiabilities = c.get(rplcmt + key)
                    if key == 'AnomalyCurrentLiabilitiesSEC':
                        ad1.AnomalyCurrentLiabilitiesSEC = c.get(rplcmt + key)
                    #
                    if key == 'NonCurrentLiabilitiesGL_i':
                        ad1.NonCurrentLiabilitiesGL_i = c.get(rplcmt + key)
                    if key == 'NonCurrentLiabilitiesGL_ii':
                        ad1.NonCurrentLiabilitiesGL_ii = c.get(rplcmt + key)
                    if key == 'NonCurrentLiabilitiesGL_iii':
                        ad1.NonCurrentLiabilitiesGL_iii = c.get(rplcmt + key)
                    if key == 'AnomalyNonCurrentLiabilities':
                        ad1.AnomalyNonCurrentLiabilities = c.get(rplcmt + key)
                    if key == 'AnomalyNonCurrentLiabilitiesSEC':
                        ad1.AnomalyNonCurrentLiabilitiesSEC = c.get(rplcmt + key)
                    #
                    if key == 'AnomalyLiabilities':
                        ad1.AnomalyLiabilities = c.get(rplcmt + key)
                    if key == 'AnomalyShareholdersEquity':
                        ad1.AnomalyShareholdersEquity = c.get(rplcmt + key)
                    #
                    if key == 'ShareholdersEquityBalanceGL_i':
                        ad1.ShareholdersEquityBalanceGL_i = c.get(rplcmt + key)
                    if key == 'ShareholdersEquityBalanceGL_ii':
                        ad1.ShareholdersEquityBalanceGL_ii = c.get(rplcmt + key)
                    if key == 'ShareholdersEquityBalanceGL_iii':
                        ad1.ShareholdersEquityBalanceGL_iii = c.get(rplcmt + key)
                    if key == 'AnomalyShareholdersEquitySEC':
                        ad1.AnomalyShareholdersEquitySEC = c.get(rplcmt + key)
                    if key == 'AnomalyLiabilitiesAndShareholdersEquity':
                        ad1.AnomalyLiabilitiesAndShareholdersEquity = c.get(rplcmt + key)
                    #
                    #
                    # Income Statements - Audit
                    #
                    if key == 'Sales':
                        ad1.Sales = c.get(rplcmt + key)
                    if key == 'CostOfSales':
                        ad1.CostOfSales = c.get(rplcmt + key)
                    if key == 'GrossMargin':
                        ad1.GrossMargin = c.get(rplcmt + key)
                    if key == 'OperatingExpenses':
                        ad1.OperatingExpenses = c.get(rplcmt + key)
                    if key == 'OperatingIncome':
                        ad1.OperatingIncome = c.get(rplcmt + key)
                    if key == 'IncomeBeforeTaxes':
                        ad1.IncomeBeforeTaxes = c.get(rplcmt + key)
                    if key == 'NetIncome':
                        ad1.NetIncome = c.get(rplcmt + key)
                    if key == 'NetIncomeAttributableToNonControllingInterest':
                        ad1.NetIncomeAttributableToNonControllingInterest = c.get(rplcmt + key)
                    #
                    if key == 'GrossMarginGL_i':
                        ad1.GrossMarginGL_i = c.get(rplcmt + key)
                    if key == 'GrossMarginGL_ii':
                        ad1.GrossMarginGL_ii = c.get(rplcmt + key)
                    if key == 'GrossMarginGL_iii':
                        ad1.GrossMarginGL_iii = c.get(rplcmt + key)
                    #
                    if key == 'AnomalyGrossMargin':
                        ad1.AnomalyGrossMargin = c.get(rplcmt + key)
                    #
                    if key == 'OperatingExpensesGL_i':
                        ad1.OperatingExpensesGL_i = c.get(rplcmt + key)
                    if key == 'OperatingExpensesGL_ii':
                        ad1.OperatingExpensesGL_ii = c.get(rplcmt + key)
                    if key == 'OperatingExpensesGL_iii':
                        ad1.OperatingExpensesGL_iii = c.get(rplcmt + key)
                    #
                    if key == 'AnomalyOperatingExpenses':
                        ad1.AnomalyOperatingExpenses = c.get(rplcmt + key)
                    #
                    if key == 'OperatingIncomeGL_i':
                        ad1.OperatingIncomeGL_i = c.get(rplcmt + key)
                    if key == 'OperatingIncomeGL_ii':
                        ad1.OperatingIncomeGL_ii = c.get(rplcmt + key)
                    if key == 'OperatingIncomeGL_iii':
                        ad1.OperatingIncomeGL_iii = c.get(rplcmt + key)
                    #
                    if key == 'AnomalyOperatingIncome':
                        ad1.AnomalyOperatingIncome = c.get(rplcmt + key)
                    #
                    if key == 'IncomeBeforeTaxesGL_i':
                        ad1.IncomeBeforeTaxesGL_i = c.get(rplcmt + key)
                    if key == 'IncomeBeforeTaxesGL_ii':
                        ad1.IncomeBeforeTaxesGL_ii = c.get(rplcmt + key)
                    if key == 'IncomeBeforeTaxesGL_iii':
                        ad1.IncomeBeforeTaxesGL_iii = c.get(rplcmt + key)
                    #
                    if key == 'AnomalyIncomeBeforeTaxes':
                        ad1.AnomalyIncomeBeforeTaxes = c.get(rplcmt + key)
                    #
                    if key == 'NetIncomeGL_i':
                        ad1.NetIncomeGL_i = c.get(rplcmt + key)
                    if key == 'NetIncomeGL_ii':
                        ad1.NetIncomeGL_ii = c.get(rplcmt + key)
                    if key == 'NetIncomeGL_iii':
                        ad1.NetIncomeGL_iii = c.get(rplcmt + key)
                    #
                    if key == 'AnomalyNetIncome':
                        ad1.AnomalyNetIncome = c.get(rplcmt + key)
                    #
                    #
                    # Comprehensive Income - Audit
                    #
                    if key == 'OtherComprehensiveIncome':
                        ad1.OtherComprehensiveIncome = c.get(rplcmt + key)
                    if key == 'ComprehensiveIncome':
                        ad1.ComprehensiveIncome = c.get(rplcmt + key)
                        #
                    if key == 'OtherComprehensiveIncomeGL_i':
                        ad1.OtherComprehensiveIncomeGL_i = c.get(rplcmt + key)
                    if key == 'OtherComprehensiveIncomeGL_ii':
                        ad1.OtherComprehensiveIncomeGL_ii = c.get(rplcmt + key)
                    if key == 'OtherComprehensiveIncomeGL_iii':
                        ad1.OtherComprehensiveIncomeGL_iii = c.get(rplcmt + key)
                    if key == 'AnomalyOtherComprehensiveIncome':
                        ad1.AnomalyOtherComprehensiveIncome = c.get(rplcmt + key)
                    if key == 'AnomalyComprehensiveIncome':
                        ad1.AnomalyComprehensiveIncome = c.get(rplcmt + key)
                    #
                    #
                    # Shareholders Equity - Audit
                    #
                    if key == 'ShareholdersEquityBeginning':
                        ad1.ShareholdersEquityBeginning = c.get(rplcmt + key)
                    #
                    if key == 'ConvertibleDebt':
                        ad1.ConvertibleDebt = c.get(rplcmt + key)
                    if key == 'CommonShares':
                        ad1.CommonShares = c.get(rplcmt + key)
                    if key == 'PreferredShares':
                        ad1.PreferredShares = c.get(rplcmt + key)
                    if key == 'RetainedEarnings':
                        ad1.RetainedEarnings = c.get(rplcmt + key)
                    if key == 'AccumulatedOtherComprehensiveIncome':
                        ad1.AccumulatedOtherComprehensiveIncome = c.get(rplcmt + key)
                    if key == 'TreasuryShares':
                        ad1.TreasuryShares = c.get(rplcmt + key)
                    if key == 'EmployeeBenefitTrust':
                        ad1.EmployeeBenefitTrust = c.get(rplcmt + key)
                    if key == 'NonControllingInterests':
                        ad1.NonControllingInterests = c.get(rplcmt + key)
                    if key == 'AnomalyConvertibleDebt':
                        ad1.AnomalyConvertibleDebt = c.get(rplcmt + key)
                    if key == 'AnomalyCommonShares':
                        ad1.AnomalyCommonShares = c.get(rplcmt + key)
                    if key == 'AnomalyPreferredShares':
                        ad1.AnomalyPreferredShares = c.get(rplcmt + key)
                    if key == 'AnomalyRetainedEarnings':
                        ad1.AnomalyRetainedEarnings = c.get(rplcmt + key)
                    if key == 'AnomalyAccumulatedOtherComprehensiveIncome':
                        ad1.AnomalyAccumulatedOtherComprehensiveIncome = c.get(rplcmt + key)
                    if key == 'AnomalyTreasuryShares':
                        ad1.AnomalyTreasuryShares = c.get(rplcmt + key)
                    if key == 'AnomalyEmployeeBenefitTrust':
                        ad1.AnomalyEmployeeBenefitTrust = c.get(rplcmt + key)
                    if key == 'AnomalyNonControllingInterests':
                        ad1.AnomalyNonControllingInterests = c.get(rplcmt + key)
                    if key == 'ShareholdersEquityGL_i':
                        ad1.ShareholdersEquityGL_i = c.get(rplcmt + key)
                    if key == 'ShareholdersEquityGL_ii':
                        ad1.ShareholdersEquityGL_ii = c.get(rplcmt + key)
                    if key == 'ShareholdersEquityGL_iii':
                        ad1.ShareholdersEquityGL_iii = c.get(rplcmt + key)
                    #
                    #
                    # Cash Flow - Audit
                    #
                    if key == 'OperatingActivities':
                        ad1.OperatingActivities = c.get(rplcmt + key)
                    if key == 'InvestingActivities':
                        ad1.InvestingActivities = c.get(rplcmt + key)
                    if key == 'FinancingActivities':
                        ad1.FinancingActivities = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseInCash':
                        ad1.IncreaseDecreaseInCash = c.get(rplcmt + key)
                    #
                    if key == 'CashFlowCashExplainedDifference':
                        ad1.CashFlowCashExplainedDifference = c.get(rplcmt + key)
                    #
                    if key == 'OperatingActivitiesGL_i':
                        ad1.OperatingActivitiesGL_i = c.get(rplcmt + key)
                    if key == 'OperatingActivitiesGL_ii':
                        ad1.OperatingActivitiesGL_ii = c.get(rplcmt + key)
                    if key == 'OperatingActivitiesGL_iii':
                        ad1.OperatingActivitiesGL_iii = c.get(rplcmt + key)
                    if key == 'AnomalyOperatingActivities':
                        ad1.AnomalyOperatingActivities = c.get(rplcmt + key)
                    if key == 'AnomalyOperatingActivitiesSEC':
                        ad1.AnomalyOperatingActivitiesSEC = c.get(rplcmt + key)
                    #
                    if key == 'InvestingActivitiesGL_i':
                        ad1.InvestingActivitiesGL_i = c.get(rplcmt + key)
                    if key == 'InvestingActivitiesGL_ii':
                        ad1.InvestingActivitiesGL_ii = c.get(rplcmt + key)
                    if key == 'InvestingActivitiesGL_iii':
                        ad1.InvestingActivitiesGL_iii = c.get(rplcmt + key)
                    if key == 'AnomalyInvestingActivities':
                        ad1.AnomalyInvestingActivities = c.get(rplcmt + key)
                    if key == 'AnomalyInvestingActivitiesSEC':
                        ad1.AnomalyInvestingActivitiesSEC = c.get(rplcmt + key)
                    #
                    if key == 'FinancingActivitiesGL_i':
                        ad1.FinancingActivitiesGL_i = c.get(rplcmt + key)
                    if key == 'FinancingActivitiesGL_ii':
                        ad1.FinancingActivitiesGL_ii = c.get(rplcmt + key)
                    if key == 'FinancingActivitiesGL_iii':
                        ad1.FinancingActivitiesGL_iii = c.get(rplcmt + key)
                    if key == 'AnomalyFinancingActivities':
                        ad1.AnomalyFinancingActivities = c.get(rplcmt + key)
                    if key == 'AnomalyFinancingActivitiesSEC':
                        ad1.AnomalyFinancingActivitiesSEC = c.get(rplcmt + key)
                    #
                    #
                    # Supplemental - Audit
                    #
                    if key == 'TargetWorkingCapital':
                        ad1.TargetWorkingCapital = c.get(rplcmt + key)
                    if key == 'ReinvestmentOfMaintenance':
                        ad1.ReinvestmentOfMaintenance = c.get(rplcmt + key)
                    if key == 'NormalizedDividendPaymentToNonControllingInterests':
                        ad1.NormalizedDividendPaymentToNonControllingInterests = c.get(rplcmt + key)
                    if key == 'NormalizedDividendPaymentToPreferredShareholders':
                        ad1.NormalizedDividendPaymentToPreferredShareholders = c.get(rplcmt + key)
                    if key == 'TheoricalInterestRate':
                        ad1.TheoricalInterestRate = c.get(rplcmt + key)
                    if key == 'TheoricalTaxRate':
                        ad1.TheoricalTaxRate = c.get(rplcmt + key)
                    if key == 'CapitalizationRateFloor':
                        ad1.CapitalizationRateFloor = c.get(rplcmt + key)
                except:
                    pass
            except:
                pass
        ad1.save()
    #
    # cash fow
    for period in periods:
        try:
            cf1 = CashFlow.objects.get(TradingSymbol=ts, Period=period)
        except:
            cf1 = CashFlow()
            cf1.Period = period
            cf1.TradingSymbol = ts
        for key in c:
            try:
                #
                if period == 'lastyear':
                    rplcmt = 'cf1.'
                if period == 'secondlastyear':
                    rplcmt = 'cf2.'
                if period == 'thirdlastyear':
                    rplcmt = 'cf3.'
                if period == 'fourthlastyear':
                    rplcmt = 'cf4.'
                if period == 'fifthlastyear':
                    rplcmt = 'cf5.'
                if period == 'sixthlastyear':
                    rplcmt = 'cf6.'
                key = key.replace(rplcmt,'')
                #
                # CASH FLOW 1
                try:
                    #
                    if key == 'AccessionNumber':
                        cf1.AccessionNumber = c.get(rplcmt + key)
                    if key == 'AmendmentFlag':
                        cf1.AmendmentFlag = c.get(rplcmt + key)
                    if key == 'EntityRegistrantName':
                        cf1.EntityRegistrantName = c.get(rplcmt + key)
                    if key == 'Period':
                        cf1.Period = c.get(rplcmt + key)
                    if key == 'PeriodEndDate':
                        cf1.PeriodEndDate = c.get(rplcmt + key)
                    if key == 'TradingSymbol':
                        cf1.TradingSymbol = c.get(rplcmt + key)
                    #
                    # Cash - Cash Flow,
                    #
                    if key == 'CashBeginningBalance':
                        cf1.CashBeginningBalance = c.get(rplcmt + key)
                    if key == 'EffectOfExchangeRateOnCash':
                        cf1.EffectOfExchangeRateOnCash = c.get(rplcmt + key)
                    #
                    # Operating Activities - Cash Flow,
                    #
                    if key == 'DepreciationDepletionAndAmortization':
                        cf1.DepreciationDepletionAndAmortization = c.get(rplcmt + key)
                    if key == 'GainRelatedToDisposalOrSale':
                        cf1.GainRelatedToDisposalOrSale = c.get(rplcmt + key)
                    if key == 'RestructuringAndOtherSpecialCharges':
                        cf1.RestructuringAndOtherSpecialCharges = c.get(rplcmt + key)
                    if key == 'AccruedEmployeeCompensation':
                        cf1.AccruedEmployeeCompensation = c.get(rplcmt + key)
                    if key == 'ShareBasedCompensation':
                        cf1.ShareBasedCompensation = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseInIncomeTaxExpenseBenefit':
                        cf1.IncreaseDecreaseInIncomeTaxExpenseBenefit = c.get(rplcmt + key)
                    if key == 'OtherNonCashIncomeExpense':
                        cf1.OtherNonCashIncomeExpense = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseInAccountsReceivable':
                        cf1.IncreaseDecreaseInAccountsReceivable = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets':
                        cf1.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseInInventories':
                        cf1.IncreaseDecreaseInInventories = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseInOtherReceivables':
                        cf1.IncreaseDecreaseInOtherReceivables = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseInAccountsPayableAndAccruedLiabilities':
                        cf1.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseInContractWithCustomerLiability':
                        cf1.IncreaseDecreaseInContractWithCustomerLiability = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseInRetirementBenefits':
                        cf1.IncreaseDecreaseInRetirementBenefits = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseFinanceLeaseCurrent':
                        cf1.IncreaseDecreaseFinanceLeaseCurrent = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseOperatingLeaseCurrent':
                        cf1.IncreaseDecreaseOperatingLeaseCurrent = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseInFairValueOfDerivativesOperating':
                        cf1.IncreaseDecreaseInFairValueOfDerivativesOperating = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseInOtherOperatingActivities':
                        cf1.IncreaseDecreaseInOtherOperatingActivities = c.get(rplcmt + key)
                    #
                    # Investing Activities - Cash Flow,
                    #
                    if key == 'PaymentsToAcquireInvestments':
                        cf1.PaymentsToAcquireInvestments = c.get(rplcmt + key)
                    if key == 'ProceedsOfInvestments':
                        cf1.ProceedsOfInvestments = c.get(rplcmt + key)
                    if key == 'PaymentsToAcquirePropertyPlantAndEquipment':
                        cf1.PaymentsToAcquirePropertyPlantAndEquipment = c.get(rplcmt + key)
                    if key == 'ProceedsFromDisposalsOfPropertyAndEquipment':
                        cf1.ProceedsFromDisposalsOfPropertyAndEquipment = c.get(rplcmt + key)
                    if key == 'PaymentsToAcquireBusinessesAndIntangibles':
                        cf1.PaymentsToAcquireBusinessesAndIntangibles = c.get(rplcmt + key)
                    if key == 'ProceedsFromDisposalsOfBusinessesAndIntangibles':
                        cf1.ProceedsFromDisposalsOfBusinessesAndIntangibles = c.get(rplcmt + key)
                    if key == 'ProceedsRelatedToInsuranceSettlement':
                        cf1.ProceedsRelatedToInsuranceSettlement = c.get(rplcmt + key)
                    if key == 'ReveiptOfGovernmentGrants':
                        cf1.ReveiptOfGovernmentGrants = c.get(rplcmt + key)
                    if key == 'PaymentOfLicenseFee':
                        cf1.PaymentOfLicenseFee = c.get(rplcmt + key)
                    if key == 'InvestingActivitiesInDiscontinuedOperations':
                        cf1.InvestingActivitiesInDiscontinuedOperations = c.get(rplcmt + key)
                    if key == 'OtherInvestingActivities':
                        cf1.OtherInvestingActivities = c.get(rplcmt + key)
                    #
                    # Financing Activities - Cash Flow,
                    #
                    if key == 'FinanceLeasePrincipalPayments':
                        cf1.FinanceLeasePrincipalPayments = c.get(rplcmt + key)
                    if key == 'ProceedsFromIssuanceOfCommonShares':
                        cf1.ProceedsFromIssuanceOfCommonShares = c.get(rplcmt + key)
                    if key == 'ProceedsFromSharePurchasePlanAndOptionsExercice':
                        cf1.ProceedsFromSharePurchasePlanAndOptionsExercice = c.get(rplcmt + key)
                    if key == 'PaymentsRelatedToTaxWithholdingForShareBasedCompensation':
                        cf1.PaymentsRelatedToTaxWithholdingForShareBasedCompensation = c.get(rplcmt + key)
                    if key == 'PaymentsForRepurchaseOfCommonShares':
                        cf1.PaymentsForRepurchaseOfCommonShares = c.get(rplcmt + key)
                    if key == 'PaymentsOfDividends':
                        cf1.PaymentsOfDividends = c.get(rplcmt + key)
                    if key == 'IncreaseDecreaseDeferredContingentConsideration':
                        cf1.IncreaseDecreaseDeferredContingentConsideration = c.get(rplcmt + key)
                    if key == 'ProceedsFromIssuanceOfLongTermDebt':
                        cf1.ProceedsFromIssuanceOfLongTermDebt = c.get(rplcmt + key)
                    if key == 'RepaymentsOfLongTermDebt':
                        cf1.RepaymentsOfLongTermDebt = c.get(rplcmt + key)
                    if key == 'FinancingCosts':
                        cf1.FinancingCosts = c.get(rplcmt + key)
                    if key == 'NetChangeInShortTermBorrowings':
                        cf1.NetChangeInShortTermBorrowings = c.get(rplcmt + key)
                    if key == 'NetChangeInForwardAndHedgesClassifiedAsFinancingActivities':
                        cf1.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities = c.get(rplcmt + key)
                    if key == 'NetChangeInNonControllingInterests':
                        cf1.NetChangeInNonControllingInterests = c.get(rplcmt + key)
                    if key == 'ProceedsFromRepaymentsOfCommercialPaper':
                        cf1.ProceedsFromRepaymentsOfCommercialPaper = c.get(rplcmt + key)
                    if key == 'RepaymentsOfConvertible':
                        cf1.RepaymentsOfConvertible = c.get(rplcmt + key)
                    if key == 'IssuanceOfConvertible':
                        cf1.IssuanceOfConvertible = c.get(rplcmt + key)
                    if key == 'EquityInvesteeAdvancesRepayments':
                        cf1.EquityInvesteeAdvancesRepayments = c.get(rplcmt + key)
                    if key == 'OtherFinancingActivities':
                        cf1.OtherFinancingActivities = c.get(rplcmt + key)
                    if key == 'CashPaidForTaxes':
                        cf1.CashPaidForTaxes = c.get(rplcmt + key)
                    #
                    # Supplemental - Cash Flow,
                    #
                    if key == 'CashPaidForInterest':
                        cf1.CashPaidForInterest = c.get(rplcmt + key)
                except:
                    pass
            except:
                pass
        cf1.save()
    #
    # trial balances
    for period in periods:
        try:
            tb1 = TrialBalance.objects.get(TradingSymbol=ts, Period=period)
        except:
            tb1 = TrialBalance()
            tb1.Period = period
            tb1.TradingSymbol = ts
        for key in c:
            try:
                #
                if period == 'lastyear':
                    rplcmt = 'tb1.'
                if period == 'secondlastyear':
                    rplcmt = 'tb2.'
                if period == 'thirdlastyear':
                    rplcmt = 'tb3.'
                if period == 'fourthlastyear':
                    rplcmt = 'tb4.'
                if period == 'fifthlastyear':
                    rplcmt = 'tb5.'
                if period == 'sixthlastyear':
                    rplcmt = 'tb6.'
                key = key.replace(rplcmt,'')
                #
                # TRIAL BALANCE 1
                try:
                    #
                    #
                    # General - Trial Balance,
                    #
                    if key == 'AccessionNumber':
                        tb1.AccessionNumber = c.get(rplcmt + key)
                    if key == 'AmendmentFlag':
                        tb1.AmendmentFlag = c.get(rplcmt + key)
                    if key == 'EntityRegistrantName':
                        tb1.EntityRegistrantName = c.get(rplcmt + key)
                    if key == 'Link':
                        tb1.Link = c.get(rplcmt + key)
                    if key == 'Period':
                        tb1.Period = c.get(rplcmt + key)
                    if key == 'PeriodEndDate':
                        tb1.PeriodEndDate = c.get(rplcmt + key)
                    if key == 'PeriodOfReport':
                        tb1.PeriodOfReport = c.get(rplcmt + key)
                    if key == 'TradingSymbol':
                        tb1.TradingSymbol = c.get(rplcmt + key)
                    #
                    #
                    # Current Assets - Trial Balance,
                    #
                    if key == 'Cash':
                        tb1.Cash = c.get(rplcmt + key)
                    if key == 'ShortTermInvestments':
                        tb1.ShortTermInvestments = c.get(rplcmt + key)
                    if key == 'AccountsReceivable':
                        tb1.AccountsReceivable = c.get(rplcmt + key)
                    if key == 'WorkInProgress':
                        tb1.WorkInProgress = c.get(rplcmt + key)
                    if key == 'Inventories':
                        tb1.Inventories = c.get(rplcmt + key)
                    if key == 'PrepaidExpenses':
                        tb1.PrepaidExpenses = c.get(rplcmt + key)
                    if key == 'NonTradeReceivables':
                        tb1.NonTradeReceivables = c.get(rplcmt + key)
                    if key == 'PrepaidTaxAssetsCurrent':
                        tb1.PrepaidTaxAssetsCurrent = c.get(rplcmt + key)
                    if key == 'DeferredTaxAssetsCurrent':
                        tb1.DeferredTaxAssetsCurrent = c.get(rplcmt + key)
                    if key == 'RightOfUseAssetsCurrent':
                        tb1.RightOfUseAssetsCurrent = c.get(rplcmt + key)
                    if key == 'OtherCurrentAssets':
                        tb1.OtherCurrentAssets = c.get(rplcmt + key)
                    if key == 'DiscontinuedOperationsCurrent':
                        tb1.DiscontinuedOperationsCurrent = c.get(rplcmt + key)
                    #
                    #
                    # Non-Current Assets - Trial Balance,
                    #
                    if key == 'LongTermReceivables':
                        tb1.LongTermReceivables = c.get(rplcmt + key)
                    if key == 'DeferredCharges':
                        tb1.DeferredCharges = c.get(rplcmt + key)
                    if key == 'Investments':
                        tb1.Investments = c.get(rplcmt + key)
                    if key == 'PropertyPlantAndEquipment':
                        tb1.PropertyPlantAndEquipment = c.get(rplcmt + key)
                    if key == 'OperatingLeaseRightOfUseAssets':
                        tb1.OperatingLeaseRightOfUseAssets = c.get(rplcmt + key)
                    if key == 'FinanceLeaseRightOfUseAssets':
                        tb1.FinanceLeaseRightOfUseAssets = c.get(rplcmt + key)
                    if key == 'IntangibleAssets':
                        tb1.IntangibleAssets = c.get(rplcmt + key)
                    if key == 'Goodwill':
                        tb1.Goodwill = c.get(rplcmt + key)
                    if key == 'RefundableTaxAssetsNonCurrent':
                        tb1.RefundableTaxAssetsNonCurrent = c.get(rplcmt + key)
                    if key == 'DeferredTaxAssetsNonCurrent':
                        tb1.DeferredTaxAssetsNonCurrent = c.get(rplcmt + key)
                    if key == 'DefinedBenefitPensionAndOtherSimilarPlans':
                        tb1.DefinedBenefitPensionAndOtherSimilarPlans = c.get(rplcmt + key)
                    if key == 'OtherNonCurrentAssets':
                        tb1.OtherNonCurrentAssets = c.get(rplcmt + key)
                    if key == 'DiscontinuedOperations':
                        tb1.DiscontinuedOperations = c.get(rplcmt + key)
                    #
                    #
                    # Current Liabilities - Trial Balance,
                    #
                    if key == 'AccountsPayableAndAccruedLiabilities':
                        tb1.AccountsPayableAndAccruedLiabilities = c.get(rplcmt + key)
                    if key == 'EmployeeCompensationCurrent':
                        tb1.EmployeeCompensationCurrent = c.get(rplcmt + key)
                    if key == 'OperatingLeasesCurrent':
                        tb1.OperatingLeasesCurrent = c.get(rplcmt + key)
                    if key == 'FinanceLeasesCurrent':
                        tb1.FinanceLeasesCurrent = c.get(rplcmt + key)
                    if key == 'DeferredRevenueAndDepositsCurrent':
                        tb1.DeferredRevenueAndDepositsCurrent = c.get(rplcmt + key)
                    if key == 'AccruedTaxLiabilities':
                        tb1.AccruedTaxLiabilities = c.get(rplcmt + key)
                    if key == 'DeferredTaxLiabilitiesCurrent':
                        tb1.DeferredTaxLiabilitiesCurrent = c.get(rplcmt + key)
                    if key == 'CommercialPapers':
                        tb1.CommercialPapers = c.get(rplcmt + key)
                    if key == 'ShortTermBorrowings':
                        tb1.ShortTermBorrowings = c.get(rplcmt + key)
                    if key == 'OtherCurrentLiabilities':
                        tb1.OtherCurrentLiabilities = c.get(rplcmt + key)
                    if key == 'DiscontinuedOperationsLiabilitiesCurrent':
                        tb1.DiscontinuedOperationsLiabilitiesCurrent = c.get(rplcmt + key)
                    if key == 'DividendsPayable':
                        tb1.DividendsPayable = c.get(rplcmt + key)
                    if key == 'ShortTermPortionOfLongTermDebt':
                        tb1.ShortTermPortionOfLongTermDebt = c.get(rplcmt + key)
                    #
                    #
                    # Non-Current Liabilities - Trial Balance,
                    #
                    if key == 'LongTermDebt':
                        tb1.LongTermDebt = c.get(rplcmt + key)
                    if key == 'PreferredSharesLiability':
                        tb1.PreferredSharesLiability = c.get(rplcmt + key)
                    if key == 'RetirementBenefits':
                        tb1.RetirementBenefits = c.get(rplcmt + key)
                    if key == 'OperatingLeasesNonCurrent':
                        tb1.OperatingLeasesNonCurrent = c.get(rplcmt + key)
                    if key == 'FinanceLeasesNonCurrent':
                        tb1.FinanceLeasesNonCurrent = c.get(rplcmt + key)
                    if key == 'LeaseIncentiveObligation':
                        tb1.LeaseIncentiveObligation = c.get(rplcmt + key)
                    if key == 'DeferredRevenueAndDepositsNonCurrent':
                        tb1.DeferredRevenueAndDepositsNonCurrent = c.get(rplcmt + key)
                    if key == 'ContingentConsideration':
                        tb1.ContingentConsideration = c.get(rplcmt + key)
                    if key == 'AccruedTaxLiabilitiesNonCurrent':
                        tb1.AccruedTaxLiabilitiesNonCurrent = c.get(rplcmt + key)
                    if key == 'DeferredTaxLiabilitiesNonCurrent':
                        tb1.DeferredTaxLiabilitiesNonCurrent = c.get(rplcmt + key)
                    if key == 'OtherNonCurrentLiabilities':
                        tb1.OtherNonCurrentLiabilities = c.get(rplcmt + key)
                    if key == 'RedeemableNonControllingInterests':
                        tb1.RedeemableNonControllingInterests = c.get(rplcmt + key)
                    if key == 'DiscontinuedOperationsLiabilitiesNonCurrent':
                        tb1.DiscontinuedOperationsLiabilitiesNonCurrent = c.get(rplcmt + key)
                    #
                    #
                    # Shareholders Equity - Trial Balance
                    #
                    # convertible debt,
                    if key == 'ConvertibleDebtBeginning':
                        tb1.ConvertibleDebtBeginning = c.get(rplcmt + key)
                    #
                    # common shares,
                    if key == 'CommonSharesBeginning':
                        tb1.CommonSharesBeginning = c.get(rplcmt + key)
                    if key == 'CommonSharesIssued':
                        tb1.CommonSharesIssued = c.get(rplcmt + key)
                    if key == 'ShareBasedCompensation':
                        tb1.ShareBasedCompensation = c.get(rplcmt + key)
                    #
                    # preferred shares,
                    if key == 'PreferredSharesBeginning':
                        tb1.PreferredSharesBeginning = c.get(rplcmt + key)
                    #
                    # retained earnings,
                    if key == 'RetainedEarningsBeginning':
                        tb1.RetainedEarningsBeginning = c.get(rplcmt + key)
                    if key == 'DividendsAndDividendEquivalentsDeclared':
                        tb1.DividendsAndDividendEquivalentsDeclared = c.get(rplcmt + key)
                    if key == 'CommonSharesRepurchasedAndRetired':
                        tb1.CommonSharesRepurchasedAndRetired = c.get(rplcmt + key)
                    if key == 'ShareBasedCompensationRetainedEarnings':
                        tb1.ShareBasedCompensationRetainedEarnings = c.get(rplcmt + key)
                    if key == 'EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts':
                        tb1.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts = c.get(rplcmt + key)
                    if key == 'RetainedEarningsOthers':
                        tb1.RetainedEarningsOthers = c.get(rplcmt + key)
                    #
                    # accumulated other comprehensive income,
                    if key == 'AccumulatedOtherComprehensiveIncomeBeginning':
                        tb1.AccumulatedOtherComprehensiveIncomeBeginning = c.get(rplcmt + key)
                    #
                    # treasury shares,
                    if key == 'TreasurySharesBeginning':
                        tb1.TreasurySharesBeginning = c.get(rplcmt + key)
                    if key == 'PurchaseAndSellOfTreasuryShares':
                        tb1.PurchaseAndSellOfTreasuryShares = c.get(rplcmt + key)
                    #
                    # employee benefit trust,
                    if key == 'EmployeeBenefitTrustBeginning':
                        tb1.EmployeeBenefitTrustBeginning = c.get(rplcmt + key)
                    #
                    # non controlling interests,
                    if key == 'NonControllingInterestsBeginning':
                        tb1.NonControllingInterestsBeginning = c.get(rplcmt + key)
                    if key == 'DividendsDeclaredToNonControllingInterests':
                        tb1.DividendsDeclaredToNonControllingInterests = c.get(rplcmt + key)
                    if key == 'AcquisitionOfNonControllingInterests':
                        tb1.AcquisitionOfNonControllingInterests = c.get(rplcmt + key)
                    if key == 'NonControllingInterestsOthers':
                        tb1.NonControllingInterestsOthers = c.get(rplcmt + key)
                    #
                    #
                    # Income Statements - Trial Balance,
                    #
                    if key == 'Sales':
                        tb1.Sales = c.get(rplcmt + key)
                    if key == 'CostOfSales':
                        tb1.CostOfSales = c.get(rplcmt + key)
                    if key == 'ResearchAndDevelopment':
                        tb1.ResearchAndDevelopment = c.get(rplcmt + key)
                    if key == 'SellingGeneralAdministrativeAndMarketing':
                        tb1.SellingGeneralAdministrativeAndMarketing = c.get(rplcmt + key)
                    if key == 'ImpairmentRestructuringAndOtherSpecialCharges':
                        tb1.ImpairmentRestructuringAndOtherSpecialCharges = c.get(rplcmt + key)
                    if key == 'NonOperatingIncome':
                        tb1.NonOperatingIncome = c.get(rplcmt + key)
                    if key == 'IncomeTaxExpenseBenefit':
                        tb1.IncomeTaxExpenseBenefit = c.get(rplcmt + key)
                    if key == 'EquityMethodInvesteesIncome':
                        tb1.EquityMethodInvesteesIncome = c.get(rplcmt + key)
                    if key == 'NetIncomeFromDiscontinuedOperations':
                        tb1.NetIncomeFromDiscontinuedOperations = c.get(rplcmt + key)
                    #
                    #
                    # Other Comprehensive Income - Trial Balance,
                    #
                    if key == 'ChangeInForeignCurrencyTranslationAdjustment':
                        tb1.ChangeInForeignCurrencyTranslationAdjustment = c.get(rplcmt + key)
                    if key == 'ChangeInUnrealizedGainsLossesOnDerivativeInstruments':
                        tb1.ChangeInUnrealizedGainsLossesOnDerivativeInstruments = c.get(rplcmt + key)
                    if key == 'ChangeInUnrealizedGainsLossesOnInvestments':
                        tb1.ChangeInUnrealizedGainsLossesOnInvestments = c.get(rplcmt + key)
                    if key == 'ChangeInDefinedBenefitPensionAndOtherSimilarPlans':
                        tb1.ChangeInDefinedBenefitPensionAndOtherSimilarPlans = c.get(rplcmt + key)
                    if key == 'IncomeTaxOnOtherComprehensiveIncome':
                        tb1.IncomeTaxOnOtherComprehensiveIncome = c.get(rplcmt + key)
                    #
                except:
                    pass
            except:
                pass
        tb1.save()
    #
    f.close()


