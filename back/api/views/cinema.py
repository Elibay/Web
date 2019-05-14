

@method_decorator(response_wrapper(), name='dispatch')
class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    permission_classes = (AllowAny,)
    http_method_names = ['get']
    serializer_class = NewsSerializer
