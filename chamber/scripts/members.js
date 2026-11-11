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

    members.forEach((member) => {

        const card = document.createElement("section");
        card.classList.add("member-card");
        
        const companyName = document.createElement("h2");
        companyName.textContent = member.companyName;
        card.appendChild(companyName);
        

        //Show Details
        const companyDetails = document.createElement("div");
        companyDetails.classList.add("company-details");
        card.appendChild(companyDetails);
        const companyImage = document.createElement("img");
        companyImage.src = member.image;
        companyImage.alt = member.companyName; /*add "alt" to image*/
        companyDetails.appendChild(companyImage);
        companyImage.loading = "lazy";

 
            //Show company Info
            const companyInfo = document.createElement("div");
            companyInfo.classList.add("company-info");
            companyDetails.appendChild(companyInfo);

                //Show company address
                const companyAddress = document.createElement("p");
                companyAddress.textContent = member.companyAddresses;
                //card.appendChild(companyAddress);
                companyInfo.appendChild(companyAddress);

                 //Show company phone
                const companyPhone = document.createElement("p");
                companyPhone.textContent = member.phone;
                //card.appendChild(companyPhone);
                companyInfo.appendChild(companyPhone);

                //Show company Website
                const companyWebsite = document.createElement("a");
                companyWebsite.textContent = member.website;
                companyWebsite.href = member.website;
                companyWebsite.target = "_blank";
                companyWebsite.rel = "noopener noreferrer";
                //card.appendChild(companyWebsite);
                companyInfo.appendChild(companyWebsite);

        //Show company Level
        const companyMembership = document.createElement("p");
        companyMembership.textContent = member.membershipLevel;
        card.appendChild(companyMembership);
        companyMembership.classList.add("membership-level");

        companiesContainer.appendChild(card);

    });

}

loadMembers();
    



