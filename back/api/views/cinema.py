from django.utils.decorators import method_decorator
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from api.serializers import CinemaSerializer
from api.models import Cinema
from api.utils.decorators import response_wrapper


@method_decorator(response_wrapper(), name='dispatch')
class CinemaList(viewsets.ModelViewSet):
    queryset = Cinema.objects.all()
    permission_classes = (AllowAny,)
    http_method_names = ['get']
    serializer_class = CinemaSerializer


