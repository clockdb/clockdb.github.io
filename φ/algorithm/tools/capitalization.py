#
# Libraries
from φ.models import *
from bs4 import BeautifulSoup
from io import StringIO
from datetime import datetime, date
from PyQt5.QtWidgets import QApplication, QTableView
from PyQt5.QtCore import QAbstractTableModel, Qt
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
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

def append_value(dict_obj, key, value):
    if key in dict_obj:
        dict_obj[key] = value
    else:
        dict_obj[key] = value

IncomeStatement_GLs = []
ComprehensiveIncome_GLs = []
BalanceSheet_GLs = []
StockholdersEquity_GLs = []
CashFlow_GLs = []

entities = Entity.objects.all().order_by(
    '-Status',
    'AnomaliesRatio1',
    'AnomaliesRatio2',
    'AnomaliesRatio3',
    'AnomaliesRatio4',
    'AnomaliesRatio5',
    'AnomaliesRatio6',
    '-lastyear',
    'TradingSymbol',
)

marketdata = [
    'Prepared',
    'Phase 8',
    'Phase 7.8',
    'Phase 7.7',
    'Phase 7.6',
    'Phase 7.5',
    'Phase 7.4',
    'Phase 7.3',
    'Phase 7.2',
]

phases = [
    'Prepared',
    'Phase 8',
    'Phase 7.8',
    'Phase 7.7',
    'Phase 7.6',
    'Phase 7.5',
    'Phase 7.4',
    'Phase 7.3',
    'Phase 7.2',
]

API = {
    'access_key': 'ecae621d4718099f0d660a237c429450',
}

ll = 1
ll = len(entities)

