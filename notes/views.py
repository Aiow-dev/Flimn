import datetime

from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from .models import Note


# Create your views here.


@login_required
def note_list(request):
    if request.method == 'POST':
        data = request.POST
        note = Note(title=data['note-title'], body=data['note-body'], author=request.user)
        note.save()
    notes = Note.objects.filter(author=request.user).order_by('date')
    context = {'notes': notes}
    return render(request, 'note_list.html', context)
