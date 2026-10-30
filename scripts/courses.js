const filterButtons = document.querySelectorAll("[data-filter]");
const courseCards = document.querySelectorAll(".subject-two [data-category]");
const coursesContainer = document.querySelector(".subject-two");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.dataset.filter);

        const selectedFilter = button.dataset.filter;

        courseCards.forEach((course) => {
            console.log(course.dataset.category);
        });

        console.log(courses);


    });
}); 

function displayCourses(courseList) {
    coursesContainer.replaceChildren();

    courseList.forEach((course) => {
        console.log(`${course.subject} ${course.number}`);

        const courseCard = document.createElement("div");
        courseCard.textContent = `${course.subject} ${course.number}`;
        courseCard.dataset.category = course.subject;
        
        coursesContainer.appendChild(courseCard);
    });
}

displayCourses(courses);