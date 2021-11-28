
# Libraries
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

driver = webdriver.Firefox(executable_path=r'C:\\Program Files\\geckodriver.exe')

base_url = 'https://www.instagram.com/'

account = 'thebig4accountant/'

url = base_url + account + 'following/'

driver.get(base_url)




buttons = driver.find_elements_by_tag_name("button")

i = 1 

for button in buttons:
    ih = button.get_attribute('innerHTML')
    if (ih == 'Follow'):
        button.click()
        time.sleep(i)
        i = i + 0.0017 * i


