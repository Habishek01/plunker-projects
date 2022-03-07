// Add your code here
const button=document.getElementById("add");
console.log(button);
// button.addEventListener("click", function(){
//   console.log("ibfunc");
//   const node = document.createElement("li");
//   const textnode = document.createTextNode("Water");
//   console.log(node);
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);

// });


button.addEventListener('click', cfunction); 
function cfunction(){
  const node = document.createElement("li");
    let newnum= Math.floor(Math.random()*10);
    console.log(Math.random()*10);
    console.log(newnum);
  const textnode = document.createTextNode(newnum);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}