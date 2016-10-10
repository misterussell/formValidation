var submitButton = document.querySelector('.submitButton');
var formFields = ['firstName' , 'lastName' , 'email' , 'country' , 'bio' , 'phone' , 'affiliations' , 'occupation' , 'catName' , 'favGadget' , 'talent' , 'favDrink' , 'specialPower' , 'weapon' , 'comments'];
var completedForm = {};

//defines a value of the value on the html page - this is an example
document.getElementsByClassName(formFields[0]).value = "maxwell";

//logs a value of the html form element
console.log(document.getElementsByClassName(formFields[0]));

// defines the completed form value from the UI
completedForm[formFields[0]] = document.getElementsByClassName(formFields[0]).value;

submitButton.addEventListener('click', function() {

  // console.log("Hello");
  // var sendAlert = 0;
  // for(x = 0; x < formFields.length; x++) {
  //   document.getElementsByClassName(formFields[x]).value;
  // }

});

console.log(completedForm);
