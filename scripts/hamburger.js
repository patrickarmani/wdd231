function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.height = "auto";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.height = "0";
}

function toggleNav() {
    const nav = document.getElementById("mySidenav");
    const button = document.getElementById("nav-button");

    if (nav.style.width === "100%") {
        closeNav();
        button.innerHTML = "&#9776;";
        button.setAttribute("aria-expanded", "false");
    } else {
        openNav();
        button.innerHTML = "&times;";
        button.setAttribute("aria-expanded", "true");
    }
}

document.getElementById("nav-button").addEventListener("click", toggleNav);

const desktopBreakpoint = window.matchMedia("(min-width: 768px)");

desktopBreakpoint.addEventListener("change", () => {
    if (!desktopBreakpoint.matches) {
        closeNav();
    }
});