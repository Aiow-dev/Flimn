function is_dark_theme() {
    return localStorage.getItem("theme") === "dark" ? true : false;
}

function set_dark_base_theme() {
    document.body.style.background = "#343a40";
    $(".toggle-mode").css("color", "#343a40");
    $(".navbar").css("background-color", "white").removeClass("navbar-dark").addClass("navbar-light");
    $("#login-navbar").removeClass("btn-light").addClass("btn-dark");
    $("#login-navbar").css("color", "white");
    $("#signup-navbar").removeClass("btn-light").addClass("btn-dark");
    $("#signup-navbar").css("color", "white");
}

function set_light_base_theme() {
    document.body.style.background = "white";
    $(".toggle-mode").css("color", "white");
    $(".navbar").css("background-color", "#155F7E").removeClass("navbar-light").addClass("navbar-dark");
    $("#login-navbar").removeClass("btn-dark").addClass("btn-light");
    $("#login-navbar").css("color", "#155F7E");
    $("#signup-navbar").removeClass("btn-dark").addClass("btn-light");
    $("#signup-navbar").css("color", "#155F7E");
}

function set_base_theme() {
    is_dark_theme() ? set_dark_base_theme() : set_light_base_theme();
}

function set_light_notes_theme() {
    set_light_base_theme();
    $(".badge").removeClass("bg-dark").addClass("bg-light").addClass("text-dark");
    $(".button-list-container").removeClass("btn-light").addClass("btn-dark");
    $(".card").removeClass("bg-secondary").addClass("bg-info");
    $(".note-edit").css("background-color", "#00C3E5").css("color", "white");
    $(".note-delete").css("background-color", "#00C3E5").css("color", "white");
    $(".btn-mg").css("background-color", "#17a2b8").css("color", "white");
}

function set_dark_notes_theme() {
    set_dark_base_theme();
    $(".badge").removeClass("bg-light").removeClass("text-dark").addClass("bg-dark");
    $(".button-list-container").removeClass("btn-dark").addClass("btn-light");
    $(".card").removeClass("bg-info").addClass("bg-secondary");
    $(".note-edit").css("background-color", "#eef0f1").css("color", "#6c757d");
    $(".note-delete").css("background-color", "#eef0f1").css("color", "#6c757d");
    $(".btn-mg").css("background-color", "white").css("color", "#6c757d");
}

function set_notes_theme() {
    console.log('notes theme');
    is_dark_theme() ? set_dark_notes_theme() : set_light_notes_theme();
}

function set_light_versions_theme(){
    set_light_base_theme();
    $(".card").removeClass("bg-secondary").addClass("bg-light");
    $(".card-header").css("background-color", "#00617e").removeClass("text-dark").addClass("text-white");
    $(".card-title").css("color", "black");
}

function set_dark_versions_theme(){
    set_dark_base_theme();
    $(".card").removeClass("bg-light").addClass("bg-secondary");
    $(".card-header").css("background-color", "white").removeClass("text-white").addClass("text-dark");
    $(".card-title").css("color", "white");
}

function set_versions_theme(){
    is_dark_theme() ? set_dark_versions_theme() : set_light_versions_theme();
}

function set_light_login_signup_theme(){
    set_light_base_theme();
    $(".card-container").css("background-color", "white");
    $(".card-container h2").css("color", "black");
    $(".card-container .helptext").css("color", "black");
    $(".form_desc").css("color", "white");
}

function set_dark_login_signup_theme(){
    set_dark_base_theme();
    $(".card-container").css("background-color", "#343a40");
    $(".card-container h2").css("color", "white");
    $(".card-container .helptext").css("color", "white");
    $(".form_desc").css("color", "#343a40");
}

function set_login_signup_theme(){
    is_dark_theme() ? set_dark_login_signup_theme() : set_light_login_signup_theme();
}

function check_page_theme() {
    let current_page = window.location.pathname;
    console.log(current_page);
    switch (current_page) {
        case "/notes/": return set_notes_theme();
        case "/versions/": return set_versions_theme();
        case "/accounts/signup/": return set_login_signup_theme();
        case "/accounts/login/": return set_login_signup_theme();
        default: set_base_theme();
    }
}