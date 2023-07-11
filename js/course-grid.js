var courseGridContainer = document.getElementById('courseGridContainer');
var filteredCourses = courses; // Initially, all courses are displayed
// Global variables for pagination
var currentPage = 1;
var coursesPerPage = 12;

// Function to generate the course card HTML for a given course
function generateCourseCard(course) {
  // Generate the HTML code for the course card
  var cardHTML = `
    <!-- Card item START -->
    <div class="col-sm-6 col-xl-4 course" data-course-id="${course.id}">
      <div class="card shadow h-100">
        <!-- Image -->
        <a class="course-link" href="course-detail.html?id=${course.id}">
        <img src="${course.courseImage}" class="card-img-top" alt="${course.courseTitle}">
        <div class="card-body pb-0">
        </a>
          <!-- Badge and favorite -->
          <div class="d-flex justify-content-between mb-2">

            <a href="course-detail.html?id=${course.id}" class="badge bg-success bg-opacity-10 text-success">${course.courseLevel}</a>
            <i class="heart-icon far fa-heart" data-course-id="${course.id}"></i>
          </div>
          <!-- Title -->
          <h5 class="card-title">
         

            <a class="course-link" href="course-detail.html?id=${course.id}">${course.courseTitle}</a>
          </h5>
          <a class="course-link " href="course-detail.html?id=${course.id}">
          <p class="mb-2 grid-txt">${course.courseDescription}</p>
          </a>
          <!-- Rating star -->
          <ul class="list-inline mb-0">
            ${generateRatingStars(course.courseRating)}
          </ul>
        </div>
        <!-- Card footer -->
        <div class="card-footer pt-0 pb-3">
          <hr>
          <div class="d-flex justify-content-between">
            <span class="h6 fw-light mb-0">
              <i class="far fa-clock text-danger me-2"></i>
              ${course.courseTotalHours + "h"} ${course.courseTotalMin + "m"}
            </span>
            <span class="h6 fw-light mb-0">
              <i class="fas fa-table text-orange me-2"></i>
              ${course.courseTotalLectures + " Lectures"}
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Card item END -->
  `;

  return cardHTML;
}

// Function to filter the courses based on category
// Function to filter the courses based on category
function filterCourses(category) {
  if (category === 'all') {
    // Show all courses
    filteredCourses = courses;
  } else {
    // Filter courses by category
    filteredCourses = courses.filter(function (course) {
      return course.courseCategory.toLowerCase() === category.toLowerCase();
    });
  }

  // Reset the current page to 1
  currentPage = 1;

  // Save the current page and filter category to local storage
  localStorage.setItem('currentPage', currentPage);
  localStorage.setItem('currentCategory', category);

  // Update the displayed courses and pagination links
  updateCourseGridAndPagination();
}


// Function to update the course grid with filtered courses


// Function to update the course grid with filtered courses
function updateCourseGrid() {
  // Clear the course grid
  courseGridContainer.innerHTML = '';

   // Calculate the index of the first and last course for the current page
   var indexOfLastCourse = currentPage * coursesPerPage;
   var indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
 
   // Get the courses for the current page
   var coursesForCurrentPage = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Generate the course cards for the filtered courses
  coursesForCurrentPage.forEach(function (course) {
    var cardItem = generateCourseCard(course);
    courseGridContainer.innerHTML += cardItem;
  });

  // Update heart icon states
  updateHeartIconState();

}
// Function to handle page navigation
// Function to handle page navigation
// Function to handle page navigation
function goToPage(pageNumber) {
  if (pageNumber < 1 || pageNumber > Math.ceil(filteredCourses.length / coursesPerPage)) {
    return; // Invalid page number
  }

  // Update the current page
  currentPage = pageNumber;

  // Save the current page to local storage
  localStorage.setItem('currentPage', currentPage);

  // Refresh the course grid and pagination
  updateCourseGridAndPagination();
}



