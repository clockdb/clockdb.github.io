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
import urllib
import xml.etree.ElementTree as ET

# TradingSymbol to EntityCentralIndexKeys
EntityCentralIndexKeys = {
    'VLO': '1035002',
#    'IBM': '51143',
}
 
#
# scope
scopedperiods = [
    'lastyear',
    'secondlastyear',
    'thirdlastyear',
    'fourthlastyear',
    'fifthlastyear',
    'sixthlastyear',
    'seventhlastyear',
]

UpdateFinancialStatements = 'yes'
BeginningBalances = 'yes'
Regularize = 'yes'
#
GetStockPrice = 'yes'
UpdateRanking = 'yes'

# Marketstack API
params = {
    'access_key': 'ecae621d4718099f0d660a237c429450',
}

# GLs
IncomeStatement_GLs = []
ComprehensiveIncome_GLs = []
BalanceSheet_GLs = []
StockholdersEquity_GLs = []
CashFlow_GLs = []

# arch financial statements
ARCH_FinancialStatements = {
    'ARCH_IncomeStatement',
    'ARCH_ComprehensiveIncome',
    'ARCH_BalanceSheet',
    'ARCH_ShareholdersEquity',
    'ARCH_CashFlowStatement',
}
ARCH_IncomeStatement = {}
ARCH_ComprehensiveIncome = {}
ARCH_BalanceSheet = {}
ARCH_StockholdersEquityStatement = {}
ARCH_CashFlowStatement = {}

# Regular Expressions
RegularExpressions = [
    'AndAdditionalPaidInCapitalParValueSharesAuthorizedAndSharesIssuedAndOutstandingRespectively',
    'NoParValueAuthorizedSharesIssuedSharesAnd',
    'ParValuePerShareAndAdditionalPaidInCapitalSharesAuthorizedSharesIssued',
    'ParValuePerShareAndAdditionalPaidInCapitalSharesAuthorized(SharesIssued)',
    'ParValueSharesAuthorizedSharesIssuedAndOutstanding(IssuedAndOutstandingIn)AndCapitalInExcessOfParValue',
]

# industries 
Industries = {
    '100': 'AGRICULTURAL PRODUCTION-CROPS',
    '200': 'AGRICULTURAL PROD-LIVESTOCK & ANIMAL SPECIALTIES',
    '700': 'AGRICULTURAL SERVICES',
    '800': 'FORESTRY',
    '900': 'FISHING, HUNTING AND TRAPPING',
    '1000': 'METAL MINING',
    '1040': 'GOLD AND SILVER ORES',
    '1090': 'MISCELLANEOUS METAL ORES',
    '1220': 'BITUMINOUS COAL & LIGNITE MINING',
    '1221': 'BITUMINOUS COAL & LIGNITE SURFACE MINING',
    '1311': 'CRUDE PETROLEUM & NATURAL GAS',
    '1381': 'DRILLING OIL & GAS WELLS',
    '1382': 'OIL & GAS FIELD EXPLORATION SERVICES',
    '1389': 'OIL & GAS FIELD SERVICES, NEC',
    '1400': 'MINING & QUARRYING OF NONMETALLIC MINERALS (NO FUELS)',
    '1520': 'GENERAL BLDG CONTRACTORS - RESIDENTIAL BLDGS',
    '1531': 'OPERATIVE BUILDERS',
    '1540': 'GENERAL BLDG CONTRACTORS - NONRESIDENTIAL BLDGS',
    '1600': 'HEAVY CONSTRUCTION OTHER THAN BLDG CONST - CONTRACTORS',
    '1623': 'WATER, SEWER, PIPELINE, COMM & POWER LINE CONSTRUCTION',
    '1700': 'CONSTRUCTION - SPECIAL TRADE CONTRACTORS',
    '1731': 'ELECTRICAL WORK',
    '2000': 'FOOD AND KINDRED PRODUCTS',
    '2011': 'MEAT PACKING PLANTS',
    '2013': 'SAUSAGES & OTHER PREPARED MEAT PRODUCTS',
    '2015': 'POULTRY SLAUGHTERING AND PROCESSING',
    '2020': 'DAIRY PRODUCTS',
    '2024': 'ICE CREAM & FROZEN DESSERTS',
    '2030': 'CANNED, FROZEN & PRESERVD FRUIT, VEG & FOOD SPECIALTIES',
    '2033': 'CANNED, FRUITS, VEG, PRESERVES, JAMS & JELLIES',
    '2040': 'GRAIN MILL PRODUCTS',
    '2050': 'BAKERY PRODUCTS',
    '2052': 'COOKIES & CRACKERS',
    '2060': 'SUGAR & CONFECTIONERY PRODUCTS',
    '2070': 'FATS & OILS',
    '2080': 'BEVERAGES',
    '2082': 'MALT BEVERAGES',
    '2086': 'BOTTLED & CANNED SOFT DRINKS & CARBONATED WATERS',
    '2090': 'MISCELLANEOUS FOOD PREPARATIONS & KINDRED PRODUCTS',
    '2092': 'PREPARED FRESH OR FROZEN FISH & SEAFOODS',
    '2100': 'TOBACCO PRODUCTS',
    '2111': 'CIGARETTES',
    '2200': 'TEXTILE MILL PRODUCTS',
    '2211': 'BROADWOVEN FABRIC MILLS, COTTON',
    '2221': 'BROADWOVEN FABRIC MILLS, MAN MADE FIBER & SILK',
    '2250': 'KNITTING MILLS',
    '2253': 'KNIT OUTERWEAR MILLS',
    '2273': 'CARPETS & RUGS',
    '2300': 'APPAREL & OTHER FINISHD PRODS OF FABRICS & SIMILAR MATL',
    '2320': 'MENS & BOYS FURNISHGS, WORK CLOTHG, & ALLIED GARMENTS',
    '2330': 'WOMENS, MISSES, AND JUNIORS OUTERWEAR',
    '2340': 'WOMENS, MISSES, CHILDRENS & INFANTS UNDERGARMENTS',
    '2390': 'MISCELLANEOUS FABRICATED TEXTILE PRODUCTS',
    '2400': 'LUMBER & WOOD PRODUCTS (NO FURNITURE)',
    '2421': 'SAWMILLS & PLANTING MILLS, GENERAL',
    '2430': 'MILLWOOD, VENEER, PLYWOOD, & STRUCTURAL WOOD MEMBERS',
    '2451': 'MOBILE HOMES',
    '2452': 'PREFABRICATED WOOD BLDGS & COMPONENTS',
    '2510': 'HOUSEHOLD FURNITURE',
    '2511': 'WOOD HOUSEHOLD FURNITURE, (NO UPHOLSTERED)',
    '2520': 'OFFICE FURNITURE',
    '2522': 'OFFICE FURNITURE (NO WOOD)',
    '2531': 'PUBLIC BLDG & RELATED FURNITURE',
    '2540': 'PARTITIONS, SHELVG, LOCKERS, & OFFICE & STORE FIXTURES',
    '2590': 'MISCELLANEOUS FURNITURE & FIXTURES',
    '2600': 'PAPERS & ALLIED PRODUCTS',
    '2611': 'PULP MILLS',
    '2621': 'PAPER MILLS',
    '2631': 'PAPERBOARD MILLS',
    '2650': 'PAPERBOARD CONTAINERS & BOXES',
    '2670': 'CONVERTED PAPER & PAPERBOARD PRODS (NO CONTANERS/BOXES)',
    '2673': 'PLASTICS, FOIL & COATED PAPER BAGS',
    '2711': 'NEWSPAPERS: PUBLISHING OR PUBLISHING & PRINTING',
    '2721': 'PERIODICALS: PUBLISHING OR PUBLISHING & PRINTING',
    '2731': 'BOOKS: PUBLISHING OR PUBLISHING & PRINTING',
    '2732': 'BOOK PRINTING',
    '2741': 'MISCELLANEOUS PUBLISHING',
    '2750': 'COMMERCIAL PRINTING',
    '2761': 'MANIFOLD BUSINESS FORMS',
    '2771': 'GREETING CARDS',
    '2780': 'BLANKBOOKS, LOOSELEAF BINDERS & BOOKBINDG & RELATD WORK',
    '2790': 'SERVICE INDUSTRIES FOR THE PRINTING TRADE',
    '2800': 'CHEMICALS & ALLIED PRODUCTS',
    '2810': 'INDUSTRIAL INORGANIC CHEMICALS',
    '2820': 'PLASTIC MATERIAL, SYNTH RESIN/RUBBER, CELLULOS (NO GLASS)',
    '2821': 'PLASTIC MATERIALS, SYNTH RESINS & NONVULCAN ELASTOMERS',
    '2833': 'MEDICINAL CHEMICALS & BOTANICAL PRODUCTS',
    '2834': 'PHARMACEUTICAL PREPARATIONS',
    '2835': 'IN VITRO & IN VIVO DIAGNOSTIC SUBSTANCES',
    '2836': 'BIOLOGICAL PRODUCTS, (NO DISGNOSTIC SUBSTANCES)',
    '2840': 'SOAP, DETERGENTS, CLEANG PREPARATIONS, PERFUMES, COSMETICS',
    '2842': 'SPECIALTY CLEANING, POLISHING AND SANITATION PREPARATIONS',
    '2844': 'PERFUMES, COSMETICS & OTHER TOILET PREPARATIONS',
    '2851': 'PAINTS, VARNISHES, LACQUERS, ENAMELS & ALLIED PRODS',
    '2860': 'INDUSTRIAL ORGANIC CHEMICALS',
    '2870': 'AGRICULTURAL CHEMICALS',
    '2890': 'MISCELLANEOUS CHEMICAL PRODUCTS',
    '2891': 'ADHESIVES & SEALANTS',
    '2911': 'PETROLEUM REFINING',
    '2950': 'ASPHALT PAVING & ROOFING MATERIALS',
    '2990': 'MISCELLANEOUS PRODUCTS OF PETROLEUM & COAL',
    '3011': 'TIRES & INNER TUBES',
    '3021': 'RUBBER & PLASTICS FOOTWEAR',
    '3050': 'GASKETS, PACKG & SEALG DEVICES & RUBBER & PLASTICS HOSE',
    '3060': 'FABRICATED RUBBER PRODUCTS, NEC',
    '3080': 'MISCELLANEOUS PLASTICS PRODUCTS',
    '3081': 'UNSUPPORTED PLASTICS FILM & SHEET',
    '3086': 'PLASTICS FOAM PRODUCTS',
    '3089': 'PLASTICS PRODUCTS, NEC',
    '3100': 'LEATHER & LEATHER PRODUCTS',
    '3140': 'FOOTWEAR, (NO RUBBER)',
    '3211': 'FLAT GLASS',
    '3220': 'GLASS & GLASSWARE, PRESSED OR BLOWN',
    '3221': 'GLASS CONTAINERS',
    '3231': 'GLASS PRODUCTS, MADE OF PURCHASED GLASS',
    '3241': 'CEMENT, HYDRAULIC',
    '3250': 'STRUCTURAL CLAY PRODUCTS',
    '3260': 'POTTERY & RELATED PRODUCTS',
    '3270': 'CONCRETE, GYPSUM & PLASTER PRODUCTS',
    '3272': 'CONCRETE PRODUCTS, EXCEPT BLOCK & BRICK',
    '3281': 'CUT STONE & STONE PRODUCTS',
    '3290': 'ABRASIVE, ASBESTOS & MISC NONMETALLIC MINERAL PRODS',
    '3310': 'STEEL WORKS, BLAST FURNACES & ROLLING & FINISHING MILLS',
    '3312': 'STEEL WORKS, BLAST FURNACES & ROLLING MILLS (COKE OVENS)',
    '3317': 'STEEL PIPE & TUBES',
    '3320': 'IRON & STEEL FOUNDRIES',
    '3330': 'PRIMARY SMELTING & REFINING OF NONFERROUS METALS',
    '3334': 'PRIMARY PRODUCTION OF ALUMINUM',
    '3341': 'SECONDARY SMELTING & REFINING OF NONFERROUS METALS',
    '3350': 'ROLLING DRAWING & EXTRUDING OF NONFERROUS METALS',
    '3357': 'DRAWING & INSULATING OF NONFERROUS WIRE',
    '3360': 'NONFERROUS FOUNDRIES (CASTINGS)',
    '3390': 'MISCELLANEOUS PRIMARY METAL PRODUCTS',
    '3411': 'METAL CANS',
    '3412': 'METAL SHIPPING BARRELS, DRUMS, KEGS & PAILS',
    '3420': 'CUTLERY, HANDTOOLS & GENERAL HARDWARE',
    '3430': 'HEATING EQUIP, EXCEPT ELEC & WARM AIR; & PLUMBING FIXTURES',
    '3433': 'HEATING EQUIPMENT, EXCEPT ELECTRIC & WARM AIR FURNACES',
    '3440': 'FABRICATED STRUCTURAL METAL PRODUCTS',
    '3442': 'METAL DOORS, SASH, FRAMES, MOLDINGS & TRIM',
    '3443': 'FABRICATED PLATE WORK (BOILER SHOPS)',
    '3444': 'SHEET METAL WORK',
    '3448': 'PREFABRICATED METAL BUILDINGS & COMPONENTS',
    '3451': 'SCREW MACHINE PRODUCTS',
    '3452': 'BOLTS, NUTS, SCREWS, RIVETS & WASHERS',
    '3460': 'METAL FORGINGS & STAMPINGS',
    '3470': 'COATING, ENGRAVING & ALLIED SERVICES',
    '3480': 'ORDNANCE & ACCESSORIES, (NO VEHICLES/GUIDED MISSILES)',
    '3490': 'MISCELLANEOUS FABRICATED METAL PRODUCTS',
    '3510': 'ENGINES & TURBINES',
    '3523': 'FARM MACHINERY & EQUIPMENT',
    '3524': 'LAWN & GARDEN TRACTORS & HOME LAWN & GARDENS EQUIP',
    '3530': 'CONSTRUCTION, MINING & MATERIALS HANDLING MACHINERY & EQUIP',
    '3531': 'CONSTRUCTION MACHINERY & EQUIP',
    '3532': 'MINING MACHINERY & EQUIP (NO OIL & GAS FIELD MACH & EQUIP)',
    '3533': 'OIL & GAS FIELD MACHINERY & EQUIPMENT',
    '3537': 'INDUSTRIAL TRUCKS, TRACTORS, TRAILORS & STACKERS',
    '3540': 'METALWORKG MACHINERY & EQUIPMENT',
    '3541': 'MACHINE TOOLS, METAL CUTTING TYPES',
    '3550': 'SPECIAL INDUSTRY MACHINERY (NO METALWORKING MACHINERY)',
    '3555': 'PRINTING TRADES MACHINERY & EQUIPMENT',
    '3559': 'SPECIAL INDUSTRY MACHINERY, NEC',
    '3560': 'GENERAL INDUSTRIAL MACHINERY & EQUIPMENT',
    '3561': 'PUMPS & PUMPING EQUIPMENT',
    '3562': 'BALL & ROLLER BEARINGS',
    '3564': 'INDUSTRIAL & COMMERCIAL FANS & BLOWERS & AIR PURIFING EQUIP',
    '3567': 'INDUSTRIAL PROCESS FURNACES & OVENS',
    '3569': 'GENERAL INDUSTRIAL MACHINERY & EQUIPMENT, NEC',
    '3570': 'COMPUTER & OFFICE EQUIPMENT',
    '3571': 'ELECTRONIC COMPUTERS',
    '3572': 'COMPUTER STORAGE DEVICES',
    '3575': 'COMPUTER TERMINALS',
    '3576': 'COMPUTER COMMUNICATIONS EQUIPMENT',
    '3577': 'COMPUTER PERIPHERAL EQUIPMENT, NEC',
    '3578': 'CALCULATING & ACCOUNTING MACHINES (NO ELECTRONIC COMPUTERS)',
    '3579': 'OFFICE MACHINES, NEC',
    '3580': 'REFRIGERATION & SERVICE INDUSTRY MACHINERY',
    '3585': 'AIR-COND & WARM AIR HEATG EQUIP & COMM & INDL REFRIG EQUIP',
    '3590': 'MISC INDUSTRIAL & COMMERCIAL MACHINERY & EQUIPMENT',
    '3600': 'ELECTRONIC & OTHER ELECTRICAL EQUIPMENT (NO COMPUTER EQUIP)',
    '3612': 'POWER, DISTRIBUTION & SPECIALTY TRANSFORMERS',
    '3613': 'SWITCHGEAR & SWITCHBOARD APPARATUS',
    '3620': 'ELECTRICAL INDUSTRIAL APPARATUS',
    '3621': 'MOTORS & GENERATORS',
    '3630': 'HOUSEHOLD APPLIANCES',
    '3634': 'ELECTRIC HOUSEWARES & FANS',
    '3640': 'ELECTRIC LIGHTING & WIRING EQUIPMENT',
    '3651': 'HOUSEHOLD AUDIO & VIDEO EQUIPMENT',
    '3652': 'PHONOGRAPH RECORDS & PRERECORDED AUDIO TAPES & DISKS',
    '3661': 'TELEPHONE & TELEGRAPH APPARATUS',
    '3663': 'RADIO & TV BROADCASTING & COMMUNICATIONS EQUIPMENT',
    '3669': 'COMMUNICATIONS EQUIPMENT, NEC',
    '3670': 'ELECTRONIC COMPONENTS & ACCESSORIES',
    '3672': 'PRINTED CIRCUIT BOARDS',
    '3674': 'SEMICONDUCTORS & RELATED DEVICES',
    '3677': 'ELECTRONIC COILS, TRANSFORMERS & OTHER INDUCTORS',
    '3678': 'ELECTRONIC CONNECTORS',
    '3679': 'ELECTRONIC COMPONENTS, NEC',
    '3690': 'MISCELLANEOUS ELECTRICAL MACHINERY, EQUIPMENT & SUPPLIES',
    '3695': 'MAGNETIC & OPTICAL RECORDING MEDIA',
    '3711': 'MOTOR VEHICLES & PASSENGER CAR BODIES',
    '3713': 'TRUCK & BUS BODIES',
    '3714': 'MOTOR VEHICLE PARTS & ACCESSORIES',
    '3715': 'TRUCK TRAILERS',
    '3716': 'MOTOR HOMES',
    '3720': 'AIRCRAFT & PARTS',
    '3721': 'AIRCRAFT',
    '3724': 'AIRCRAFT ENGINES & ENGINE PARTS',
    '3728': 'AIRCRAFT PARTS & AUXILIARY EQUIPMENT, NEC',
    '3730': 'SHIP & BOAT BUILDING & REPAIRING',
    '3743': 'RAILROAD EQUIPMENT',
    '3751': 'MOTORCYCLES, BICYCLES & PARTS',
    '3760': 'GUIDED MISSILES & SPACE VEHICLES & PARTS',
    '3790': 'MISCELLANEOUS TRANSPORTATION EQUIPMENT',
    '3812': 'SEARCH, DETECTION, NAVAGATION, GUIDANCE, AERONAUTICAL SYS',
    '3821': 'LABORATORY APPARATUS & FURNITURE',
    '3822': 'AUTO CONTROLS FOR REGULATING RESIDENTIAL & COMML ENVIRONMENTS',
    '3823': 'INDUSTRIAL INSTRUMENTS FOR MEASUREMENT, DISPLAY, AND CONTROL',
    '3824': 'TOTALIZING FLUID METERS & COUNTING DEVICES',
    '3825': 'INSTRUMENTS FOR MEAS & TESTING OF ELECTRICITY & ELEC SIGNALS',
    '3826': 'LABORATORY ANALYTICAL INSTRUMENTS',
    '3827': 'OPTICAL INSTRUMENTS & LENSES',
    '3829': 'MEASURING & CONTROLLING DEVICES, NEC',
    '3841': 'SURGICAL & MEDICAL INSTRUMENTS & APPARATUS',
    '3842': 'ORTHOPEDIC, PROSTHETIC & SURGICAL APPLIANCES & SUPPLIES',
    '3843': 'DENTAL EQUIPMENT & SUPPLIES',
    '3844': 'X-RAY APPARATUS & TUBES & RELATED IRRADIATION APPARATUS',
    '3845': 'ELECTROMEDICAL & ELECTROTHERAPEUTIC APPARATUS',
    '3851': 'OPHTHALMIC GOODS',
    '3861': 'PHOTOGRAPHIC EQUIPMENT & SUPPLIES',
    '3873': 'WATCHES, CLOCKS, CLOCKWORK OPERATED DEVICES/PARTS',
    '3910': 'JEWELRY, SILVERWARE & PLATED WARE',
    '3911': 'JEWELRY, PRECIOUS METAL',
    '3931': 'MUSICAL INSTRUMENTS',
    '3942': 'DOLLS & STUFFED TOYS',
    '3944': 'GAMES, TOYS & CHILDRENS VEHICLES (NO DOLLS & BICYCLES)',
    '3949': 'SPORTING & ATHLETIC GOODS, NEC',
    '3950': 'PENS, PENCILS & OTHER ARTISTS MATERIALS',
    '3960': 'COSTUME JEWELRY & NOVELTIES',
    '3990': 'MISCELLANEOUS MANUFACTURING INDUSTRIES',
    '4011': 'RAILROADS, LINE-HAUL OPERATING',
    '4013': 'RAILROAD SWITCHING & TERMINAL ESTABLISHMENTS',
    '4100': 'LOCAL & SUBURBAN TRANSIT & INTERURBAN HWY PASSENGER TRANS',
    '4210': 'TRUCKING & COURIER SERVICES (NO AIR)',
    '4213': 'TRUCKING (NO LOCAL)',
    '4220': 'PUBLIC WAREHOUSING & STORAGE',
    '4231': 'TERMINAL MAINTENANCE FACILITIES FOR MOTOR FREIGHT TRANSPORT',
    '4400': 'WATER TRANSPORTATION',
    '4412': 'DEEP SEA FOREIGN TRANSPORTATION OF FREIGHT',
    '4512': 'AIR TRANSPORTATION, SCHEDULED',
    '4513': 'AIR COURIER SERVICES',
    '4522': 'AIR TRANSPORTATION, NONSCHEDULED',
    '4581': 'AIRPORTS, FLYING FIELDS & AIRPORT TERMINAL SERVICES',
    '4610': 'PIPE LINES (NO NATURAL GAS)',
    '4700': 'TRANSPORTATION SERVICES',
    '4731': 'ARRANGEMENT OF TRANSPORTATION OF FREIGHT & CARGO',
    '4812': 'RADIOTELEPHONE COMMUNICATIONS',
    '4813': 'TELEPHONE COMMUNICATIONS (NO RADIOTELEPHONE)',
    '4822': 'TELEGRAPH & OTHER MESSAGE COMMUNICATIONS',
    '4832': 'RADIO BROADCASTING STATIONS',
    '4833': 'TELEVISION BROADCASTING STATIONS',
    '4841': 'CABLE & OTHER PAY TELEVISION SERVICES',
    '4899': 'COMMUNICATIONS SERVICES, NEC',
    '4900': 'ELECTRIC, GAS & SANITARY SERVICES',
    '4911': 'ELECTRIC SERVICES',
    '4922': 'NATURAL GAS TRANSMISSION',
    '4923': 'NATURAL GAS TRANSMISISON & DISTRIBUTION',
    '4924': 'NATURAL GAS DISTRIBUTION',
    '4931': 'ELECTRIC & OTHER SERVICES COMBINED',
    '4932': 'GAS & OTHER SERVICES COMBINED',
    '4941': 'WATER SUPPLY',
    '4950': 'SANITARY SERVICES',
    '4953': 'REFUSE SYSTEMS',
    '4955': 'HAZARDOUS WASTE MANAGEMENT',
    '4961': 'STEAM & AIR-CONDITIONING SUPPLY',
    '4991': 'COGENERATION SERVICES & SMALL POWER PRODUCERS',
    '5000': 'WHOLESALE-DURABLE GOODS',
    '5010': 'WHOLESALE-MOTOR VEHICLES & MOTOR VEHICLE PARTS & SUPPLIES',
    '5013': 'WHOLESALE-MOTOR VEHICLE SUPPLIES & NEW PARTS',
    '5020': 'WHOLESALE-FURNITURE & HOME FURNISHINGS',
    '5030': 'WHOLESALE-LUMBER & OTHER CONSTRUCTION MATERIALS',
    '5031': 'WHOLESALE-LUMBER, PLYWOOD, MILLWORK & WOOD PANELS',
    '5040': 'WHOLESALE-PROFESSIONAL & COMMERCIAL EQUIPMENT & SUPPLIES',
    '5045': 'WHOLESALE-COMPUTERS & PERIPHERAL EQUIPMENT & SOFTWARE',
    '5047': 'WHOLESALE-MEDICAL, DENTAL & HOSPITAL EQUIPMENT & SUPPLIES',
    '5050': 'WHOLESALE-METALS & MINERALS (NO PETROLEUM)',
    '5051': 'WHOLESALE-METALS SERVICE CENTERS & OFFICES',
    '5063': 'WHOLESALE-ELECTRICAL APPARATUS & EQUIPMENT, WIRING SUPPLIES',
    '5064': 'WHOLESALE-ELECTRICAL APPLIANCES, TV & RADIO SETS',
    '5065': 'WHOLESALE-ELECTRONIC PARTS & EQUIPMENT, NEC',
    '5070': 'WHOLESALE-HARDWARE & PLUMBING & HEATING EQUIPMENT & SUPPLIES',
    '5072': 'WHOLESALE-HARDWARE',
    '5080': 'WHOLESALE-MACHINERY, EQUIPMENT & SUPPLIES',
    '5082': 'WHOLESALE-CONSTRUCTION & MINING (NO PETRO) MACHINERY & EQUIP',
    '5084': 'WHOLESALE-INDUSTRIAL MACHINERY & EQUIPMENT',
    '5090': 'WHOLESALE-MISC DURABLE GOODS',
    '5094': 'WHOLESALE-JEWELRY, WATCHES, PRECIOUS STONES & METALS',
    '5099': 'WHOLESALE-DURABLE GOODS, NEC',
    '5110': 'WHOLESALE-PAPER & PAPER PRODUCTS',
    '5122': 'WHOLESALE-DRUGS, PROPRIETARIES & DRUGGISTS SUNDRIES',
    '5130': 'WHOLESALE-APPAREL, PIECE GOODS & NOTIONS',
    '5140': 'WHOLESALE-GROCERIES & RELATED PRODUCTS',
    '5141': 'WHOLESALE-GROCERIES, GENERAL LINE',
    '5150': 'WHOLESALE-FARM PRODUCT RAW MATERIALS',
    '5160': 'WHOLESALE-CHEMICALS & ALLIED PRODUCTS',
    '5171': 'WHOLESALE-PETROLEUM BULK STATIONS & TERMINALS',
    '5172': 'WHOLESALE-PETROLEUM & PETROLEUM PRODUCTS (NO BULK STATIONS)',
    '5180': 'WHOLESALE-BEER, WINE & DISTILLED ALCOHOLIC BEVERAGES',
    '5190': 'WHOLESALE-MISCELLANEOUS NONDURABLE GOODS',
    '5200': 'RETAIL-BUILDING MATERIALS, HARDWARE, GARDEN SUPPLY',
    '5211': 'RETAIL-LUMBER & OTHER BUILDING MATERIALS DEALERS',
    '5271': 'RETAIL-MOBILE HOME DEALERS',
    '5311': 'RETAIL-DEPARTMENT STORES',
    '5331': 'RETAIL-VARIETY STORES',
    '5399': 'RETAIL-MISC GENERAL MERCHANDISE STORES',
    '5400': 'RETAIL-FOOD STORES',
    '5411': 'RETAIL-GROCERY STORES',
    '5412': 'RETAIL-CONVENIENCE STORES',
    '5500': 'RETAIL-AUTO DEALERS & GASOLINE STATIONS',
    '5531': 'RETAIL-AUTO & HOME SUPPLY STORES',
    '5600': 'RETAIL-APPAREL & ACCESSORY STORES',
    '5621': 'RETAIL-WOMENS CLOTHING STORES',
    '5651': 'RETAIL-FAMILY CLOTHING STORES',
    '5661': 'RETAIL-SHOE STORES',
    '5700': 'RETAIL-HOME FURNITURE, FURNISHINGS & EQUIPMENT STORES',
    '5712': 'RETAIL-FURNITURE STORES',
    '5731': 'RETAIL-RADIO, TV & CONSUMER ELECTRONICS STORES',
    '5734': 'RETAIL-COMPUTER & COMPUTER SOFTWARE STORES',
    '5735': 'RETAIL-RECORD & PRERECORDED TAPE STORES',
    '5810': 'RETAIL-EATING & DRINKING PLACES',
    '5812': 'RETAIL-EATING PLACES',
    '5900': 'RETAIL-MISCELLANEOUS RETAIL',
    '5912': 'RETAIL-DRUG STORES AND PROPRIETARY STORES',
    '5940': 'RETAIL-MISCELLANEOUS SHOPPING GOODS STORES',
    '5944': 'RETAIL-JEWELRY STORES',
    '5945': 'RETAIL-HOBBY, TOY & GAME SHOPS',
    '5960': 'RETAIL-NONSTORE RETAILERS',
    '5961': 'RETAIL-CATALOG & MAIL-ORDER HOUSES',
    '5990': 'RETAIL-RETAIL STORES, NEC',
    '6021': 'NATIONAL COMMERCIAL BANKS',
    '6022': 'STATE COMMERCIAL BANKS',
    '6029': 'COMMERCIAL BANKS, NEC',
    '6035': 'SAVINGS INSTITUTION, FEDERALLY CHARTERED',
    '6036': 'SAVINGS INSTITUTIONS, NOT FEDERALLY CHARTERED',
    '6099': 'FUNCTIONS RELATED TO DEPOSITORY BANKING, NEC',
    '6111': 'FEDERAL & FEDERALLY-SPONSORED CREDIT AGENCIES',
    '6141': 'PERSONAL CREDIT INSTITUTIONS',
    '6153': 'SHORT-TERM BUSINESS CREDIT INSTITUTIONS',
    '6159': 'MISCELLANEOUS BUSINESS CREDIT INSTITUTION',
    '6162': 'MORTGAGE BANKERS & LOAN CORRESPONDENTS',
    '6163': 'LOAN BROKERS',
    '6172': 'FINANCE LESSORS',
    '6189': 'ASSET-BACKED SECURITIES',
    '6199': 'FINANCE SERVICES',
    '6200': 'SECURITY & COMMODITY BROKERS, DEALERS, EXCHANGES & SERVICES',
    '6211': 'SECURITY BROKERS, DEALERS & FLOTATION COMPANIES',
    '6221': 'COMMODITY CONTRACTS BROKERS & DEALERS',
    '6282': 'INVESTMENT ADVICE',
    '6311': 'LIFE INSURANCE',
    '6321': 'ACCIDENT & HEALTH INSURANCE',
    '6324': 'HOSPITAL & MEDICAL SERVICE PLANS',
    '6331': 'FIRE, MARINE & CASUALTY INSURANCE',
    '6351': 'SURETY INSURANCE',
    '6361': 'TITLE INSURANCE',
    '6399': 'INSURANCE CARRIERS, NEC',
    '6411': 'INSURANCE AGENTS, BROKERS & SERVICE',
    '6500': 'REAL ESTATE',
    '6510': 'REAL ESTATE OPERATORS (NO DEVELOPERS) & LESSORS',
    '6512': 'OPERATORS OF NONRESIDENTIAL BUILDINGS',
    '6513': 'OPERATORS OF APARTMENT BUILDINGS',
    '6519': 'LESSORS OF REAL PROPERTY, NEC',
    '6531': 'REAL ESTATE AGENTS & MANAGERS (FOR OTHERS)',
    '6532': 'REAL ESTATE DEALERS (FOR THEIR OWN ACCOUNT)',
    '6552': 'LAND SUBDIVIDERS & DEVELOPERS (NO CEMETERIES)',
    '6770': 'BLANK CHECKS',
    '6792': 'OIL ROYALTY TRADERS',
    '6794': 'PATENT OWNERS & LESSORS',
    '6795': 'MINERAL ROYALTY TRADERS',
    '6798': 'REAL ESTATE INVESTMENT TRUSTS',
    '6799': 'INVESTORS, NEC',
    '7000': 'HOTELS, ROOMING HOUSES, CAMPS & OTHER LODGING PLACES',
    '7011': 'HOTELS & MOTELS',
    '7200': 'SERVICES-PERSONAL SERVICES',
    '7310': 'SERVICES-ADVERTISING',
    '7311': 'SERVICES-ADVERTISING AGENCIES',
    '7320': 'SERVICES-CONSUMER CREDIT REPORTING, COLLECTION AGENCIES',
    '7330': 'SERVICES-MAILING, REPRODUCTION, COMMERCIAL ART & PHOTOGRAPHY',
    '7331': 'SERVICES-DIRECT MAIL ADVERTISING SERVICES',
    '7340': 'SERVICES-TO DWELLINGS & OTHER BUILDINGS',
    '7350': 'SERVICES-MISCELLANEOUS EQUIPMENT RENTAL & LEASING',
    '7359': 'SERVICES-EQUIPMENT RENTAL & LEASING, NEC',
    '7361': 'SERVICES-EMPLOYMENT AGENCIES',
    '7363': 'SERVICES-HELP SUPPLY SERVICES',
    '7370': 'SERVICES-COMPUTER PROGRAMMING, DATA PROCESSING, ETC.',
    '7371': 'SERVICES-COMPUTER PROGRAMMING SERVICES',
    '7372': 'SERVICES-PREPACKAGED SOFTWARE',
    '7373': 'SERVICES-COMPUTER INTEGRATED SYSTEMS DESIGN',
    '7374': 'SERVICES-COMPUTER PROCESSING & DATA PREPARATION',
    '7377': 'SERVICES-COMPUTER RENTAL & LEASING',
    '7380': 'SERVICES-MISCELLANEOUS BUSINESS SERVICES',
    '7381': 'SERVICES-DETECTIVE, GUARD & ARMORED CAR SERVICES',
    '7384': 'SERVICES-PHOTOFINISHING LABORATORIES',
    '7385': 'SERVICES-TELEPHONE INTERCONNECT SYSTEMS',
    '7389': 'SERVICES-BUSINESS SERVICES, NEC',
    '7500': 'SERVICES-AUTOMOTIVE REPAIR, SERVICES & PARKING',
    '7510': 'SERVICES-AUTO RENTAL & LEASING (NO DRIVERS)',
    '7600': 'SERVICES-MISCELLANEOUS REPAIR SERVICES',
    '7812': 'SERVICES-MOTION PICTURE & VIDEO TAPE PRODUCTION',
    '7819': 'SERVICES-ALLIED TO MOTION PICTURE PRODUCTION',
    '7822': 'SERVICES-MOTION PICTURE & VIDEO TAPE DISTRIBUTION',
    '7829': 'SERVICES-ALLIED TO MOTION PICTURE DISTRIBUTION',
    '7830': 'SERVICES-MOTION PICTURE THEATERS',
    '7841': 'SERVICES-VIDEO TAPE RENTAL',
    '7900': 'SERVICES-AMUSEMENT & RECREATION SERVICES',
    '7948': 'SERVICES-RACING, INCLUDING TRACK OPERATION',
    '7990': 'SERVICES-MISCELLANEOUS AMUSEMENT & RECREATION',
    '7997': 'SERVICES-MEMBERSHIP SPORTS & RECREATION CLUBS',
    '8000': 'SERVICES-HEALTH SERVICES',
    '8011': 'SERVICES-OFFICES & CLINICS OF DOCTORS OF MEDICINE',
    '8050': 'SERVICES-NURSING & PERSONAL CARE FACILITIES',
    '8051': 'SERVICES-SKILLED NURSING CARE FACILITIES',
    '8060': 'SERVICES-HOSPITALS',
    '8062': 'SERVICES-GENERAL MEDICAL & SURGICAL HOSPITALS, NEC',
    '8071': 'SERVICES-MEDICAL LABORATORIES',
    '8082': 'SERVICES-HOME HEALTH CARE SERVICES',
    '8090': 'SERVICES-MISC HEALTH & ALLIED SERVICES, NEC',
    '8093': 'SERVICES-SPECIALTY OUTPATIENT FACILITIES, NEC',
    '8111': 'SERVICES-LEGAL SERVICES',
    '8200': 'SERVICES-EDUCATIONAL SERVICES',
    '8300': 'SERVICES-SOCIAL SERVICES',
    '8351': 'SERVICES-CHILD DAY CARE SERVICES',
    '8600': 'SERVICES-MEMBERSHIP ORGANIZATIONS',
    '8700': 'SERVICES-ENGINEERING, ACCOUNTING, RESEARCH, MANAGEMENT',
    '8711': 'SERVICES-ENGINEERING SERVICES',
    '8731': 'SERVICES-COMMERCIAL PHYSICAL & BIOLOGICAL RESEARCH',
    '8734': 'SERVICES-TESTING LABORATORIES',
    '8741': 'SERVICES-MANAGEMENT SERVICES',
    '8742': 'SERVICES-MANAGEMENT CONSULTING SERVICES',
    '8744': 'SERVICES-FACILITIES SUPPORT MANAGEMENT SERVICES',
    '8880': 'AMERICAN DEPOSITARY RECEIPTS',
    '8888': 'FOREIGN GOVERNMENTS',
    '8900': 'SERVICES-SERVICES, NEC',
    '9721': 'INTERNATIONAL AFFAIRS',
    '9995': 'NON-OPERATING ESTABLISHMENTS',
}

