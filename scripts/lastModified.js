const date = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
    `Last Modification: ${date.toLocaleString("en-US")}`;