from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('maps', views.maps, name='maps'),
    path('survey', views.survey, name='survey'),
    path('aboutus', views.aboutus, name='aboutus'),
    path('results', views.surveyres, name='surveyres'),
]