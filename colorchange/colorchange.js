// Add your code here
const colors = ['green', 'red', 'blue', 'purple', 'grey'];
var color = document.getElementById('color');

const colbut = document.getElementById('header');
function colorchange() {
  const randomnumber = getrandomnumber();
  document.body.style.backgroundColor = colors[randomnumber];
  color.textContent = colors[randomnumber];
  console.log(color.textContent);
}
function getrandomnumber() {
  return Math.floor(Math.random() * colors.length);
}
