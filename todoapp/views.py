from rest_framework.pagination import LimitOffsetPagination
from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet
from todoapp.models import Project, ToDo
from todoapp.serializers import ToDoSerializer, ProjectSerializer


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    renderer_classes = [JSONRenderer]
    pagination_class = ProjectLimitOffsetPagination


    def get_queryset(self):
        name = self.request.query_params.get('name', '')
        projects = Project.objects.all
        if name:
            projects = projects.filter(name__contains=name)

        return projects


class ToDoViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    pagination_class = ToDoLimitOffsetPagination

    filterset_fields = ['project_id']

