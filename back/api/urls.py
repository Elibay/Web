from django.urls import path

from api.views.movies import MovieList, current_movies

urlpatterns = [
    path('', MovieList.as_view()),
    path('get/', current_movies),

]
