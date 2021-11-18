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

$(".note-delete").click(function () {
    Swal.fire({
        title: 'Вы действительно хотите удалить заметку?',
        text: "Вы можете вернуть заметку обратно!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Да, удалить!',
    }).then(function (result) {
            if (result.value) {
                Swal.fire({
                    title: 'Удалено!',
                    type: 'success',
                    timer: 2000,
                    onOpen: function () {
                        swal.showLoading()
                    }
                }).then(
                    function () {
                    },
                )
                autoupdate();
            }
        }
    );
})

$("#scroll_bottom_button").click(function () {
    window.scrollTo(0, document.body.scrollHeight);
})

$("#scroll_bottom_top").click(function () {
    window.scrollTo(0, -document.body.scrollHeight);
})