from rest_framework import serializers
from .models import Vehical

class VehicalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehical
        fields = '__all__'