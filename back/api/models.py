import datetime

from django.contrib.auth.models import User
from django.db import models


class Movie(models.Model):
    class Meta:
        verbose_name = 'Фильм'
        verbose_name_plural = 'Фильмы'
    title = models.CharField(max_length=200, blank=False, null=True)
    poster = models.CharField(max_length=200, blank=True, null=True)
    genre = models.CharField(max_length=200, blank=True, null=True)
    country = models.CharField(max_length=200, blank=True)
    # premiere = models.CharField(max_length=200, blank=True)
    premiere = models.DateField(blank=True)
    duration = models.PositiveIntegerField(blank=False, null=True)
    age = models.PositiveIntegerField(default=18)
    description = models.TextField(blank=False, null=True)

    def __str__(self):
        return 'Title: {}\n'.format(self.title)


class Comment(models.Model):
    class Meta:
        verbose_name = 'Коммент'
        verbose_name_plural = 'Комменты'
    movie = models.ForeignKey(Movie, related_name='comments', on_delete=models.DO_NOTHING)
    created_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)
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
        verbose_name = 'Расписание'
        verbose_name_plural = 'Расписание'
    movie = models.ForeignKey(Movie, on_delete=models.DO_NOTHING)
    cinema = models.ForeignKey(Cinema, on_delete=models.DO_NOTHING)
    fixture = models.DateTimeField(blank=False)
    adult_price = models.PositiveIntegerField(blank=False, null=True)
    child_price = models.PositiveIntegerField(blank=True, null=True)
    student_price = models.PositiveIntegerField(blank=False, null=True)

    def __str__(self):
        return '{}'.format(self.movie)


class Hall(models.Model):
    row = models.PositiveIntegerField(blank=False)
    column = models.PositiveIntegerField(blank=False)
    schedule = models.ForeignKey(Schedule, on_delete=models.DO_NOTHING)
    is_reserved = models.BooleanField(default=False)
