// Add your code here
const closebutton= document.getElementById("icon");
const hamburger= document.getElementById("hamburger");
const sidebar= document.querySelector(".sidebar");

hamburger.addEventListener('click', function(){
if(sidebar.classList.contains('show-sidebar')){
      sidebar.classList.remove('show-sidebar');
  }else{
      sidebar.classList.add('show-sidebar');
  }});
closebutton.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar');
}); 
 