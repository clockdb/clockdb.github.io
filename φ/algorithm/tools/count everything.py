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
    entities = Entity.objects.all()
    Industries = Industry.objects.all()
    Phases = Phase.objects.all()
    Regions = Region.objects.all()
    l_entities = len(entities)
    l_Industries = len(Industries)
    l_Phases = len(Phases)
    l_Regions = len(Regions)
except:
    pass

for count_db in range(0, l_Industries):
    #
    r = Industries[count_db]
    #
    r.Len = 0
    #
    # count
    for count in range(0, l_entities):
        #
        e = entities[count]
        #
        if e.Industry_db == r.db:
            r.Len = r.Len + 1
            #
            print(r.Description)
            print(e)
            print(e.Industry_db)
    #
    r.save()