# regions 
Regions = {
    'AL': 'ALABAMA',
    'AK': 'ALASKA',
    'AZ': 'ARIZONA',
    'AR': 'ARKANSAS',
    'CA': 'CALIFORNIA',
    'CO': 'COLORADO',
    'CT': 'CONNECTICUT',
    'DE': 'DELAWARE',
    'DC': 'DISTRICT OF COLUMBIA',
    'FL': 'FLORIDA',
    'GA': 'GEORGIA',
    'HI': 'HAWAII',
    'ID': 'IDAHO',
    'IL': 'ILLINOIS',
    'IN': 'INDIANA',
    'IA': 'IOWA',
    'KS': 'KANSAS',
    'KY': 'KENTUCKY',
    'LA': 'LOUISIANA',
    'ME': 'MAINE',
    'MD': 'MARYLAND',
    'MA': 'MASSACHUSETTS',
    'MI': 'MICHIGAN',
    'MN': 'MINNESOTA',
    'MS': 'MISSISSIPPI',
    'MO': 'MISSOURI',
    'MT': 'MONTANA',
    'NE': 'NEBRASKA',
    'NV': 'NEVADA',
    'NH': 'NEW HAMPSHIRE',
    'NJ': 'NEW JERSEY',
    'NM': 'NEW MEXICO',
    'NY': 'NEW YORK',
    'NC': 'NORTH CAROLINA',
    'ND': 'NORTH DAKOTA',
    'OH': 'OHIO',
    'OK': 'OKLAHOMA',
    'OR': 'OREGON',
    'PA': 'PENNSYLVANIA',
    'RI': 'RHODE ISLAND',
    'SC': 'SOUTH CAROLINA',
    'SD': 'SOUTH DAKOTA',
    'TN': 'TENNESSEE',
    'TX': 'TEXAS',
    'X1': 'UNITED STATES',
    'UT': 'UTAH',
    'VT': 'VERMONT',
    'VA': 'VIRGINIA',
    'WA': 'WASHINGTON',
    'WV': 'WEST VIRGINIA',
    'WI': 'WISCONSIN',
    'WY': 'WYOMING',
    'A0': 'ALBERTA, CANADA',
    'A1': 'BRITISH COLUMBIA, CANADA',
    'A2': 'MANITOBA, CANADA',
    'A3': 'NEW BRUNSWICK, CANADA',
    'A4': 'NEWFOUNDLAND, CANADA',
    'A5': 'NOVA SCOTIA, CANADA',
    'A6': 'ONTARIO, CANADA',
    'A7': 'PRINCE EDWARD ISLAND, CANADA',
    'A8': 'QUEBEC, CANADA',
    'A9': 'SASKATCHEWAN, CANADA',
    'B0': 'YUKON, CANADA',
    'Z4': 'CANADA (Federal Level)',
    'B2': 'AFGHANISTAN',
    'Y6': 'ALAND ISLANDS',
    'B3': 'ALBANIA',
    'B4': 'ALGERIA',
    'B5': 'AMERICAN SAMOA',
    'B6': 'ANDORRA',
    'B7': 'ANGOLA',
    '1A': 'ANGUILLA',
    'B8': 'ANTARCTICA',
    'B9': 'ANTIGUA AND BARBUDA',
    'C1': 'ARGENTINA',
    '1B': 'ARMENIA',
    '1C': 'ARUBA',
    'C3': 'AUSTRALIA',
    'C4': 'AUSTRIA',
    '1D': 'AZERBAIJAN',
    'C5': 'BAHAMAS',
    'C6': 'BAHRAIN',
    'C7': 'BANGLADESH',
    'C8': 'BARBADOS',
    '1F': 'BELARUS',
    'C9': 'BELGIUM',
    'D1': 'BELIZE',
    'G6': 'BENIN',
    'D0': 'BERMUDA',
    'D2': 'BHUTAN',
    'D3': 'BOLIVIA',
    '1E': 'BOSNIA AND HERZEGOVINA',
    'B1': 'BOTSWANA',
    'D4': 'BOUVET ISLAND',
    'D5': 'BRAZIL',
    'D6': 'BRITISH INDIAN OCEAN TERRITORY',
    'D9': 'BRUNEI DARUSSALAM',
    'E0': 'BULGARIA',
    'X2': 'BURKINA FASO',
    'E2': 'BURUNDI',
    'E3': 'CAMBODIA',
    'E4': 'CAMEROON',
    'Z4': 'CANADA (Federal Level)',
    'E8': 'CAPE VERDE',
    'E9': 'CAYMAN ISLANDS',
    'F0': 'CENTRAL AFRICAN REPUBLIC',
    'F2': 'CHAD',
    'F3': 'CHILE',
    'F4': 'CHINA',
    'F6': 'CHRISTMAS ISLAND',
    'F7': 'COCOS (KEELING) ISLANDS',
    'F8': 'COLOMBIA',
    'F9': 'COMOROS',
    'G0': 'CONGO',
    'Y3': 'CONGO, THE DEMOCRATIC REPUBLIC OF THE',
    'G1': 'COOK ISLANDS',
    'G2': 'COSTA RICA',
    'L7': 'COTE DIVOIRE',
    '1M': 'CROATIA',
    'G3': 'CUBA',
    'G4': 'CYPRUS',
    '2N': 'CZECH REPUBLIC',
    'G7': 'DENMARK',
    '1G': 'DJIBOUTI',
    'G9': 'DOMINICA',
    'G8': 'DOMINICAN REPUBLIC',
    'H1': 'ECUADOR',
    'H2': 'EGYPT',
    'H3': 'EL SALVADOR',
    'H4': 'EQUATORIAL GUINEA',
    '1J': 'ERITREA',
    '1H': 'ESTONIA',
    'H5': 'ETHIOPIA',
    'H7': 'FALKLAND ISLANDS (MALVINAS)',
    'H6': 'FAROE ISLANDS',
    'H8': 'FIJI',
    'H9': 'FINLAND',
    'I0': 'FRANCE',
    'I3': 'FRENCH GUIANA',
    'I4': 'FRENCH POLYNESIA',
    '2C': 'FRENCH SOUTHERN TERRITORIES',
    'I5': 'GABON',
    'I6': 'GAMBIA',
    '2Q': 'GEORGIA',
    '2M': 'GERMANY',
    'J0': 'GHANA',
    'J1': 'GIBRALTAR',
    'J3': 'GREECE',
    'J4': 'GREENLAND',
    'J5': 'GRENADA',
    'J6': 'GUADELOUPE',
    'GU': 'GUAM',
    'J8': 'GUATEMALA',
    'Y7': 'GUERNSEY',
    'J9': 'GUINEA',
    'S0': 'GUINEA-BISSAU',
    'K0': 'GUYANA',
    'K1': 'HAITI',
    'K4': 'HEARD ISLAND AND MCDONALD ISLANDS',
    'X4': 'HOLY SEE (VATICAN CITY STATE)',
    'K2': 'HONDURAS',
    'K3': 'HONG KONG',
    'K5': 'HUNGARY',
    'K6': 'ICELAND',
    'K7': 'INDIA',
    'K8': 'INDONESIA',
    'K9': 'IRAN, ISLAMIC REPUBLIC OF',
    'L0': 'IRAQ',
    'L2': 'IRELAND',
    'Y8': 'ISLE OF MAN',
    'L3': 'ISRAEL',
    'L6': 'ITALY',
    'L8': 'JAMAICA',
    'M0': 'JAPAN',
    'Y9': 'JERSEY',
    'M2': 'JORDAN',
    '1P': 'KAZAKSTAN',
    'M3': 'KENYA',
    'J2': 'KIRIBATI',
    'M4': 'KOREA, DEMOCRATIC PEOPLES REPUBLIC OF',
    'M5': 'KOREA, REPUBLIC OF',
    'M6': 'KUWAIT',
    '1N': 'KYRGYZSTAN',
    'M7': 'LAO PEOPLES DEMOCRATIC REPUBLIC',
    '1R': 'LATVIA',
    'M8': 'LEBANON',
    'M9': 'LESOTHO',
    'N0': 'LIBERIA',
    'N1': 'LIBYAN ARAB JAMAHIRIYA',
    'N2': 'LIECHTENSTEIN',
    '1Q': 'LITHUANIA',
    'N4': 'LUXEMBOURG',
    'N5': 'MACAU',
    '1U': 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF',
    'N6': 'MADAGASCAR',
    'N7': 'MALAWI',
    'N8': 'MALAYSIA',
    'N9': 'MALDIVES',
    'O0': 'MALI',
    'O1': 'MALTA',
    '1T': 'MARSHALL ISLANDS',
    'O2': 'MARTINIQUE',
    'O3': 'MAURITANIA',
    'O4': 'MAURITIUS',
    '2P': 'MAYOTTE',
    'O5': 'MEXICO',
    '1K': 'MICRONESIA, FEDERATED STATES OF',
    '1S': 'MOLDOVA, REPUBLIC OF',
    'O9': 'MONACO',
    'P0': 'MONGOLIA',
    'Z5': 'MONTENEGRO',
    'P1': 'MONTSERRAT',
    'P2': 'MOROCCO',
    'P3': 'MOZAMBIQUE',
    'E1': 'MYANMAR',
    'T6': 'NAMIBIA',
    'P5': 'NAURU',
    'P6': 'NEPAL',
    'P7': 'NETHERLANDS',
    'P8': 'NETHERLANDS ANTILLES',
    '1W': 'NEW CALEDONIA',
    'Q2': 'NEW ZEALAND',
    'Q3': 'NICARAGUA',
    'Q4': 'NIGER',
    'Q5': 'NIGERIA',
    'Q6': 'NIUE',
    'Q7': 'NORFOLK ISLAND',
    '1V': 'NORTHERN MARIANA ISLANDS',
    'Q8': 'NORWAY',
    'P4': 'OMAN',
    'R0': 'PAKISTAN',
    '1Y': 'PALAU',
    '1X': 'PALESTINIAN TERRITORY, OCCUPIED',
    'R1': 'PANAMA',
    'R2': 'PAPUA NEW GUINEA',
    'R4': 'PARAGUAY',
    'R5': 'PERU',
    'R6': 'PHILIPPINES',
    'R8': 'PITCAIRN',
    'R9': 'POLAND',
    'S1': 'PORTUGAL',
    'PR': 'PUERTO RICO',
    'S3': 'QATAR',
    'S4': 'REUNION',
    'S5': 'ROMANIA',
    '1Z': 'RUSSIAN FEDERATION',
    'S6': 'RWANDA',
    'Z0': 'SAINT BARTHELEMY',
    'U8': 'SAINT HELENA',
    'U7': 'SAINT KITTS AND NEVIS',
    'U9': 'SAINT LUCIA',
    'Z1': 'SAINT MARTIN',
    'V0': 'SAINT PIERRE AND MIQUELON',
    'V1': 'SAINT VINCENT AND THE GRENADINES',
    'Y0': 'SAMOA',
    'S8': 'SAN MARINO',
    'S9': 'SAO TOME AND PRINCIPE',
    'T0': 'SAUDI ARABIA',
    'T1': 'SENEGAL',
    'Z2': 'SERBIA',
    'T2': 'SEYCHELLES',
    'T8': 'SIERRA LEONE',
    'U0': 'SINGAPORE',
    '2B': 'SLOVAKIA',
    '2A': 'SLOVENIA',
    'D7': 'SOLOMON ISLANDS',
    'U1': 'SOMALIA',
    'T3': 'SOUTH AFRICA',
    '1L': 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS',
    'U3': 'SPAIN',
    'F1': 'SRI LANKA',
    'V2': 'SUDAN',
    'V3': 'SURINAME',
    'L9': 'SVALBARD AND JAN MAYEN',
    'V6': 'SWAZILAND',
    'V7': 'SWEDEN',
    'V8': 'SWITZERLAND',
    'V9': 'SYRIAN ARAB REPUBLIC',
    'F5': 'TAIWAN, PROVINCE OF CHINA',
    '2D': 'TAJIKISTAN',
    'W0': 'TANZANIA, UNITED REPUBLIC OF',
    'W1': 'THAILAND',
    'Z3': 'TIMOR-LESTE',
    'W2': 'TOGO',
    'W3': 'TOKELAU',
    'W4': 'TONGA',
    'W5': 'TRINIDAD AND TOBAGO',
    'W6': 'TUNISIA',
    'W8': 'TURKEY',
    '2E': 'TURKMENISTAN',
    'W7': 'TURKS AND CAICOS ISLANDS',
    '2G': 'TUVALU',
    'W9': 'UGANDA',
    '2H': 'UKRAINE',
    'C0': 'UNITED ARAB EMIRATES',
    'X0': 'UNITED KINGDOM',
    '2J': 'UNITED STATES MINOR OUTLYING ISLANDS',
    'X3': 'URUGUAY',
    '2K': 'UZBEKISTAN',
    '2L': 'VANUATU',
    'X5': 'VENEZUELA',
    'Q1': 'VIET NAM',
    'D8': 'VIRGIN ISLANDS, BRITISH',
    'VI': 'VIRGIN ISLANDS, U.S.',
    'X8': 'WALLIS AND FUTUNA',
    'U5': 'WESTERN SAHARA',
    'T7': 'YEMEN',
    'Y4': 'ZAMBIA',
    'Y5': 'ZIMBABWE',
    'XX': 'UNKNOWN',
}

# months concordances
monthconcordances = {
    'January': 1,
    'February': 2,
    'March': 3,
    'April': 4,
    'May': 5,
    'June': 6,
    'July': 7,
    'August': 8,
    'September': 9,
    'October': 10,
    'November': 11,
    'December': 12
}

# BeautifulSoup parser
def fetch(url):
    thepage = urllib.request.urlopen(url)
    soupdata = BeautifulSoup(thepage,"html.parser")
    return soupdata

# Append values if key already exists
def append_value(dict_obj, key, value):
    # Check if key exist in dict or not
    if key in dict_obj:
        dict_obj[key] = value
    else:
        dict_obj[key] = value

