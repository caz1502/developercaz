// menu bar open and close
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// tool tip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// disable more than one click on contact form
var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
  setTimeout(function () {
    submitButton.value = "Sending...";
    submitButton.disabled = true;
  }, 1);
});


