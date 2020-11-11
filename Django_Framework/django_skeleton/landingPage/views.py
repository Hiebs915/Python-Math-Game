from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    my_dict = {'welcome_message': "Hello brave student, welcome to Math 101. In this game you will be"
               " presented a random math problem that you will need to solve.  It will be a"
               " random choice of subtraction, addition, division, and multiplication. You"
               " will have 2 guesses per problem, after that, GAMEOVER!"}  # Template we want to use shown as the dictionary key.
    return render(request,'index.html',context=my_dict)
