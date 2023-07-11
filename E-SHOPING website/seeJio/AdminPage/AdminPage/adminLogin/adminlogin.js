/*
let userName = document.getElementById("username");
let Password = document.getElementById("password");
let myForm = document.getElementById("registrationForm");

let authenticatioToken;
baseServerURL = "https://reqres.in/api/register";
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = userName.value;
  let password = Password.value;
  // fetch("https://dummyjson.com/users/1", {
  //   method: "PATCH",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     username: "admin ",
  //     password: "admin",
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((d) => console.log(d));
  loginUser();
});

function loginUser() {
  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "pistol",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      authenticatioToken = data.token;

      console.log(authenticatioToken);
      window.location.pathname = "/seeJio/AdminPage/AdminPage/dashboard.html";
    });
}*/

// Get the viewport width
function getViewportWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  }
  
  // Update the input box label position
  function updateLabelPosition(input) {
    const label = input.nextElementSibling;
    if (input.value !== '') {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  }
  
  // Handle window resize event
  function handleWindowResize() {
    const viewportWidth = getViewportWidth();
    const inputs = document.querySelectorAll('.inputbox input');
  
    if (viewportWidth < 768) {
      // For smaller screens, update label position on focus/blur
      inputs.forEach((input) => {
        input.addEventListener('focus', function () {
          this.parentNode.classList.add('active');
        });
  
        input.addEventListener('blur', function () {
          if (this.value === '') {
            this.parentNode.classList.remove('active');
          }
        });
      });
    } else {
      // For larger screens, update label position based on input value
      inputs.forEach((input) => {
        input.addEventListener('input', function () {
          updateLabelPosition(this);
        });
        updateLabelPosition(input);
      });
    }
  }
  
  // Initialize the responsive behavior
  function initResponsive() {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
  }
  
  // Call the initialization function
  initResponsive();
  