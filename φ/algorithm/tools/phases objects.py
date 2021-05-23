
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
    
    

    
b = [
    'Phase1',
    'Phase2',
    'Phase3',
    'Phase4.1',
    'Phase4.2',
    'Phase4.3',
    'Phase5',
    'Phase6.1',
    'Phase6.2',
    'Phase6.3',
    'Phase7.1',
    'Phase7.2',
    'Phase7.3',
    'Phase7.4',
    'Phase7.5',
    'Phase7.6',
    'Phase7.7',
    'Phase7.8',
    'Phase8',
    'Prepared',
    'Audited',
]

for d in b:
    #
    p = Phase()
    #
    p.url = d
    #
    p.save()
    #
    print(p)
    print(p.url)
    

