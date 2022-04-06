const formSubscribe = document.getElementById('formSubscribe');

// validation  des champs

// console.dir(formSubscribe);
// console.dir(e.target);

formSubscribe.addEventListener('submit', function (event) {
  event.preventDefault()
  validateFields();
  let formIsValid = document.getElementsByClassName('error').length == 0;

  if (formIsValid) {
    // on ferme la modale et on vide les champs du formulaire
  } else {
    // on fait rien
  }
});

// function validateFields() {
//     validateFirstname();
// }

// function validateFirstname() {
//   let field = document.getElementById('first');
//   let fieldValue = field.value;

//   const regex = /[A-Z]/g;
//   let isValid = regex.test(fieldValue);

//   console.dir(field);
//   console.log(fieldValue);
//   console.log(isValid);
// }
