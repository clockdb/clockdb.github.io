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

import io

# regions 
Regions = {
    'ALABAMA': 'AL',
    'ALASKA': 'AK',
    'ARIZONA': 'AZ',
    'ARKANSAS': 'AR',
    'CALIFORNIA': 'CA',
    'COLORADO': 'CO',
    'CONNECTICUT': 'CT',
    'DELAWARE': 'DE',
    'DISTRICT OF COLUMBIA': 'DC',
    'FLORIDA': 'FL',
    'GEORGIA': 'GA',
    'HAWAII': 'HI',
    'IDAHO': 'ID',
    'ILLINOIS': 'IL',
    'INDIANA': 'IN',
    'IOWA': 'IA',
    'KANSAS': 'KS',
    'KENTUCKY': 'KY',
    'LOUISIANA': 'LA',
    'MAINE': 'ME',
    'MARYLAND': 'MD',
    'MASSACHUSETTS': 'MA',
    'MICHIGAN': 'MI',
    'MINNESOTA': 'MN',
    'MISSISSIPPI': 'MS',
    'MISSOURI': 'MO',
    'MONTANA': 'MT',
    'NEBRASKA': 'NE',
    'NEVADA': 'NV',
    'NEW HAMPSHIRE': 'NH',
    'NEW JERSEY': 'NJ',
    'NEW MEXICO': 'NM',
    'NEW YORK': 'NY',
    'NORTH CAROLINA': 'NC',
    'NORTH DAKOTA': 'ND',
    'OHIO': 'OH',
    'OKLAHOMA': 'OK',
    'OREGON': 'OR',
    'PENNSYLVANIA': 'PA',
    'RHODE ISLAND': 'RI',
    'SOUTH CAROLINA': 'SC',
    'SOUTH DAKOTA': 'SD',
    'TENNESSEE': 'TN',
    'TEXAS': 'TX',
    'UNITED STATES': 'X1',
    'UTAH': 'UT',
    'VERMONT': 'VT',
    'VIRGINIA': 'VA',
    'WASHINGTON': 'WA',
    'WEST VIRGINIA': 'WV',
    'WISCONSIN': 'WI',
    'WYOMING': 'WY',
    'ALBERTA, CANADA': 'A0',
    'BRITISH COLUMBIA, CANADA': 'A1',
    'MANITOBA, CANADA': 'A2',
    'NEW BRUNSWICK, CANADA': 'A3',
    'NEWFOUNDLAND, CANADA': 'A4',
    'NOVA SCOTIA, CANADA': 'A5',
    'ONTARIO, CANADA': 'A6',
    'PRINCE EDWARD ISLAND, CANADA': 'A7',
    'QUEBEC, CANADA': 'A8',
    'SASKATCHEWAN, CANADA': 'A9',
    'YUKON, CANADA': 'B0',
    'CANADA (Federal Level)': 'Z4',
    'AFGHANISTAN': 'B2',
    'ALAND ISLANDS': 'Y6',
    'ALBANIA': 'B3',
    'ALGERIA': 'B4',
    'AMERICAN SAMOA': 'B5',
    'ANDORRA': 'B6',
    'ANGOLA': 'B7',
    'ANGUILLA': '1A',
    'ANTARCTICA': 'B8',
    'ANTIGUA AND BARBUDA': 'B9',
    'ARGENTINA': 'C1',
    'ARMENIA': '1B',
    'ARUBA': '1C',
    'AUSTRALIA': 'C3',
    'AUSTRIA': 'C4',
    'AZERBAIJAN': '1D',
    'BAHAMAS': 'C5',
    'BAHRAIN': 'C6',
    'BANGLADESH': 'C7',
    'BARBADOS': 'C8',
    'BELARUS': '1F',
    'BELGIUM': 'C9',
    'BELIZE': 'D1',
    'BENIN': 'G6',
    'BERMUDA': 'D0',
    'BHUTAN': 'D2',
    'BOLIVIA': 'D3',
    'BOSNIA AND HERZEGOVINA': '1E',
    'BOTSWANA': 'B1',
    'BOUVET ISLAND': 'D4',
    'BRAZIL': 'D5',
    'BRITISH INDIAN OCEAN TERRITORY': 'D6',
    'BRUNEI DARUSSALAM': 'D9',
    'BULGARIA': 'E0',
    'BURKINA FASO': 'X2',
    'BURUNDI': 'E2',
    'CAMBODIA': 'E3',
    'CAMEROON': 'E4',
    'CAPE VERDE': 'E8',
    'CAYMAN ISLANDS': 'E9',
    'CENTRAL AFRICAN REPUBLIC': 'F0',
    'CHAD': 'F2',
    'CHILE': 'F3',
    'CHINA': 'F4',
    'CHRISTMAS ISLAND': 'F6',
    'COCOS (KEELING) ISLANDS': 'F7',
    'COLOMBIA': 'F8',
    'COMOROS': 'F9',
    'CONGO': 'G0',
    'CONGO, THE DEMOCRATIC REPUBLIC OF THE': 'Y3',
    'COOK ISLANDS': 'G1',
    'COSTA RICA': 'G2',
    'COTE DIVOIRE': 'L7',
    'CROATIA': '1M',
    'CUBA': 'G3',
    'CYPRUS': 'G4',
    'CZECH REPUBLIC': '2N',
    'DENMARK': 'G7',
    'DJIBOUTI': '1G',
    'DOMINICA': 'G9',
    'DOMINICAN REPUBLIC': 'G8',
    'ECUADOR': 'H1',
    'EGYPT': 'H2',
    'EL SALVADOR': 'H3',
    'EQUATORIAL GUINEA': 'H4',
    'ERITREA': '1J',
    'ESTONIA': '1H',
    'ETHIOPIA': 'H5',
    'FALKLAND ISLANDS (MALVINAS)': 'H7',
    'FAROE ISLANDS': 'H6',
    'FIJI': 'H8',
    'FINLAND': 'H9',
    'FRANCE': 'I0',
    'FRENCH GUIANA': 'I3',
    'FRENCH POLYNESIA': 'I4',
    'FRENCH SOUTHERN TERRITORIES': '2C',
    'GABON': 'I5',
    'GAMBIA': 'I6',
    'GEORGIA': '2Q',
    'GERMANY': '2M',
    'GHANA': 'J0',
    'GIBRALTAR': 'J1',
    'GREECE': 'J3',
    'GREENLAND': 'J4',
    'GRENADA': 'J5',
    'GUADELOUPE': 'J6',
    'GUAM': 'GU',
    'GUATEMALA': 'J8',
    'GUERNSEY': 'Y7',
    'GUINEA': 'J9',
    'GUINEA-BISSAU': 'S0',
    'GUYANA': 'K0',
    'HAITI': 'K1',
    'HEARD ISLAND AND MCDONALD ISLANDS': 'K4',
    'HOLY SEE (VATICAN CITY STATE)': 'X4',
    'HONDURAS': 'K2',
    'HONG KONG': 'K3',
    'HUNGARY': 'K5',
    'ICELAND': 'K6',
    'INDIA': 'K7',
    'INDONESIA': 'K8',
    'IRAN, ISLAMIC REPUBLIC OF': 'K9',
    'IRAQ': 'L0',
    'IRELAND': 'L2',
    'ISLE OF MAN': 'Y8',
    'ISRAEL': 'L3',
    'ITALY': 'L6',
    'JAMAICA': 'L8',
    'JAPAN': 'M0',
    'JERSEY': 'Y9',
    'JORDAN': 'M2',
    'KAZAKSTAN': '1P',
    'KENYA': 'M3',
    'KIRIBATI': 'J2',
    'KOREA, DEMOCRATIC PEOPLES REPUBLIC OF': 'M4',
    'KOREA, REPUBLIC OF': 'M5',
    'KUWAIT': 'M6',
    'KYRGYZSTAN': '1N',
    'LAO PEOPLES DEMOCRATIC REPUBLIC': 'M7',
    'LATVIA': '1R',
    'LEBANON': 'M8',
    'LESOTHO': 'M9',
    'LIBERIA': 'N0',
    'LIBYAN ARAB JAMAHIRIYA': 'N1',
    'LIECHTENSTEIN': 'N2',
    'LITHUANIA': '1Q',
    'LUXEMBOURG': 'N4',
    'MACAU': 'N5',
    'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF': '1U',
    'MADAGASCAR': 'N6',
    'MALAWI': 'N7',
    'MALAYSIA': 'N8',
    'MALDIVES': 'N9',
    'MALI': 'O0',
    'MALTA': 'O1',
    'MARSHALL ISLANDS': '1T',
    'MARTINIQUE': 'O2',
    'MAURITANIA': 'O3',
    'MAURITIUS': 'O4',
    'MAYOTTE': '2P',
    'MEXICO': 'O5',
    'MICRONESIA, FEDERATED STATES OF': '1K',
    'MOLDOVA, REPUBLIC OF': '1S',
    'MONACO': 'O9',
    'MONGOLIA': 'P0',
    'MONTENEGRO': 'Z5',
    'MONTSERRAT': 'P1',
    'MOROCCO': 'P2',
    'MOZAMBIQUE': 'P3',
    'MYANMAR': 'E1',
    'NAMIBIA': 'T6',
    'NAURU': 'P5',
    'NEPAL': 'P6',
    'NETHERLANDS': 'P7',
    'NETHERLANDS ANTILLES': 'P8',
    'NEW CALEDONIA': '1W',
    'NEW ZEALAND': 'Q2',
    'NICARAGUA': 'Q3',
    'NIGER': 'Q4',
    'NIGERIA': 'Q5',
    'NIUE': 'Q6',
    'NORFOLK ISLAND': 'Q7',
    'NORTHERN MARIANA ISLANDS': '1V',
    'NORWAY': 'Q8',
    'OMAN': 'P4',
    'PAKISTAN': 'R0',
    'PALAU': '1Y',
    'PALESTINIAN TERRITORY, OCCUPIED': '1X',
    'PANAMA': 'R1',
    'PAPUA NEW GUINEA': 'R2',
    'PARAGUAY': 'R4',
    'PERU': 'R5',
    'PHILIPPINES': 'R6',
    'PITCAIRN': 'R8',
    'POLAND': 'R9',
    'PORTUGAL': 'S1',
    'PUERTO RICO': 'PR',
    'QATAR': 'S3',
    'REUNION': 'S4',
    'ROMANIA': 'S5',
    'RUSSIAN FEDERATION': '1Z',
    'RWANDA': 'S6',
    'SAINT BARTHELEMY': 'Z0',
    'SAINT HELENA': 'U8',
    'SAINT KITTS AND NEVIS': 'U7',
    'SAINT LUCIA': 'U9',
    'SAINT MARTIN': 'Z1',
    'SAINT PIERRE AND MIQUELON': 'V0',
    'SAINT VINCENT AND THE GRENADINES': 'V1',
    'SAMOA': 'Y0',
    'SAN MARINO': 'S8',
    'SAO TOME AND PRINCIPE': 'S9',
    'SAUDI ARABIA': 'T0',
    'SENEGAL': 'T1',
    'SERBIA': 'Z2',
    'SEYCHELLES': 'T2',
    'SIERRA LEONE': 'T8',
    'SINGAPORE': 'U0',
    'SLOVAKIA': '2B',
    'SLOVENIA': '2A',
    'SOLOMON ISLANDS': 'D7',
    'SOMALIA': 'U1',
    'SOUTH AFRICA': 'T3',
    'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS': '1L',
    'SPAIN': 'U3',
    'SRI LANKA': 'F1',
    'SUDAN': 'V2',
    'SURINAME': 'V3',
    'SVALBARD AND JAN MAYEN': 'L9',
    'SWAZILAND': 'V6',
    'SWEDEN': 'V7',
    'SWITZERLAND': 'V8',
    'SYRIAN ARAB REPUBLIC': 'V9',
    'TAIWAN, PROVINCE OF CHINA': 'F5',
    'TAJIKISTAN': '2D',
    'TANZANIA, UNITED REPUBLIC OF': 'W0',
    'THAILAND': 'W1',
    'TIMOR-LESTE': 'Z3',
    'TOGO': 'W2',
    'TOKELAU': 'W3',
    'TONGA': 'W4',
    'TRINIDAD AND TOBAGO': 'W5',
    'TUNISIA': 'W6',
    'TURKEY': 'W8',
    'TURKMENISTAN': '2E',
    'TURKS AND CAICOS ISLANDS': 'W7',
    'TUVALU': '2G',
    'UGANDA': 'W9',
    'UKRAINE': '2H',
    'UNITED ARAB EMIRATES': 'C0',
    'UNITED KINGDOM': 'X0',
    'UNITED STATES MINOR OUTLYING ISLANDS': '2J',
    'URUGUAY': 'X3',
    'UZBEKISTAN': '2K',
    'VANUATU': '2L',
    'VENEZUELA': 'X5',
    'VIET NAM': 'Q1',
    'VIRGIN ISLANDS, BRITISH': 'D8',
    'VIRGIN ISLANDS, U.S.': 'VI',
    'WALLIS AND FUTUNA': 'X8',
    'WESTERN SAHARA': 'U5',
    'YEMEN': 'T7',
    'ZAMBIA': 'Y4',
    'ZIMBABWE': 'Y5',
    'UNKNOWN': 'XX',
}

