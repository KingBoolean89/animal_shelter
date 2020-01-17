from django.contrib import admin
from .models import Dogs, Cats, Reptiles, Shelters


admin.site.register(Dogs)
admin.site.register(Cats)
admin.site.register(Reptiles)
admin.site.register(Shelters)

# Register your models here.
