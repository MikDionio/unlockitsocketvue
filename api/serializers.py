from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Student


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Student
        fields = ('rfid_number', 'student_number', 'name', 'balance', 'is_using',
        'last_login', 'last_logout', 'last_balance_change', 'url')

class StudentSimpleSerializer(serializers.ModelSerializer):
     class Meta:
        model = Student
        fields = ('rfid_number', 'student_number', 'name', 'balance', 'is_using')