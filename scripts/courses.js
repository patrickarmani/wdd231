const filterButtons = document.querySelectorAll("[data-filter]");
const courseCards = document.querySelectorAll(".subject-two [data-category]");
const coursesContainer = document.querySelector(".subject-two");
const totalCreditsElement = document.querySelector("#total-credits");
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.dataset.filter);

        const selectedFilter = button.dataset.filter;



        if (selectedFilter === "ALL") {
            displayCourses(courses);
        }
        

        if (selectedFilter === "CSE") {
            const filteredCourses = courses.filter((course) => {
                return course.subject === "CSE";
            });

            displayCourses(filteredCourses);
        }

        if (selectedFilter === "WDD") {
            const filteredCourses = courses.filter((course) => {
                return course.subject === "WDD";
            });

            displayCourses(filteredCourses);
        }






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
        
        if (course.completed) {
            courseCard.classList.add("completed");
        }

        coursesContainer.appendChild(courseCard);

    });

    
    // Calculate the total number of credits 
    const totalCredits = courseList.reduce((sum, course) => {
        return sum + course.credits;
    }, 0);

    console.log(`The total credits for course listed above is: ${totalCredits}`);
    
    totalCreditsElement.textContent = `The total credits for course listed above is: ${totalCredits}`;
    
}

displayCourses(courses);