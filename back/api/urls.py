from django.urls import path

from api.views import *

urlpatterns = [
    # path('get/', current_movies),
    path('', MovieList.as_view()),
    path('movie/<int:pk>', movie_detail),
    path('movie/<int:pk>/comments', CommentList.as_view()),



    path('login/', login),
    path('logout/', logout),

]
