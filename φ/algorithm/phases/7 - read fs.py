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

l = len(entities)

l = 1

# counter
for count in range(0, l):
    #
    # retreives entity from db
    try:
        #
        e = entities[count]
        #
        e = Entity.objects.get(TradingSymbol='A')
        #
        if e.Status == 'Phase 7':
            #
            # entity
            print(str(e) + '\n' + 137*'-' + '\n')
            #
            # period end dates
            periodenddates = [
                e.lastyear,
                e.secondlastyear,
                e.thirdlastyear,
                e.fourthlastyear,
                e.fifthlastyear,
                e.sixthlastyear,
            ]
            # urls
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
            #
            # period loop
            for periodenddate in periodenddates:
                #
                print(str(periodenddate) + '\n')
                #
                # periodenddates to urls
                try:
                    if periodenddate == periodenddates[0]:
                        urls = urls1
                        print('last year \n')
                    if periodenddate == periodenddates[1]:
                        urls = urls2
                        print('second last year \n')
                    if periodenddate == periodenddates[2]:
                        urls = urls3
                        print('third last year \n')
                    if periodenddate == periodenddates[3]:
                        urls = urls4
                        print('fourth last year \n')
                    if periodenddate == periodenddates[4]:
                        urls = urls5
                        print('fifth last year \n')
                    if periodenddate == periodenddates[5]:
                        urls = urls6
                        print('sixth last year \n')
                    #
                    pprint.pprint(urls)
                    #
                    print('\n')
                except:
                    pass
                #
                # url loop
                for url in urls:
                    #
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
                    #
                    print(str(url) + '\n')
                    #
                    a = None
                    b = None
                    c = None
                    r = 0
                    while r < 10:
                        try:
                            a = requests.get(url).content
                            b = BeautifulSoup(a, 'html')
                            c = b.table.find_all('tr')
                            #
                            r = 10
                        except:
                            r = r + 1
                        time.sleep(11)
                    #
                    print(c)
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
    except:
        pass



