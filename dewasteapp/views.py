from django.http import HttpResponse
from django.template import loader

# from .models import Question


def index(request):
    # latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('index.html')
    context = {
        'latest_question_list': 'latest_question_list',
    }
    return HttpResponse(template.render(context, request))

def maps(request):
    # latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('map.html')
    context = {
        'latest_question_list': 'latest_question_list',
    }
    return HttpResponse(template.render(context, request))

def survey(request):
    # latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('survey.html')
    context = {
        'latest_question_list': 'latest_question_list',
    }
    return HttpResponse(template.render(context, request))

def aboutus(request):
    # latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('aboutus.html')
    context = {
        'latest_question_list': 'latest_question_list',
    }
    return HttpResponse(template.render(context, request))

def surveyres(request):
    # latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('surveyres.html')
    context = {
        'latest_question_list': 'latest_question_list',
    }
    return HttpResponse(template.render(context, request))

def accept_locations(request):
    # latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('accept_locations.html')
    context = {
        'latest_question_list': 'latest_question_list',
    }
    return HttpResponse(template.render(context, request))