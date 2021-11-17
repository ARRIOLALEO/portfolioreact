from django.shortcuts import render

# Create your views here.

def index(request,title=''):
    return render(request,'frontend/index.html')
