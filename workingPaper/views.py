from django.http.response import HttpResponse
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def home_screen_view(request):
    return HttpResponse('Hello, world!')