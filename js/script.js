
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


		// Array of Courses

		let courses = [
			{
				id: 1,
				courseImage:"../images/08.jpg",
				courseTitle:"Sketch from A to Z: for app designer",
				courseDescription:"Proposal indulged no do sociable he throwing settling.",
				courseRating:4.5,
				courseCurrentPrice: 300,
				courseOldPrice: 250,
				courseCatagory:"Web Design",
				courseTotalLectures:15,
				courseTotalHours:12,
				courseTotalMin:54,
				courseLevel: "Beginner",
				courseTotalStrength:5000,
		},
		{
			id: 1,
			courseImage:"../images/08.jpg",
			courseTitle:"Sketch from A to Z: for app designer",
			courseDescription:"Proposal indulged no do sociable he throwing settling.",
			courseRating:4.5,
			courseCurrentPrice: 300,
			courseOldPrice: 250,
			courseCatagory:"Web Design",
			courseTotalLectures:15,
			courseTotalHours:12,
			courseTotalMin:54,
			courseLevel: "Beginner",
			courseTotalStrength:5000,
	},

	{
		id: 1,
		courseImage:"../images/08.jpg",
		courseTitle:"Sketch from A to Z: for app designer",
		courseDescription:"Proposal indulged no do sociable he throwing settling.",
		courseRating:4.5,
		courseCurrentPrice: 300,
		courseOldPrice: 250,
		courseCatagory:"Web Design",
		courseTotalLectures:15,
		courseTotalHours:12,
		courseTotalMin:54,
		courseLevel: "Beginner",
		courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

{
	id: 1,
	courseImage:"../images/08.jpg",
	courseTitle:"Sketch from A to Z: for app designer",
	courseDescription:"Proposal indulged no do sociable he throwing settling.",
	courseRating:4.5,
	courseCurrentPrice: 300,
	courseOldPrice: 250,
	courseCatagory:"Web Design",
	courseTotalLectures:15,
	courseTotalHours:12,
	courseTotalMin:54,
	courseLevel: "Beginner",
	courseTotalStrength:5000,
},

	
	];

let courseList = "";

courses.forEach(function(course) {
	courseList += `
	<div class="col-sm-6 col-lg-4 col-xl-3">
		<div class="card shadow h-100">
			
		

			<a href="course-detail.html?id=${course.id}">
			<img src="${course.courseImage}" class="card-img-top" alt="${course.courseCatagory}"></a>
			<div class="card-body pb-0">
				
			

				<div class="d-flex justify-content-between mb-2">
					<a href="#" class="badge bg-success bg-opacity-10 text-success">${course.courseLevel}</a>
					<i  class=" heart-icon fas fa-heart"></i>
				</div>
				
				

				<h5 class="card-title fw-normal"><a href="#">${course.courseTitle}</a></h5>
				<p class="text-truncate-2 mb-2">${course.courseDescription}</p>
				
				
				<ul class="list-inline mb-0">
				${generateRatingStars(course.courseRating)} ${course.courseRating + "/5.0"}
					

				</ul>
			</div>

			

			<div class="card-footer pt-0 pb-3">
				<hr>
				<div class="d-flex justify-content-between">
					<span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>${course.courseTotalHours + "h"} ${course.courseTotalMin + "m"} </span>
					<span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>${course.courseTotalLectures + " Lectures"}</span>
				</div>
			</div>
		</div>
	</div>
	`; });

	let courseContainer = document.getElementById("courseContainer");
	courseContainer.innerHTML = courseList;

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

	  const heartIcons = document.getElementsByClassName('heart-icon');

	  // Loop through each heart icon and add the event listener
	  for (let i = 0; i < heartIcons.length; i++) {
		const heartIcon = heartIcons[i];
	  
		heartIcon.addEventListener('click', function() {
		  // Toggle the 'text-danger' class to change the color for the clicked heart icon
		  this.classList.toggle('text-danger');
		});
	  }


	//   End Here

	// Google OAuth
	// function onSignIn(googleUser) {
    //     // Handle the sign-in response
    //     var idToken = googleUser.getAuthResponse().id_token;
    //     // Send the ID token to your server for verification
    // }

    // function initGoogleSignIn() {
    //     gapi.load('auth2', function() {
    //         gapi.auth2.init({
    //             client_id: '257634213039-7ghgjilg4ptcggsvca3gu5aisnl0s0an.apps.googleusercontent.com',
    //         }).then(function() {
    //             var auth2 = gapi.auth2.getAuthInstance();
    //             auth2.attachClickHandler('google-signin-button', {}, onSignIn, function(error) {
    //                 console.log('Sign-in error', error);
    //             });
    //         });
    //     });
    // }

    // // Call the initialization function
    // initGoogleSignIn();
	// document.querySelector('button').addEventListener('click', function() {
	// 	google.accounts.id.initialize({
	// 	  client_id: 'YOUR_CLIENT_ID',
	// 	  ux_mode: 'redirect',
	// 	  redirect_uri: 'YOUR_LOGIN_ENDPOINT_URL',
	// 	});
	// 	google.accounts.id.prompt();
	//   });
	  