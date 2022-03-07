// Add your code here
const change=document.getElementById("number"); 
let changenum=document.getElementById("number").innerHTML;
// console.log(changenum);

function decrease(){
  console.log(changenum);
  changenum= changenum-1;
  change.innerHTML= changenum;
} 
function reset(){
  changenum=changenum*0;
  change.innerHTML= changenum;
}
function increase(){
  changenum=changenum +1;
  change.innerHTML= changenum;
}


 




// var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };





// const content= document.querySelectorAll(".button");
// console.log(content);

// function decrease(){
//   let i;
//   i=i-1;
// }
// function reset(){
//   let j;
//   j=j*0;
// }
// function increase(){
//   let k;
//   k=k+1; 
// } 
 
