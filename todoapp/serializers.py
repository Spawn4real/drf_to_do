from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Project, ToDo


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ['name', 'repository', 'users']


class ToDoSerializer(ModelSerializer):
    class Meta:
        model = ToDo
        fields = ['project', 'text', 'create_at', 'update_at', 'user', 'is_active']



