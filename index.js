// NAVBAR
function Navbar() {
  var x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// A-PROPOS
function AtoutSeen() {
  document.getElementById("test").style.display = "block";
  console.log("this works");
}

// FORM
window.onload = function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    this.contact_number.value = (Math.random() * 100000) | 0;
    emailjs.sendForm("service_6vpf5uq", "template_hd910sv", this).then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};
