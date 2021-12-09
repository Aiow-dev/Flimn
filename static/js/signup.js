document.querySelectorAll(".card-container input").forEach(input => {
    input.placeholder = input.previousElementSibling.innerHTML;

})

document.querySelectorAll(".card-container label").forEach(label => {
    label.style = "display: none";
});
