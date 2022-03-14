const data=document.getElementById("button");
data.addEventListener("click", function(){
  myFunc();
})
async function myFunc() {
  const respons = await fetch('https://reqres.in/api/users?page=2');

  const abc = await respons.json();
  console.log(abc);

  for (i = 0; i < abc.data.length; i++) {
    const totalData = abc.data[i];
    const emailData = totalData.email;
    const nameData = totalData.first_name;
    const user = 'user '+(i + 1);
    addRecord(user, nameData, emailData);
  }
}
function addRecord(user, nameData, emailData) {
  console.log(user);
  console.log(nameData);
  console.log(emailData);
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  td1.innerHTML = user;
  td2.innerHTML = nameData;
  td3.innerHTML = emailData;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  const tbody = document.getElementById('tbody');
  tbody.appendChild(tr);
}


