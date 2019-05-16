import datetime
# import random

# import requests
# from bs4 import BeautifulSoup

from rest_framework.decorators import api_view

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse


from api.serializers import MovieSerializer, CommentSerializer
from api.models import Movie, Comment


class MovieList(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        if self.request.GET.get('soon') == 'False':
            return Movie.objects.filter(premiere__lt=datetime.date.today())
        else:
            return Movie.objects.filter(premiere__gte=datetime.date.today())


@api_view(['GET',])
def movie_detail(request, pk):
    try:
        serializer = MovieSerializer(Movie.objects.get(id=pk), many=False)
        # return JsonResponse(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)
        # return JsonResponse(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        # return JsonResponse({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)


class CommentList(APIView):

    def get(self, request, pk):
        comments = Comment.objects.filter(movie_id=pk)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, pk):
        try:
            serializer = CommentSerializer(data=request.data)
            serializer.save(created_by=self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'errors': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


'''
def delete_everything(Data):
    Data.objects.all().delete()


def scrape_current_movies(url, cnt, data):
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
        premiere = item.find('span').text
        premiere = premiere.split('-')
        if premiere[0][0] == 'С':
            premiere[0] = premiere[0][2:]
        prem = premiere[2] + ' ' + premiere[1] + ' ' + premiere[0]
        prem = datetime.datetime.strptime(prem, '%Y %b %d')

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
            movie = data.objects.create(id=cnt, premiere=prem, title=title, genre=genre,
                                        description=description, age=age, duration=duration, poster=images[cnt - cnt2])
            cnt += 1


@api_view(['GET'])
def current_movies(request):
    delete_everything(Movie)
    scrape_current_movies('http://kino.kz', 0, Movie)
    cnt = Movie.objects.count()
    scrape_current_movies('http://kino.kz/soon', cnt, Movie)
    if request.method == 'GET':
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)
'''
