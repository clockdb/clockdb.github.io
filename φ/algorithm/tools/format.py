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
    Capitalizations = Capitalization.objects.all()
    l_Capitalizations = len(Capitalizations)
except:
    pass

for i in range(0, l_Capitalizations):
    #
    r = Capitalizations[i]
    #
    c = r.db
    c = c/1000000000
    print(c)
    #
    d = len(str(round(c))) - 1
    #
    print(d)
    #
    k = float(c)
    #
    if d < 2:
        k = round(float(c), 1)
    else:
        k = int(round(k, 0))
    #
    r.Description = str('{:,}'.format(k)) + ' B $'
    #
    print(r.Description)
    #
    r.save()