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
import cv2
import json
import base64
import requests

from django.core import files

import datetime
import time
import json

DEBUG = False

def home_screen_view(request):
	return render(request, 'templates/home.html')

