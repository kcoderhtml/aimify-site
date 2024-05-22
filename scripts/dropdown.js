function menu_toggle() {
    
    let menu = document.getElementById("mobile-only")

    if (menu.style.display === "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }

}