// Function to generate pagination links
// Function to generate pagination links
function generatePaginationLinks() {
  // Calculate the total number of pages
  var totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  // Generate the pagination links HTML
  var paginationHTML = '';

  // Previous page link
  if (currentPage > 1) {
    paginationHTML += `<li class="page-item"><a class="page-link" onclick="goToPage(${currentPage - 1})"><i class="fas fa-angle-double-left"></i></a></li>`;
  }

  // Page links
  for (var i = 1; i <= totalPages; i++) {
    paginationHTML += `<li class="page-item ${i === currentPage ? 'active' : ''}"><a class="page-link" onclick="goToPage(${i})">${i}</a></li>`;
  }

  // Next page link
  if (currentPage < totalPages) {
    paginationHTML += `<li class="page-item"><a class="page-link" onclick="goToPage(${currentPage + 1})"><i class="fas fa-angle-double-right"></i></a></li>`;
  }

  return paginationHTML;
}



// Update the displayed courses and pagination links
// Update the displayed courses and pagination links
function updateCourseGridAndPagination() {
  // Restore the current page from local storage
  var storedPage = localStorage.getItem('currentPage');
  if (storedPage) {
    currentPage = parseInt(storedPage, 10);
  }



  updateCourseGrid();


  // Generate and update the pagination links
  var paginationLinksHTML = generatePaginationLinks();
  var paginationContainer = document.getElementById('paginationContainer');
  paginationContainer.innerHTML = paginationLinksHTML;
  
}


// Initial course grid and pagination update
updateCourseGridAndPagination();







// Function to update heart icon states
function updateHeartIconState() {
  const heartIcons = document.getElementsByClassName('heart-icon');

  for (let i = 0; i < heartIcons.length; i++) {
    const heartIcon = heartIcons[i];
    const courseId = heartIcon.dataset.courseId;

    const storedState = localStorage.getItem(`heartIconState-${courseId}`);
    if (storedState === 'true') {
      heartIcon.classList.add('fas', 'text-danger');
    } else {
      heartIcon.classList.remove('fas', 'text-danger');
    }

    heartIcon.addEventListener('click', function () {
      this.classList.toggle('fas');
      this.classList.toggle('text-danger');

      const currentState = this.classList.contains('fas');
      localStorage.setItem(`heartIconState-${courseId}`, currentState);
    });
  }
}








// Get the parent element where you want to add the HTML code
const parentElement = document.querySelector('.parent-element');

