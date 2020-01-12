from django.db import models
from animals.models import Dogs, Cats, Reptiles

class Shelters(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=300)
    manager = models.CharField(max_length=100)
    open_at = models.TimeField()
    close_at = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    dogs = models.ManyToManyField('animals.Dogs')
    cats = models.ManyToManyField('animals.Cats')
    reptiles = models.ManyToManyField('animals.Reptiles')
