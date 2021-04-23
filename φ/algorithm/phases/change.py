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

entities = Entity.objects.all().order_by(
    'AnomaliesRatio1',
    'AnomaliesRatio2',
    'AnomaliesRatio3',
    'AnomaliesRatio4',
    'AnomaliesRatio5',
    'AnomaliesRatio6',
    '-lastyear',
    'TradingSymbol',
)

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
    phases = [
        'Phase 7.3',
    ]
    #
    if e.Status in phases:
        #
        # entity
        print('\n' + 137 * '-' + '\n' + str(e) + ', ' + str(count/ll) + '\n' + 137 * '-' + '\n')
        #
        # anomalies ratio
        try:
            #
            driver = webdriver.Chrome('C:\\Program Files (x86)\\chromedriver.exe')
            #
            url = 'http://127.0.0.1:8000/' + e.TradingSymbol + '/'
            #
            driver.get(url)
            #
            try:
                link = WebDriverWait(driver, 13).until(
                    EC.presence_of_element_located((By.NAME, "Bridge"))
                )
                link.click()
            except:
                pass
            try:
                link = WebDriverWait(driver, 13).until(
                    EC.presence_of_element_located((By.NAME, "AuditSummary"))
                )
                link.click()
            except:
                pass
            #
            bb = [
                'AnomaliesRatio1',
                'AnomaliesRatio2',
                'AnomaliesRatio3',
                'AnomaliesRatio4',
                'AnomaliesRatio5',
                'AnomaliesRatio6',
            ]
            dd = [
                '%',
                ',',
            ]
            qq = [
                '∞',
                'NaN',
            ]
            #
            cc = []
            #
            for b in bb:
                c = driver.find_element_by_id(b).text
                for d in dd:
                    try:
                        c = c.replace(d,'')
                    except:
                        pass
                for q in qq:
                    try:
                        c = c.replace(q,'999999')
                    except:
                        pass
                c = int(c)
                c = c / 100
                cc.append(c)
            #
            pprint.pprint(cc)
            #
            ea = 0
            i = 0
            lt = 0
            #
            for c in cc:
                #
                # last year
                if i == 0:
                    f = 0
                    e.AnomaliesRatio1 = c
                    a = AuditData.objects.get(TradingSymbol=e.TradingSymbol, Period='lastyear')
                    a.Status = ''
                    if c < 1:
                        if a.Sales != 0:
                            if a.NetIncome != 0:
                                if a.Assets != 0:
                                    a.Status = 'Audited'
                                    lt = lt + 1
                        if a.AmendmentFlag == 'Amend':
                            if a.Sales == 0:
                                if a.NetIncome == 0:
                                    if a.Assets == 0:
                                        lt = lt + 1
                                        ea = ea + 1
                    a.save()
                #
                # second last year
                if i == 1:
                    f = 3
                    e.AnomaliesRatio2 = c
                    a = AuditData.objects.get(TradingSymbol=e.TradingSymbol, Period='secondlastyear')
                    a.Status = ''
                    if c < 1:
                        if a.Sales != 0:
                            if a.NetIncome != 0:
                                if a.Assets != 0:
                                    a.Status = 'Audited'
                                    lt = lt + 1
                        if a.AmendmentFlag == 'Amend':
                            if a.Sales == 0:
                                if a.NetIncome == 0:
                                    if a.Assets == 0:
                                        lt = lt + 1
                                        ea = ea + 1
                    a.save()
                #
                # third last year
                if i == 2:
                    f = 0
                    e.AnomaliesRatio3 = c
                    a = AuditData.objects.get(TradingSymbol=e.TradingSymbol, Period='thirdlastyear')
                    a.Status = ''
                    if c < 1:
                        if a.Sales != 0:
                            if a.NetIncome != 0:
                                if a.Assets != 0:
                                    a.Status = 'Audited'
                                    lt = lt + 1
                        if a.AmendmentFlag == 'Amend':
                            if a.Sales == 0:
                                if a.NetIncome == 0:
                                    if a.Assets == 0:
                                        lt = lt + 1
                                        ea = ea + 1
                    a.save()
                #
                # fourth last year
                if i == 3:
                    f = 0
                    e.AnomaliesRatio4 = c
                    a = AuditData.objects.get(TradingSymbol=e.TradingSymbol, Period='fourthlastyear')
                    a.Status = ''
                    if c < 1:
                        if a.Sales != 0:
                            if a.NetIncome != 0:
                                if a.Assets != 0:
                                    a.Status = 'Audited'
                                    lt = lt + 1
                        if a.AmendmentFlag == 'Amend':
                            if a.Sales == 0:
                                if a.NetIncome == 0:
                                    if a.Assets == 0:
                                        lt = lt + 1
                                        ea = ea + 1
                    a.save()
                #
                # fifth last year
                if i == 4:
                    f = 0
                    e.AnomaliesRatio5 = c
                    a = AuditData.objects.get(TradingSymbol=e.TradingSymbol, Period='fifthlastyear')
                    a.Status = ''
                    if c < 1:
                        if a.Sales != 0:
                            if a.NetIncome != 0:
                                if a.Assets != 0:
                                    a.Status = 'Audited'
                                    lt = lt + 1
                        if a.AmendmentFlag == 'Amend':
                            if a.Sales == 0:
                                if a.NetIncome == 0:
                                    if a.Assets == 0:
                                        lt = lt + 1
                                        ea = ea + 1
                    a.save()
                #
                # sixth last year
                if i == 5:
                    f = 0
                    e.AnomaliesRatio6 = c
                    a = AuditData.objects.get(TradingSymbol=e.TradingSymbol, Period='sixthlastyear')
                    a.Status = ''
                    if c < 1:
                        if a.Sales != 0:
                            if a.NetIncome != 0:
                                if a.Assets != 0:
                                    a.Status = 'Audited'
                                    lt = lt + 1
                        if a.AmendmentFlag == 'Amend':
                            if a.Sales == 0:
                                if a.NetIncome == 0:
                                    if a.Assets == 0:
                                        lt = lt + 1
                                        ea = ea + 1
                    a.save()
                #
                i = i + 1
            #
            driver.quit()
            #
        except:
            e.AnomaliesRatio1 = 9999
            e.AnomaliesRatio2 = 9999
            e.AnomaliesRatio3 = 9999
            e.AnomaliesRatio4 = 9999
            e.AnomaliesRatio5 = 9999
            e.AnomaliesRatio6 = 9999
        #
        # driver quit
        try:
            driver.quit()
        except:
            pass
        #
        # status
        try:
            goto = 'Phase 7.2'
            if goto in phases:
                goto = 'Phase 7.1'
            e.Status = goto
            #
            if lt == 1:
                e.Status = 'Phase 7.3'
            if lt == 2:
                e.Status = 'Phase 7.4'
            if lt == 3:
                e.Status = 'Phase 7.5'
            if lt == 4:
                e.Status = 'Phase 7.6'
            if lt == 5:
                e.Status = 'Phase 7.7'
            if lt == 6:
                e.Status = 'Phase 7.8'
            #
            e.NumberOfYearsAudited = lt - ea
            #
            if e.NumberOfYearsAudited == 0:
                e.Status = goto
        except:
            pass
        #
        # update
        try:
            now = datetime.datetime.now()
            e.Update = now
        except:
            pass
        #
        # save
        try:
            e.save()
            print(137 * '-' + '\n')
            print(e.EntityRegistrantName + ' (' + e.TradingSymbol + ')' + ', ' + e.Status + ', ' + str(e.NumberOfYearsAudited) + '\n')
        except:
            pass