Regionsb = []

entities = Entity.objects.all().order_by('Region')

for count in range(0, len(entities)):
    #
    e = entities[count]
    #
    c = e.Region
    #
    if c not in Regionsb:
        Regionsb.append(c)
    #

Regionsb.sort()

for i in Regionsb:
    #
    with io.open('A:/clock/φ/templates/φ/regional/r' + Regions[i] + '.html', "w", encoding="utf-8") as f:
        #
        c = '{% extends "φ/layout.html" %}\n'
        f.write(c)
        c = '{% block body %}\n'
        f.write(c)
        c = '<!--- SCRIPT --->\n'
        f.write(c)
        c = '<script>\n'
        f.write(c)
        c = '// DOCUMENT TITLE\n'
        f.write(c)
        c = "document.title = 'clockdb.com | " + i.lower() + "'" + '\n'
        f.write(c)
        c = "</script>" + '\n'
        f.write(c)
        c = '<!--- HOME --->' + '\n'
        f.write(c)
        c = '<Section id="φ" style="padding-bottom:27%">' + '\n'
        f.write(c)
        c = '    <table style="width:90%">' + '\n'
        f.write(c)
        c = '        <tbody>' + '\n'
        f.write(c)
        c = '                <tr>' + '\n'
        f.write(c)
        c = '                    <td colspan="2" style="border-bottom: ridge;">' + '\n'
        f.write(c)
        c = '                        <h3 style="text-align:center; font-weight:bold;">entity</h2>' + '\n'
        f.write(c)
        c = '                    </td>' + '\n'
        f.write(c)
        c = '                    <td style="border-bottom: ridge;" >' + '\n'
        f.write(c)
        c = '                        <h3 style="text-align:center; font-weight:bold;">value</h2>' + '\n'
        f.write(c)
        c = '                    </td>' + '\n'
        f.write(c)
        c = '                </tr>' + '\n'
        f.write(c)
        c = '                <tr></tr>' + '\n'
        f.write(c)
        c = '                <tr></tr>' + '\n'
        f.write(c)
        c = '            {% for entity in entities %}' + '\n'
        f.write(c)
        c = '                    <tr>' + '\n'
        f.write(c)
        c = '                        <td colspan="2" style="padding-top: 24px;">' + '\n'
        f.write(c)
        c = '                            <a href="/{{ entity.TradingSymbol }}">' + '\n'
        f.write(c)
        c = '                                <button style="padding-top: 24px; padding-bottom:0%">' + '\n'
        f.write(c)
        c = '                                    <h3 style="text-align:left; padding-bottom: 0%; padding-left:0px"><b>{{ entity.EntityRegistrantName }} ({{ entity.TradingSymbol }})</b></h3>' + '\n'
        f.write(c)
        c = '                                </button>' + '\n'
        f.write(c)
        c = '                            </a>' + '\n'
        f.write(c)
        c = '                        </td>' + '\n'
        f.write(c)
        c = '                        <td style="vertical-align:bottom;" style="padding-top: 24px;">' + '\n'
        f.write(c)
        c = '                            <a href="/{{ entity.TradingSymbol }}">' + '\n'
        f.write(c)
        c = '                                <button style="vertical-align:bottom; padding-bottom: 1%; padding-top: 24px;">' + '\n'
        f.write(c)
        c = '                                    <h3 style="text-align:center;"><b>{{ entity.Clockφ }}%</b></h3>' + '\n'
        f.write(c)
        c = '                                </button>' + '\n'
        f.write(c)
        c = '                            </a>' + '\n'
        f.write(c)
        c = '                        </td>' + '\n'
        f.write(c)
        c = '                    </tr>' + '\n'
        f.write(c)
        c = '                    <tr>' + '\n'
        f.write(c)
        c = '                        <td colspan="3">' + '\n'
        f.write(c)
        c = '                            <a href="/{{ entity.TradingSymbol }}">' + '\n'
        f.write(c)
        c = '                                <button style="padding-bottom: 0%; padding-top: 0px;">' + '\n'
        f.write(c)
        c = '                                    <h5 style="color:#8A9096; padding-bottom: 17px; padding-left:0px;">{{ entity.lastyear }}</h5>' + '\n'
        f.write(c)
        c = '                                </button>' + '\n'
        f.write(c)
        c = '                            </a>' + '\n'
        f.write(c)
        c = '                        </td>' + '\n'
        f.write(c)
        c = '                    </tr>' + '\n'
        f.write(c)
        c = '            {% endfor %}' + '\n'
        f.write(c)
        c = '        </tbody>' + '\n'
        f.write(c)
        c = '    </table>' + '\n'
        f.write(c)
        c = '</Section>' + '\n'
        f.write(c)
        c = '{% endblock %}' + '\n'
        f.write(c)




