from django.db import models


class Movie(models.Model):
    class Meta:
        verbose_name = 'Фильм'
        verbose_name_plural = 'Фильмы'
    title = models.CharField(verbose_name='Назвние', max_length=200, blank=False, null=True)
    poster = models.ImageField(verbose_name='Афиша')
    country = models.CharField(verbose_name='Страна', max_length=200, blank=True)
    premiere = models.DateField(verbose_name='Премьера', blank=False, null=True)
    duration = models.PositiveIntegerField(verbose_name='Длительность', blank=False, null=True)
    age = models.PositiveIntegerField(verbose_name='Возрастной лимит', default=18)
    desc = models.TextField(verbose_name='Описание', blank=False, null=True)

    def __str__(self):
        return 'Title: {}\n'.format(self.title)


class Comment(models.Model):
    class Meta:
        verbose_name = 'Коммент'
        verbose_name_plural = 'Комменты'
    movie = models.ForeignKey(Movie, related_name='comments', on_delete=models.CASCADE)
    author = models.CharField(max_length=200, blank=False, null=True)
    text = models.TextField(max_length=200, blank=False, null=True)
    date = models.DateTimeField(blank=False, null=True)

    def __str__(self):
        return '{}\n'.format(self.full_name)


class Cinema(models.Model):
    class Meta:
        verbose_name = 'Кинотеатр'
        verbose_name_plural = 'Кинотеатры'
    title = models.CharField(max_length=200, blank=False, null=True)
    poster = models.CharField(max_length=200, blank=True, null=True)
    address = models.CharField(max_length=200, blank=False, null=True)
    phone = models.CharField(max_length=200, blank=False, null=True)
    description = models.TextField(blank=False, null=True)

    def __str__(self):
        return '{}'.format(self.title)


class Schedule(models.Model):
    class Meta:
        verbose_name = 'Список'
        verbose_name_plural = 'Списки'
    movie = models.ForeignKey(Movie, related_name='schedule', on_delete=models.DO_NOTHING)
    fixture = models.DateTimeField()
    adult_price = models.PositiveIntegerField(blank=False, null=True)
    child_price = models.PositiveIntegerField(blank=True, null=True)
    student_price = models.PositiveIntegerField(blank=False, null=True)

    def __str__(self):
        return '{}'.format(self.movie)
