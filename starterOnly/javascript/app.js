const formSubscribe = document.getElementById('formSubscribe');

// validation  des champs

// console.dir(formSubscribe);

// console.dir(e.target);

formSubscribe.addEventListener('submit', function (event) {
  event.preventDefault()
  validateFields();
  let formIsValid = document.getElementsByClassName('fieldError').length == 0;

  if (formIsValid) {
    // on ferme la modale et on vide les champs du formulaire
  } else {
    // on fait rien
  }
});

function validateFields() {
  validateInputText('first');
  validateInputText('last');
}

// validation champs
function validateInputText(fieldId) {
  const field = document.getElementById(fieldId);

  const fieldValue = field.value.trim();
  const regex = /[a-zA-Z]/g;
  let isValid = fieldValue.length > 1
    && regex.test(fieldValue);
    
  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  afficherErreur(fieldError, isValid);
}

function afficherErreur(fieldError, isValid) {
  if (isValid) {
    fieldError.closest('.formData').classList.remove('fieldError')
    fieldError.innerHTML = "";
  } else {
    fieldError.closest('.formData').classList.add('fieldError')
    fieldError.innerHTML = "error";
  }
}
