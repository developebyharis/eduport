// Function to display the user information in the student dashboard
function displayUserDetails(user) {
  const dashboardContainer = document.getElementById('studentDashboard');

  const studentDashboardHTML = `
  <!-- The HTML code for the student dashboard -->
  <div class="card bg-transparent card-body pb-0 px-0 mt-2 mt-sm-0">
    <!-- Your dashboard content here -->
    <div class="row d-sm-flex justify-sm-content-between mt-2 mt-md-0">
      <!-- Avatar -->
      <div class="col-auto">
        <div class="avatar avatar-xxl position-relative mt-n3">
          <img class="avatar-img rounded-circle border border-white border-3 shadow" src="${user.photoURL}" alt="">
          <span class="badge text-bg-success rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">Pro</span>
        </div>
      </div>
      <!-- Profile info -->
      <div class="col d-sm-flex justify-content-between align-items-center">
        <div>
          <h1 class="my-1 fs-4">${user.displayName}</h1>
          <ul class="list-inline mb-0">
            <li class="list-inline-item me-3 mb-1 mb-sm-0">
              <span class="h6">255</span>
              <span class="text-body fw-light">points</span>
            </li>
            <li class="list-inline-item me-3 mb-1 mb-sm-0">
              <span class="h6">7</span>
              <span class="text-body fw-light">Completed courses</span>
            </li>
            <li class="list-inline-item me-3 mb-1 mb-sm-0">
              <span class="h6">52</span>
              <span class="text-body fw-light">Completed lessons</span>
            </li>
          </ul>
        </div>
        <!-- Button -->
        <div class="mt-2 mt-sm-0">
          <a href="student-course-list.html" class="btn btn-outline-primary mb-0">View my courses</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Advanced filter responsive toggler START -->
  <!-- Divider -->
  <hr class="d-xl-none">
  <div class="col-12 col-xl-3 d-flex justify-content-between align-items-center">
    <a class="h6 mb-0 fw-bold d-xl-none" href="#">Menu</a>
    <button class="btn btn-primary d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
      <i class="fas fa-sliders-h"></i>
    </button>
  </div>
  <!-- Advanced filter responsive toggler END -->
`;

  dashboardContainer.innerHTML = studentDashboardHTML;
}

// Retrieve the user information from localStorage and display it in the student dashboard
document.addEventListener('DOMContentLoaded', () => {
  const displayName = localStorage.getItem('userDisplayName');
  const photoURL = localStorage.getItem('userPhotoURL');

  if (displayName && photoURL) {
    const user = {
      displayName: displayName,
      photoURL: photoURL
    };

    displayUserDetails(user);
  }
});




