from rest_framework import generics
from .models import Vehical
from .serializers import VehicalSerializer

class VehicalListCreateView(generics.ListCreateAPIView):
    queryset = Vehical.objects.all()
    serializer_class = VehicalSerializer

class VehicalDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vehical.objects.all()
    serializer_class = VehicalSerializer