
// Dark Mode

const storedTheme = localStorage.getItem('theme')
 
		const getPreferredTheme = () => {
			if (storedTheme) {
				return storedTheme
			};
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
		};

		const setTheme = function (theme) {
			if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.setAttribute('data-bs-theme', 'dark')
			} else {
				document.documentElement.setAttribute('data-bs-theme', theme)
			};
		};

		setTheme(getPreferredTheme())

		window.addEventListener('DOMContentLoaded', () => {
		    var el = document.querySelector('.theme-icon-active');
			if(el != 'undefined' && el != null) {
				const showActiveTheme = theme => {
				const activeThemeIcon = document.querySelector('.theme-icon-active use')
				const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
				const svgOfActiveBtn = btnToActive.querySelector('.mode-switch use').getAttribute('href')

				document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
					element.classList.remove('active')
				});

				btnToActive.classList.add('active')
				activeThemeIcon.setAttribute('href', svgOfActiveBtn)
			};

			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
				if (storedTheme !== 'light' || storedTheme !== 'dark') {
					setTheme(getPreferredTheme())
				}
			});

			showActiveTheme(getPreferredTheme())

			document.querySelectorAll('[data-bs-theme-value]')
				.forEach(toggle => {
					toggle.addEventListener('click', () => {
						const theme = toggle.getAttribute('data-bs-theme-value')
						localStorage.setItem('theme', theme)
						setTheme(theme)
						showActiveTheme(theme)
					});
				});

			};
		});

		// Dark Mode end Here

         // Redirect to the course detail page with the selected courseId
  function redirectToCourseDetail(courseId) {
    // Construct the URL with the courseId as a query parameter
    const courseDetailURL = `course-detail.html?id=${courseId}`;
    window.location.href = courseDetailURL;
  }

        // Retrieve the course ID from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("id");



		
		// Array of Courses

		let courses = [
			{
				id: 1,
				courseImage:"../images/08.jpg",
				courseTitle:"Web Design",
				courseDescription:"Proposal indulged no do sociable he throwing settling.",
				courseRating:4.5,
				courseCurrentPrice: 300,
				courseOldPrice: 250,
				courseCategory:"Web Design",
				courseTotalLectures:15,
				courseTotalHours:12,
				courseTotalMin:54,
				courseLevel: "Beginner",
				courseTotalStrength:5000,
		},
		{
			id: 2,
			courseImage:"../images/08.jpg",
			courseTitle:"Graphic Design",
			courseDescription:"Proposal indulged no do sociable he throwing settling.",
			courseRating:4.5,
			courseCurrentPrice: 300,
			courseOldPrice: 250,
			courseCategory:"Graphic Design",
			courseTotalLectures:15,
			courseTotalHours:12,
			courseTotalMin:54,
			courseLevel: "Beginner",
			courseTotalStrength:5000,
	},

	{
		id: 3,
		courseImage:"../images/08.jpg",
		courseTitle:"Development",
		courseDescription:"Proposal indulged no do sociable he throwing settling.",
		courseRating:4.5,
		courseCurrentPrice: 300,
		courseOldPrice: 250,
		courseCategory:"Development",
		courseTotalLectures:15,
		courseTotalHours:12,
		courseTotalMin:54,
		courseLevel: "Beginner",
		courseTotalStrength:5000,
},

{
	id: 4,
	courseImage:"../images/08.jpg",
	courseTitle:"Development",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCategory:"Development",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 5,
	courseImage:"../images/08.jpg",
	courseTitle:"Marketing",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCategory:"Marketing",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 6,
	courseImage:"../images/08.jpg",
	courseTitle:"Finance",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCategory:"Finance",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 7,
	courseImage:"../images/08.jpg",
	courseTitle:"Finance",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCategory:"Finance",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 8,
	courseImage:"../images/08.jpg",
	courseTitle:"Marketing",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCategory:"Marketing",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 9,
	courseImage:"../images/08.jpg",
	courseTitle:"Graphic Design",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCategory:"Graphic Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},


{
	id: 10,
	courseImage:"../images/08.jpg",
	courseTitle:"Web Design",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCategory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

];



	  function filterCourses(category) {
		let filteredCourses = courses.filter(function (course) {
		  return course.courseCategory === category;
		});
		
		let courseList = "";
		
		filteredCourses.forEach(function (course) {
		  courseList += `
			<div class="col-sm-6 col-lg-4 col-xl-3 course" data-course-id="id=${course.id}">
			  <div class="card shadow h-100">
				<a class="course-link" href="course-detail.html" >
				  <img src="${course.courseImage}" class="card-img-top" alt="${course.courseCategory}">
				</a>
				<div class="card-body pb-0">
				  <div class="d-flex justify-content-between mb-2">
					<a href="#"  class="badge bg-success bg-opacity-10 text-success">${course.courseLevel}</a>
					<i class="far fa-bookmark"></i>
				  </div>
				  <h5 class="card-title fw-normal" ><a class="course-link" href="course-detail.html?${course.id}" ${course.courseTitle}">${course.courseTitle}</a></h5>
				  <p class="text-truncate-2 mb-2">${course.courseDescription}</p>
				  <ul class="list-inline mb-0">
					${generateRatingStars(course.courseRating)}
				  </ul>
				</div>
				<div class="card-footer pt-0 pb-3">
				  <hr>
				  <div class="d-flex justify-content-between">
					<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>${course.courseTotalHours + "h"} ${course.courseTotalMin + "m"}</span>
					<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>${course.courseTotalLectures + " Lectures"}</span>
				  </div>
                  
				</div>
			  </div>
			</div>
		  `;
		});
		
        let courseContainer = document.getElementById("courseContainer");
        courseContainer.innerHTML = courseList;
      
        // Attach event listeners to course title links
        let courseLinks = document.getElementsByClassName("course-link");
        for (let i = 0; i < courseLinks.length; i++) {
          courseLinks[i].addEventListener("click", redirectToCourseDetail);
        }
      
        document.addEventListener('DOMContentLoaded', function() {
            const courseLinks = document.querySelectorAll('.course-link');
            courseLinks.forEach(function(link) {
              link.addEventListener('click', redirectToCourseDetail);
            });
          });
      }

	  document.addEventListener("DOMContentLoaded", function() {

		filterCourses("Web Design");
	  });
      



	
	function generateRatingStars(rating) {
		let ratingHtml = "";
		const fullStar = '<i class="fas fa-star text-warning"></i>';
		const halfStar = '<i class="fas fa-star-half-alt text-warning"></i>';
		const emptyStar = '<i class="far fa-star text-warning"></i>';
	  
		// Calculate the number of full stars
		const fullStars = Math.floor(rating);
		// Check if there's a half star
		const hasHalfStar = rating - fullStars >= 0.5;
	  
		// Generate the full stars
		for (let i = 0; i < fullStars; i++) {
		  ratingHtml += `<li class="list-inline-item me-0 small">${fullStar}</li>`;
		}
	  
		// Generate the half star if applicable
		if (hasHalfStar) {
		  ratingHtml += `<li class="list-inline-item me-0 small">${halfStar}</li>`;
		}
	  
		// Generate the empty stars to fill the remaining space
		const remainingStars = 5 - Math.ceil(rating);
		for (let i = 0; i < remainingStars; i++) {
		  ratingHtml += `<li class="list-inline-item me-0 small">${emptyStar}</li>`;
		}
	  
		return ratingHtml;
	  };
	

	
	  
	  // Function to update bookmark state for the selected category
	  function updateBookmarkState(category) {
	//   Heart Icon function start here
	const bookmarkIcons = document.getElementsByClassName('fa-bookmark');

  // Loop through each heart icon and update the bookmark state
  for (let i = 0; i < bookmarkIcons.length; i++) {
    const bookmarkIcon = bookmarkIcons[i];
    const courseId = courses[i].id;

    const storedState = localStorage.getItem(`bookmarkState-${courseId}`);

    // Set the initial state of the heart icon based on the stored state (if any)
    if (storedState === 'true') {
      bookmarkIcon.classList.add('text-warning');
    } else {
      bookmarkIcon.classList.remove('text-warning');
    }

    // Add event listener to update bookmark state when clicked
    bookmarkIcon.addEventListener('click', function() {
      bookmarkIcon.classList.toggle('text-warning');
      const currentState = bookmarkIcon.classList.contains('text-warning');
      localStorage.setItem(`bookmarkState-${courseId}`, currentState);
    });
  }
}

// Function to handle category button click event
function handleCategoryClick(category) {
  // ... your existing code to filter and display courses ...

  // Update the selected category in local storage
  localStorage.setItem('selectedCategory', category);

  // Update the bookmark state for the selected category
  updateBookmarkState(category);
}
	  
	//   End Here




// DATA RETREVING OF THE COURSES TO COURSE_DETAIL.HTML



