from .models import *

from django.contrib.auth import login, authenticate, logout
from django.conf.urls.static import static
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
	user = request.user
	context = {}
	context['debug_mode'] = settings.DEBUG
	context['debug'] = DEBUG
	context['room_id'] = "1"
	if user.is_authenticated: 
		return redirect("posts", user_id=user.id)
	return redirect("login")

def analysis_view(request, user_id, entity_TradingSymbol):
	#
	context = {}
	context['debug_mode'] = settings.DEBUG
	context['debug'] = DEBUG
	context['room_id'] = "1"
	context['DATA_UPLOAD_MAX_MEMORY_SIZE'] = settings.DATA_UPLOAD_MAX_MEMORY_SIZE
	context['BASE_URL'] = settings.BASE_URL
	#
	context['entity'] = Entity.objects.get(TradingSymbol=entity_TradingSymbol)
	context['TrialBalance_lastyear'] = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="lastyear")
	context['TrialBalance_secondlastyear'] = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="secondlastyear")
	context['TrialBalance_thirdlastyear'] = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="thirdlastyear")
	context['TrialBalance_fourthlastyear'] = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="fourthlastyear")
	context['TrialBalance_fifthlastyear'] = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="fifthlastyear")
	context['TrialBalance_sixthlastyear'] = TrialBalance.objects.get(TradingSymbol=entity_TradingSymbol, Period="sixthlastyear")
	context['CashFlow_lastyear'] = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="lastyear")
	context['CashFlow_secondlastyear'] = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="secondlastyear")
	context['CashFlow_thirdlastyear'] = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="thirdlastyear")
	context['CashFlow_fourthlastyear'] = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="fourthlastyear")
	context['CashFlow_fifthlastyear'] = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="fifthlastyear")
	context['CashFlow_sixthlastyear'] = CashFlow.objects.get(TradingSymbol=entity_TradingSymbol, Period="sixthlastyear")
	context['AuditData_lastyear'] = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="lastyear")
	context['AuditData_secondlastyear'] = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="secondlastyear")
	context['AuditData_thirdlastyear'] = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="thirdlastyear")
	context['AuditData_fourthlastyear'] = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="fourthlastyear")
	context['AuditData_fifthlastyear'] = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="fifthlastyear")
	context['AuditData_sixthlastyear'] = AuditData.objects.get(TradingSymbol=entity_TradingSymbol, Period="sixthlastyear")
	try:
		account = Account.objects.get(pk=user_id)
	except:
		return redirect('login')
	if account:
		context['id'] = account.id
		context['username'] = account.username
		context['email'] = account.email
		context['profile_image'] = account.profile_image.url
		context['hide_email'] = account.hide_email

		try:
			friend_list = FriendList.objects.get(user=account)
		except FriendList.DoesNotExist:
			friend_list = FriendList(user=account)
			friend_list.save()
		friends = friend_list.friends.all()
		context['friends'] = friends
		is_self = True
		is_friend = False
		request_sent = FriendRequestStatus.NO_REQUEST_SENT.value
		friend_requests = None
		user = request.user
		if user.is_authenticated and user != account:
			is_self = False
			if friends.filter(pk=user.id):
				is_friend = True
			else:
				is_friend = False
				if get_friend_request_or_false(sender=account, receiver=user) != False:
					request_sent = FriendRequestStatus.THEM_SENT_TO_YOU.value
					context['pending_friend_request_id'] = get_friend_request_or_false(sender=account, receiver=user).id
				elif get_friend_request_or_false(sender=user, receiver=account) != False:
					request_sent = FriendRequestStatus.YOU_SENT_TO_THEM.value
				else:
					request_sent = FriendRequestStatus.NO_REQUEST_SENT.value
		elif not user.is_authenticated:
			is_self = False
		else:
			try:
				friend_requests = FriendRequest.objects.filter(receiver=user, is_active=True)
			except:
				pass
		context['is_self'] = is_self
		context['is_friend'] = is_friend
		context['request_sent'] = request_sent
		context['friend_requests'] = friend_requests
		#
		friends_requests = []
		FR = FriendRequest.objects.all()
		for friend_request in FR:
			if (friend_request.sender.id == user.id):
				if (friend_request.is_active == True):
					friends_requests.append(friend_request.receiver.id)
		context['friends_requests'] = friends_requests
	#
	# edit account
	if request.POST:
		form = AccountUpdateForm(request.POST, request.FILES, instance=user)
		if form.is_valid():
			form.save()
			return redirect("posts", user_id=user.id)
		else:
			form = AccountUpdateForm(request.POST, instance=user,
				initial={
					"id": account.id,
					"email": account.email, 
					"username": account.username,
					"profile_image": account.profile_image,
					"hide_email": account.hide_email,
				}
			)
			context['form'] = form
	else:
		form = AccountUpdateForm(
			initial={
					"id": account.id,
					"email": account.email, 
					"username": account.username,
					"profile_image": account.profile_image,
					"hide_email": account.hide_email,
				}
			)
		context['form'] = form
	#
	# messages
	room_id = request.GET.get("room_id")
	if room_id:
		room = PrivateChatRoom.objects.get(pk=room_id)
		context["room"] = room
	rooms1 = PrivateChatRoom.objects.filter(user1=user, is_active=True)
	rooms2 = PrivateChatRoom.objects.filter(user2=user, is_active=True)
	rooms = list(chain(rooms1, rooms2))
	m_and_f = [] 
	for room in rooms:
		if room.user1 == user:
			friend = room.user2
		else:
			friend = room.user1
		m_and_f.append({
			'message': "", 
			'friend': friend
		})
	context['m_and_f'] = m_and_f
	#
	# friends
	if user.is_authenticated:
		user_id = account.id
		if user_id:
			try:
				this_user = Account.objects.get(pk=user_id)
				context['this_user'] = this_user
			except Account.DoesNotExist:
				return HttpResponse("That user does not exist.")
			try:
				friend_list = FriendList.objects.get(user=this_user)
			except FriendList.DoesNotExist:
				return HttpResponse(f"Could not find a friends list for {this_user.username}")
			friends = []
			auth_user_friend_list = FriendList.objects.get(user=user)
			for friend in friend_list.friends.all():
				friends.append((friend, auth_user_friend_list.is_mutual_friend(friend)))
			context['friends'] = friends
	else:		
		return HttpResponse("You must be friends to view their friends list.")
	#
	# profiles
	if user.is_authenticated:
		user_id = account.id
		if user_id:
			friends = [] 
			auth_user_friend_list = FriendList.objects.get(user=user)
			for friend in friend_list.friends.all():
				friends.append((friend, auth_user_friend_list.is_mutual_friend(friend)))
			context['profileUsers'] = friends
	#
	# entities
	context['entities'] = Entity.objects.all().order_by('TradingSymbol')
	#
	return render(request, "base/clockdb.html", context)

def posts_screen_view(request, user_id):
	context = {}
	context['BASE_URL'] = settings.BASE_URL
	context['debug_mode'] = settings.DEBUG
	context['debug'] = DEBUG
	context['DATA_UPLOAD_MAX_MEMORY_SIZE'] = settings.DATA_UPLOAD_MAX_MEMORY_SIZE
    # profile
	try:
		account = Account.objects.get(pk=user_id)
	except:
		return redirect('login')
	if account:
		context['id'] = account.id
		context['username'] = account.username
		context['email'] = account.email
		context['profile_image'] = account.profile_image.url
		context['hide_email'] = account.hide_email
		try:
			friend_list = FriendList.objects.get(user=account)
		except FriendList.DoesNotExist:
			friend_list = FriendList(user=account)
			friend_list.save()
		friends = friend_list.friends.all()
		context['friends'] = friends
		#
		# friends requests
		is_self = True
		is_friend = False
		request_sent = FriendRequestStatus.NO_REQUEST_SENT.value
		friend_requests = None
		user = request.user
		if user.is_authenticated and user != account:
			is_self = False
			if friends.filter(pk=user.id):
				is_friend = True
			else:
				is_friend = False
				if get_friend_request_or_false(sender=account, receiver=user) != False:
					request_sent = FriendRequestStatus.THEM_SENT_TO_YOU.value
					context['pending_friend_request_id'] = get_friend_request_or_false(sender=account, receiver=user).id
				elif get_friend_request_or_false(sender=user, receiver=account) != False:
					request_sent = FriendRequestStatus.YOU_SENT_TO_THEM.value
				else:
					request_sent = FriendRequestStatus.NO_REQUEST_SENT.value
		elif not user.is_authenticated:
			is_self = False
		else:
			try:
				friend_requests = FriendRequest.objects.filter(receiver=user, is_active=True)
			except:
				pass
		context['is_self'] = is_self
		context['is_friend'] = is_friend
		context['request_sent'] = request_sent
		#
		friends_requests = []
		FR = FriendRequest.objects.all()
		for friend_request in FR:
			if (friend_request.sender.id == user.id):
				if (friend_request.is_active == True):
					friends_requests.append(friend_request.receiver.id)
		context['friends_requests'] = friends_requests
    #
	# edit_profile
	if request.POST:
		form = AccountUpdateForm(request.POST, request.FILES, instance=user)
		if form.is_valid():
			form.save()
			return redirect("posts", user_id=user.id)
		else:
			form = AccountUpdateForm(request.POST, instance=user,
				initial={
					"id": account.id,
					"email": account.email, 
					"username": account.username,
					"profile_image": account.profile_image,
					"hide_email": account.hide_email,
				}
			)
			context['form'] = form
	else:
		form = AccountUpdateForm(
			initial={
					"id": account.id,
					"email": account.email, 
					"username": account.username,
					"profile_image": account.profile_image,
					"hide_email": account.hide_email,
				}
			)
		context['form'] = form
    #
	# chat
	room_id = request.GET.get("room_id")
	if room_id:
		room = PrivateChatRoom.objects.get(pk=room_id)
		context["room"] = room
	rooms1 = PrivateChatRoom.objects.filter(user1=user, is_active=True)
	rooms2 = PrivateChatRoom.objects.filter(user2=user, is_active=True)
	rooms = list(chain(rooms1, rooms2))
	m_and_f = [] 
	for room in rooms:
		# Figure out which user is the "other user" (aka friend)
		if room.user1 == user:
			friend = room.user2
		else:
			friend = room.user1
		m_and_f.append({
			'message': "", # blank msg for now (since we have no messages)
			'friend': friend
		})
	context['m_and_f'] = m_and_f
	#
	# friends
	if user.is_authenticated:
		user_id = account.id
		if user_id:
			try:
				this_user = Account.objects.get(pk=user_id)
				context['this_user'] = this_user
			except Account.DoesNotExist:
				return HttpResponse("That user does not exist.")
			try:
				friend_list = FriendList.objects.get(user=this_user)
			except FriendList.DoesNotExist:
				return HttpResponse(f"Could not find a friends list for {this_user.username}")
			friends = []
			auth_user_friend_list = FriendList.objects.get(user=user)
			for friend in friend_list.friends.all():
				friends.append((friend, auth_user_friend_list.is_mutual_friend(friend)))
			context['friends'] = friends
	#
	# profiles
	if user.is_authenticated:
		user_id = account.id
		if user_id:
			friends = []
			auth_user_friend_list = FriendList.objects.get(user=user)
			for friend in friend_list.friends.all():
				friends.append((friend, auth_user_friend_list.is_mutual_friend(friend)))
			context['profileUsers'] = friends
	#
	# entities
	context['entities'] = Entity.objects.all().order_by('TradingSymbol')
	#
	return render(request, "base/clockdb.html", context)

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

