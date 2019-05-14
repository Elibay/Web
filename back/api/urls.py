from django.urls import path

from api.views import *

urlpatterns = [
    path('', MovieList.as_view()),
    # path('get/', current_movies),
    # path('movie/', ),

    path('login/', login),
    path('logout/', logout),

]
