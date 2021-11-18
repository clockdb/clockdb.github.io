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

def analysis_view(request, user_id, entity_TradingSymbol):
	return render(request, "home.html")

def home_screen_view(request):
	return render(request, "home.html")

def posts_screen_view(request, user_id):
	return render(request, "home.html")

def posts_view(request, industry_db, industry_SEC_db, year_end, db, region_db, order_db, sort_db, start, end):
	return render(request, "home.html")

def entities_view(request, search, start, end):
	return render(request, "home.html")
