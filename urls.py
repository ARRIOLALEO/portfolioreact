from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('timeline',views.index),
    path('post/<str:title>',views.index),
]
