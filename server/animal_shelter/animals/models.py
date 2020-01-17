from django.db import models


class Animal(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    img = models.CharField(max_length=300)
    shelter_date = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Dogs(Animal):

    def __str__(self):
        return self.name

class Cats(Animal):
    
    def __str__(self):
        return self.name


class Reptiles(Animal):
    
    def __str__(self):

        return self.name



