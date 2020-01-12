from django.shortcuts import render
from rest_framework import viewsets, mixins
from .serializers import ShelterSerializer
from .models import  Shelters

class ShelterViewSet(mixins.CreateModelMixin,
                mixins.DestroyModelMixin,
                mixins.ListModelMixin,
                mixins.RetrieveModelMixin,
                mixins.UpdateModelMixin,
                viewsets.GenericViewSet
                ):
    serializer_class = ShelterSerializer
    queryset = Shelters.objects.all()      