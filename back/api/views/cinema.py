from django.utils.decorators import method_decorator
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from api.serializers import CinemaSerializer
from api.models import Cinema, Movie
from api.utils.decorators import response_wrapper

'''
import random

import requests
from bs4 import BeautifulSoup


def delete_everything(Data):
    Data.objects.all().delete()


def get_cinemas_list(url, cnt, data):
    request = requests.get(url)
    html_doc = request.text
    soup = BeautifulSoup(html_doc, "html.parser")
    movie_description = soup.find('table', {'class': 'about-cinema'})
    try:
        st = str(movie_description.text)
        st = st.split('\n')
        print (st)
        title = st[3]
        address = st[7]
        phone = st[12]
        description = st[17]
        image = 'http://s.kino.kz/images/cinemas/' + str(cnt) + '.jpg'
        data.objects.create(id=cnt, title=title, address=address, phone=phone, description=description, poster=image)
    except Exception as e:
        return



@api_view(['GET'])
def get_cinemas(request):
    delete_everything(Cinema)
    for i in range(200):
        get_cinemas_list('http://kino.kz/cinema/' + str(i), i, Cinema)
    if request.method == 'GET':
        movies = Cinema.objects.all()
        serializer = CinemaSerializer(movies, many=True)
        return Response(serializer.data)
        
'''

# @method_decorator(response_wrapper(), name='dispatch')
# class CinemaList(viewsets.ModelViewSet):
#     queryset = Cinema.objects.all()
#     permission_classes = (AllowAny,)
#     http_method_names = ['get']
#     serializer_class = CinemaSerializer


class CinemaList(generics.ListAPIView):
    serializer_class = CinemaSerializer

    def get_queryset(self):
        return Cinema.objects.all()

