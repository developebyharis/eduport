
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
  
      heartIcon.addEventListener('click', function() {
        this.classList.toggle('fas');
        this.classList.toggle('text-danger');
  
        const currentState = this.classList.contains('fas');
        localStorage.setItem(`heartIconState-${courseId}`, currentState);
  
        // Update the displayed wishlist
        displayWishlist();
      });
    }
  }
  
  function displayWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistContainer = document.getElementById('wishlistCourses');
    wishlistContainer.innerHTML = ''; // Clear the previous wishlist content
  
    for (const course of wishlist) {
      wishlistContainer.innerHTML += `
        <div class="col-sm-6 col-lg-4 col-xl-3" data-course-id="${course.id}">
          <div class="card shadow">
            <img src="${course.courseImage}" class="card-img-top" alt="course image">
            <div class="card-body pb-0">
              <div class="d-flex justify-content-between mb-2">
                <a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
                <a href="#" class="text-danger heart-icon">
                  <i class="fas fa-heart"></i>
                </a>
              </div>
              <h5 class="card-title fw-normal">
                <a href="#">${course.courseTitle}</a>
              </h5>
              <p class="mb-2 text-truncate-2">${course.courseDescription}</p>
              <ul class="list-inline mb-0">
                <li class="list-inline-item me-0 small">
                  <i class="fas fa-star text-warning"></i>
                </li>
                <!-- ... Add more star elements here ... -->
                <li class="list-inline-item ms-2 h6 fw-light mb-0">${generateRatingStars(course.courseRating)}</li>
              </ul>
            </div>
            <div class="card-footer pt-0 pb-3">
              <hr>
              <div class="d-flex justify-content-between">
                <span class="h6 fw-light mb-0">
                  <i class="far fa-clock text-danger me-2"></i>
                  ${course.courseTotalHours + "h"} ${course.courseTotalMin + "m"}
                </span>
                <span class="h6 fw-light mb-0">
                  <i class="fas fa-table text-orange me-2"></i>
                  ${course.courseTotalLectures} lectures
                </span>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Call the updateHeartIconState to update the heart icon states
    updateHeartIconState();
  }
  
  // Call the displayWishlist function on the Wishlist page
  document.addEventListener("DOMContentLoaded", function() {
    displayWishlist();
  });






  / // Initialize cart count from local storage or default to 0
var cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
var cartCountElement = document.getElementById("cartCount");
cartCountElement.textContent = cartCount;

// Add the course to the cart
function addToCart(courseId) {
  var course = courses.find(function(course) {
    return course.id === courseId;
  });

  if (course) {
    // Perform the necessary actions to add the course to the cart
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(course);
    localStorage.setItem("cart", JSON.stringify(cart));

    cartCount++;
    cartCountElement.textContent = cartCount;
    localStorage.setItem("cartCount", cartCount); 

    // Update the cart display
    var cartList = document.getElementById("cart-list");
    var cartItemHTML = `
      <div class="row p-3 g-2 cart-item" data-course-id="${course.id}">
        <div class="col-3">
          <img class="rounded-2 product-image" src="${course.courseImage}" alt="avatar">
        </div>
        <div class="col-9">
          <div class="d-flex justify-content-between">
            <h6 class="m-0">${course.courseTitle}</h6>
            <a class="remove-btn small text-primary-hover" onclick="removeFromCart(event, '${course.id}')"><i class="bi bi-x-lg"></i></a>
          </div>
          <div>
            <h4 class="text-success pt-2 fs-5 mb-0 item-show">${"$" + course.courseCurrentPrice}</h4>
          </div>
        </div>
      </div>
    `;
    cartList.insertAdjacentHTML("beforeend", cartItemHTML);
  }
}

// Retrieve cart items from localStorage and display them in the cart-list div
var cart = JSON.parse(localStorage.getItem("cart")) || [];
var cartList = document.getElementById("cart-list");

function displayCartItems() {
  // Clear the existing cart items
  cartList.innerHTML = "";

  // Iterate over the cart items and generate HTML for each item
  cart.forEach(function(course) {
    var cartItemHTML = `
      <div class="row p-3 g-2 cart-item" data-course-id="${course.id}">
        <div class="col-3">
          <img class="rounded-2 product-image" src="${course.courseImage}" alt="avatar">
        </div>
        <div class="col-9">
          <div class="d-flex justify-content-between">
            <h6 class="m-0">${course.courseTitle}</h6>
            <a class="remove-btn small text-primary-hover" onclick="removeFromCart(event, '${course.id}')"><i class="bi bi-x-lg"></i></a>
          </div>
          <div>
            <h4 class="text-success pt-2 fs-5 mb-0 item-show">${"$" + course.courseCurrentPrice}</h4>
          </div>
        </div>
      </div>
    `;
    cartList.insertAdjacentHTML("beforeend", cartItemHTML);
  });
}

// Initial display of cart items
displayCartItems();

// Remove the course from the cart
function removeFromCart(event, courseId) {
  event.preventDefault();

  // Remove the course from the cart array
  var updatedCart = cart.filter(function(course) {
    return course.id !== courseId;
  });

  // Update the cart in local storage
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  // Update the cart count
  cartCount = updatedCart.length;
  cartCountElement.textContent = cartCount;

  // Remove the cart item from the display
  var cartItem = event.target.closest(".cart-item");
  cartItem.remove();

  // Update the cart variable with the updated cart
  cart = updatedCart;
};