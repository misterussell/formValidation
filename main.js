var submitButton = document.querySelector('.submitButton');
var form = document.getElementById('contactInfo');

// ARRAY FOR ID TYPES
// var formFields = ['firstName' , 'lastName' , 'email' , 'country' , 'bio' , 'phone' , 'affiliations' , 'occupation' , 'catName' , 'favGadget' , 'talent' , 'favDrink' , 'specialPower' , 'weapon' , 'comments'];

// ARRAY FOR CLASS
var formFields = ['.firstName' , '.lastName' , '.email' , '.country' , '.bio' , '.phone' , '.affiliations' , '.occupation' , '.catName' , '.favGadget' , '.talent' , '.favDrink' , '.specialPower' , '.weapon' , '.comments'];

// STORAGE OBJECTS
var completedForm = {};
var incompleteFields = {};

function setColor(element) {
  element.style.backgroundColor = '#86A344';
}

submitButton.addEventListener('click', function() {
  var formCompletion = true;
  for(x = 0; x < formFields.length; x++) {
    if (document.querySelector(formFields[x]).value === '') {
      incompleteFields[x] = document.querySelector(formFields[x]).name;
      formCompletion = false;
      setColor(document.querySelector(formFields[x]));
    } else {
      // completedForm[formFields[0]] = firstName.value;
      // x = x + 1;
      completedForm[formFields[x]] = document.querySelector(formFields[x]).value;
    }
  }
  if (formCompletion) {
    alert("Thank you for submitting. We will be in touch!");
    form.reset();
    console.log(completedForm);
  } else {
    console.log('You have not finished submitting information. Please fill out the fields highlighted in green.');
    // CONSOLE all values in the incomplete field
    // for (var y in incompleteFields) {
    //   console.log(incompleteFields[y]);
    // }
  }
});

// FOR COMPAIRING BY ID - This will be removed to clean code
// submitButton.addEventListener('click', function() {
//   for(x = 0; x < formFields.length; x++) {
//     if (document.getElementById(formFields[x]).value === '') {
//       alert('You have not finished submitting information.');
//       x = formFields.length + 1;
//     } else {
//       console.log("Thank you for submitting.");
//       completedForm[formFields[x]] = document.getElementById(formFields[x]).value;
//     }
//   }
//   console.log(completedForm);
// });
