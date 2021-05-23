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
    l = 1
    l = len(entities)
    #
    # counter
    for count in range(0, l):
        #
        e = entities[count]
        #
        if e.Status == 1:
            p = Phase1.Len = Phase1.Len + 1
    #
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
            'Phase8 ',
            'Phase7.8 ',
            'Phase7.7 ',
            'Phase7.6 ',
            'Phase7.5 ',
            'Phase7.4 ',
            'Phase7.3 ',
            'Phase7.2 ',
            'Phase7.1 ',
            'Phase6 ',
            'Phase5 ',
            'Phase4 ',
            'Phase3 ',
            'Phase2 ',
            'Phase1 ',
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
    # dataframe Phase6 
    try:
        df6 = pd.DataFrame({
        #
        '.': 
            #
            [
            'Phase6.3 ',
            'Phase6.2 ',
            'Phase6.1 ',
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
    # dataframe Phase4
    try:
        df4 = pd.DataFrame({
        #
        '.': 
            #
            [
            'Phase4.3 ',
            'Phase4.2 ',
            'Phase4.1 ',
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


