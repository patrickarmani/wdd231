
"use strict";

const navButton = document.getElementById("nav-button");
const nav = document.getElementById("mySidenav");

function toggleNav() {
    const isOpen = navButton.classList.toggle("open");

    nav.classList.toggle("open", isOpen);

    navButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
}

navButton.addEventListener("click", toggleNav);
