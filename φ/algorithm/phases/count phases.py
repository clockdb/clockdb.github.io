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
#
# database
#
db = Database.objects.all()[0]

#
# entities
#
entities = Entity.objects.all().order_by('TradingSymbol')

#
# counter
try:
    #
    # variables
    try:
        Inactives = 0
        db.phase1 = 0
        db.phase2 = 0
        db.phase3 = 0
        db.phase4 = 0
        db.phase41 = 0
        db.phase42 = 0
        db.phase43 = 0
        db.phase5 = 0
        db.phase6 = 0
        db.phase61 = 0
        db.phase62 = 0
        db.phase63 = 0
        db.phase7 = 0
        db.phase71 = 0
        db.phase72 = 0
        db.phase73 = 0
        db.phase74 = 0
        db.phase75 = 0
        db.phase76 = 0
        db.phase77 = 0
        db.phase78 = 0
        db.phase8 = 0
        db.prepared = 0
        db.audited = 0
        db.total = 0
        db.completed = 0
        db.progress = 0
    except:
        pass
    #
    l = 1
    l = len(entities)
    #
    # counter
    for count in range(0, l):
        #
        e = entities[count]
        #
        if e.Status == 'Audited':   
            db.audited = db.audited + 1
        #
        if e.Status == 'Prepared':
            db.prepared = db.prepared + 1
        #
        if e.Status == 'Phase 8':
            db.phase8 = db.phase8 + 1
        #
        if e.Status == 'Phase 7.8':
            db.phase78 = db.phase78 + 1
        #
        if e.Status == 'Phase 7.7':
            db.phase77 = db.phase77 + 1
        #
        if e.Status == 'Phase 7.6':
            db.phase76 = db.phase76 + 1
        #
        if e.Status == 'Phase 7.5':
            db.phase75 = db.phase75 + 1
        #
        if e.Status == 'Phase 7.4':
            db.phase74 = db.phase74 + 1
        #
        if e.Status == 'Phase 7.3':
            db.phase73 = db.phase73 + 1
        #
        if e.Status == 'Phase 7.2':
            db.phase72 = db.phase72 + 1
        #
        if e.Status == 'Phase 7.1':
            db.phase71 = db.phase71 + 1
        #
        phase7 = [
            db.phase78,
            db.phase77,
            db.phase76,
            db.phase75,
            db.phase74,
            db.phase73,
            db.phase72,
            db.phase71,
        ]
        db.phase7 = sum(phase7)
        #
        if e.Status == 'Phase 6.3':
            db.phase63 = db.phase63 + 1
        #
        if e.Status == 'Phase 6.2':
            db.phase62 = db.phase62 + 1
        #
        if e.Status == 'Phase 6.1':
            db.phase61 = db.phase61 + 1
        #
        phase6 = [
            db.phase63,
            db.phase62,
            db.phase61,
        ]
        db.phase6 = sum(phase6)
        #
        if e.Status == 'Phase 5':
            db.phase5 = db.phase5 + 1
        #
        if e.Status == 'Phase 4.3':
            db.phase43 = db.phase43 + 1
        #
        if e.Status == 'Phase 4.2':
            db.phase42 = db.phase42 + 1
        #
        if e.Status == 'Phase 4.1':
            db.phase41 = db.phase41 + 1
        #
        phase4 = [
            db.phase43,
            db.phase42,
            db.phase41,
        ]
        db.phase4 = sum(phase4)
        #
        if e.Status == 'Phase 3':
            db.phase3 = db.phase3 + 1
        #
        if e.Status == 'Phase 2':
            db.phase2 = db.phase2 + 1
        #
        if e.Status == 'Phase 1':
            db.phase1 = db.phase1 + 1
        #
        if e.Status == 'Inactive':
            Inactives = Inactives + 1
    #
    # total
    total = [
        db.phase1,
        db.phase2,
        db.phase3,
        db.phase4,
        db.phase5,
        db.phase6,
        db.phase7,
        db.phase8,
        db.prepared,
        db.audited,
    ]
    db.total = sum(total)
    #
    # progress
    try:
        c = [
            db.audited,
            db.prepared,
            db.phase8,
            db.phase78,
            db.phase77 * 5/6,
            db.phase76 * 4/6,
            db.phase75 * 3/6,
            db.phase74 * 2/6,
            db.phase73 * 1/6,
        ]
        db.completed = round(sum(c))
        db.progress = round(db.completed / db.total * 1000) / 10
        db.onboarded = db.phase7 - (db.phase71 + db.phase72)
    except:
        pass
