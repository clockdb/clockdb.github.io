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

# Accession Number Replacements
rep1 = 'Transition reports [Rule 13a-10 or 15d-10]Acc-no: '
rep2 = 'Annual report [Section 13 and 15(d), not S-K Item 405]Acc-no: '
rep3 = 'Quarterly report [Sections 13 or 15(d)]Acc-no: '
rep4 = '[Cover]'

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
entitiesobjects = Entity.objects.all().order_by('-TradingSymbol')

g = 0

for count in range(0, len(entitiesobjects)):
    #
    # retreives entity from db
    try:
        #
        #
        e = entitiesobjects[count]
        #
        #
        if e.Status == 'Phase 4.2':
            #
            accs = [
                e.accessionnumberlastyear,
                e.accessionnumbersecondlastyear,
                e.accessionnumberthirdlastyear,
                e.accessionnumberfourthlastyear,
                e.accessionnumberfifthlastyear,
                e.accessionnumbersixthlastyear,
                e.accessionnumberseventhlastyear,
            ]
            for acc in accs:
                #
                b = r"https://www.sec.gov"
                c = b + '/Archives/edgar/data/'
                c = c + e.EntityCentralIndexKey + '/' + acc.replace('-','') + '/' + 'index.json'
                c = requests.get(c).json()
                #
                for file in c['directory']['item']:
                    if file['name'] == 'FilingSummary.xml':
                        c = b + c['directory']['name'] + '/' + file['name']
                #
                print(c)
            #
            #e.Status = 'Phase 5'
            #
            # Time Of Update
            try:
                now = datetime.datetime.now()
                date_text = now.strftime("%B %d, %Y")
                dateandtime = now.strftime("%B %d, %Y: %H:%M:%S")
                e.Update = date_text
                e.UpdateDateAndTime = dateandtime
            except:
                pass
            #
            #e.save()
    except:
        pass

print('Number of Entity Reaching Phase 5: ' + str(g) + '\n')


