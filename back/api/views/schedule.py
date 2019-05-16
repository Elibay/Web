from rest_framework import generics

from api.models import Schedule, Hall, Cinema
from api.serializers import ScheduleSerializer, HallSerializer


class ScheduleList(generics.ListAPIView):
    serializer_class = ScheduleSerializer

    def get_queryset(self):
        id = self.request.GET.get('id')
        cinema = Cinema.objects.get(id=id)
        return Schedule.objects.filter(cinema=cinema).order_by('movie')


class HallList(generics.ListCreateAPIView):
    serializer_class = HallSerializer

    def get_queryset(self):
        id = self.request.GET.get('id')
        schedule = Schedule.objects.get(id=id)
        return Hall.objects.filter(schedule=schedule)

