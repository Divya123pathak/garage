

document.addEventListener('DOMContentLoaded', function() {
  let menu = document.querySelector('#menu-btn');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };

  window.onresize = () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
    }
  };


 // document.querySelector('#login-btn').onclick = () => {
    //document.querySelector('.login-form-container').classList.toggle('active');
 // };

 // document.querySelector('#close-login-form').onclick = () => {
  //  document.querySelector('.login-form-container').classList.remove('active');
 // };


  window.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }

  // var loginForm = document.querySelector('form');
// var loginBtn = document.querySelector('#login-btn button');
// var usernameInput = document.getElementById('username');
//
// loginForm.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission
//   var username = usernameInput.value; // Get the entered username
//
//   // Update the login button text
//   loginBtn.textContent = username;
//
//   // Store the username in localStorage
//   localStorage.setItem('username', username);
// });
//
// // Retrieve the username from localStorage
// var storedUsername = localStorage.getItem('username');
// if (storedUsername) {
//   loginBtn.textContent = storedUsername;
// }

  
  // Open login1.html when the Login button is pressed
  
});

