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
# entities
#
entitiesobjects = Entity.objects.all().order_by('EntityRegistrantName')
#
# counter
try:
    #
    a = 0
    b = 0
    c = 0
    d = 0
    ee = 0
    f = 0
    g = 0
    h = 0
    i = 0
    j = 0
    k = 0
    l = 0
    m = 0
    n = 0
    o = 0
    #
    for count in range(0, len(entitiesobjects)):
        #
        e = entitiesobjects[count]
        #
        if e.Status == 'Phase 1':
            a = a + 1
        #
        if e.Status == 'Phase 2':
            b = b + 1
        #
        if e.Status == 'Phase 3':
            c = c + 1
        #
        if e.Status == 'Phase 4.1':
            d = d + 1
        #
        if e.Status == 'Phase 4.2':
            ee = ee + 1
        #
        if e.Status == 'Phase 4.3':
            f = f + 1
        #
        if e.Status == 'Phase 5':
            g = g + 1
        #
        if e.Status == 'Phase 6.1':
            h = h + 1
        #
        if e.Status == 'Phase 6.2':
            i = i + 1
        #
        if e.Status == 'Phase 6.3':
            j = j + 1
        #
        if e.Status == 'Phase 6.4':
            k = k + 1
        #
        if e.Status == 'Phase 7':
            l = l + 1
        #
        if e.Status == 'Phase 8':
            m = m + 1
        #
        if e.Status == 'Prepared':
            n = n + 1
        #
        if e.Status == 'Audited':
            o = o + 1
except:
    pass

#
# db     
try:
    db = Database.objects.all()[0]
    #
    db.audited = o
    #
    o = o + n
    db.prepared = o
    #
    o = o + m
    db.phase8 = o
    #
    o = o + l
    db.phase7 = o
    #
    o = o + h + i + j + k 
    db.phase6 = o
    #
    db.phase61 = h
    db.phase62 = i + h
    db.phase63 = j + i + h
    db.phase64 = k + j + i 
    #
    o = o + g
    db.phase5 = o
    #
    o = o + d + ee + f
    db.phase4 = o
    #
    db.phase41 = d
    db.phase42 = ee + d
    db.phase43 = f + ee + d
    #
    o = o + c
    db.phase3 = o
    #
    o = o + b
    db.phase2 = o
    #
    db.phase1 = o
    #
    db.save()
except:
    pass

#
# print
try:
    df = pd.DataFrame({
    #
    '..': 
        #
        [
        'Phase 1 ',
        'Phase 2 ',
        'Phase 3 ',
        'Phase 4 ',
        'Phase 5 ',
        'Phase 6 ',
        'Phase 7 ',
        'Phase 8 ',
        'Prepared ',
        'Audited ',
        ],
    #
    '.':
        #
        [
        '{:,}'.format(db.phase1),
        '{:,}'.format(db.phase2),
        '{:,}'.format(db.phase3),
        '{:,}'.format(db.phase4),
        '{:,}'.format(db.phase5),
        '{:,}'.format(db.phase6),
        '{:,}'.format(db.phase7),
        '{:,}'.format(db.phase8),
        '{:,}'.format(db.prepared),
        '{:,}'.format(db.audited),
        ]
    #
    })
    print(df)
except:
    pass


