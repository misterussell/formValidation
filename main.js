var submitButton = document.querySelector('.submitButton');
var formFields = ['.firstName' , '.lastName' , '.email' , '.country' , '.bio' , '.phone' , '.affiliations' , '.occupation' , '.catName' , '.favGadget' , '.talent' , '.favDrink' , '.specialPower' , '.weapon' , '.comments'];
var completedForm = {};

// var firstName = document.querySelector('.firstName');

// defines a value of the value on the html page - this is an example
// document.getElementsByClassName(formFields[0]).value = "maxwell";

// logs a value of the html form element
// console.log(document.getElementsByClassName(formFields[0]));

// defines the completed form value from the UI
// completedForm[formFields[0]] = document.getElementsByClassName(formFields[0]).value;

submitButton.addEventListener('click', function() {
  for(x = 0; x < formFields.length; x++) {
    if (document.querySelector(formFields[x]).value === '') {
      alert('You have not finished submitting information.');
      // console.log(document.querySelector(formFields[x]).value);
      x = formFields.length + 1;
    } else {
      // completedForm[formFields[0]] = firstName.value;
      // x = x + 1;
      console.log("Thank you for submitting.");
      completedForm[formFields[x]] = document.querySelector(formFields[x]).value;
      console.log(completedForm);
    }
  }
});
