var submitButton = document.querySelector('.submitButton');
var form = document.getElementById('contactInfo');

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
      completedForm[formFields[x]] = document.querySelector(formFields[x]).value;
    }
  }
  if (formCompletion) {
    alert("Thank you for submitting. We will be in touch!");
    form.reset();
    console.log(completedForm);
  } else {
    console.log('You have not finished submitting information. Please fill out the fields highlighted in green.');
  }
});