def entities_view_all(request, ts):
	e = Entity.objects.filter(TradingSymbol=ts)
	data = []
	end = len(e)
	for i in range(0, end):
		ad1 = AuditData.objects.get(TradingSymbol=e[i].TradingSymbol, Period='lastyear')
		ad2 = AuditData.objects.get(TradingSymbol=e[i].TradingSymbol, Period='secondlastyear')
		ad3 = AuditData.objects.get(TradingSymbol=e[i].TradingSymbol, Period='thirdlastyear')
		ad4 = AuditData.objects.get(TradingSymbol=e[i].TradingSymbol, Period='fourthlastyear')
		ad5 = AuditData.objects.get(TradingSymbol=e[i].TradingSymbol, Period='fifthlastyear')
		ad6 = AuditData.objects.get(TradingSymbol=e[i].TradingSymbol, Period='sixthlastyear')
		cf1 = CashFlow.objects.get(TradingSymbol=e[i].TradingSymbol, Period='lastyear')
		cf2 = CashFlow.objects.get(TradingSymbol=e[i].TradingSymbol, Period='secondlastyear')
		cf3 = CashFlow.objects.get(TradingSymbol=e[i].TradingSymbol, Period='thirdlastyear')
		cf4 = CashFlow.objects.get(TradingSymbol=e[i].TradingSymbol, Period='fourthlastyear')
		cf5 = CashFlow.objects.get(TradingSymbol=e[i].TradingSymbol, Period='fifthlastyear')
		cf6 = CashFlow.objects.get(TradingSymbol=e[i].TradingSymbol, Period='sixthlastyear')
		tb1 = TrialBalance.objects.get(TradingSymbol=e[i].TradingSymbol, Period='lastyear')
		tb2 = TrialBalance.objects.get(TradingSymbol=e[i].TradingSymbol, Period='secondlastyear')
		tb3 = TrialBalance.objects.get(TradingSymbol=e[i].TradingSymbol, Period='thirdlastyear')
		tb4 = TrialBalance.objects.get(TradingSymbol=e[i].TradingSymbol, Period='fourthlastyear')
		tb5 = TrialBalance.objects.get(TradingSymbol=e[i].TradingSymbol, Period='fifthlastyear')
		tb6 = TrialBalance.objects.get(TradingSymbol=e[i].TradingSymbol, Period='sixthlastyear')
		json = {
			#
			# entity,
			"EntityRegistrantName": e[i].EntityRegistrantName,
			"TradingSymbol": e[i].TradingSymbol,
			"EntityCentralIndexKey": e[i].EntityCentralIndexKey,
			"db": e[i].db,
			"Industry_SEC": e[i].Industry_SEC,
			"Industry_SEC_db": e[i].Industry_SEC_db,
			"Industry": e[i].Industry,
			"Industry_db": e[i].Industry_db,
			"Region": e[i].Region,
			"Region_db": e[i].Region_db,
			"Region_db": e[i].Region_db,
			"SecurityExchangeName": e[i].SecurityExchangeName,
			#
			"SECurl": e[i].SECurl,
			"URL": e[i].URL,
			"SEC_Update": e[i].SEC_Update,
			"SEC_UpdateDateAndTime": e[i].SEC_UpdateDateAndTime,
			"SecuritiesUpdate": e[i].SecuritiesUpdate,
			#
			"OpinionLastYear": e[i].OpinionφLastYear,
			"OpinionSecondLastYear": e[i].OpinionφSecondLastYear,
			"OpinionThirdLastYear": e[i].OpinionφThirdLastYear,
			"OpinionFourthLastYear": e[i].OpinionφFourthLastYear,
			#
			"ClockLastYear": e[i].ClockφLastYear,
			"ClockSecondLastYear": e[i].ClockφSecondLastYear,
			"ClockThirdLastYear": e[i].ClockφThirdLastYear,
			"ClockFourthLastYear": e[i].ClockφFourthLastYear,
			#
			"BridgeLastYear": e[i].BridgeφLastYear,
			"BridgeSecondLastYear": e[i].BridgeφSecondLastYear,
			"BridgeThirdLastYear": e[i].BridgeφThirdLastYear,
			"BridgeFourthLastYear": e[i].BridgeφFourthLastYear,
			#
			"Anomalies": e[i].Anomalies,
			#
			"AnomaliesRatio1": e[i].AnomaliesRatio1,
			"AnomaliesRatio2": e[i].AnomaliesRatio2,
			"AnomaliesRatio3": e[i].AnomaliesRatio3,
			"AnomaliesRatio4": e[i].AnomaliesRatio4,
			"AnomaliesRatio5": e[i].AnomaliesRatio5,
			"AnomaliesRatio6": e[i].AnomaliesRatio6,
			#
			"NumberOfYearsAudited": e[i].NumberOfYearsAudited,
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
			#
			"month_end": e[i].month_end,
			#
			"lastyear": e[i].lastyear,
			"secondlastyear": e[i].secondlastyear,
			"thirdlastyear": e[i].thirdlastyear,
			"fourthlastyear": e[i].fourthlastyear,
			"fifthlastyear": e[i].fifthlastyear,
			"sixthlastyear": e[i].sixthlastyear,
			#
			"amendlastyear": e[i].amendlastyear,
			"amendsecondlastyear": e[i].amendsecondlastyear,
			"amendthirdlastyear": e[i].amendthirdlastyear,
			"amendfourthlastyear": e[i].amendfourthlastyear,
			"amendfifthlastyear": e[i].amendfifthlastyear,
			"amendsixthlastyear": e[i].amendsixthlastyear,
			#
			"accessionnumberlastyear": e[i].accessionnumberlastyear,
			"accessionnumbersecondlastyear": e[i].accessionnumbersecondlastyear,
			"accessionnumberthirdlastyear": e[i].accessionnumberthirdlastyear,
			"accessionnumberfourthlastyear": e[i].accessionnumberfourthlastyear,
			"accessionnumberfifthlastyear": e[i].accessionnumberfifthlastyear,
			"accessionnumbersixthlastyear": e[i].accessionnumbersixthlastyear,
			#
			"urlbalancesheetlastyear": e[i].urlbalancesheetlastyear,
			"urlbalancesheetsecondlastyear": e[i].urlbalancesheetsecondlastyear,
			"urlbalancesheetthirdlastyear": e[i].urlbalancesheetthirdlastyear,
			"urlbalancesheetfourthlastyear": e[i].urlbalancesheetfourthlastyear,
			"urlbalancesheetfifthlastyear": e[i].urlbalancesheetfifthlastyear,
			"urlbalancesheetsixthlastyear": e[i].urlbalancesheetsixthlastyear,
			#
			"urlincomestatementlastyear": e[i].urlincomestatementlastyear,
			"urlincomestatementsecondlastyear": e[i].urlincomestatementsecondlastyear,
			"urlincomestatementthirdlastyear": e[i].urlincomestatementthirdlastyear,
			"urlincomestatementfourthlastyear": e[i].urlincomestatementfourthlastyear,
			"urlincomestatementfifthlastyear": e[i].urlincomestatementfifthlastyear,
			"urlincomestatementsixthlastyear": e[i].urlincomestatementsixthlastyear,
			"urlcomprehensiveincomelastyear": e[i].urlcomprehensiveincomelastyear,  
			#         
			"urlcomprehensiveincomesecondlastyear": e[i].urlcomprehensiveincomesecondlastyear,           
			"urlcomprehensiveincomethirdlastyear": e[i].urlcomprehensiveincomethirdlastyear,           
			"urlcomprehensiveincomefourthlastyear": e[i].urlcomprehensiveincomefourthlastyear,           
			"urlcomprehensiveincomefifthlastyear": e[i].urlcomprehensiveincomefifthlastyear,           
			"urlcomprehensiveincomesixthlastyear": e[i].urlcomprehensiveincomesixthlastyear,
			"urlshareholdersequitylastyear": e[i].urlshareholdersequitylastyear,
			#
			"urlshareholdersequitysecondlastyear": e[i].urlshareholdersequitysecondlastyear,
			"urlshareholdersequitythirdlastyear": e[i].urlshareholdersequitythirdlastyear,
			"urlshareholdersequityfourthlastyear": e[i].urlshareholdersequityfourthlastyear,
			"urlshareholdersequityfifthlastyear": e[i].urlshareholdersequityfifthlastyear,
			"urlshareholdersequitysixthlastyear": e[i].urlshareholdersequitysixthlastyear,
			"urlcashflowlastyear": e[i].urlcashflowlastyear,
			#
			"urlcashflowsecondlastyear": e[i].urlcashflowsecondlastyear,
			"urlcashflowthirdlastyear": e[i].urlcashflowthirdlastyear,
			"urlcashflowfourthlastyear": e[i].urlcashflowfourthlastyear,
			"urlcashflowfifthlastyear": e[i].urlcashflowfifthlastyear,
			"urlcashflowsixthlastyear": e[i].urlcashflowsixthlastyear,
			#
			# audit
			#
			# AUDIT 1
			#
			# General - Audit
			#
			"ad1.db": ad1.db,
			"ad1.AccessionNumber": ad1.AccessionNumber,
			"ad1.AmendmentFlag": ad1.AmendmentFlag,
			"ad1.EntityRegistrantName": ad1.EntityRegistrantName,
			"ad1.Period": ad1.Period,
			"ad1.PeriodEndDate": ad1.PeriodEndDate,
			"ad1.TradingSymbol": ad1.TradingSymbol,
			#
			# Balance Sheets - Audit
			#
			"ad1.CurrentAssets": ad1.CurrentAssets,
			"ad1.NonCurrentAssets": ad1.NonCurrentAssets,
			"ad1.Assets": ad1.Assets,
			"ad1.CurrentLiabilities": ad1.CurrentLiabilities,
			"ad1.NonCurrentLiabilities": ad1.NonCurrentLiabilities,
			"ad1.Liabilities": ad1.Liabilities,
			"ad1.ShareholdersEquity": ad1.ShareholdersEquity,
			"ad1.LiabilitiesAndShareholdersEquity": ad1.LiabilitiesAndShareholdersEquity,
			#
			"ad1.CurrentAssetsGL_i": ad1.CurrentAssetsGL_i,
			"ad1.CurrentAssetsGL_ii": ad1.CurrentAssetsGL_ii,
			"ad1.CurrentAssetsGL_iii": ad1.CurrentAssetsGL_iii,
			"ad1.AnomalyCurrentAssets": ad1.AnomalyCurrentAssets,
			"ad1.AnomalyCurrentAssetsSEC": ad1.AnomalyCurrentAssetsSEC,
			#
			"ad1.NonCurrentAssetsGL_i": ad1.NonCurrentAssetsGL_i,
			"ad1.NonCurrentAssetsGL_ii": ad1.NonCurrentAssetsGL_ii,
			"ad1.NonCurrentAssetsGL_iii": ad1.NonCurrentAssetsGL_iii,
			"ad1.AnomalyNonCurrentAssets": ad1.AnomalyNonCurrentAssets,
			"ad1.AnomalyNonCurrentAssetsSEC": ad1.AnomalyNonCurrentAssetsSEC,
			#
			"ad1.AnomalyAssets": ad1.AnomalyAssets,
			#
			"ad1.CurrentLiabilitiesGL_i": ad1.CurrentLiabilitiesGL_i,
			"ad1.CurrentLiabilitiesGL_ii": ad1.CurrentLiabilitiesGL_ii,
			"ad1.CurrentLiabilitiesGL_iii": ad1.CurrentLiabilitiesGL_iii,
			"ad1.AnomalyCurrentLiabilities": ad1.AnomalyCurrentLiabilities,
			"ad1.AnomalyCurrentLiabilitiesSEC": ad1.AnomalyCurrentLiabilitiesSEC,
			#
			"ad1.NonCurrentLiabilitiesGL_i": ad1.NonCurrentLiabilitiesGL_i,
			"ad1.NonCurrentLiabilitiesGL_ii": ad1.NonCurrentLiabilitiesGL_ii,
			"ad1.NonCurrentLiabilitiesGL_iii": ad1.NonCurrentLiabilitiesGL_iii,
			"ad1.AnomalyNonCurrentLiabilities": ad1.AnomalyNonCurrentLiabilities,
			"ad1.AnomalyNonCurrentLiabilitiesSEC": ad1.AnomalyNonCurrentLiabilitiesSEC,
			#
			"ad1.AnomalyLiabilities": ad1.AnomalyLiabilities,
			"ad1.AnomalyShareholdersEquity": ad1.AnomalyShareholdersEquity,
			#
			"ad1.ShareholdersEquityBalanceGL_i": ad1.ShareholdersEquityBalanceGL_i,
			"ad1.ShareholdersEquityBalanceGL_ii": ad1.ShareholdersEquityBalanceGL_ii,
			"ad1.ShareholdersEquityBalanceGL_iii": ad1.ShareholdersEquityBalanceGL_iii,
			"ad1.AnomalyShareholdersEquitySEC": ad1.AnomalyShareholdersEquitySEC,
			"ad1.AnomalyLiabilitiesAndShareholdersEquity": ad1.AnomalyLiabilitiesAndShareholdersEquity,
			#
			#
			# Income Statements - Audit
			#
			"ad1.Sales": ad1.Sales,
			"ad1.CostOfSales": ad1.CostOfSales,
			"ad1.GrossMargin": ad1.GrossMargin,
			"ad1.OperatingExpenses": ad1.OperatingExpenses,
			"ad1.OperatingIncome": ad1.OperatingIncome,
			"ad1.IncomeBeforeTaxes": ad1.IncomeBeforeTaxes,
			"ad1.NetIncome": ad1.NetIncome,
			"ad1.NetIncomeAttributableToNonControllingInterest": ad1.NetIncomeAttributableToNonControllingInterest,
			#
			"ad1.GrossMarginGL_i": ad1.GrossMarginGL_i,
			"ad1.GrossMarginGL_ii": ad1.GrossMarginGL_ii,
			"ad1.GrossMarginGL_iii": ad1.GrossMarginGL_iii,
			#
			"ad1.AnomalyGrossMargin": ad1.AnomalyGrossMargin,
			#
			"ad1.OperatingExpensesGL_i": ad1.OperatingExpensesGL_i,
			"ad1.OperatingExpensesGL_ii": ad1.OperatingExpensesGL_ii,
			"ad1.OperatingExpensesGL_iii": ad1.OperatingExpensesGL_iii,
			#
			"ad1.AnomalyOperatingExpenses": ad1.AnomalyOperatingExpenses,
			#
			"ad1.OperatingIncomeGL_i": ad1.OperatingIncomeGL_i,
			"ad1.OperatingIncomeGL_ii": ad1.OperatingIncomeGL_ii,
			"ad1.OperatingIncomeGL_iii": ad1.OperatingIncomeGL_iii,
			#
			"ad1.AnomalyOperatingIncome": ad1.AnomalyOperatingIncome,
			#
			"ad1.IncomeBeforeTaxesGL_i": ad1.IncomeBeforeTaxesGL_i,
			"ad1.IncomeBeforeTaxesGL_ii": ad1.IncomeBeforeTaxesGL_ii,
			"ad1.IncomeBeforeTaxesGL_iii": ad1.IncomeBeforeTaxesGL_iii,
			#
			"ad1.AnomalyIncomeBeforeTaxes": ad1.AnomalyIncomeBeforeTaxes,
			#
			"ad1.NetIncomeGL_i": ad1.NetIncomeGL_i,
			"ad1.NetIncomeGL_ii": ad1.NetIncomeGL_ii,
			"ad1.NetIncomeGL_iii": ad1.NetIncomeGL_iii,
			#
			"ad1.AnomalyNetIncome": ad1.AnomalyNetIncome,
			#
			#
			# Comprehensive Income - Audit
			#
			"ad1.OtherComprehensiveIncome": ad1.OtherComprehensiveIncome,
			"ad1.ComprehensiveIncome": ad1.ComprehensiveIncome,
			#
			"ad1.OtherComprehensiveIncomeGL_i": ad1.OtherComprehensiveIncomeGL_i,
			"ad1.OtherComprehensiveIncomeGL_ii": ad1.OtherComprehensiveIncomeGL_ii,
			"ad1.OtherComprehensiveIncomeGL_iii": ad1.OtherComprehensiveIncomeGL_iii,
			"ad1.AnomalyOtherComprehensiveIncome": ad1.AnomalyOtherComprehensiveIncome,
			"ad1.AnomalyComprehensiveIncome": ad1.AnomalyComprehensiveIncome,
			#
			#
			# Shareholders Equity - Audit
			#
			"ad1.ShareholdersEquityBeginning": ad1.ShareholdersEquityBeginning,
			#
			"ad1.ConvertibleDebt": ad1.ConvertibleDebt,
			"ad1.CommonShares": ad1.CommonShares,
			"ad1.PreferredShares": ad1.PreferredShares,
			"ad1.RetainedEarnings": ad1.RetainedEarnings,
			"ad1.AccumulatedOtherComprehensiveIncome": ad1.AccumulatedOtherComprehensiveIncome,
			"ad1.TreasuryShares": ad1.TreasuryShares,
			"ad1.EmployeeBenefitTrust": ad1.EmployeeBenefitTrust,
			"ad1.NonControllingInterests": ad1.NonControllingInterests,
			#
			"ad1.AnomalyConvertibleDebt": ad1.AnomalyConvertibleDebt,
			#
			"ad1.AnomalyCommonShares": ad1.AnomalyCommonShares,
			#
			"ad1.AnomalyPreferredShares": ad1.AnomalyPreferredShares,
			#
			"ad1.AnomalyRetainedEarnings": ad1.AnomalyRetainedEarnings,
			#
			"ad1.AnomalyAccumulatedOtherComprehensiveIncome": ad1.AnomalyAccumulatedOtherComprehensiveIncome,
			#
			"ad1.AnomalyTreasuryShares": ad1.AnomalyTreasuryShares,
			#
			"ad1.AnomalyEmployeeBenefitTrust": ad1.AnomalyEmployeeBenefitTrust,
			#
			"ad1.AnomalyNonControllingInterests": ad1.AnomalyNonControllingInterests,
			#
			"ad1.ShareholdersEquityGL_i": ad1.ShareholdersEquityGL_i,
			"ad1.ShareholdersEquityGL_ii": ad1.ShareholdersEquityGL_ii,
			"ad1.ShareholdersEquityGL_iii": ad1.ShareholdersEquityGL_iii,
			#
			#
			# Cash Flow - Audit
			#
			"ad1.OperatingActivities": ad1.OperatingActivities,
			"ad1.InvestingActivities": ad1.InvestingActivities,
			"ad1.FinancingActivities": ad1.FinancingActivities,
			"ad1.IncreaseDecreaseInCash": ad1.IncreaseDecreaseInCash,
			#
			"ad1.CashFlowCashExplainedDifference": ad1.CashFlowCashExplainedDifference,
			#
			"ad1.OperatingActivitiesGL_i": ad1.OperatingActivitiesGL_i,
			"ad1.OperatingActivitiesGL_ii": ad1.OperatingActivitiesGL_ii,
			"ad1.OperatingActivitiesGL_iii": ad1.OperatingActivitiesGL_iii,
			"ad1.AnomalyOperatingActivities": ad1.AnomalyOperatingActivities,
			"ad1.AnomalyOperatingActivitiesSEC": ad1.AnomalyOperatingActivitiesSEC,
			#
			"ad1.InvestingActivitiesGL_i": ad1.InvestingActivitiesGL_i,
			"ad1.InvestingActivitiesGL_ii": ad1.InvestingActivitiesGL_ii,
			"ad1.InvestingActivitiesGL_iii": ad1.InvestingActivitiesGL_iii,
			"ad1.AnomalyInvestingActivities": ad1.AnomalyInvestingActivities,
			"ad1.AnomalyInvestingActivitiesSEC": ad1.AnomalyInvestingActivitiesSEC,
			#
			"ad1.FinancingActivitiesGL_i": ad1.FinancingActivitiesGL_i,
			"ad1.FinancingActivitiesGL_ii": ad1.FinancingActivitiesGL_ii,
			"ad1.FinancingActivitiesGL_iii": ad1.FinancingActivitiesGL_iii,
			"ad1.AnomalyFinancingActivities": ad1.AnomalyFinancingActivities,
			"ad1.AnomalyFinancingActivitiesSEC": ad1.AnomalyFinancingActivitiesSEC,
			#
			#
			# Supplemental - Audit
			#
			"ad1.TargetWorkingCapital": ad1.TargetWorkingCapital,
			"ad1.ReinvestmentOfMaintenance": ad1.ReinvestmentOfMaintenance,
			"ad1.NormalizedDividendPaymentToNonControllingInterests": ad1.NormalizedDividendPaymentToNonControllingInterests,
			"ad1.NormalizedDividendPaymentToPreferredShareholders": ad1.NormalizedDividendPaymentToPreferredShareholders,
			"ad1.TheoricalInterestRate": ad1.TheoricalInterestRate,
			"ad1.TheoricalTaxRate": ad1.TheoricalTaxRate,
			"ad1.CapitalizationRateFloor": ad1.CapitalizationRateFloor,
			#
			#
			# AUDIT 2
			#
			# General - Audit
			#
			"ad2.db": ad2.db,
			"ad2.AccessionNumber": ad2.AccessionNumber,
			"ad2.AmendmentFlag": ad2.AmendmentFlag,
			"ad2.EntityRegistrantName": ad2.EntityRegistrantName,
			"ad2.Period": ad2.Period,
			"ad2.PeriodEndDate": ad2.PeriodEndDate,
			"ad2.TradingSymbol": ad2.TradingSymbol,
			#
			# Balance Sheets - Audit
			#
			"ad2.CurrentAssets": ad2.CurrentAssets,
			"ad2.NonCurrentAssets": ad2.NonCurrentAssets,
			"ad2.Assets": ad2.Assets,
			"ad2.CurrentLiabilities": ad2.CurrentLiabilities,
			"ad2.NonCurrentLiabilities": ad2.NonCurrentLiabilities,
			"ad2.Liabilities": ad2.Liabilities,
			"ad2.ShareholdersEquity": ad2.ShareholdersEquity,
			"ad2.LiabilitiesAndShareholdersEquity": ad2.LiabilitiesAndShareholdersEquity,
			#
			"ad2.CurrentAssetsGL_i": ad2.CurrentAssetsGL_i,
			"ad2.CurrentAssetsGL_ii": ad2.CurrentAssetsGL_ii,
			"ad2.CurrentAssetsGL_iii": ad2.CurrentAssetsGL_iii,
			"ad2.AnomalyCurrentAssets": ad2.AnomalyCurrentAssets,
			"ad2.AnomalyCurrentAssetsSEC": ad2.AnomalyCurrentAssetsSEC,
			#
			"ad2.NonCurrentAssetsGL_i": ad2.NonCurrentAssetsGL_i,
			"ad2.NonCurrentAssetsGL_ii": ad2.NonCurrentAssetsGL_ii,
			"ad2.NonCurrentAssetsGL_iii": ad2.NonCurrentAssetsGL_iii,
			"ad2.AnomalyNonCurrentAssets": ad2.AnomalyNonCurrentAssets,
			"ad2.AnomalyNonCurrentAssetsSEC": ad2.AnomalyNonCurrentAssetsSEC,
			#
			"ad2.AnomalyAssets": ad2.AnomalyAssets,
			#
			"ad2.CurrentLiabilitiesGL_i": ad2.CurrentLiabilitiesGL_i,
			"ad2.CurrentLiabilitiesGL_ii": ad2.CurrentLiabilitiesGL_ii,
			"ad2.CurrentLiabilitiesGL_iii": ad2.CurrentLiabilitiesGL_iii,
			"ad2.AnomalyCurrentLiabilities": ad2.AnomalyCurrentLiabilities,
			"ad2.AnomalyCurrentLiabilitiesSEC": ad2.AnomalyCurrentLiabilitiesSEC,
			#
			"ad2.NonCurrentLiabilitiesGL_i": ad2.NonCurrentLiabilitiesGL_i,
			"ad2.NonCurrentLiabilitiesGL_ii": ad2.NonCurrentLiabilitiesGL_ii,
			"ad2.NonCurrentLiabilitiesGL_iii": ad2.NonCurrentLiabilitiesGL_iii,
			"ad2.AnomalyNonCurrentLiabilities": ad2.AnomalyNonCurrentLiabilities,
			"ad2.AnomalyNonCurrentLiabilitiesSEC": ad2.AnomalyNonCurrentLiabilitiesSEC,
			#
			"ad2.AnomalyLiabilities": ad2.AnomalyLiabilities,
			"ad2.AnomalyShareholdersEquity": ad2.AnomalyShareholdersEquity,
			#
			"ad2.ShareholdersEquityBalanceGL_i": ad2.ShareholdersEquityBalanceGL_i,
			"ad2.ShareholdersEquityBalanceGL_ii": ad2.ShareholdersEquityBalanceGL_ii,
			"ad2.ShareholdersEquityBalanceGL_iii": ad2.ShareholdersEquityBalanceGL_iii,
			"ad2.AnomalyShareholdersEquitySEC": ad2.AnomalyShareholdersEquitySEC,
			"ad2.AnomalyLiabilitiesAndShareholdersEquity": ad2.AnomalyLiabilitiesAndShareholdersEquity,
			#
			#
			# Income Statements - Audit
			#
			"ad2.Sales": ad2.Sales,
			"ad2.CostOfSales": ad2.CostOfSales,
			"ad2.GrossMargin": ad2.GrossMargin,
			"ad2.OperatingExpenses": ad2.OperatingExpenses,
			"ad2.OperatingIncome": ad2.OperatingIncome,
			"ad2.IncomeBeforeTaxes": ad2.IncomeBeforeTaxes,
			"ad2.NetIncome": ad2.NetIncome,
			"ad2.NetIncomeAttributableToNonControllingInterest": ad2.NetIncomeAttributableToNonControllingInterest,
			#
			"ad2.GrossMarginGL_i": ad2.GrossMarginGL_i,
			"ad2.GrossMarginGL_ii": ad2.GrossMarginGL_ii,
			"ad2.GrossMarginGL_iii": ad2.GrossMarginGL_iii,
			#
			"ad2.AnomalyGrossMargin": ad2.AnomalyGrossMargin,
			#
			"ad2.OperatingExpensesGL_i": ad2.OperatingExpensesGL_i,
			"ad2.OperatingExpensesGL_ii": ad2.OperatingExpensesGL_ii,
			"ad2.OperatingExpensesGL_iii": ad2.OperatingExpensesGL_iii,
			#
			"ad2.AnomalyOperatingExpenses": ad2.AnomalyOperatingExpenses,
			#
			"ad2.OperatingIncomeGL_i": ad2.OperatingIncomeGL_i,
			"ad2.OperatingIncomeGL_ii": ad2.OperatingIncomeGL_ii,
			"ad2.OperatingIncomeGL_iii": ad2.OperatingIncomeGL_iii,
			#
			"ad2.AnomalyOperatingIncome": ad2.AnomalyOperatingIncome,
			#
			"ad2.IncomeBeforeTaxesGL_i": ad2.IncomeBeforeTaxesGL_i,
			"ad2.IncomeBeforeTaxesGL_ii": ad2.IncomeBeforeTaxesGL_ii,
			"ad2.IncomeBeforeTaxesGL_iii": ad2.IncomeBeforeTaxesGL_iii,
			#
			"ad2.AnomalyIncomeBeforeTaxes": ad2.AnomalyIncomeBeforeTaxes,
			#
			"ad2.NetIncomeGL_i": ad2.NetIncomeGL_i,
			"ad2.NetIncomeGL_ii": ad2.NetIncomeGL_ii,
			"ad2.NetIncomeGL_iii": ad2.NetIncomeGL_iii,
			#
			"ad2.AnomalyNetIncome": ad2.AnomalyNetIncome,
			#
			#
			# Comprehensive Income - Audit
			#
			"ad2.OtherComprehensiveIncome": ad2.OtherComprehensiveIncome,
			"ad2.ComprehensiveIncome": ad2.ComprehensiveIncome,
			#
			"ad2.OtherComprehensiveIncomeGL_i": ad2.OtherComprehensiveIncomeGL_i,
			"ad2.OtherComprehensiveIncomeGL_ii": ad2.OtherComprehensiveIncomeGL_ii,
			"ad2.OtherComprehensiveIncomeGL_iii": ad2.OtherComprehensiveIncomeGL_iii,
			"ad2.AnomalyOtherComprehensiveIncome": ad2.AnomalyOtherComprehensiveIncome,
			"ad2.AnomalyComprehensiveIncome": ad2.AnomalyComprehensiveIncome,
			#
			#
			# Shareholders Equity - Audit
			#
			"ad2.ShareholdersEquityBeginning": ad2.ShareholdersEquityBeginning,
			#
			"ad2.ConvertibleDebt": ad2.ConvertibleDebt,
			"ad2.CommonShares": ad2.CommonShares,
			"ad2.PreferredShares": ad2.PreferredShares,
			"ad2.RetainedEarnings": ad2.RetainedEarnings,
			"ad2.AccumulatedOtherComprehensiveIncome": ad2.AccumulatedOtherComprehensiveIncome,
			"ad2.TreasuryShares": ad2.TreasuryShares,
			"ad2.EmployeeBenefitTrust": ad2.EmployeeBenefitTrust,
			"ad2.NonControllingInterests": ad2.NonControllingInterests,
			#
			"ad2.AnomalyConvertibleDebt": ad2.AnomalyConvertibleDebt,
			#
			"ad2.AnomalyCommonShares": ad2.AnomalyCommonShares,
			#
			"ad2.AnomalyPreferredShares": ad2.AnomalyPreferredShares,
			#
			"ad2.AnomalyRetainedEarnings": ad2.AnomalyRetainedEarnings,
			#
			"ad2.AnomalyAccumulatedOtherComprehensiveIncome": ad2.AnomalyAccumulatedOtherComprehensiveIncome,
			#
			"ad2.AnomalyTreasuryShares": ad2.AnomalyTreasuryShares,
			#
			"ad2.AnomalyEmployeeBenefitTrust": ad2.AnomalyEmployeeBenefitTrust,
			#
			"ad2.AnomalyNonControllingInterests": ad2.AnomalyNonControllingInterests,
			#
			"ad2.ShareholdersEquityGL_i": ad2.ShareholdersEquityGL_i,
			"ad2.ShareholdersEquityGL_ii": ad2.ShareholdersEquityGL_ii,
			"ad2.ShareholdersEquityGL_iii": ad2.ShareholdersEquityGL_iii,
			#
			#
			# Cash Flow - Audit,
			#
			"ad2.OperatingActivities": ad2.OperatingActivities,
			"ad2.InvestingActivities": ad2.InvestingActivities,
			"ad2.FinancingActivities": ad2.FinancingActivities,
			"ad2.IncreaseDecreaseInCash": ad2.IncreaseDecreaseInCash,
			#
			"ad2.CashFlowCashExplainedDifference": ad2.CashFlowCashExplainedDifference,
			#
			"ad2.OperatingActivitiesGL_i": ad2.OperatingActivitiesGL_i,
			"ad2.OperatingActivitiesGL_ii": ad2.OperatingActivitiesGL_ii,
			"ad2.OperatingActivitiesGL_iii": ad2.OperatingActivitiesGL_iii,
			"ad2.AnomalyOperatingActivities": ad2.AnomalyOperatingActivities,
			"ad2.AnomalyOperatingActivitiesSEC": ad2.AnomalyOperatingActivitiesSEC,
			#
			"ad2.InvestingActivitiesGL_i": ad2.InvestingActivitiesGL_i,
			"ad2.InvestingActivitiesGL_ii": ad2.InvestingActivitiesGL_ii,
			"ad2.InvestingActivitiesGL_iii": ad2.InvestingActivitiesGL_iii,
			"ad2.AnomalyInvestingActivities": ad2.AnomalyInvestingActivities,
			"ad2.AnomalyInvestingActivitiesSEC": ad2.AnomalyInvestingActivitiesSEC,
			#
			"ad2.FinancingActivitiesGL_i": ad2.FinancingActivitiesGL_i,
			"ad2.FinancingActivitiesGL_ii": ad2.FinancingActivitiesGL_ii,
			"ad2.FinancingActivitiesGL_iii": ad2.FinancingActivitiesGL_iii,
			"ad2.AnomalyFinancingActivities": ad2.AnomalyFinancingActivities,
			"ad2.AnomalyFinancingActivitiesSEC": ad2.AnomalyFinancingActivitiesSEC,
			#
			#
			# Supplemental - Audit,
			#
			"ad2.TargetWorkingCapital": ad2.TargetWorkingCapital,
			"ad2.ReinvestmentOfMaintenance": ad2.ReinvestmentOfMaintenance,
			"ad2.NormalizedDividendPaymentToNonControllingInterests": ad2.NormalizedDividendPaymentToNonControllingInterests,
			"ad2.NormalizedDividendPaymentToPreferredShareholders": ad2.NormalizedDividendPaymentToPreferredShareholders,
			"ad2.TheoricalInterestRate": ad2.TheoricalInterestRate,
			"ad2.TheoricalTaxRate": ad2.TheoricalTaxRate,
			"ad2.CapitalizationRateFloor": ad2.CapitalizationRateFloor,
			#
			#
			# AUDIT 3
			#
			# General - Audit,
			#
			"ad3.db": ad3.db,
			"ad3.AccessionNumber": ad3.AccessionNumber,
			"ad3.AmendmentFlag": ad3.AmendmentFlag,
			"ad3.EntityRegistrantName": ad3.EntityRegistrantName,
			"ad3.Period": ad3.Period,
			"ad3.PeriodEndDate": ad3.PeriodEndDate,
			"ad3.TradingSymbol": ad3.TradingSymbol,
			#
			# Balance Sheets - Audit,
			#
			"ad3.CurrentAssets": ad3.CurrentAssets,
			"ad3.NonCurrentAssets": ad3.NonCurrentAssets,
			"ad3.Assets": ad3.Assets,
			"ad3.CurrentLiabilities": ad3.CurrentLiabilities,
			"ad3.NonCurrentLiabilities": ad3.NonCurrentLiabilities,
			"ad3.Liabilities": ad3.Liabilities,
			"ad3.ShareholdersEquity": ad3.ShareholdersEquity,
			"ad3.LiabilitiesAndShareholdersEquity": ad3.LiabilitiesAndShareholdersEquity,
			#
			"ad3.CurrentAssetsGL_i": ad3.CurrentAssetsGL_i,
			"ad3.CurrentAssetsGL_ii": ad3.CurrentAssetsGL_ii,
			"ad3.CurrentAssetsGL_iii": ad3.CurrentAssetsGL_iii,
			"ad3.AnomalyCurrentAssets": ad3.AnomalyCurrentAssets,
			"ad3.AnomalyCurrentAssetsSEC": ad3.AnomalyCurrentAssetsSEC,
			#
			"ad3.NonCurrentAssetsGL_i": ad3.NonCurrentAssetsGL_i,
			"ad3.NonCurrentAssetsGL_ii": ad3.NonCurrentAssetsGL_ii,
			"ad3.NonCurrentAssetsGL_iii": ad3.NonCurrentAssetsGL_iii,
			"ad3.AnomalyNonCurrentAssets": ad3.AnomalyNonCurrentAssets,
			"ad3.AnomalyNonCurrentAssetsSEC": ad3.AnomalyNonCurrentAssetsSEC,
			#
			"ad3.AnomalyAssets": ad3.AnomalyAssets,
			#
			"ad3.CurrentLiabilitiesGL_i": ad3.CurrentLiabilitiesGL_i,
			"ad3.CurrentLiabilitiesGL_ii": ad3.CurrentLiabilitiesGL_ii,
			"ad3.CurrentLiabilitiesGL_iii": ad3.CurrentLiabilitiesGL_iii,
			"ad3.AnomalyCurrentLiabilities": ad3.AnomalyCurrentLiabilities,
			"ad3.AnomalyCurrentLiabilitiesSEC": ad3.AnomalyCurrentLiabilitiesSEC,
			#
			"ad3.NonCurrentLiabilitiesGL_i": ad3.NonCurrentLiabilitiesGL_i,
			"ad3.NonCurrentLiabilitiesGL_ii": ad3.NonCurrentLiabilitiesGL_ii,
			"ad3.NonCurrentLiabilitiesGL_iii": ad3.NonCurrentLiabilitiesGL_iii,
			"ad3.AnomalyNonCurrentLiabilities": ad3.AnomalyNonCurrentLiabilities,
			"ad3.AnomalyNonCurrentLiabilitiesSEC": ad3.AnomalyNonCurrentLiabilitiesSEC,
			#
			"ad3.AnomalyLiabilities": ad3.AnomalyLiabilities,
			"ad3.AnomalyShareholdersEquity": ad3.AnomalyShareholdersEquity,
			#
			"ad3.ShareholdersEquityBalanceGL_i": ad3.ShareholdersEquityBalanceGL_i,
			"ad3.ShareholdersEquityBalanceGL_ii": ad3.ShareholdersEquityBalanceGL_ii,
			"ad3.ShareholdersEquityBalanceGL_iii": ad3.ShareholdersEquityBalanceGL_iii,
			"ad3.AnomalyShareholdersEquitySEC": ad3.AnomalyShareholdersEquitySEC,
			"ad3.AnomalyLiabilitiesAndShareholdersEquity": ad3.AnomalyLiabilitiesAndShareholdersEquity,
			#
			#
			# Income Statements - Audit,
			#
			"ad3.Sales": ad3.Sales,
			"ad3.CostOfSales": ad3.CostOfSales,
			"ad3.GrossMargin": ad3.GrossMargin,
			"ad3.OperatingExpenses": ad3.OperatingExpenses,
			"ad3.OperatingIncome": ad3.OperatingIncome,
			"ad3.IncomeBeforeTaxes": ad3.IncomeBeforeTaxes,
			"ad3.NetIncome": ad3.NetIncome,
			"ad3.NetIncomeAttributableToNonControllingInterest": ad3.NetIncomeAttributableToNonControllingInterest,
			#
			"ad3.GrossMarginGL_i": ad3.GrossMarginGL_i,
			"ad3.GrossMarginGL_ii": ad3.GrossMarginGL_ii,
			"ad3.GrossMarginGL_iii": ad3.GrossMarginGL_iii,
			#
			"ad3.AnomalyGrossMargin": ad3.AnomalyGrossMargin,
			#
			"ad3.OperatingExpensesGL_i": ad3.OperatingExpensesGL_i,
			"ad3.OperatingExpensesGL_ii": ad3.OperatingExpensesGL_ii,
			"ad3.OperatingExpensesGL_iii": ad3.OperatingExpensesGL_iii,
			#
			"ad3.AnomalyOperatingExpenses": ad3.AnomalyOperatingExpenses,
			#
			"ad3.OperatingIncomeGL_i": ad3.OperatingIncomeGL_i,
			"ad3.OperatingIncomeGL_ii": ad3.OperatingIncomeGL_ii,
			"ad3.OperatingIncomeGL_iii": ad3.OperatingIncomeGL_iii,
			#
			"ad3.AnomalyOperatingIncome": ad3.AnomalyOperatingIncome,
			#
			"ad3.IncomeBeforeTaxesGL_i": ad3.IncomeBeforeTaxesGL_i,
			"ad3.IncomeBeforeTaxesGL_ii": ad3.IncomeBeforeTaxesGL_ii,
			"ad3.IncomeBeforeTaxesGL_iii": ad3.IncomeBeforeTaxesGL_iii,
			#
			"ad3.AnomalyIncomeBeforeTaxes": ad3.AnomalyIncomeBeforeTaxes,
			#
			"ad3.NetIncomeGL_i": ad3.NetIncomeGL_i,
			"ad3.NetIncomeGL_ii": ad3.NetIncomeGL_ii,
			"ad3.NetIncomeGL_iii": ad3.NetIncomeGL_iii,
			#
			"ad3.AnomalyNetIncome": ad3.AnomalyNetIncome,
			#
			#
			# Comprehensive Income - Audit,
			#
			"ad3.OtherComprehensiveIncome": ad3.OtherComprehensiveIncome,
			"ad3.ComprehensiveIncome": ad3.ComprehensiveIncome,
			#
			"ad3.OtherComprehensiveIncomeGL_i": ad3.OtherComprehensiveIncomeGL_i,
			"ad3.OtherComprehensiveIncomeGL_ii": ad3.OtherComprehensiveIncomeGL_ii,
			"ad3.OtherComprehensiveIncomeGL_iii": ad3.OtherComprehensiveIncomeGL_iii,
			"ad3.AnomalyOtherComprehensiveIncome": ad3.AnomalyOtherComprehensiveIncome,
			"ad3.AnomalyComprehensiveIncome": ad3.AnomalyComprehensiveIncome,
			#
			#
			# Shareholders Equity - Audit,
			#
			"ad3.ShareholdersEquityBeginning": ad3.ShareholdersEquityBeginning,
			#
			"ad3.ConvertibleDebt": ad3.ConvertibleDebt,
			"ad3.CommonShares": ad3.CommonShares,
			"ad3.PreferredShares": ad3.PreferredShares,
			"ad3.RetainedEarnings": ad3.RetainedEarnings,
			"ad3.AccumulatedOtherComprehensiveIncome": ad3.AccumulatedOtherComprehensiveIncome,
			"ad3.TreasuryShares": ad3.TreasuryShares,
			"ad3.EmployeeBenefitTrust": ad3.EmployeeBenefitTrust,
			"ad3.NonControllingInterests": ad3.NonControllingInterests,
			#
			"ad3.AnomalyConvertibleDebt": ad3.AnomalyConvertibleDebt,
			#
			"ad3.AnomalyCommonShares": ad3.AnomalyCommonShares,
			#
			"ad3.AnomalyPreferredShares": ad3.AnomalyPreferredShares,
			#
			"ad3.AnomalyRetainedEarnings": ad3.AnomalyRetainedEarnings,
			#
			"ad3.AnomalyAccumulatedOtherComprehensiveIncome": ad3.AnomalyAccumulatedOtherComprehensiveIncome,
			#
			"ad3.AnomalyTreasuryShares": ad3.AnomalyTreasuryShares,
			#
			"ad3.AnomalyEmployeeBenefitTrust": ad3.AnomalyEmployeeBenefitTrust,
			#
			"ad3.AnomalyNonControllingInterests": ad3.AnomalyNonControllingInterests,
			#
			"ad3.ShareholdersEquityGL_i": ad3.ShareholdersEquityGL_i,
			"ad3.ShareholdersEquityGL_ii": ad3.ShareholdersEquityGL_ii,
			"ad3.ShareholdersEquityGL_iii": ad3.ShareholdersEquityGL_iii,
			#
			#
			# Cash Flow - Audit,
			#
			"ad3.OperatingActivities": ad3.OperatingActivities,
			"ad3.InvestingActivities": ad3.InvestingActivities,
			"ad3.FinancingActivities": ad3.FinancingActivities,
			"ad3.IncreaseDecreaseInCash": ad3.IncreaseDecreaseInCash,
			#
			"ad3.CashFlowCashExplainedDifference": ad3.CashFlowCashExplainedDifference,
			#
			"ad3.OperatingActivitiesGL_i": ad3.OperatingActivitiesGL_i,
			"ad3.OperatingActivitiesGL_ii": ad3.OperatingActivitiesGL_ii,
			"ad3.OperatingActivitiesGL_iii": ad3.OperatingActivitiesGL_iii,
			"ad3.AnomalyOperatingActivities": ad3.AnomalyOperatingActivities,
			"ad3.AnomalyOperatingActivitiesSEC": ad3.AnomalyOperatingActivitiesSEC,
			#
			"ad3.InvestingActivitiesGL_i": ad3.InvestingActivitiesGL_i,
			"ad3.InvestingActivitiesGL_ii": ad3.InvestingActivitiesGL_ii,
			"ad3.InvestingActivitiesGL_iii": ad3.InvestingActivitiesGL_iii,
			"ad3.AnomalyInvestingActivities": ad3.AnomalyInvestingActivities,
			"ad3.AnomalyInvestingActivitiesSEC": ad3.AnomalyInvestingActivitiesSEC,
			#
			"ad3.FinancingActivitiesGL_i": ad3.FinancingActivitiesGL_i,
			"ad3.FinancingActivitiesGL_ii": ad3.FinancingActivitiesGL_ii,
			"ad3.FinancingActivitiesGL_iii": ad3.FinancingActivitiesGL_iii,
			"ad3.AnomalyFinancingActivities": ad3.AnomalyFinancingActivities,
			"ad3.AnomalyFinancingActivitiesSEC": ad3.AnomalyFinancingActivitiesSEC,
			#
			#
			# Supplemental - Audit,
			#
			"ad3.TargetWorkingCapital": ad3.TargetWorkingCapital,
			"ad3.ReinvestmentOfMaintenance": ad3.ReinvestmentOfMaintenance,
			"ad3.NormalizedDividendPaymentToNonControllingInterests": ad3.NormalizedDividendPaymentToNonControllingInterests,
			"ad3.NormalizedDividendPaymentToPreferredShareholders": ad3.NormalizedDividendPaymentToPreferredShareholders,
			"ad3.TheoricalInterestRate": ad3.TheoricalInterestRate,
			"ad3.TheoricalTaxRate": ad3.TheoricalTaxRate,
			"ad3.CapitalizationRateFloor": ad3.CapitalizationRateFloor,
			#
			#
			#
			# AUDIT 4
			#
			#
			# General - Audit,
			#
			"ad4.db": ad4.db,
			"ad4.AccessionNumber": ad4.AccessionNumber,
			"ad4.AmendmentFlag": ad4.AmendmentFlag,
			"ad4.EntityRegistrantName": ad4.EntityRegistrantName,
			"ad4.Period": ad4.Period,
			"ad4.PeriodEndDate": ad4.PeriodEndDate,
			"ad4.TradingSymbol": ad4.TradingSymbol,
			#
			# Balance Sheets - Audit,
			#
			"ad4.CurrentAssets": ad4.CurrentAssets,
			"ad4.NonCurrentAssets": ad4.NonCurrentAssets,
			"ad4.Assets": ad4.Assets,
			"ad4.CurrentLiabilities": ad4.CurrentLiabilities,
			"ad4.NonCurrentLiabilities": ad4.NonCurrentLiabilities,
			"ad4.Liabilities": ad4.Liabilities,
			"ad4.ShareholdersEquity": ad4.ShareholdersEquity,
			"ad4.LiabilitiesAndShareholdersEquity": ad4.LiabilitiesAndShareholdersEquity,
			#
			"ad4.CurrentAssetsGL_i": ad4.CurrentAssetsGL_i,
			"ad4.CurrentAssetsGL_ii": ad4.CurrentAssetsGL_ii,
			"ad4.CurrentAssetsGL_iii": ad4.CurrentAssetsGL_iii,
			"ad4.AnomalyCurrentAssets": ad4.AnomalyCurrentAssets,
			"ad4.AnomalyCurrentAssetsSEC": ad4.AnomalyCurrentAssetsSEC,
			#
			"ad4.NonCurrentAssetsGL_i": ad4.NonCurrentAssetsGL_i,
			"ad4.NonCurrentAssetsGL_ii": ad4.NonCurrentAssetsGL_ii,
			"ad4.NonCurrentAssetsGL_iii": ad4.NonCurrentAssetsGL_iii,
			"ad4.AnomalyNonCurrentAssets": ad4.AnomalyNonCurrentAssets,
			"ad4.AnomalyNonCurrentAssetsSEC": ad4.AnomalyNonCurrentAssetsSEC,
			#
			"ad4.AnomalyAssets": ad4.AnomalyAssets,
			#
			"ad4.CurrentLiabilitiesGL_i": ad4.CurrentLiabilitiesGL_i,
			"ad4.CurrentLiabilitiesGL_ii": ad4.CurrentLiabilitiesGL_ii,
			"ad4.CurrentLiabilitiesGL_iii": ad4.CurrentLiabilitiesGL_iii,
			"ad4.AnomalyCurrentLiabilities": ad4.AnomalyCurrentLiabilities,
			"ad4.AnomalyCurrentLiabilitiesSEC": ad4.AnomalyCurrentLiabilitiesSEC,
			#
			"ad4.NonCurrentLiabilitiesGL_i": ad4.NonCurrentLiabilitiesGL_i,
			"ad4.NonCurrentLiabilitiesGL_ii": ad4.NonCurrentLiabilitiesGL_ii,
			"ad4.NonCurrentLiabilitiesGL_iii": ad4.NonCurrentLiabilitiesGL_iii,
			"ad4.AnomalyNonCurrentLiabilities": ad4.AnomalyNonCurrentLiabilities,
			"ad4.AnomalyNonCurrentLiabilitiesSEC": ad4.AnomalyNonCurrentLiabilitiesSEC,
			#
			"ad4.AnomalyLiabilities": ad4.AnomalyLiabilities,
			"ad4.AnomalyShareholdersEquity": ad4.AnomalyShareholdersEquity,
			#
			"ad4.ShareholdersEquityBalanceGL_i": ad4.ShareholdersEquityBalanceGL_i,
			"ad4.ShareholdersEquityBalanceGL_ii": ad4.ShareholdersEquityBalanceGL_ii,
			"ad4.ShareholdersEquityBalanceGL_iii": ad4.ShareholdersEquityBalanceGL_iii,
			"ad4.AnomalyShareholdersEquitySEC": ad4.AnomalyShareholdersEquitySEC,
			"ad4.AnomalyLiabilitiesAndShareholdersEquity": ad4.AnomalyLiabilitiesAndShareholdersEquity,
			#
			#
			# Income Statements - Audit,
			#
			"ad4.Sales": ad4.Sales,
			"ad4.CostOfSales": ad4.CostOfSales,
			"ad4.GrossMargin": ad4.GrossMargin,
			"ad4.OperatingExpenses": ad4.OperatingExpenses,
			"ad4.OperatingIncome": ad4.OperatingIncome,
			"ad4.IncomeBeforeTaxes": ad4.IncomeBeforeTaxes,
			"ad4.NetIncome": ad4.NetIncome,
			"ad4.NetIncomeAttributableToNonControllingInterest": ad4.NetIncomeAttributableToNonControllingInterest,
			#
			"ad4.GrossMarginGL_i": ad4.GrossMarginGL_i,
			"ad4.GrossMarginGL_ii": ad4.GrossMarginGL_ii,
			"ad4.GrossMarginGL_iii": ad4.GrossMarginGL_iii,
			#
			"ad4.AnomalyGrossMargin": ad4.AnomalyGrossMargin,
			#
			"ad4.OperatingExpensesGL_i": ad4.OperatingExpensesGL_i,
			"ad4.OperatingExpensesGL_ii": ad4.OperatingExpensesGL_ii,
			"ad4.OperatingExpensesGL_iii": ad4.OperatingExpensesGL_iii,
			#
			"ad4.AnomalyOperatingExpenses": ad4.AnomalyOperatingExpenses,
			#
			"ad4.OperatingIncomeGL_i": ad4.OperatingIncomeGL_i,
			"ad4.OperatingIncomeGL_ii": ad4.OperatingIncomeGL_ii,
			"ad4.OperatingIncomeGL_iii": ad4.OperatingIncomeGL_iii,
			#
			"ad4.AnomalyOperatingIncome": ad4.AnomalyOperatingIncome,
			#
			"ad4.IncomeBeforeTaxesGL_i": ad4.IncomeBeforeTaxesGL_i,
			"ad4.IncomeBeforeTaxesGL_ii": ad4.IncomeBeforeTaxesGL_ii,
			"ad4.IncomeBeforeTaxesGL_iii": ad4.IncomeBeforeTaxesGL_iii,
			#
			"ad4.AnomalyIncomeBeforeTaxes": ad4.AnomalyIncomeBeforeTaxes,
			#
			"ad4.NetIncomeGL_i": ad4.NetIncomeGL_i,
			"ad4.NetIncomeGL_ii": ad4.NetIncomeGL_ii,
			"ad4.NetIncomeGL_iii": ad4.NetIncomeGL_iii,
			#
			"ad4.AnomalyNetIncome": ad4.AnomalyNetIncome,
			#
			#
			# Comprehensive Income - Audit,
			#
			"ad4.OtherComprehensiveIncome": ad4.OtherComprehensiveIncome,
			"ad4.ComprehensiveIncome": ad4.ComprehensiveIncome,
			#
			"ad4.OtherComprehensiveIncomeGL_i": ad4.OtherComprehensiveIncomeGL_i,
			"ad4.OtherComprehensiveIncomeGL_ii": ad4.OtherComprehensiveIncomeGL_ii,
			"ad4.OtherComprehensiveIncomeGL_iii": ad4.OtherComprehensiveIncomeGL_iii,
			"ad4.AnomalyOtherComprehensiveIncome": ad4.AnomalyOtherComprehensiveIncome,
			"ad4.AnomalyComprehensiveIncome": ad4.AnomalyComprehensiveIncome,
			#
			#
			# Shareholders Equity - Audit,
			#
			"ad4.ShareholdersEquityBeginning": ad4.ShareholdersEquityBeginning,
			#
			"ad4.ConvertibleDebt": ad4.ConvertibleDebt,
			"ad4.CommonShares": ad4.CommonShares,
			"ad4.PreferredShares": ad4.PreferredShares,
			"ad4.RetainedEarnings": ad4.RetainedEarnings,
			"ad4.AccumulatedOtherComprehensiveIncome": ad4.AccumulatedOtherComprehensiveIncome,
			"ad4.TreasuryShares": ad4.TreasuryShares,
			"ad4.EmployeeBenefitTrust": ad4.EmployeeBenefitTrust,
			"ad4.NonControllingInterests": ad4.NonControllingInterests,
			#
			"ad4.AnomalyConvertibleDebt": ad4.AnomalyConvertibleDebt,
			#
			"ad4.AnomalyCommonShares": ad4.AnomalyCommonShares,
			#
			"ad4.AnomalyPreferredShares": ad4.AnomalyPreferredShares,
			#
			"ad4.AnomalyRetainedEarnings": ad4.AnomalyRetainedEarnings,
			#
			"ad4.AnomalyAccumulatedOtherComprehensiveIncome": ad4.AnomalyAccumulatedOtherComprehensiveIncome,
			#
			"ad4.AnomalyTreasuryShares": ad4.AnomalyTreasuryShares,
			#
			"ad4.AnomalyEmployeeBenefitTrust": ad4.AnomalyEmployeeBenefitTrust,
			#
			"ad4.AnomalyNonControllingInterests": ad4.AnomalyNonControllingInterests,
			#
			"ad4.ShareholdersEquityGL_i": ad4.ShareholdersEquityGL_i,
			"ad4.ShareholdersEquityGL_ii": ad4.ShareholdersEquityGL_ii,
			"ad4.ShareholdersEquityGL_iii": ad4.ShareholdersEquityGL_iii,
			#
			#
			# Cash Flow - Audit,
			#
			"ad4.OperatingActivities": ad4.OperatingActivities,
			"ad4.InvestingActivities": ad4.InvestingActivities,
			"ad4.FinancingActivities": ad4.FinancingActivities,
			"ad4.IncreaseDecreaseInCash": ad4.IncreaseDecreaseInCash,
			#
			"ad4.CashFlowCashExplainedDifference": ad4.CashFlowCashExplainedDifference,
			#
			"ad4.OperatingActivitiesGL_i": ad4.OperatingActivitiesGL_i,
			"ad4.OperatingActivitiesGL_ii": ad4.OperatingActivitiesGL_ii,
			"ad4.OperatingActivitiesGL_iii": ad4.OperatingActivitiesGL_iii,
			"ad4.AnomalyOperatingActivities": ad4.AnomalyOperatingActivities,
			"ad4.AnomalyOperatingActivitiesSEC": ad4.AnomalyOperatingActivitiesSEC,
			#
			"ad4.InvestingActivitiesGL_i": ad4.InvestingActivitiesGL_i,
			"ad4.InvestingActivitiesGL_ii": ad4.InvestingActivitiesGL_ii,
			"ad4.InvestingActivitiesGL_iii": ad4.InvestingActivitiesGL_iii,
			"ad4.AnomalyInvestingActivities": ad4.AnomalyInvestingActivities,
			"ad4.AnomalyInvestingActivitiesSEC": ad4.AnomalyInvestingActivitiesSEC,
			#
			"ad4.FinancingActivitiesGL_i": ad4.FinancingActivitiesGL_i,
			"ad4.FinancingActivitiesGL_ii": ad4.FinancingActivitiesGL_ii,
			"ad4.FinancingActivitiesGL_iii": ad4.FinancingActivitiesGL_iii,
			"ad4.AnomalyFinancingActivities": ad4.AnomalyFinancingActivities,
			"ad4.AnomalyFinancingActivitiesSEC": ad4.AnomalyFinancingActivitiesSEC,
			#
			#
			# Supplemental - Audit,
			#
			"ad4.TargetWorkingCapital": ad4.TargetWorkingCapital,
			"ad4.ReinvestmentOfMaintenance": ad4.ReinvestmentOfMaintenance,
			"ad4.NormalizedDividendPaymentToNonControllingInterests": ad4.NormalizedDividendPaymentToNonControllingInterests,
			"ad4.NormalizedDividendPaymentToPreferredShareholders": ad4.NormalizedDividendPaymentToPreferredShareholders,
			"ad4.TheoricalInterestRate": ad4.TheoricalInterestRate,
			"ad4.TheoricalTaxRate": ad4.TheoricalTaxRate,
			"ad4.CapitalizationRateFloor": ad4.CapitalizationRateFloor,
			#
			#
			# AUDIT 5
			#
			#
			# General - Audit,
			#
			"ad5.db": ad5.db,
			"ad5.AccessionNumber": ad5.AccessionNumber,
			"ad5.AmendmentFlag": ad5.AmendmentFlag,
			"ad5.EntityRegistrantName": ad5.EntityRegistrantName,
			"ad5.Period": ad5.Period,
			"ad5.PeriodEndDate": ad5.PeriodEndDate,
			"ad5.TradingSymbol": ad5.TradingSymbol,
			#
			# Balance Sheets - Audit,
			#
			"ad5.CurrentAssets": ad5.CurrentAssets,
			"ad5.NonCurrentAssets": ad5.NonCurrentAssets,
			"ad5.Assets": ad5.Assets,
			"ad5.CurrentLiabilities": ad5.CurrentLiabilities,
			"ad5.NonCurrentLiabilities": ad5.NonCurrentLiabilities,
			"ad5.Liabilities": ad5.Liabilities,
			"ad5.ShareholdersEquity": ad5.ShareholdersEquity,
			"ad5.LiabilitiesAndShareholdersEquity": ad5.LiabilitiesAndShareholdersEquity,
			#
			"ad5.CurrentAssetsGL_i": ad5.CurrentAssetsGL_i,
			"ad5.CurrentAssetsGL_ii": ad5.CurrentAssetsGL_ii,
			"ad5.CurrentAssetsGL_iii": ad5.CurrentAssetsGL_iii,
			"ad5.AnomalyCurrentAssets": ad5.AnomalyCurrentAssets,
			"ad5.AnomalyCurrentAssetsSEC": ad5.AnomalyCurrentAssetsSEC,
			#
			"ad5.NonCurrentAssetsGL_i": ad5.NonCurrentAssetsGL_i,
			"ad5.NonCurrentAssetsGL_ii": ad5.NonCurrentAssetsGL_ii,
			"ad5.NonCurrentAssetsGL_iii": ad5.NonCurrentAssetsGL_iii,
			"ad5.AnomalyNonCurrentAssets": ad5.AnomalyNonCurrentAssets,
			"ad5.AnomalyNonCurrentAssetsSEC": ad5.AnomalyNonCurrentAssetsSEC,
			#
			"ad5.AnomalyAssets": ad5.AnomalyAssets,
			#
			"ad5.CurrentLiabilitiesGL_i": ad5.CurrentLiabilitiesGL_i,
			"ad5.CurrentLiabilitiesGL_ii": ad5.CurrentLiabilitiesGL_ii,
			"ad5.CurrentLiabilitiesGL_iii": ad5.CurrentLiabilitiesGL_iii,
			"ad5.AnomalyCurrentLiabilities": ad5.AnomalyCurrentLiabilities,
			"ad5.AnomalyCurrentLiabilitiesSEC": ad5.AnomalyCurrentLiabilitiesSEC,
			#
			"ad5.NonCurrentLiabilitiesGL_i": ad5.NonCurrentLiabilitiesGL_i,
			"ad5.NonCurrentLiabilitiesGL_ii": ad5.NonCurrentLiabilitiesGL_ii,
			"ad5.NonCurrentLiabilitiesGL_iii": ad5.NonCurrentLiabilitiesGL_iii,
			"ad5.AnomalyNonCurrentLiabilities": ad5.AnomalyNonCurrentLiabilities,
			"ad5.AnomalyNonCurrentLiabilitiesSEC": ad5.AnomalyNonCurrentLiabilitiesSEC,
			#
			"ad5.AnomalyLiabilities": ad5.AnomalyLiabilities,
			"ad5.AnomalyShareholdersEquity": ad5.AnomalyShareholdersEquity,
			#
			"ad5.ShareholdersEquityBalanceGL_i": ad5.ShareholdersEquityBalanceGL_i,
			"ad5.ShareholdersEquityBalanceGL_ii": ad5.ShareholdersEquityBalanceGL_ii,
			"ad5.ShareholdersEquityBalanceGL_iii": ad5.ShareholdersEquityBalanceGL_iii,
			"ad5.AnomalyShareholdersEquitySEC": ad5.AnomalyShareholdersEquitySEC,
			"ad5.AnomalyLiabilitiesAndShareholdersEquity": ad5.AnomalyLiabilitiesAndShareholdersEquity,
			#
			#
			# Income Statements - Audit,
			#
			"ad5.Sales": ad5.Sales,
			"ad5.CostOfSales": ad5.CostOfSales,
			"ad5.GrossMargin": ad5.GrossMargin,
			"ad5.OperatingExpenses": ad5.OperatingExpenses,
			"ad5.OperatingIncome": ad5.OperatingIncome,
			"ad5.IncomeBeforeTaxes": ad5.IncomeBeforeTaxes,
			"ad5.NetIncome": ad5.NetIncome,
			"ad5.NetIncomeAttributableToNonControllingInterest": ad5.NetIncomeAttributableToNonControllingInterest,
			#
			"ad5.GrossMarginGL_i": ad5.GrossMarginGL_i,
			"ad5.GrossMarginGL_ii": ad5.GrossMarginGL_ii,
			"ad5.GrossMarginGL_iii": ad5.GrossMarginGL_iii,
			#
			"ad5.AnomalyGrossMargin": ad5.AnomalyGrossMargin,
			#
			"ad5.OperatingExpensesGL_i": ad5.OperatingExpensesGL_i,
			"ad5.OperatingExpensesGL_ii": ad5.OperatingExpensesGL_ii,
			"ad5.OperatingExpensesGL_iii": ad5.OperatingExpensesGL_iii,
			#
			"ad5.AnomalyOperatingExpenses": ad5.AnomalyOperatingExpenses,
			#
			"ad5.OperatingIncomeGL_i": ad5.OperatingIncomeGL_i,
			"ad5.OperatingIncomeGL_ii": ad5.OperatingIncomeGL_ii,
			"ad5.OperatingIncomeGL_iii": ad5.OperatingIncomeGL_iii,
			#
			"ad5.AnomalyOperatingIncome": ad5.AnomalyOperatingIncome,
			#
			"ad5.IncomeBeforeTaxesGL_i": ad5.IncomeBeforeTaxesGL_i,
			"ad5.IncomeBeforeTaxesGL_ii": ad5.IncomeBeforeTaxesGL_ii,
			"ad5.IncomeBeforeTaxesGL_iii": ad5.IncomeBeforeTaxesGL_iii,
			#
			"ad5.AnomalyIncomeBeforeTaxes": ad5.AnomalyIncomeBeforeTaxes,
			#
			"ad5.NetIncomeGL_i": ad5.NetIncomeGL_i,
			"ad5.NetIncomeGL_ii": ad5.NetIncomeGL_ii,
			"ad5.NetIncomeGL_iii": ad5.NetIncomeGL_iii,
			#
			"ad5.AnomalyNetIncome": ad5.AnomalyNetIncome,
			#
			#
			# Comprehensive Income - Audit,
			#
			"ad5.OtherComprehensiveIncome": ad5.OtherComprehensiveIncome,
			"ad5.ComprehensiveIncome": ad5.ComprehensiveIncome,
			#
			"ad5.OtherComprehensiveIncomeGL_i": ad5.OtherComprehensiveIncomeGL_i,
			"ad5.OtherComprehensiveIncomeGL_ii": ad5.OtherComprehensiveIncomeGL_ii,
			"ad5.OtherComprehensiveIncomeGL_iii": ad5.OtherComprehensiveIncomeGL_iii,
			"ad5.AnomalyOtherComprehensiveIncome": ad5.AnomalyOtherComprehensiveIncome,
			"ad5.AnomalyComprehensiveIncome": ad5.AnomalyComprehensiveIncome,
			#
			#
			# Shareholders Equity - Audit,
			#
			"ad5.ShareholdersEquityBeginning": ad5.ShareholdersEquityBeginning,
			#
			"ad5.ConvertibleDebt": ad5.ConvertibleDebt,
			"ad5.CommonShares": ad5.CommonShares,
			"ad5.PreferredShares": ad5.PreferredShares,
			"ad5.RetainedEarnings": ad5.RetainedEarnings,
			"ad5.AccumulatedOtherComprehensiveIncome": ad5.AccumulatedOtherComprehensiveIncome,
			"ad5.TreasuryShares": ad5.TreasuryShares,
			"ad5.EmployeeBenefitTrust": ad5.EmployeeBenefitTrust,
			"ad5.NonControllingInterests": ad5.NonControllingInterests,
			#
			"ad5.AnomalyConvertibleDebt": ad5.AnomalyConvertibleDebt,
			#
			"ad5.AnomalyCommonShares": ad5.AnomalyCommonShares,
			#
			"ad5.AnomalyPreferredShares": ad5.AnomalyPreferredShares,
			#
			"ad5.AnomalyRetainedEarnings": ad5.AnomalyRetainedEarnings,
			#
			"ad5.AnomalyAccumulatedOtherComprehensiveIncome": ad5.AnomalyAccumulatedOtherComprehensiveIncome,
			#
			"ad5.AnomalyTreasuryShares": ad5.AnomalyTreasuryShares,
			#
			"ad5.AnomalyEmployeeBenefitTrust": ad5.AnomalyEmployeeBenefitTrust,
			#
			"ad5.AnomalyNonControllingInterests": ad5.AnomalyNonControllingInterests,
			#
			"ad5.ShareholdersEquityGL_i": ad5.ShareholdersEquityGL_i,
			"ad5.ShareholdersEquityGL_ii": ad5.ShareholdersEquityGL_ii,
			"ad5.ShareholdersEquityGL_iii": ad5.ShareholdersEquityGL_iii,
			#
			#
			# Cash Flow - Audit,
			#
			"ad5.OperatingActivities": ad5.OperatingActivities,
			"ad5.InvestingActivities": ad5.InvestingActivities,
			"ad5.FinancingActivities": ad5.FinancingActivities,
			"ad5.IncreaseDecreaseInCash": ad5.IncreaseDecreaseInCash,
			#
			"ad5.CashFlowCashExplainedDifference": ad5.CashFlowCashExplainedDifference,
			#
			"ad5.OperatingActivitiesGL_i": ad5.OperatingActivitiesGL_i,
			"ad5.OperatingActivitiesGL_ii": ad5.OperatingActivitiesGL_ii,
			"ad5.OperatingActivitiesGL_iii": ad5.OperatingActivitiesGL_iii,
			"ad5.AnomalyOperatingActivities": ad5.AnomalyOperatingActivities,
			"ad5.AnomalyOperatingActivitiesSEC": ad5.AnomalyOperatingActivitiesSEC,
			#
			"ad5.InvestingActivitiesGL_i": ad5.InvestingActivitiesGL_i,
			"ad5.InvestingActivitiesGL_ii": ad5.InvestingActivitiesGL_ii,
			"ad5.InvestingActivitiesGL_iii": ad5.InvestingActivitiesGL_iii,
			"ad5.AnomalyInvestingActivities": ad5.AnomalyInvestingActivities,
			"ad5.AnomalyInvestingActivitiesSEC": ad5.AnomalyInvestingActivitiesSEC,
			#
			"ad5.FinancingActivitiesGL_i": ad5.FinancingActivitiesGL_i,
			"ad5.FinancingActivitiesGL_ii": ad5.FinancingActivitiesGL_ii,
			"ad5.FinancingActivitiesGL_iii": ad5.FinancingActivitiesGL_iii,
			"ad5.AnomalyFinancingActivities": ad5.AnomalyFinancingActivities,
			"ad5.AnomalyFinancingActivitiesSEC": ad5.AnomalyFinancingActivitiesSEC,
			#
			#
			# Supplemental - Audit,
			#
			"ad5.TargetWorkingCapital": ad5.TargetWorkingCapital,
			"ad5.ReinvestmentOfMaintenance": ad5.ReinvestmentOfMaintenance,
			"ad5.NormalizedDividendPaymentToNonControllingInterests": ad5.NormalizedDividendPaymentToNonControllingInterests,
			"ad5.NormalizedDividendPaymentToPreferredShareholders": ad5.NormalizedDividendPaymentToPreferredShareholders,
			"ad5.TheoricalInterestRate": ad5.TheoricalInterestRate,
			"ad5.TheoricalTaxRate": ad5.TheoricalTaxRate,
			"ad5.CapitalizationRateFloor": ad5.CapitalizationRateFloor,
			#
			#
			#
			# AUDIT 6
			#
			#
			# General - Audit,
			#
			"ad6.db": ad6.db,
			"ad6.AccessionNumber": ad6.AccessionNumber,
			"ad6.AmendmentFlag": ad6.AmendmentFlag,
			"ad6.EntityRegistrantName": ad6.EntityRegistrantName,
			"ad6.Period": ad6.Period,
			"ad6.PeriodEndDate": ad6.PeriodEndDate,
			"ad6.TradingSymbol": ad6.TradingSymbol,
			#
			# Balance Sheets - Audit,
			#
			"ad6.CurrentAssets": ad6.CurrentAssets,
			"ad6.NonCurrentAssets": ad6.NonCurrentAssets,
			"ad6.Assets": ad6.Assets,
			"ad6.CurrentLiabilities": ad6.CurrentLiabilities,
			"ad6.NonCurrentLiabilities": ad6.NonCurrentLiabilities,
			"ad6.Liabilities": ad6.Liabilities,
			"ad6.ShareholdersEquity": ad6.ShareholdersEquity,
			"ad6.LiabilitiesAndShareholdersEquity": ad6.LiabilitiesAndShareholdersEquity,
			#
			"ad6.CurrentAssetsGL_i": ad6.CurrentAssetsGL_i,
			"ad6.CurrentAssetsGL_ii": ad6.CurrentAssetsGL_ii,
			"ad6.CurrentAssetsGL_iii": ad6.CurrentAssetsGL_iii,
			"ad6.AnomalyCurrentAssets": ad6.AnomalyCurrentAssets,
			"ad6.AnomalyCurrentAssetsSEC": ad6.AnomalyCurrentAssetsSEC,
			#
			"ad6.NonCurrentAssetsGL_i": ad6.NonCurrentAssetsGL_i,
			"ad6.NonCurrentAssetsGL_ii": ad6.NonCurrentAssetsGL_ii,
			"ad6.NonCurrentAssetsGL_iii": ad6.NonCurrentAssetsGL_iii,
			"ad6.AnomalyNonCurrentAssets": ad6.AnomalyNonCurrentAssets,
			"ad6.AnomalyNonCurrentAssetsSEC": ad6.AnomalyNonCurrentAssetsSEC,
			#
			"ad6.AnomalyAssets": ad6.AnomalyAssets,
			#
			"ad6.CurrentLiabilitiesGL_i": ad6.CurrentLiabilitiesGL_i,
			"ad6.CurrentLiabilitiesGL_ii": ad6.CurrentLiabilitiesGL_ii,
			"ad6.CurrentLiabilitiesGL_iii": ad6.CurrentLiabilitiesGL_iii,
			"ad6.AnomalyCurrentLiabilities": ad6.AnomalyCurrentLiabilities,
			"ad6.AnomalyCurrentLiabilitiesSEC": ad6.AnomalyCurrentLiabilitiesSEC,
			#
			"ad6.NonCurrentLiabilitiesGL_i": ad6.NonCurrentLiabilitiesGL_i,
			"ad6.NonCurrentLiabilitiesGL_ii": ad6.NonCurrentLiabilitiesGL_ii,
			"ad6.NonCurrentLiabilitiesGL_iii": ad6.NonCurrentLiabilitiesGL_iii,
			"ad6.AnomalyNonCurrentLiabilities": ad6.AnomalyNonCurrentLiabilities,
			"ad6.AnomalyNonCurrentLiabilitiesSEC": ad6.AnomalyNonCurrentLiabilitiesSEC,
			#
			"ad6.AnomalyLiabilities": ad6.AnomalyLiabilities,
			"ad6.AnomalyShareholdersEquity": ad6.AnomalyShareholdersEquity,
			#
			"ad6.ShareholdersEquityBalanceGL_i": ad6.ShareholdersEquityBalanceGL_i,
			"ad6.ShareholdersEquityBalanceGL_ii": ad6.ShareholdersEquityBalanceGL_ii,
			"ad6.ShareholdersEquityBalanceGL_iii": ad6.ShareholdersEquityBalanceGL_iii,
			"ad6.AnomalyShareholdersEquitySEC": ad6.AnomalyShareholdersEquitySEC,
			"ad6.AnomalyLiabilitiesAndShareholdersEquity": ad6.AnomalyLiabilitiesAndShareholdersEquity,
			#
			#
			# Income Statements - Audit,
			#
			"ad6.Sales": ad6.Sales,
			"ad6.CostOfSales": ad6.CostOfSales,
			"ad6.GrossMargin": ad6.GrossMargin,
			"ad6.OperatingExpenses": ad6.OperatingExpenses,
			"ad6.OperatingIncome": ad6.OperatingIncome,
			"ad6.IncomeBeforeTaxes": ad6.IncomeBeforeTaxes,
			"ad6.NetIncome": ad6.NetIncome,
			"ad6.NetIncomeAttributableToNonControllingInterest": ad6.NetIncomeAttributableToNonControllingInterest,
			#
			"ad6.GrossMarginGL_i": ad6.GrossMarginGL_i,
			"ad6.GrossMarginGL_ii": ad6.GrossMarginGL_ii,
			"ad6.GrossMarginGL_iii": ad6.GrossMarginGL_iii,
			#
			"ad6.AnomalyGrossMargin": ad6.AnomalyGrossMargin,
			#
			"ad6.OperatingExpensesGL_i": ad6.OperatingExpensesGL_i,
			"ad6.OperatingExpensesGL_ii": ad6.OperatingExpensesGL_ii,
			"ad6.OperatingExpensesGL_iii": ad6.OperatingExpensesGL_iii,
			#
			"ad6.AnomalyOperatingExpenses": ad6.AnomalyOperatingExpenses,
			#
			"ad6.OperatingIncomeGL_i": ad6.OperatingIncomeGL_i,
			"ad6.OperatingIncomeGL_ii": ad6.OperatingIncomeGL_ii,
			"ad6.OperatingIncomeGL_iii": ad6.OperatingIncomeGL_iii,
			#
			"ad6.AnomalyOperatingIncome": ad6.AnomalyOperatingIncome,
			#
			"ad6.IncomeBeforeTaxesGL_i": ad6.IncomeBeforeTaxesGL_i,
			"ad6.IncomeBeforeTaxesGL_ii": ad6.IncomeBeforeTaxesGL_ii,
			"ad6.IncomeBeforeTaxesGL_iii": ad6.IncomeBeforeTaxesGL_iii,
			#
			"ad6.AnomalyIncomeBeforeTaxes": ad6.AnomalyIncomeBeforeTaxes,
			#
			"ad6.NetIncomeGL_i": ad6.NetIncomeGL_i,
			"ad6.NetIncomeGL_ii": ad6.NetIncomeGL_ii,
			"ad6.NetIncomeGL_iii": ad6.NetIncomeGL_iii,
			#
			"ad6.AnomalyNetIncome": ad6.AnomalyNetIncome,
			#
			#
			# Comprehensive Income - Audit,
			#
			"ad6.OtherComprehensiveIncome": ad6.OtherComprehensiveIncome,
			"ad6.ComprehensiveIncome": ad6.ComprehensiveIncome,
			#
			"ad6.OtherComprehensiveIncomeGL_i": ad6.OtherComprehensiveIncomeGL_i,
			"ad6.OtherComprehensiveIncomeGL_ii": ad6.OtherComprehensiveIncomeGL_ii,
			"ad6.OtherComprehensiveIncomeGL_iii": ad6.OtherComprehensiveIncomeGL_iii,
			"ad6.AnomalyOtherComprehensiveIncome": ad6.AnomalyOtherComprehensiveIncome,
			"ad6.AnomalyComprehensiveIncome": ad6.AnomalyComprehensiveIncome,
			#
			#
			# Shareholders Equity - Audit,
			#
			"ad6.ShareholdersEquityBeginning": ad6.ShareholdersEquityBeginning,
			#
			"ad6.ConvertibleDebt": ad6.ConvertibleDebt,
			"ad6.CommonShares": ad6.CommonShares,
			"ad6.PreferredShares": ad6.PreferredShares,
			"ad6.RetainedEarnings": ad6.RetainedEarnings,
			"ad6.AccumulatedOtherComprehensiveIncome": ad6.AccumulatedOtherComprehensiveIncome,
			"ad6.TreasuryShares": ad6.TreasuryShares,
			"ad6.EmployeeBenefitTrust": ad6.EmployeeBenefitTrust,
			"ad6.NonControllingInterests": ad6.NonControllingInterests,
			#
			"ad6.AnomalyConvertibleDebt": ad6.AnomalyConvertibleDebt,
			#
			"ad6.AnomalyCommonShares": ad6.AnomalyCommonShares,
			#
			"ad6.AnomalyPreferredShares": ad6.AnomalyPreferredShares,
			#
			"ad6.AnomalyRetainedEarnings": ad6.AnomalyRetainedEarnings,
			#
			"ad6.AnomalyAccumulatedOtherComprehensiveIncome": ad6.AnomalyAccumulatedOtherComprehensiveIncome,
			#
			"ad6.AnomalyTreasuryShares": ad6.AnomalyTreasuryShares,
			#
			"ad6.AnomalyEmployeeBenefitTrust": ad6.AnomalyEmployeeBenefitTrust,
			#
			"ad6.AnomalyNonControllingInterests": ad6.AnomalyNonControllingInterests,
			#
			"ad6.ShareholdersEquityGL_i": ad6.ShareholdersEquityGL_i,
			"ad6.ShareholdersEquityGL_ii": ad6.ShareholdersEquityGL_ii,
			"ad6.ShareholdersEquityGL_iii": ad6.ShareholdersEquityGL_iii,
			#
			#
			# Cash Flow - Audit,
			#
			"ad6.OperatingActivities": ad6.OperatingActivities,
			"ad6.InvestingActivities": ad6.InvestingActivities,
			"ad6.FinancingActivities": ad6.FinancingActivities,
			"ad6.IncreaseDecreaseInCash": ad6.IncreaseDecreaseInCash,
			#
			"ad6.CashFlowCashExplainedDifference": ad6.CashFlowCashExplainedDifference,
			#
			"ad6.OperatingActivitiesGL_i": ad6.OperatingActivitiesGL_i,
			"ad6.OperatingActivitiesGL_ii": ad6.OperatingActivitiesGL_ii,
			"ad6.OperatingActivitiesGL_iii": ad6.OperatingActivitiesGL_iii,
			"ad6.AnomalyOperatingActivities": ad6.AnomalyOperatingActivities,
			"ad6.AnomalyOperatingActivitiesSEC": ad6.AnomalyOperatingActivitiesSEC,
			#
			"ad6.InvestingActivitiesGL_i": ad6.InvestingActivitiesGL_i,
			"ad6.InvestingActivitiesGL_ii": ad6.InvestingActivitiesGL_ii,
			"ad6.InvestingActivitiesGL_iii": ad6.InvestingActivitiesGL_iii,
			"ad6.AnomalyInvestingActivities": ad6.AnomalyInvestingActivities,
			"ad6.AnomalyInvestingActivitiesSEC": ad6.AnomalyInvestingActivitiesSEC,
			#
			"ad6.FinancingActivitiesGL_i": ad6.FinancingActivitiesGL_i,
			"ad6.FinancingActivitiesGL_ii": ad6.FinancingActivitiesGL_ii,
			"ad6.FinancingActivitiesGL_iii": ad6.FinancingActivitiesGL_iii,
			"ad6.AnomalyFinancingActivities": ad6.AnomalyFinancingActivities,
			"ad6.AnomalyFinancingActivitiesSEC": ad6.AnomalyFinancingActivitiesSEC,
			#
			#
			# Supplemental - Audit,
			#
			"ad6.TargetWorkingCapital": ad6.TargetWorkingCapital,
			"ad6.ReinvestmentOfMaintenance": ad6.ReinvestmentOfMaintenance,
			"ad6.NormalizedDividendPaymentToNonControllingInterests": ad6.NormalizedDividendPaymentToNonControllingInterests,
			"ad6.NormalizedDividendPaymentToPreferredShareholders": ad6.NormalizedDividendPaymentToPreferredShareholders,
			"ad6.TheoricalInterestRate": ad6.TheoricalInterestRate,
			"ad6.TheoricalTaxRate": ad6.TheoricalTaxRate,
			"ad6.CapitalizationRateFloor": ad6.CapitalizationRateFloor,
			#
			# cashfow
			#
			#
			# CASH FLOW 1
			#
			#,
			#
			"cf1.AccessionNumber": cf1.AccessionNumber,
			"cf1.AmendmentFlag": cf1.AmendmentFlag,
			"cf1.EntityRegistrantName": cf1.EntityRegistrantName,
			"cf1.Period": cf1.Period,
			"cf1.PeriodEndDate": cf1.PeriodEndDate,
			"cf1.TradingSymbol": cf1.TradingSymbol,
			#
			# Cash - Cash Flow,
			#
			"cf1.CashBeginningBalance": cf1.CashBeginningBalance,
			"cf1.EffectOfExchangeRateOnCash": cf1.EffectOfExchangeRateOnCash,
			#
			# Operating Activities - Cash Flow,
			#
			"cf1.DepreciationDepletionAndAmortization": cf1.DepreciationDepletionAndAmortization,
			"cf1.GainRelatedToDisposalOrSale": cf1.GainRelatedToDisposalOrSale,
			"cf1.RestructuringAndOtherSpecialCharges": cf1.RestructuringAndOtherSpecialCharges,
			"cf1.AccruedEmployeeCompensation": cf1.AccruedEmployeeCompensation,
			"cf1.ShareBasedCompensation": cf1.ShareBasedCompensation,
			"cf1.IncreaseDecreaseInIncomeTaxExpenseBenefit": cf1.IncreaseDecreaseInIncomeTaxExpenseBenefit,
			"cf1.OtherNonCashIncomeExpense": cf1.OtherNonCashIncomeExpense,
			"cf1.IncreaseDecreaseInAccountsReceivable": cf1.IncreaseDecreaseInAccountsReceivable,
			"cf1.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets": cf1.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets,
			"cf1.IncreaseDecreaseInInventories": cf1.IncreaseDecreaseInInventories,
			"cf1.IncreaseDecreaseInOtherReceivables": cf1.IncreaseDecreaseInOtherReceivables,
			"cf1.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities": cf1.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities,
			"cf1.IncreaseDecreaseInContractWithCustomerLiability": cf1.IncreaseDecreaseInContractWithCustomerLiability,
			"cf1.IncreaseDecreaseInRetirementBenefits": cf1.IncreaseDecreaseInRetirementBenefits,
			"cf1.IncreaseDecreaseFinanceLeaseCurrent": cf1.IncreaseDecreaseFinanceLeaseCurrent,
			"cf1.IncreaseDecreaseOperatingLeaseCurrent": cf1.IncreaseDecreaseOperatingLeaseCurrent,
			"cf1.IncreaseDecreaseInFairValueOfDerivativesOperating": cf1.IncreaseDecreaseInFairValueOfDerivativesOperating,
			"cf1.IncreaseDecreaseInOtherOperatingActivities": cf1.IncreaseDecreaseInOtherOperatingActivities,
			#
			# Investing Activities - Cash Flow,
			#
			"cf1.PaymentsToAcquireInvestments": cf1.PaymentsToAcquireInvestments,
			"cf1.ProceedsOfInvestments": cf1.ProceedsOfInvestments,
			"cf1.PaymentsToAcquirePropertyPlantAndEquipment": cf1.PaymentsToAcquirePropertyPlantAndEquipment,
			"cf1.ProceedsFromDisposalsOfPropertyAndEquipment": cf1.ProceedsFromDisposalsOfPropertyAndEquipment,
			"cf1.PaymentsToAcquireBusinessesAndIntangibles": cf1.PaymentsToAcquireBusinessesAndIntangibles,
			"cf1.ProceedsFromDisposalsOfBusinessesAndIntangibles": cf1.ProceedsFromDisposalsOfBusinessesAndIntangibles,
			"cf1.ProceedsRelatedToInsuranceSettlement": cf1.ProceedsRelatedToInsuranceSettlement,
			"cf1.ReveiptOfGovernmentGrants": cf1.ReveiptOfGovernmentGrants,
			"cf1.PaymentOfLicenseFee": cf1.PaymentOfLicenseFee,
			"cf1.InvestingActivitiesInDiscontinuedOperations": cf1.InvestingActivitiesInDiscontinuedOperations,
			"cf1.OtherInvestingActivities": cf1.OtherInvestingActivities,
			#
			# Financing Activities - Cash Flow,
			#
			"cf1.FinanceLeasePrincipalPayments": cf1.FinanceLeasePrincipalPayments,
			"cf1.ProceedsFromIssuanceOfCommonShares": cf1.ProceedsFromIssuanceOfCommonShares,
			"cf1.ProceedsFromSharePurchasePlanAndOptionsExercice": cf1.ProceedsFromSharePurchasePlanAndOptionsExercice,
			"cf1.PaymentsRelatedToTaxWithholdingForShareBasedCompensation": cf1.PaymentsRelatedToTaxWithholdingForShareBasedCompensation,
			"cf1.PaymentsForRepurchaseOfCommonShares": cf1.PaymentsForRepurchaseOfCommonShares,
			"cf1.PaymentsOfDividends": cf1.PaymentsOfDividends,
			"cf1.IncreaseDecreaseDeferredContingentConsideration": cf1.IncreaseDecreaseDeferredContingentConsideration,
			"cf1.ProceedsFromIssuanceOfLongTermDebt": cf1.ProceedsFromIssuanceOfLongTermDebt,
			"cf1.RepaymentsOfLongTermDebt": cf1.RepaymentsOfLongTermDebt,
			"cf1.FinancingCosts": cf1.FinancingCosts,
			"cf1.NetChangeInShortTermBorrowings": cf1.NetChangeInShortTermBorrowings,
			"cf1.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities": cf1.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities,
			"cf1.NetChangeInNonControllingInterests": cf1.NetChangeInNonControllingInterests,
			"cf1.ProceedsFromRepaymentsOfCommercialPaper": cf1.ProceedsFromRepaymentsOfCommercialPaper,
			"cf1.RepaymentsOfConvertible": cf1.RepaymentsOfConvertible,
			"cf1.IssuanceOfConvertible": cf1.IssuanceOfConvertible,
			"cf1.EquityInvesteeAdvancesRepayments": cf1.EquityInvesteeAdvancesRepayments,
			"cf1.OtherFinancingActivities": cf1.OtherFinancingActivities,
			#
			# Supplemental - Cash Flow,
			#
			"cf1.CashPaidForTaxes": cf1.CashPaidForTaxes,
			"cf1.CashPaidForInterest": cf1.CashPaidForInterest,
			#
			#
			# CASH FLOW 2
			#,
			#
			"cf2.AccessionNumber": cf2.AccessionNumber,
			"cf2.AmendmentFlag": cf2.AmendmentFlag,
			"cf2.EntityRegistrantName": cf2.EntityRegistrantName,
			"cf2.Period": cf2.Period,
			"cf2.PeriodEndDate": cf2.PeriodEndDate,
			"cf2.TradingSymbol": cf2.TradingSymbol,
			#
			# Cash - Cash Flow,
			#
			"cf2.CashBeginningBalance": cf2.CashBeginningBalance,
			"cf2.EffectOfExchangeRateOnCash": cf2.EffectOfExchangeRateOnCash,
			#
			# Operating Activities - Cash Flow,
			#
			"cf2.DepreciationDepletionAndAmortization": cf2.DepreciationDepletionAndAmortization,
			"cf2.GainRelatedToDisposalOrSale": cf2.GainRelatedToDisposalOrSale,
			"cf2.RestructuringAndOtherSpecialCharges": cf2.RestructuringAndOtherSpecialCharges,
			"cf2.AccruedEmployeeCompensation": cf2.AccruedEmployeeCompensation,
			"cf2.ShareBasedCompensation": cf2.ShareBasedCompensation,
			"cf2.IncreaseDecreaseInIncomeTaxExpenseBenefit": cf2.IncreaseDecreaseInIncomeTaxExpenseBenefit,
			"cf2.OtherNonCashIncomeExpense": cf2.OtherNonCashIncomeExpense,
			"cf2.IncreaseDecreaseInAccountsReceivable": cf2.IncreaseDecreaseInAccountsReceivable,
			"cf2.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets": cf2.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets,
			"cf2.IncreaseDecreaseInInventories": cf2.IncreaseDecreaseInInventories,
			"cf2.IncreaseDecreaseInOtherReceivables": cf2.IncreaseDecreaseInOtherReceivables,
			"cf2.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities": cf2.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities,
			"cf2.IncreaseDecreaseInContractWithCustomerLiability": cf2.IncreaseDecreaseInContractWithCustomerLiability,
			"cf2.IncreaseDecreaseInRetirementBenefits": cf2.IncreaseDecreaseInRetirementBenefits,
			"cf2.IncreaseDecreaseFinanceLeaseCurrent": cf2.IncreaseDecreaseFinanceLeaseCurrent,
			"cf2.IncreaseDecreaseOperatingLeaseCurrent": cf2.IncreaseDecreaseOperatingLeaseCurrent,
			"cf2.IncreaseDecreaseInFairValueOfDerivativesOperating": cf2.IncreaseDecreaseInFairValueOfDerivativesOperating,
			"cf2.IncreaseDecreaseInOtherOperatingActivities": cf2.IncreaseDecreaseInOtherOperatingActivities,
			#
			# Investing Activities - Cash Flow,
			#
			"cf2.PaymentsToAcquireInvestments": cf2.PaymentsToAcquireInvestments,
			"cf2.ProceedsOfInvestments": cf2.ProceedsOfInvestments,
			"cf2.PaymentsToAcquirePropertyPlantAndEquipment": cf2.PaymentsToAcquirePropertyPlantAndEquipment,
			"cf2.ProceedsFromDisposalsOfPropertyAndEquipment": cf2.ProceedsFromDisposalsOfPropertyAndEquipment,
			"cf2.PaymentsToAcquireBusinessesAndIntangibles": cf2.PaymentsToAcquireBusinessesAndIntangibles,
			"cf2.ProceedsFromDisposalsOfBusinessesAndIntangibles": cf2.ProceedsFromDisposalsOfBusinessesAndIntangibles,
			"cf2.ProceedsRelatedToInsuranceSettlement": cf2.ProceedsRelatedToInsuranceSettlement,
			"cf2.ReveiptOfGovernmentGrants": cf2.ReveiptOfGovernmentGrants,
			"cf2.PaymentOfLicenseFee": cf2.PaymentOfLicenseFee,
			"cf2.InvestingActivitiesInDiscontinuedOperations": cf2.InvestingActivitiesInDiscontinuedOperations,
			"cf2.OtherInvestingActivities": cf2.OtherInvestingActivities,
			#
			# Financing Activities - Cash Flow,
			#
			"cf2.FinanceLeasePrincipalPayments": cf2.FinanceLeasePrincipalPayments,
			"cf2.ProceedsFromIssuanceOfCommonShares": cf2.ProceedsFromIssuanceOfCommonShares,
			"cf2.ProceedsFromSharePurchasePlanAndOptionsExercice": cf2.ProceedsFromSharePurchasePlanAndOptionsExercice,
			"cf2.PaymentsRelatedToTaxWithholdingForShareBasedCompensation": cf2.PaymentsRelatedToTaxWithholdingForShareBasedCompensation,
			"cf2.PaymentsForRepurchaseOfCommonShares": cf2.PaymentsForRepurchaseOfCommonShares,
			"cf2.PaymentsOfDividends": cf2.PaymentsOfDividends,
			"cf2.IncreaseDecreaseDeferredContingentConsideration": cf2.IncreaseDecreaseDeferredContingentConsideration,
			"cf2.ProceedsFromIssuanceOfLongTermDebt": cf2.ProceedsFromIssuanceOfLongTermDebt,
			"cf2.RepaymentsOfLongTermDebt": cf2.RepaymentsOfLongTermDebt,
			"cf2.FinancingCosts": cf2.FinancingCosts,
			"cf2.NetChangeInShortTermBorrowings": cf2.NetChangeInShortTermBorrowings,
			"cf2.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities": cf2.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities,
			"cf2.NetChangeInNonControllingInterests": cf2.NetChangeInNonControllingInterests,
			"cf2.ProceedsFromRepaymentsOfCommercialPaper": cf2.ProceedsFromRepaymentsOfCommercialPaper,
			"cf2.RepaymentsOfConvertible": cf2.RepaymentsOfConvertible,
			"cf2.IssuanceOfConvertible": cf2.IssuanceOfConvertible,
			"cf2.EquityInvesteeAdvancesRepayments": cf2.EquityInvesteeAdvancesRepayments,
			"cf2.OtherFinancingActivities": cf2.OtherFinancingActivities,
			#
			# Supplemental - Cash Flow,
			#
			"cf2.CashPaidForTaxes": cf2.CashPaidForTaxes,
			"cf2.CashPaidForInterest": cf2.CashPaidForInterest,
			#
			#
			# CASH FLOW 3
			#,
			#
			"cf3.AccessionNumber": cf3.AccessionNumber,
			"cf3.AmendmentFlag": cf3.AmendmentFlag,
			"cf3.EntityRegistrantName": cf3.EntityRegistrantName,
			"cf3.Period": cf3.Period,
			"cf3.PeriodEndDate": cf3.PeriodEndDate,
			"cf3.TradingSymbol": cf3.TradingSymbol,
			#
			# Cash - Cash Flow,
			#
			"cf3.CashBeginningBalance": cf3.CashBeginningBalance,
			"cf3.EffectOfExchangeRateOnCash": cf3.EffectOfExchangeRateOnCash,
			#
			# Operating Activities - Cash Flow,
			#
			"cf3.DepreciationDepletionAndAmortization": cf3.DepreciationDepletionAndAmortization,
			"cf3.GainRelatedToDisposalOrSale": cf3.GainRelatedToDisposalOrSale,
			"cf3.RestructuringAndOtherSpecialCharges": cf3.RestructuringAndOtherSpecialCharges,
			"cf3.AccruedEmployeeCompensation": cf3.AccruedEmployeeCompensation,
			"cf3.ShareBasedCompensation": cf3.ShareBasedCompensation,
			"cf3.IncreaseDecreaseInIncomeTaxExpenseBenefit": cf3.IncreaseDecreaseInIncomeTaxExpenseBenefit,
			"cf3.OtherNonCashIncomeExpense": cf3.OtherNonCashIncomeExpense,
			"cf3.IncreaseDecreaseInAccountsReceivable": cf3.IncreaseDecreaseInAccountsReceivable,
			"cf3.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets": cf3.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets,
			"cf3.IncreaseDecreaseInInventories": cf3.IncreaseDecreaseInInventories,
			"cf3.IncreaseDecreaseInOtherReceivables": cf3.IncreaseDecreaseInOtherReceivables,
			"cf3.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities": cf3.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities,
			"cf3.IncreaseDecreaseInContractWithCustomerLiability": cf3.IncreaseDecreaseInContractWithCustomerLiability,
			"cf3.IncreaseDecreaseInRetirementBenefits": cf3.IncreaseDecreaseInRetirementBenefits,
			"cf3.IncreaseDecreaseFinanceLeaseCurrent": cf3.IncreaseDecreaseFinanceLeaseCurrent,
			"cf3.IncreaseDecreaseOperatingLeaseCurrent": cf3.IncreaseDecreaseOperatingLeaseCurrent,
			"cf3.IncreaseDecreaseInFairValueOfDerivativesOperating": cf3.IncreaseDecreaseInFairValueOfDerivativesOperating,
			"cf3.IncreaseDecreaseInOtherOperatingActivities": cf3.IncreaseDecreaseInOtherOperatingActivities,
			#
			# Investing Activities - Cash Flow,
			#
			"cf3.PaymentsToAcquireInvestments": cf3.PaymentsToAcquireInvestments,
			"cf3.ProceedsOfInvestments": cf3.ProceedsOfInvestments,
			"cf3.PaymentsToAcquirePropertyPlantAndEquipment": cf3.PaymentsToAcquirePropertyPlantAndEquipment,
			"cf3.ProceedsFromDisposalsOfPropertyAndEquipment": cf3.ProceedsFromDisposalsOfPropertyAndEquipment,
			"cf3.PaymentsToAcquireBusinessesAndIntangibles": cf3.PaymentsToAcquireBusinessesAndIntangibles,
			"cf3.ProceedsFromDisposalsOfBusinessesAndIntangibles": cf3.ProceedsFromDisposalsOfBusinessesAndIntangibles,
			"cf3.ProceedsRelatedToInsuranceSettlement": cf3.ProceedsRelatedToInsuranceSettlement,
			"cf3.ReveiptOfGovernmentGrants": cf3.ReveiptOfGovernmentGrants,
			"cf3.PaymentOfLicenseFee": cf3.PaymentOfLicenseFee,
			"cf3.InvestingActivitiesInDiscontinuedOperations": cf3.InvestingActivitiesInDiscontinuedOperations,
			"cf3.OtherInvestingActivities": cf3.OtherInvestingActivities,
			#
			# Financing Activities - Cash Flow,
			#
			"cf3.FinanceLeasePrincipalPayments": cf3.FinanceLeasePrincipalPayments,
			"cf3.ProceedsFromIssuanceOfCommonShares": cf3.ProceedsFromIssuanceOfCommonShares,
			"cf3.ProceedsFromSharePurchasePlanAndOptionsExercice": cf3.ProceedsFromSharePurchasePlanAndOptionsExercice,
			"cf3.PaymentsRelatedToTaxWithholdingForShareBasedCompensation": cf3.PaymentsRelatedToTaxWithholdingForShareBasedCompensation,
			"cf3.PaymentsForRepurchaseOfCommonShares": cf3.PaymentsForRepurchaseOfCommonShares,
			"cf3.PaymentsOfDividends": cf3.PaymentsOfDividends,
			"cf3.IncreaseDecreaseDeferredContingentConsideration": cf3.IncreaseDecreaseDeferredContingentConsideration,
			"cf3.ProceedsFromIssuanceOfLongTermDebt": cf3.ProceedsFromIssuanceOfLongTermDebt,
			"cf3.RepaymentsOfLongTermDebt": cf3.RepaymentsOfLongTermDebt,
			"cf3.FinancingCosts": cf3.FinancingCosts,
			"cf3.NetChangeInShortTermBorrowings": cf3.NetChangeInShortTermBorrowings,
			"cf3.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities": cf3.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities,
			"cf3.NetChangeInNonControllingInterests": cf3.NetChangeInNonControllingInterests,
			"cf3.ProceedsFromRepaymentsOfCommercialPaper": cf3.ProceedsFromRepaymentsOfCommercialPaper,
			"cf3.RepaymentsOfConvertible": cf3.RepaymentsOfConvertible,
			"cf3.IssuanceOfConvertible": cf3.IssuanceOfConvertible,
			"cf3.EquityInvesteeAdvancesRepayments": cf3.EquityInvesteeAdvancesRepayments,
			"cf3.OtherFinancingActivities": cf3.OtherFinancingActivities,
			#
			# Supplemental - Cash Flow,
			#
			"cf3.CashPaidForTaxes": cf3.CashPaidForTaxes,
			"cf3.CashPaidForInterest": cf3.CashPaidForInterest,
			#
			#
			# CASH FLOW 4
			#,
			#
			"cf4.AccessionNumber": cf4.AccessionNumber,
			"cf4.AmendmentFlag": cf4.AmendmentFlag,
			"cf4.EntityRegistrantName": cf4.EntityRegistrantName,
			"cf4.Period": cf4.Period,
			"cf4.PeriodEndDate": cf4.PeriodEndDate,
			"cf4.TradingSymbol": cf4.TradingSymbol,
			#
			# Cash - Cash Flow,
			#
			"cf4.CashBeginningBalance": cf4.CashBeginningBalance,
			"cf4.EffectOfExchangeRateOnCash": cf4.EffectOfExchangeRateOnCash,
			#
			# Operating Activities - Cash Flow,
			#
			"cf4.DepreciationDepletionAndAmortization": cf4.DepreciationDepletionAndAmortization,
			"cf4.GainRelatedToDisposalOrSale": cf4.GainRelatedToDisposalOrSale,
			"cf4.RestructuringAndOtherSpecialCharges": cf4.RestructuringAndOtherSpecialCharges,
			"cf4.AccruedEmployeeCompensation": cf4.AccruedEmployeeCompensation,
			"cf4.ShareBasedCompensation": cf4.ShareBasedCompensation,
			"cf4.IncreaseDecreaseInIncomeTaxExpenseBenefit": cf4.IncreaseDecreaseInIncomeTaxExpenseBenefit,
			"cf4.OtherNonCashIncomeExpense": cf4.OtherNonCashIncomeExpense,
			"cf4.IncreaseDecreaseInAccountsReceivable": cf4.IncreaseDecreaseInAccountsReceivable,
			"cf4.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets": cf4.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets,
			"cf4.IncreaseDecreaseInInventories": cf4.IncreaseDecreaseInInventories,
			"cf4.IncreaseDecreaseInOtherReceivables": cf4.IncreaseDecreaseInOtherReceivables,
			"cf4.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities": cf4.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities,
			"cf4.IncreaseDecreaseInContractWithCustomerLiability": cf4.IncreaseDecreaseInContractWithCustomerLiability,
			"cf4.IncreaseDecreaseInRetirementBenefits": cf4.IncreaseDecreaseInRetirementBenefits,
			"cf4.IncreaseDecreaseFinanceLeaseCurrent": cf4.IncreaseDecreaseFinanceLeaseCurrent,
			"cf4.IncreaseDecreaseOperatingLeaseCurrent": cf4.IncreaseDecreaseOperatingLeaseCurrent,
			"cf4.IncreaseDecreaseInFairValueOfDerivativesOperating": cf4.IncreaseDecreaseInFairValueOfDerivativesOperating,
			"cf4.IncreaseDecreaseInOtherOperatingActivities": cf4.IncreaseDecreaseInOtherOperatingActivities,
			#
			# Investing Activities - Cash Flow,
			#
			"cf4.PaymentsToAcquireInvestments": cf4.PaymentsToAcquireInvestments,
			"cf4.ProceedsOfInvestments": cf4.ProceedsOfInvestments,
			"cf4.PaymentsToAcquirePropertyPlantAndEquipment": cf4.PaymentsToAcquirePropertyPlantAndEquipment,
			"cf4.ProceedsFromDisposalsOfPropertyAndEquipment": cf4.ProceedsFromDisposalsOfPropertyAndEquipment,
			"cf4.PaymentsToAcquireBusinessesAndIntangibles": cf4.PaymentsToAcquireBusinessesAndIntangibles,
			"cf4.ProceedsFromDisposalsOfBusinessesAndIntangibles": cf4.ProceedsFromDisposalsOfBusinessesAndIntangibles,
			"cf4.ProceedsRelatedToInsuranceSettlement": cf4.ProceedsRelatedToInsuranceSettlement,
			"cf4.ReveiptOfGovernmentGrants": cf4.ReveiptOfGovernmentGrants,
			"cf4.PaymentOfLicenseFee": cf4.PaymentOfLicenseFee,
			"cf4.InvestingActivitiesInDiscontinuedOperations": cf4.InvestingActivitiesInDiscontinuedOperations,
			"cf4.OtherInvestingActivities": cf4.OtherInvestingActivities,
			#
			# Financing Activities - Cash Flow,
			#
			"cf4.FinanceLeasePrincipalPayments": cf4.FinanceLeasePrincipalPayments,
			"cf4.ProceedsFromIssuanceOfCommonShares": cf4.ProceedsFromIssuanceOfCommonShares,
			"cf4.ProceedsFromSharePurchasePlanAndOptionsExercice": cf4.ProceedsFromSharePurchasePlanAndOptionsExercice,
			"cf4.PaymentsRelatedToTaxWithholdingForShareBasedCompensation": cf4.PaymentsRelatedToTaxWithholdingForShareBasedCompensation,
			"cf4.PaymentsForRepurchaseOfCommonShares": cf4.PaymentsForRepurchaseOfCommonShares,
			"cf4.PaymentsOfDividends": cf4.PaymentsOfDividends,
			"cf4.IncreaseDecreaseDeferredContingentConsideration": cf4.IncreaseDecreaseDeferredContingentConsideration,
			"cf4.ProceedsFromIssuanceOfLongTermDebt": cf4.ProceedsFromIssuanceOfLongTermDebt,
			"cf4.RepaymentsOfLongTermDebt": cf4.RepaymentsOfLongTermDebt,
			"cf4.FinancingCosts": cf4.FinancingCosts,
			"cf4.NetChangeInShortTermBorrowings": cf4.NetChangeInShortTermBorrowings,
			"cf4.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities": cf4.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities,
			"cf4.NetChangeInNonControllingInterests": cf4.NetChangeInNonControllingInterests,
			"cf4.ProceedsFromRepaymentsOfCommercialPaper": cf4.ProceedsFromRepaymentsOfCommercialPaper,
			"cf4.RepaymentsOfConvertible": cf4.RepaymentsOfConvertible,
			"cf4.IssuanceOfConvertible": cf4.IssuanceOfConvertible,
			"cf4.EquityInvesteeAdvancesRepayments": cf4.EquityInvesteeAdvancesRepayments,
			"cf4.OtherFinancingActivities": cf4.OtherFinancingActivities,
			#
			# Supplemental - Cash Flow,
			#
			"cf4.CashPaidForTaxes": cf4.CashPaidForTaxes,
			"cf4.CashPaidForInterest": cf4.CashPaidForInterest,
			#
			#
			# CASH FLOW 5
			#,
			#
			"cf5.AccessionNumber": cf5.AccessionNumber,
			"cf5.AmendmentFlag": cf5.AmendmentFlag,
			"cf5.EntityRegistrantName": cf5.EntityRegistrantName,
			"cf5.Period": cf5.Period,
			"cf5.PeriodEndDate": cf5.PeriodEndDate,
			"cf5.TradingSymbol": cf5.TradingSymbol,
			#
			# Cash - Cash Flow,
			#
			"cf5.CashBeginningBalance": cf5.CashBeginningBalance,
			"cf5.EffectOfExchangeRateOnCash": cf5.EffectOfExchangeRateOnCash,
			#
			# Operating Activities - Cash Flow,
			#
			"cf5.DepreciationDepletionAndAmortization": cf5.DepreciationDepletionAndAmortization,
			"cf5.GainRelatedToDisposalOrSale": cf5.GainRelatedToDisposalOrSale,
			"cf5.RestructuringAndOtherSpecialCharges": cf5.RestructuringAndOtherSpecialCharges,
			"cf5.AccruedEmployeeCompensation": cf5.AccruedEmployeeCompensation,
			"cf5.ShareBasedCompensation": cf5.ShareBasedCompensation,
			"cf5.IncreaseDecreaseInIncomeTaxExpenseBenefit": cf5.IncreaseDecreaseInIncomeTaxExpenseBenefit,
			"cf5.OtherNonCashIncomeExpense": cf5.OtherNonCashIncomeExpense,
			"cf5.IncreaseDecreaseInAccountsReceivable": cf5.IncreaseDecreaseInAccountsReceivable,
			"cf5.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets": cf5.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets,
			"cf5.IncreaseDecreaseInInventories": cf5.IncreaseDecreaseInInventories,
			"cf5.IncreaseDecreaseInOtherReceivables": cf5.IncreaseDecreaseInOtherReceivables,
			"cf5.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities": cf5.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities,
			"cf5.IncreaseDecreaseInContractWithCustomerLiability": cf5.IncreaseDecreaseInContractWithCustomerLiability,
			"cf5.IncreaseDecreaseInRetirementBenefits": cf5.IncreaseDecreaseInRetirementBenefits,
			"cf5.IncreaseDecreaseFinanceLeaseCurrent": cf5.IncreaseDecreaseFinanceLeaseCurrent,
			"cf5.IncreaseDecreaseOperatingLeaseCurrent": cf5.IncreaseDecreaseOperatingLeaseCurrent,
			"cf5.IncreaseDecreaseInFairValueOfDerivativesOperating": cf5.IncreaseDecreaseInFairValueOfDerivativesOperating,
			"cf5.IncreaseDecreaseInOtherOperatingActivities": cf5.IncreaseDecreaseInOtherOperatingActivities,
			#
			# Investing Activities - Cash Flow,
			#
			"cf5.PaymentsToAcquireInvestments": cf5.PaymentsToAcquireInvestments,
			"cf5.ProceedsOfInvestments": cf5.ProceedsOfInvestments,
			"cf5.PaymentsToAcquirePropertyPlantAndEquipment": cf5.PaymentsToAcquirePropertyPlantAndEquipment,
			"cf5.ProceedsFromDisposalsOfPropertyAndEquipment": cf5.ProceedsFromDisposalsOfPropertyAndEquipment,
			"cf5.PaymentsToAcquireBusinessesAndIntangibles": cf5.PaymentsToAcquireBusinessesAndIntangibles,
			"cf5.ProceedsFromDisposalsOfBusinessesAndIntangibles": cf5.ProceedsFromDisposalsOfBusinessesAndIntangibles,
			"cf5.ProceedsRelatedToInsuranceSettlement": cf5.ProceedsRelatedToInsuranceSettlement,
			"cf5.ReveiptOfGovernmentGrants": cf5.ReveiptOfGovernmentGrants,
			"cf5.PaymentOfLicenseFee": cf5.PaymentOfLicenseFee,
			"cf5.InvestingActivitiesInDiscontinuedOperations": cf5.InvestingActivitiesInDiscontinuedOperations,
			"cf5.OtherInvestingActivities": cf5.OtherInvestingActivities,
			#
			# Financing Activities - Cash Flow,
			#
			"cf5.FinanceLeasePrincipalPayments": cf5.FinanceLeasePrincipalPayments,
			"cf5.ProceedsFromIssuanceOfCommonShares": cf5.ProceedsFromIssuanceOfCommonShares,
			"cf5.ProceedsFromSharePurchasePlanAndOptionsExercice": cf5.ProceedsFromSharePurchasePlanAndOptionsExercice,
			"cf5.PaymentsRelatedToTaxWithholdingForShareBasedCompensation": cf5.PaymentsRelatedToTaxWithholdingForShareBasedCompensation,
			"cf5.PaymentsForRepurchaseOfCommonShares": cf5.PaymentsForRepurchaseOfCommonShares,
			"cf5.PaymentsOfDividends": cf5.PaymentsOfDividends,
			"cf5.IncreaseDecreaseDeferredContingentConsideration": cf5.IncreaseDecreaseDeferredContingentConsideration,
			"cf5.ProceedsFromIssuanceOfLongTermDebt": cf5.ProceedsFromIssuanceOfLongTermDebt,
			"cf5.RepaymentsOfLongTermDebt": cf5.RepaymentsOfLongTermDebt,
			"cf5.FinancingCosts": cf5.FinancingCosts,
			"cf5.NetChangeInShortTermBorrowings": cf5.NetChangeInShortTermBorrowings,
			"cf5.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities": cf5.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities,
			"cf5.NetChangeInNonControllingInterests": cf5.NetChangeInNonControllingInterests,
			"cf5.ProceedsFromRepaymentsOfCommercialPaper": cf5.ProceedsFromRepaymentsOfCommercialPaper,
			"cf5.RepaymentsOfConvertible": cf5.RepaymentsOfConvertible,
			"cf5.IssuanceOfConvertible": cf5.IssuanceOfConvertible,
			"cf5.EquityInvesteeAdvancesRepayments": cf5.EquityInvesteeAdvancesRepayments,
			"cf5.OtherFinancingActivities": cf5.OtherFinancingActivities,
			#
			# Supplemental - Cash Flow,
			#
			"cf5.CashPaidForTaxes": cf5.CashPaidForTaxes,
			"cf5.CashPaidForInterest": cf5.CashPaidForInterest,
			#
			#
			# CASH FLOW 6,
			#
			"cf6.AccessionNumber": cf6.AccessionNumber,
			"cf6.AmendmentFlag": cf6.AmendmentFlag,
			"cf6.EntityRegistrantName": cf6.EntityRegistrantName,
			"cf6.Period": cf6.Period,
			"cf6.PeriodEndDate": cf6.PeriodEndDate,
			"cf6.TradingSymbol": cf6.TradingSymbol,
			#
			# Cash - Cash Flow,
			#
			"cf6.CashBeginningBalance": cf6.CashBeginningBalance,
			"cf6.EffectOfExchangeRateOnCash": cf6.EffectOfExchangeRateOnCash,
			#
			# Operating Activities - Cash Flow,
			#
			"cf6.DepreciationDepletionAndAmortization": cf6.DepreciationDepletionAndAmortization,
			"cf6.GainRelatedToDisposalOrSale": cf6.GainRelatedToDisposalOrSale,
			"cf6.RestructuringAndOtherSpecialCharges": cf6.RestructuringAndOtherSpecialCharges,
			"cf6.AccruedEmployeeCompensation": cf6.AccruedEmployeeCompensation,
			"cf6.ShareBasedCompensation": cf6.ShareBasedCompensation,
			"cf6.IncreaseDecreaseInIncomeTaxExpenseBenefit": cf6.IncreaseDecreaseInIncomeTaxExpenseBenefit,
			"cf6.OtherNonCashIncomeExpense": cf6.OtherNonCashIncomeExpense,
			"cf6.IncreaseDecreaseInAccountsReceivable": cf6.IncreaseDecreaseInAccountsReceivable,
			"cf6.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets": cf6.IncreaseDecreaseInPrepaidDeferredExpenseAndOtherAssets,
			"cf6.IncreaseDecreaseInInventories": cf6.IncreaseDecreaseInInventories,
			"cf6.IncreaseDecreaseInOtherReceivables": cf6.IncreaseDecreaseInOtherReceivables,
			"cf6.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities": cf6.IncreaseDecreaseInAccountsPayableAndAccruedLiabilities,
			"cf6.IncreaseDecreaseInContractWithCustomerLiability": cf6.IncreaseDecreaseInContractWithCustomerLiability,
			"cf6.IncreaseDecreaseInRetirementBenefits": cf6.IncreaseDecreaseInRetirementBenefits,
			"cf6.IncreaseDecreaseFinanceLeaseCurrent": cf6.IncreaseDecreaseFinanceLeaseCurrent,
			"cf6.IncreaseDecreaseOperatingLeaseCurrent": cf6.IncreaseDecreaseOperatingLeaseCurrent,
			"cf6.IncreaseDecreaseInFairValueOfDerivativesOperating": cf6.IncreaseDecreaseInFairValueOfDerivativesOperating,
			"cf6.IncreaseDecreaseInOtherOperatingActivities": cf6.IncreaseDecreaseInOtherOperatingActivities,
			#
			# Investing Activities - Cash Flow,
			#
			"cf6.PaymentsToAcquireInvestments": cf6.PaymentsToAcquireInvestments,
			"cf6.ProceedsOfInvestments": cf6.ProceedsOfInvestments,
			"cf6.PaymentsToAcquirePropertyPlantAndEquipment": cf6.PaymentsToAcquirePropertyPlantAndEquipment,
			"cf6.ProceedsFromDisposalsOfPropertyAndEquipment": cf6.ProceedsFromDisposalsOfPropertyAndEquipment,
			"cf6.PaymentsToAcquireBusinessesAndIntangibles": cf6.PaymentsToAcquireBusinessesAndIntangibles,
			"cf6.ProceedsFromDisposalsOfBusinessesAndIntangibles": cf6.ProceedsFromDisposalsOfBusinessesAndIntangibles,
			"cf6.ProceedsRelatedToInsuranceSettlement": cf6.ProceedsRelatedToInsuranceSettlement,
			"cf6.ReveiptOfGovernmentGrants": cf6.ReveiptOfGovernmentGrants,
			"cf6.PaymentOfLicenseFee": cf6.PaymentOfLicenseFee,
			"cf6.InvestingActivitiesInDiscontinuedOperations": cf6.InvestingActivitiesInDiscontinuedOperations,
			"cf6.OtherInvestingActivities": cf6.OtherInvestingActivities,
			#
			# Financing Activities - Cash Flow,
			#
			"cf6.FinanceLeasePrincipalPayments": cf6.FinanceLeasePrincipalPayments,
			"cf6.ProceedsFromIssuanceOfCommonShares": cf6.ProceedsFromIssuanceOfCommonShares,
			"cf6.ProceedsFromSharePurchasePlanAndOptionsExercice": cf6.ProceedsFromSharePurchasePlanAndOptionsExercice,
			"cf6.PaymentsRelatedToTaxWithholdingForShareBasedCompensation": cf6.PaymentsRelatedToTaxWithholdingForShareBasedCompensation,
			"cf6.PaymentsForRepurchaseOfCommonShares": cf6.PaymentsForRepurchaseOfCommonShares,
			"cf6.PaymentsOfDividends": cf6.PaymentsOfDividends,
			"cf6.IncreaseDecreaseDeferredContingentConsideration": cf6.IncreaseDecreaseDeferredContingentConsideration,
			"cf6.ProceedsFromIssuanceOfLongTermDebt": cf6.ProceedsFromIssuanceOfLongTermDebt,
			"cf6.RepaymentsOfLongTermDebt": cf6.RepaymentsOfLongTermDebt,
			"cf6.FinancingCosts": cf6.FinancingCosts,
			"cf6.NetChangeInShortTermBorrowings": cf6.NetChangeInShortTermBorrowings,
			"cf6.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities": cf6.NetChangeInForwardAndHedgesClassifiedAsFinancingActivities,
			"cf6.NetChangeInNonControllingInterests": cf6.NetChangeInNonControllingInterests,
			"cf6.ProceedsFromRepaymentsOfCommercialPaper": cf6.ProceedsFromRepaymentsOfCommercialPaper,
			"cf6.RepaymentsOfConvertible": cf6.RepaymentsOfConvertible,
			"cf6.IssuanceOfConvertible": cf6.IssuanceOfConvertible,
			"cf6.EquityInvesteeAdvancesRepayments": cf6.EquityInvesteeAdvancesRepayments,
			"cf6.OtherFinancingActivities": cf6.OtherFinancingActivities,
			#
			# Supplemental - Cash Flow,
			#
			"cf6.CashPaidForTaxes": cf6.CashPaidForTaxes,
			"cf6.CashPaidForInterest": cf6.CashPaidForInterest,
			#
			#
			# trialbalances
			#
			#
			# TRIAL BALANCE 1
			#
			#
			# General - Trial Balance,
			#
			"tb1.AccessionNumber": tb1.AccessionNumber,
			"tb1.AmendmentFlag": tb1.AmendmentFlag,
			"tb1.EntityRegistrantName": tb1.EntityRegistrantName,
			"tb1.Link": tb1.Link,
			"tb1.Period": tb1.Period,
			"tb1.PeriodEndDate": tb1.PeriodEndDate,
			"tb1.PeriodOfReport": tb1.PeriodOfReport,
			"tb1.TradingSymbol": tb1.TradingSymbol,
			#
			#
			# Current Assets - Trial Balance,
			#
			"tb1.Cash": tb1.Cash,
			"tb1.ShortTermInvestments": tb1.ShortTermInvestments,
			"tb1.AccountsReceivable": tb1.AccountsReceivable,
			"tb1.WorkInProgress": tb1.WorkInProgress,
			"tb1.Inventories": tb1.Inventories,
			"tb1.PrepaidExpenses": tb1.PrepaidExpenses,
			"tb1.NonTradeReceivables": tb1.NonTradeReceivables,
			"tb1.PrepaidTaxAssetsCurrent": tb1.PrepaidTaxAssetsCurrent,
			"tb1.DeferredTaxAssetsCurrent": tb1.DeferredTaxAssetsCurrent,
			"tb1.RightOfUseAssetsCurrent": tb1.RightOfUseAssetsCurrent,
			"tb1.OtherCurrentAssets": tb1.OtherCurrentAssets,
			"tb1.DiscontinuedOperationsCurrent": tb1.DiscontinuedOperationsCurrent,
			#
			#
			# Non-Current Assets - Trial Balance,
			#
			"tb1.LongTermReceivables": tb1.LongTermReceivables,
			"tb1.DeferredCharges": tb1.DeferredCharges,
			"tb1.Investments": tb1.Investments,
			"tb1.PropertyPlantAndEquipment": tb1.PropertyPlantAndEquipment,
			"tb1.OperatingLeaseRightOfUseAssets": tb1.OperatingLeaseRightOfUseAssets,
			"tb1.FinanceLeaseRightOfUseAssets": tb1.FinanceLeaseRightOfUseAssets,
			"tb1.IntangibleAssets": tb1.IntangibleAssets,
			"tb1.Goodwill": tb1.Goodwill,
			"tb1.RefundableTaxAssetsNonCurrent": tb1.RefundableTaxAssetsNonCurrent,
			"tb1.DeferredTaxAssetsNonCurrent": tb1.DeferredTaxAssetsNonCurrent,
			"tb1.DefinedBenefitPensionAndOtherSimilarPlans": tb1.DefinedBenefitPensionAndOtherSimilarPlans,
			"tb1.OtherNonCurrentAssets": tb1.OtherNonCurrentAssets,
			"tb1.DiscontinuedOperations": tb1.DiscontinuedOperations,
			#
			#
			# Current Liabilities - Trial Balance,
			#
			"tb1.AccountsPayableAndAccruedLiabilities": tb1.AccountsPayableAndAccruedLiabilities,
			"tb1.EmployeeCompensationCurrent": tb1.EmployeeCompensationCurrent,
			"tb1.OperatingLeasesCurrent": tb1.OperatingLeasesCurrent,
			"tb1.FinanceLeasesCurrent": tb1.FinanceLeasesCurrent,
			"tb1.DeferredRevenueAndDepositsCurrent": tb1.DeferredRevenueAndDepositsCurrent,
			"tb1.AccruedTaxLiabilities": tb1.AccruedTaxLiabilities,
			"tb1.DeferredTaxLiabilitiesCurrent": tb1.DeferredTaxLiabilitiesCurrent,
			"tb1.CommercialPapers": tb1.CommercialPapers,
			"tb1.ShortTermBorrowings": tb1.ShortTermBorrowings,
			"tb1.OtherCurrentLiabilities": tb1.OtherCurrentLiabilities,
			"tb1.DiscontinuedOperationsLiabilitiesCurrent": tb1.DiscontinuedOperationsLiabilitiesCurrent,
			"tb1.DividendsPayable": tb1.DividendsPayable,
			"tb1.ShortTermPortionOfLongTermDebt": tb1.ShortTermPortionOfLongTermDebt,
			#
			#
			# Non-Current Liabilities - Trial Balance,
			#
			"tb1.LongTermDebt": tb1.LongTermDebt,
			"tb1.PreferredSharesLiability": tb1.PreferredSharesLiability,
			"tb1.RetirementBenefits": tb1.RetirementBenefits,
			"tb1.OperatingLeasesNonCurrent": tb1.OperatingLeasesNonCurrent,
			"tb1.FinanceLeasesNonCurrent": tb1.FinanceLeasesNonCurrent,
			"tb1.LeaseIncentiveObligation": tb1.LeaseIncentiveObligation,
			"tb1.DeferredRevenueAndDepositsNonCurrent": tb1.DeferredRevenueAndDepositsNonCurrent,
			"tb1.ContingentConsideration": tb1.ContingentConsideration,
			"tb1.AccruedTaxLiabilitiesNonCurrent": tb1.AccruedTaxLiabilitiesNonCurrent,
			"tb1.DeferredTaxLiabilitiesNonCurrent": tb1.DeferredTaxLiabilitiesNonCurrent,
			"tb1.OtherNonCurrentLiabilities": tb1.OtherNonCurrentLiabilities,
			"tb1.RedeemableNonControllingInterests": tb1.RedeemableNonControllingInterests,
			"tb1.DiscontinuedOperationsLiabilitiesNonCurrent": tb1.DiscontinuedOperationsLiabilitiesNonCurrent,
			#
			#
			# Shareholders Equity - Trial Balance
			#
			# convertible debt,
			"tb1.ConvertibleDebtBeginning": tb1.ConvertibleDebtBeginning,
			#
			# common shares,
			"tb1.CommonSharesBeginning": tb1.CommonSharesBeginning,
			"tb1.CommonSharesIssued": tb1.CommonSharesIssued,
			"tb1.ShareBasedCompensation": tb1.ShareBasedCompensation,
			#
			# preferred shares,
			"tb1.PreferredSharesBeginning": tb1.PreferredSharesBeginning,
			#
			# retained earnings,
			"tb1.RetainedEarningsBeginning": tb1.RetainedEarningsBeginning,
			"tb1.DividendsAndDividendEquivalentsDeclared": tb1.DividendsAndDividendEquivalentsDeclared,
			"tb1.CommonSharesRepurchasedAndRetired": tb1.CommonSharesRepurchasedAndRetired,
			"tb1.ShareBasedCompensationRetainedEarnings": tb1.ShareBasedCompensationRetainedEarnings,
			"tb1.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts": tb1.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts,
			"tb1.RetainedEarningsOthers": tb1.RetainedEarningsOthers,
			#
			# accumulated other comprehensive income,
			"tb1.AccumulatedOtherComprehensiveIncomeBeginning": tb1.AccumulatedOtherComprehensiveIncomeBeginning,
			#
			# treasury shares,
			"tb1.TreasurySharesBeginning": tb1.TreasurySharesBeginning,
			"tb1.PurchaseAndSellOfTreasuryShares": tb1.PurchaseAndSellOfTreasuryShares,
			#
			# employee benefit trust,
			"tb1.EmployeeBenefitTrustBeginning": tb1.EmployeeBenefitTrustBeginning,
			#
			# non controlling interests,
			"tb1.NonControllingInterestsBeginning": tb1.NonControllingInterestsBeginning,
			"tb1.DividendsDeclaredToNonControllingInterests": tb1.DividendsDeclaredToNonControllingInterests,
			"tb1.AcquisitionOfNonControllingInterests": tb1.AcquisitionOfNonControllingInterests,
			"tb1.NonControllingInterestsOthers": tb1.NonControllingInterestsOthers,
			#
			#
			# Income Statements - Trial Balance,
			#
			"tb1.Sales": tb1.Sales,
			"tb1.CostOfSales": tb1.CostOfSales,
			"tb1.ResearchAndDevelopment": tb1.ResearchAndDevelopment,
			"tb1.SellingGeneralAdministrativeAndMarketing": tb1.SellingGeneralAdministrativeAndMarketing,
			"tb1.ImpairmentRestructuringAndOtherSpecialCharges": tb1.ImpairmentRestructuringAndOtherSpecialCharges,
			"tb1.NonOperatingIncome": tb1.NonOperatingIncome,
			"tb1.IncomeTaxExpenseBenefit": tb1.IncomeTaxExpenseBenefit,
			"tb1.EquityMethodInvesteesIncome": tb1.EquityMethodInvesteesIncome,
			"tb1.NetIncomeFromDiscontinuedOperations": tb1.NetIncomeFromDiscontinuedOperations,
			#
			#
			# Other Comprehensive Income - Trial Balance,
			#
			"tb1.ChangeInForeignCurrencyTranslationAdjustment": tb1.ChangeInForeignCurrencyTranslationAdjustment,
			"tb1.ChangeInUnrealizedGainsLossesOnDerivativeInstruments": tb1.ChangeInUnrealizedGainsLossesOnDerivativeInstruments,
			"tb1.ChangeInUnrealizedGainsLossesOnInvestments": tb1.ChangeInUnrealizedGainsLossesOnInvestments,
			"tb1.ChangeInDefinedBenefitPensionAndOtherSimilarPlans": tb1.ChangeInDefinedBenefitPensionAndOtherSimilarPlans,
			"tb1.IncomeTaxOnOtherComprehensiveIncome": tb1.IncomeTaxOnOtherComprehensiveIncome,
			#
			#
			# TRIAL BALANCE 2
			#
			#
			# General - Trial Balance,
			#
			"tb2.AccessionNumber": tb2.AccessionNumber,
			"tb2.AmendmentFlag": tb2.AmendmentFlag,
			"tb2.EntityRegistrantName": tb2.EntityRegistrantName,
			"tb2.Link": tb2.Link,
			"tb2.Period": tb2.Period,
			"tb2.PeriodEndDate": tb2.PeriodEndDate,
			"tb2.PeriodOfReport": tb2.PeriodOfReport,
			"tb2.TradingSymbol": tb2.TradingSymbol,
			#
			#
			# Current Assets - Trial Balance,
			#
			"tb2.Cash": tb2.Cash,
			"tb2.ShortTermInvestments": tb2.ShortTermInvestments,
			"tb2.AccountsReceivable": tb2.AccountsReceivable,
			"tb2.WorkInProgress": tb2.WorkInProgress,
			"tb2.Inventories": tb2.Inventories,
			"tb2.PrepaidExpenses": tb2.PrepaidExpenses,
			"tb2.NonTradeReceivables": tb2.NonTradeReceivables,
			"tb2.PrepaidTaxAssetsCurrent": tb2.PrepaidTaxAssetsCurrent,
			"tb2.DeferredTaxAssetsCurrent": tb2.DeferredTaxAssetsCurrent,
			"tb2.RightOfUseAssetsCurrent": tb2.RightOfUseAssetsCurrent,
			"tb2.OtherCurrentAssets": tb2.OtherCurrentAssets,
			"tb2.DiscontinuedOperationsCurrent": tb2.DiscontinuedOperationsCurrent,
			#
			#
			# Non-Current Assets - Trial Balance,
			#
			"tb2.LongTermReceivables": tb2.LongTermReceivables,
			"tb2.DeferredCharges": tb2.DeferredCharges,
			"tb2.Investments": tb2.Investments,
			"tb2.PropertyPlantAndEquipment": tb2.PropertyPlantAndEquipment,
			"tb2.OperatingLeaseRightOfUseAssets": tb2.OperatingLeaseRightOfUseAssets,
			"tb2.FinanceLeaseRightOfUseAssets": tb2.FinanceLeaseRightOfUseAssets,
			"tb2.IntangibleAssets": tb2.IntangibleAssets,
			"tb2.Goodwill": tb2.Goodwill,
			"tb2.RefundableTaxAssetsNonCurrent": tb2.RefundableTaxAssetsNonCurrent,
			"tb2.DeferredTaxAssetsNonCurrent": tb2.DeferredTaxAssetsNonCurrent,
			"tb2.DefinedBenefitPensionAndOtherSimilarPlans": tb2.DefinedBenefitPensionAndOtherSimilarPlans,
			"tb2.OtherNonCurrentAssets": tb2.OtherNonCurrentAssets,
			"tb2.DiscontinuedOperations": tb2.DiscontinuedOperations,
			#
			#
			# Current Liabilities - Trial Balance,
			#
			"tb2.AccountsPayableAndAccruedLiabilities": tb2.AccountsPayableAndAccruedLiabilities,
			"tb2.EmployeeCompensationCurrent": tb2.EmployeeCompensationCurrent,
			"tb2.OperatingLeasesCurrent": tb2.OperatingLeasesCurrent,
			"tb2.FinanceLeasesCurrent": tb2.FinanceLeasesCurrent,
			"tb2.DeferredRevenueAndDepositsCurrent": tb2.DeferredRevenueAndDepositsCurrent,
			"tb2.AccruedTaxLiabilities": tb2.AccruedTaxLiabilities,
			"tb2.DeferredTaxLiabilitiesCurrent": tb2.DeferredTaxLiabilitiesCurrent,
			"tb2.CommercialPapers": tb2.CommercialPapers,
			"tb2.ShortTermBorrowings": tb2.ShortTermBorrowings,
			"tb2.OtherCurrentLiabilities": tb2.OtherCurrentLiabilities,
			"tb2.DiscontinuedOperationsLiabilitiesCurrent": tb2.DiscontinuedOperationsLiabilitiesCurrent,
			"tb2.DividendsPayable": tb2.DividendsPayable,
			"tb2.ShortTermPortionOfLongTermDebt": tb2.ShortTermPortionOfLongTermDebt,
			#
			#
			# Non-Current Liabilities - Trial Balance,
			#
			"tb2.LongTermDebt": tb2.LongTermDebt,
			"tb2.PreferredSharesLiability": tb2.PreferredSharesLiability,
			"tb2.RetirementBenefits": tb2.RetirementBenefits,
			"tb2.OperatingLeasesNonCurrent": tb2.OperatingLeasesNonCurrent,
			"tb2.FinanceLeasesNonCurrent": tb2.FinanceLeasesNonCurrent,
			"tb2.LeaseIncentiveObligation": tb2.LeaseIncentiveObligation,
			"tb2.DeferredRevenueAndDepositsNonCurrent": tb2.DeferredRevenueAndDepositsNonCurrent,
			"tb2.ContingentConsideration": tb2.ContingentConsideration,
			"tb2.AccruedTaxLiabilitiesNonCurrent": tb2.AccruedTaxLiabilitiesNonCurrent,
			"tb2.DeferredTaxLiabilitiesNonCurrent": tb2.DeferredTaxLiabilitiesNonCurrent,
			"tb2.OtherNonCurrentLiabilities": tb2.OtherNonCurrentLiabilities,
			"tb2.RedeemableNonControllingInterests": tb2.RedeemableNonControllingInterests,
			"tb2.DiscontinuedOperationsLiabilitiesNonCurrent": tb2.DiscontinuedOperationsLiabilitiesNonCurrent,
			#
			#
			# Shareholders Equity - Trial Balance
			#
			# convertible debt,
			"tb2.ConvertibleDebtBeginning": tb2.ConvertibleDebtBeginning,
			#
			# common shares,
			"tb2.CommonSharesBeginning": tb2.CommonSharesBeginning,
			"tb2.CommonSharesIssued": tb2.CommonSharesIssued,
			"tb2.ShareBasedCompensation": tb2.ShareBasedCompensation,
			#
			# preferred shares,
			"tb2.PreferredSharesBeginning": tb2.PreferredSharesBeginning,
			#
			# retained earnings,
			"tb2.RetainedEarningsBeginning": tb2.RetainedEarningsBeginning,
			"tb2.DividendsAndDividendEquivalentsDeclared": tb2.DividendsAndDividendEquivalentsDeclared,
			"tb2.CommonSharesRepurchasedAndRetired": tb2.CommonSharesRepurchasedAndRetired,
			"tb2.ShareBasedCompensationRetainedEarnings": tb2.ShareBasedCompensationRetainedEarnings,
			"tb2.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts": tb2.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts,
			"tb2.RetainedEarningsOthers": tb2.RetainedEarningsOthers,
			#
			# accumulated other comprehensive income,
			"tb2.AccumulatedOtherComprehensiveIncomeBeginning": tb2.AccumulatedOtherComprehensiveIncomeBeginning,
			#
			# treasury shares,
			"tb2.TreasurySharesBeginning": tb2.TreasurySharesBeginning,
			"tb2.PurchaseAndSellOfTreasuryShares": tb2.PurchaseAndSellOfTreasuryShares,
			#
			# employee benefit trust,
			"tb2.EmployeeBenefitTrustBeginning": tb2.EmployeeBenefitTrustBeginning,
			#
			# non controlling interests,
			"tb2.NonControllingInterestsBeginning": tb2.NonControllingInterestsBeginning,
			"tb2.DividendsDeclaredToNonControllingInterests": tb2.DividendsDeclaredToNonControllingInterests,
			"tb2.AcquisitionOfNonControllingInterests": tb2.AcquisitionOfNonControllingInterests,
			"tb2.NonControllingInterestsOthers": tb2.NonControllingInterestsOthers,
			#
			#
			# Income Statements - Trial Balance,
			#
			"tb2.Sales": tb2.Sales,
			"tb2.CostOfSales": tb2.CostOfSales,
			"tb2.ResearchAndDevelopment": tb2.ResearchAndDevelopment,
			"tb2.SellingGeneralAdministrativeAndMarketing": tb2.SellingGeneralAdministrativeAndMarketing,
			"tb2.ImpairmentRestructuringAndOtherSpecialCharges": tb2.ImpairmentRestructuringAndOtherSpecialCharges,
			"tb2.NonOperatingIncome": tb2.NonOperatingIncome,
			"tb2.IncomeTaxExpenseBenefit": tb2.IncomeTaxExpenseBenefit,
			"tb2.EquityMethodInvesteesIncome": tb2.EquityMethodInvesteesIncome,
			"tb2.NetIncomeFromDiscontinuedOperations": tb2.NetIncomeFromDiscontinuedOperations,
			#
			#
			# Other Comprehensive Income - Trial Balance,
			#
			"tb2.ChangeInForeignCurrencyTranslationAdjustment": tb2.ChangeInForeignCurrencyTranslationAdjustment,
			"tb2.ChangeInUnrealizedGainsLossesOnDerivativeInstruments": tb2.ChangeInUnrealizedGainsLossesOnDerivativeInstruments,
			"tb2.ChangeInUnrealizedGainsLossesOnInvestments": tb2.ChangeInUnrealizedGainsLossesOnInvestments,
			"tb2.ChangeInDefinedBenefitPensionAndOtherSimilarPlans": tb2.ChangeInDefinedBenefitPensionAndOtherSimilarPlans,
			"tb2.IncomeTaxOnOtherComprehensiveIncome": tb2.IncomeTaxOnOtherComprehensiveIncome,
			#
			#
			# TRIAL BALANCE 3
			#
			#
			# General - Trial Balance,
			#
			"tb3.AccessionNumber": tb3.AccessionNumber,
			"tb3.AmendmentFlag": tb3.AmendmentFlag,
			"tb3.EntityRegistrantName": tb3.EntityRegistrantName,
			"tb3.Link": tb3.Link,
			"tb3.Period": tb3.Period,
			"tb3.PeriodEndDate": tb3.PeriodEndDate,
			"tb3.PeriodOfReport": tb3.PeriodOfReport,
			"tb3.TradingSymbol": tb3.TradingSymbol,
			#
			#
			# Current Assets - Trial Balance,
			#
			"tb3.Cash": tb3.Cash,
			"tb3.ShortTermInvestments": tb3.ShortTermInvestments,
			"tb3.AccountsReceivable": tb3.AccountsReceivable,
			"tb3.WorkInProgress": tb3.WorkInProgress,
			"tb3.Inventories": tb3.Inventories,
			"tb3.PrepaidExpenses": tb3.PrepaidExpenses,
			"tb3.NonTradeReceivables": tb3.NonTradeReceivables,
			"tb3.PrepaidTaxAssetsCurrent": tb3.PrepaidTaxAssetsCurrent,
			"tb3.DeferredTaxAssetsCurrent": tb3.DeferredTaxAssetsCurrent,
			"tb3.RightOfUseAssetsCurrent": tb3.RightOfUseAssetsCurrent,
			"tb3.OtherCurrentAssets": tb3.OtherCurrentAssets,
			"tb3.DiscontinuedOperationsCurrent": tb3.DiscontinuedOperationsCurrent,
			#
			#
			# Non-Current Assets - Trial Balance,
			#
			"tb3.LongTermReceivables": tb3.LongTermReceivables,
			"tb3.DeferredCharges": tb3.DeferredCharges,
			"tb3.Investments": tb3.Investments,
			"tb3.PropertyPlantAndEquipment": tb3.PropertyPlantAndEquipment,
			"tb3.OperatingLeaseRightOfUseAssets": tb3.OperatingLeaseRightOfUseAssets,
			"tb3.FinanceLeaseRightOfUseAssets": tb3.FinanceLeaseRightOfUseAssets,
			"tb3.IntangibleAssets": tb3.IntangibleAssets,
			"tb3.Goodwill": tb3.Goodwill,
			"tb3.RefundableTaxAssetsNonCurrent": tb3.RefundableTaxAssetsNonCurrent,
			"tb3.DeferredTaxAssetsNonCurrent": tb3.DeferredTaxAssetsNonCurrent,
			"tb3.DefinedBenefitPensionAndOtherSimilarPlans": tb3.DefinedBenefitPensionAndOtherSimilarPlans,
			"tb3.OtherNonCurrentAssets": tb3.OtherNonCurrentAssets,
			"tb3.DiscontinuedOperations": tb3.DiscontinuedOperations,
			#
			#
			# Current Liabilities - Trial Balance,
			#
			"tb3.AccountsPayableAndAccruedLiabilities": tb3.AccountsPayableAndAccruedLiabilities,
			"tb3.EmployeeCompensationCurrent": tb3.EmployeeCompensationCurrent,
			"tb3.OperatingLeasesCurrent": tb3.OperatingLeasesCurrent,
			"tb3.FinanceLeasesCurrent": tb3.FinanceLeasesCurrent,
			"tb3.DeferredRevenueAndDepositsCurrent": tb3.DeferredRevenueAndDepositsCurrent,
			"tb3.AccruedTaxLiabilities": tb3.AccruedTaxLiabilities,
			"tb3.DeferredTaxLiabilitiesCurrent": tb3.DeferredTaxLiabilitiesCurrent,
			"tb3.CommercialPapers": tb3.CommercialPapers,
			"tb3.ShortTermBorrowings": tb3.ShortTermBorrowings,
			"tb3.OtherCurrentLiabilities": tb3.OtherCurrentLiabilities,
			"tb3.DiscontinuedOperationsLiabilitiesCurrent": tb3.DiscontinuedOperationsLiabilitiesCurrent,
			"tb3.DividendsPayable": tb3.DividendsPayable,
			"tb3.ShortTermPortionOfLongTermDebt": tb3.ShortTermPortionOfLongTermDebt,
			#
			#
			# Non-Current Liabilities - Trial Balance,
			#
			"tb3.LongTermDebt": tb3.LongTermDebt,
			"tb3.PreferredSharesLiability": tb3.PreferredSharesLiability,
			"tb3.RetirementBenefits": tb3.RetirementBenefits,
			"tb3.OperatingLeasesNonCurrent": tb3.OperatingLeasesNonCurrent,
			"tb3.FinanceLeasesNonCurrent": tb3.FinanceLeasesNonCurrent,
			"tb3.LeaseIncentiveObligation": tb3.LeaseIncentiveObligation,
			"tb3.DeferredRevenueAndDepositsNonCurrent": tb3.DeferredRevenueAndDepositsNonCurrent,
			"tb3.ContingentConsideration": tb3.ContingentConsideration,
			"tb3.AccruedTaxLiabilitiesNonCurrent": tb3.AccruedTaxLiabilitiesNonCurrent,
			"tb3.DeferredTaxLiabilitiesNonCurrent": tb3.DeferredTaxLiabilitiesNonCurrent,
			"tb3.OtherNonCurrentLiabilities": tb3.OtherNonCurrentLiabilities,
			"tb3.RedeemableNonControllingInterests": tb3.RedeemableNonControllingInterests,
			"tb3.DiscontinuedOperationsLiabilitiesNonCurrent": tb3.DiscontinuedOperationsLiabilitiesNonCurrent,
			#
			#
			# Shareholders Equity - Trial Balance
			#
			# convertible debt,
			"tb3.ConvertibleDebtBeginning": tb3.ConvertibleDebtBeginning,
			#
			# common shares,
			"tb3.CommonSharesBeginning": tb3.CommonSharesBeginning,
			"tb3.CommonSharesIssued": tb3.CommonSharesIssued,
			"tb3.ShareBasedCompensation": tb3.ShareBasedCompensation,
			#
			# preferred shares,
			"tb3.PreferredSharesBeginning": tb3.PreferredSharesBeginning,
			#
			# retained earnings,
			"tb3.RetainedEarningsBeginning": tb3.RetainedEarningsBeginning,
			"tb3.DividendsAndDividendEquivalentsDeclared": tb3.DividendsAndDividendEquivalentsDeclared,
			"tb3.CommonSharesRepurchasedAndRetired": tb3.CommonSharesRepurchasedAndRetired,
			"tb3.ShareBasedCompensationRetainedEarnings": tb3.ShareBasedCompensationRetainedEarnings,
			"tb3.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts": tb3.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts,
			"tb3.RetainedEarningsOthers": tb3.RetainedEarningsOthers,
			#
			# accumulated other comprehensive income,
			"tb3.AccumulatedOtherComprehensiveIncomeBeginning": tb3.AccumulatedOtherComprehensiveIncomeBeginning,
			#
			# treasury shares,
			"tb3.TreasurySharesBeginning": tb3.TreasurySharesBeginning,
			"tb3.PurchaseAndSellOfTreasuryShares": tb3.PurchaseAndSellOfTreasuryShares,
			#
			# employee benefit trust,
			"tb3.EmployeeBenefitTrustBeginning": tb3.EmployeeBenefitTrustBeginning,
			#
			# non controlling interests,
			"tb3.NonControllingInterestsBeginning": tb3.NonControllingInterestsBeginning,
			"tb3.DividendsDeclaredToNonControllingInterests": tb3.DividendsDeclaredToNonControllingInterests,
			"tb3.AcquisitionOfNonControllingInterests": tb3.AcquisitionOfNonControllingInterests,
			"tb3.NonControllingInterestsOthers": tb3.NonControllingInterestsOthers,
			#
			#
			# Income Statements - Trial Balance,
			#
			"tb3.Sales": tb3.Sales,
			"tb3.CostOfSales": tb3.CostOfSales,
			"tb3.ResearchAndDevelopment": tb3.ResearchAndDevelopment,
			"tb3.SellingGeneralAdministrativeAndMarketing": tb3.SellingGeneralAdministrativeAndMarketing,
			"tb3.ImpairmentRestructuringAndOtherSpecialCharges": tb3.ImpairmentRestructuringAndOtherSpecialCharges,
			"tb3.NonOperatingIncome": tb3.NonOperatingIncome,
			"tb3.IncomeTaxExpenseBenefit": tb3.IncomeTaxExpenseBenefit,
			"tb3.EquityMethodInvesteesIncome": tb3.EquityMethodInvesteesIncome,
			"tb3.NetIncomeFromDiscontinuedOperations": tb3.NetIncomeFromDiscontinuedOperations,
			#
			#
			# Other Comprehensive Income - Trial Balance,
			#
			"tb3.ChangeInForeignCurrencyTranslationAdjustment": tb3.ChangeInForeignCurrencyTranslationAdjustment,
			"tb3.ChangeInUnrealizedGainsLossesOnDerivativeInstruments": tb3.ChangeInUnrealizedGainsLossesOnDerivativeInstruments,
			"tb3.ChangeInUnrealizedGainsLossesOnInvestments": tb3.ChangeInUnrealizedGainsLossesOnInvestments,
			"tb3.ChangeInDefinedBenefitPensionAndOtherSimilarPlans": tb3.ChangeInDefinedBenefitPensionAndOtherSimilarPlans,
			"tb3.IncomeTaxOnOtherComprehensiveIncome": tb3.IncomeTaxOnOtherComprehensiveIncome,
			#
			#
			# TRIAL BALANCE 4
			#
			#
			# General - Trial Balance,
			#
			"tb4.AccessionNumber": tb4.AccessionNumber,
			"tb4.AmendmentFlag": tb4.AmendmentFlag,
			"tb4.EntityRegistrantName": tb4.EntityRegistrantName,
			"tb4.Link": tb4.Link,
			"tb4.Period": tb4.Period,
			"tb4.PeriodEndDate": tb4.PeriodEndDate,
			"tb4.PeriodOfReport": tb4.PeriodOfReport,
			"tb4.TradingSymbol": tb4.TradingSymbol,
			#
			#
			# Current Assets - Trial Balance,
			#
			"tb4.Cash": tb4.Cash,
			"tb4.ShortTermInvestments": tb4.ShortTermInvestments,
			"tb4.AccountsReceivable": tb4.AccountsReceivable,
			"tb4.WorkInProgress": tb4.WorkInProgress,
			"tb4.Inventories": tb4.Inventories,
			"tb4.PrepaidExpenses": tb4.PrepaidExpenses,
			"tb4.NonTradeReceivables": tb4.NonTradeReceivables,
			"tb4.PrepaidTaxAssetsCurrent": tb4.PrepaidTaxAssetsCurrent,
			"tb4.DeferredTaxAssetsCurrent": tb4.DeferredTaxAssetsCurrent,
			"tb4.RightOfUseAssetsCurrent": tb4.RightOfUseAssetsCurrent,
			"tb4.OtherCurrentAssets": tb4.OtherCurrentAssets,
			"tb4.DiscontinuedOperationsCurrent": tb4.DiscontinuedOperationsCurrent,
			#
			#
			# Non-Current Assets - Trial Balance,
			#
			"tb4.LongTermReceivables": tb4.LongTermReceivables,
			"tb4.DeferredCharges": tb4.DeferredCharges,
			"tb4.Investments": tb4.Investments,
			"tb4.PropertyPlantAndEquipment": tb4.PropertyPlantAndEquipment,
			"tb4.OperatingLeaseRightOfUseAssets": tb4.OperatingLeaseRightOfUseAssets,
			"tb4.FinanceLeaseRightOfUseAssets": tb4.FinanceLeaseRightOfUseAssets,
			"tb4.IntangibleAssets": tb4.IntangibleAssets,
			"tb4.Goodwill": tb4.Goodwill,
			"tb4.RefundableTaxAssetsNonCurrent": tb4.RefundableTaxAssetsNonCurrent,
			"tb4.DeferredTaxAssetsNonCurrent": tb4.DeferredTaxAssetsNonCurrent,
			"tb4.DefinedBenefitPensionAndOtherSimilarPlans": tb4.DefinedBenefitPensionAndOtherSimilarPlans,
			"tb4.OtherNonCurrentAssets": tb4.OtherNonCurrentAssets,
			"tb4.DiscontinuedOperations": tb4.DiscontinuedOperations,
			#
			#
			# Current Liabilities - Trial Balance,
			#
			"tb4.AccountsPayableAndAccruedLiabilities": tb4.AccountsPayableAndAccruedLiabilities,
			"tb4.EmployeeCompensationCurrent": tb4.EmployeeCompensationCurrent,
			"tb4.OperatingLeasesCurrent": tb4.OperatingLeasesCurrent,
			"tb4.FinanceLeasesCurrent": tb4.FinanceLeasesCurrent,
			"tb4.DeferredRevenueAndDepositsCurrent": tb4.DeferredRevenueAndDepositsCurrent,
			"tb4.AccruedTaxLiabilities": tb4.AccruedTaxLiabilities,
			"tb4.DeferredTaxLiabilitiesCurrent": tb4.DeferredTaxLiabilitiesCurrent,
			"tb4.CommercialPapers": tb4.CommercialPapers,
			"tb4.ShortTermBorrowings": tb4.ShortTermBorrowings,
			"tb4.OtherCurrentLiabilities": tb4.OtherCurrentLiabilities,
			"tb4.DiscontinuedOperationsLiabilitiesCurrent": tb4.DiscontinuedOperationsLiabilitiesCurrent,
			"tb4.DividendsPayable": tb4.DividendsPayable,
			"tb4.ShortTermPortionOfLongTermDebt": tb4.ShortTermPortionOfLongTermDebt,
			#
			#
			# Non-Current Liabilities - Trial Balance,
			#
			"tb4.LongTermDebt": tb4.LongTermDebt,
			"tb4.PreferredSharesLiability": tb4.PreferredSharesLiability,
			"tb4.RetirementBenefits": tb4.RetirementBenefits,
			"tb4.OperatingLeasesNonCurrent": tb4.OperatingLeasesNonCurrent,
			"tb4.FinanceLeasesNonCurrent": tb4.FinanceLeasesNonCurrent,
			"tb4.LeaseIncentiveObligation": tb4.LeaseIncentiveObligation,
			"tb4.DeferredRevenueAndDepositsNonCurrent": tb4.DeferredRevenueAndDepositsNonCurrent,
			"tb4.ContingentConsideration": tb4.ContingentConsideration,
			"tb4.AccruedTaxLiabilitiesNonCurrent": tb4.AccruedTaxLiabilitiesNonCurrent,
			"tb4.DeferredTaxLiabilitiesNonCurrent": tb4.DeferredTaxLiabilitiesNonCurrent,
			"tb4.OtherNonCurrentLiabilities": tb4.OtherNonCurrentLiabilities,
			"tb4.RedeemableNonControllingInterests": tb4.RedeemableNonControllingInterests,
			"tb4.DiscontinuedOperationsLiabilitiesNonCurrent": tb4.DiscontinuedOperationsLiabilitiesNonCurrent,
			#
			#
			# Shareholders Equity - Trial Balance
			#
			# convertible debt,
			"tb4.ConvertibleDebtBeginning": tb4.ConvertibleDebtBeginning,
			#
			# common shares,
			"tb4.CommonSharesBeginning": tb4.CommonSharesBeginning,
			"tb4.CommonSharesIssued": tb4.CommonSharesIssued,
			"tb4.ShareBasedCompensation": tb4.ShareBasedCompensation,
			#
			# preferred shares,
			"tb4.PreferredSharesBeginning": tb4.PreferredSharesBeginning,
			#
			# retained earnings,
			"tb4.RetainedEarningsBeginning": tb4.RetainedEarningsBeginning,
			"tb4.DividendsAndDividendEquivalentsDeclared": tb4.DividendsAndDividendEquivalentsDeclared,
			"tb4.CommonSharesRepurchasedAndRetired": tb4.CommonSharesRepurchasedAndRetired,
			"tb4.ShareBasedCompensationRetainedEarnings": tb4.ShareBasedCompensationRetainedEarnings,
			"tb4.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts": tb4.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts,
			"tb4.RetainedEarningsOthers": tb4.RetainedEarningsOthers,
			#
			# accumulated other comprehensive income,
			"tb4.AccumulatedOtherComprehensiveIncomeBeginning": tb4.AccumulatedOtherComprehensiveIncomeBeginning,
			#
			# treasury shares,
			"tb4.TreasurySharesBeginning": tb4.TreasurySharesBeginning,
			"tb4.PurchaseAndSellOfTreasuryShares": tb4.PurchaseAndSellOfTreasuryShares,
			#
			# employee benefit trust,
			"tb4.EmployeeBenefitTrustBeginning": tb4.EmployeeBenefitTrustBeginning,
			#
			# non controlling interests,
			"tb4.NonControllingInterestsBeginning": tb4.NonControllingInterestsBeginning,
			"tb4.DividendsDeclaredToNonControllingInterests": tb4.DividendsDeclaredToNonControllingInterests,
			"tb4.AcquisitionOfNonControllingInterests": tb4.AcquisitionOfNonControllingInterests,
			"tb4.NonControllingInterestsOthers": tb4.NonControllingInterestsOthers,
			#
			#
			# Income Statements - Trial Balance,
			#
			"tb4.Sales": tb4.Sales,
			"tb4.CostOfSales": tb4.CostOfSales,
			"tb4.ResearchAndDevelopment": tb4.ResearchAndDevelopment,
			"tb4.SellingGeneralAdministrativeAndMarketing": tb4.SellingGeneralAdministrativeAndMarketing,
			"tb4.ImpairmentRestructuringAndOtherSpecialCharges": tb4.ImpairmentRestructuringAndOtherSpecialCharges,
			"tb4.NonOperatingIncome": tb4.NonOperatingIncome,
			"tb4.IncomeTaxExpenseBenefit": tb4.IncomeTaxExpenseBenefit,
			"tb4.EquityMethodInvesteesIncome": tb4.EquityMethodInvesteesIncome,
			"tb4.NetIncomeFromDiscontinuedOperations": tb4.NetIncomeFromDiscontinuedOperations,
			#
			#
			# Other Comprehensive Income - Trial Balance,
			#
			"tb4.ChangeInForeignCurrencyTranslationAdjustment": tb4.ChangeInForeignCurrencyTranslationAdjustment,
			"tb4.ChangeInUnrealizedGainsLossesOnDerivativeInstruments": tb4.ChangeInUnrealizedGainsLossesOnDerivativeInstruments,
			"tb4.ChangeInUnrealizedGainsLossesOnInvestments": tb4.ChangeInUnrealizedGainsLossesOnInvestments,
			"tb4.ChangeInDefinedBenefitPensionAndOtherSimilarPlans": tb4.ChangeInDefinedBenefitPensionAndOtherSimilarPlans,
			"tb4.IncomeTaxOnOtherComprehensiveIncome": tb4.IncomeTaxOnOtherComprehensiveIncome,
			#
			#
			# TRIAL BALANCE 5
			#
			#
			# General - Trial Balance,
			#
			"tb5.AccessionNumber": tb5.AccessionNumber,
			"tb5.AmendmentFlag": tb5.AmendmentFlag,
			"tb5.EntityRegistrantName": tb5.EntityRegistrantName,
			"tb5.Link": tb5.Link,
			"tb5.Period": tb5.Period,
			"tb5.PeriodEndDate": tb5.PeriodEndDate,
			"tb5.PeriodOfReport": tb5.PeriodOfReport,
			"tb5.TradingSymbol": tb5.TradingSymbol,
			#
			#
			# Current Assets - Trial Balance,
			#
			"tb5.Cash": tb5.Cash,
			"tb5.ShortTermInvestments": tb5.ShortTermInvestments,
			"tb5.AccountsReceivable": tb5.AccountsReceivable,
			"tb5.WorkInProgress": tb5.WorkInProgress,
			"tb5.Inventories": tb5.Inventories,
			"tb5.PrepaidExpenses": tb5.PrepaidExpenses,
			"tb5.NonTradeReceivables": tb5.NonTradeReceivables,
			"tb5.PrepaidTaxAssetsCurrent": tb5.PrepaidTaxAssetsCurrent,
			"tb5.DeferredTaxAssetsCurrent": tb5.DeferredTaxAssetsCurrent,
			"tb5.RightOfUseAssetsCurrent": tb5.RightOfUseAssetsCurrent,
			"tb5.OtherCurrentAssets": tb5.OtherCurrentAssets,
			"tb5.DiscontinuedOperationsCurrent": tb5.DiscontinuedOperationsCurrent,
			#
			#
			# Non-Current Assets - Trial Balance,
			#
			"tb5.LongTermReceivables": tb5.LongTermReceivables,
			"tb5.DeferredCharges": tb5.DeferredCharges,
			"tb5.Investments": tb5.Investments,
			"tb5.PropertyPlantAndEquipment": tb5.PropertyPlantAndEquipment,
			"tb5.OperatingLeaseRightOfUseAssets": tb5.OperatingLeaseRightOfUseAssets,
			"tb5.FinanceLeaseRightOfUseAssets": tb5.FinanceLeaseRightOfUseAssets,
			"tb5.IntangibleAssets": tb5.IntangibleAssets,
			"tb5.Goodwill": tb5.Goodwill,
			"tb5.RefundableTaxAssetsNonCurrent": tb5.RefundableTaxAssetsNonCurrent,
			"tb5.DeferredTaxAssetsNonCurrent": tb5.DeferredTaxAssetsNonCurrent,
			"tb5.DefinedBenefitPensionAndOtherSimilarPlans": tb5.DefinedBenefitPensionAndOtherSimilarPlans,
			"tb5.OtherNonCurrentAssets": tb5.OtherNonCurrentAssets,
			"tb5.DiscontinuedOperations": tb5.DiscontinuedOperations,
			#
			#
			# Current Liabilities - Trial Balance,
			#
			"tb5.AccountsPayableAndAccruedLiabilities": tb5.AccountsPayableAndAccruedLiabilities,
			"tb5.EmployeeCompensationCurrent": tb5.EmployeeCompensationCurrent,
			"tb5.OperatingLeasesCurrent": tb5.OperatingLeasesCurrent,
			"tb5.FinanceLeasesCurrent": tb5.FinanceLeasesCurrent,
			"tb5.DeferredRevenueAndDepositsCurrent": tb5.DeferredRevenueAndDepositsCurrent,
			"tb5.AccruedTaxLiabilities": tb5.AccruedTaxLiabilities,
			"tb5.DeferredTaxLiabilitiesCurrent": tb5.DeferredTaxLiabilitiesCurrent,
			"tb5.CommercialPapers": tb5.CommercialPapers,
			"tb5.ShortTermBorrowings": tb5.ShortTermBorrowings,
			"tb5.OtherCurrentLiabilities": tb5.OtherCurrentLiabilities,
			"tb5.DiscontinuedOperationsLiabilitiesCurrent": tb5.DiscontinuedOperationsLiabilitiesCurrent,
			"tb5.DividendsPayable": tb5.DividendsPayable,
			"tb5.ShortTermPortionOfLongTermDebt": tb5.ShortTermPortionOfLongTermDebt,
			#
			#
			# Non-Current Liabilities - Trial Balance,
			#
			"tb5.LongTermDebt": tb5.LongTermDebt,
			"tb5.PreferredSharesLiability": tb5.PreferredSharesLiability,
			"tb5.RetirementBenefits": tb5.RetirementBenefits,
			"tb5.OperatingLeasesNonCurrent": tb5.OperatingLeasesNonCurrent,
			"tb5.FinanceLeasesNonCurrent": tb5.FinanceLeasesNonCurrent,
			"tb5.LeaseIncentiveObligation": tb5.LeaseIncentiveObligation,
			"tb5.DeferredRevenueAndDepositsNonCurrent": tb5.DeferredRevenueAndDepositsNonCurrent,
			"tb5.ContingentConsideration": tb5.ContingentConsideration,
			"tb5.AccruedTaxLiabilitiesNonCurrent": tb5.AccruedTaxLiabilitiesNonCurrent,
			"tb5.DeferredTaxLiabilitiesNonCurrent": tb5.DeferredTaxLiabilitiesNonCurrent,
			"tb5.OtherNonCurrentLiabilities": tb5.OtherNonCurrentLiabilities,
			"tb5.RedeemableNonControllingInterests": tb5.RedeemableNonControllingInterests,
			"tb5.DiscontinuedOperationsLiabilitiesNonCurrent": tb5.DiscontinuedOperationsLiabilitiesNonCurrent,
			#
			#
			# Shareholders Equity - Trial Balance
			#
			# convertible debt,
			"tb5.ConvertibleDebtBeginning": tb5.ConvertibleDebtBeginning,
			#
			# common shares,
			"tb5.CommonSharesBeginning": tb5.CommonSharesBeginning,
			"tb5.CommonSharesIssued": tb5.CommonSharesIssued,
			"tb5.ShareBasedCompensation": tb5.ShareBasedCompensation,
			#
			# preferred shares,
			"tb5.PreferredSharesBeginning": tb5.PreferredSharesBeginning,
			#
			# retained earnings,
			"tb5.RetainedEarningsBeginning": tb5.RetainedEarningsBeginning,
			"tb5.DividendsAndDividendEquivalentsDeclared": tb5.DividendsAndDividendEquivalentsDeclared,
			"tb5.CommonSharesRepurchasedAndRetired": tb5.CommonSharesRepurchasedAndRetired,
			"tb5.ShareBasedCompensationRetainedEarnings": tb5.ShareBasedCompensationRetainedEarnings,
			"tb5.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts": tb5.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts,
			"tb5.RetainedEarningsOthers": tb5.RetainedEarningsOthers,
			#
			# accumulated other comprehensive income,
			"tb5.AccumulatedOtherComprehensiveIncomeBeginning": tb5.AccumulatedOtherComprehensiveIncomeBeginning,
			#
			# treasury shares,
			"tb5.TreasurySharesBeginning": tb5.TreasurySharesBeginning,
			"tb5.PurchaseAndSellOfTreasuryShares": tb5.PurchaseAndSellOfTreasuryShares,
			#
			# employee benefit trust,
			"tb5.EmployeeBenefitTrustBeginning": tb5.EmployeeBenefitTrustBeginning,
			#
			# non controlling interests,
			"tb5.NonControllingInterestsBeginning": tb5.NonControllingInterestsBeginning,
			"tb5.DividendsDeclaredToNonControllingInterests": tb5.DividendsDeclaredToNonControllingInterests,
			"tb5.AcquisitionOfNonControllingInterests": tb5.AcquisitionOfNonControllingInterests,
			"tb5.NonControllingInterestsOthers": tb5.NonControllingInterestsOthers,
			#
			#
			# Income Statements - Trial Balance,
			#
			"tb5.Sales": tb5.Sales,
			"tb5.CostOfSales": tb5.CostOfSales,
			"tb5.ResearchAndDevelopment": tb5.ResearchAndDevelopment,
			"tb5.SellingGeneralAdministrativeAndMarketing": tb5.SellingGeneralAdministrativeAndMarketing,
			"tb5.ImpairmentRestructuringAndOtherSpecialCharges": tb5.ImpairmentRestructuringAndOtherSpecialCharges,
			"tb5.NonOperatingIncome": tb5.NonOperatingIncome,
			"tb5.IncomeTaxExpenseBenefit": tb5.IncomeTaxExpenseBenefit,
			"tb5.EquityMethodInvesteesIncome": tb5.EquityMethodInvesteesIncome,
			"tb5.NetIncomeFromDiscontinuedOperations": tb5.NetIncomeFromDiscontinuedOperations,
			#
			#
			# Other Comprehensive Income - Trial Balance,
			#
			"tb5.ChangeInForeignCurrencyTranslationAdjustment": tb5.ChangeInForeignCurrencyTranslationAdjustment,
			"tb5.ChangeInUnrealizedGainsLossesOnDerivativeInstruments": tb5.ChangeInUnrealizedGainsLossesOnDerivativeInstruments,
			"tb5.ChangeInUnrealizedGainsLossesOnInvestments": tb5.ChangeInUnrealizedGainsLossesOnInvestments,
			"tb5.ChangeInDefinedBenefitPensionAndOtherSimilarPlans": tb5.ChangeInDefinedBenefitPensionAndOtherSimilarPlans,
			"tb5.IncomeTaxOnOtherComprehensiveIncome": tb5.IncomeTaxOnOtherComprehensiveIncome,
			#
			#
			# TRIAL BALANCE 6
			#
			#
			# General - Trial Balance,
			#
			"tb6.AccessionNumber": tb6.AccessionNumber,
			"tb6.AmendmentFlag": tb6.AmendmentFlag,
			"tb6.EntityRegistrantName": tb6.EntityRegistrantName,
			"tb6.Link": tb6.Link,
			"tb6.Period": tb6.Period,
			"tb6.PeriodEndDate": tb6.PeriodEndDate,
			"tb6.PeriodOfReport": tb6.PeriodOfReport,
			"tb6.TradingSymbol": tb6.TradingSymbol,
			#
			#
			# Current Assets - Trial Balance,
			#
			"tb6.Cash": tb6.Cash,
			"tb6.ShortTermInvestments": tb6.ShortTermInvestments,
			"tb6.AccountsReceivable": tb6.AccountsReceivable,
			"tb6.WorkInProgress": tb6.WorkInProgress,
			"tb6.Inventories": tb6.Inventories,
			"tb6.PrepaidExpenses": tb6.PrepaidExpenses,
			"tb6.NonTradeReceivables": tb6.NonTradeReceivables,
			"tb6.PrepaidTaxAssetsCurrent": tb6.PrepaidTaxAssetsCurrent,
			"tb6.DeferredTaxAssetsCurrent": tb6.DeferredTaxAssetsCurrent,
			"tb6.RightOfUseAssetsCurrent": tb6.RightOfUseAssetsCurrent,
			"tb6.OtherCurrentAssets": tb6.OtherCurrentAssets,
			"tb6.DiscontinuedOperationsCurrent": tb6.DiscontinuedOperationsCurrent,
			#
			#
			# Non-Current Assets - Trial Balance,
			#
			"tb6.LongTermReceivables": tb6.LongTermReceivables,
			"tb6.DeferredCharges": tb6.DeferredCharges,
			"tb6.Investments": tb6.Investments,
			"tb6.PropertyPlantAndEquipment": tb6.PropertyPlantAndEquipment,
			"tb6.OperatingLeaseRightOfUseAssets": tb6.OperatingLeaseRightOfUseAssets,
			"tb6.FinanceLeaseRightOfUseAssets": tb6.FinanceLeaseRightOfUseAssets,
			"tb6.IntangibleAssets": tb6.IntangibleAssets,
			"tb6.Goodwill": tb6.Goodwill,
			"tb6.RefundableTaxAssetsNonCurrent": tb6.RefundableTaxAssetsNonCurrent,
			"tb6.DeferredTaxAssetsNonCurrent": tb6.DeferredTaxAssetsNonCurrent,
			"tb6.DefinedBenefitPensionAndOtherSimilarPlans": tb6.DefinedBenefitPensionAndOtherSimilarPlans,
			"tb6.OtherNonCurrentAssets": tb6.OtherNonCurrentAssets,
			"tb6.DiscontinuedOperations": tb6.DiscontinuedOperations,
			#
			#
			# Current Liabilities - Trial Balance,
			#
			"tb6.AccountsPayableAndAccruedLiabilities": tb6.AccountsPayableAndAccruedLiabilities,
			"tb6.EmployeeCompensationCurrent": tb6.EmployeeCompensationCurrent,
			"tb6.OperatingLeasesCurrent": tb6.OperatingLeasesCurrent,
			"tb6.FinanceLeasesCurrent": tb6.FinanceLeasesCurrent,
			"tb6.DeferredRevenueAndDepositsCurrent": tb6.DeferredRevenueAndDepositsCurrent,
			"tb6.AccruedTaxLiabilities": tb6.AccruedTaxLiabilities,
			"tb6.DeferredTaxLiabilitiesCurrent": tb6.DeferredTaxLiabilitiesCurrent,
			"tb6.CommercialPapers": tb6.CommercialPapers,
			"tb6.ShortTermBorrowings": tb6.ShortTermBorrowings,
			"tb6.OtherCurrentLiabilities": tb6.OtherCurrentLiabilities,
			"tb6.DiscontinuedOperationsLiabilitiesCurrent": tb6.DiscontinuedOperationsLiabilitiesCurrent,
			"tb6.DividendsPayable": tb6.DividendsPayable,
			"tb6.ShortTermPortionOfLongTermDebt": tb6.ShortTermPortionOfLongTermDebt,
			#
			#
			# Non-Current Liabilities - Trial Balance,
			#
			"tb6.LongTermDebt": tb6.LongTermDebt,
			"tb6.PreferredSharesLiability": tb6.PreferredSharesLiability,
			"tb6.RetirementBenefits": tb6.RetirementBenefits,
			"tb6.OperatingLeasesNonCurrent": tb6.OperatingLeasesNonCurrent,
			"tb6.FinanceLeasesNonCurrent": tb6.FinanceLeasesNonCurrent,
			"tb6.LeaseIncentiveObligation": tb6.LeaseIncentiveObligation,
			"tb6.DeferredRevenueAndDepositsNonCurrent": tb6.DeferredRevenueAndDepositsNonCurrent,
			"tb6.ContingentConsideration": tb6.ContingentConsideration,
			"tb6.AccruedTaxLiabilitiesNonCurrent": tb6.AccruedTaxLiabilitiesNonCurrent,
			"tb6.DeferredTaxLiabilitiesNonCurrent": tb6.DeferredTaxLiabilitiesNonCurrent,
			"tb6.OtherNonCurrentLiabilities": tb6.OtherNonCurrentLiabilities,
			"tb6.RedeemableNonControllingInterests": tb6.RedeemableNonControllingInterests,
			"tb6.DiscontinuedOperationsLiabilitiesNonCurrent": tb6.DiscontinuedOperationsLiabilitiesNonCurrent,
			#
			#
			# Shareholders Equity - Trial Balance
			#
			# convertible debt,
			"tb6.ConvertibleDebtBeginning": tb6.ConvertibleDebtBeginning,
			#
			# common shares,
			"tb6.CommonSharesBeginning": tb6.CommonSharesBeginning,
			"tb6.CommonSharesIssued": tb6.CommonSharesIssued,
			"tb6.ShareBasedCompensation": tb6.ShareBasedCompensation,
			#
			# preferred shares,
			"tb6.PreferredSharesBeginning": tb6.PreferredSharesBeginning,
			#
			# retained earnings,
			"tb6.RetainedEarningsBeginning": tb6.RetainedEarningsBeginning,
			"tb6.DividendsAndDividendEquivalentsDeclared": tb6.DividendsAndDividendEquivalentsDeclared,
			"tb6.CommonSharesRepurchasedAndRetired": tb6.CommonSharesRepurchasedAndRetired,
			"tb6.ShareBasedCompensationRetainedEarnings": tb6.ShareBasedCompensationRetainedEarnings,
			"tb6.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts": tb6.EffectOfAdoptionOfNewAccountingPronouncementOrTaxCuts,
			"tb6.RetainedEarningsOthers": tb6.RetainedEarningsOthers,
			#
			# accumulated other comprehensive income,
			"tb6.AccumulatedOtherComprehensiveIncomeBeginning": tb6.AccumulatedOtherComprehensiveIncomeBeginning,
			#
			# treasury shares,
			"tb6.TreasurySharesBeginning": tb6.TreasurySharesBeginning,
			"tb6.PurchaseAndSellOfTreasuryShares": tb6.PurchaseAndSellOfTreasuryShares,
			#
			# employee benefit trust,
			"tb6.EmployeeBenefitTrustBeginning": tb6.EmployeeBenefitTrustBeginning,
			#
			# non controlling interests,
			"tb6.NonControllingInterestsBeginning": tb6.NonControllingInterestsBeginning,
			"tb6.DividendsDeclaredToNonControllingInterests": tb6.DividendsDeclaredToNonControllingInterests,
			"tb6.AcquisitionOfNonControllingInterests": tb6.AcquisitionOfNonControllingInterests,
			"tb6.NonControllingInterestsOthers": tb6.NonControllingInterestsOthers,
			#
			#
			# Income Statements - Trial Balance,
			#
			"tb6.Sales": tb6.Sales,
			"tb6.CostOfSales": tb6.CostOfSales,
			"tb6.ResearchAndDevelopment": tb6.ResearchAndDevelopment,
			"tb6.SellingGeneralAdministrativeAndMarketing": tb6.SellingGeneralAdministrativeAndMarketing,
			"tb6.ImpairmentRestructuringAndOtherSpecialCharges": tb6.ImpairmentRestructuringAndOtherSpecialCharges,
			"tb6.NonOperatingIncome": tb6.NonOperatingIncome,
			"tb6.IncomeTaxExpenseBenefit": tb6.IncomeTaxExpenseBenefit,
			"tb6.EquityMethodInvesteesIncome": tb6.EquityMethodInvesteesIncome,
			"tb6.NetIncomeFromDiscontinuedOperations": tb6.NetIncomeFromDiscontinuedOperations,
			#
			#
			# Other Comprehensive Income - Trial Balance,
			#
			"tb6.ChangeInForeignCurrencyTranslationAdjustment": tb6.ChangeInForeignCurrencyTranslationAdjustment,
			"tb6.ChangeInUnrealizedGainsLossesOnDerivativeInstruments": tb6.ChangeInUnrealizedGainsLossesOnDerivativeInstruments,
			"tb6.ChangeInUnrealizedGainsLossesOnInvestments": tb6.ChangeInUnrealizedGainsLossesOnInvestments,
			"tb6.ChangeInDefinedBenefitPensionAndOtherSimilarPlans": tb6.ChangeInDefinedBenefitPensionAndOtherSimilarPlans,
			"tb6.IncomeTaxOnOtherComprehensiveIncome": tb6.IncomeTaxOnOtherComprehensiveIncome,
			#
		}
		data.append(json)
	time.sleep(1)
	return JsonResponse({
		"entities": data
	})
