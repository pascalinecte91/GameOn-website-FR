function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalSubscribe = document.getElementById('modalSubscribe');
const openSubscribe = document.querySelectorAll('.modal-btn');
const closeSubscribe = document.getElementById('closeSubscribe');
const modalSubscribeThankYou = document.getElementById('modalSubscribeThankYou');
const openSubscribeThankYou = document.getElementById('btn-register');
const closeSubscribeThankYou = document.getElementById('btnModal');

// ouverture avec le button de la modal
openSubscribe.forEach((btn) => btn.addEventListener('click', openModal));

//si la modal du formulaire est fermée , supprime le hidden et affiche la modal
function openModal() {
  if (modalSubscribe.classList.contains('hidden')) {
    modalSubscribe.classList.remove('hidden');
  }
}

// fermeture modal  avec la croix
closeSubscribe.addEventListener("click", closeModal);

// modal FORM  affichée (n'est pas hidden):ajoute le hidden pour qu'elle n'apparaisse plus donc CLOSE
function closeModal() {
  if (!modalSubscribe.classList.contains('hidden')) {
    modalSubscribe.classList.add('hidden')
  }
};

// ouverture modal thank you
openSubscribeThankYou.addEventListener("click", openModalThankYou);

// ouvre la modal message qui est fermée (hidden)
function openModalThankYou() {
  if (modalSubscribeThankYou.classList.contains('hidden')) {
    modalSubscribeThankYou.classList.remove('hidden');
  }
};

//modal thankYou  fermeture button FERMER
closeSubscribeThankYou.addEventListener("click", closeModalThankYou);

//modal message ouverte --> ajoute la class hidden pour la fermer
function closeModalThankYou() {
  if (!modalSubscribeThankYou.classList.contains('hidden')) {
    modalSubscribeThankYou.classList.add('hidden');
  }
};

//ecouter sur le bouton submit
const formSubscribe = document.getElementById('formSubscribe');

formSubscribe.addEventListener('submit', function (event) {
  validateFields();
  let formIsValid = document.getElementsByClassName('fieldError').length == 0;
  console.dir(formIsValid);
  //les erreurs ne s'afficheront pas si isValid
  if (formIsValid) {
    fieldError.closest('.formData').classList.remove('fieldError')
    fieldError.innerHTML = "";
  }
  //si message erreur ,  effacé si ok
  if (!modalSubscribe.classList.contains('hidden')) {
    modalSubscribeThankYou.classList.remove('hidden')
  }
  event.preventDefault()
}
);

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

// validation de tous les champs du formulaire

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

