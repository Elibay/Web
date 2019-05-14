from rest_framework import serializers
from .models import Cinema, Comment, Movie, Schedule


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('title', 'poster', 'country', 'premiere', 'duration', 'age', 'desc')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('movie', 'authon', 'text', 'date')


class CinemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cinema
        fields = ('title', 'poster', 'address', 'phone', 'description')


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ('movie', 'fixture', 'adult_price', 'child_price', 'student_price')
