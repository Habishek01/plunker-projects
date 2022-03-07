// Add your code here
function openFunction() {
  var x = document.getElementById("navBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}
