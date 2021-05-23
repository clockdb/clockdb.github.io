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

entities = Entity.objects.all()

l = len(entities)

for count in range(0, l):
    #
    e = entities[count]
    #
    c = e.MarketCapitalization

i = 0
for R in Regions:
    r = Region()
    r.Description = R
    r.Code = Regions[R]
    r.db = int(i)
    i = i + 1
    r.save()
    #
    print(r.Description)
    print(r.Code)
    print(r.db)

