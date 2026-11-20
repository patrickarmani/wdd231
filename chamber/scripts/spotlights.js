async function featureMembers() {
    try {
        const highlights = await fetch("data/members.json");
        const data = await highlights.json();
        const eligibleMembers = data.filter(member => member.membershipLevel >= 2);

        Math.floor(Math.random() * eligibleMembers.length)
        const randomIndex = Math.floor(Math.random() * eligibleMembers.length);

        console.log(eligibleMembers);

    } catch (error) {
        console.error("Error fetching company:", error);
    }
}

featureMembers();