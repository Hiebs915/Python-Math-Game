from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Score(models.Model):
    """
    ===
    Scoring System
    ===
    This class creates a row for each new user that contains their user_id,
    number of correctly answered problems, number of incorrectly answered
    problems, and the total number of problems they attempted.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    number_of_incorrect_answers = models.IntegerField(null=True)
    total_questions_answered = models.IntegerField(null=False)


class Records(models.Model):
    """
    ===
    User Gaming Records
    ===
    This class records the characteristics of the game while the user is
    playing.  It records the date/time for each problem, the problem they were
    given, their answer, and the true answer.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    math_problem = models.CharField(null=False)
    date_time = models.DateTimeField(null=False)
    user_answer = models.IntegerField(null=False,max_length=3)
    answer = models.IntegerField(null=False)
