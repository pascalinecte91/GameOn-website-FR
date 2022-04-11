const formSubscribe = document.getElementById('formSubscribe');

formSubscribe.addEventListener('submit', function (event) {
  validateFields();
  let formIsValid = document.getElementsByClassName('fieldError').length == 0;

  if (formIsValid) {
    fieldError.closest('.formData').classList.remove('fieldError')
    fieldError.innerHTML = "";

  }
  event.preventDefault()
});

//validation de tous les champs du formulaire

function validateFields() {
  validateInputText('first');
  validateInputText('last');
  validateInputEmail('email');
  validateInputBirsthdate('birthdate');
  validateInputQty('quantity');
  validateInputCheckbox('checkboxError', 'location');
  validateInputCheckbox('condGeneError', 'checkbox');
}

function validateInputText(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  const regexText = /^(?=.{2,40}$)+(?:[ -'\w]+)$/;
  let isValid = regexText.test(fieldValue);

  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  afficherErreur(fieldError, isValid);
}

// si pas d'erreur de champs trouvé, ne pas afficher le message
function afficherErreur(fieldError, isValid) {
  if (isValid) {
    fieldError.closest('.formData').classList.remove('fieldError')
    fieldError.innerHTML = "";
  } else {
    // sinon ajout du message d'erreur data-message html
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
  const regexNbr = /\d/;
  let isValid = regexNbr.test(fieldValue);

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

function validateInputCheckbox(fieldError, fieldName) {
  const checkboxError = document.getElementById(fieldError);
  const checkboxSelected = document.querySelector('[name=' + fieldName + ']:checked');
  let isValid = null !== checkboxSelected;

  afficherErreur(checkboxError, isValid);
}

