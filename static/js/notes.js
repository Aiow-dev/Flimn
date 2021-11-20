let inputl;
document.addEventListener("DOMContentLoaded", () => {
    inputl = document.getElementById('note-title');
    console.log(inputl)
    inputl.addEventListener('input', autoresize);
})

function autoresize() {
    let size = inputl.scrollWidth
    inputl.style.width = size + 'px';
    inputl.style.transition = "none";
}

$("#create-note-form").submit(function (e) {
    e.preventDefault();
    console.log($(this).serialize());
    $.ajax({
        type: "POST",
        url: $(this).attr("action"),
        data: $(this).serialize(),
    })
    Swal.fire({
        title: 'Сохранено!',
        type: 'success',
        timer: 2000,
        onOpen: function () {
            swal.showLoading()
        }
    }).then(
        function () {
        },
    )
    $("#notesModal").modal("hide");
    autoupdate();
})

function autoupdate() {
    setTimeout(function () {
        location.reload();
    }, 2000)
}

function submit_delete() {
    Swal.fire({
        title: 'Вы действительно хотите удалить заметку?',
        text: "Вы можете вернуть заметку обратно!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Да, удалить!',
        cancelButtonText: 'Отмена',
        reverseButtons: true
    }).then(function (result) {
            if (result.dismiss === Swal.DismissReason.cancel) {
                $("#notesModal").modal("hide");
            }
        }
    );
}

$("#scroll_bottom_button").click(function () {
    window.scrollTo(0, document.body.scrollHeight);
})

$("#scroll_bottom_top").click(function () {
    window.scrollTo(0, -document.body.scrollHeight);
})

function click_note_create() {
    $("#exampleModalLabel").text("Создать заметку")
    $("#save-note-button").prop('className', "btn btn-primary")
    $("#save-note-button").text("Сохранить")
    $("#note-title").val("");
    $("#note-body").val("");
    $("#note-id").val("");
    $("#note-edit-state").val("")
}

function click_note_edit(note_id, note_title, note_body) {
    console.log(note_title)
    $("#exampleModalLabel").text("Редактировать заметку")
    $("#save-note-button").prop('className', "btn btn-primary")
    $("#save-note-button").text("Сохранить")
    $("#note-title").val(note_title);
    $("#note-body").val(note_body);
    $("#note-id").val(note_id);
    $("#note-edit-state").val("Edit");
}

let count_delete = 0

function click_note_delete(note_id, note_title, note_body) {
    $("#exampleModalLabel").text("Удалить заметку")
    $("#save-note-button").prop('className', "btn btn-danger")
    $("#save-note-button").text("Удалить")
    $("#note-title").val(note_title);
    $("#note-body").val(note_body);
    $("#note-id").val(note_id);
    $("#note-id").val(note_id);
    $("#note-edit-state").val("Delete");
    submit_delete();
    count_delete += 1
    if (count_delete === 1) {
        let newCheckbox = $("<div class='custom-control custom-checkbox'></div>")
            .append("<input type='checkbox' class='custom-control-input' value='' id='customCheck1' checked/>")
            .append("<label class='custom-control-label' for='customCheck1'>Разрешить пустыми</label>")

        $('#modal-body').append(newCheckbox);
    }
    if ($("#customCheck1").prop("checked")){
        $("#note-title").removeAttr("required");
        $("#note-body").removeAttr("required");
    }
    else{
        $("#note-title").prop("required", "true");
        $("#note-body").prop("required", "true");
    }
}