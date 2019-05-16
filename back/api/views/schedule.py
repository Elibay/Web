from rest_framework import generics
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework.views import APIView

from api.models import Schedule, Hall, Cinema
from api.serializers import ScheduleSerializer, HallSerializer


class ScheduleList(generics.ListAPIView):
    serializer_class = ScheduleSerializer

    def get_queryset(self):
        id = self.request.GET.get('id')
        cinema = Cinema.objects.get(id=id)
        return Schedule.objects.filter(cinema=cinema).order_by('movie')


class HallList(APIView):
    def get(self, request):
        id = request.GET.get('id')
        schedule = Schedule.objects.get(id=id)
        halls = Hall.objects.filter(schedule=schedule)
        serial = HallSerializer(halls, many=True)
        return Response(serial.data)

    def post(self, request):
        print ("i am here")
        data = json.loads(request.body)
        reserve = data['reserve']
        print(reserve)
        for h in reserve:
            hall = Hall.objects.get(id=h['id'])
            hall.is_reserved = True
            hall.save()
        return Response({"hello": "hello"})


# class HallList(generics.ListCreateAPIView):
#     serializer_class = HallSerializer
#
#     def get_queryset(self):
#
#
#
#
#     def post(self, request):
#

