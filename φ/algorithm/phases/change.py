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

# loop
entities = Entity.objects.all().order_by('TradingSymbol')

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
        if e.Status == 'Phase 6.2':
            #
            # change to be made
            try:
                a = None
            except:
                pass
            #
            # phase
            try:
                e.Status = 'Phase 6.1'
            except:
                pass
            # 
            # save
            e.save()
            #
            print(137*'-' + '\n')
            print(e.EntityRegistrantName + ' (' + e.TradingSymbol + ')\n')
    #
    except:
        pass



