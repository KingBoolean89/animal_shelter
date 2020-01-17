from rest_framework import serializers
from .models import Shelters
from animals.models import Dogs, Cats, Reptiles
from animals.serializers import DogSerializer, CatSerializer, ReptileSerializer


class ShelterSerializer(serializers.ModelSerializer):
    dogs = DogSerializer(many=True, read_only=True)
    cats = CatSerializer(many=True, read_only=True)
    reptiles = ReptileSerializer(many=True, read_only=True)
   
    class Meta:
        model = Shelters
        fields = '__all__'