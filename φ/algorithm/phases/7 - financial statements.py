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

# loop
entities = Entity.objects.all().order_by('-lastyear', 'TradingSymbol')

l = 1

l = len(entities)

# counter
for count in range(0, l):
    #
    # retreives entity from db
    try:
        #
        e = entities[count]
        #
        if e.Status == 'Phase 7':
            #
            # entity
            print(str(e) + '\n' + 137*'-')
            #
            # accession numbers
            accs = [
                e.lastyear,
                e.secondlastyear,
                e.thirdlastyear,
                e.fourthlastyear,
                e.fifthlastyear,
                e.sixthlastyear,
            ]
            # period loop
            for acc in accs:
                #
                print(str(acc) + '\n')
                #
                # list and dictionaries
                try:
                    #
                    # GLs
                    IncomeStatement_GLs = []
                    ComprehensiveIncome_GLs = []
                    BalanceSheet_GLs = []
                    StockholdersEquity_GLs = []
                    CashFlow_GLs = []

                    # financial statements
                    FinancialStatements = {
                        'IncomeStatement',
                        'ComprehensiveIncome',
                        'BalanceSheet',
                        'ShareholdersEquity',
                        'CashFlowStatement',
                    }
                    IncomeStatement = {}
                    ComprehensiveIncomeStatement = {}
                    BalanceSheet = {}
                    StockholdersEquityStatement = {}
                    CashFlowStatement = {}
                    #
                    # url dictionnaries
                    try:
                        urls1 = [
                            e.urlbalancesheetlastyear,
                            e.urlincomestatementlastyear,
                            e.urlcomprehensiveincomelastyear,
                            e.urlstockholdersequitylastyear,
                            e.urlcashflowlastyear,
                        ]
                        urls2 = [
                            e.urlbalancesheetsecondlastyear,
                            e.urlincomestatementsecondlastyear,
                            e.urlcomprehensiveincomesecondlastyear,
                            e.urlstockholdersequitysecondlastyear,
                            e.urlcashflowsecondlastyear,
                        ]
                        urls3 = [
                            e.urlbalancesheetthirdlastyear,
                            e.urlincomestatementthirdlastyear,
                            e.urlcomprehensiveincomethirdlastyear,
                            e.urlstockholdersequitythirdlastyear,
                            e.urlcashflowthirdlastyear,
                        ]
                        urls4 = [
                            e.urlbalancesheetfourthlastyear,
                            e.urlincomestatementfourthlastyear,
                            e.urlcomprehensiveincomefourthlastyear,
                            e.urlstockholdersequityfourthlastyear,
                            e.urlcashflowfourthlastyear,
                        ]
                        urls5 = [
                            e.urlbalancesheetfifthlastyear,
                            e.urlincomestatementfifthlastyear,
                            e.urlcomprehensiveincomefifthlastyear,
                            e.urlstockholdersequityfifthlastyear,
                            e.urlcashflowfifthlastyear,
                        ]
                        urls6 = [
                            e.urlbalancesheetsixthlastyear,
                            e.urlincomestatementsixthlastyear,
                            e.urlcomprehensiveincomesixthlastyear,
                            e.urlstockholdersequitysixthlastyear,
                            e.urlcashflowsixthlastyear,
                        ]
                    except:
                        pass
                except:
                    pass
                #
                # accession numbers to urls
                try:
                    if acc == accs[0]:
                        urls = urls1
                        print('last year \n')
                    if acc == accs[1]:
                        urls = urls2
                        print('second last year \n')
                    if acc == accs[2]:
                        urls = urls3
                        print('third last year \n')
                    if acc == accs[3]:
                        urls = urls4
                        print('fourth last year \n')
                    if acc == accs[4]:
                        urls = urls5
                        print('fifth last year \n')
                    if acc == accs[5]:
                        urls = urls6
                        print('sixth last year \n')
                except:
                    pass
                #
                # urls            
                for url in urls:
                    #
                    # financial set
                    try:
                        if url == urls[0]:
                            print('balance sheet \n')
                        if url == urls[1]:
                            print('income statement \n')
                        if url == urls[2]:
                            print('comprehensive income \n')
                        if url == urls[3]:
                            print('stockholders equity \n')
                        if url == urls[4]:
                            print('cash flow \n')
                    except:
                        pass
                    #
                    print(str(url) + '\n')
                    #
                    statement_data = {}
                    statement_data['headers'] = []
                    statement_data['sections'] = []
                    statement_data['data'] = []
                    #
                    r = 0
                    while r < 10:
                        try:
                            c = requests.get(url).content
                            r = 10
                        except:
                            r = r + 1
                    #
                    r = 0
                    while r < 10:
                        try:
                            c = BeautifulSoup(c, 'html')
                            r = 10
                        except:
                            r = r + 1
                    #
                    r = 0
                    while r < 10:
                        try:
                            m = c.table.find_all('tr')
                            r = 10
                        except:
                            r = r + 1
                    #
                    #
                    #
                    if m != None:
                        print('yes \n')
                    else:
                        print('no \n')
                    #
                    #
                    #
                    for index, row in enumerate(m):
                        #
                        try:
                            cols = row.find_all('td')
                            #
                            if (len(row.find_all('th')) == 0 and len(row.find_all('strong')) == 0):
                                #
                                t = [ele.text.strip() for ele in cols]
                                #
                                GL_SEC = t[0].lower().title()
                                #
                                GL = re.sub(r"[^a-zA-Z()]", "", GL_SEC)
                                #
                                # header
                                try:
                                    #
                                    #
                                    f = [
                                        ' SHARES IN MILLIONS',
                                        ' SHARES IN THOUSANDS',
                                        ', ',
                                        ',',
                                    ]
                                    # dad
                                    qd = statement_data['headers']
                                    qb = qd[0][0].upper()
                                    #
                                    if dad is None:
                                        #
                                        for g in f:
                                            qb = qb.replace(g, '')
                                        #
                                        if qb[-11:] == 'IN MILLIONS':
                                            #
                                            dad = 1000000
                                        #
                                        elif qb[-12:] == 'IN THOUSANDS':
                                            #
                                            dad = 1000
                                        #
                                        else:
                                            #
                                            dad = 1
                                except:
                                    pass
                                #
                                # value
                                try:
                                    #
                                    z = len(m[5].find_all('td'))
                                    #
                                    x = m[5].find_all('td')[1].text
                                    #
                                    if z > 10:
                                        g = (z - 3)
                                        g = t[g]
                                    #
                                    elif z > 3:
                                        if x == '' :
                                            g = t[2]
                                        else:
                                            g = t[1]
                                    else:
                                        g = t[1]
                                    #
                                    if g == '':
                                        g = 0
                                    #
                                    w = 1
                                    if '(' in g:
                                        w = -1
                                    #
                                    g = re.sub(r"[^.0123456789]", "", str(g))
                                    g = float(g)
                                    #
                                    value = int(g * w * dad)
                                    #
                                    # Arching
                                    try:
                                        #
                                        if url == urls[0]:
                                            while GL in BalanceSheet:
                                                GL = GL + str('i')
                                            append_value(BalanceSheet, GL, value)
                                            BalanceSheet_GLs.append(GL)
                                            print('Balance Sheet, ' + GL + ': ' + str('{:,}'.format(value)))
                                        #
                                        if url == urls[1]:
                                            while GL in IncomeStatement:
                                                GL = GL + str('i')
                                            append_value(IncomeStatement, GL, value)
                                            IncomeStatement_GLs.append(GL)
                                            print('Income Statement, ' + GL + ': ' + str('{:,}'.format(value)))
                                        #
                                        if url == urls[2]:
                                            while GL in ComprehensiveIncomeStatement:
                                                GL = GL + str('i')
                                            append_value(ComprehensiveIncomeStatement, GL, value)
                                            ComprehensiveIncome_GLs.append(GL)
                                            print('Comprehensive Income, ' + GL + ': ' + str('{:,}'.format(value)))
                                        #
                                        if url == urls[3]:
                                            while GL in StockholdersEquityStatement:
                                                GL = GL + str('i')
                                            append_value(StockholdersEquityStatement, GL, value)
                                            StockholdersEquity_GLs.append(GL)
                                            print('Stockholders Equity, ' + GL + ': ' + str('{:,}'.format(value)))
                                        #
                                        if url == urls[4]:
                                            while GL in CashFlowStatement:
                                                GL = GL + str('i')
                                            append_value(CashFlowStatement, GL, value)
                                            CashFlow_GLs.append(GL)
                                            print('Cashflow, ' + GL + ': ' + str('{:,}'.format(value)))
                                    except:
                                        pass
                                except:
                                    pass
                            #
                            elif (len(row.find_all('th')) == 0 and len(row.find_all('strong')) != 0):
                                #
                                sec_row = cols[0].text.strip()
                                #
                                statement_data['sections'].append(sec_row)
                            #
                            elif len(row.find_all('th')) != 0:
                                #
                                hed_row = [ele.text.strip() for ele in row.find_all('th')]
                                #
                                statement_data['headers'].append(hed_row)
                            #
                            else:
                                pass
                        #
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
            # save
            #e.save()
            #
    #
    except:
        pass



