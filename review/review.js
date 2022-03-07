// Add your code here
const reviews = [
    {
      id: 1,
      name: 'krishna',
      designation: 'Developer',
      description:
        'I am a developer working for gyanmatrix for about 4 years, Worked on Front end development, Back end development etc.',
    },
    {
      id: 2,
      name: 'Sriman',
      designation: 'Business',
      description:
        'I have been working in textile field, and started my own business now.',
    },
    {
      id: 3,
      name: 'Arshad',
      designation: 'Deveoper',
      description:
        'I am a developer worked for zoho for about 3 years and now joined subscription based company in chennai as a full stack developer.',
    },
    {
      id: 4,
      name: 'Anand',
      designation: 'Merchandiser',
      description:
        'I have completed civil engineering, working as a merchandiser for about 3 years, trying to join a new company soon.',
    },
  ];
  
  const previous = document.getElementById('prevButton');
  const next = document.getElementById('nextButton');
  const surprise = document.getElementById('surpButton');
  
  const name = document.getElementById('name');
  const designation = document.getElementById('designation');
  const description = document.getElementById('description');
  
  let currentdetail = 0;
  
  window.addEventListener('DOMContentLoaded', function () {
    showPerson();
  });
  
  function showPerson() {
    const detail = reviews[currentdetail];
    name.textContent = detail.name;
    designation.textContent = detail.designation;
    description.textContent = detail.description;
  }
  previous.addEventListener('click', function () {
    currentdetail--;
    if (currentdetail < 1) {
      currentdetail = reviews.length - 1;
    }
    showPerson();
  });
  next.addEventListener('click', function () {
    currentdetail++;
    if (currentdetail > reviews.length - 1) {
      currentdetail = 0;
    }
    showPerson();
  });
  surprise.addEventListener('click', function () {
    currentdetail = Math.floor(Math.random() * reviews.length);
    showPerson();
  });
  