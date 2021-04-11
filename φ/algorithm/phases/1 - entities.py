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

entities = Entity.objects.all().order_by('EntityRegistrantName')

for count in range(0, len(entitiesobjects)):
    #
    e = entities[count]
    #
    ts = e.TradingSymbol
    #
    # retreives or creates entity 
    try:
        e = Entity()
        e.TradingSymbol = TradingSymbol
        e.EntityCentralIndexKey = EntityCentralIndexKeys[TradingSymbol]
        #
        # phase 2 test
        b = 'Phase 1'
        if e.EntityCentralIndexKey != '':
            if e.TradingSymbol != '':
                e.Status = 'Phase 2'
            else:
                e.Status = b
        else:
            e.Status = b
        #
        # Time Of Update
        try:
            now = datetime.datetime.now()
            e.Update = now
        except:
            pass
        #
        e.save()
        #
        #
        print(137*'-' + '\n' + e.TradingSymbol + ' \n')
    except:
        pass
