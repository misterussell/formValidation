// BUTTON TARGETER
var submitButton = document.querySelector('.submitButton');
// ARRAY FOR ID TYPES
// var formFields = ['firstName' , 'lastName' , 'email' , 'country' , 'bio' , 'phone' , 'affiliations' , 'occupation' , 'catName' , 'favGadget' , 'talent' , 'favDrink' , 'specialPower' , 'weapon' , 'comments'];
// STORAGE OBJECT
var completedForm = {};
// ARRAY FOR CLASS
var formFields = ['.firstName' , '.lastName' , '.email' , '.country' , '.bio' , '.phone' , '.affiliations' , '.occupation' , '.catName' , '.favGadget' , '.talent' , '.favDrink' , '.specialPower' , '.weapon' , '.comments'];


// FOR ID
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

submitButton.addEventListener('click', function() {
  for(x = 0; x < formFields.length; x++) {
    if (document.querySelector(formFields[x]).value === '') {
      alert('You have not finished submitting information.');
      // console.log(document.querySelector(formFields[x]).value);
      x = formFields.length + 1;
    } else {
      // completedForm[formFields[0]] = firstName.value;
      // x = x + 1;
      completedForm[formFields[x]] = document.querySelector(formFields[x]).value;
    }
  }
  console.log("Thank you for submitting.");
  console.log(completedForm);
});
