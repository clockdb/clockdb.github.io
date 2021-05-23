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


# variables
try:
    #
    #
    entities = Entity.objects.all().order_by(
        '-db',
        'AnomaliesRatio1',
        'AnomaliesRatio2',
        'AnomaliesRatio3',
        'AnomaliesRatio4',
        'AnomaliesRatio5',
        'AnomaliesRatio6',
        '-lastyear',
        'TradingSymbol',
    )
    #
    Capitalizations = Capitalization.objects.all().order_by('db')
    #
    Industries = Industry.objects.all().order_by('Description').exclude(Len=0)
    #
    PeriodEndDates = PeriodEndDate.objects.all().order_by('-db')
    #
    Phases = Phase.objects.all().order_by('-db')
    #
    Regions = Region.objects.all().order_by('Description').exclude(Len=0)
    #
    #
    Audited = Entity.objects.all().filter(db=21)
    #
    #
except:
    pass

# intrinsics
try:
    #
    print('\n Intrinsics')
    #
    for i in range(0, len(Intrinsics)):
        r = Intrinsics[i]
        r.Len = len(Entity.objects.all().filter(Intrinsic_db=r.db))
        r.save()
        #
        print(str('{:,}'.format(r.db)) + ': ' + str(r.Len) + ' entites')
except:
    pass

# capitalizations
try:
    #
    print('\n Capitalizations')
    #
    for i in range(0, len(Capitalizations)):
        r = Capitalizations[i]
        r.Len = len(Entity.objects.all().filter(Capitalization_db=r.db))
        r.save()
        #
        print(str('{:,}'.format(r.db)) + ': ' + str(r.Len) + ' entites')
except:
    pass

# industries
try:
    #
    print('\n Industries')
    #
    for i in range(0, len(Industries)):
        r = Industries[i]
        r.Len = len(Entity.objects.all().filter(Industry_db=r.db))
        r.save()
        #
        print(r.Description + ': ' + str(r.Len) + ' entites')
except:
    pass

# phases
try:
    #
    print('\n Phases')
    #
    for i in range(0, len(Phases)):
        r = Phases[i]
        r.Len = len(Entity.objects.all().filter(db=r.db))
        r.save()
        #
        print(str('{:,}'.format(r.db)) + ': ' + str(r.Len) + ' entites')
except:
    pass

# regions
try:
    #
    print('\n Regions')
    #
    for i in range(0, len(Regions)):
        r = Regions[i]
        r.Len = len(Entity.objects.all().filter(Region_db=r.db))
        r.save()
        #
        print(r.Description + ': ' + str(r.Len) + ' entites')
except:
    pass

# master
try:
    #
    m = Master.objects.all()[0]
    #
    m.entities = len(entities)
    m.audited = len(Audited)
    m.capitalizations = len(Capitalizations)
    m.industries = len(Industries)
    m.regions = len(Regions)
    #
    m.save()
    #
    print(str(m.entities) + ' entities')
    print(str(m.audited) + ' audited')
    print(str(m.capitalizations) + ' capitalizations')
    print(str(m.industries) + ' industries')
    print(str(m.regions) + ' regions')
except:
    pass


