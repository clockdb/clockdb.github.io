#
# Libraries
from workingPaper.models import *
from bs4 import BeautifulSoup
from io import StringIO
from datetime import datetime, date
from django.contrib.auth.models import User
from PyQt5.QtWidgets import QApplication, QTableView
from PyQt5.QtCore import QAbstractTableModel, Qt
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC, wait
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
    '-db',
    '-NumberOfYearsAudited',
    '-AnomaliesRatio1',
    '-AnomaliesRatio2',
    '-AnomaliesRatio3',
    '-AnomaliesRatio4',
    '-AnomaliesRatio5',
    '-AnomaliesRatio6',
    '-lastyear',
    'TradingSymbol',
)

base_url = '/home/django/clock/src/mine/json/'

for e in entities:
    #
    ts = e.TradingSymbol
    #
    url = base_url + ts
    #    
    with urllib.request.urlopen(url) as url:
        data = json.loads(url.read().decode())
        print(data)
    

