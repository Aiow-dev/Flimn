"""View of accounts - registration (use CustomUser, CustomUserCreationForm)."""
from django.urls import reverse_lazy
from django.views.generic import CreateView
from .forms import CustomUserCreationForm

# Create your views here.


class SignUpView(CreateView):
    """Sign Up view (use CustomUserCreationForm)."""
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'
