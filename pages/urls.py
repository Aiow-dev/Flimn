from django.urls import path
from .views import HomePageView, VersionsPageView

urlpatterns = [
    path('versions/', VersionsPageView.as_view(), name='versions'),
    path('', HomePageView.as_view(), name='home'),
]
