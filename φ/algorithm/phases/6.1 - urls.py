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

def append_value(dict_obj, key, value):
    # Check if key exist in dict or not
    if key in dict_obj:
        dict_obj[key] = value
    else:
        dict_obj[key] = value

# loop
entities = Entity.objects.all().order_by('TradingSymbol')

l = 1

l = len(entities)

# counter
for count in range(0, l):
    #
    e = entities[count]
    #
    if e.Status == 'Phase 6.1':
        #
        print(137*'-' + '\n' + str(e))
        #
        # accession numbers
        try:
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
        # for every accession number
        for acc in accs:
            #
            if acc != '':
                #
                print(acc)
                #
                # find all reports and urls
                try:
                    a = r"https://www.sec.gov"
                    c = a + "/Archives/edgar/data/"
                    c = c + e.EntityCentralIndexKey + '/'
                    c = c + acc.replace('-','') + '/'
                    c = c + 'index.json'
                    #
                    r = 0
                    while r < 10:
                        try:
                            c = requests.get(c).json()
                            r = 10
                        except:
                            r = r + 1
                    r = 0
                    while r < 10:
                        try:                    
                            for file in c['directory']['item']:
                                if file['name'] == 'FilingSummary.xml':
                                    c = a + c['directory']['name'] + '/' + file['name']
                                    a = c.replace('FilingSummary.xml', '')
                            r = 10
                        except:
                            r = r + 1
                    r = 0
                    while r < 10:
                        try:
                            c = requests.get(c).content
                            r = 10
                        except:
                            r = r + 1
                    r = 0
                    while r < 10:
                        try:
                            c = BeautifulSoup(c, 'lxml')
                            r = 10
                        except:
                            r = r + 1
                    r = 0
                    while r < 10:
                        try:
                            aa = c.find('myreports')
                            r = 10
                        except:
                            r = r + 1
                    r = 0
                    rr = None
                    while r < 10:
                        try:
                            rr = aa.find_all('report')[:-1]
                            r = 10
                        except:
                            r = r + 1
                except:
                    pass
                #
                # sort urls
                if rr != None:
                    for r in rr:
                        #
                        # url
                        t = a + r.htmlfilename.text
                        #
                        # report
                        d = r.shortname.text.upper()
                        d = re.sub(r"[^A-Z' ]", "", d)
                        #
                        # vocabulary
                        try:
                            #
                            # concepts
                            q = [
                                'CONDENSED',
                                'CONSOLIDATED',
                                'STATEMENT',
                            ]
                            # avoid
                            b = [
                                'DETAIL',
                                'NONCONSOLIDATED',
                                'NOTE',
                                'PARENTHETICAL',
                                'POLICIES',
                                'REDEEMABLE',
                                'REVISION',
                                'SCHEDULE',
                                'SEGMENT',
                                'TABLE',
                                'UNAUDITED',
                                'UNCONSOLIDATED',
                            ]
                            # stockholders equity
                            aa = [
                                'EQUITY',
                                'STOCKHOLDER',
                                "PARTNER'S CAPITAL",
                            ]
                            # balance sheet
                            bb = [
                                'SHEET',
                                'POSITION',
                                'CONDITION',
                            ]
                            # comprehensive income
                            cc = [
                                'COMPREHENSIVE',
                            ]
                            # income statement
                            dd = [
                                'INCOME',
                                'OPERATION',
                                'EARNINGS',
                            ]
                            # cash flow
                            ee = [
                                'CASH',
                            ]
                        except:
                            pass
                        #
                        # read
                        s = 'a'
                        for p in q:
                            if s == 'a':
                                if p in d:
                                    i = 0
                                    l = 'e'
                                    s = 'a'
                                    for h in b:
                                        if s == 'a':
                                            while i < len(b):
                                                if b[i] in d:
                                                    l = 'u'
                                                i = i + 1
                                            if l == 'e':
                                                # stockholders equity
                                                for aaa in aa:
                                                    if aaa in d:
                                                        if s == 'a':
                                                            if acc == accs[0]:
                                                                e.urlstockholdersequitylastyear = t
                                                            if acc == accs[1]:
                                                                e.urlstockholdersequitysecondlastyear = t
                                                            if acc == accs[2]:
                                                                e.urlstockholdersequitythirdlastyear = t
                                                            if acc == accs[3]:
                                                                e.urlstockholdersequityfourthlastyear = t
                                                            if acc == accs[4]:
                                                                e.urlstockholdersequityfifthlastyear = t
                                                            if acc == accs[5]:
                                                                e.urlstockholdersequitysixthlastyear = t
                                                # balance sheet
                                                for bbb in bb:
                                                    if bbb in d:
                                                        if s == 'a':
                                                            if acc == accs[0]:
                                                                e.urlbalancesheetlastyear = t
                                                            if acc == accs[1]:
                                                                e.urlbalancesheetsecondlastyear = t
                                                            if acc == accs[2]:
                                                                e.urlbalancesheetthirdlastyear = t
                                                            if acc == accs[3]:
                                                                e.urlbalancesheetfourthlastyear = t
                                                            if acc == accs[4]:
                                                                e.urlbalancesheetfifthlastyear = t
                                                            if acc == accs[5]:
                                                                e.urlbalancesheetsixthlastyear = t
                                                # comprehensive income
                                                for ccc in cc:
                                                    if ccc in d:
                                                        if s == 'a':
                                                            if acc == accs[0]:
                                                                e.urlcomprehensiveincomelastyear = t
                                                            if acc == accs[1]:
                                                                e.urlcomprehensiveincomesecondlastyear = t
                                                            if acc == accs[2]:
                                                                e.urlcomprehensiveincomethirdlastyear = t
                                                            if acc == accs[3]:
                                                                e.urlcomprehensiveincomefourthlastyear = t
                                                            if acc == accs[4]:
                                                                e.urlcomprehensiveincomefifthlastyear = t
                                                            if acc == accs[5]:
                                                                e.urlcomprehensiveincomesixthlastyear = t
                                                # income statement
                                                for ddd in dd:
                                                    if ddd in d:
                                                        if s == 'a':
                                                            if acc == accs[0]:
                                                                e.urlincomestatementlastyear = t
                                                            if acc == accs[1]:
                                                                e.urlincomestatementsecondlastyear = t
                                                            if acc == accs[2]:
                                                                e.urlincomestatementthirdlastyear = t
                                                            if acc == accs[3]:
                                                                e.urlincomestatementfourthlastyear = t
                                                            if acc == accs[4]:
                                                                e.urlincomestatementfifthlastyear = t
                                                            if acc == accs[5]:
                                                                e.urlincomestatementsixthlastyear = t
                                                # cash flow
                                                for eee in ee:
                                                    if eee in d:
                                                        if s == 'a':
                                                            if acc == accs[0]:
                                                                e.urlcashflowlastyear = t
                                                            if acc == accs[1]:
                                                                e.urlcashflowsecondlastyear = t
                                                            if acc == accs[2]:
                                                                e.urlcashflowthirdlastyear = t
                                                            if acc == accs[3]:
                                                                e.urlcashflowfourthlastyear = t
                                                            if acc == accs[4]:
                                                                e.urlcashflowfifthlastyear = t
                                                            if acc == accs[5]:
                                                                e.urlcashflowsixthlastyear = t
                                                s = 'z'
        #
        # Time Of Update
        try:
            now = datetime.datetime.now()
            e.Update = now
        except:
            pass
        #
        # status
        e.Status = 'Phase 6.2'
        #
        # save
        e.save()



