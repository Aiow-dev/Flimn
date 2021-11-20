from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from .models import Note


# Create your views here.


@login_required
def note_list(request):
    if request.method != 'POST':
        notes = Note.objects.filter(author=request.user).order_by('date')
        context = {'notes': notes}
        return render(request, 'note_list.html', context)

    data = request.POST
    if data['note-edit-state'] == 'Edit':
        note = Note.objects.get(id=int(data['note-id']))
        note.title = data['note-title']
        note.body = data['note-body']
        note.save()
    elif data['note-edit-state'] == 'Delete':
        note = Note.objects.get(pk=int(data['note-id']))
        note.delete()
    else:
        note = Note(title=data['note-title'], body=data['note-body'], author=request.user)
        note.save()
