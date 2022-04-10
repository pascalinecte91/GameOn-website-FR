const formSubscribe = document.getElementById('formSubscribe');

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
  validateInputEmail('email');
  validateInputBirsthdate('birthdate');
  validateInputQty('quantity');
  validateInputCheckbox();
  validateInputCondition();
}

function validateInputText(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  const regexText = /^(?=.{2,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
  let isValid = regexText.test(fieldValue);

  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  afficherErreur(fieldError, isValid);
}

function afficherErreur(fieldError, isValid) {
  if (isValid) {
    fieldError.closest('.formData').classList.remove('fieldError')
    fieldError.innerHTML = ""; // si ok : vide
  } else {
    // sinon ajout du message d'erreur
    fieldError.closest('.formData').classList.add('fieldError')
    fieldError.innerHTML = fieldError.dataset.message;
  }
}

function validateInputEmail(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let isValid = fieldValue.length > 0
    && regexEmail.test(fieldValue);
  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  afficherErreur(fieldError, isValid);
}


function validateInputQty(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  const regexNbr = /^[0-9]\d*$/;
  let isValid = fieldValue.length > 0
    && regexNbr.test(fieldValue);

  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  afficherErreur(fieldError, isValid);
}

function validateInputBirsthdate(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  const regexDate = /^(19|20)\d\d+[-/.]+[0-9]+[-/.][0-9]/;
  let isValid = regexDate.test(fieldValue);
  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  afficherErreur(fieldError, isValid);
}

function validateInputCheckbox() {
  const checkboxError = document.getElementById('checkboxError');
  const checkboxSelected = document.querySelector('[name=location]:checked');
  let isValid = null !== checkboxSelected;

  afficherErreur(checkboxError, isValid);
}


function validateInputCondition() {
  const condGeneError = document.getElementById('condGeneError');
  const condGeneSelected = document.querySelector('[name=checkbox]:checked');
  let isValid = null !== condGeneSelected;
  
  afficherErreur(condGeneError, isValid);

}


