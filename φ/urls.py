from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import views


app_name = "φ"


urlpatterns = [
    
    path("", views.index, name="index"),

    path("filterking/", views.filterking, name="filterking"),
   
    path("disclaimer/", views.disclaimer, name="disclaimer"),

    path("entities/", views.entities, name="entities"),
    
    path("documentation/", views.documentation, name="documentation"),

    path("<str:entity_TradingSymbol>/", views.analysis, name="analysis"),

]

urlpatterns += staticfiles_urlpatterns()