from django.urls import path
from .views import VehicalListCreateView, VehicalDetailView
urlpatterns = [
    path('vehicals/', VehicalListCreateView.as_view(), name='vehical-list'),
    path('vehicals/<int:pk>/', VehicalDetailView.as_view(), name='vehical-detail'),
]