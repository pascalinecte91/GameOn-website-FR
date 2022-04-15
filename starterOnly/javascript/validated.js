// si pas d'erreur de champs trouvé, ne pas afficher le message
function displayError(fieldError, isValid) {
  if (isValid) {
    fieldError.closest('.formData').classList.remove('fieldError')
    fieldError.innerHTML = "";
  } else {
    // sinon ajout du message d'erreur data-message html
    fieldError.closest('.formData').classList.add('fieldError')
    // fait obtenir le contenu de l element avec un ID
    fieldError.innerHTML = fieldError.dataset.message;
  }
}

// validation de tous les champs du formulaire

// equivaut à tous caracteres alphanum \w
//tous caracteres numeriques de 0 à 9 \d
function validateFields() {
  validateInputText('first', /^[a-z]+$/i);
  validateInputText('last', /^[a-z]+$/i);
  validateInputEmail('email', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  validateInputBirthdate('birthdate', /^(19|20)\d\d+[-/.]+[0-9]+[-/.][0-9]/);
  validateInputQty('quantity', /\d/);
  validateInputCheckbox('checkboxError', 'location');
  validateInputCheckbox('condGeneError', 'checkbox');
}

function validateInputText(fieldId, regexText) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  let isValid = regexText.test(fieldValue);
  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  displayError(fieldError, isValid);
}

function validateInputEmail(fieldId, regexEmail) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  let isValid = regexEmail.test(fieldValue);

  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  displayError(fieldError, isValid);
}

function validateInputQty(fieldId, regexNbr) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  let isValid = regexNbr.test(fieldValue);

  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  displayError(fieldError, isValid);
}

function validateInputBirthdate(fieldId, regexDate) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  let isValid = regexDate.test(fieldValue);

  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  displayError(fieldError, isValid);
}

function validateInputCheckbox(fieldError, fieldName) {
  const checkboxError = document.getElementById(fieldError);
  const checkboxSelected = document.querySelector('[name=' + fieldName + ']:checked');
  let isValid = null !== checkboxSelected;

  displayError(checkboxError, isValid);
}


