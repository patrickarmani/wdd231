function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
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