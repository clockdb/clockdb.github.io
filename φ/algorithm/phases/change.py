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
    '-TradingSymbol',
)

ll = 1
ll = len(entities)

phases = [
    'Phase 7.0',
]

# entities
for count in range(0, ll):
    #
    e = entities[count]
    #
    if ll == 1:
        e = Entity.objects.get(TradingSymbol='MIK')
    #
    if e.Status in phases:
        #
        e.Status = 'Phase 7.1'
        #
        print('\n' + 137 * '-' + '\n' + e.EntityRegistrantName + ' (' + e.TradingSymbol + ')' + ', ' + str(round(count/ll * 1000) / 10) + '%\n')
        print('\n' + e.Status + ', ' + str(e.NumberOfYearsAudited) + '\n' +  137 * '-' + '\n')
        #
        e.save()

