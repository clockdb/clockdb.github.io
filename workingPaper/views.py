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


TEMP_PROFILE_IMAGE_NAME = "temp_profile_image.png"



DEBUG = False

def home_screen_view(request, *args, **kwargs):
	context = {}
	user = request.user
	if user.is_authenticated: 
		return redirect("posts", user_id=user.id)
	destination = get_redirect_if_exists(request)
	print("destination: " + str(destination))
	if request.POST:
		form = AccountAuthenticationForm(request.POST)
		if form.is_valid():
			email = request.POST['email']
			password = request.POST['password']
			user = authenticate(email=email, password=password)

			if user:
				login(request, user)
				if destination:
					return redirect(destination)
				return render(request, "home.html")
	else:
		form = AccountAuthenticationForm()
	context['login_form'] = form
	return render(request, "profile/login.html", context)

def get_redirect_if_exists(request):
	redirect = None
	if request.GET:
		if request.GET.get("next"):
			redirect = str(request.GET.get("next"))
	return redirect