# For all Entity,
for EntityCentralIndexKey in EntityCentralIndexKeys:
    #
    # TradingSymbol
    TradingSymbol = EntityCentralIndexKey
    #
    # entity
    try:
        print(137*'-' + '\n')
        #
        try:
            e = Entity.objects.get(TradingSymbol=TradingSymbol)
            #
            print(e.EntityRegistrantName + ' (' + e.TradingSymbol + ') retreived from φ.\n')
            #
            try:
                UpToDate = None
                t = len(e.lastyear) - 4
                year = e.lastyear[t:]
                day = e.lastyear[t-5:].replace(year, '').replace(' ', '').replace(',', '')[:2]
                month = e.lastyear.replace(year, '').replace(day, '').replace(',', '').replace(' ', '')
                month = monthconcordances[month]
                datelastyear = datetime.datetime(int(year), int(month), int(day))
                now = datetime.datetime.now()
                delta = (now - datelastyear).days
                if delta > 66:
                    if e.Reviewed > 0:
                        UpToDate = 1
                else:
                    e.Reviewed = 0
            except:
                pass
        except:
            e = Entity()
            e.TradingSymbol = TradingSymbol
            e.EntityCentralIndexKey = EntityCentralIndexKeys[TradingSymbol]
            UpToDate = None
            e.Reviewed = 0
            e.save()
            #
            print('New Entity for TradingSymbol ' + TradingSymbol + ' created in φ.\n')
            #
            print(137*'-' + '\n')
    except:
        pass
    #
    #
    # data gathering
    for scopedperiod in scopedperiods:
        #
        #
        # UpdateFinancialStatements
        if UpdateFinancialStatements == 'yes':
            if UpToDate is None:
                #
                #
                # models, filings, entity information, documents, etc.
                try:
                    # dictionaries
                    try:
                        IncomeStatement = {}
                        ComprehensiveIncomeStatement = {}
                        BalanceSheet = {}
                        StockholdersEquityStatement = {}
                        CashFlowStatement = {}
                    except:
                        pass
                    #
                    # period
                    try:
                        print(e.EntityRegistrantName)
                        print(scopedperiod)
                        print(137*'-' + '\n')
                    except:
                        pass
                    #
                    # trial balance
                    try:
                        # Deletes Trial Balance
                        try:
                            tb = TrialBalance.objects.get(TradingSymbol=TradingSymbol, Period=scopedperiod)
                            print('Trial Balance from ' + tb.Period + ' deleted from the φ.')
                            tb.delete()
                        except:
                            pass
                        # Creates Trial Balance
                        try:
                            tb = TrialBalance(TradingSymbol=TradingSymbol, Period=scopedperiod)
                            tb.save()
                            print('Trial Balance for ' + scopedperiod + ' created.')
                        except:
                            pass
                    except:
                        pass
                    #
                    # cash flow
                    try:
                        # Deletes Cash Flow Statements
                        try:
                            cf = CashFlow.objects.get(TradingSymbol=TradingSymbol, Period=scopedperiod)
                            print('Cash Flow from ' + cf.Period + ' deleted from the φ.')
                            cf.delete()
                        except:
                            pass
                        # Creates ARCH Cash Flow Statements
                        try:
                            cf = CashFlow(TradingSymbol=TradingSymbol, Period=scopedperiod)
                            cf.save()
                            print('Cash Flow for ' + scopedperiod + ' created.')
                        except:
                            pass
                    except:
                        pass
                    #
                    # audit
                    try:
                        # Deletes Audit
                        try:
                            a = AuditData.objects.get(TradingSymbol=TradingSymbol, Period=scopedperiod)
                            print('Audit from ' + cf.Period + ' deleted from the φ.')
                            a.delete()
                        except:
                            pass
                        # Creates Audit
                        try:
                            a = AuditData(TradingSymbol=TradingSymbol, Period=scopedperiod)
                            a.save()
                            print('Audit for ' + scopedperiod + ' created.')
                        except:
                            pass
                    except:
                        pass
                    #
                    # main url
                    e.URL = "https://www.sec.gov/edgar/browse/?CIK=" + EntityCentralIndexKey + "&owner=exclude"
                    #
                    # last filings
                    try:
                        filings_list_base_url = r"https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK="
                        EntityCentralIndexKey = EntityCentralIndexKeys[TradingSymbol]
                        print(137*'-' + '\n')
                        print('CIK: ' + str(EntityCentralIndexKey))
                        if 'quarter' in scopedperiod:
                            report = '10-Q'
                            if scopedperiod == 'lastquarter':
                                periodurl = ''
                        else:
                            report = '10-K'
                            if scopedperiod == 'lastyear':
                                periodurl = ''
                        print('Report type:' + report)
                        try:
                            prior = periodurl
                            filings_list_base_url = filings_list_base_url + EntityCentralIndexKey + '&type=' + report + '&dateb='
                            filings_url = filings_list_base_url + prior + '&owner=exclude&count=40&search_text='
                            print(filings_url)
                        except:
                            filings_url = filings_list_base_url + '&owner=exclude&count=40&search_text='
                            print(filings_url)
                        filings_list_html = fetch(filings_url)
                        #
                        e.save()
                    except:
                        pass
                    #
                    # accession number
                    try:
                        i = 0
                        accessionnumber = filings_list_html.find_all('td', class_='small')[i].text
                        #
                        # Accession Number Replacements
                        rep1 = 'Transition reports [Rule 13a-10 or 15d-10]Acc-no: '
                        rep2 = 'Annual report [Section 13 and 15(d), not S-K Item 405]Acc-no: '
                        rep3 = 'Quarterly report [Sections 13 or 15(d)]Acc-no: '
                        #
                        while '[Amend]' in accessionnumber:
                            i = i + 1
                            accessionnumber = filings_list_html.find_all('td', class_='small')[i].text
                            print(accessionnumber)
                        #
                        accessionnumber = accessionnumber.replace(rep1,'').replace(rep2,'').replace(rep3,'')[:20]
                        #
                        print('Accession number ' + accessionnumber)
                        print(137*'-' + '\n')
                    except:
                        pass
                    #
                    # entity information
                    try:
                        company_info_div = filings_list_html.find_all('div', class_='companyInfo')[0]
                        #
                        e.EntityRegistrantName = company_info_div.find_all('span', class_='companyName')[0].text.split(' CIK')[0].upper()
                        print(e.EntityRegistrantName)
                        #
                        e.Industry = Industries[company_info_div.find_all('a')[1].text]
                        print(e.Industry)
                        #
                        e.Region = Regions[company_info_div.find_all('a')[2].text]
                        print(e.Region)
                        #
                        e.EntityIncorporationStateCountryCode = Regions[company_info_div.find_all('strong')[0].text]
                        print(e.EntityIncorporationStateCountryCode)
                        #
                        print(137*'-' + '\n')
                    except:
                        pass
                    #
                    # documents
                    try:
                        #
                        # Retreives documents URL 
                        try:
                            filing_documents_base_url = r"https://www.sec.gov/Archives/edgar/data/"
                            filing_documents_url = filing_documents_base_url + EntityCentralIndexKey + '/' + accessionnumber.replace('-','') + '/' + accessionnumber + '-index.htm'
                            tb.Link = filing_documents_url
                        except:
                            print('---Could not retreive document`s url.')
                        #
                        # Retreives html code from filing documents url
                        try:
                            filing_documents_html = fetch(filing_documents_url)
                        except:
                            print('---Could not retreive filing html.')
                        #
                        # Retreive filing period of report
                        try:
                            period = filing_documents_html.find_all('div', class_="info")[3].text
                            periodurl = period.replace('-','')
                            if scopedperiod == 'lastquarter':
                                periodlastquarter = period
                                print('Last Quarter: ' + period)
                            elif scopedperiod == 'lastyear':
                                periodlastyear = period
                                print('Last Year: ' + period)
                            else:
                                pass
                            print('DOCS URL: ' + filing_documents_url)
                        #
                        except:
                            print('---Could not retreive filing report date.')
                        #
                        # saves period of report
                        try:
                            tb.PeriodOfReport = period
                            print('Period Of Report: ' + tb.PeriodOfReport)
                            tb.FilingDate = filing_documents_html.find_all('div', class_="info")[0].text
                            print('Filing Date: ' + tb.FilingDate)
                        except:
                            print('---Could not establish Period Of Report And / Or Filing Date')
                        #
                        # Retreive filing documents tables
                        try:
                            XBRL_taxonomy = filing_documents_html.find_all('table', class_="tableFile")[1].findAll('a')
                        except:
                            print('---Could not retreive filing documents tables')
                        #
                        # Creates xml base url for calculation, definition and label 
                        try:
                            xml_base_url = filing_documents_base_url + EntityCentralIndexKey + '/' + accessionnumber.replace('-','') + '/'
                        except:
                            print('---Could not define xml_base_url')
                        #
                        # Defines downloads directory
                        try:
                            downloads_directory = './φ/algorithm/downloads/'
                        except:
                            print('---Could not define downloads directory.')
                        #
                        # Retreives filing document
                        try:
                            filing_document = filing_documents_html.find_all('td')[2].text
                            filing_document = filing_document.split(' ')[0]
                            print('Filing document: ' + filing_document)
                            filing_url = xml_base_url + filing_document
                            print('Filing url: ' + filing_url)
                            r = requests.get(filing_url)
                            with open(downloads_directory + '/' + filing_document, 'wb') as f:
                                f.write(r.content)
                                print('Filing saved.')
                        except:
                            print("---Could not retreive filing document")
                        #
                        # Retreives calculation document
                        try:
                            calculation_document = XBRL_taxonomy[1].text
                            print('Calculation document: ' + calculation_document)
                            xml_cal = xml_base_url + calculation_document
                            print('xml calculation url: ' + xml_cal)
                            r = requests.get(xml_cal)
                            with open(downloads_directory + '/' + calculation_document, 'wb') as f:
                                f.write(r.content)
                                print('xml_cal saved.')
                        except:
                            print('---Could not retreive calculation linkbase document')
                        #
                        # Retreives definition document
                        try:
                            definition_document = XBRL_taxonomy[2].text
                            print('Definition document: ' + definition_document)
                            xml_def = xml_base_url + definition_document
                            print('xml definition url: ' + xml_def)
                            r = requests.get(xml_def)
                            with open(downloads_directory + '/' + definition_document, 'wb') as f:
                                f.write(r.content)
                                print('xml_def saved.')
                        except:
                            print('---Could not retreive definition linkbase document')
                        #
                        # Retreives label document
                        try:
                            label_document = XBRL_taxonomy[3].text
                            print('Label document: ' + label_document)
                            xml_lab = xml_base_url + label_document
                            print('xml label url: ' + xml_lab)
                            r = requests.get(xml_lab)
                            with open(downloads_directory + '/' + label_document, 'wb') as f:
                                f.write(r.content)
                                print('xml_lab saved.')
                        except:
                            print('---Could not retreive label linkbase document')
                        #
                        # Define downloads directory for SEC files
                        try:
                            SEC_directory = pathlib.Path.cwd().joinpath('./φ/algorithm/downloads')
                        except:
                            print('---Could not define path to downloads.')
                        #
                        # Resolve path to files
                        try:
                            file_htm = SEC_directory.joinpath(filing_document).resolve()
                            file_cal = SEC_directory.joinpath(calculation_document).resolve()
                            file_def = SEC_directory.joinpath(definition_document).resolve()
                            file_lab = SEC_directory.joinpath(label_document).resolve()
                        except:
                            print('Could not resolve directory.')
                        #
                        # Define the different storage components
                        try:
                            storage_list = []
                            storage_values = {}
                            storage_gaap = {}
                        except:
                            print('---Could not define storage components')
                        #
                        # Creates tuple
                        try:
                            FilingTuple = collections.namedtuple('FilingTuple',['file_path','namespace_element','namespace_label'])
                        except:
                            print('---Could not create tuples')
                        #
                        # Initialize list of named tuples to be parsed
                        try:
                            files_list = [
                                FilingTuple(file_cal, r'{http://www.xbrl.org/2003/linkbase}calculationLink', 'calculation'),
                                FilingTuple(file_def, r'{http://www.xbrl.org/2003/linkbase}definitionLink', 'definition'),
                                FilingTuple(file_lab, r'{http://www.xbrl.org/2003/linkbase}labelLink', 'label'),
                            ]
                        except:
                            print('---Could not initialize list of named tuples to be parsed')
                        #
                        # Defines categories of labels to be excluded
                        try:
                            avoids = ['linkbase','roleRef']
                            parse = ['label','labelLink','labelArc','loc','definitionLink','definitionArc','calculationArc']
                        except:
                            print('---Could not define labels to be excluded')
                        #
                        # Creates empty sets
                        try:
                            lab_list = set()
                            cal_list = set()
                        except:
                            print('---Could not create empty sets.')
                    except:
                        pass
                    #
                    # Trees
                    try:
                        print(137*'-' + '\n')
                        f = open(file_htm, "r")
                        content = f.read()                
                        #
                        # Method after 2018
                        if content[:5] == '<?xml':
                            MethodAfter2018Applies = 'yes'
                            try:
                                # files
                                for file in files_list:
                                    tree = ET.parse(file.file_path)
                                    elements = tree.findall(file.namespace_element)
                                    for element in elements:
                                        for child_element in element.iter():
                                            element_split_label = child_element.tag.split('}')
                                            namespace = element_split_label[0]
                                            label = element_split_label[1]
                                            if label in parse:
                                                element_type_label = file.namespace_label + '_' + label
                                                dict_storage = {}
                                                dict_storage['item_type'] = element_type_label
                                                cal_keys = child_element.keys()
                                                for key in cal_keys:
                                                    if '}' in key:
                                                        new_key = key.split('}')[1]
                                                        dict_storage[new_key] = child_element.attrib[key]
                                                    else:
                                                        dict_storage[key] = child_element.attrib[key]
                                                if element_type_label == 'label_label':
                                                    key_store = dict_storage['label']
                                                    master_key = key_store.replace('lab_', '')
                                                    label_split = master_key.split('_')
                                                    gaap_id = label_split[0] + ":" + label_split[1]
                                                    storage_values[master_key] = {}
                                                    storage_values[master_key]['label_id'] = key_store
                                                    storage_values[master_key]['location_id'] = key_store.replace('lab_','loc_')
                                                    storage_values[master_key]['us_gaap_id'] = gaap_id
                                                    storage_values[master_key]['us_gaap_value'] = None
                                                    storage_values[master_key][element_type_label] = dict_storage
                                                    storage_gaap[gaap_id] = {}
                                                    storage_gaap[gaap_id]['id'] = gaap_id
                                                    storage_gaap[gaap_id]['master_id'] = master_key
                                                storage_list.append([file.namespace_label, dict_storage])
                                #
                                # Tree Data
                                try:
                                    #
                                    # Qualitative
                                    try:
                                        tree = ET.parse(file_htm)
                                        for element in tree.iter():
                                            if 'nonNumeric' in element.tag:
                                                attr_name = element.attrib['name']
                                                gaap_id = storage_gaap[attr_name]['master_id']
                                                storage_gaap[attr_name]['context_ref'] = element.attrib['contextRef']
                                                SEC_context = storage_gaap[attr_name]['context_ref']
                                                storage_gaap[attr_name]['context_id'] = element.attrib['id']
                                                storage_gaap[attr_name]['continued_at'] = element.attrib.get('continued_at', 'null')
                                                storage_gaap[attr_name]['escape'] = element.attrib.get('escape', 'null')
                                                storage_gaap[attr_name]['format'] = element.attrib.get('format', 'null')
                                                storage_gaap[attr_name]['value'] = element.text.strip() if element.text else 'null'
                                                value = storage_gaap[attr_name]['value']
                                                SEC_component = str(attr_name.split(":")[1])
                                                if SEC_component == 'EntityRegistrantName':
                                                    tb.EntityRegistrantName = value
                                                    print(SEC_component + ': ' + value)
                                                elif SEC_component == 'AmendmentFlag':
                                                    tb.AmendmentFlag = value
                                                    print(SEC_component + ': ' + value)
                                                elif SEC_component == 'DocumentFiscalPeriodFocus':
                                                    tb.DocumentFiscalPeriodFocus = value
                                                    print(SEC_component + ': ' + value)
                                                elif SEC_component == 'DocumentFiscalYearFocus':
                                                    tb.DocumentFiscalYearFocus = value
                                                    print(SEC_component + ': ' + value)
                                                elif SEC_component == 'DocumentPeriodEndDate':
                                                    tb.DocumentPeriodEndDate = value
                                                    print(SEC_component + ': ' + value)
                                                elif SEC_component == 'EntityIncorporationStateCountryCode':
                                                    tb.EntityIncorporationStateCountryCode = value
                                                    print(SEC_component + ': ' + value)
                                                elif SEC_component == 'Region':
                                                    tb.Region = value
                                                    print(SEC_component + ': ' + value)
                                                elif SEC_component == 'CurrentFiscalYearEndDate':
                                                    tb.CurrentFiscalYearEndDate = value
                                                    print(SEC_component + ': ' + value)
                                                elif SEC_component == 'SecurityExchangeName':
                                                    if tb.SecurityExchangeName is None:
                                                        tb.SecurityExchangeName = value
                                                        print(SEC_component + ': ' + value)
                                                else:
                                                    pass
                                        #
                                        # Save
                                        tb.save()
                                        print(137 * '-')
                                    #
                                    except:
                                        pass
                                except:
                                    pass
                            except:
                                pass
                        #
                        # Method After 2018
                        else:
                            MethodAfter2018Applies = 'no'
                        #
                        print(137*'-' + '\n')
                        #
                        # Documents general method
                        try:
                            base_url = r"https://www.sec.gov"
                            index_url = xml_base_url + 'index.json'
                            content = requests.get(index_url).json()
                            for file in content['directory']['item']:
                                if file['name'] == 'FilingSummary.xml':
                                    xml_summary = base_url + content['directory']['name'] + '/' + file['name']
                        except:
                            pass
                        #
                        # arching
                        try:
                            base_url = xml_summary.replace('FilingSummary.xml', '')
                            content = requests.get(xml_summary).content
                            soup = BeautifulSoup(content, 'lxml')
                            #
                            # list of reports in filing summary
                            reports = soup.find('myreports')
                            #
                            # reports
                            master_reports = []
                            statements_url = []
                            statements_set = {}
                            for report in reports.find_all('report')[:-1]:
                                report_dict = {}
                                report_dict['name_short'] = report.shortname.text
                                report_dict['name_long'] = report.longname.text
                                report_dict['position'] = report.position.text
                                report_dict['category'] = report.menucategory.text
                                report_dict['url'] = base_url + report.htmlfilename.text
                                t = report_dict['url']
                                d = report_dict['name_short'].upper()
                                d = re.sub(r"[^A-Z' ]", "", d)
                                q = [
                                    'CONDENSED',
                                    'CONSOLIDATED',
                                    'STATEMENT',
                                ]
                                b = [
                                    'DETAIL',
                                    'PARENTHETICAL',
                                    'POLICIES',
                                    'REDEEMABLE',
                                    'SCHEDULE',
                                    'SEGMENT',
                                    'TABLE',
                                    'UNAUDITED',
                                ]
                                s = 'a'
                                for p in q:
                                    if s == 'a':
                                        if p in d:
                                            i = 0
                                            l = 'e'
                                            s = 'a'
                                            for h in b:
                                                if s == 'a':
                                                    while i < len(b):
                                                        if b[i] in d:
                                                            l = 'u'
                                                        i = i + 1
                                                    if l == 'e':
                                                        if 'EQUITY' in d:
                                                            append_value(ARCH_StockholdersEquityStatement, d, t)
                                                        elif 'SHEET' in d:
                                                            append_value(ARCH_BalanceSheet, d, t)
                                                        elif 'FINANCIAL POSITION' in d:
                                                            append_value(ARCH_BalanceSheet, d, t)
                                                        elif 'COMPREHENSIVE' in d:
                                                            append_value(ARCH_ComprehensiveIncome, d, t)
                                                        elif 'INCOME' in d:
                                                            append_value(ARCH_IncomeStatement, d, t)
                                                        elif 'OPERATION' in d:
                                                            append_value(ARCH_IncomeStatement, d, t)
                                                        elif 'EARNINGS' in d:
                                                            append_value(ARCH_IncomeStatement, d, t)
                                                        elif 'CASH' in d:
                                                            append_value(ARCH_CashFlowStatement, d, t)
                                                        else:
                                                            pass
                                                        append_value(statements_set, d, t)
                                                        statements_url.append(t)
                                                        s = 'z'
                            #
                            pprint.pprint(statements_set)
                            #
                            # Statements data
                            statements_data = []
                            dad = 0
                            #
                            for financial_statement in statements_set:
                                #
                                dad = None
                                #
                                statement = statements_set[financial_statement]
                                #
                                statement_data = {}
                                statement_data['headers'] = []
                                statement_data['sections'] = []
                                statement_data['data'] = []
                                content = requests.get(statement).content
                                report_soup = BeautifulSoup(content, 'html')
                                #
                                m = report_soup.table.find_all('tr')
                                #
                                for index, row in enumerate(m):
                                    #
                                    try:
                                        cols = row.find_all('td')
                                        #
                                        if (len(row.find_all('th')) == 0 and len(row.find_all('strong')) == 0):
                                            #
                                            t = [ele.text.strip() for ele in cols]
                                            #
                                            GL_SEC = t[0].lower().title()
                                            #
                                            GL = re.sub(r"[^a-zA-Z()]", "", GL_SEC)
                                            #
                                            for y in RegularExpressions:
                                                GL = GL.replace(y,'')
                                            #
                                            # header
                                            try:
                                                #
                                                #
                                                f = [
                                                    ' SHARES IN MILLIONS',
                                                    ' SHARES IN THOUSANDS',
                                                    ', ',
                                                    ',',
                                                ]
                                                # dad
                                                qd = statement_data['headers']
                                                qb = qd[0][0].upper()
                                                #
                                                if dad is None:
                                                    #
                                                    for g in f:
                                                        qb = qb.replace(g, '')
                                                    #
                                                    print(137*'-' + '\n')
                                                    print(qb)
                                                    print(137*'-' + '\n')
                                                    #
                                                    if qb[-11:] == 'IN MILLIONS':
                                                        #
                                                        dad = 1000000
                                                    #
                                                    elif qb[-12:] == 'IN THOUSANDS':
                                                        #
                                                        dad = 1000
                                                    #
                                                    else:
                                                        #
                                                        dad = 1
                                            #
                                            except:
                                                print('---Could not establish scale.')
                                            #
                                            # value
                                            try:
                                                #
                                                z = len(m[5].find_all('td'))
                                                #
                                                x = m[5].find_all('td')[1].text
                                                #
                                                if z > 10:
                                                    g = (z - 3)
                                                    g = t[g]
                                                #
                                                elif z > 3:
                                                    if x == '' :
                                                        g = t[2]
                                                    else:
                                                        g = t[1]
                                                else:
                                                    g = t[1]
                                                #
                                                if g == '':
                                                    g = 0
                                                #
                                                w = 1
                                                if '(' in g:
                                                    w = -1
                                                #
                                                g = re.sub(r"[^.0123456789]", "", str(g))
                                                g = float(g)
                                                #
                                                value = int(g * w * dad)
                                                #
                                                # Arching
                                                try:
                                                    j = 0
                                                    #
                                                    if financial_statement in ARCH_IncomeStatement:
                                                        while GL in IncomeStatement:
                                                            GL = GL + str('i')
                                                        append_value(IncomeStatement, GL, value)
                                                        IncomeStatement_GLs.append(GL)
                                                        print('Income Statement, ' + GL + ': ' + str('{:,}'.format(value)))
                                                    #
                                                    elif financial_statement in ARCH_ComprehensiveIncome:
                                                        while GL in ComprehensiveIncomeStatement:
                                                            GL = GL + str('i')
                                                        append_value(ComprehensiveIncomeStatement, GL, value)
                                                        ComprehensiveIncome_GLs.append(GL)
                                                        print('Comprehensive Income, ' + GL + ': ' + str('{:,}'.format(value)))
                                                    #
                                                    elif financial_statement in ARCH_BalanceSheet:
                                                        while GL in BalanceSheet:
                                                            GL = GL + str('i')
                                                        append_value(BalanceSheet, GL, value)
                                                        BalanceSheet_GLs.append(GL)
                                                        print('Balance Sheet, ' + GL + ': ' + str('{:,}'.format(value)))
                                                    #
                                                    elif financial_statement in ARCH_CashFlowStatement:
                                                        while GL in CashFlowStatement:
                                                            GL = GL + str('i')
                                                        append_value(CashFlowStatement, GL, value)
                                                        CashFlow_GLs.append(GL)
                                                        print('Cashflow, ' + GL + ': ' + str('{:,}'.format(value)))
                                                    #
                                                    elif financial_statement in ARCH_StockholdersEquityStatement:
                                                        while GL in StockholdersEquityStatement:
                                                            GL = GL + str('i')
                                                        append_value(StockholdersEquityStatement, GL, value)
                                                        StockholdersEquity_GLs.append(GL)
                                                        print('Stockholders Equity, ' + GL + ': ' + str('{:,}'.format(value)))
                                                    #
                                                    else:
                                                        pass
                                                except:
                                                    pass
                                            except:
                                                pass
                                        #
                                        elif (len(row.find_all('th')) == 0 and len(row.find_all('strong')) != 0):
                                            #
                                            sec_row = cols[0].text.strip()
                                            #
                                            statement_data['sections'].append(sec_row)
                                        #
                                        elif len(row.find_all('th')) != 0:
                                            #
                                            hed_row = [ele.text.strip() for ele in row.find_all('th')]
                                            #
                                            statement_data['headers'].append(hed_row)
                                        #
                                        else:
                                            print('---Could not distinguish headers from section and regular rows.')
                                    #
                                    except:
                                        print('---Could not append ARCH_GL')
                                #
                                statements_data.append(statement_data)
                                #
                                a.save()
                                print(137*'-' + '\n')
                            #
                            #
                            # Define documents period end date
                            try:
                                try:
                                    DPED = statements_data[0]['headers'][1][0]
                                except:
                                    DPED = statements_data[0]['headers'][0][1]
                                #
                                DPED = DPED.replace('Jan.', 'January').replace('Feb.', 'February').replace('Mar.', 'March')
                                DPED = DPED.replace('Apr.', 'April').replace('Jun.', 'June').replace('Jul.', 'July').replace('Aug.', 'August')
                                DPED = DPED.replace('Sep.', 'September').replace('Oct.', 'October').replace('Nov.', 'November').replace('Dec.', 'December')
                                #
                                tb.DocumentPeriodEndDate = DPED
                            except:
                                print('---Could not establish document period end date.')
                            #
                            #
                            # Define entity period end date
                            try:
                                if scopedperiod == 'lastquarter':
                                    e.lastquarter =  tb.DocumentPeriodEndDate
                                elif scopedperiod == 'secondlastquarter':
                                    e.secondlastquarter =  tb.DocumentPeriodEndDate
                                elif scopedperiod == 'thirdlastquarter':
                                    e.thirdlastquarter =  tb.DocumentPeriodEndDate
                                elif scopedperiod == 'fourthlastquarter':
                                    e.fourthlastquarter =  tb.DocumentPeriodEndDate
                                elif scopedperiod == 'lastyear':
                                    e.lastyear =  tb.DocumentPeriodEndDate
                                elif scopedperiod == 'secondlastyear':
                                    e.secondlastyear =  tb.DocumentPeriodEndDate
                                elif scopedperiod == 'thirdlastyear':
                                    e.thirdlastyear =  tb.DocumentPeriodEndDate
                                elif scopedperiod == 'fourthlastyear':
                                    e.fourthlastyear =  tb.DocumentPeriodEndDate
                                elif scopedperiod == 'fifthlastyear':
                                    e.fifthlastyear =  tb.DocumentPeriodEndDate
                                elif scopedperiod == 'sixthlastyear':
                                    e.sixthlastyear =  tb.DocumentPeriodEndDate
                                elif scopedperiod == 'seventhlastyear':
                                    e.seventhlastyear =  tb.DocumentPeriodEndDate
                                else:
                                    pass
                            except:
                                print('---Could Not Define Entity`s Period End Dates')
                        except:
                            pass
                    except:
                        pass
                    #
                except:
                    pass
                #
                #
                # financial statements
                try:
                    #
                    # balance sheet
                    try:
                        print(e.EntityRegistrantName)
                        print('balance sheet')
                        print(DPED)
                        print(137*'-' + '\n')
                        #
                        # totals
                        try:
                            #
                            # cash
                            try:
                                Cash = []
                                r = 0
                                CashRank = None
                                for key, value in BalanceSheet.items():
                                    d = key
                                    q = [
                                        'Cash',
                                    ]
                                    b = [
                                        'AssetsCurrent',
                                        'CurrentAssets',
                                        'DeferredTax',
                                        'DeferredIncome',
                                        'DiscontinuedOperations',
                                        'Inventor',
                                        'LongTerm',
                                        'Prepaid',
                                        'Receivable',
                                        'Securities',
                                        'Total',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while BalanceSheet[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = BalanceSheet[key][i]
                                                    BalanceSheet[key][i] = None
                                                except:
                                                    if BalanceSheet[key] != None:
                                                        ARCHvalue = BalanceSheet[key]
                                                        BalanceSheet[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    Cash.append(ARCHvalue)
                                                    if CashRank is None:
                                                        CashRank = r
                                    r = r + 1
                                tb.Cash = sum(Cash)
                            except:
                                pass
                            #
                            # total current assets
                            try:
                                TotalCurrentAssets = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CashRank:
                                        d = key
                                        q = [
                                            'AssetsCurrent',
                                            'CurrentAssets',
                                        ]
                                        b = [
                                            'Cash',
                                            'DeferredTax',
                                            'DeferredIncome',
                                            'DiscontinuedOperations',
                                            'Inventor',
                                            'Investments',
                                            'LongTerm',
                                            'NonCurrent',
                                            'Noncurrent',
                                            'Miscellaneous',
                                            'Other',
                                            'Prepaid',
                                            'Receivable',
                                            'Securities',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while BalanceSheet[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = BalanceSheet[key][i]
                                                        BalanceSheet[key][i] = None
                                                    except:
                                                        if BalanceSheet[key] != None:
                                                            ARCHvalue = BalanceSheet[key]
                                                            BalanceSheet[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        TotalCurrentAssets.append(ARCHvalue)
                                                        CurrentAssetsRank = r
                                                    
                                    r = r + 1
                                a.CurrentAssets = sum(TotalCurrentAssets)
                            except:
                                pass
                            #                   
                            # total non current assets
                            try:
                                TotalNonCurrentAssets = []
                                NonCurrentAssetsRank = None
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        d = key
                                        q = [
                                            'NonCurrentAsset',
                                            'NoncurrentAsset',
                                        ]
                                        b = [
                                            'ShortTerm',
                                            'OtherNonCurrentAsset',
                                            'OtherNoncurrentAsset',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while BalanceSheet[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = BalanceSheet[key][i]
                                                        BalanceSheet[key][i] = None
                                                    except:
                                                        if BalanceSheet[key] != None:
                                                            ARCHvalue = BalanceSheet[key]
                                                            BalanceSheet[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        TotalNonCurrentAssets.append(ARCHvalue)
                                                        NonCurrentAssetsRank = r
                                    r = r + 1
                                a.NonCurrentAssets = sum(TotalNonCurrentAssets)
                            except:
                                pass
                            #
                            # total assets
                            try:
                                TotalAssets = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        d = key
                                        q = [
                                            'Assets',
                                        ]
                                        b = [
                                            'Deferred',
                                            'Goodwill',
                                            'Intangible',
                                            'Investment',
                                            'Lease',
                                            'Liabilit',
                                            'Operating',
                                            'Other',
                                            'Miscellaneous',
                                            'Property',
                                            'Tax',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while BalanceSheet[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = BalanceSheet[key][i]
                                                        BalanceSheet[key][i] = None
                                                    except:
                                                        if BalanceSheet[key] != None:
                                                            ARCHvalue = BalanceSheet[key]
                                                            BalanceSheet[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        TotalAssets.append(ARCHvalue)
                                                        AssetsRank = r
                                    r = r + 1
                                a.Assets = sum(TotalAssets)
                                #
                                # total asset not null
                                try:
                                    if a.NonCurrentAssets == 0:
                                        a.NonCurrentAssets = a.Assets - a.CurrentAssets
                                except:
                                    pass
                            except:
                                pass
                            #
                            # total current liabilities
                            try:
                                CurrentLiabilities = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        d = key
                                        q = [
                                            'LiabilitiesCurrent',
                                            'CurrentLiabilities',
                                        ]
                                        b = [
                                            'Asset',
                                            'LongTerm',
                                            'Noncurrent',
                                            'NonCurrent',
                                            'OperatingLease',
                                            'OtherCurrentLiabilit',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while BalanceSheet[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = BalanceSheet[key][i]
                                                        BalanceSheet[key][i] = None
                                                    except:
                                                        if BalanceSheet[key] != None:
                                                            ARCHvalue = BalanceSheet[key]
                                                            BalanceSheet[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        CurrentLiabilities.append(ARCHvalue)
                                                        CurrentLiabilitiesRank = r
                                    r = r + 1
                                a.CurrentLiabilities = -sum(CurrentLiabilities)
                            except:
                                pass
                            #
                            # total non-current liabilities
                            try:
                                TotalNonCurrentLiabilities = []
                                NonCurrentLiabilitiesRank = None
                                r = 0
                                for key, value in BalanceSheet.items():
                                    d = key
                                    q = [
                                        'LiabilitiesNoncurrent',
                                        'NonCurrentLiabilities',
                                        'NoncurrentLiabilities',
                                        'TotalLongTermLiabilit',
                                        'TotalOtherLiabilities',
                                    ]
                                    b = [
                                        'Asset',
                                        'OtherLongTermLiabilit',
                                        'OtherNonCurrentLiabilit',
                                        'OtherNoncurrentLiabilit',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while BalanceSheet[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = BalanceSheet[key][i]
                                                    BalanceSheet[key][i] = None
                                                except:
                                                    if BalanceSheet[key] != None:
                                                        ARCHvalue = BalanceSheet[key]
                                                        BalanceSheet[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    TotalNonCurrentLiabilities.append(ARCHvalue)
                                                    NonCurrentLiabilitiesRank = r
                                    r = r + 1
                                a.NonCurrentLiabilities = -sum(TotalNonCurrentLiabilities)
                                if NonCurrentLiabilitiesRank is None:
                                    a.NonCurrentLiabilities = None
                            except:
                                pass
                            #
                            # total liabilities
                            try:
                                TotalLiabilities = []
                                LiabilitiesRank = None
                                r = 0
                                for key, value in BalanceSheet.items():
                                    d = key
                                    q = [
                                        'Liabilit',
                                    ]
                                    b = [
                                        'Asset',
                                        'Accrued',
                                        'Businesses',
                                        'ContractLiabilities',
                                        'Current',
                                        'Equity',
                                        'Lease',
                                        'LiabilitiesHeldForSale',
                                        'NonCurrent',
                                        'Noncurrent',
                                        'Other',
                                        'Miscellaneous',
                                        'Payroll',
                                        'Shareholder',
                                        'Stockholder',
                                        'Tax',
                                    ]
                                    s = 'a'
                                    for l in q:
                                        if s == 'a':
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while BalanceSheet[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = BalanceSheet[key][i]
                                                        BalanceSheet[key][i] = None
                                                    except:
                                                        if BalanceSheet[key] != None:
                                                            ARCHvalue = BalanceSheet[key]
                                                            BalanceSheet[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        TotalLiabilities.append(ARCHvalue)
                                                        LiabilitiesRank = r
                                                        s = 'z'
                                        r = r + 1
                                a.Liabilities = -sum(TotalLiabilities)
                                if LiabilitiesRank is None:
                                    a.Liabilities = None
                                else:
                                    pass
                            except:
                                pass
                            #
                            # total liabilities and stockholders' equity
                            try:
                                LiabilitiesAndStockholdersEquity = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    d = key
                                    q = [
                                        'LiabilitiesAndStockholders',
                                        'LiabilitiesAndEquity',
                                        'LiabilitiesAndShareholders',
                                        'LiabilitiesTemporaryEquity',
                                    ]
                                    b = [
                                        'Asset',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while BalanceSheet[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = BalanceSheet[key][i]
                                                    BalanceSheet[key][i] = None
                                                except:
                                                    if BalanceSheet[key] != None:
                                                        ARCHvalue = BalanceSheet[key]
                                                        BalanceSheet[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    LiabilitiesAndStockholdersEquity.append(ARCHvalue)
                                                    LiabilitiesAndStockholdersEquityRank = r
                                    r = r + 1
                                a.LiabilitiesAndStockholdersEquity = -sum(LiabilitiesAndStockholdersEquity)
                            except:
                                pass
                            #
                            # debugging
                            try:
                                if a.Liabilities is None:
                                    #
                                    if a.NonCurrentLiabilities is None:
                                        #
                                        # stockholders equity
                                        try:
                                            StockholdersEquity = []
                                            r = 0
                                            for key, value in BalanceSheet.items():
                                                d = key
                                                q = [
                                                    'TotalEquity',
                                                    'TotalShareholdersEquity',
                                                    'TotalStockholdersEquity',
                                                ]
                                                b = [
                                                    'Asset',
                                                    'Liabilit',
                                                    'Obligation',
                                                ]
                                                for l in q:
                                                    if l in d:
                                                        h = 'p'
                                                        for p in b:
                                                            u = 0
                                                            while u < len(b):
                                                                if p in d:
                                                                    h = ''
                                                                u = u + 1
                                                        if h == 'p':
                                                            try:
                                                                i = 0
                                                                while BalanceSheet[key][i] == None:
                                                                    i = i + 1
                                                                ARCHvalue = BalanceSheet[key][i]
                                                                BalanceSheet[key][i] = None
                                                            except:
                                                                if BalanceSheet[key] != None:
                                                                    ARCHvalue = BalanceSheet[key]
                                                                    BalanceSheet[key] = None
                                                                else:
                                                                    ARCHvalue = 0
                                                            if ARCHvalue != 0:
                                                                StockholdersEquity.append(ARCHvalue)
                                                r = r + 1
                                            a.StockholdersEquity = -sum(StockholdersEquity)
                                        except:
                                            pass
                                        #
                                        # liabilities
                                        a.Liabilities = a.LiabilitiesAndStockholdersEquity - a.StockholdersEquity
                                        #
                                        # non current liabilities
                                        a.NonCurrentLiabilities = a.Liabilities - a.CurrentLiabilities
                                        #
                                    else:
                                        #
                                        # non current liabilities
                                        a.Liabilities = a.CurrentLiabilities + a.NonCurrentLiabilities
                                        a.StockholdersEquity = a.LiabilitiesAndStockholdersEquity - a.Liabilities
                                    #
                                    # liabilities rank & method
                                    LiabilitiesRank = LiabilitiesAndStockholdersEquityRank
                                    NonCurrentLiabilitiesRankMethod = 'bridge'
                                    #
                                else:
                                    #
                                    # stockholders equity
                                    try:
                                        #
                                        a.StockholdersEquity = a.LiabilitiesAndStockholdersEquity - a.Liabilities
                                        #
                                        if a.NonCurrentLiabilities is None:
                                            a.NonCurrentLiabilities = a.Liabilities - a.CurrentLiabilities
                                            
                                    except:
                                        pass
                            except:
                                pass
                            #
                            # dataframe balance sheet
                            try:
                                #
                                df = pd.DataFrame({
                                    #
                                    '..': 
                                        #
                                        ['a.CurrentAssets',
                                        'a.NonCurrentAssets',
                                        'a.Assets',
                                        'a.CurrentLiabilities',
                                        'a.NonCurrentLiabilities',
                                        'a.Liabilities',
                                        'a.LiabilitiesAndStockholdersEquity'],
                                    #
                                    '.':
                                        #
                                        ['{:,}'.format(a.CurrentAssets),
                                        '{:,}'.format(a.NonCurrentAssets),
                                        '{:,}'.format(a.Assets),
                                        '{:,}'.format(a.CurrentLiabilities),
                                        '{:,}'.format(a.NonCurrentLiabilities),
                                        '{:,}'.format(a.Liabilities),
                                        '{:,}'.format(a.LiabilitiesAndStockholdersEquity)],
                                    #
                                    'rank':
                                        #
                                        [CurrentAssetsRank,
                                        NonCurrentAssetsRank,
                                        AssetsRank,
                                        CurrentLiabilitiesRank,
                                        NonCurrentLiabilitiesRank,
                                        LiabilitiesRank,
                                        LiabilitiesAndStockholdersEquityRank],
                                })
                                print(df)
                                print('\n' + 137*'-' + '\n')
                                #
                                tb.save()
                                a.save()
                            except:
                                pass
                            #
                            # anomalies attributable to the SEC
                            try:
                                #
                                print('anomalies attributable to the SEC')
                                print(137*'-' + '\n')
                                #
                                # current assets
                                try:
                                    r = 0
                                    CAA = 0
                                    f = [
                                        'TotalCash',
                                    ]
                                    for key, value in BalanceSheet.items():
                                        if r > CashRank - 1:
                                            if r < CurrentAssetsRank:
                                                d = key
                                                b = ''
                                                for g in f:
                                                    if g in d:
                                                        b = 'p'
                                                if b == '':
                                                    CAA = CAA + value
                                        r = r + 1
                                    a.AnomalyCurrentAssetsSEC = CAA - a.CurrentAssets
                                    #
                                    # dataframe 
                                    try:
                                        #
                                        df = pd.DataFrame({
                                            #
                                            'current assets': 
                                                #
                                                ['Total',
                                                'Components',
                                                'Anomaly SEC'],
                                            #
                                            '.':
                                                #
                                                ['{:,}'.format(a.CurrentAssets),
                                                '{:,}'.format(CAA),
                                                '{:,}'.format(a.AnomalyCurrentAssetsSEC)],
                                        })
                                        print(df)
                                        print(137*'-' + '\n')
                                    except:
                                        pass
                                except:
                                    pass
                                #
                                # non current assets
                                try:
                                    r = 0
                                    NCAA = 0
                                    ppepass = 0
                                    for key, value in BalanceSheet.items():
                                        d = key
                                        if r > CurrentAssetsRank:
                                            if r < AssetsRank:
                                                if ppepass == 0:
                                                    skip = ''
                                                    h = [
                                                        'Land',
                                                        'BuildingsAndLeasehold',
                                                        'BuildingsAndImprovement',
                                                        'ConstructionInProgress',
                                                        'EquipmentAndFixtures',
                                                        'LeaseholdCostsAndImprovments',
                                                        'FixturesAndEquipment',
                                                        'TotalOtherAssets',
                                                    ]
                                                    k = [
                                                        'AccumulatedA',
                                                        'AccumulatedD',
                                                    ]
                                                    for l in h:
                                                        if l in d:
                                                            skip = 'skip'
                                                    for m in k:
                                                        if m in d:
                                                            value = -abs(value)
                                                            ppepass = 1
                                                    if skip == '':
                                                        if value != None:
                                                            NCAA = NCAA + value
                                                else:
                                                    ppepass = 0
                                        r = r + 1
                                    a.AnomalyNonCurrentAssetsSEC = NCAA - a.NonCurrentAssets
                                    #
                                    # dataframe
                                    try:
                                        #
                                        df = pd.DataFrame({
                                            #
                                            'non current assets': 
                                                #
                                                ['Total',
                                                'Components',
                                                'SEC Anomaly'],
                                            #
                                            '.':
                                                #
                                                ['{:,}'.format(a.NonCurrentAssets),
                                                '{:,}'.format(NCAA),
                                                '{:,}'.format(a.AnomalyNonCurrentAssetsSEC)],
                                        })
                                        print(df)
                                    except:
                                        pass
                                    #
                                    print(137*'-' + '\n')
                                except:
                                    pass
                                #
                                # current liabilities
                                try:
                                    r = 0
                                    CLA = 0
                                    for key, value in BalanceSheet.items():
                                        d = key
                                        if r > AssetsRank:
                                            if r < CurrentLiabilitiesRank:
                                                CLA = CLA - value
                                        r = r + 1
                                    a.AnomalyCurrentLiabilitiesSEC = CLA - a.CurrentLiabilities
                                    #
                                    # dataframe
                                    try:
                                        #
                                        df = pd.DataFrame({
                                            #
                                            'current liabilities': 
                                                #
                                                ['Total',
                                                'Components',
                                                'SEC Anomaly'],
                                            #
                                            '.':
                                                #
                                                ['{:,}'.format(a.CurrentLiabilities),
                                                '{:,}'.format(CLA),
                                                '{:,}'.format(a.AnomalyCurrentLiabilitiesSEC)],
                                        })
                                        print(df)
                                    except:
                                        pass
                                    #
                                    print(137*'-' + '\n')
                                except:
                                    pass
                                #
                                # non current liabilities
                                try:
                                    if NonCurrentLiabilitiesRankMethod != 'bridge':
                                        #
                                        LiabilitiesRank = min(LiabilitiesRank , LiabilitiesAndStockholdersEquityRank)
                                        #
                                        r = 0
                                        NCLA = 0
                                        k = [
                                            'FaceValueOfLongTermDebtIncludingObligationsUnderCapitalLeasesAndFinancingObligations',
                                            'AdjustmentToReflectFairValueInterestRateHedges',
                                        ]
                                        for key, value in BalanceSheet.items():
                                            d = key
                                            if r > CurrentLiabilitiesRank:
                                                if r < LiabilitiesRank:
                                                    t = ''
                                                    for m in k:
                                                        if m in d:
                                                            t = 'n'
                                                    if t == '':
                                                        NCLA = NCLA - value
                                            r = r + 1
                                        a.AnomalyNonCurrentLiabilitiesSEC = NCLA - (a.Liabilities - a.CurrentLiabilities)
                                        #
                                        # dataframe
                                        try:
                                            #
                                            df = pd.DataFrame({
                                            #
                                            'non current liabilities': 
                                                #
                                                ['Total',
                                                'Components',
                                                'SEC Anomaly'],
                                            #
                                            '.':
                                                #
                                                ['{:,}'.format(a.NonCurrentLiabilities),
                                                '{:,}'.format(NCLA),
                                                '{:,}'.format(a.AnomalyNonCurrentLiabilitiesSEC)],
                                            })
                                            print(df)
                                        except:
                                            pass
                                        #
                                        print(137*'-' + '\n')
                                    else:
                                        a.AnomalyNonCurrentLiabilitiesSEC = 0
                                except:
                                    pass
                            except:
                                pass
                        except:
                            pass
                        #
                        # current assets components
                        try:
                            #
                            print(e.EntityRegistrantName)
                            print('current assets')
                            print(DPED)
                            print(137*'-' + '\n')
                            #
                            # short term investment
                            try:
                                ShortTermInvestments = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CashRank:
                                        if r < CurrentAssetsRank:
                                            d = key
                                            q = [
                                                'Investment',
                                                'Securities',
                                                'TradingAssets',
                                            ]
                                            b = [
                                                'AssetsCurrent',
                                                'Cash',
                                                'CurrentAssets',
                                                'DeferredTax',
                                                'DeferredIncome',
                                                'DiscontinuedOperations',
                                                'Inventor',
                                                'Prepaid',
                                                'Receivable',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ShortTermInvestments.append(ARCHvalue)
                                    r = r + 1
                                tb.ShortTermInvestments = sum(ShortTermInvestments)
                            except:
                                pass
                            #
                            # account receivable
                            try:
                                AccountsReceivable = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CashRank:
                                        if r < CurrentAssetsRank:
                                            d = key
                                            q = [
                                                'Receivable',
                                            ]
                                            b = [
                                                'AssetsCurrent',
                                                'Cash',
                                                'CurrentAssets',
                                                'DeferredTax',
                                                'DeferredIncome',
                                                'DiscontinuedOperations',
                                                'Inventor',
                                                'Investments',
                                                'Prepaid',
                                                'Securities',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            AccountsReceivable.append(ARCHvalue)
                                    r = r + 1
                                tb.AccountsReceivable = sum(AccountsReceivable)
                            except:
                                pass
                            #
                            # inventories
                            try:
                                Inventories = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CashRank:
                                        if r < CurrentAssetsRank:
                                            d = key
                                            q = [
                                                'Inventor',
                                                'Reserve',
                                            ]
                                            b = [
                                                'AssetsCurrent',
                                                'Cash',
                                                'CurrentAssets',
                                                'DeferredTax',
                                                'DeferredIncome',
                                                'DiscontinuedOperations',
                                                'Investments',
                                                'Prepaid',
                                                'Receivable',
                                                'Securities',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            Inventories.append(ARCHvalue)
                                    r = r + 1
                                tb.Inventories = sum(Inventories)
                            except:
                                pass
                            #
                            # prepaid expenses
                            try:
                                PrepaidExpenses = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CashRank:
                                        if r < CurrentAssetsRank:
                                            d = key
                                            q = [
                                                'Prepaid',
                                                'Deposit',
                                            ]
                                            b = [
                                                'AssetsCurrent',
                                                'Cash',
                                                'DeferredTax',
                                                'DeferredIncome',
                                                'DiscontinuedOperations',
                                                'Inventor',
                                                'Investments',
                                                'Receivable',
                                                'Securities',
                                                'Tax',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            PrepaidExpenses.append(ARCHvalue)
                                    r = r + 1
                                tb.PrepaidExpenses = sum(PrepaidExpenses)
                            except:
                                pass
                            #
                            # non-trade receivables
                            try:
                                NonTradeReceivables = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CashRank:
                                        if r < CurrentAssetsRank:
                                            d = key
                                            q = [
                                                'NonTradeReceivable',
                                                'OtherReceivable',
                                            ]
                                            b = [
                                                'AssetsCurrent',
                                                'Cash',
                                                'CurrentAssets',
                                                'DeferredTax',
                                                'DeferredIncome',   
                                                'DiscontinuedOperations',
                                                'Inventor',
                                                'Investments',
                                                'Prepaid',
                                                'Securities',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            NonTradeReceivables.append(ARCHvalue)
                                    r = r + 1
                                tb.NonTradeReceivables = sum(NonTradeReceivables)
                            except:
                                pass
                            #
                            # deferred tax assets current
                            try:
                                DeferredTaxAssetsCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CashRank:
                                        if r < CurrentAssetsRank:
                                            d = key
                                            q = [
                                                'DeferredTax',
                                                'DeferredIncome',
                                            ]
                                            b = [
                                                'AssetsCurrent',
                                                'Cash',
                                                'CurrentAssets', 
                                                'DiscontinuedOperations',
                                                'Inventor',
                                                'Investments',
                                                'Prepaid',
                                                'Receivable',
                                                'Securities',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DeferredTaxAssetsCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.DeferredTaxAssetsCurrent = sum(DeferredTaxAssetsCurrent)
                            except:
                                pass
                            #
                            # other current assets
                            try:
                                OtherCurrentAssets = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CashRank:
                                        if r < CurrentAssetsRank:
                                            d = key
                                            q = [
                                                'Other',
                                                'Miscellaneous',
                                            ]
                                            b = [
                                                'Cash',
                                                'DeferredTax',
                                                'DeferredIncome',
                                                'DiscontinuedOperations',
                                                'Inventor',
                                                'Investments',
                                                'Prepaid',
                                                'Receivable',
                                                'Securities',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            OtherCurrentAssets.append(ARCHvalue)
                                    r = r + 1
                                tb.OtherCurrentAssets = sum(OtherCurrentAssets)
                            except:
                                pass
                            #
                            # discontinued operations current
                            try:
                                DiscontinuedOperationsCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CashRank:
                                        if r < CurrentAssetsRank:
                                            d = key
                                            q = [
                                                'Discontinued',
                                                'AssetsHeldForSale',
                                                'AssetsOfBusinessesHeldForSale',
                                            ]
                                            b = [
                                                'AssetsCurrent',
                                                'Cash',
                                                'CurrentAssets', 
                                                'DeferredTax',
                                                'DeferredIncome',
                                                'DiscontinuedOperations',
                                                'Inventor',
                                                'Investments',
                                                'Prepaid',
                                                'Receivable',
                                                'Securities',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DiscontinuedOperationsCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.DiscontinuedOperationsCurrent = sum(DiscontinuedOperationsCurrent)
                            except:
                                pass
                            #
                            # dataframe                        
                            try:
                                df = pd.DataFrame({
                                    #
                                    '..': 
                                        #
                                        ['tb.Cash',
                                        'tb.ShortTermInvestments',
                                        'tb.AccountsReceivable',
                                        'tb.Inventories',
                                        'tb.PrepaidExpenses',
                                        'tb.NonTradeReceivables',
                                        'tb.DeferredTaxAssetsCurrent',
                                        'tb.OtherCurrentAssets',
                                        'tb.DiscontinuedOperationsCurrent'],
                                    #
                                    '.':
                                        #
                                        ['{:,}'.format(tb.Cash),
                                        '{:,}'.format(tb.ShortTermInvestments),
                                        '{:,}'.format(tb.AccountsReceivable),
                                        '{:,}'.format(tb.Inventories),
                                        '{:,}'.format(tb.PrepaidExpenses),
                                        '{:,}'.format(tb.NonTradeReceivables),
                                        '{:,}'.format(tb.DeferredTaxAssetsCurrent),
                                        '{:,}'.format(tb.OtherCurrentAssets),
                                        '{:,}'.format(tb.DiscontinuedOperationsCurrent)],
                                })
                                print(df)
                                print(137*'-' + '\n')
                            except:
                                pass
                        except:
                            pass
                        #
                        # non-current assets components
                        try:
                            #
                            print(e.EntityRegistrantName)
                            print('non-current assets')
                            print(DPED)
                            print(137*'-' + '\n')
                            #
                            # long term receivables
                            try:
                                LongTermReceivables = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        if r < AssetsRank:
                                            d = key
                                            q = [
                                                'Receivables',
                                                'NotesReceivable',
                                            ]
                                            b = [
                                                'ShortTerm',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            LongTermReceivables.append(ARCHvalue)
                                    r = r + 1
                                tb.LongTermReceivables = sum(LongTermReceivables)
                            except:
                                pass
                            #
                            # deferred charges
                            try:
                                DeferredCharges = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        if r < AssetsRank:
                                            d = key
                                            q = [
                                                'DeferredCharges',
                                                'DeferredCost',
                                            ]
                                            b = [
                                                'ShortTerm',
                                                'Tax',
                                                'Income',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DeferredCharges.append(ARCHvalue)
                                    r = r + 1
                                tb.DeferredCharges = sum(DeferredCharges)
                            except:
                                pass
                            #
                            # investments
                            try:
                                Investments = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        if r < AssetsRank:
                                            d = key
                                            q = [
                                                'Investment',
                                                'Securities',
                                                'RestrictedCash',
                                            ]
                                            b = [
                                                'ShortTerm',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            Investments.append(ARCHvalue)
                                    r = r + 1
                                tb.Investments = sum(Investments)
                            except:
                                pass
                            #
                            # property plant and equipments
                            try:
                                PropertyPlantAndEquipment = []
                                r = 0
                                ppe = ''
                                ppepass = ''
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        if r < AssetsRank:
                                            d = key
                                            x = ''
                                            q = [
                                                'Property',
                                                'AccumulatedA',
                                                'AccumulatedD',
                                            ]
                                            b = [
                                                'UnderCapitalLease',
                                            ]
                                            m = [
                                                'AccumulatedA',
                                                'AccumulatedD',
                                            ]
                                            k = [
                                                'Property',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    for j in k:
                                                        for y in m:
                                                            if y in d:
                                                                x = 'p'
                                                    if x == '' :
                                                        if j in d:
                                                            if ppe == 'once':
                                                                ppe = 'twice'
                                                                ppepass = 'no'
                                                            elif ppe == '':
                                                                ppe = 'once'
                                                    if ppe == 'once':
                                                        ppepass = ''
                                                    if h == 'p':
                                                        if ppepass == '':
                                                            try:
                                                                i = 0
                                                                while BalanceSheet[key][i] == None:
                                                                    i = i + 1
                                                                ARCHvalue = BalanceSheet[key][i]
                                                                BalanceSheet[key][i] = None
                                                            except:
                                                                if BalanceSheet[key] != None:
                                                                    ARCHvalue = BalanceSheet[key]
                                                                    BalanceSheet[key] = None
                                                                else:
                                                                    ARCHvalue = 0
                                                            for n in m:
                                                                if n in d:
                                                                    ARCHvalue = -abs(ARCHvalue) 
                                                            if ARCHvalue != 0:
                                                                PropertyPlantAndEquipment.append(ARCHvalue)
                                    r = r + 1
                                tb.PropertyPlantAndEquipment = sum(PropertyPlantAndEquipment)
                            except:
                                pass
                            #
                            # operating lease right of use assets
                            try:
                                OperatingLeaseRightOfUseAssets = []
                                r = 0
                                ppe = ''
                                ppepass = ''
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        if r < AssetsRank:
                                            d = key
                                            x = ''
                                            q = [
                                                'AccumulatedA',
                                                'AccumulatedD',
                                                'OperatingLease',
                                                'OperatingRight',
                                                'RightOfUse',
                                            ]
                                            b = [
                                                'Liabilit',
                                                'Due',
                                                'Finance',
                                                'Obligations',
                                                'Buildings',
                                            ]
                                            m = [
                                                'AccumulatedA',
                                                'AccumulatedD',
                                            ]
                                            k = [
                                                'OperatingLease',
                                                'OperatingRight',
                                                'RightOfUse',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    for j in k:
                                                        for y in m:
                                                            if y in d:
                                                                x = 'p'
                                                    if x == '' :
                                                        if j in d:
                                                            if ppe == 'once':
                                                                ppe = 'twice'
                                                                ppepass = 'no'
                                                            elif ppe == '':
                                                                ppe = 'once'
                                                    if ppe == 'once':
                                                        ppepass = ''
                                                    if h == 'p':
                                                        if ppepass == '':
                                                            try:
                                                                i = 0
                                                                while BalanceSheet[key][i] == None:
                                                                    i = i + 1
                                                                ARCHvalue = BalanceSheet[key][i]
                                                                BalanceSheet[key][i] = None
                                                            except:
                                                                if BalanceSheet[key] != None:
                                                                    ARCHvalue = BalanceSheet[key]
                                                                    BalanceSheet[key] = None
                                                                else:
                                                                    ARCHvalue = 0
                                                            if ARCHvalue != 0:
                                                                OperatingLeaseRightOfUseAssets.append(ARCHvalue)
                                    r = r + 1
                                tb.OperatingLeaseRightOfUseAssets = sum(OperatingLeaseRightOfUseAssets)
                            except:
                                pass
                            #
                            # finance lease right of use assets
                            try:
                                FinanceLeaseRightOfUseAssets = []
                                r = 0
                                ppe = ''
                                ppepass = ''
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        if r < AssetsRank:
                                            d = key
                                            q = [
                                                'FinanceLease',
                                                'CapitalLease',
                                            ]
                                            b = [
                                                'Due',
                                                'Liabilit',
                                            ]
                                            m = [
                                                'AccumulatedA',
                                                'AccumulatedD',
                                            ]
                                            k = [
                                                'FinanceLease',
                                                'CapitalLease',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    for j in k:
                                                        for y in m:
                                                            if y in d:
                                                                x = 'p'
                                                    if x == '' :
                                                        if j in d:
                                                            if ppe == 'once':
                                                                ppe = 'twice'
                                                                ppepass = 'no'
                                                            elif ppe == '':
                                                                ppe = 'once'
                                                    if ppe == 'once':
                                                        ppepass = ''
                                                    if h == 'p':
                                                        if ppepass == '':
                                                            try:
                                                                i = 0
                                                                while BalanceSheet[key][i] == None:
                                                                    i = i + 1
                                                                ARCHvalue = BalanceSheet[key][i]
                                                                BalanceSheet[key][i] = None
                                                            except:
                                                                if BalanceSheet[key] != None:
                                                                    ARCHvalue = BalanceSheet[key]
                                                                    BalanceSheet[key] = None
                                                                else:
                                                                    ARCHvalue = 0
                                                            if ARCHvalue != 0:
                                                                FinanceLeaseRightOfUseAssets.append(ARCHvalue)
                                    r = r + 1
                                tb.FinanceLeaseRightOfUseAssets = sum(FinanceLeaseRightOfUseAssets)
                            except:
                                pass
                            #
                            # intangible assets
                            try:
                                IntangibleAssets = []
                                r = 0
                                x = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        if r < AssetsRank:
                                            d = key
                                            q = [
                                                'Intangible',
                                                'FranchiseRight',
                                                'Trademarks',
                                                'InProcessReasearch',
                                            ]
                                            b = [
                                                'Liabilit',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            IntangibleAssets.append(ARCHvalue)
                                    r = r + 1
                                tb.IntangibleAssets = sum(IntangibleAssets)
                            except:
                                pass
                            #
                            # goodwill
                            try:
                                Goodwill = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        if r < AssetsRank:
                                            d = key
                                            q = [
                                                'Goodwill',
                                            ]
                                            b = [
                                                'Liabilit',
                                                'Intangible',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            Goodwill.append(ARCHvalue)
                                    r = r + 1
                                tb.Goodwill = sum(Goodwill)
                            except:
                                pass
                            #
                            # deferred tax assets non current
                            try:
                                DeferredTaxAssetsNonCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        if r < AssetsRank:
                                            d = key
                                            q = [
                                                'DeferredTax',
                                                'DeferredIncome',
                                            ]
                                            b = [
                                                'Liabilit',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DeferredTaxAssetsNonCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.DeferredTaxAssetsNonCurrent = sum(DeferredTaxAssetsNonCurrent)
                            except:
                                pass
                            #
                            # Defined Benefit Pension And Other Similar Plans
                            try:
                                DefinedBenefitPensionAndOtherSimilarPlans = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        if r < AssetsRank:
                                            d = key
                                            q = [
                                                'Pension',
                                            ]
                                            b = [
                                                'Expense',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DefinedBenefitPensionAndOtherSimilarPlans.append(ARCHvalue)
                                    r = r + 1
                                tb.DefinedBenefitPensionAndOtherSimilarPlans = sum(DefinedBenefitPensionAndOtherSimilarPlans)
                            except:
                                pass
                            #
                            # other non-current assets
                            try:
                                OtherNonCurrentAssets = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentAssetsRank:
                                        if r < AssetsRank:
                                            d = key
                                            q = [
                                                'RestrictedCash',
                                                'OtherAssets',
                                                'OtherLongTermAsset',
                                                'OtherNonCurrentAsset',
                                                'OtherNoncurrentAsset',
                                                'Miscellaneous',
                                                'Sundry',
                                            ]
                                            b = [
                                                'Liabilit',
                                                'Total',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            OtherNonCurrentAssets.append(ARCHvalue)
                                    r = r + 1
                                tb.OtherNonCurrentAssets = sum(OtherNonCurrentAssets)
                            except:
                                pass
                            #
                            # dataframe                        
                            try:
                                df = pd.DataFrame({
                                    #
                                    '..': 
                                        #
                                        ['tb.LongTermReceivables',
                                        'tb.DeferredCharges',
                                        'tb.Investments',
                                        'tb.PropertyPlantAndEquipment',
                                        'tb.OperatingLeaseRightOfUseAssets',
                                        'tb.FinanceLeaseRightOfUseAssets',
                                        'tb.IntangibleAssets',
                                        'tb.Goodwill',
                                        'tb.DeferredTaxAssetsNonCurrent',
                                        'tb.DefinedBenefitPensionAndOtherSimilarPlans',
                                        'tb.OtherNonCurrentAssets'],
                                    #
                                    '.':
                                        #
                                        ['{:,}'.format(tb.LongTermReceivables),
                                        '{:,}'.format(tb.DeferredCharges),
                                        '{:,}'.format(tb.Investments),
                                        '{:,}'.format(tb.PropertyPlantAndEquipment),
                                        '{:,}'.format(tb.OperatingLeaseRightOfUseAssets),
                                        '{:,}'.format(tb.FinanceLeaseRightOfUseAssets),
                                        '{:,}'.format(tb.IntangibleAssets),
                                        '{:,}'.format(tb.Goodwill),
                                        '{:,}'.format(tb.DeferredTaxAssetsNonCurrent),
                                        '{:,}'.format(tb.DefinedBenefitPensionAndOtherSimilarPlans),
                                        '{:,}'.format(tb.OtherNonCurrentAssets)],
                                })
                                print(df)
                                print(137*'-' + '\n')
                            except:
                                pass
                        except:
                            pass
                        #                   
                        # current liabilities components
                        try:
                            print(e.EntityRegistrantName)
                            print('current liabilities')
                            print(DPED)
                            print(137*'-' + '\n')
                            #
                            # accounts payable and accrued liabilities
                            try:
                                AccountsPayableAndAccruedLiabilities = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'Accrued',
                                                'Payable',
                                                'SalesRebatesAndDiscounts',
                                                'Warranty',
                                            ]
                                            b = [
                                                'Benefit',
                                                'Deferred',
                                                'Employee',
                                                'Tax',
                                                'Dividend',
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                                'Compensation',
                                                'Payroll',
                                                'Salaries',
                                                'Wages',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            AccountsPayableAndAccruedLiabilities.append(ARCHvalue)
                                    r = r + 1
                                tb.AccountsPayableAndAccruedLiabilities = -sum(AccountsPayableAndAccruedLiabilities)
                            except:
                                pass
                            #
                            # employee compensation current
                            try:
                                EmployeeCompensationCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'AccruedBenefitsAndWithholdings',
                                                'Compensation',
                                                'Payroll',
                                                'Salaries',
                                                'Wages',
                                            ]
                                            b = [
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            EmployeeCompensationCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.EmployeeCompensationCurrent = -sum(EmployeeCompensationCurrent)
                            except:
                                pass
                            #
                            # operating leases current
                            try:
                                OperatingLeasesCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'LeaseLiabilit',
                                                'OperatingLeaseObligation',
                                            ]
                                            b = [
                                                'Finance',
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            OperatingLeasesCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.OperatingLeasesCurrent = -sum(OperatingLeasesCurrent)
                            except:
                                pass
                            #
                            # finance leases current
                            try:
                                FinanceLeasesCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'FinanceLeaseLiabilities',
                                                'FinanceLeaseObligation',
                                                'CapitalLease',
                                            ]
                                            b = [
                                                'Assets',
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            FinanceLeasesCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.FinanceLeasesCurrent = -sum(FinanceLeasesCurrent)
                            except:
                                pass
                            #
                            # deferred revenue and deposits current
                            try:
                                DeferredRevenueAndDepositsCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'ContractWithCustomerLiabilit',
                                                'DeferredIncome',
                                                'DeferredRevenue',
                                                'Deposit',
                                                'Guarantee',
                                            ]
                                            b = [
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DeferredRevenueAndDepositsCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.DeferredRevenueAndDepositsCurrent = -sum(DeferredRevenueAndDepositsCurrent)
                            except:
                                pass
                            #
                            # accrued tax liabilities
                            try:
                                AccruedTaxLiabilities = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'Taxes',
                                            ]
                                            b = [
                                                'Deferred',
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            AccruedTaxLiabilities.append(ARCHvalue)
                                    r = r + 1
                                tb.AccruedTaxLiabilities = -sum(AccruedTaxLiabilities)
                            except:
                                pass
                            #
                            # deferred tax liabilities
                            try:
                                DeferredTaxLiabilitiesCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'Deferred',
                                            ]
                                            b = [
                                                'Accrued',
                                                'Charges',
                                                'Expense',
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DeferredTaxLiabilitiesCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.DeferredTaxLiabilitiesCurrent = -sum(DeferredTaxLiabilitiesCurrent)
                            except:
                                pass
                            #
                            # commercial papers
                            try:
                                CommercialPapers = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'CommercialPaper',
                                            ]
                                            b = [
                                                'Accrued',
                                                'Deferred',
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            CommercialPapers.append(ARCHvalue)
                                    r = r + 1
                                tb.CommercialPapers = -sum(CommercialPapers)
                            except:
                                pass
                            #
                            # short term borrowings
                            try:
                                ShortTermBorrowings = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'ShortTermBorrowing',
                                                'Revolver',
                                                'Revolving',
                                            ]
                                            b = [
                                                'Accrued',
                                                'Deferred',
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ShortTermBorrowings.append(ARCHvalue)
                                    r = r + 1
                                tb.ShortTermBorrowings = -sum(ShortTermBorrowings)
                            except:
                                pass
                            #
                            # other current liabilities
                            try:
                                OtherCurrentLiabilities = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'OtherCurrentLiabilit',
                                                'SelfInsuranceReserves',
                                            ]
                                            b = [
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            OtherCurrentLiabilities.append(ARCHvalue)
                                    r = r + 1
                                tb.OtherCurrentLiabilities = -sum(OtherCurrentLiabilities)
                            except:
                                pass
                            #
                            # discontinued operations
                            try:
                                DiscontinuedOperationsLiabilitiesCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'DiscontinuedOperation',
                                                'HeldForSale',
                                            ]
                                            b = [
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DiscontinuedOperationsLiabilitiesCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.DiscontinuedOperationsLiabilitiesCurrent = -sum(DiscontinuedOperationsLiabilitiesCurrent)
                            except:
                                pass
                            #
                            # dividend payable
                            try:
                                DividendsPayable = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'DividendsPayable',
                                                'DividendPayable',
                                            ]
                                            b = [
                                                'LongTerm',
                                                'NonCurrent',
                                                'Noncurrent',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DividendsPayable.append(ARCHvalue)
                                    r = r + 1
                                tb.DividendsPayable = -sum(DividendsPayable)
                            except:
                                pass
                            #
                            # short term portion of long term debt
                            try:
                                ShortTermPortionOfLongTermDebt = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > AssetsRank:
                                        if r < CurrentLiabilitiesRank:
                                            d = key
                                            q = [
                                                'Debt',
                                                'CorporateBorrowings',
                                                'Loan',
                                            ]
                                            b = [
                                                'Asset',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ShortTermPortionOfLongTermDebt.append(ARCHvalue)
                                    r = r + 1
                                tb.ShortTermPortionOfLongTermDebt = -sum(ShortTermPortionOfLongTermDebt)
                            except:
                                pass
                            #
                            # dataframe                        
                            try:
                                df = pd.DataFrame({
                                    #
                                    '..': 
                                        #
                                        ['tb.AccountsPayableAndAccruedLiabilities',
                                        'tb.EmployeeCompensationCurrent',
                                        'tb.OperatingLeasesCurrent',
                                        'tb.FinanceLeasesCurrent',
                                        'tb.AccruedTaxLiabilities',
                                        'tb.DeferredTaxLiabilitiesCurrent',
                                        'tb.CommercialPapers',
                                        'tb.ShortTermBorrowings',
                                        'tb.OtherCurrentLiabilities',
                                        'tb.DiscontinuedOperationsLiabilitiesCurrent',
                                        'tb.DividendsPayable',
                                        'tb.ShortTermPortionOfLongTermDebt'],
                                    #
                                    '.':
                                        #
                                        ['{:,}'.format(tb.AccountsPayableAndAccruedLiabilities),
                                        '{:,}'.format(tb.EmployeeCompensationCurrent),
                                        '{:,}'.format(tb.OperatingLeasesCurrent),
                                        '{:,}'.format(tb.FinanceLeasesCurrent),
                                        '{:,}'.format(tb.AccruedTaxLiabilities),
                                        '{:,}'.format(tb.DeferredTaxLiabilitiesCurrent),
                                        '{:,}'.format(tb.CommercialPapers),
                                        '{:,}'.format(tb.ShortTermBorrowings),
                                        '{:,}'.format(tb.OtherCurrentLiabilities),
                                        '{:,}'.format(tb.DiscontinuedOperationsLiabilitiesCurrent),
                                        '{:,}'.format(tb.DividendsPayable),
                                        '{:,}'.format(tb.ShortTermPortionOfLongTermDebt)],
                                })
                                print(df)
                                print(137*'-' + '\n')
                            except:
                                pass
                        except:
                            pass
                        #                   
                        # non-current liabilities components
                        try:
                            #
                            print(e.EntityRegistrantName)
                            print('non-current liabilities')
                            print(DPED)
                            print(137*'-' + '\n')
                            #
                            # long-term debt
                            try:
                                LongTermDebt = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        if r < min(LiabilitiesRank , LiabilitiesAndStockholdersEquityRank):
                                            d = key
                                            q = [
                                                'Debt',
                                                'CorporateBorrowings',
                                            ]
                                            b = [
                                                'Asset',
                                                'Short',
                                                'FaceValueOfLongTermDebtIncludingObligationsUnderCapitalLeasesAndFinancingObligations',
                                                'AdjustmentToReflectFairValueInterestRateHedges',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            LongTermDebt.append(ARCHvalue)
                                    r = r + 1
                                tb.LongTermDebt = -sum(LongTermDebt)
                            except:
                                pass
                            #
                            # retirement benefits
                            try:
                                RetirementBenefits = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        if r < min(LiabilitiesRank , LiabilitiesAndStockholdersEquityRank):
                                            d = key
                                            q = [
                                                'Pension',
                                                'PostretirementBenefit',
                                                'RetirementBenefit',
                                            ]
                                            b = [
                                                'Asset',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            RetirementBenefits.append(ARCHvalue)
                                    r = r + 1
                                tb.RetirementBenefits = -sum(RetirementBenefits)
                            except:
                                pass
                            #
                            # operating leases non-current
                            try:
                                OperatingLeasesNonCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        if r < min(LiabilitiesRank , LiabilitiesAndStockholdersEquityRank):
                                            d = key
                                            q = [
                                                'Lease',
                                            ]
                                            b = [
                                                'Asset',
                                                'Buildings',
                                                'Debt',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            OperatingLeasesNonCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.OperatingLeasesNonCurrent = -sum(OperatingLeasesNonCurrent)
                            except:
                                pass
                            #
                            # finance leases non-current
                            try:
                                FinanceLeasesNonCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        if r < min(LiabilitiesRank , LiabilitiesAndStockholdersEquityRank):
                                            d = key
                                            q = [
                                                'FinanceLeaseObligation',
                                                'CapitalLease',
                                            ]
                                            b = [
                                                'Asset',
                                                'Debt',
                                                'Right',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            FinanceLeasesNonCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.FinanceLeasesNonCurrent = -sum(FinanceLeasesNonCurrent)
                            except:
                                pass
                            #
                            # deferred revenue and deposits non-current
                            try:
                                DeferredRevenueAndDepositsNonCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        if r < min(LiabilitiesRank , LiabilitiesAndStockholdersEquityRank):
                                            d = key
                                            q = [
                                                'DeferredRevenue',
                                                'ContractLiabilities',
                                                'Guarantee',
                                            ]
                                            b = [
                                                'Asset',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DeferredRevenueAndDepositsNonCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.DeferredRevenueAndDepositsNonCurrent = -sum(DeferredRevenueAndDepositsNonCurrent)
                            except:
                                pass
                            #
                            # Accrued Tax Liabilities Non Current
                            try:
                                AccruedTaxLiabilitiesNonCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        if r < min(LiabilitiesRank , LiabilitiesAndStockholdersEquityRank):
                                            d = key
                                            q = [
                                                'IncomeTaxesPayable',
                                                'LongTermIncomeTaxes',
                                                'Warranty',
                                            ]
                                            b = [
                                                'Asset',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            AccruedTaxLiabilitiesNonCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.AccruedTaxLiabilitiesNonCurrent = -sum(AccruedTaxLiabilitiesNonCurrent)
                            except:
                                pass
                            #
                            # deferred Tax Liabilities Non Current
                            try:
                                DeferredTaxLiabilitiesNonCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        if r < min(LiabilitiesRank , LiabilitiesAndStockholdersEquityRank):
                                            d = key
                                            q = [
                                                'DeferredIncomeTax',
                                                'DeferredTaxLiabilit',
                                            ]
                                            b = [
                                                'Asset',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DeferredTaxLiabilitiesNonCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.DeferredTaxLiabilitiesNonCurrent = -sum(DeferredTaxLiabilitiesNonCurrent)
                            except:
                                pass
                            #
                            # other non-current liabilities
                            try:
                                OtherNonCurrentLiabilities = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        if r < min(LiabilitiesRank , LiabilitiesAndStockholdersEquityRank):
                                            d = key
                                            q = [
                                                'OtherLongTermLiabilities',
                                                'OtherNonCurrentLiabilit',
                                                'OtherNoncurrentLiabilit',
                                                'OtherLiabilities',
                                                'ExhibitorServicesAgreement',
                                            ]
                                            b = [
                                                'Asset',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            OtherNonCurrentLiabilities.append(ARCHvalue)
                                    r = r + 1
                                tb.OtherNonCurrentLiabilities = -sum(OtherNonCurrentLiabilities)
                            except:
                                pass
                            #
                            # discontinued operation non current liabilities
                            try:
                                DiscontinuedOperationsLiabilitiesNonCurrent = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        if r < min(LiabilitiesRank , LiabilitiesAndStockholdersEquityRank):
                                            d = key
                                            q = [
                                                'NoncurrentLiabilitiesOfDiscontinuedOperations',
                                                'NonCurrentLiabilitiesOfDiscontinuedOperations',
                                                'LiabilitiesHeldForSale',
                                            ]
                                            b = [
                                                'Asset',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while BalanceSheet[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = BalanceSheet[key][i]
                                                            BalanceSheet[key][i] = None
                                                        except:
                                                            if BalanceSheet[key] != None:
                                                                ARCHvalue = BalanceSheet[key]
                                                                BalanceSheet[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            DiscontinuedOperationsLiabilitiesNonCurrent.append(ARCHvalue)
                                    r = r + 1
                                tb.DiscontinuedOperationsLiabilitiesNonCurrent = -sum(DiscontinuedOperationsLiabilitiesNonCurrent)
                            except:
                                pass
                            #
                            # dataframe
                            try:
                                df = pd.DataFrame({
                                    #
                                    '..': 
                                        #
                                        ['tb.LongTermDebt',
                                        'tb.RetirementBenefits',
                                        'tb.OperatingLeasesNonCurrent',
                                        'tb.FinanceLeasesNonCurrent',
                                        'tb.DeferredRevenueAndDepositsNonCurrent',
                                        'tb.AccruedTaxLiabilitiesNonCurrent',
                                        'tb.DeferredTaxLiabilitiesNonCurrent',
                                        'tb.OtherNonCurrentLiabilities',
                                        'tb.DiscontinuedOperationsLiabilitiesNonCurrent'],
                                    #
                                    '.':
                                        #
                                        ['{:,}'.format(tb.LongTermDebt),
                                        '{:,}'.format(tb.RetirementBenefits),
                                        '{:,}'.format(tb.OperatingLeasesNonCurrent),
                                        '{:,}'.format(tb.FinanceLeasesNonCurrent),
                                        '{:,}'.format(tb.DeferredRevenueAndDepositsNonCurrent),
                                        '{:,}'.format(tb.AccruedTaxLiabilitiesNonCurrent),
                                        '{:,}'.format(tb.DeferredTaxLiabilitiesNonCurrent),
                                        '{:,}'.format(tb.OtherNonCurrentLiabilities),
                                        '{:,}'.format(tb.DiscontinuedOperationsLiabilitiesNonCurrent)],
                                })
                                print(df)
                                print(137*'-' + '\n')
                            except:
                                pass
                        except:
                            pass
                        #                   
                        # shareholders' equity components
                        try:
                            print(e.EntityRegistrantName)
                            print('shareholders equity - balance sheets')
                            print(DPED)
                            print(137*'-' + '\n')
                            #
                            # common shares
                            try:
                                CommonShares = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        d = key
                                        q = [
                                            'AdditionalCapital',
                                            'AdditionalPaidInCapital',
                                            'CapitalInExcessOfParValue',
                                            'CapitalSurplus',
                                            'CommonShares',
                                            'CommonStock',
                                        ]
                                        b = [
                                            'Asset',
                                            'Dividend',
                                            'Liabilit',
                                            'Obligation',
                                            'Treasury',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while BalanceSheet[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = BalanceSheet[key][i]
                                                        BalanceSheet[key][i] = None
                                                    except:
                                                        if value != None:
                                                            ARCHvalue = BalanceSheet[key]
                                                            BalanceSheet[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        CommonShares.append(ARCHvalue)
                                    r = r + 1
                                a.CommonShares = -sum(CommonShares)
                            except:
                                pass
                            #
                            # retained earnings
                            try:
                                RetainedEarnings = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        d = key
                                        q = [
                                            'Earning',
                                            'AccumulatedDeficit',
                                            'RetainedDeficit',
                                        ]
                                        b = [
                                            'Asset',
                                            'Liabilit',
                                            'Obligation',
                                            'Treasury',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while BalanceSheet[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = BalanceSheet[key][i]
                                                        BalanceSheet[key][i] = None
                                                    except:
                                                        if BalanceSheet[key] != None:
                                                            ARCHvalue = BalanceSheet[key]
                                                            BalanceSheet[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        RetainedEarnings.append(ARCHvalue)
                                    r = r + 1
                                a.RetainedEarnings = -sum(RetainedEarnings)
                            except:
                                pass
                            #
                            # accumulated other comprehensive income
                            try:
                                AccumulatedOtherComprehensiveIncome = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        d = key
                                        q = [
                                            'AccumulatedOtherComprehensive',
                                        ]
                                        b = [
                                            'Asset',
                                            'Liabilit',
                                            'Obligation',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while BalanceSheet[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = BalanceSheet[key][i]
                                                        BalanceSheet[key][i] = None
                                                    except:
                                                        if BalanceSheet[key] != None:
                                                            ARCHvalue = BalanceSheet[key]
                                                            BalanceSheet[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        AccumulatedOtherComprehensiveIncome.append(ARCHvalue)
                                    r = r + 1
                                a.AccumulatedOtherComprehensiveIncome = -sum(AccumulatedOtherComprehensiveIncome)
                            except:
                                pass
                            #
                            # treasury shares
                            try:
                                TreasuryShares = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        d = key
                                        q = [
                                            'Treasury',
                                        ]
                                        b = [
                                            'Asset',
                                            'Employee',
                                            'Liabilit',
                                            'NonControlling',
                                            'Noncontrolling',
                                            'Obligation',
                                            'RetainedEarnings',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while BalanceSheet[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = BalanceSheet[key][i]
                                                        BalanceSheet[key][i] = None
                                                    except:
                                                        if BalanceSheet[key] != None:
                                                            ARCHvalue = BalanceSheet[key]
                                                            BalanceSheet[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        TreasuryShares.append(ARCHvalue)
                                    r = r + 1
                                a.TreasuryShares = -sum(TreasuryShares)
                            except:
                                pass
                            #
                            # employee benefit trust
                            try:
                                EmployeeBenefitTrust = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        d = key
                                        q = [
                                            'EmployeeBenefitTrust',
                                        ]
                                        b = [
                                            'Asset',
                                            'Liabilit',
                                            'Obligation',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while BalanceSheet[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = BalanceSheet[key][i]
                                                        BalanceSheet[key][i] = None
                                                    except:
                                                        if BalanceSheet[key] != None:
                                                            ARCHvalue = BalanceSheet[key]
                                                            BalanceSheet[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        EmployeeBenefitTrust.append(ARCHvalue)
                                    r = r + 1
                                a.EmployeeBenefitTrust = -sum(EmployeeBenefitTrust)
                            except:
                                pass
                            #
                            # non controlling interests
                            try:
                                NonControllingInterests = []
                                r = 0
                                for key, value in BalanceSheet.items():
                                    if r > CurrentLiabilitiesRank:
                                        d = key
                                        q = [
                                            'NoncontrollingInterest',
                                            'RedeemableNonControllingInterestInSubsidiaries',
                                        ]
                                        b = [
                                            'Asset',
                                            'Liabilit',
                                            'Obligation',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while BalanceSheet[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = BalanceSheet[key][i]
                                                        BalanceSheet[key][i] = None
                                                    except:
                                                        if BalanceSheet[key] != None:
                                                            ARCHvalue = BalanceSheet[key]
                                                            BalanceSheet[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        NonControllingInterests.append(ARCHvalue)
                                    r = r + 1
                                a.NonControllingInterests = -sum(NonControllingInterests)
                            except:
                                pass
                            #
                            # dataframe
                            try:
                                df = pd.DataFrame({
                                    #
                                    '..': 
                                        #
                                        ['a.CommonShares',
                                        'a.RetainedEarnings',
                                        'a.AccumulatedOtherComprehensiveIncome',
                                        'a.TreasuryShares',
                                        'a.EmployeeBenefitTrust',
                                        'a.NonControllingInterests'],
                                    #
                                    '.':
                                        #
                                        ['{:,}'.format(a.CommonShares),
                                        '{:,}'.format(a.RetainedEarnings),
                                        '{:,}'.format(a.AccumulatedOtherComprehensiveIncome),
                                        '{:,}'.format(a.TreasuryShares),
                                        '{:,}'.format(a.EmployeeBenefitTrust),
                                        '{:,}'.format(a.NonControllingInterests)],
                                })
                                print(df)
                                print(137*'-' + '\n')
                            except:
                                pass
                        except:
                            pass
                    except:
                        pass
                    #
                    # income statement
                    try:
                        print(e.EntityRegistrantName)
                        print('income statement')
                        print(DPED)
                        print(137*'-' + '\n')
                        #
                        # net income
                        try:
                            NetIncome = []
                            NetIncomeRank = None
                            r = 0
                            s = 'a'
                            for key, value in IncomeStatement.items():
                                d = key
                                q = [
                                    'Loss',
                                    'NetIncome',
                                    'NetEarning',
                                ]
                                b = [
                                    'Attributable',
                                    'ContinuingOperations',
                                    'CostOfGoods',
                                    'CostOfOperations',
                                    'Debt',
                                    'DiscontinuedOperation',
                                    'EquityIncome(Loss)Net',
                                    'Gain',
                                    'Income(Loss)FromOperations',
                                    'LossFromOperations',
                                    'NonConsolidatedEntities',
                                    'Operating',
                                    'Other',
                                    'Miscellaneous',
                                    'PerShare',
                                    'Research',
                                    'Revenue',
                                    'Sales',
                                    'Tax',
                                ]
                                for l in q:
                                    if s == 'a':
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while IncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = IncomeStatement[key][i]
                                                    IncomeStatement[key][i] = None
                                                except:
                                                    if IncomeStatement[key] != None:
                                                        ARCHvalue = IncomeStatement[key]
                                                        IncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    NetIncome.append(ARCHvalue)
                                                    s = 'z'
                                                    NetIncomeRank = r
                                r = r + 1
                            a.NetIncome = -sum(NetIncome)
                        except:
                            pass
                        #
                        # gross margin
                        try:
                            GrossMargin = []
                            GrossMarginRank = 10
                            r = 0
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    d = key
                                    q = [
                                        'GrossMargin',
                                        'GrossProfit',
                                    ]
                                    b = [
                                        'DiscontinuedOperation',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while IncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = value[i]
                                                    IncomeStatement[key][i] = None
                                                except:
                                                    if IncomeStatement[key] != None:
                                                        ARCHvalue = IncomeStatement[key]
                                                        IncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    GrossMargin.append(ARCHvalue)
                                                    GrossMarginRank = r
                                r = r + 1
                            a.GrossMargin = -abs(sum(GrossMargin))
                        except:
                            pass
                        #
                        # total sales
                        try:
                            Sales = []
                            SalesRank = None
                            r = 0
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    if r < GrossMarginRank:
                                            d = key
                                            q = [
                                                'TotalRevenue',
                                                'TotalNetRevenue',
                                            ]
                                            b = [
                                                'Cost',
                                                'MarketingAndSales',
                                            ]
                                            s = 'a'
                                            for l in q:
                                                if s == 'a':
                                                    if l in d:
                                                        h = 'p'
                                                        for p in b:
                                                            u = 0
                                                            while u < len(b):
                                                                if p in d:
                                                                    h = ''
                                                                u = u + 1
                                                        if h == 'p':
                                                            try:
                                                                i = 0
                                                                while IncomeStatement[key][i] == None:
                                                                    i = i + 1
                                                                ARCHvalue = IncomeStatement[key][i]
                                                                IncomeStatement[key][i] = None
                                                            except:
                                                                if IncomeStatement[key] != None:
                                                                    ARCHvalue = IncomeStatement[key]
                                                                    IncomeStatement[key] = None
                                                                else:
                                                                    ARCHvalue = 0
                                                            if ARCHvalue != 0:
                                                                Sales.append(ARCHvalue)
                                                                s = 'z'
                                r = r + 1
                            a.Sales = -sum(Sales)
                        except:
                            pass
                        #
                        # total cost of sales
                        try:
                            CostOfSales = []
                            r = 0
                            CostOfSalesRank = None
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    if r < GrossMarginRank:
                                        d = key
                                        q = [
                                            'AmortizationOfPurchasedIntagible',
                                            'FilmExhibitionCost',
                                            'FoodAndBeverageCost',
                                            'Merchandise',
                                            'Occupancy',
                                            'OperatingExpense',
                                            'Payroll',
                                            'Rent',
                                            'TotalCost',
                                            'TotalNetCost',
                                        ]
                                        b = [
                                            'CostsAndExpenses',
                                            'CostsExpensesAndOther',
                                            'OperatingExpenses',
                                            'MarketingAndSales',
                                            'MergerAcquisition',
                                            'TotalCostsAndExpenses',
                                            'TotalOperatingCostsAndExpenses',
                                        ]
                                        s = 'a'
                                        for l in q:
                                            if s == 'a':
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while IncomeStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = IncomeStatement[key][i]
                                                            IncomeStatement[key][i] = None
                                                        except:
                                                            if IncomeStatement[key] != None:
                                                                ARCHvalue = IncomeStatement[key]
                                                                IncomeStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            CostOfSales.append(ARCHvalue)
                                                            CostOfSalesRank = r
                                                            s = 'z'
                                r = r + 1
                            a.CostOfSales = sum(CostOfSales)
                        except:
                            pass
                        #
                        # total operating income
                        try:
                            OperatingIncome = []
                            OperatingIncomeRank = None
                            r = 0
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    d = key
                                    q = [
                                        'IncomeFromOperations',
                                        'Income(Loss)FromOperations',
                                        'OperatingIncome',
                                    ]
                                    b = [
                                        'DiscontinuedOperation',
                                        'OtherOperating',
                                        'Research',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while IncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = IncomeStatement[key][i]
                                                    IncomeStatement[key][i] = None
                                                except:
                                                    if IncomeStatement[key] != None:
                                                        ARCHvalue = IncomeStatement[key]
                                                        IncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    OperatingIncome.append(ARCHvalue)
                                                    OperatingIncomeRank = r
                                r = r + 1
                            a.OperatingIncome = -sum(OperatingIncome)
                        except:
                            pass
                        #
                        # Operating income rank based on net income rank
                        try:
                            if OperatingIncomeRank is None:
                                TempOperatingIncomeRank = NetIncomeRank - 7
                                OperatingIncomeRank = TempOperatingIncomeRank
                        except:
                            print('Could not attribute Operating Income Rank to Net Income Rank')
                        #
                        # income before taxes
                        try:
                            IncomeBeforeTaxes = []
                            IncomeBeforeTaxesRank = None
                            r = 0
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    if r > OperatingIncomeRank:
                                        d = key
                                        q = [
                                            'BeforeIncomeTax',
                                            'BeforeProvisionForIncomeTax',
                                            'BeforeProvisionFor(BenefitFrom)IncomeTax',
                                            'BeforeTax',
                                        ]
                                        b = [
                                            'DiscontinuedOperation',
                                            'Research',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while IncomeStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = IncomeStatement[key][i]
                                                        IncomeStatement[key][i] = None
                                                    except:
                                                        if IncomeStatement[key] != None:
                                                            ARCHvalue = value
                                                            IncomeStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncomeBeforeTaxes.append(ARCHvalue)
                                                        IncomeBeforeTaxesRank = r
                                r = r + 1
                            a.IncomeBeforeTaxes = -sum(IncomeBeforeTaxes)
                        except:
                            pass
                        #
                        # Operating income rank based on income before taxes
                        try:
                            if OperatingIncomeRank == TempOperatingIncomeRank:
                                OperatingIncomeRank = IncomeBeforeTaxesRank
                        except:
                            pass
                        #
                        # net Income From Discontinued Operations
                        try:
                            NetIncomeFromDiscontinuedOperations = []
                            r = 0
                            NetIncomeFromDiscontinuedOperationsRank = None
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    d = key
                                    q = [
                                        'LossFromDiscontinuedOperation',
                                        'IncomeFromDiscontinuedOperation',
                                        'Income(Loss)FromDiscontinuedOperation',
                                    ]
                                    b = [
                                        'Research',
                                        'PerShare',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while IncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = IncomeStatement[key][i]
                                                    IncomeStatement[key][i] = None
                                                except:
                                                    if IncomeStatement[key] != None:
                                                        ARCHvalue = IncomeStatement[key]
                                                        IncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    NetIncomeFromDiscontinuedOperations.append(ARCHvalue)
                                                    NetIncomeFromDiscontinuedOperationsRank = r
                                r = r + 1
                            tb.NetIncomeFromDiscontinuedOperations = -sum(NetIncomeFromDiscontinuedOperations)
                        except:
                            pass
                        #
                        # sales components
                        try:
                            Sales = []
                            r = 0
                            TotalRevenueRank = 10
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    if r < GrossMarginRank:
                                            d = key
                                            q = [
                                                'Admissions',
                                                'AutomotiveRevenue',
                                                'Financing',
                                                'Food',
                                                'Membership',
                                                'Products',
                                                'Revenue',
                                                'Sales',
                                                'Services',
                                                'Theatre',
                                            ]
                                            b = [
                                                'Cost',
                                                'DiscontinuedOperation',
                                                'ExciseTaxes',
                                                'MarketingAndSales',
                                            ]
                                            c = [
                                                'TotalRevenue',
                                                'TotalNetRevenue',
                                            ]
                                            s = 'a'
                                            for l in q:
                                                if s == 'a':
                                                    if l in d:
                                                        h = 'p'
                                                        for p in b:
                                                            u = 0
                                                            while u < len(b):
                                                                if p in d:
                                                                    h = ''
                                                                for f in c:
                                                                    if f in d:
                                                                        TotalRevenueRank = r
                                                                u = u + 1
                                                        if r < TotalRevenueRank:
                                                            if h == 'p':
                                                                try:
                                                                    i = 0
                                                                    while IncomeStatement[key][i] == None:
                                                                        i = i + 1
                                                                    ARCHvalue = IncomeStatement[key][i]
                                                                    IncomeStatement[key][i] = None
                                                                except:
                                                                    if IncomeStatement[key] != None:
                                                                        ARCHvalue = IncomeStatement[key]
                                                                        IncomeStatement[key] = None
                                                                    else:
                                                                        ARCHvalue = 0
                                                                if ARCHvalue != 0:
                                                                    Sales.append(ARCHvalue)
                                                                    s = 'z'
                                r = r + 1
                            tb.Sales = -sum(Sales)
                        except:
                            pass
                        #
                        # cost of sales components
                        try:
                            CostOfSales = []
                            r = 0
                            TotalCostRank = 10
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    if r < GrossMarginRank:
                                        d = key
                                        q = [
                                            'AmortizationOfPurchasedIntagible',
                                            'Services',
                                            'Sales',
                                            'Financing',
                                            'Cost',
                                            'FoodAndBeverageCost',
                                            'FilmExhibitionCost',
                                            'Merchandise',
                                            'OperatingExpenseExcludingDepreciationAndAmortizationBelow',
                                            'OperatingExpensesExcludingDepreciationAndAmortizationBelow',
                                            'OtherOperating',
                                            'Payroll',
                                            'Products',
                                            'Rent',

                                        ]
                                        b = [
                                            'CostsAndExpenses',
                                            'CostsExpensesAndOther',
                                            'CostOfSalesOperatingExpensesAndOther',
                                            'OperatingCostsAndExpenses',
                                            'OtherCosts',
                                            'MarketingAndSales',
                                            'Merger',
                                        ]
                                        c = [
                                            'TotalCost',
                                            'TotalNetCost',
                                        ]
                                        s = 'a'
                                        for l in q:
                                            if s == 'a':
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            for f in c:
                                                                if f in d:
                                                                    TotalCostRank = r
                                                            u = u + 1
                                                    if r < TotalCostRank:
                                                        if h == 'p':
                                                            try:
                                                                i = 0
                                                                while IncomeStatement[key][i] == None:
                                                                    i = i + 1
                                                                ARCHvalue = IncomeStatement[key][i]
                                                                IncomeStatement[key][i] = None
                                                            except:
                                                                if IncomeStatement[key] != None:
                                                                    ARCHvalue = IncomeStatement[key]
                                                                    IncomeStatement[key] = None
                                                                else:
                                                                    ARCHvalue = 0
                                                            if ARCHvalue != 0:
                                                                if r < TotalCostRank:
                                                                    CostOfSales.append(ARCHvalue)
                                                                    s = 'z'
                                r = r + 1
                            tb.CostOfSales = sum(CostOfSales)
                        except:
                            pass
                        #
                        # debugging
                        try:
                            if a.Sales != 0:
                                tb.Sales = a.Sales
                            if a.CostOfSales != 0:
                                tb.CostOfSales = a.CostOfSales
                        except:
                            pass
                        #
                        # research and development
                        try:
                            ResearchAndDevelopment = []
                            r = 0
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    if r < OperatingIncomeRank:
                                        d = key
                                        q = [
                                            'Research',
                                            'Development',
                                        ]
                                        b = [
                                            'DiscontinuedOperation',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while IncomeStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = IncomeStatement[key][i]
                                                        IncomeStatement[key][i] = None
                                                    except:
                                                        if IncomeStatement[key] != None:
                                                            ARCHvalue = IncomeStatement[key]
                                                            IncomeStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        ResearchAndDevelopment.append(ARCHvalue)
                                r = r + 1
                            tb.ResearchAndDevelopment = sum(ResearchAndDevelopment)
                        except:
                            pass
                        #
                        # selling general, administrative and marketing
                        try:
                            SellingGeneralAdministrativeAndMarketing = []
                            r = 0
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    if r < OperatingIncomeRank:
                                        d = key
                                        q = [
                                            'Acquisition',
                                            'DepreciationAndAmortization',
                                            'DepreciationDepletion',
                                            'FinanceLeaseObligations',
                                            'GeneralAndAdministrative',
                                            'GeneralAdministrative',
                                            'MarketingAndSales',
                                            'OperatingExpenses',
                                            'OtherCostAndExpensesOperating',
                                            'OtherOperatingExpenses',
                                            'OtherOperatingIncomeExpenses',
                                            'SalesAndMarketing',
                                            'SellingAndAdministrative',
                                            'SellingGeneralAndAdministrative',
                                        ]
                                        b = [
                                            'CostOfSalesOperatingExpensesAndOtherNet',
                                            'CostsExpensesAndOther',
                                            'DiscontinuedOperation',
                                            'InterestIncome',
                                            'InterestExpense',
                                            'Impairment',
                                            'LegalSettlement',
                                            'Merger',
                                            'NonOperating',
                                            'OtherIncome',
                                            'Other(Expense)Income',
                                            'OtherNet(Income)Expense',
                                            'Research',
                                            'Restructuring',
                                            'SpecialCharges',
                                            'Total',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    if '(Income)' in d:
                                                        y = -1
                                                    else:
                                                        y = 1
                                                    try:
                                                        i = 0
                                                        while IncomeStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = abs(IncomeStatement[key][i]) * y
                                                        IncomeStatement[key][i] = None
                                                    except:
                                                        if IncomeStatement[key] != None:
                                                            ARCHvalue = abs(IncomeStatement[key]) * y
                                                            IncomeStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        SellingGeneralAdministrativeAndMarketing.append(ARCHvalue)
                                r = r + 1
                            tb.SellingGeneralAdministrativeAndMarketing = sum(SellingGeneralAdministrativeAndMarketing)
                            #
                            OperatingIncomeMethod = ''
                            if a.OperatingIncome == 0:
                                c = tb.Sales
                                c = c + tb.CostOfSales
                                c = c + tb.ResearchAndDevelopment
                                c = c + tb.SellingGeneralAdministrativeAndMarketing
                                a.OperatingIncome = c
                                OperatingIncomeMethod = 'bridge'
                        except:
                            pass
                        #
                        # Asset Impairment, restructuring, and other special charges
                        try:
                            ImpairmentRestructuringAndOtherSpecialCharges = []
                            ImpairmentRestructuringAndOtherSpecialChargesRank = None
                            r = 0
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    d = key
                                    q = [
                                        'Contingency',
                                        'GoodwillImpairmentCharge',
                                        'Impairment',
                                        'LossOnExtinguishmentOfDebt',
                                        'LegalSettlement',
                                        'Merger',
                                        'Restructuring',
                                        'Special',
                                    ]
                                    b = [
                                        'DiscontinuedOperation',
                                        'Research',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while IncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = IncomeStatement[key][i]
                                                    IncomeStatement[key][i] = None
                                                except:
                                                    if IncomeStatement[key] != None:
                                                        ARCHvalue = IncomeStatement[key]
                                                        IncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    ImpairmentRestructuringAndOtherSpecialCharges.append(ARCHvalue)
                                                    ImpairmentRestructuringAndOtherSpecialChargesRank = r
                                r = r + 1
                            tb.ImpairmentRestructuringAndOtherSpecialCharges = sum(ImpairmentRestructuringAndOtherSpecialCharges)
                            #
                            if ImpairmentRestructuringAndOtherSpecialChargesRank != None:
                                if ImpairmentRestructuringAndOtherSpecialChargesRank < OperatingIncomeRank:
                                    if OperatingIncomeMethod == '':
                                        c = a.OperatingIncome
                                        c = c - tb.ImpairmentRestructuringAndOtherSpecialCharges
                                        a.OperatingIncome = c
                        except:
                            pass
                        #
                        # non-operating income (expense)
                        try:
                            NonOperatingIncome = []
                            r = 0
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    d = key
                                    q = [
                                        'CorporateBorrowing',
                                        'Debt',
                                        'EquityIncome(loss)',
                                        'EquityIn(Earnings)',
                                        'EquityInNetIncome',
                                        'ExhibitorServices',
                                        'Finance',
                                        'InterestIncome',
                                        'InterestExpense',
                                        'InvestmentExpense',
                                        'NonOperating',
                                        'OtherIncome',
                                        'OtherNet(Income)Expense',
                                    ]
                                    b = [
                                        'Research',
                                    ]
                                    g = [
                                        '(Income)',
                                        '(Earnings)',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                y = 1
                                                for f in g:
                                                    if f in d:
                                                        y = -1
                                                try:
                                                    i = 0
                                                    while IncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = abs(IncomeStatement[key][i]) * y
                                                    IncomeStatement[key][i] = None
                                                except:
                                                    if IncomeStatement[key] != None:
                                                        ARCHvalue = abs(IncomeStatement[key]) * y
                                                        IncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    NonOperatingIncome.append(ARCHvalue)
                                r = r + 1
                            tb.NonOperatingIncome = -sum(NonOperatingIncome)
                        except:
                            pass
                        #
                        # income tax expense benefit
                        try:
                            IncomeTaxExpenseBenefit = []
                            r = 0
                            for key, value in IncomeStatement.items():
                                if r < NetIncomeRank:
                                    if r > IncomeBeforeTaxesRank:
                                        d = key
                                        q = [
                                            'IncomeTax',
                                            'ProvisionForTaxes',
                                        ]
                                        b = [
                                            'DiscontinuedOperation',
                                            'IncomeBefore',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while IncomeStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = IncomeStatement[key]
                                                        IncomeStatement[key][i] = None
                                                    except:
                                                        if IncomeStatement[key] != None:
                                                            ARCHvalue = IncomeStatement[key]
                                                            IncomeStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        if (a.NetIncome - tb.NetIncomeFromDiscontinuedOperations) > a.IncomeBeforeTaxes:
                                                            y = 1
                                                        else:
                                                            y = -1
                                                        ARCHvalue = abs(ARCHvalue) * y
                                                        IncomeTaxExpenseBenefit.append(ARCHvalue)
                                r = r + 1
                            tb.IncomeTaxExpenseBenefit = sum(IncomeTaxExpenseBenefit)
                        except:
                            pass
                        #
                        # net income Non Controlling Interests
                        try:
                            NetIncomeAttributableToNonControllingInterest = []
                            r = 0
                            for key, value in IncomeStatement.items():
                                d = key
                                q = [
                                    'NetIncomeAttributableToMinorityInterest',
                                    'NetIncomeAttributableToNonControllingInterest',
                                    'NetIncomeAttributableToNoncontrollingInterest',
                                ]
                                b = [
                                    'CostOfGoods',
                                    'CostOfOperations',
                                    'CostOfRevenue',
                                    'CostOfSales',
                                    'DiscontinuedOperation',
                                    'Gain',
                                    'Other',
                                    'Miscellaneous',
                                    'PerShare',
                                    'Research',
                                    'Revenue',
                                    'Sales',
                                    'Tax',
                                ]
                                s = 'a'
                                for l in q:
                                    if s == 'a':
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while IncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = IncomeStatement[key][i]
                                                    IncomeStatement[key][i] = None
                                                except:
                                                    if IncomeStatement[key] != None:
                                                        ARCHvalue = IncomeStatement[key]
                                                        IncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    NetIncomeAttributableToNonControllingInterest.append(ARCHvalue)
                                                    s = 'z'
                                r = r + 1
                            a.NetIncomeAttributableToNonControllingInterest = -abs(sum(NetIncomeAttributableToNonControllingInterest))
                        except:
                            pass
                        #
                        # dataframe components
                        try:
                            #
                            df = pd.DataFrame({
                                #
                                '..': 
                                    [
                                    'a.Sales',
                                    'tb.Sales',
                                    'a.CostOfSales',
                                    'tb.CostOfSales',
                                    'a.GrossMargin',
                                    'tb.ResearchAndDevelopment',
                                    'tb.SellingGeneralAdministrativeAndMarketing',
                                    'a.OperatingIncome',
                                    'tb.ImpairmentRestructuringAndOtherSpecialCharges',
                                    'tb.NonOperatingIncome',
                                    'a.IncomeBeforeTaxes',
                                    'tb.IncomeTaxExpenseBenefit',
                                    'tb.NetIncomeFromDiscontinuedOperations',
                                    'a.NetIncomeAttributableToNonControllingInterest',
                                    ],
                                #
                                '.':
                                    [
                                    '{:,}'.format(a.Sales),
                                    '{:,}'.format(tb.Sales),
                                    '{:,}'.format(a.CostOfSales),
                                    '{:,}'.format(tb.CostOfSales),
                                    '{:,}'.format(a.GrossMargin),
                                    '{:,}'.format(tb.ResearchAndDevelopment),
                                    '{:,}'.format(tb.SellingGeneralAdministrativeAndMarketing),
                                    '{:,}'.format(a.OperatingIncome),
                                    '{:,}'.format(tb.ImpairmentRestructuringAndOtherSpecialCharges),
                                    '{:,}'.format(tb.NonOperatingIncome),
                                    '{:,}'.format(a.IncomeBeforeTaxes),
                                    '{:,}'.format(tb.IncomeTaxExpenseBenefit),
                                    '{:,}'.format(tb.NetIncomeFromDiscontinuedOperations),
                                    '{:,}'.format(a.NetIncomeAttributableToNonControllingInterest),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    # comprehensive income
                    try:
                        #
                        print(e.EntityRegistrantName)
                        print('comprehensive income')
                        print(DPED)
                        print(137*'-' + '\n')
                        #
                        # other comprehensive income
                        try:
                            #
                            ComprehensiveIncome = []
                            r = 0
                            for key, value in ComprehensiveIncomeStatement.items():
                                d = key
                                q = [
                                    'ComprehensiveIncome',
                                ]
                                b = [
                                    'ContinuingOperations',
                                    'NetOtherComprehensiveIncome',
                                ]
                                for l in q:
                                    if l in d:
                                        h = 'p'
                                        for p in b:
                                            u = 0
                                            while u < len(b):
                                                if p in d:
                                                    h = ''
                                                u = u + 1
                                        if h == 'p':
                                            try:
                                                i = 0
                                                while ComprehensiveIncomeStatement[key][i] == None:
                                                    i = i + 1
                                                ARCHvalue = ComprehensiveIncomeStatement[key][i]
                                                ComprehensiveIncomeStatement[key][i] = None
                                            except:
                                                if ComprehensiveIncomeStatement[key] != None:
                                                    ARCHvalue = ComprehensiveIncomeStatement[key]
                                                    ComprehensiveIncomeStatement[key] = None
                                                else:
                                                    ARCHvalue = 0
                                            if ARCHvalue != 0:
                                                ComprehensiveIncome.append(ARCHvalue)
                                                ComprehensiveIncomeRank = r
                                r = r + 1
                            #
                            a.ComprehensiveIncome = -sum(ComprehensiveIncome)
                            #
                            a.OtherComprehensiveIncome = a.ComprehensiveIncome - a.NetIncome
                            #
                        except:
                            pass
                        #
                        # foreign currency translation
                        try:
                            ChangeInForeignCurrencyTranslationAdjustment = []
                            r = 0
                            for key, value in ComprehensiveIncomeStatement.items():
                                if r < ComprehensiveIncomeRank:
                                    d = key
                                    q = [
                                        'CurrencyTransaction',
                                        'Translation',
                                    ]
                                    b = [
                                        'ContinuingOperations',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while ComprehensiveIncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = ComprehensiveIncomeStatement[key][i]
                                                    ComprehensiveIncomeStatement[key][i] = None
                                                except:
                                                    if ComprehensiveIncomeStatement[key] != None:
                                                        ARCHvalue = ComprehensiveIncomeStatement[key]
                                                        ComprehensiveIncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    ChangeInForeignCurrencyTranslationAdjustment.append(ARCHvalue)
                                r = r + 1
                            tb.ChangeInForeignCurrencyTranslationAdjustment = -sum(ChangeInForeignCurrencyTranslationAdjustment)
                        except:
                            pass
                        #
                        # unrealized gains (losses) on derivative instruments
                        try:
                            ChangeInUnrealizedGainsLossesOnDerivativeInstruments = []
                            r = 0
                            for key, value in ComprehensiveIncomeStatement.items():
                                if r < ComprehensiveIncomeRank:
                                    d = key
                                    q = [
                                        'CashFlowHedge',
                                        'Derivatives',
                                        'NetGains(Losses)RealizedAndIncludedInNetIncome',
                                        'NetInvestmentHedges',
                                    ]
                                    b = [
                                        'ContinuingOperations',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while ComprehensiveIncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = ComprehensiveIncomeStatement[key][i]
                                                    ComprehensiveIncomeStatement[key][i] = None
                                                except:
                                                    if ComprehensiveIncomeStatement[key] != None:
                                                        ARCHvalue = ComprehensiveIncomeStatement[key]
                                                        ComprehensiveIncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    ChangeInUnrealizedGainsLossesOnDerivativeInstruments.append(ARCHvalue)
                                r = r + 1
                            tb.ChangeInUnrealizedGainsLossesOnDerivativeInstruments = -sum(ChangeInUnrealizedGainsLossesOnDerivativeInstruments)
                        except:
                            pass
                        #
                        # unrealized gains (losses) on investment
                        try:
                            ChangeInUnrealizedGainsLossesOnInvestments = []
                            r = 0
                            for key, value in ComprehensiveIncomeStatement.items():
                                if r < ComprehensiveIncomeRank:
                                    d = key
                                    q = [
                                        'ChangeInNetUnrealizedGains(Losses)OnSecurities',
                                        'ChangeInNetUnrealizedGainsAndLossesOnSecurities',
                                        'ChangeInUnrealizedGain(Loss)OnAvailableForSale',
                                        'ChangeInUnrealizedGainLossOnAvailableForSale',
                                        'MarketableDebtSecurities',
                                        'MarketableSecurities',
                                        'NetGains(Losses)RealizedAndIncludedInNetIncome',
                                        'SecuritiesAdjustment',
                                        'UnrealizedGainOnSecurities',
                                        'UnrealizedHoldingGain(Loss)OnSecurities',
                                    ]
                                    b = [
                                        'ContinuingOperations',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while ComprehensiveIncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = ComprehensiveIncomeStatement[key][i]
                                                    ComprehensiveIncomeStatement[key][i] = None
                                                except:
                                                    if ComprehensiveIncomeStatement[key] != None:
                                                        ARCHvalue = ComprehensiveIncomeStatement[key]
                                                        ComprehensiveIncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    ChangeInUnrealizedGainsLossesOnInvestments.append(ARCHvalue)
                                r = r + 1
                            tb.ChangeInUnrealizedGainsLossesOnInvestments = -sum(ChangeInUnrealizedGainsLossesOnInvestments)
                        except:
                            pass
                        #
                        # defined benefit pension and other similar plans
                        try:
                            ChangeInDefinedBenefitPensionAndOtherSimilarPlans = []
                            r = 0
                            for key, value in ComprehensiveIncomeStatement.items():
                                if r < ComprehensiveIncomeRank:
                                    d = key
                                    q = [
                                        'Pension',
                                    ]
                                    b = [
                                        'Currency',
                                        'Derivatives',
                                        'Investments',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while ComprehensiveIncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = ComprehensiveIncomeStatement[key][i]
                                                    ComprehensiveIncomeStatement[key][i] = None
                                                except:
                                                    if ComprehensiveIncomeStatement[key] != None:
                                                        ARCHvalue = ComprehensiveIncomeStatement[key]
                                                        ComprehensiveIncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    ChangeInDefinedBenefitPensionAndOtherSimilarPlans.append(ARCHvalue)
                                r = r + 1
                            tb.ChangeInDefinedBenefitPensionAndOtherSimilarPlans = -sum(ChangeInDefinedBenefitPensionAndOtherSimilarPlans)
                        except:
                            pass
                        #
                        # income tax on other comprehensive income
                        try:
                            IncomeTaxOnOtherComprehensiveIncome = []
                            r = 0
                            for key, value in ComprehensiveIncomeStatement.items():
                                if r < ComprehensiveIncomeRank:
                                    d = key
                                    q = [
                                        'Benefit(Provision)ForIncomeTaxes',
                                        'IncomeTaxes',
                                        'ProvisionForIncomeTaxes',
                                    ]
                                    b = [
                                        'ChangeIn',
                                        'BeforeIncomeTaxe',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = 0
                                                    while ComprehensiveIncomeStatement[key][i] == None:
                                                        i = i + 1
                                                    ARCHvalue = ComprehensiveIncomeStatement[key][i]
                                                    ComprehensiveIncomeStatement[key][i] = None
                                                except:
                                                    if ComprehensiveIncomeStatement[key] != None:
                                                        ARCHvalue = ComprehensiveIncomeStatement[key]
                                                        ComprehensiveIncomeStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    IncomeTaxOnOtherComprehensiveIncome.append(ARCHvalue)
                                r = r + 1
                            tb.IncomeTaxOnOtherComprehensiveIncome = -sum(IncomeTaxOnOtherComprehensiveIncome)
                        except:
                            pass
                        #
                        # dataframe
                        try:
                            #
                            df = pd.DataFrame({
                                #
                                '..': 
                                    [
                                    'tb.ChangeInForeignCurrencyTranslationAdjustment',
                                    'tb.ChangeInUnrealizedGainsLossesOnDerivativeInstruments',
                                    'tb.ChangeInUnrealizedGainsLossesOnInvestments',
                                    'tb.ChangeInDefinedBenefitPensionAndOtherSimilarPlans',
                                    'tb.IncomeTaxOnOtherComprehensiveIncome',
                                    'a.OtherComprehensiveIncome',
                                    ],
                                #
                                '.':
                                    [
                                    '{:,}'.format(tb.ChangeInForeignCurrencyTranslationAdjustment),
                                    '{:,}'.format(tb.ChangeInUnrealizedGainsLossesOnDerivativeInstruments),
                                    '{:,}'.format(tb.ChangeInUnrealizedGainsLossesOnInvestments),
                                    '{:,}'.format(tb.ChangeInDefinedBenefitPensionAndOtherSimilarPlans),
                                    '{:,}'.format(tb.IncomeTaxOnOtherComprehensiveIncome),
                                    '{:,}'.format(a.OtherComprehensiveIncome),
                                    ],
                            })
                            print(df)
                            print('\n' + 137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    # stockholders equity
                    try:
                        #
                        print(e.EntityRegistrantName)
                        print('stockholders equity')
                        print(DPED)
                        print(137*'-' + '\n')
                        #
                        # Rank
                        try:
                            r = 0
                            for key, value in StockholdersEquityStatement.items():
                                d = key
                                q = [
                                    'NetIncomeii',
                                ]
                                b = [
                                    'InShares',
                                ]
                                for l in q:
                                    if l in d:
                                        h = 'p'
                                        for p in b:
                                            u = 0
                                            while u < len(b):
                                                if p in d:
                                                    h = ''
                                                u = u + 1
                                        if h == 'p':
                                            if ARCHvalue != 0:
                                                LiabilitiesAndStockholdersEquityRank = r
                                                print('Net Income Rank: ' + str(r))
                                r = r + 1
                            tb.CommonStockIssued = -sum(CommonStockIssued)
                        except:
                            pass
                        #
                        # common stock issued
                        try:
                            CommonStockIssued = []
                            r = 0
                            for key, value in StockholdersEquityStatement.items():
                                if r > LiabilitiesAndStockholdersEquityRank:
                                    d = key
                                    q = [
                                        'CommonStockIssued',
                                        'IssuanceOfStockUnderEmployeeStockPlan',
                                        'ProceedsCommonStockOfferings',
                                        'ProceedsFromIssuance',
                                        'StockIssuedDuringPeriodValue',
                                        'StockIssuance',
                                    ]
                                    b = [
                                        'Debt',
                                        'Retirement',
                                        'Repurchase',
                                        'InShares',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = len(value) - 1
                                                    while StockholdersEquityStatement[key][i] == None:
                                                        i = i - 1
                                                    ARCHvalue = StockholdersEquityStatement[key][i]
                                                    StockholdersEquityStatement[key][i] = None
                                                except:
                                                    if StockholdersEquityStatement[key] != None:
                                                        ARCHvalue = StockholdersEquityStatement[key]
                                                        StockholdersEquityStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    CommonStockIssued.append(ARCHvalue)
                                r = r + 1
                            tb.CommonStockIssued = -sum(CommonStockIssued)
                        except:
                            pass
                        #
                        # share based compensation and other stockholders equity components
                        try:
                            ShareBasedCompensation = []
                            r = 0
                            for key, value in StockholdersEquityStatement.items():
                                if r > LiabilitiesAndStockholdersEquityRank:
                                    d = key
                                    q = [
                                        'ShareBasedCompensation',
                                        'StockBasedCompendation',
                                        'SharesWithheldRelatedToNetShareSettlement',
                                    ]
                                    b = [
                                        'Retirement',
                                        'Repurchase',
                                        'InShares',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = len(value) - 1
                                                    while StockholdersEquityStatement[key][i] == None:
                                                        i = i - 1
                                                    ARCHvalue = StockholdersEquityStatement[key][i]
                                                    StockholdersEquityStatement[key][i] = None
                                                except:
                                                    if StockholdersEquityStatement[key] != None:
                                                        ARCHvalue = StockholdersEquityStatement[key]
                                                        StockholdersEquityStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    ShareBasedCompensation.append(ARCHvalue)
                                r = r + 1
                            tb.ShareBasedCompensation = -sum(ShareBasedCompensation)
                        except:
                            pass
                        #
                        # dividends and dividend equivalents declared
                        try:
                            DividendsAndDividendEquivalentsDeclared = []
                            r = 0
                            for key, value in StockholdersEquityStatement.items():
                                if r > LiabilitiesAndStockholdersEquityRank:
                                    d = key
                                    q = [
                                        'Dividends',
                                    ]
                                    b = [
                                        'Retirement',
                                        'Repurchase',
                                        'NoncontrollingInterest',
                                        'InShares',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = len(value) - 1
                                                    while StockholdersEquityStatement[key][i] == None:
                                                        i = i - 1
                                                    ARCHvalue = StockholdersEquityStatement[key][i]
                                                    StockholdersEquityStatement[key][i] = None
                                                except:
                                                    if StockholdersEquityStatement[key] != None:
                                                        ARCHvalue = StockholdersEquityStatement[key]
                                                        StockholdersEquityStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    ARCHvalue = -abs(ARCHvalue)
                                                    DividendsAndDividendEquivalentsDeclared.append(ARCHvalue)
                                r = r + 1
                            tb.DividendsAndDividendEquivalentsDeclared = -sum(DividendsAndDividendEquivalentsDeclared)
                        except:
                            pass
                        #
                        # dividends and dividend equivalents declared to non controlling interests
                        try:
                            DividendsDeclaredToNonControllingInterests = []
                            r = 0
                            for key, value in StockholdersEquityStatement.items():
                                if r > LiabilitiesAndStockholdersEquityRank:
                                    d = key
                                    q = [
                                        'DividendsAndDividendEquivalentsDeclaredToNoncontrollingInterest',
                                        'DistributionsToNonControllingInterests',
                                    ]
                                    b = [
                                        'Retirement',
                                        'Repurchase',
                                        'InShares',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = len(value) - 1
                                                    while StockholdersEquityStatement[key][i] == None:
                                                        i = i - 1
                                                    ARCHvalue = StockholdersEquityStatement[key][i]
                                                    StockholdersEquityStatement[key][i] = None
                                                except:
                                                    if StockholdersEquityStatement[key] != None:
                                                        ARCHvalue = StockholdersEquityStatement[key]
                                                        StockholdersEquityStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    DividendsDeclaredToNonControllingInterests.append(ARCHvalue)
                                r = r + 1
                            tb.DividendsDeclaredToNonControllingInterests = -sum(DividendsDeclaredToNonControllingInterests)
                        except:
                            pass
                        #
                        # common stock repurchased and retired
                        try:
                            CommonStockRepurchasedAndRetired = []
                            r = 0
                            for key, value in StockholdersEquityStatement.items():
                                if r > LiabilitiesAndStockholdersEquityRank:
                                    d = key
                                    q = [
                                        'AcquisitionOfCommonStockInExchangeOffer',
                                        'CommonStockRepurchased',
                                        'PurchaseOfCompanyStock',
                                        'PurchaseOfTreasuryShares',
                                        'PurchaseOfTreasurySharesValue',
                                        'RepurchasesOfCommonStock',
                                        'RepurchaseOfCommonStock',
                                        'RetirementOfTreasurySharesValue',
                                        'ShareRepurchases',
                                        'StockRepurchased',
                                    ]
                                    b = [
                                        'Dividend',
                                        'InShares',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = len(value) - 1
                                                    while StockholdersEquityStatement[key][i] == None:
                                                        i = i - 1
                                                    ARCHvalue = StockholdersEquityStatement[key][i]
                                                    StockholdersEquityStatement[key][i] = None
                                                except:
                                                    if StockholdersEquityStatement[key] != None:
                                                        ARCHvalue = StockholdersEquityStatement[key]
                                                        StockholdersEquityStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    CommonStockRepurchasedAndRetired.append(ARCHvalue)
                                r = r + 1
                            tb.CommonStockRepurchasedAndRetired = -sum(CommonStockRepurchasedAndRetired)
                        except:
                            pass
                        #
                        # effect of adoption of new accounting pronouncement or tax cuts
                        try:
                            EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts = []
                            r = 0
                            for key, value in StockholdersEquityStatement.items():
                                if r > LiabilitiesAndStockholdersEquityRank:
                                    d = key
                                    q = [
                                        'AdoptionOfNewAccountingStandardsNetOfIncomeTaxes',
                                        'CumulativeEffectOfChangeInAccountingPrinciple',
                                        'ReclassificationOfStrandedTaxEffectsAndAdoptionOfNewAccountingStandards',
                                        'ReclassificationOfStrandedTaxEffectsProvisional',
                                        'CumulativeEffectAdjustment',
                                    ]
                                    b = [
                                        'Dividend',
                                        'InShares',
                                    ]
                                    for l in q:
                                        if l in d:
                                            h = 'p'
                                            for p in b:
                                                u = 0
                                                while u < len(b):
                                                    if p in d:
                                                        h = ''
                                                    u = u + 1
                                            if h == 'p':
                                                try:
                                                    i = len(value) - 1
                                                    while StockholdersEquityStatement[key][i] == None:
                                                        i = i - 1
                                                    ARCHvalue = StockholdersEquityStatement[key][i]
                                                    StockholdersEquityStatement[key][i] = None
                                                except:
                                                    if StockholdersEquityStatement[key] != None:
                                                        ARCHvalue = StockholdersEquityStatement[key]
                                                        StockholdersEquityStatement[key] = None
                                                    else:
                                                        ARCHvalue = 0
                                                if ARCHvalue != 0:
                                                    EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts.append(ARCHvalue)
                                r = r + 1
                            tb.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts = sum(EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts)
                        except:
                            pass
                        #
                        # dataframe
                        try:
                            #
                            df = pd.DataFrame({
                                #
                                '..': 
                                    [
                                    'tb.CommonStockIssued',
                                    'tb.ShareBasedCompensation',
                                    'tb.DividendsAndDividendEquivalentsDeclared',
                                    'tb.DividendsDeclaredToNonControllingInterests',
                                    'tb.CommonStockRepurchasedAndRetired',
                                    'tb.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts',
                                    ],
                                #
                                '.':
                                    [
                                    '{:,}'.format(tb.CommonStockIssued),
                                    '{:,}'.format(tb.ShareBasedCompensation),
                                    '{:,}'.format(tb.DividendsAndDividendEquivalentsDeclared),
                                    '{:,}'.format(tb.DividendsDeclaredToNonControllingInterests),
                                    '{:,}'.format(tb.CommonStockRepurchasedAndRetired),
                                    '{:,}'.format(tb.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts),
                                    ],
                            })
                            print(df)
                            print('\n' + 137*'-')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    # cash flow
                    try:
                        #
                        print(e.EntityRegistrantName)
                        print('cash flow')
                        print(DPED)
                        print(137*'-' + '\n')
                        #
                        # effect of exchange rate on cash
                        try:
                            EffectOfExchangeRateOnCash = []
                            r = 0
                            for key, value in CashFlowStatement.items():
                                d = key
                                q = [
                                    'Exchange',
                                ]
                                b = [
                                    'Acquire',
                                    'Acquisition',
                                    'Decrease',
                                    'Disposal',
                                    'DiscontinuedOperation',
                                    'Ending',
                                    'Financing',
                                    'Hedge',
                                    'Increase',
                                    'Investment',
                                    'Investing',
                                    'Operating',
                                    'Payment',
                                    'Proceeds',
                                    'Purchase',
                                    'Selling',
                                ]
                                for l in q:
                                    if l in d:
                                        h = 'p'
                                        for p in b:
                                            u = 0
                                            while u < len(b):
                                                if p in d:
                                                    h = ''
                                                u = u + 1
                                        if h == 'p':
                                            try:
                                                i = 0
                                                while CashFlowStatement[key][i] == None:
                                                    i = i + 1
                                                ARCHvalue = CashFlowStatement[key][i]
                                                CashFlowStatement[key][i] = None
                                            except:
                                                if CashFlowStatement[key] != None:
                                                    ARCHvalue = CashFlowStatement[key]
                                                    CashFlowStatement[key] = None
                                                else:
                                                    ARCHvalue = 0
                                            if ARCHvalue != 0:
                                                EffectOfExchangeRateOnCash.append(ARCHvalue)
                                r = r + 1
                            cf.EffectOfExchangeRateOnCash = sum(EffectOfExchangeRateOnCash)
                        except:
                            pass
                        #
                        # total operating activities
                        try:
                            OperatingActivities = []
                            OperatingActivitiesRank = None
                            r = 0
                            for key, value in CashFlowStatement.items():
                                d = key
                                q = [
                                    'OperatingActivities',
                                    'CashProvidedByOperations',
                                    'CashProvidedFromOperations',
                                    'CashProvidedFrom(UsedFor)Operations',
                                    'Cash(UsedFor)ProvidedFromOperations',
                                ]
                                b = [
                                    'Acquisition',
                                    'Acquire',
                                    'DiscontinuedOperations',
                                    'InterestPaid',
                                    'InvestingActivities',
                                    'FinancingActivities',
                                    'OtherNonCashOperatingActivities',
                                    'Other',
                                    'Miscellaneous',
                                    'Payment',
                                    'Purchase',
                                ]
                                for l in q:
                                    if l in d:
                                        h = 'p'
                                        for p in b:
                                            u = 0
                                            while u < len(b):
                                                if p in d:
                                                    h = ''
                                                u = u + 1
                                        if h == 'p':
                                            try:
                                                i = 0
                                                while CashFlowStatement[key][i] == None:
                                                    i = i + 1
                                                ARCHvalue = CashFlowStatement[key][i]
                                                CashFlowStatement[key][i] = None
                                            except:
                                                if CashFlowStatement[key] != None:
                                                    ARCHvalue = CashFlowStatement[key]
                                                    CashFlowStatement[key] = None
                                                else:
                                                    ARCHvalue = 0
                                            if ARCHvalue != 0:
                                                OperatingActivities.append(ARCHvalue)
                                                OperatingActivitiesRank = r
                                r = r + 1
                            a.OperatingActivities = sum(OperatingActivities)
                        except:
                            pass
                        #
                        # Total Investing Activities
                        try:
                            InvestingActivities = []
                            InvestingActivitiesRank = None
                            r = 0
                            for key, value in CashFlowStatement.items():
                                d = key
                                q = [
                                    'InvestingActivities',
                                ]
                                b = [
                                    'DiscontinuedOperations',
                                    'Financing',
                                    'Operating',
                                    'Other',
                                    'Miscellaneous',
                                ]
                                for l in q:
                                    if l in d:
                                        h = 'p'
                                        for p in b:
                                            u = 0
                                            while u < len(b):
                                                if p in d:
                                                    h = ''
                                                u = u + 1
                                        if h == 'p':
                                            try:
                                                i = 0
                                                while CashFlowStatement[key][i] == None:
                                                    i = i + 1
                                                ARCHvalue = CashFlowStatement[key][i]
                                                CashFlowStatement[key][i] = None
                                            except:
                                                if CashFlowStatement[key] != None:
                                                    ARCHvalue = CashFlowStatement[key]
                                                    CashFlowStatement[key] = None
                                                else:
                                                    ARCHvalue = 0
                                            if ARCHvalue != 0:
                                                InvestingActivities.append(ARCHvalue)
                                                InvestingActivitiesRank = r
                                r = r + 1
                            a.InvestingActivities = sum(InvestingActivities)
                        except:
                            pass
                        #
                        # Total Financing Activities
                        try:
                            FinancingActivities = []
                            FinancingActivitiesRank = None
                            r = 0
                            for key, value in CashFlowStatement.items():
                                d = key
                                q = [
                                    'FinancingActivities',
                                ]
                                b = [
                                    'DiscontinuedOperations',
                                    'InvestingActivities',
                                    'OperatingActivities',
                                    'OtherFinancingActivities',
                                ]
                                for l in q:
                                    if l in d:
                                        h = 'p'
                                        for p in b:
                                            u = 0
                                            while u < len(b):
                                                if p in d:
                                                    h = ''
                                                u = u + 1
                                        if h == 'p':
                                            try:
                                                i = 0
                                                while CashFlowStatement[key][i] == None:
                                                    i = i + 1
                                                ARCHvalue = CashFlowStatement[key][i]
                                                CashFlowStatement[key][i] = None
                                            except:
                                                if CashFlowStatement[key] != None:
                                                    ARCHvalue = CashFlowStatement[key]
                                                    CashFlowStatement[key] = None
                                                else:
                                                    ARCHvalue = 0
                                            if ARCHvalue != 0:
                                                FinancingActivities.append(ARCHvalue)
                                                FinancingActivitiesRank = r
                                r = r + 1
                            a.FinancingActivities = sum(FinancingActivities)
                        except:
                            pass
                        #
                        # increase decrease in cash
                        try:
                            c = a.OperatingActivities
                            c = c + a.InvestingActivities
                            c = c + a.FinancingActivities
                            c = c + cf.EffectOfExchangeRateOnCash
                            a.IncreaseDecreaseInCash = c
                        except:
                            pass
                        #
                        # cash beginning balance backwards
                        try:
                            CashEndingBalance = []
                            r = 0
                            s = 'a'
                            for key, value in CashFlowStatement.items():
                                if r > FinancingActivitiesRank:
                                    d = key
                                    q = [
                                        'Cash',
                                        'Balance',
                                    ]
                                    b = [
                                        'Acquire',
                                        'Acquisition',
                                        'Beginning',
                                        'ChangeIn',
                                        'Decrease',
                                        'Disposal',
                                        'Distributed',
                                        'Dividends',
                                        'Effect',
                                        'Exchange',
                                        'Financing',
                                        'Flows'
                                        'From',
                                        'Hedge',
                                        'Impairment',
                                        'Increase',
                                        'Investing',
                                        'Net',
                                        'NonCash',
                                        'Operating',
                                        'Paid',
                                        'Payment',
                                        'Proceeds',
                                        'Provided',
                                        'Purchase',
                                        'Received',
                                        'Restructuring',
                                        'Sale',
                                        'Selling',
                                    ]
                                    for l in q:
                                        if s == 'a':
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        CashEndingBalance.append(ARCHvalue)
                                                        s = 'z'
                                r = r + 1
                            c = sum(CashEndingBalance)
                            if c == 0:
                                c = tb.Cash
                            c = c - a.IncreaseDecreaseInCash
                            cf.CashBeginningBalance = c
                        except:
                            pass
                        #
                        # supplemental cash flow disclosure
                        try:
                            #
                            # Cash paid for in interest
                            try:
                                CashPaidForInterest = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > FinancingActivitiesRank:
                                        d = key
                                        q = [
                                            'CashPaidForInterest',
                                        ]
                                        b = [
                                            'Deferred',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        CashPaidForInterest.append(ARCHvalue)
                                    r = r + 1
                                cf.CashPaidForInterest = sum(CashPaidForInterest)
                            except:
                                pass
                            #
                            # Cash paid for taxes
                            try:
                                CashPaidForTaxes = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > FinancingActivitiesRank:
                                        d = key
                                        q = [
                                            'CashPaidForIncomeTaxes',
                                            'IncomeTaxesPaid',
                                        ]
                                        b = [
                                            'Deferred',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        CashPaidForTaxes.append(ARCHvalue)
                                    r = r + 1
                                cf.CashPaidForTaxes = sum(CashPaidForTaxes)
                            except:
                                pass
                        except:
                            pass
                        #
                        # dataframe
                        try:
                            #
                            df = pd.DataFrame({
                                #
                                '..': 
                                    [
                                    'a.IncreaseDecreaseInCash',
                                    'cf.CashPaidForInterest',
                                    'cf.CashPaidForTaxes',
                                    ],
                                #
                                '.':
                                    [
                                    '{:,}'.format(a.IncreaseDecreaseInCash),
                                    '{:,}'.format(cf.CashPaidForInterest),
                                    '{:,}'.format(cf.CashPaidForTaxes),
                                    ],
                            })
                            print(df)
                            print('\n' + 137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                        #
                        # anomalies attributable to the SEC
                        try:
                            #
                            print(e.EntityRegistrantName)
                            print('anomalies attributable to the SEC')
                            print(DPED)
                            print(137*'-' + '\n')
                            #
                            # Operating Activities
                            try:
                                r = 0
                                OA = 0
                                f = [
                                    'Beginning',
                                    'CashAndCashEquivalents',
                                    'IncomeFromContinuingOperation',
                                    'NetCashProvided',
                                    'NetChangeInOper',
                                    'NetEarning',
                                    'NetIncome',
                                    'NetLoss',
                                    'Net(Loss)',
                                    'Total',
                                ]
                                for key, value in CashFlowStatement.items():
                                    skip = ''
                                    if r < OperatingActivitiesRank:
                                        for g in f:
                                            if g in key:
                                                skip = 'skip'
                                        if skip == '':
                                            if value != None:
                                                OA = OA + value
                                    r = r + 1
                                #
                                c = OA
                                c = c - a.OperatingActivities
                                c = c - a.NetIncome
                                a.AnomalyOperatingActivitiesSEC = c
                                #
                                # dataframe
                                try:
                                    #
                                    df = pd.DataFrame({
                                        #
                                        'operating activities': 
                                            [
                                            'Total',
                                            'Components',
                                            'SEC Anomaly',
                                            ],
                                        #
                                        '.':
                                            [
                                            '{:,}'.format(a.OperatingActivities + a.NetIncome),
                                            '{:,}'.format(OA),
                                            '{:,}'.format(a.AnomalyOperatingActivitiesSEC),
                                            ],
                                    })
                                    print(df)
                                    print('\n' + 137*'-')
                                    #
                                    tb.save()
                                    a.save()
                                except:
                                    pass
                            except:
                                pass
                            #
                            # Investing Activities
                            try:
                                #
                                r = 0
                                IA = 0
                                f = [
                                    'Beginning',
                                    'CashAndCashEquivalents',
                                    'NetChange',
                                    'Total',
                                ]
                                for key, value in CashFlowStatement.items():
                                    skip = ''
                                    if r > OperatingActivitiesRank:
                                        if r < InvestingActivitiesRank:
                                            for g in f:
                                                if g in key:
                                                    skip = 'skip'
                                            if skip == '':
                                                if value != None:
                                                    IA = IA + value
                                    r = r + 1
                                #
                                c = IA
                                c = c - a.InvestingActivities
                                a.AnomalyInvestingActivitiesSEC = c
                                #
                                # dataframe
                                try:
                                    #
                                    df = pd.DataFrame({
                                        #
                                        'investing activities': 
                                            [
                                            'Total',
                                            'Components',
                                            'SEC Anomaly',
                                            ],
                                        #
                                        '.':
                                            [
                                            '{:,}'.format(a.InvestingActivities),
                                            '{:,}'.format(IA),
                                            '{:,}'.format(a.AnomalyInvestingActivitiesSEC),
                                            ],
                                    })
                                    print(df)
                                    print('\n' + 137*'-')
                                    #
                                    tb.save()
                                    a.save()
                                except:
                                    pass
                            except:
                                pass
                            #
                            # Financing Activities
                            try:
                                r = 0
                                FA = 0
                                skip = ''
                                f = [
                                    'Total',
                                    'NetChangeInFinancing',
                                    'NetChangeInInvesting',
                                    'NetCashProvided',
                                ]
                                h = [
                                    'Payment',
                                    'Purchase',
                                    'Repayment',
                                    'Repurchase',
                                ]
                                i = [
                                    '(Paymen',
                                    '(Purchas',
                                    '(Repaymen',
                                    '(Repurchas',
                                ]
                                for key, value in CashFlowStatement.items():
                                    skip = ''
                                    d = key
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            if value != None:
                                                for g in f:
                                                    if g in key:
                                                        skip = 'skip'
                                                if skip == '':
                                                    for k in h:
                                                        if k in d:
                                                            y = 'y'
                                                            for t in i:
                                                                if t in d:
                                                                    y = 'n'
                                                            if y == 'y':
                                                                value = -abs(value)
                                                    if value != None:
                                                        FA = FA + value
                                    r = r + 1
                                #
                                c = FA
                                c = c - a.FinancingActivities
                                a.AnomalyFinancingActivitiesSEC = c
                                #
                                # dataframe
                                try:
                                    #
                                    df = pd.DataFrame({
                                        #
                                        'financing activities': 
                                            [
                                            'Total',
                                            'Components',
                                            'SEC Anomaly',
                                            ],
                                        #
                                        '.':
                                            [
                                            '{:,}'.format(a.FinancingActivities),
                                            '{:,}'.format(FA),
                                            '{:,}'.format(a.AnomalyFinancingActivitiesSEC),
                                            ],
                                    })
                                    print(df)
                                    print('\n' + 137*'-' + '\n')
                                    #
                                    tb.save()
                                    a.save()
                                except:
                                    pass
                            except:
                                pass
                        except:
                            pass
                        #
                        #
                        # operating activities components
                        try:
                            print(e.EntityRegistrantName)
                            print('operating activities')
                            print(DPED)
                            print(137*'-' + '\n')
                            #
                            # depreciation depletion and amortization
                            try:
                                DepreciationDepletionAndAmortization = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'Depreciation',
                                            'Amortization',
                                        ]
                                        b = [
                                            'Acquire',
                                            'Acquisition',
                                            'Debt',
                                            'Decrease',
                                            'Disposal',
                                            'DiscontinuedOperation',
                                            'Ending',
                                            'Financing',
                                            'Hedge',
                                            'Increase',
                                            'Impairment',
                                            'Investment',
                                            'Investing',
                                            'Payment',
                                            'Proceeds',
                                            'Purchase',
                                            'Selling',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        DepreciationDepletionAndAmortization.append(ARCHvalue)
                                    r = r + 1
                                cf.DepreciationDepletionAndAmortization = sum(DepreciationDepletionAndAmortization)
                            except:
                                pass
                            #
                            # Gain Related To Disposal Or Sale
                            try:
                                GainRelatedToDisposalOrSale = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'InvestmentGain',
                                            'InsuranceProceedsReceivedForDamage',
                                            'LossesOnDisposal',
                                            'LossOnDisposal',
                                            'Loss(Gain)',
                                            'LossOnDebtConversion',
                                            'GainRelatedTo',
                                            'Gain(Loss',
                                            'GainOnDisposal',
                                            'GainOnDisposition',
                                            'GainOnDivestiture',
                                            'GainOnInsurance',
                                            'GainOnSale',
                                            'GainRelatedToDisposition',
                                            '(Gain)Loss',
                                            '(Gain)AndLoss',
                                            '(Gains)AndLoss',
                                            '(Gains)Loss',
                                            '(Gains)Loss',
                                            '(Gains)AndLoss',
                                            'MarkToMarket',
                                            'NetInvestmentGains',
                                            'SaleOfBusiness',
                                            'SettlementLoss(Gain)',
                                        ]
                                        b = [
                                            'Acquire',
                                            'Acquisition',
                                            'Decrease',
                                            'Ending',
                                            'Financing',
                                            'Hedge',
                                            'Increase',
                                            'Payment',
                                            'Purchase',
                                        ]
                                        k = [
                                            'Gain(Loss)',
                                            'Gains(Losses)',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        for m in k:
                                                            if m in d:
                                                                tempARCHvalue = -abs(ARCHvalue)
                                                                if ARCHvalue != tempARCHvalue:
                                                                    c = a.AnomalyOperatingActivitiesSEC
                                                                    c = c + tempARCHvalue
                                                                    c = c - ARCHvalue
                                                                    a.AnomalyOperatingActivitiesSEC = c 
                                                                    ARCHvalue = tempARCHvalue
                                                        GainRelatedToDisposalOrSale.append(ARCHvalue)
                                    r = r + 1
                                cf.GainRelatedToDisposalOrSale = sum(GainRelatedToDisposalOrSale)
                            except:
                                pass
                            #
                            # Restructuring And Other Special Charges
                            try:
                                RestructuringAndOtherSpecialCharges = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'DebtDiscount',
                                            'Depletion',
                                            'Impairment',
                                            'Restructuring',
                                            'Special',
                                            'LossOnExtinguishmentOfDebt',
                                        ]
                                        b = [
                                            'Acquire',
                                            'Acquisition',
                                            'Decrease',
                                            'DiscontinuedOperation',
                                            'Ending',
                                            'Financing',
                                            'Hedge',
                                            'Increase',
                                            'Payment',
                                            'Purchase',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        RestructuringAndOtherSpecialCharges.append(ARCHvalue)
                                    r = r + 1
                                cf.RestructuringAndOtherSpecialCharges = sum(RestructuringAndOtherSpecialCharges)
                            except:
                                pass
                            #
                            # Accrued Employee Compensation
                            try:
                                AccruedEmployeeCompensation = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'AccruedBenefitsAndWithholdings',
                                            'Compensation',
                                        ]
                                        b = [
                                            'Acquire',
                                            'Acquisition',
                                            'Decrease',
                                            'Disposal',
                                            'DiscontinuedOperation',
                                            'Ending',
                                            'Financing',
                                            'Hedge',
                                            'Increase',
                                            'Investment',
                                            'Investing',
                                            'Operating',
                                            'Payment',
                                            'Proceeds',
                                            'Purchase',
                                            'Selling',
                                            'ShareBasedCompensation',
                                            'StockBasedCompensation',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        AccruedEmployeeCompensation.append(ARCHvalue)
                                    r = r + 1
                                cf.AccruedEmployeeCompensation = sum(AccruedEmployeeCompensation)
                            except:
                                pass                
                            #
                            # share based compensation
                            try:
                                ShareBasedCompensation = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'ShareBasedCompensation',
                                            'ShareBasedEmployeeCompensation',
                                            'StockBasedCompensation',
                                            'StockBasedEmployeeCompensation',
                                        ]
                                        b = [
                                            'Acquire',
                                            'Acquisition',
                                            'Decrease',
                                            'Disposal',
                                            'DiscontinuedOperation',
                                            'Employee',
                                            'Ending',
                                            'Financing',
                                            'Hedge',
                                            'Increase',
                                            'Investment',
                                            'Investing',
                                            'Operating',
                                            'Payment',
                                            'Proceeds',
                                            'Purchase',
                                            'Selling',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        ShareBasedCompensation.append(ARCHvalue)
                                    r = r + 1
                                cf.ShareBasedCompensation = sum(ShareBasedCompensation)
                            except:
                                pass
                            #
                            # increase decrease in income tax expense (benefit)
                            try:
                                IncreaseDecreaseInIncomeTaxExpenseBenefit = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'IncomeTax',
                                            'DeferredIncomeTax',
                                            'DeferredTax',
                                            'Deferredincometaxexpenseforcashflow',
                                            'TaxAct',
                                        ]
                                        b = [
                                            'Payment',
                                            'Purchase',
                                            'Acquisition',
                                            'Acquire',
                                            'CashPaidFor',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncreaseDecreaseInIncomeTaxExpenseBenefit.append(ARCHvalue)
                                    r = r + 1
                                cf.IncreaseDecreaseInIncomeTaxExpenseBenefit = sum(IncreaseDecreaseInIncomeTaxExpenseBenefit)
                            except:
                                pass
                            #
                            # other non cash income expense
                            try:
                                OtherNonCashIncomeExpense = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'ForeignCurrency',
                                            'LandlordContribution',
                                            'NoncashIncomeExpense',
                                            'NonCashInterest',
                                            'NonCashRent',
                                        ]
                                        b = [
                                            'Amortization',
                                            'Payment',
                                            'Purchase',
                                            'Acquisition',
                                            'Acquire',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        OtherNonCashIncomeExpense.append(ARCHvalue)
                                    r = r + 1
                                cf.OtherNonCashIncomeExpense = sum(OtherNonCashIncomeExpense)
                            except:
                                pass
                            #
                            # increase (decrease) in accounts receivable
                            try:
                                IncreaseDecreaseInAccountsReceivable = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'Receivable',
                                            'DoubtfulAccounts',
                                        ]
                                        b = [
                                            'NonTrade',
                                            'Payment',
                                            'Purchase',
                                            'Acquisition',
                                            'Acquire',
                                            'RepurchaseAgreements',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncreaseDecreaseInAccountsReceivable.append(ARCHvalue)
                                    r = r + 1
                                cf.IncreaseDecreaseInAccountsReceivable = sum(IncreaseDecreaseInAccountsReceivable)
                            except:
                                pass
                            #
                            # increase (decrease) in prepaid expenses
                            try:
                                IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'DeferredExpense',
                                            'DeferredRent',
                                            'Deposits',
                                            'Prepaid',
                                        ]
                                        b = [
                                            'Acquire',
                                            'Acquisition',
                                            'Income',
                                            'NonTrade',
                                            'Payment',
                                            'Purchase',
                                            'Tax',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets.append(ARCHvalue)
                                    r = r + 1
                                cf.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets = sum(IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets)
                            except:
                                pass
                            #
                            # increase (decrease) in inventories
                            try:
                                IncreaseDecreaseInInventories = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'Inventor',
                                            'Fifo',
                                            'Lifo',
                                        ]
                                        b = [
                                            'NonTrade',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncreaseDecreaseInInventories.append(ARCHvalue)
                                    r = r + 1
                                cf.IncreaseDecreaseInInventories = sum(IncreaseDecreaseInInventories)
                            except:
                                pass
                            #
                            # increase (decrease) in other receivables and prepaid expenses
                            try:
                                IncreaseDecreaseInOtherReceivables = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'OtherReceivables',
                                            'NonTrade',
                                        ]
                                        b = [
                                            'Payment',
                                            'Purchase',
                                            'Acquisition',
                                            'Acquire',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncreaseDecreaseInOtherReceivables.append(ARCHvalue)
                                    r = r + 1
                                cf.IncreaseDecreaseInOtherReceivables = sum(IncreaseDecreaseInOtherReceivables)
                            except:
                                pass
                            #
                            # increase (decrease) in accounts payable and accrued liabilities
                            try:
                                IncreaseDecreaseInAccountsPayableAndAccruedLiabilities = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'AccountPayable',
                                            'AccountsPayable',
                                            'AccruedLiabilit',
                                            'AccruedExpenses',
                                        ]
                                        b = [
                                            'Acquire',
                                            'Acquisition',
                                            'NonTrade',
                                            'Payment',
                                            'PropertyAndEquipmentInAccountsPayable',
                                            'Purchase',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncreaseDecreaseInAccountsPayableAndAccruedLiabilities.append(ARCHvalue)
                                    r = r + 1
                                cf.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities = sum(IncreaseDecreaseInAccountsPayableAndAccruedLiabilities)
                            except:
                                pass
                            #
                            # increase (decrease) in contract with customer liability
                            try:
                                IncreaseDecreaseInContractWithCustomerLiability = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'ContractWithCustomerLiability',
                                            'DeferredRevenue',
                                            'CustomerDeposits',
                                        ]
                                        b = [
                                            'NonTrade',
                                            'Payment',
                                            'Purchase',
                                            'Acquisition',
                                            'Acquire',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncreaseDecreaseInContractWithCustomerLiability.append(ARCHvalue)
                                    r = r + 1
                                cf.IncreaseDecreaseInContractWithCustomerLiability = sum(IncreaseDecreaseInContractWithCustomerLiability)
                            except:
                                pass
                            #
                            # increase (decrease) in retirement and post-retirement benefits
                            try:
                                IncreaseDecreaseInRetirementBenefits = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'BenefitCost',
                                            'Pension',
                                            'Retirement',
                                        ]
                                        b = [
                                            'NonTrade',
                                            'Payment',
                                            'Purchase',
                                            'Acquisition',
                                            'Acquire',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncreaseDecreaseInRetirementBenefits.append(ARCHvalue)
                                    r = r + 1
                                cf.IncreaseDecreaseInRetirementBenefits = sum(IncreaseDecreaseInRetirementBenefits)
                            except:
                                pass
                            #
                            # increase (decrease) in operating lease current
                            try:
                                IncreaseDecreaseOperatingLeaseCurrent = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'OperatingLease',
                                        ]
                                        b = [
                                            'Acquisition',
                                            'Acquire',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncreaseDecreaseOperatingLeaseCurrent.append(ARCHvalue)
                                    r = r + 1
                                cf.IncreaseDecreaseOperatingLeaseCurrent = sum(IncreaseDecreaseOperatingLeaseCurrent)
                            except:
                                pass
                            #
                            # increase (decrease) in fair value of derivaties
                            try:
                                IncreaseDecreaseInFairValueOfDerivativesOperating = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'Derivative',
                                            'Swap',
                                        ]
                                        b = [
                                            'Acquisition',
                                            'Acquire',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncreaseDecreaseInFairValueOfDerivativesOperating.append(ARCHvalue)
                                    r = r + 1
                                cf.IncreaseDecreaseInFairValueOfDerivativesOperating = sum(IncreaseDecreaseInFairValueOfDerivativesOperating)
                            except:
                                pass
                            #
                            # increase (decrease) in other operating activities
                            try:
                                IncreaseDecreaseInOtherOperatingActivities = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r < OperatingActivitiesRank:
                                        d = key
                                        q = [
                                            'CurrentAssetsAndCurrentLiabilit',
                                            'DiscountedConvertible',
                                            'Equity(Income)Loss',
                                            'EquityIn(Earnings)LossFromNonConsolidated',
                                            'EquityInLossFromNonConsolidated',
                                            'Other',
                                            'Guarantee',
                                            'Miscellaneous',
                                            'NonTrade',
                                            'Research',
                                        ]
                                        b = [
                                            'NetChangeInOperatingAssetsAndLiabilities',
                                            'NonTrade',
                                            'Payment',
                                            'Purchase',
                                            'Acquisition',
                                            'Investing',
                                            'Financing',
                                            'PropertyAndEquipment',
                                        ]
                                        for l in q:
                                            if l in d:
                                                h = 'p'
                                                for p in b:
                                                    u = 0
                                                    while u < len(b):
                                                        if p in d:
                                                            h = ''
                                                        u = u + 1
                                                if h == 'p':
                                                    try:
                                                        i = 0
                                                        while CashFlowStatement[key][i] == None:
                                                            i = i + 1
                                                        ARCHvalue = CashFlowStatement[key][i]
                                                        CashFlowStatement[key][i] = None
                                                    except:
                                                        if CashFlowStatement[key] != None:
                                                            ARCHvalue = CashFlowStatement[key]
                                                            CashFlowStatement[key] = None
                                                        else:
                                                            ARCHvalue = 0
                                                    if ARCHvalue != 0:
                                                        IncreaseDecreaseInOtherOperatingActivities.append(ARCHvalue)
                                    r = r + 1
                                c = sum(IncreaseDecreaseInOtherOperatingActivities)
                                c = c - a.AnomalyOperatingActivitiesSEC
                                cf.IncreaseDecreaseInOtherOperatingActivities = c
                            except:
                                pass
                            #
                            # dataframe
                            try:
                                #
                                df = pd.DataFrame({
                                    #
                                    '..': 
                                        [
                                        'cf.DepreciationDepletionAndAmortization',
                                        'cf.GainRelatedToDisposalOrSale',
                                        'cf.ShareBasedCompensation',
                                        'cf.RestructuringAndOtherSpecialCharges',
                                        'cf.AccruedEmployeeCompensation',
                                        'cf.IncreaseDecreaseInIncomeTaxExpenseBenefit',
                                        'cf.OtherNonCashIncomeExpense',
                                        'cf.IncreaseDecreaseInAccountsReceivable',
                                        'cf.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets',
                                        'cf.IncreaseDecreaseInInventories',
                                        'cf.IncreaseDecreaseInOtherReceivables',
                                        'cf.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities',
                                        'cf.IncreaseDecreaseInContractWithCustomerLiability',
                                        'cf.IncreaseDecreaseInRetirementBenefits',
                                        'cf.IncreaseDecreaseOperatingLeaseCurrent',
                                        'cf.IncreaseDecreaseInFairValueOfDerivativesOperating',
                                        'cf.IncreaseDecreaseInOtherOperatingActivities',
                                        ],
                                    #
                                    '.':
                                        [
                                        '{:,}'.format(cf.DepreciationDepletionAndAmortization),
                                        '{:,}'.format(cf.GainRelatedToDisposalOrSale),
                                        '{:,}'.format(cf.ShareBasedCompensation),
                                        '{:,}'.format(cf.RestructuringAndOtherSpecialCharges),
                                        '{:,}'.format(cf.AccruedEmployeeCompensation),
                                        '{:,}'.format(cf.IncreaseDecreaseInIncomeTaxExpenseBenefit),
                                        '{:,}'.format(cf.OtherNonCashIncomeExpense),
                                        '{:,}'.format(cf.IncreaseDecreaseInAccountsReceivable),
                                        '{:,}'.format(cf.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets),
                                        '{:,}'.format(cf.IncreaseDecreaseInInventories),
                                        '{:,}'.format(cf.IncreaseDecreaseInOtherReceivables),
                                        '{:,}'.format(cf.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities),
                                        '{:,}'.format(cf.IncreaseDecreaseInContractWithCustomerLiability),
                                        '{:,}'.format(cf.IncreaseDecreaseInRetirementBenefits),
                                        '{:,}'.format(cf.IncreaseDecreaseOperatingLeaseCurrent),
                                        '{:,}'.format(cf.IncreaseDecreaseInFairValueOfDerivativesOperating),
                                        '{:,}'.format(cf.IncreaseDecreaseInOtherOperatingActivities),
                                        ],
                                })
                                print(df)
                                print('\n' + 137*'-' + '\n')
                                #
                                tb.save()
                                a.save()
                            except:
                                pass
                        except:
                            pass
                        #
                        # investing activities components
                        try:
                            print(e.EntityRegistrantName)
                            print('investing activities')
                            print(DPED)
                            print(137*'-' + '\n')
                            #
                            # Payments To Acquire Investment
                            try:
                                PaymentsToAcquireInvestments = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > OperatingActivitiesRank:
                                        if r < InvestingActivitiesRank:
                                            d = key
                                            q = [
                                                'Acquisition',
                                                'Investment',
                                                'Maturitie',
                                                'Securitie',
                                                'TradingAsset',
                                            ]
                                            b = [
                                                'Begin',
                                                'CashAnd',
                                                'Disposal',
                                                'Disposition',
                                                'End',
                                                'Gain(Loss)',
                                                'Maturities',
                                                'Proceeds',
                                                'SaleOf',
                                                'SalesOf',
                                                'Sell',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            PaymentsToAcquireInvestments.append(ARCHvalue)
                                    r = r + 1
                                cf.PaymentsToAcquireInvestments = sum(PaymentsToAcquireInvestments)
                            except:
                                pass
                            #
                            # Proceeds Of Investment
                            try:
                                ProceedsOfInvestments = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > OperatingActivitiesRank:
                                        if r < InvestingActivitiesRank:
                                            d = key
                                            q = [
                                                'FinancialInstrument',
                                                'Investments',
                                                'Securities',
                                                'TradingAsset',
                                                'Maturities',
                                                'ProceedsFromDispositionOfLongTermAsset',
                                                'ProceedsFromSaleLeaseBack',
                                                'ProceedsFromSaleLeaseback',
                                                'ReturnOfCapital',
                                            ]
                                            b = [
                                                'Addition',
                                                'Begin',
                                                'CashAnd',
                                                'End',
                                                'Payment',
                                                'Purchase',
                                                'Acquisition',
                                                'Acquire',
                                                'PropertyAndEquipment',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ProceedsOfInvestments.append(ARCHvalue)
                                    r = r + 1
                                cf.ProceedsOfInvestments = sum(ProceedsOfInvestments)
                            except:
                                pass
                            #
                            # Payments To Acquire Property Plant And Equipment
                            try:
                                PaymentsToAcquirePropertyPlantAndEquipment = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > OperatingActivitiesRank:
                                        if r < InvestingActivitiesRank:
                                            d = key
                                            q = [
                                                'Property',
                                                'CapitalExpenditures',
                                                'DeferredTurnaroundAndCatalystCosts',
                                                'PurchasesOfSolarEnergySystems',
                                            ]
                                            b = [
                                                'Proceed',
                                                'Disposal',
                                                'Selling',
                                                'AccountsPayable',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            PaymentsToAcquirePropertyPlantAndEquipment.append(ARCHvalue)
                                    r = r + 1
                                cf.PaymentsToAcquirePropertyPlantAndEquipment = -abs(sum(PaymentsToAcquirePropertyPlantAndEquipment))
                            except:
                                pass
                            #
                            # Proceeds From Disposal of Property Plant And Equipment
                            try:
                                ProceedsFromDisposalsOfPropertyAndEquipment = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > OperatingActivitiesRank:
                                        if r < InvestingActivitiesRank:
                                            d = key
                                            q = [
                                                'Property',
                                            ]
                                            b = [
                                                'Payment',
                                                'Purchase',
                                                'Acquisition',
                                                'Acquire',
                                                'Addition',
                                                'PropertyAndEquipmentInAccountsPayable',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ProceedsFromDisposalsOfPropertyAndEquipment.append(ARCHvalue)
                                    r = r + 1
                                cf.ProceedsFromDisposalsOfPropertyAndEquipment = sum(ProceedsFromDisposalsOfPropertyAndEquipment)
                            except:
                                pass
                            #
                            # Payments To Acquire Businesses and Intangibles Net Of Cash Acquired
                            try:
                                PaymentsToAcquireBusinessesAndIntangibles = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > OperatingActivitiesRank:
                                        if r < InvestingActivitiesRank:
                                            d = key
                                            q = [
                                                'AcquireBusinesses',
                                                'AcquisitionOfBusinesses',
                                                'AcquisitionOfUndividedInterest',
                                                'AcquisitionsNetOfCashAcquired',
                                                'BusinessAcquisitions',
                                                'BusinessCombinations',
                                                'CashPaidForAcquisitions',
                                                'DiverstitureOfBusinesses',
                                                'Intangible',
                                                'PeruAcquisition',
                                                'Mergers',
                                                'PurchasesOfAffAssets',
                                                'PurchasesOfRestaurant',
                                                'PurchasesOfStores',
                                                'Software',
                                                'StrategicInvestments',
                                                'PendingAcquisition',
                                            ]
                                            b = [
                                                'Proceed',
                                                'Disposal',
                                                'Sell',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            PaymentsToAcquireBusinessesAndIntangibles.append(ARCHvalue)
                                    r = r + 1
                                cf.PaymentsToAcquireBusinessesAndIntangibles = sum(PaymentsToAcquireBusinessesAndIntangibles)
                            except:
                                pass
                            #
                            # Proceeds From Disposals Of Businesses and Intangibles
                            try:
                                ProceedsFromDisposalsOfBusinessesAndIntangibles = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > OperatingActivitiesRank:
                                        if r < InvestingActivitiesRank:
                                            d = key
                                            q = [
                                                'Divestiture',
                                                'ProceedsFromTheSaleOfMonster',
                                                'ProceedsFromTransferOfDistributionRights',
                                                'ProceedsFromTheDisposalOfCertainOperations',
                                                'ReverseRepurchaseAgreements',
                                                'SaleOfAssets',
                                                'SaleOfBusiness',
                                                'SalesOfBusiness',
                                                'SalesOfRestaurantBusiness',
                                            ]
                                            b = [
                                                'Acquisition',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ProceedsFromDisposalsOfBusinessesAndIntangibles.append(ARCHvalue)
                                    r = r + 1
                                cf.ProceedsFromDisposalsOfBusinessesAndIntangibles = sum(ProceedsFromDisposalsOfBusinessesAndIntangibles)
                            except:
                                pass
                            #
                            # Proceeds from company-owned life insurance
                            try:
                                ProceedsFromCompanyOwnedLifeInsurance = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > OperatingActivitiesRank:
                                        if r < InvestingActivitiesRank:
                                            d = key
                                            q = [
                                                'LifeInsurance',
                                            ]
                                            b = [
                                                'Acquisition',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ProceedsFromCompanyOwnedLifeInsurance.append(ARCHvalue)
                                    r = r + 1
                                cf.ProceedsFromCompanyOwnedLifeInsurance = sum(ProceedsFromCompanyOwnedLifeInsurance)
                            except:
                                pass
                            #
                            # Reveipt Of Government Grands
                            try:
                                ReveiptOfGovernmentGrants = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > OperatingActivitiesRank:
                                        if r < InvestingActivitiesRank:
                                            d = key
                                            q = [
                                                'ReceiptOfGovernmentGrants',
                                            ]
                                            b = [
                                                'Acquisition',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ReveiptOfGovernmentGrants.append(ARCHvalue)
                                    r = r + 1
                                cf.ReveiptOfGovernmentGrants = sum(ReveiptOfGovernmentGrants)
                            except:
                                pass
                            #
                            # Other Investing Activities
                            try:
                                OtherInvestingActivities = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > OperatingActivitiesRank:
                                        if r < InvestingActivitiesRank:
                                            d = key
                                            q = [
                                                'Other',
                                                'NetTransferOfCash',
                                                'Research',
                                                'RestrictedCash',
                                            ]
                                            b = [
                                                'AccountsPayable',
                                                'Financing',
                                                'Proceeds',
                                                'Repayments',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            OtherInvestingActivities.append(ARCHvalue)
                                    r = r + 1
                                cf.OtherInvestingActivities = sum(OtherInvestingActivities)
                                
                                c = sum(OtherInvestingActivities)
                                c = c - a.AnomalyInvestingActivitiesSEC
                                cf.OtherInvestingActivities = c
                            except:
                                pass
                            #
                            # dataframe
                            try:
                                #
                                df = pd.DataFrame({
                                    #
                                    '..': 
                                        [
                                        'cf.PaymentsToAcquireInvestments',
                                        'cf.ProceedsOfInvestments',
                                        'cf.PaymentsToAcquirePropertyPlantAndEquipment',
                                        'cf.ProceedsFromDisposalsOfPropertyAndEquipment',
                                        'cf.PaymentsToAcquireBusinessesAndIntangibles',
                                        'cf.ProceedsFromDisposalsOfBusinessesAndIntangibles',
                                        'cf.ProceedsFromCompanyOwnedLifeInsurance',
                                        'cf.ReveiptOfGovernmentGrants',
                                        'cf.OtherInvestingActivities',
                                        ],
                                    #
                                    '.':
                                        [
                                        '{:,}'.format(cf.PaymentsToAcquireInvestments),
                                        '{:,}'.format(cf.ProceedsOfInvestments),
                                        '{:,}'.format(cf.PaymentsToAcquirePropertyPlantAndEquipment),
                                        '{:,}'.format(cf.ProceedsFromDisposalsOfPropertyAndEquipment),
                                        '{:,}'.format(cf.PaymentsToAcquireBusinessesAndIntangibles),
                                        '{:,}'.format(cf.ProceedsFromDisposalsOfBusinessesAndIntangibles),
                                        '{:,}'.format(cf.ProceedsFromCompanyOwnedLifeInsurance),
                                        '{:,}'.format(cf.ReveiptOfGovernmentGrants),
                                        '{:,}'.format(cf.OtherInvestingActivities),
                                        ],
                                })
                                print(df)
                                print('\n' + 137*'-' + '\n')
                                #
                                tb.save()
                                a.save()
                                #
                            except:
                                pass
                        except:
                            pass
                        #
                        # financing activities components
                        try:
                            print(e.EntityRegistrantName)
                            print('financing activities')
                            print(DPED)
                            print(137*'-' + '\n')
                            #
                            # Finance Lease Principal Payments
                            try:
                                FinanceLeasePrincipalPayments = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'FinanceLease',
                                                'PrincipalPaymentsOnCapitalLeases',
                                                'PrincipalPaymentsUnderCapitalAndFinancingLease',
                                                'CollateralizedLease',
                                            ]
                                            b = [
                                                'Operating',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            FinanceLeasePrincipalPayments.append(ARCHvalue)
                                    r = r + 1
                                cf.FinanceLeasePrincipalPayments = sum(FinanceLeasePrincipalPayments)
                            except:
                                pass        
                            #
                            # Payments For Repurchase Of Common Stock
                            try:
                                PaymentsForRepurchaseOfCommonStock = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'CommonSharesRepurchase',
                                                'CommonSharesRepurchases',
                                                'CommonStockRepurchase',
                                                'CommonStockRepurchases',
                                                'CompanyStockRepurchase',
                                                'CompanyStockRepurchases',
                                                'CompanySharesRepurchase',
                                                'CompanySharesRepurchases',
                                                'StockForTreasuryRepurchase',
                                                'StockForTreasuryRepurchases',
                                                #
                                                'CommonSharesRepurchased',
                                                'CommonStockRepurchased',
                                                'CompanyStockRepurchased',
                                                'CompanySharesRepurchased',
                                                'StockForTreasuryRepurchased',
                                                #     
                                                'PurchasesOfClassACommonStock',
                                                'PurchasesOfClassACommonShares',
                                                'PurchasesOfClassBCommonStock',
                                                'PurchasesOfClassBCommonShares',
                                                'PurchaseOfCommonShares',
                                                'PurchasesOfCommonShares',
                                                'PurchaseOfCommonStock',
                                                'PurchasesOfCommonStock',
                                                'PurchaseOfCompanyStock',
                                                'PurchasesOfCompanyStock',
                                                'PurchaseOfCompanyShares',
                                                'PurchasesOfCompanyShares',
                                                'PurchaseOfStockForTreasury',
                                                'PurchasesOfStockForTreasury',
                                                'PurchaseOfTreasuryStock',
                                                'PurchaseOfTreasuryShare',
                                                #
                                                'RepurchasesOfClassACommonStock',
                                                'RepurchasesOfClassACommonShares',
                                                'RepurchasesOfClassBCommonStock',
                                                'RepurchasesOfClassBCommonShares',
                                                'RepurchaseOfCommonShares',
                                                'RepurchasesOfCommonShares',
                                                'RepurchaseOfCommonStock',
                                                'RepurchasesOfCommonStock',
                                                'RepurchaseOfCompanyStock',
                                                'RepurchasesOfCompanyStock',
                                                'RepurchaseOfCompanyShares',
                                                'RepurchasesOfCompanyShares',
                                                'RepurchaseOfStockForTreasury',
                                                'RepurchasesOfStockForTreasury',
                                                #
                                                'RetirementOfClassBCommonStock',
                                                'RetirementOfClassBCommonShares',
                                                'RetirementOfCommonStock',
                                                'RetirementOfCommonShare',
                                                #
                                                'TreasuryStockPurchases',
                                                'TreasuryStockRepurchases',
                                                'TreasuryStockRepurchased',
                                            ]
                                            b = [
                                                'Proceeds',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            PaymentsForRepurchaseOfCommonStock.append(ARCHvalue)
                                    r = r + 1
                                cf.PaymentsForRepurchaseOfCommonStock = sum(PaymentsForRepurchaseOfCommonStock)
                            except:
                                pass
                            #
                            # Proceeds From Issuance Of Common Stock
                            try:
                                ProceedsFromIssuanceOfCommonStock = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'IssuanceOfCommonStock',
                                                'IssuancesOfCommonStock',
                                                'IssuancesOfStock',
                                                'ProceedsCommonStockOffering',
                                                'ProceedsFromCommonStockOffering',
                                                'ProceedsFromIssuance',
                                                'SalesOfCommonStock',
                                                'NetProceedsFromEquityOffering',
                                            ]
                                            b = [
                                                'Purchase',
                                                'Payment',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ProceedsFromIssuanceOfCommonStock.append(ARCHvalue)
                                    r = r + 1
                                cf.ProceedsFromIssuanceOfCommonStock = sum(ProceedsFromIssuanceOfCommonStock)
                            except:
                                pass
                            #
                            # Payments (Benefit) Related To Tax Withholding For Share Based Compensation
                            try:
                                PaymentsRelatedToTaxWithholdingForShareBasedCompensation = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'TaxBenefitForShareBased',
                                                'TaxBenefitsForShareBased',
                                                'TaxBenefitForStockBased',
                                                'TaxBenefitsForStockBased',
                                                'TaxBenefitFromShareBased',
                                                'TaxBenefitsFromShareBased',
                                                'TaxBenefitFromStockBased',
                                                'TaxBenefitsFromStockBased',
                                                'TaxesPaidRelatedToNetShareSettlement',
                                                'TaxWithholdingForShareBased',
                                                'TaxWithholdingsOnShareBased',
                                                'TaxesPaidForRestrictedUnitWithholdings',
                                            ]
                                            b = [
                                                'Proceeds',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            PaymentsRelatedToTaxWithholdingForShareBasedCompensation.append(ARCHvalue)
                                    r = r + 1
                                cf.PaymentsRelatedToTaxWithholdingForShareBasedCompensation = sum(PaymentsRelatedToTaxWithholdingForShareBasedCompensation)
                            except:
                                pass
                            #
                            # Payments Of Dividends
                            try:
                                PaymentsOfDividends = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'Dividend',
                                            ]
                                            b = [
                                                'Proceeds',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ARCHvalue = -abs(ARCHvalue)
                                                            PaymentsOfDividends.append(ARCHvalue)
                                    r = r + 1
                                cf.PaymentsOfDividends = sum(PaymentsOfDividends)
                            except:
                                pass
                            #
                            # Payments For Taxes Related To Net Share Settlement Of Equity Award
                            try:
                                PaymentsForTaxesRelatedToNetShareSettlementOfEquityAward = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'ExcessTaxBenefitsFromEquityAwards',
                                                'TaxesRelatedToNetShareSettlement',
                                            ]
                                            b = [
                                                'Proceeds',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            PaymentsForTaxesRelatedToNetShareSettlementOfEquityAward.append(ARCHvalue)
                                    r = r + 1
                                cf.PaymentsForTaxesRelatedToNetShareSettlementOfEquityAward = sum(PaymentsForTaxesRelatedToNetShareSettlementOfEquityAward)
                            except:
                                pass
                            #
                            # Proceeds From Issuance Of Long Term Debt
                            try:
                                ProceedsFromIssuanceOfLongTermDebt = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'Debt',
                                                'FinancingIssuance',
                                                'FinancingCost',
                                                'Loan',
                                                'SeniorNote',
                                            ]
                                            b = [
                                                'Convertible',
                                                'Payment',
                                                'Purchase',
                                                'Repayment',
                                                'Repurchase',
                                                'Revolv',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ProceedsFromIssuanceOfLongTermDebt.append(ARCHvalue)
                                    r = r + 1
                                cf.ProceedsFromIssuanceOfLongTermDebt = sum(ProceedsFromIssuanceOfLongTermDebt)
                            except:
                                pass
                            #
                            # Repayments Of Long Term Debt
                            try:
                                RepaymentsOfLongTermDebt = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'Borrowings',
                                                'Debt',
                                                'DeferredFinancingCosts',
                                                'FinancingRepayments',
                                                'Loan',
                                                'SeniorNotes',
                                            ]
                                            b = [
                                                'Issuance',
                                                'Lease',
                                                'Loans',
                                                'Proceeds',
                                                'Revolv',
                                                'ShortTerm',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            if 'Repayment' in d:
                                                                ARCHvalue = -abs(ARCHvalue)
                                                            RepaymentsOfLongTermDebt.append(ARCHvalue)
                                    r = r + 1
                                cf.RepaymentsOfLongTermDebt = sum(RepaymentsOfLongTermDebt)
                            except:
                                pass
                            #
                            # Proceeds From Repayments Of Commercial Paper
                            try:
                                ProceedsFromRepaymentsOfCommercialPaper = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'CommercialPaper',
                                            ]
                                            b = [
                                                'Acquisition',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ProceedsFromRepaymentsOfCommercialPaper.append(ARCHvalue)
                                    r = r + 1
                                cf.ProceedsFromRepaymentsOfCommercialPaper = sum(ProceedsFromRepaymentsOfCommercialPaper)
                            except:
                                pass
                            #
                            # Repayments Of Convertible
                            try:
                                RepaymentsOfConvertible = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'RepaymentsOfConvertible',
                                                'RepaymentsOfDiscontinuedConvertible',
                                            ]
                                            b = [
                                                'Issuance',
                                                'Proceeds',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            RepaymentsOfConvertible.append(ARCHvalue)
                                    r = r + 1
                                cf.RepaymentsOfConvertible = sum(RepaymentsOfConvertible)
                            except:
                                pass
                            #
                            # Issuance Of Convertible
                            try:
                                IssuanceOfConvertible = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'ConvertibleSeniorNotes',
                                                'IssuancesOfConvertible',
                                                'IssuanceOfSeniorUnsecuredConvertible',
                                            ]
                                            b = [
                                                'Repayment',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            IssuanceOfConvertible.append(ARCHvalue)
                                    r = r + 1
                                cf.IssuanceOfConvertible = sum(IssuanceOfConvertible)
                            except:
                                pass
                            #
                            # Net Change In Short Term Borrowings
                            try:
                                NetChangeInShortTermBorrowings = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'ShortTermBorrowing',
                                                'ShortTermDebt',
                                                'Revolv',
                                            ]
                                            b = [
                                                'CommercialPaper',
                                            ]
                                            g = [
                                                '(Payment)',
                                                '(Repayment)',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            for t in g:
                                                                if t in d:
                                                                    if ARCHvalue < 1:
                                                                        ARCHvalue = -abs(ARCHvalue)
                                                            NetChangeInShortTermBorrowings.append(ARCHvalue)
                                    r = r + 1
                                cf.NetChangeInShortTermBorrowings = sum(NetChangeInShortTermBorrowings)
                            except:
                                pass
                            #
                            # Proceeds from stock option exercices
                            try:
                                ProceedsFromStockOptionExercices = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'StockOption',
                                            ]
                                            b = [
                                                'CommercialPaper',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            ProceedsFromStockOptionExercices.append(ARCHvalue)
                                    r = r + 1
                                cf.ProceedsFromStockOptionExercices = sum(ProceedsFromStockOptionExercices)
                            except:
                                pass
                            #
                            # Other Financing Activities
                            try:
                                OtherFinancingActivities = []
                                r = 0
                                for key, value in CashFlowStatement.items():
                                    if r > InvestingActivitiesRank:
                                        if r < FinancingActivitiesRank:
                                            d = key
                                            q = [
                                                'CallPremiumsPaid',
                                                'CashPooling',
                                                'ConvertibleNote',
                                                'Guarantee',
                                                'InitialPublicOffering',
                                                'NonControllingInterest',
                                                'NoncontrollingInterest',
                                                'Miscellaneous',
                                                'Other',
                                                'Warrants',
                                                'ResaleValueGuarantee',
                                                'RelatedParties',
                                            ]
                                            b = [
                                                'AccountsPayable',
                                            ]
                                            for l in q:
                                                if l in d:
                                                    h = 'p'
                                                    for p in b:
                                                        u = 0
                                                        while u < len(b):
                                                            if p in d:
                                                                h = ''
                                                            u = u + 1
                                                    if h == 'p':
                                                        try:
                                                            i = 0
                                                            while CashFlowStatement[key][i] == None:
                                                                i = i + 1
                                                            ARCHvalue = CashFlowStatement[key][i]
                                                            CashFlowStatement[key][i] = None
                                                        except:
                                                            if CashFlowStatement[key] != None:
                                                                ARCHvalue = CashFlowStatement[key]
                                                                CashFlowStatement[key] = None
                                                            else:
                                                                ARCHvalue = 0
                                                        if ARCHvalue != 0:
                                                            OtherFinancingActivities.append(ARCHvalue)
                                    r = r + 1
                                c = sum(OtherFinancingActivities)
                                c = c - a.AnomalyFinancingActivitiesSEC
                                cf.OtherFinancingActivities = c
                            except:
                                pass
                            #
                            # dataframe
                            try:
                                #
                                df = pd.DataFrame({
                                    #
                                    '..': 
                                        [
                                        'cf.FinanceLeasePrincipalPayments',
                                        'cf.PaymentsForRepurchaseOfCommonStock',
                                        'cf.ProceedsFromIssuanceOfCommonStock',
                                        'cf.PaymentsRelatedToTaxWithholdingForShareBasedCompensation',
                                        'cf.PaymentsOfDividends',
                                        'cf.PaymentsForTaxesRelatedToNetShareSettlementOfEquityAward',
                                        'cf.ProceedsFromIssuanceOfLongTermDebt',
                                        'cf.ProceedsFromRepaymentsOfCommercialPaper',
                                        'cf.RepaymentsOfConvertible',
                                        'cf.IssuanceOfConvertible',
                                        'cf.NetChangeInShortTermBorrowings',
                                        'cf.ProceedsFromStockOptionExercices',
                                        'cf.OtherFinancingActivities',
                                        ],
                                    #
                                    '.':
                                        [
                                        '{:,}'.format(cf.FinanceLeasePrincipalPayments),
                                        '{:,}'.format(cf.PaymentsForRepurchaseOfCommonStock),
                                        '{:,}'.format(cf.ProceedsFromIssuanceOfCommonStock),
                                        '{:,}'.format(cf.PaymentsRelatedToTaxWithholdingForShareBasedCompensation),
                                        '{:,}'.format(cf.PaymentsOfDividends),
                                        '{:,}'.format(cf.PaymentsForTaxesRelatedToNetShareSettlementOfEquityAward),
                                        '{:,}'.format(cf.ProceedsFromIssuanceOfLongTermDebt),
                                        '{:,}'.format(cf.ProceedsFromRepaymentsOfCommercialPaper),
                                        '{:,}'.format(cf.RepaymentsOfConvertible),
                                        '{:,}'.format(cf.IssuanceOfConvertible),
                                        '{:,}'.format(cf.NetChangeInShortTermBorrowings),
                                        '{:,}'.format(cf.ProceedsFromStockOptionExercices),
                                        '{:,}'.format(cf.OtherFinancingActivities),
                                        ],
                                })
                                print(df)
                                print('\n' + 137*'-' + '\n')
                                #
                                tb.save()
                                a.save()
                            except:
                                pass
                        except:
                            pass
                    except:
                        pass
                    #
                    # save
                    tb.save()
                    cf.save()
                    a.save()
                except:
                    pass
        #
        #
        # number of shares outstanding
        if UpToDate is None:
            try:
                print(e.EntityRegistrantName)
                print('Number of shares outstanding')
                print(DPED)
                print(137*'-' + '\n')
                #
                OutstandingShares = []
                #
                OutstandingSharesURL = 'https://www.sec.gov/Archives/edgar/data/' + EntityCentralIndexKey + '/' + accessionnumber.replace('-','') + '/' 'R1.htm'
                #
                content = requests.get(OutstandingSharesURL).content
                #
                soup = BeautifulSoup(content, 'html')
                #
                q = soup.find_all('tr')
                #
                p = 0
                while p < len(q) - 1:
                    try:
                        d = q[p].find_all('a')[0].text
                        if 'OUTSTANDING' in d.upper():
                            OutstandingShares.append(p)
                    except:
                        pass
                    p = p + 1
                #
                b = 0
                for h in OutstandingShares:
                    #
                    b = b + int(q[h].find_all('td', class_='nump')[0].text.replace(',',''))
                #
                # dad
                d = soup.find_all('tr')[0].text
                q = [
                    b,
                    d,
                ]
                #
                for p in q:
                    if 'SHARES IN MILLIONS' in d.upper():
                        dad = 1000000
                    elif 'SHARES IN THOUSANDS' in d.upper():
                        dad = 1000
                    else:
                        dad = 1
                #
                a.EntityCommonStockSharesOutstanding = b * dad
                #
                a.save()
                #
                print('number of shares outstanding: ' + str('{:,}'.format(a.EntityCommonStockSharesOutstanding)))
                print('\n' + 137*'-' + '\n')
            except:
                pass
        #
        #
        # stock price
        try:
            #
            if GetStockPrice == 'yes':
                #
                print(e.EntityRegistrantName)
                print('stock price')
                print(DPED)
                print(137*'-' + '\n')
                #
                if scopedperiod == 'lastyear':
                    #
                    try:
                        #
                        d = requests.get('https://api.marketstack.com/v1/tickers/' + TradingSymbol + '/eod', params)
                        #
                        p = d.json()['data']['name']
                        q = d.json()['data']['symbol']
                        b = d.json()['data']['eod'][0]['date']
                        stockprice = d.json()['data']['eod'][0]['close']
                        #
                        a.StockPrice = stockprice
                        e.StockPrice = stockprice
                        a.save()
                        e.save()
                    except:
                        pass
                #
                else:
                    if UpToDate is None:
                        try:
                            q = 0
                            p = ''
                            while q < 9:
                                if p == '':
                                    try:
                                        d = datetime.datetime.strptime(tb.FilingDate, '%Y-%m-%d')
                                        d = d - datetime.timedelta(days=q)
                                        d = str(d)[:10]
                                        b = requests.get('https://api.marketstack.com/v1/tickers/' + TradingSymbol + '/eod/' + d, params)
                                        stockprice = b.json()['close']
                                        if stockprice != 0:
                                            p = 'h'
                                    except:
                                        pass
                                else:
                                    pass
                                q = q + 1
                            if p == 'h':
                                try:
                                    a.StockPrice = stockprice
                                    a.save()
                                except:
                                    pass
                        except:
                            pass
                #
                print('stock price: ' + str(a.StockPrice))
                print(137*'-' + '\n')
                #
        except:
            pass
        #
        #
        # save
        try:
            #
            #
            # Delete the content of the download file
            try:
                files = glob.glob('A:/clock/φ/algorithm/downloads/*')
                for f in files:
                    os.remove(f)
            except:
                pass
            #
            tb.save()
            cf.save()
            a.save()
            e.save()
            #
            print(str(e.EntityRegistrantName) + ' (' + str(e.TradingSymbol) + '), ' + str(tb.DocumentPeriodEndDate) + ' (' + str(tb.Period) + ') financial statements arched.')
            print(137 * '-' + '\n')
            #
        except:
            print('---Could not save.')
    #
    #
    # stockholders equity beginning balances
    if BeginningBalances == 'yes':
        if UpToDate is None:
            #
            print(137*'-' + '\n')
            print(e.EntityRegistrantName)
            print('beginning balances')
            print(137*'-' + '\n')
            #
            for scopedperiod in scopedperiods:
                #
                print('Period: ' + scopedperiod)
                #
                # beginning balances
                try:
                    #
                    # Model Current Year Beginning Balance
                    tb = TrialBalance.objects.get(TradingSymbol=TradingSymbol, Period=scopedperiod)
                    a = AuditData.objects.get(TradingSymbol=TradingSymbol, Period=scopedperiod)
                    #
                    chronology = {
                        'lastyear': 'secondlastyear',
                        'secondlastyear': 'thirdlastyear',
                        'thirdlastyear': 'fourthlastyear',
                        'fourthlastyear': 'fifthlastyear',
                        'fifthlastyear': 'sixthlastyear',
                        'sixthlastyear': 'seventhlastyear',
                    }
                    #
                    prioryear = chronology[scopedperiod]
                    #
                    # Model Prior Year Beginning Balance
                    try:
                        backwards = 'yes'
                        prioryeartb = TrialBalance.objects.get(TradingSymbol=TradingSymbol, Period=prioryear)
                        prioryeara = AuditData.objects.get(TradingSymbol=TradingSymbol, Period=prioryear)
                        if prioryeara.RetainedEarnings != 0:
                            backwards = ''
                    except:
                        pass
                    #
                    #
                    # Common Shares - Beginning Balance
                    if backwards == '':
                        tb.CommonSharesBeginning = prioryeara.CommonShares
                    else:
                        c = a.CommonShares
                        c = c - tb.CommonStockIssued
                        c = c - tb.ShareBasedCompensation
                        tb.CommonSharesBeginning = c
                    #
                    # Retained Earnings - Beginning Balance
                    if backwards == '':
                        tb.RetainedEarningsBeginning = prioryeara.RetainedEarnings
                    else:
                        c = a.RetainedEarnings
                        c = c - tb.DividendsAndDividendEquivalentsDeclared
                        c = c - tb.CommonStockRepurchasedAndRetired
                        c = c - tb.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts
                        c = c - a.NetIncome
                        tb.RetainedEarningsBeginning = c
                    #
                    # Accumulated Other Comprehensive Income - Beginning Balance
                    if backwards == '':
                        tb.AccumulatedOtherComprehensiveIncomeBeginning = prioryeara.AccumulatedOtherComprehensiveIncome
                    else:
                        c = a.AccumulatedOtherComprehensiveIncome
                        c = c - tb.ChangeInForeignCurrencyTranslationAdjustment
                        c = c - tb.ChangeInUnrealizedGainsLossesOnDerivativeInstruments
                        c = c - tb.ChangeInUnrealizedGainsLossesOnInvestments
                        tb.AccumulatedOtherComprehensiveIncomeBeginning = c
                    #
                    #
                    # Treasury Stocks - Beginning Balance
                    if backwards == '':
                        tb.TreasurySharesBeginning = prioryeara.TreasuryShares
                    else:
                        c = a.TreasuryShares
                        tb.TreasurySharesBeginning = c
                    #
                    #
                    # Employee Benefit Trust - Beginning Balance
                    if backwards == '':
                        tb.EmployeeBenefitTrustBeginning = prioryeara.EmployeeBenefitTrust
                    else:
                        c = a.EmployeeBenefitTrust
                        tb.EmployeeBenefitTrustBeginning = c
                    #
                    #
                    # Non Controling Interest - Beginning Balance
                    if backwards == '':
                        c = prioryeara.NonControllingInterests
                        c = c - tb.DividendsDeclaredToNonControllingInterests
                        c = c - tb.NonControllingInterestsOthers
                        tb.NonControllingInterestsBeginning = c
                    else:
                        tb.NonControllingInterestsBeginning = a.NonControllingInterests
                except:
                    pass
                #
                # dataframe
                try:
                    #
                    df = pd.DataFrame({
                        #
                        scopedperiod: 
                            [
                            'tb.CommonSharesBeginning',
                            'tb.RetainedEarningsBeginning',
                            'tb.AccumulatedOtherComprehensiveIncomeBeginning',
                            'tb.TreasurySharesBeginning',
                            'tb.EmployeeBenefitTrustBeginning',
                            'tb.NonControllingInterestsBeginning',
                            ],
                        #
                        '.':
                            [
                            '{:,}'.format(tb.CommonSharesBeginning),
                            '{:,}'.format(tb.RetainedEarningsBeginning),
                            '{:,}'.format(tb.AccumulatedOtherComprehensiveIncomeBeginning),
                            '{:,}'.format(tb.TreasurySharesBeginning),
                            '{:,}'.format(tb.EmployeeBenefitTrustBeginning),
                            '{:,}'.format(tb.NonControllingInterestsBeginning),
                            ],
                    })
                    print(df)
                    print('\n' + 137*'-' + '\n')
                    #
                    tb.save()
                    a.save()
                except:
                    pass
    #
    #
    # anomalies & corrections
    if Regularize == 'yes':
        if UpToDate is None:
            #
            for scopedperiod in scopedperiods:
                # 
                print(e.EntityRegistrantName)
                print('Regularizations')
                print(tb.DocumentPeriodEndDate)
                print(137*'-' + '\n')
                #
                tb = TrialBalance.objects.get(TradingSymbol=TradingSymbol, Period=scopedperiod)
                a = AuditData.objects.get(TradingSymbol=TradingSymbol, Period=scopedperiod)
                #
                #
                # anomalies in fs
                try:
                    #
                    #
                    # current assets
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            tb.Cash,
                            tb.ShortTermInvestments,
                            tb.AccountsReceivable,
                            tb.Inventories,
                            tb.PrepaidExpenses,
                            tb.NonTradeReceivables,
                            tb.DeferredTaxAssetsCurrent,
                            tb.OtherCurrentAssets,
                            tb.DiscontinuedOperationsCurrent,
                        ]
                        Total = a.CurrentAssets
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        tb.OtherCurrentAssets = tb.OtherCurrentAssets - Anomaly
                        #
                        a.AnomalyCurrentAssets = (Anomaly - a.AnomalyCurrentAssetsSEC)
                        #
                        # dataframe                        
                        try:
                            df = pd.DataFrame({
                                #
                                'anomaly current assets': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyCurrentAssetsSEC',
                                    'tb.OtherCurrentAssets',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyCurrentAssetsSEC),
                                    '{:,}'.format(tb.OtherCurrentAssets),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # non-current assets
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            tb.LongTermReceivables,
                            tb.DeferredCharges,
                            tb.Investments,
                            tb.PropertyPlantAndEquipment,
                            tb.OperatingLeaseRightOfUseAssets,
                            tb.FinanceLeaseRightOfUseAssets,
                            tb.IntangibleAssets,
                            tb.Goodwill,
                            tb.DeferredTaxAssetsNonCurrent,
                            tb.DefinedBenefitPensionAndOtherSimilarPlans,
                            tb.OtherNonCurrentAssets,
                            tb.DiscontinuedOperations,
                        ]
                        Total = a.NonCurrentAssets
                        #
                        Components = sum(Components)
                        Anomaly = Components - Total
                        #
                        tb.OtherNonCurrentAssets = tb.OtherNonCurrentAssets - Anomaly
                        #
                        a.AnomalyNonCurrentAssets = (Anomaly - a.AnomalyNonCurrentAssetsSEC)
                        #
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'anomaly non current assets': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyNonCurrentAssetsSEC',
                                    'tb.OtherNonCurrentAssets',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyNonCurrentAssetsSEC),
                                    '{:,}'.format(tb.OtherNonCurrentAssets),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # current liabilities
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            tb.AccountsPayableAndAccruedLiabilities,
                            tb.EmployeeCompensationCurrent,
                            tb.OperatingLeasesCurrent,
                            tb.FinanceLeasesCurrent,
                            tb.CapitalLeaseAndFinancingObligationsCurrent,
                            tb.DeferredRevenueAndDepositsCurrent,
                            tb.AccruedTaxLiabilities,
                            tb.DeferredTaxLiabilitiesCurrent,
                            tb.CommercialPapers,
                            tb.OtherCurrentLiabilities,
                            tb.DiscontinuedOperationsLiabilitiesCurrent,
                            tb.DividendsPayable,
                            tb.ShortTermBorrowings,
                            tb.ShortTermPortionOfLongTermDebt,
                        ]
                        Total = a.CurrentLiabilities
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        tb.OtherCurrentLiabilities = tb.OtherCurrentLiabilities - Anomaly
                        #
                        a.AnomalyCurrentLiabilities = (a.AnomalyCurrentLiabilitiesSEC - Anomaly)
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'anomaly current liabilities': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyCurrentLiabilitiesSEC',
                                    'tb.OtherCurrentLiabilities',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyCurrentLiabilitiesSEC),
                                    '{:,}'.format(tb.OtherCurrentLiabilities),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # non-current liabilities
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            tb.LongTermDebt,
                            tb.RetirementBenefits,
                            tb.OperatingLeasesNonCurrent,
                            tb.FinanceLeasesNonCurrent,
                            tb.CapitalLeaseAndFinancingObligationsNonCurrent,
                            tb.DeferredRevenueAndDepositsNonCurrent,
                            tb.AccruedTaxLiabilitiesNonCurrent,
                            tb.DeferredTaxLiabilitiesNonCurrent,
                            tb.OtherNonCurrentLiabilities,
                            tb.DiscontinuedOperationsLiabilitiesNonCurrent,
                        ]
                        if a.NonCurrentLiabilities == 0:
                            if a.Liabilities == 0:
                                a.Liabilities = a.LiabilitiesAndStockholdersEquity - a.StockholdersEquity
                            a.NonCurrentLiabilities = a.Liabilities - a.CurrentLiabilities
                        #
                        Total = a.NonCurrentLiabilities
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        tb.OtherNonCurrentLiabilities = tb.OtherNonCurrentLiabilities - Anomaly  
                        #
                        a.AnomalyNonCurrentLiabilities = (a.AnomalyNonCurrentLiabilitiesSEC - Anomaly) 
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'anomaly non current liabilities': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyNonCurrentLiabilitiesSEC',
                                    'tb.OtherNonCurrentLiabilities',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyNonCurrentLiabilitiesSEC),
                                    '{:,}'.format(tb.OtherNonCurrentLiabilities),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # gross margin
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            tb.Sales,
                            tb.CostOfSales,
                        ]
                        if a.GrossMargin == 0:
                            a.GrossMargin = sum(Components)
                        #
                        Total = a.GrossMargin
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        if tb.Sales == 0:
                            tb.Sales = -Anomaly
                        #
                        elif tb.CostOfSales == 0:
                            tb.CostOfSales = -Anomaly
                        #
                        else:
                            if Anomaly > 0:
                                tb.Sales = tb.Sales - Anomaly
                            else:
                                tb.CostOfSales = tb.CostOfSales - Anomaly
                        #
                        a.AnomalyGrossMargin = Anomaly
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'anomaly gross margin': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyGrossMargin',
                                    'tb.OtherNonCurrentLiabilities',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyGrossMargin),
                                    '{:,}'.format(tb.OtherNonCurrentLiabilities),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # operating expenses
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            tb.ResearchAndDevelopment,
                            tb.SellingGeneralAdministrativeAndMarketing,
                        ]
                        if a.OperatingExpenses == 0:
                            #
                            if a.OperatingIncome == 0:
                                a.OperatingIncome = a.GrossMargin + sum(Components)
                            #
                            a.OperatingExpenses = a.OperatingIncome - a.GrossMargin
                        #
                        Total = a.OperatingExpenses
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        tb.SellingGeneralAdministrativeAndMarketing = tb.SellingGeneralAdministrativeAndMarketing - Anomaly
                        #
                        a.AnomalyOperatingExpenses = Anomaly
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'anomaly selling, administrative and marketing': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyGrossMargin',
                                    'tb.SellingGeneralAdministrativeAndMarketing',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyOperatingExpenses),
                                    '{:,}'.format(tb.SellingGeneralAdministrativeAndMarketing),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # operating income
                    try:
                        Anomaly = 0
                        Components = [
                            a.GrossMargin,
                            a.OperatingExpenses,
                        ]
                        Total = a.OperatingIncome
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        a.AnomalyOperatingIncome = Anomaly
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'operating income': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyOperatingIncome',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyOperatingIncome),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # income before taxes
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            a.OperatingIncome,
                            tb.ImpairmentRestructuringAndOtherSpecialCharges,
                            tb.NonOperatingIncome,
                        ]
                        Total = a.IncomeBeforeTaxes
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        tb.NonOperatingIncome = tb.NonOperatingIncome - Anomaly
                        #
                        a.AnomalyNonOperatingIncome = Anomaly
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'income before taxes': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyNonOperatingIncome',
                                    'tb.NonOperatingIncome',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyNonOperatingIncome),
                                    '{:,}'.format(tb.NonOperatingIncome),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # net income
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            a.IncomeBeforeTaxes,
                            tb.IncomeTaxExpenseBenefit,
                            tb.NetIncomeFromDiscontinuedOperations,
                        ]
                        Total = a.NetIncome
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        a.AnomalyNetIncome = Anomaly
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'net income': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyNetIncome',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyNetIncome),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # other comprehensive income
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            tb.ChangeInForeignCurrencyTranslationAdjustment,
                            tb.ChangeInUnrealizedGainsLossesOnDerivativeInstruments,
                            tb.ChangeInUnrealizedGainsLossesOnInvestments,
                            tb.ChangeInDefinedBenefitPensionAndOtherSimilarPlans,
                            tb.IncomeTaxOnOtherComprehensiveIncome,
                        ]
                        #
                        Total = a.OtherComprehensiveIncome
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        c = tb.ChangeInUnrealizedGainsLossesOnInvestments
                        c = c - Anomaly
                        tb.ChangeInUnrealizedGainsLossesOnInvestments = c
                        #
                        a.AnomalyOtherComprehensiveIncome = Anomaly
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'other comprehensive income': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyOtherComprehensiveIncome',
                                    'tb.ChangeInUnrealizedGainsLossesOnInvestments',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyOtherComprehensiveIncome),
                                    '{:,}'.format(tb.ChangeInUnrealizedGainsLossesOnInvestments),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # common shares
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            tb.CommonSharesBeginning,
                            tb.CommonStockIssued,
                            tb.ShareBasedCompensation,
                        ]
                        #
                        Total = a.CommonShares
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        tb.ShareBasedCompensation = tb.ShareBasedCompensation - Anomaly
                        #
                        a.AnomalyCommonShares = Anomaly
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'common shares': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyCommonShares',
                                    'tb.ShareBasedCompensation',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyCommonShares),
                                    '{:,}'.format(tb.ShareBasedCompensation),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # accumulated other comprehensive income
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            tb.AccumulatedOtherComprehensiveIncomeBeginning,
                            tb.ChangeInForeignCurrencyTranslationAdjustment,
                            tb.ChangeInUnrealizedGainsLossesOnDerivativeInstruments,
                            tb.ChangeInUnrealizedGainsLossesOnInvestments,
                            tb.ChangeInDefinedBenefitPensionAndOtherSimilarPlans,
                            tb.IncomeTaxOnOtherComprehensiveIncome,
                        ]
                        #
                        Total = a.AccumulatedOtherComprehensiveIncome
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        c = tb.ChangeInUnrealizedGainsLossesOnInvestments
                        c = c - Anomaly
                        tb.ChangeInUnrealizedGainsLossesOnInvestments = c
                        #
                        c = a.OtherComprehensiveIncome
                        c = c - Anomaly
                        a.OtherComprehensiveIncome = c
                        #
                        c = a.AnomalyOtherComprehensiveIncome
                        c = c + Anomaly
                        a.AnomalyOtherComprehensiveIncome = c
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'accumulated other comprehensive income': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyOtherComprehensiveIncome',
                                    'tb.ChangeInUnrealizedGainsLossesOnInvestments',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyOtherComprehensiveIncome),
                                    '{:,}'.format(tb.ChangeInUnrealizedGainsLossesOnInvestments),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    # 
                    # retained earnings
                    try:
                        Anomaly = 0
                        Components = [
                            tb.RetainedEarningsBeginning,
                            tb.DividendsAndDividendEquivalentsDeclared,
                            tb.CommonStockRepurchasedAndRetired,
                            tb.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts,
                            tb.RetainedEarningsOthers,
                            a.NetIncome,
                        ]
                        #
                        Total = a.RetainedEarnings
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        tb.RetainedEarningsOthers = -Anomaly
                        #
                        a.AnomalyRetainedEarnings = Anomaly
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'retained earnings': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyRetainedEarnings',
                                    'tb.RetainedEarningsOthers',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyRetainedEarnings),
                                    '{:,}'.format(tb.RetainedEarningsOthers),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    # 
                    # treasury shares
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            tb.TreasurySharesBeginning,
                            tb.PurchaseAndSellOfTreasuryShares,
                        ]
                        #
                        Total = a.TreasuryShares
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        c = tb.PurchaseAndSellOfTreasuryShares
                        c = c - Anomaly
                        tb.PurchaseAndSellOfTreasuryShares = c
                        #
                        a.AnomalyTreasuryShares = Anomaly
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'treasury shares': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyTreasuryShares',
                                    'tb.PurchaseAndSellOfTreasuryShares',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyTreasuryShares),
                                    '{:,}'.format(tb.PurchaseAndSellOfTreasuryShares),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    # 
                    # non controlling interests
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            tb.NonControllingInterestsBeginning,
                            tb.DividendsDeclaredToNonControllingInterests,
                            tb.NonControllingInterestsOthers,
                        ]
                        #
                        Total = a.NonControllingInterests
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        tb.NonControllingInterestsOthers = -Anomaly
                        #
                        a.AnomalyNonControllingInterests = Anomaly
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'non controlling interests': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyNonControllingInterests',
                                    'tb.NonControllingInterestsOthers',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyNonControllingInterests),
                                    '{:,}'.format(tb.NonControllingInterestsOthers),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # shareholders equity
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            a.CommonShares,
                            a.AccumulatedOtherComprehensiveIncome,
                            a.RetainedEarnings,
                            a.TreasuryShares,
                            a.EmployeeBenefitTrust,
                            a.NonControllingInterests,
                        ]
                        Total = a.StockholdersEquity
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        a.AnomalyStockholdersEquity = Anomaly
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'accumulated other comprehensive income': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyStockholdersEquity',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyStockholdersEquity),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                except:
                    pass
                #
                # 
                # cash flow
                try:
                    #
                    cf = CashFlow.objects.get(TradingSymbol=TradingSymbol, Period=scopedperiod)
                    #
                    #
                    # operating activities
                    try:
                        Anomaly = 0
                        Components = [
                            -a.NetIncome,
                            cf.DepreciationDepletionAndAmortization,
                            cf.GainRelatedToDisposalOrSale,
                            cf.RestructuringAndOtherSpecialCharges,
                            cf.AccruedEmployeeCompensation,
                            cf.ShareBasedCompensation,
                            cf.IncreaseDecreaseInIncomeTaxExpenseBenefit,
                            cf.OtherNonCashIncomeExpense,
                            cf.IncreaseDecreaseInAccountsReceivable, 
                            cf.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets,
                            cf.IncreaseDecreaseInInventories,
                            cf.IncreaseDecreaseInOtherReceivables,
                            cf.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities,
                            cf.IncreaseDecreaseInContractWithCustomerLiability,
                            cf.IncreaseDecreaseInRetirementBenefits,
                            cf.IncreaseDecreaseOperatingLeaseCurrent,
                            cf.IncreaseDecreaseInFairValueOfDerivativesOperating,
                            cf.IncreaseDecreaseInOtherOperatingActivities,
                        ]
                        Total = a.OperatingActivities
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        c = cf.IncreaseDecreaseInOtherOperatingActivities
                        c = c - Anomaly
                        cf.IncreaseDecreaseInOtherOperatingActivities = c
                        #
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'operating activities': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyOperatingActivitiesSEC',
                                    'cf.IncreaseDecreaseInOtherOperatingActivities',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyOperatingActivitiesSEC),
                                    '{:,}'.format(cf.IncreaseDecreaseInOtherOperatingActivities),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # investing activities
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            cf.PaymentsToAcquirePropertyPlantAndEquipment,
                            cf.ProceedsFromDisposalsOfPropertyAndEquipment,
                            cf.PaymentsToAcquireInvestments,
                            cf.ProceedsOfInvestments,
                            cf.PaymentsToAcquireBusinessesAndIntangibles,
                            cf.ProceedsFromDisposalsOfBusinessesAndIntangibles,
                            cf.ProceedsFromCompanyOwnedLifeInsurance,
                            cf.ReveiptOfGovernmentGrants,
                            cf.OtherInvestingActivities,
                        ]
                        Total = a.InvestingActivities
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        c = cf.OtherInvestingActivities
                        c = c - Anomaly
                        cf.OtherInvestingActivities = c
                        #
                        c = Anomaly
                        a.AnomalyInvestingActivities = c
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'investing activities': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyInvestingActivities',
                                    'a.AnomalyInvestingActivitiesSEC',
                                    'cf.OtherInvestingActivities',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyInvestingActivities),
                                    '{:,}'.format(a.AnomalyInvestingActivitiesSEC),
                                    '{:,}'.format(cf.OtherInvestingActivities),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                    #
                    #
                    # financing activities
                    try:
                        #
                        Anomaly = 0
                        #
                        Components = [
                            cf.FinanceLeasePrincipalPayments,
                            cf.ProceedsFromIssuanceOfCommonStock,
                            cf.ProceedsFromStockOptionExercices,
                            cf.PaymentsRelatedToTaxWithholdingForShareBasedCompensation,
                            cf.PaymentsOfDividends,
                            cf.PaymentsForRepurchaseOfCommonStock,
                            cf.PaymentsForTaxesRelatedToNetShareSettlementOfEquityAward,
                            cf.ProceedsFromIssuanceOfLongTermDebt,
                            cf.RepaymentsOfLongTermDebt,
                            cf.NetChangeInShortTermBorrowings,
                            cf.ProceedsFromRepaymentsOfCommercialPaper,
                            cf.RepaymentsOfConvertible,
                            cf.IssuanceOfConvertible,
                            cf.OtherFinancingActivities,
                        ]
                        Total = a.FinancingActivities
                        #
                        Components = sum(Components)
                        #
                        Anomaly = Components - Total
                        #
                        c = cf.OtherFinancingActivities
                        c = c - Anomaly
                        cf.OtherFinancingActivities = c
                        #
                        c = Anomaly
                        a.AnomalyFinancingActivities = c
                        #
                        # dataframe
                        try:
                            df = pd.DataFrame({
                                #
                                'financing activities': 
                                    #
                                    [
                                    'Components',
                                    'Total',
                                    'Anomaly',
                                    'a.AnomalyFinancingActivities',
                                    'a.AnomalyFinancingActivitiesSEC',
                                    'cf.OtherFinancingActivities',
                                    ],
                                #
                                '.':
                                    #
                                    [
                                    '{:,}'.format(Components),
                                    '{:,}'.format(Total),
                                    '{:,}'.format(Anomaly),
                                    '{:,}'.format(a.AnomalyFinancingActivities),
                                    '{:,}'.format(a.AnomalyFinancingActivitiesSEC),
                                    '{:,}'.format(cf.OtherFinancingActivities),
                                    ],
                            })
                            print(df)
                            print(137*'-' + '\n')
                            #
                            tb.save()
                            a.save()
                        except:
                            pass
                    except:
                        pass
                except:
                    pass
                #
                #
                # additional informations
                try:
                    #
                    print(e.EntityRegistrantName)
                    print('additional information')
                    print(tb.DocumentPeriodEndDate)
                    print(137*'-' + '\n')
                    #
                    # Theorical Annual Interest Charge
                    try:
                        z = tb.ShortTermBorrowings
                        z = z + tb.CommercialPapers
                        z = z + tb.FinanceLeasesCurrent
                        z = z + tb.CapitalLeaseAndFinancingObligationsCurrent
                        z = z + tb.ShortTermPortionOfLongTermDebt
                        z = z + tb.LongTermDebt
                        z = z + tb.OperatingLeasesNonCurrent
                        z = z + tb.FinanceLeasesNonCurrent
                        z = z + tb.CapitalLeaseAndFinancingObligationsNonCurrent
                        z = z * -0.035
                        a.NormalizedTheoricalInterestCharge = z
                        a.save()
                    except:
                        pass
                    #
                    #
                    # Theorical Tax Rate
                    try:
                        z = tb.IncomeTaxExpenseBenefit
                        z = z / -a.IncomeBeforeTaxes
                        z = min(0.30, z)
                        z = max(0.15, z)
                        a.TheoricalTaxRate = z
                        a.save()
                    except:
                        pass
                    #
                    #
                    # Theorical Operating Income Attributable to minority interests
                    try:
                        z = abs(a.NetIncomeAttributableToNonControllingInterest) / abs(a.NetIncome) 
                        a.TheoricalOperatingIncomeAttributableToNonControllingInterests = z
                        a.save()
                    except:
                        pass
                    #
                    #
                    # dataframe
                    try:
                        df = pd.DataFrame({
                            #
                            'additional information': 
                                #
                                [
                                'a.NormalizedTheoricalInterestCharge',
                                'a.TheoricalTaxRate',
                                'a.TheoricalOperatingIncomeAttributableToNonControllingInterests',
                                ],
                            #
                            '.':
                                #
                                [
                                '{:,}'.format(a.NormalizedTheoricalInterestCharge),
                                '{:,}'.format(a.TheoricalTaxRate),
                                '{:,}'.format(a.TheoricalOperatingIncomeAttributableToNonControllingInterests),
                                ],
                        })
                        print(df)
                        print(137*'-' + '\n')
                        #
                        a.save()
                    except:
                        pass
                except:
                    pass
    #
    #
    # get valuation ratio
    if UpdateRanking == 'yes':
        #
        print(137*'-' + '\n')
        print(e.EntityRegistrantName)
        print('updating ranking')
        print(137*'-' + '\n')
        #
        try:
            #
            driver = webdriver.Chrome('C:\\Program Files (x86)\\chromedriver.exe')
            #
            url = 'http://127.0.0.1:8000/' + TradingSymbol + '/'
            #
            driver.get(url)
            #
            try:
                link = WebDriverWait(driver, 7).until(
                    EC.presence_of_element_located((By.NAME, "Summary"))
                )
                link.click()
            except:
                pass
            try:
                link = WebDriverWait(driver, 7).until(
                    EC.presence_of_element_located((By.NAME, "Opinion"))
                )
                link.click()
            except:
                pass
            #
            Bridge = driver.find_element_by_id("p").text
            #
            ValuationRatio = driver.find_element_by_id("Clockφ1").text
            #
            ValuationRatioPriorPeriod = driver.find_element_by_id("Clockφ2").text
            #
            driver.quit()
            #
            if len(Bridge) == 8:
                #
                e.Status = 'Audited'
                #
                e.Clockφ = int(float(ValuationRatio.strip('%').replace(',','')))
                c = int(ValuationRatio.strip('%').replace(',',''))
                c = c - int(ValuationRatioPriorPeriod.strip('%').replace(',',''))
                e.ClockφChange = c
            #
            else:
                #
                e.Status = 'Misstated'
                #
                e.Clockφ = int(float(ValuationRatio.strip('%').replace(',','')))
                c = int(ValuationRatio.strip('%').replace(',',''))
                c = c - int(ValuationRatioPriorPeriod.strip('%').replace(',',''))
                e.ClockφChange = c
        #
        except:
            pass
    #
    #
    # Time Of Update
    try:
        now = datetime.datetime.now()
        date_text = now.strftime("%B %d, %Y")
        dateandtime = now.strftime("%B %d, %Y: %H:%M:%S")
        e.Update = date_text
        e.UpdateDateAndTime = dateandtime
        print("Update: ", str(e.Update))
    except:
        pass
    #
    #
    # save
    try:
        e.save()
        print('Entity ' + TradingSymbol + ' Saved.')
    except:
        pass



