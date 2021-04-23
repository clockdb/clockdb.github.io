#
# Libraries
from φ.models import *
from bs4 import BeautifulSoup
from io import StringIO
from datetime import datetime, date
from PyQt5.QtWidgets import QApplication, QTableView
from PyQt5.QtCore import QAbstractTableModel, Qt
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
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

# BeautifulSoup parser
def fetch(url):
    thepage = urllib.request.urlopen(url)
    soupdata = BeautifulSoup(thepage,"html.parser")
    return soupdata

# Append values if key already exists
def append_value(dict_obj, key, value):
    # Check if key exist in dict or not
    if key in dict_obj:
        dict_obj[key] = value
    else:
        dict_obj[key] = value

# GLs
IncomeStatement_GLs = []
ComprehensiveIncome_GLs = []
BalanceSheet_GLs = []
StockholdersEquity_GLs = []
CashFlow_GLs = []

entities = Entity.objects.all().order_by('-lastyear', 'TradingSymbol')

l = len(entities)

l = 1

# entities loop
for count in range(0, l):
    #
    print('\n' + 137*'-')
    #
    e = entities[count]
    e = Entity.objects.get(TradingSymbol='AAPL')
    #
    if e.Status == 'Phase 7.1':
        #
        # entity
        print(str(e) + '\n' + 137*'-' + '\n')
        #
        # period end dates and accession numbers - database
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
        # number of shares outstanding
        for periodenddate in periodenddates:
            #
            a = AuditDate(TradingSymbol=e.TradingSymbol, PeriodEndDate=periodenddated)
            #
            try:
                print(e.EntityRegistrantName)
                print('Number of shares outstanding')
                print(a.PeriodEndDate)
                print(137*'-' + '\n')
                #
                OutstandingShares = []
                #
                OutstandingSharesURL = 'https://www.sec.gov/Archives/edgar/data/' + e.EntityCentralIndexKey + '/' + a.AccessionNumber.replace('-','') + '/' 'R1.htm'
                #
                # html
                r = 0
                while r < 10:
                    try:
                        c = requests.get(OutstandingSharesURL).content
                        c = BeautifulSoup(c, 'html')
                        q = c.find_all('tr')
                        r = 10
                    except:
                        r = r + 1
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
                for p in q:
                    if 'SHARES IN MILLIONS' in d.upper():
                        dad = 1000000
                    elif 'SHARES IN THOUSANDS' in d.upper():
                        dad = 1000
                    else:
                        dad = 1
                #
                a.EntityCommonStockSharesOutstanding = b * dad
                #
                a.save()
                #
                print('number of shares outstanding: ' + str('{:,}'.format(a.EntityCommonStockSharesOutstanding)))
                print('\n' + 137*'-' + '\n')
            except:
                pass
        #
        # Time Of Update
        try:
            now = datetime.datetime.now()
            e.Update = now
        except:
            pass
        #
        # status
        e.Status == 'Phase 7.2'
        # 
        # save
        e.save()