except:
    pass

db.save()

# print dataframe
try:
    #
    # dataframe master
    try:
        df = pd.DataFrame({
        #
        '.': 
            #
            [
            'Audited ',
            'Prepared ',
            'Phase 8 ',
            'Phase 7.8 ',
            'Phase 7.7 ',
            'Phase 7.6 ',
            'Phase 7.5 ',
            'Phase 7.4 ',
            'Phase 7.3 ',
            'Phase 7.2 ',
            'Phase 7.1 ',
            'Phase 6 ',
            'Phase 5 ',
            'Phase 4 ',
            'Phase 3 ',
            'Phase 2 ',
            'Phase 1 ',
            '.',
            ],
        #
        '..':
            #
            [
            '{:,}'.format(db.audited),
            '{:,}'.format(db.prepared),
            '{:,}'.format(db.phase8),
            '{:,}'.format(db.phase78),
            '{:,}'.format(db.phase77),
            '{:,}'.format(db.phase76),
            '{:,}'.format(db.phase75),
            '{:,}'.format(db.phase74),
            '{:,}'.format(db.phase73),
            '{:,}'.format(db.phase72),
            '{:,}'.format(db.phase71),
            '{:,}'.format(db.phase6),
            '{:,}'.format(db.phase5),
            '{:,}'.format(db.phase4),
            '{:,}'.format(db.phase3),
            '{:,}'.format(db.phase2),
            '{:,}'.format(db.phase1),
            '{:,}'.format(db.total),
            ]
        #
        })
    except:
        pass
    #
    # dataframe phase 6 
    try:
        df6 = pd.DataFrame({
        #
        '.': 
            #
            [
            'Phase 6.3 ',
            'Phase 6.2 ',
            'Phase 6.1 ',
            ],
        #
        '..':
            #
            [
            '{:,}'.format(db.phase63),
            '{:,}'.format(db.phase62),
            '{:,}'.format(db.phase61),
            ]
        #
        })
    except:
        pass
    #
    # dataframe phase 4
    try:
        df4 = pd.DataFrame({
        #
        '.': 
            #
            [
            'Phase 4.3 ',
            'Phase 4.2 ',
            'Phase 4.1 ',
            ],
        #
        '..':
            #
            [
            '{:,}'.format(db.phase43),
            '{:,}'.format(db.phase42),
            '{:,}'.format(db.phase41),
            ]
        #
        })
    except:
        pass
    #
    # dataframe inactives
    try:
        dfi = pd.DataFrame({
        #
        '.': 
            #
            [
            'Inactives ',
            ],
        #
        '..':
            #
            [
            '{:,}'.format(Inactives),
            ]
        #
        })
    except:
        pass
    #
    # dataframe progress
    try:
        dfp = pd.DataFrame({
        #
        '.': 
            #
            [
            'progress ',
            'entities eq ',
            'onboarded ',
            ],
        #
        '..':
            #
            [
            '{:.1%}'.format(db.progress/100),
            '{:,}'.format(db.completed),
            '{:,}'.format(db.onboarded),
            ]
        #
        })
    except:
        pass
    #
    # print
    try:
        print(137 * '-' + 2 * '\n')
        print(dfp)
        print(df)
    except:
        pass
    #
except:
    pass


