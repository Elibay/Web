from django.urls import path, include
from rest_framework import routers

from api.views import *
router = routers.DefaultRouter()
router.register('cinemas', CinemaList)

urlpatterns = [
    # path('get/', current_movies),
    # re_path('^(?P<soon>\w{0,50})/$', MovieList.as_view(), name='soon'),
    path('', MovieList.as_view()),
    path('movie/<int:pk>', movie_detail),
    path('movie/<int:pk>/comments', CommentList.as_view()),

    path('', include(router.urls)),
    # path('get/', get_cinemas),

    path('login/', login),
    path('logout/', logout),

]
