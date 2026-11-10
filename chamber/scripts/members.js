const memberViewButtons = document.querySelectorAll("button[data-view]");
const companiesContainer = document.querySelector("#companies");

memberViewButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.dataset.view);

        const selectedView = button.dataset.view;

        if (selectedView === "GRID") {
            

            companiesContainer.classList.add("grid");

            companiesContainer.classList.remove("list");
        }

        else if (selectedView === "LIST") {

            companiesContainer.classList.add("list");

            companiesContainer.classList.remove("grid");
        }
    });

});

    async function loadMembers() {

        const response = await fetch("data/members.json");
        const members = await response.json();

        console.log(members);
}

loadMembers();
    

members.forEach((item) => {
   
});