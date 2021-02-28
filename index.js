// NAVBAR
function Navbar() {
  var x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// ATOUT

//CARD
function cardOnClick() {
  document.getElementById("c1f1").style.background = "#118880";
  document.getElementById("c1f1").style.transform = "translateY(0)";
  document.getElementById("c1f2").style.transform = "translateY(0)";
}
function cardOnBlur() {
  document.getElementById("c1f1").style.background = "#333";
  document.getElementById("c1f1").style.transform = "translateY(100)";
  document.getElementById("c1f2").style.transform = "translateY(100)";
}

//   .container .card .face.face2 .content a:hover {
//     background: #333;
//     color: #fff;
//   }
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