// Create a new div element
parentElement.innerHTML = `
<form >
<!-- Category START -->
<div class="card card-body shadow p-4 mb-4">
    <!-- Title -->
    <h4 class="mb-3">Category</h4>
    <!-- Category group -->
    <div class="col-12">
      <!-- Checkbox -->
      <div class="d-flex justify-content-between align-items-center">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" checked="checked" name="category" id="flexCheckDefault9" onchange="handleCheckboxChange(event)" onclick="filterCourses('all')">
          <label class="form-check-label" for="flexCheckDefault9">All</label>
        </div>
        <span class="small" id="courseCount">(0)</span>
      </div>
      <!-- Checkbox -->
      <div class="d-flex justify-content-between align-items-center filter-btn" onclick="filterCourses('Development')">
        <div class="form-check">
          <input class="form-check-input " type="checkbox" value="" name="category" id="flexCheckDefault10" onchange="handleCheckboxChange(event)" onclick="filterCourses('Development')">
          <label class="form-check-label" for="flexCheckDefault10">Development</label>
        </div>
        <span class="small" id="courseCount">(0)</span>
        </div>
      <!-- Checkbox -->
      <div class="d-flex justify-content-between align-items-center filter-btn" onclick="filterCourses('Web Design')">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" name="category" id="flexCheckDefault11" onchange="handleCheckboxChange(event)" onclick="filterCourses('Web Design')">
          <label class="form-check-label" for="flexCheckDefault11">Design</label>
        </div>
        <span class="small" id="courseCount">(0)</span>
      </div>
      <!-- Checkbox -->
      <div class="d-flex justify-content-between align-items-center filter-btn" onclick="filterCourses('Accounting')">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" name="category" id="flexCheckDefault12" onchange="handleCheckboxChange(event)" onclick="filterCourses('Accounting')">
          <label class="form-check-label" for="flexCheckDefault12">Accounting</label>
        </div>
        <span class="small" id="courseCount">(0)</span>
      </div>
      <!-- Checkbox -->
      <div class="d-flex justify-content-between align-items-center filter-btn" onclick="filterCourses('Translation')">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" name="category" id="flexCheckDefault17" onchange="handleCheckboxChange(event)" onclick="filterCourses('Translation')">
          <label class="form-check-label" for="flexCheckDefault17">Translation</label>
        </div>
        <span class="small" id="courseCount">(0)</span>
      </div>
      <!-- Checkbox -->
      <div class="d-flex justify-content-between align-items-center filter-btn" onclick="filterCourses('Finance')">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" name="category" id="flexCheckDefault13" onchange="handleCheckboxChange(event)" onclick="filterCourses('Finance')">
          <label class="form-check-label" for="flexCheckDefault13">Finance</label>
        </div>
        <span class="small" id="courseCount">(0)</span>
      </div>
      <!-- Checkbox -->
      <div class="d-flex justify-content-between align-items-center" onclick="filterCourses('Legal')">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" name="category" name="category" id="flexCheckDefault14" onchange="handleCheckboxChange(event)" onclick="filterCourses('Legal')">
          <label class="form-check-label" for="flexCheckDefault14">Legal</label>
        </div>
        <span class="small" id="courseCount">(0)</span>
        </div>
      <!-- Checkbox -->
      <div class="d-flex justify-content-between align-items-center" onclick="filterCourses('Photography')">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" name="category" id="flexCheckDefault15" onchange="handleCheckboxChange(event)" onclick="filterCourses('Photography')">
          <label class="form-check-label" for="flexCheckDefault15">Photography</label>
        </div>
        <span class="small" id="courseCount">(0)</span>
      </div>
      <!-- Collapse body -->
      <div class="collapse multi-collapse" id="multiCollapseExample1">
        <div class="card card-body p-0">
          <!-- Checkbox -->
          <div class="d-flex justify-content-between align-items-center" onclick="filterCourses('Writing')">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" name="category" id="flexCheckDefault16" onchange="handleCheckboxChange(event)" onclick="filterCourses('Writing')"> 
              <label class="form-check-label" for="flexCheckDefault16">Writing</label>
            </div>
            <span class="small" id="courseCount">(0)</span>
            </div>
          <!-- Checkbox -->
          <div class="d-flex justify-content-between align-items-center filter-btn" onclick="filterCourses('Marketing')">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" name="category" id="flexCheckDefault18" onchange="handleCheckboxChange(event)" onclick="filterCourses('Marketing')">
              <label class="form-check-label" for="flexCheckDefault18">Marketing</label>
            </div>
            <span class="small" id="courseCount">(0)</span>
            </div>
        </div>
      </div>
      <!-- Collapse button -->
      <a class="p-0 mb-0 mt-2 btn-more d-flex align-items-center" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
        See <span class="see-more ms-1">more</span>
        <span class="see-less ms-1">less</span>
        <i class="fas fa-angle-down ms-2"></i>
      </a>
    </div>
  </div>
  <!-- Price START -->
  <div class="card card-body shadow p-4 mb-4">
      <!-- Title -->
      <h4 class="mb-3">Price Level</h4>
      <ul class="list-inline mb-0">
          <!-- Rent -->
          <li class="list-inline-item">
              <input type="radio" class="btn-check" name="options" id="option1">
              <label class="btn btn-light btn-primary-soft-check" for="option1">All</label>
          </li>
          <!-- Sale -->
          <li class="list-inline-item">
              <input type="radio" class="btn-check" name="options" id="option2">
              <label class="btn btn-light btn-primary-soft-check" for="option2">Free</label>
          </li>
          <!-- Buy -->
          <li class="list-inline-item">
              <input type="radio" class="btn-check" name="options" id="option3">
              <label class="btn btn-light btn-primary-soft-check" for="option3">Paid</label>
          </li>
      </ul>
  </div>
  <!-- Price END -->
  <!-- Skill level START -->
  <div class="card card-body shadow p-4 mb-4">
      <!-- Title -->
      <h4 class="mb-3">Skill level</h4>
      <ul class="list-inline mb-0">
          <!-- Item -->
          <li class="list-inline-item mb-2">
              <input type="checkbox" class="btn-check" id="btn-check-12">
              <label class="btn btn-light btn-primary-soft-check" for="btn-check-12">All levels</label>
          </li>
          <!-- Item -->
          <li class="list-inline-item mb-2">
              <input type="checkbox" class="btn-check" id="btn-check-9">
              <label class="btn btn-light btn-primary-soft-check" for="btn-check-9">Beginner</label>
          </li>
          <!-- Item -->
          <li class="list-inline-item mb-2">
              <input type="checkbox" class="btn-check" id="btn-check-10">
              <label class="btn btn-light btn-primary-soft-check" for="btn-check-10">Intermediate</label>
          </li>
          <!-- Item -->
          <li class="list-inline-item mb-2">
              <input type="checkbox" class="btn-check" id="btn-check-11">
              <label class="btn btn-light btn-primary-soft-check" for="btn-check-11">Advanced</label>
          </li>
      </ul>
  </div>
  <!-- Skill level END -->
  <!-- Language START -->
  <div class="card card-body shadow p-4 mb-4">
      <!-- Title -->
      <h4 class="mb-3">Language</h4>
      <ul class="list-inline mb-0 g-3">
          <!-- Item -->
          <li class="list-inline-item mb-2">
              <input type="checkbox" class="btn-check" id="btn-check-2">
              <label class="btn btn-light btn-primary-soft-check" for="btn-check-2">English</label>
          </li>
          <!-- Item -->
          <li class="list-inline-item mb-2">
              <input type="checkbox" class="btn-check" id="btn-check-3">
              <label class="btn btn-light btn-primary-soft-check" for="btn-check-3">Francas</label>
          </li>
          <!-- Item -->
          <li class="list-inline-item mb-2">
              <input type="checkbox" class="btn-check" id="btn-check-4">
              <label class="btn btn-light btn-primary-soft-check" for="btn-check-4">Hindi</label>
          </li>
          <!-- Item -->
          <li class="list-inline-item mb-2">
              <input type="checkbox" class="btn-check" id="btn-check-5">
              <label class="btn btn-light btn-primary-soft-check" for="btn-check-5">Russian</label>
          </li>
          <!-- Item -->
          <li class="list-inline-item mb-2">
              <input type="checkbox" class="btn-check" id="btn-check-6">
              <label class="btn btn-light btn-primary-soft-check" for="btn-check-6">Spanish</label>
          </li>
          <!-- Item -->
          <li class="list-inline-item mb-2">
              <input type="checkbox" class="btn-check" id="btn-check-7">
              <label class="btn btn-light btn-primary-soft-check" for="btn-check-7">Bengali</label>
          </li>
          <!-- Item -->
          <li class="list-inline-item mb-2">
              <input type="checkbox" class="btn-check" id="btn-check-8">
              <label class="btn btn-light btn-primary-soft-check" for="btn-check-8">Portuguese</label>
          </li>
      </ul>
  </div>
  <!-- Language END -->
</form>
  `;

// Append the newDiv to the parent element
parentElement.appendChild(parentElement);


/// Calculate the length of the "Finance" category
const categoryLength = courses.filter(course => course.courseCategory === category).length;

// Update the course count element
const courseCountElement = document.getElementById('courseCount');
courseCountElement.textContent = `(${categoryLength})`;


;

// End Here


// To Select only one checkbok for filtering the courses at a time
// Define the handleCheckboxChange function
// Function to handle checkbox change
function handleCheckboxChange(event) {
  const checkboxes = document.querySelectorAll('input[name="category"]');

  // Uncheck all checkboxes except the one that was just checked
  checkboxes.forEach(checkbox => {
    if (checkbox !== event.target) {
      checkbox.checked = false;
    }
  });

  // Save the state of the checkbox in local storage
 localStorage.setItem('selectedCategory', event.target.value);
}

// Retrieve the selected category from local storage
const selectedCategory = localStorage.getItem('selectedCategory');

// Attach event listener to checkboxes
const checkboxes = document.querySelectorAll('input[name="category"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', handleCheckboxChange);

  // Set the initial state of the checkboxes based on the stored selected category
  if (checkbox.value === selectedCategory) {
    checkbox.checked = true;
  }
});


// End here
