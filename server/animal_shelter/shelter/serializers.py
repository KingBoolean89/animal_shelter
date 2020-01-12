from rest_framework import serializers
from .models import Shelters
from animals.models import Dogs, Cats, Reptiles


class ShelterSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Shelters
        fields = '__all__'