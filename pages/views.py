from django.views.generic import TemplateView

# Create your views here.


class HomePageView(TemplateView):
    template_name = 'home.html'


class VersionsPageView(TemplateView):
    template_name = 'versions.html'
