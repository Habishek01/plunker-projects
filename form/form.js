// Add your code here

function bfunction(event) {
    console.log(event);
    const idname = document.getElementById('inputname').value;
  
    var letters = /^[A-Za-z]+$/;
    if (idname == '') {
      nameError.innerHTML = 'enter correctly';
    } else if (!letters.test(idname)) {
      nameError.innerhtml = 'Name is incorrect must contain alphabets only';
    } else {
      alert('name is correct');
    }
  
    const idpassword = document.getElementById('inputpassword').value;
    if (idpassword.length < 12) {
      passwordError.innerHTML = 'enter 12 characters';
    } else {
      alert('password is correct');
    }
  
    return false;
  }
  