from django.db import models
import string,random


def generate_code():
    code = "".join(random.sample(population=string.ascii_letters,k=6))
    return code


class Room(models.Model):      # model for each game room
    code_length = 6
    code = models.CharField(max_length=code_length,default=generate_code)
    host = models.CharField(max_length=20,unique=True,default='')
    full = False
    max_capacity = 10



