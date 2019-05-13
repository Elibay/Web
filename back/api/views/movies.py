from bs4 import BeautifulSoup
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests

from api.serializers import MovieSerializer, Movie


class MovieList(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        print(self.request.data)
        return Movie.objects.all()


def delete_everything(Data):
    Data.objects.all().delete()


def scrape_current_movies(url, Data):
    delete_everything(Data)
    # url = 'http://kino.kz'
    request = requests.get(url)
    html_doc = request.text
    soup = BeautifulSoup(html_doc, "html.parser")
    movie_descriptions = soup.find_all('div', {'class': 'movie_description'})

    # print(movie_descriptions)
    cnt = 0
    images = []
    posters = soup.find_all('div', {'class': 'movie_poster'})
    for poster in posters:
        image = str(poster.findAll('img')[0])
        image=image.split('src="')
        images.append(image[1].split('"')[0])
    for item in movie_descriptions:
        # premiere_date = item.find_all('span')[0].text[2:]
        premiere = item.find('span').text[2:]
        title = item.find_all('dt')[1].text
        genre = item.find_all('dt')[2].text
        description = item.find_all('dt')[3].text
        age_string = item.find('div', {'class': 'prim_age'})

        if age_string is not None:
            age = int(''.join(filter(str.isdigit, age_string.text)))
        else:
            age = 0

        # print(age)

        if Data.objects.filter(title=title).exists() == False:
            movie = Data.objects.create(id=cnt, poster=images[cnt], premiere=premiere, title=title, genre=genre,
                                              description=description, age=age)
            cnt += 1

# Gets the coming soon movies
def scrape_coming_soon_movies(url, Data):
    delete_everything(Data)
    # url = 'http://kino.kz'
    request = requests.get(url)
    html_doc = request.text
    soup = BeautifulSoup(html_doc, "html.parser")
    movie_descriptions = soup.find_all('div', {'class': 'movie_description'})

    # print(movie_descriptions)

    cnt = 0
    for item in movie_descriptions:
        premiere = item.find('span').text
        poster = item.find_all('img')
        print(poster)
        title = item.find_all('dt')[1].tgext
        genre = item.find_all('dt')[2].text
        description = item.find_all('dt')[3].text
        age_string = item.find('div', {'class': 'prim_age'})

        if age_string is not None:
            age = int(''.join(filter(str.isdigit, age_string.text)))
        else:
            age = 0
        # print(age)

        if Data.objects.filter(title=title).exists() == False:
            movie = Data.objects.create(id=cnt, premiere=premiere, title=title, genre=genre,
                                              description=description, age=age)
            cnt += 1

@api_view(['GET'])
def current_movies(request):
    scrape_current_movies('http://kino.kz', Movie)
    if request.method == 'GET':
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)
