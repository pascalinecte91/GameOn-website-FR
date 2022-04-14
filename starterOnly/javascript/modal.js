function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**********************************************************************/

//ecouter sur le bouton submit
const formSubscribe = document.getElementById('formSubscribe');

formSubscribe.addEventListener('submit', function (event) {
  // on ne pourra pas envoyer le formulaire tant que tous les champs ne seront pas valides
  event.preventDefault();
  validateFields();
  let formIsValid = document.getElementsByClassName('fieldError').length == 0;

  // si tout le formulaire est OK , 1ere modal close et  seconde modal open !
  if (formIsValid) {
    (!modalSubscribe.classList.contains('hidden'))
    modalSubscribeThankYou.classList.remove('hidden')
    modalSubscribe.classList.add('hidden')
  }
});


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

function validateFields() {
  validateInputText('first');
  validateInputText('last');
  validateInputEmail('email');
  validateInputBirthdate('birthdate');
  validateInputQty('quantity');
  validateInputCheckbox('checkboxError', 'location');
  validateInputCheckbox('condGeneError', 'checkbox');
}

function validateInputText(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  const regexText = /^[a-z]+$/i;
  let isValid = regexText.test(fieldValue);

  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  displayError(fieldError, isValid);
}

function validateInputEmail(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  //\w equivaut à tous caracteres alphanum 
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let isValid = fieldValue.length > 0
    && regexEmail.test(fieldValue);
  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  displayError(fieldError, isValid);
}

function validateInputQty(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  //tous caracteres numeriques de 0 à 9 \d
  const regexNbr = /\d/;
  let isValid = regexNbr.test(fieldValue);

  const fieldErrorId = fieldId + 'Error';
  const fieldError = document.getElementById(fieldErrorId);

  displayError(fieldError, isValid);
}

function validateInputBirthdate(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldValue = field.value.trim();
  const regexDate = /^(19|20)\d\d+[-/.]+[0-9]+[-/.][0-9]/;
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

// function submitFormsubscribe() {
//   document.getElementsById("formSubscribe").reset();
// }