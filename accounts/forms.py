from django.contrib.auth.forms import UserCreationForm, UserChangeForm, AuthenticationForm
from django.contrib.auth.models import User
from django import forms


class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    def __init__(self, *args, **kwargs):
        super(CustomUserCreationForm, self).__init__(*args, **kwargs)
        self.fields['username'].help_text = 'Обязательное поле. \
                                            Не более 150 символов'
        self.fields['email'].help_text = 'Обязательное поле'
        self.fields['password1'].help_text = 'Обязательное поле. Пароль не \
                                                должен быть простым и быть \
                                                похожим на имя пользователя. \
                                                Минимум 8 символов'
        self.fields['password2'].help_text = 'Обязательное поле'

    class Meta(UserCreationForm):
        model = User
        fields = ('username', 'email',)


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = ('username', 'email')


class CustomLoginForm(AuthenticationForm):
    error_messages = {
        'invalid_login': "Неверное имя пользователя или пароль",
        'inactive': "Этот аккаунт не активен",
    }
