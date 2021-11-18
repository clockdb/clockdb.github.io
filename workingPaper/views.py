from .models import *

from django.contrib.auth import login, authenticate, logout
from django.conf import settings
from django.core.files.storage import default_storage
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse, JsonResponse
from django.urls import reverse
from django.shortcuts import render, redirect
from itertools import chain
from urllib.parse import urlencode

from django.core.files.storage import default_storage
from django.core.files.storage import FileSystemStorage

import os
import json
import base64
import requests

from django.core import files

from account.forms import RegistrationForm, AccountAuthenticationForm, AccountUpdateForm
from account.models import *

from friend.utils import get_friend_request_or_false
from friend.friend_request_status import FriendRequestStatus
from friend.models import FriendList, FriendRequest

import datetime
import time
import json

from chat.models import PrivateChatRoom, RoomChatMessage
from chat.utils import find_or_create_private_chat



DEBUG = False

def home_screen_view(request):
	return render(request, "home.html")

def analysis_view(request, user_id, entity_TradingSymbol):
	return render(request, "home.html")

def posts_screen_view(request, user_id):
	return render(request, "home.html")

def posts_view(request, industry_db, industry_SEC_db, year_end, db, region_db, order_db, sort_db, start, end):
    #
    e = Entity.objects.all()
    #
    a = '-db'
    b = '-NumberOfYearsAudited'
    c = 'AnomaliesRatio1'
    d = 'AnomaliesRatio2'
    ee = 'AnomaliesRatio3'
    f = 'AnomaliesRatio4'
    g = 'AnomaliesRatio5'
    h = 'AnomaliesRatio6'
    #
    if sort_db == 'any':
        e = e.order_by(a, b, c, d, ee, f, g, h)
    else:
        sort = sort_db
        if order_db != 'any':
            if order_db != '+':
                sort = order_db + sort
        e = e.order_by(sort, a, b, c, d, ee, f, g, h)
    #
    if industry_db != 'any':
        e = e.filter(Industry_db=industry_db)
    #
    if industry_SEC_db != 'any':
        e = e.filter(Industry_SEC_db=industry_SEC_db)
    #
    if year_end != 'any':
        e = e.filter(year_end=year_end)
    #
    if db != 'any':
        e = e.filter(db=db)
    #
    if region_db != 'any':
        e = e.filter(Region_db=region_db)
    #
    start = int(start) - 1
    #
    end = int(end)
    if end > len(e):
        end = len(e)
    #
    data = []
    #
    for i in range(start, end):
        json = {
            "entity": e[i].EntityRegistrantName,
            "tradingSymbol": e[i].TradingSymbol,
            "industry_db": e[i].Industry_db,
            "industry": e[i].Industry,
            "industry_sec_db": e[i].Industry_SEC_db,
            "industry_sec": e[i].Industry_SEC,
            "db": e[i].db,
            "region_db": e[i].Region_db,
            "region": e[i].Region,
            #
            "lastyear": e[i].lastyear,
            "secondlastyear": e[i].secondlastyear,
            "thirdlastyear": e[i].thirdlastyear,
            "fourthlastyear": e[i].fourthlastyear,
            "amendlastyear": e[i].amendlastyear,
            "amendsecondlastyear": e[i].amendsecondlastyear,
            "amendthirdlastyear": e[i].amendthirdlastyear,
            "amendfourthlastyear": e[i].amendfourthlastyear,
            #
            "SecuritiesUpdate": e[i].SecuritiesUpdate,
            #
            "OpinionφLastYear": e[i].OpinionφLastYear,
            "OpinionφSecondLastYear": e[i].OpinionφSecondLastYear,
            "OpinionφThirdLastYear": e[i].OpinionφThirdLastYear,
            "OpinionφFourthLastYear": e[i].OpinionφFourthLastYear,
            #
            "ClockφLastYear": e[i].ClockφLastYear,
            "ClockφSecondLastYear": e[i].ClockφSecondLastYear,
            "ClockφThirdLastYear": e[i].ClockφThirdLastYear,
            "ClockφFourthLastYear": e[i].ClockφFourthLastYear,
            #
            "BridgeφLastYear": e[i].BridgeφLastYear,
            "BridgeφSecondLastYear": e[i].BridgeφSecondLastYear,
            "BridgeφThirdLastYear": e[i].BridgeφThirdLastYear,
            "BridgeφFourthLastYear": e[i].BridgeφFourthLastYear,
            #
            "CommonSharesIntrinsicValueLastYear": e[i].CommonSharesIntrinsicValueLastYear,
            "CommonSharesIntrinsicValueSecondLastYear": e[i].CommonSharesIntrinsicValueSecondLastYear,
            "CommonSharesIntrinsicValueThirdLastYear": e[i].CommonSharesIntrinsicValueThirdLastYear,
            "CommonSharesIntrinsicValueFourthLastYear": e[i].CommonSharesIntrinsicValueFourthLastYear,
            #
            "MarketCapitalizationLastYear": e[i].MarketCapitalizationLastYear,
            "MarketCapitalizationSecondLastYear": e[i].MarketCapitalizationSecondLastYear,
            "MarketCapitalizationThirdLastYear": e[i].MarketCapitalizationThirdLastYear,
            "MarketCapitalizationFourthLastYear": e[i].MarketCapitalizationFourthLastYear,
            #
            "CommonShareIntrinsicValueLastYear": e[i].CommonShareIntrinsicValueLastYear,
            "CommonShareIntrinsicValueSecondLastYear": e[i].CommonShareIntrinsicValueSecondLastYear,
            "CommonShareIntrinsicValueThirdLastYear": e[i].CommonShareIntrinsicValueThirdLastYear,
            "CommonShareIntrinsicValueFourthLastYear": e[i].CommonShareIntrinsicValueFourthLastYear,
            #
            "CommonSharePriceLastYear": e[i].CommonSharePriceLastYear,
            "CommonSharePriceSecondLastYear": e[i].CommonSharePriceSecondLastYear,
            "CommonSharePriceThirdLastYear": e[i].CommonSharePriceThirdLastYear,
            "CommonSharePriceFourthLastYear": e[i].CommonSharePriceFourthLastYear,
            #
            "CommonSharesOutstandingLastYear": e[i].CommonSharesOutstandingLastYear,
            "CommonSharesOutstandingSecondLastYear": e[i].CommonSharesOutstandingSecondLastYear,
            "CommonSharesOutstandingThirdLastYear": e[i].CommonSharesOutstandingThirdLastYear,
            "CommonSharesOutstandingFourthLastYear": e[i].CommonSharesOutstandingFourthLastYear,
        }
        data.append(json)

    time.sleep(1)

    return JsonResponse({
        "posts": data,
		"len": len(e)
    })

