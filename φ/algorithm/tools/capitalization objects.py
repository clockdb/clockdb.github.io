
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

ss = [
    1785500140019,
    1103499773449,
    682000366569,
    421499406880,
    260500959690,
    160998447190,
    99502512499,
    61495934691,
    38006577809,
    23489356882,
    14517220927,
    8972135955,
    5545084972,
    3427050983,
    2118033989,
    1309016994,
    809016994,
    500000000,
]

for s in ss:
    c = Capitalization()
    c.db = s
    c.save()