# entities
for count in range(0, ll):
    #
    e = entities[count]
    #
    if ll == 1:
        e = Entity.objects.get(TradingSymbol='AAPL')
    #
    if e.Status in phases:
        #
        # entity
        print('\n' + 137 * '-' + '\n' + e.EntityRegistrantName + ' (' + e.TradingSymbol + ')' + ', ' + str(round(count/ll * 1000) / 10) + '%\n')
        print('\n' + e.Status + ', ' + str(e.NumberOfYearsAudited) + '\n' + 137 * '-' + '\n')
        #
        # period end dates and accession numbers
        try:
            periodenddates = [
                e.lastyear,
                e.secondlastyear,
                e.thirdlastyear,
                e.fourthlastyear,
                e.fifthlastyear,
                e.sixthlastyear,
            ]
            accs = [
                e.accessionnumberlastyear,
                e.accessionnumbersecondlastyear,
                e.accessionnumberthirdlastyear,
                e.accessionnumberfourthlastyear,
                e.accessionnumberfifthlastyear,
                e.accessionnumbersixthlastyear,
            ]
        except:
            pass
        #
        # outstanding shares
        try:
            #
            periodenddates.sort(reverse=True)
            #
            for periodenddate in periodenddates:
                #
                if periodenddate != None:
                    #
                    if e.Status in marketdata:
                        #
                        try:
                            #
                            a = AuditData.objects.get(TradingSymbol=e.TradingSymbol, PeriodEndDate=periodenddate)
                            #
                            if a.CommonSharesOutstanding == 0:
                                #
                                acc = a.AccessionNumber
                                #
                                OutstandingShares = []
                                #
                                c = 'https://www.sec.gov/Archives/edgar/data/'
                                try:
                                    c = c + e.EntityCentralIndexKey
                                    c = c + '/' + acc.replace('-','')
                                    c = c + '/' 'R1.htm'
                                    #
                                    a.URLoustandingshares = c
                                    #
                                    r = 0
                                    while r < 10:
                                        try:
                                            c = requests.get(c).content
                                            r = 10
                                        except:
                                            r = r + 1
                                            time.sleep(1)
                                    #
                                    r = 0
                                    while r < 10:
                                        try:
                                            c = BeautifulSoup(c, 'html')
                                            r = 10
                                        except:
                                            r = r + 1
                                            time.sleep(1)
                                    #
                                    r = 0
                                    while r < 10:
                                        try:
                                            q = c.find_all('tr')
                                            r = 10
                                        except:
                                            r = r + 1
                                            time.sleep(1)
                                except:
                                    pass
                                #
                                p = 0
                                while p < len(q) - 1:
                                    try:
                                        d = q[p].find_all('a')[0].text
                                        if 'OUTSTANDING' in d.upper():
                                            OutstandingShares.append(p)
                                    except:
                                        pass
                                    p = p + 1
                                    #
                                b = 0
                                for h in OutstandingShares:
                                    #
                                    b = b + int(q[h].find_all('td', class_='nump')[0].text.replace(',',''))
                                #
                                # dad
                                d = c.find_all('tr')[0].text
                                q = [
                                    b,
                                    d,
                                ]
                                #
                                dad = 0
                                for p in q:
                                    if 'SHARES IN MILLIONS' in d.upper():
                                        dad = 1000000
                                    elif 'SHARES IN THOUSANDS' in d.upper():
                                        dad = 1000
                                    else:
                                        dad = 1
                                #
                                c = b * dad
                                a.CommonSharesOutstanding = c
                                #
                                if a.PeriodEndDate == periodenddates[0]:
                                    e.CommonSharesOutstanding = c
                                #
                                a.save()
                                e.save()
                                #
                                print(e.EntityRegistrantName)
                                print('shares outstanding')
                                print(a.PeriodEndDate)
                                print(137*'-' + '\n')
                                print(str('{:,}'.format(a.CommonSharesOutstanding)))
                                print('\n' + 137*'-' + '\n')
                        except:
                            pass
        except:
            pass               
        #
        # filing dates
        try:
            #
            periodenddates.sort(reverse=True)
            #
            for periodenddate in periodenddates:
                #
                if periodenddate != None:
                    #
                    if e.Status in marketdata:
                        #
                        a = AuditData.objects.get(TradingSymbol=e.TradingSymbol, PeriodEndDate=periodenddate)
                        #
                        if a.StockPrice == 0:
                            #
                            acc = a.AccessionNumber
                            #
                            try:
                                c = 0
                                q = 0
                                p = ''
                                while q < 9:
                                    if p == '':
                                        try:
                                            d = periodenddate
                                            d = d - datetime.timedelta(days=q)
                                            b = 'https://api.marketstack.com/v1/tickers/' + e.TradingSymbol + '/eod/' + str(d)
                                            b = requests.get(b, API)
                                            c = b.json()['close']
                                            if c != 0:
                                                p = 'h'
                                        except:
                                            time.sleep(1)
                                    else:
                                        pass
                                    q = q + 1
                                if p == 'h':
                                    a.StockPrice = c
                            except:
                                pass
                            #
                            # market capitalization
                            try:
                                c = c * a.CommonSharesOutstanding
                                a.MarketCapitalization = c
                            except:
                                pass
                            #
                            a.save()
                            #
                            print(e.EntityRegistrantName)
                            print('stock price')
                            print(a.PeriodEndDate)
                            print(137*'-' + '\n')
                            print(str('{:,}'.format(a.StockPrice)))
                            print(str('{:,}'.format(a.MarketCapitalization)))
                            print(137*'-' + '\n')
        except:
            pass
        #
        # current stock price
        try:
            #
            d = requests.get('https://api.marketstack.com/v1/tickers/' + e.TradingSymbol + '/eod', API)
            p = d.json()['data']['name']
            q = d.json()['data']['symbol']
            b = d.json()['data']['eod'][0]['date']
            c = d.json()['data']['eod'][0]['close']
            #
            e.StockPrice = c
            e.save()
            #
            # market capitalization
            try:
                #
                u = e.CommonSharesOutstanding
                c = u * c
                e.MarketCapitalization = c
                a.save()
                #
                print(e.EntityRegistrantName)
                print('current stock price & market capitalization')
                print(137*'-' + '\n')
                print(str('{:,}'.format(e.StockPrice)))
                print(str('{:,}'.format(e.MarketCapitalization)))
                print(137*'-' + '\n')
                #
            except:
                pass
            #
            a.save()
        except:
            pass
        #
        # save
        try:
            e.save()
            print('\n' + 137 * '-' + '\n' + e.EntityRegistrantName + ' (' + e.TradingSymbol + ')' + ', ' + str(round(count/ll * 1000) / 10) + '%\n')
            print('\n' + e.Status + ', ' + str(e.NumberOfYearsAudited) + '\n' + 137 * '-' + '\n')
        except:
            pass




