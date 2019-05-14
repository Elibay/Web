import random

import requests
from bs4 import BeautifulSoup
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.serializers import MovieSerializer, Movie


class MovieList(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        return Movie.objects.all()




'''
def delete_everything(Data):
    Data.objects.all().delete()


def scrape_current_movies(url, cnt, data):
    delete_everything(data)
    # url = 'http://kino.kz'
    request = requests.get(url)
    html_doc = request.text
    soup = BeautifulSoup(html_doc, "html.parser")
    movie_descriptions = soup.find_all('div', {'class': 'movie_description'})
    images = []
    posters = soup.find_all('div', {'class': 'movie_poster'})
    for poster in posters:
        image = str(poster.findAll('img')[0])
        image = image.split('src="')
        image = image[1].split('"')[0]
        if image[0] == '/':
            image = 'http://kino.kz/images/def/320x222.jpg'
        images.append(image)
    cnt2 = cnt
    for item in movie_descriptions:
        # premiere_date = item.find_all('span')[0].text[2:]
        premiere = item.find('span').text[2:]
        title = item.find_all('dt')[1].text
        genre = item.find_all('dt')[2].text
        description = item.find_all('dt')[3].text
        age_string = item.find('div', {'class': 'prim_age'})
        duration = random.randrange(90, 150)
        if age_string is not None:
            age = int(''.join(filter(str.isdigit, age_string.text)))
        else:
            age = 0

        # print(age)

        if data.objects.filter(title=title).exists() == False:
            movie = data.objects.create(id=cnt, premiere=premiere, title=title, genre=genre,
                                        description=description, age=age, duration=duration, poster=images[cnt - cnt2])
            cnt += 1


@api_view(['GET'])
def current_movies(request):
    scrape_current_movies('http://kino.kz', 0, Movie)
    cnt = Movie.objects.count()
    scrape_current_movies('http://kino.kz/soon', cnt, Movie)
    if request.method == 'GET':
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

'''
