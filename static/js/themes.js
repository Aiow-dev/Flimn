function set_dark_theme() {
    localStorage.setItem("theme", "dark");
    document.body.style.background = "#343a40";
    $(".toggle-mode").css("color", "#343a40");
    $(".navbar").css("background-color", "white").removeClass("navbar-dark").addClass("navbar-light");
}

function set_light_base_theme() {
    localStorage.setItem("theme", "light");
    document.body.style.background = "white";
    $(".toggle-mode").css("color", "white");
    $(".navbar").css("background-color", "#155F7E").removeClass("navbar-light").addClass("navbar-dark");
}

function check_page_theme(){
    let current_page = window.location.pathname;
    console.log(current_page);
    switch(current_page){
        case "/notes/": return "Notes";
        case "/versions/": return "Versions";
        case "/accounts/signup/": return "SignUp";
        case "/accounts/login/": return "LogIn";
        default: return "Homepage";
    }
}


let modeToggle = document.querySelector('.toggle-mode');
modeToggle.addEventListener('click', () => {
    if ($("body").css("background-color") === "rgb(52, 58, 64)") {
        check_page_theme();
    } else {
        set_dark_theme();
    }
});

if (localStorage.getItem("theme") === "dark") {
    set_dark_theme();
} else {
    set_light_theme();
}