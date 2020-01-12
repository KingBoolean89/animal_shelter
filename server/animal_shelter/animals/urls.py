from rest_framework.routers import DefaultRouter
from .views import DogViewSet, CatViewSet, ReptileViewSet

router = DefaultRouter()

router.register('dogs', DogViewSet)
router.register('cats', CatViewSet)
router.register('reptiles', ReptileViewSet)

app_name = 'animals'


urlpatterns = [
    
] + router.urls
