let darkModeButton = document.querySelector('div.dark-mode');
darkModeButton.addEventListener('click', darkMode);

function darkMode(e) {
    let body = document.querySelector("body");

    
    if (body.classList == "dark-mode-active") {
        body.classList.remove("dark-mode-active");
    }
    else {
        body.classList.add("dark-mode-active");
    }

}


