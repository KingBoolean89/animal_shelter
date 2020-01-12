from rest_framework.routers import DefaultRouter
from .views import ShelterViewSet

router = DefaultRouter()

router.register('shelters', ShelterViewSet)

urlpatterns = [
    
] + router.urls