def entities_view(request, search, start, end):
	e = Entity.objects.all().order_by('TradingSymbol')
	entities = []
	for i in range(0, len(e)):
		b = 0
		search = search.lower()
		if (search in e[i].EntityRegistrantName.lower()):
				b = 1
		if (search in e[i].TradingSymbol.lower()):
				b = 1
		if (search in e[i].Industry.lower()):
				b = 1
		if (search in e[i].Industry_SEC.lower()):
				b = 1
		if (search in e[i].Region.lower()):
				b = 1
		if (b == 1):
			Json = {
				"EntityRegistrantName": e[i].EntityRegistrantName,
				"TradingSymbol": e[i].TradingSymbol,
				"Industry": e[i].Industry,
				"Industry_SEC": e[i].Industry_SEC,
				"Region": e[i].Region,
			}
			entities.append(Json)
	data = []
	start = int(start) - 1
	end = min(len(entities), int(end))
	for u in range(int(start), end):
		Json = {
            "EntityRegistrantName": entities[u]['EntityRegistrantName'],
            "TradingSymbol": entities[u]['TradingSymbol'],
            "Industry": entities[u]['Industry'],
            "Industry_SEC": entities[u]['Industry_SEC'],
            "Region": entities[u]['Region'],
		}
		data.append(Json)
	time.sleep(1)
	return JsonResponse({
		"entities": data,
		"len": len(entities)
	})
