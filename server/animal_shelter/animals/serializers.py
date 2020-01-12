from rest_framework import serializers
from .models import Dogs, Cats, Reptiles

class DogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dogs
        fields = '__all__'

class ReptileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reptiles
        fields = '__all__'
    

class CatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cats
        fields = '__all__'


