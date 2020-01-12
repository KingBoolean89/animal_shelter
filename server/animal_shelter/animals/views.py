from django.shortcuts import render
from rest_framework import viewsets, mixins
from .serializers import ReptileSerializer, CatSerializer, DogSerializer
from .models import Cats, Dogs, Reptiles

class DogViewSet(mixins.CreateModelMixin,
                mixins.DestroyModelMixin,
                mixins.ListModelMixin,
                mixins.RetrieveModelMixin,
                mixins.UpdateModelMixin,
                viewsets.GenericViewSet
                ):
    serializer_class = DogSerializer
    queryset = Dogs.objects.all()


class ReptileViewSet(mixins.CreateModelMixin,
                mixins.DestroyModelMixin,
                mixins.ListModelMixin,
                mixins.RetrieveModelMixin,
                mixins.UpdateModelMixin,
                viewsets.GenericViewSet
                ):
    serializer_class = ReptileSerializer
    queryset = Reptiles.objects.all()


class CatViewSet(mixins.CreateModelMixin,
                mixins.DestroyModelMixin,
                mixins.ListModelMixin,
                mixins.RetrieveModelMixin,
                mixins.UpdateModelMixin,
                viewsets.GenericViewSet
                ):
    serializer_class = CatSerializer
    queryset = Cats.objects.all()




