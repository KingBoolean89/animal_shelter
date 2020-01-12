from django.db import models

class Dogs(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    img = models.CharField(max_length=300)
    shelter_date = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Cats(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    img = models.CharField(max_length=300)
    shelter_date = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name



class Reptiles(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    img = models.CharField(max_length=300)
    shelter_date = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):

        return self.name



