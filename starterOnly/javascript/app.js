// DOM Elements
const modalSubscribe = document.getElementById('modalSubscribe');
const openSubscribe = document.querySelectorAll('.modal-btn');
const closeSubscribe = document.getElementById('closeSubscribe');
const modalSubscribeThankYou = document.getElementById('modalSubscribeThankYou');
const openSubscribeThankYou = document.getElementById('btn-register');
const closeSubscribeThankYou = document.getElementById('btnModal');



//ecouter sur le bouton submit
const formSubscribe = document.getElementById('formSubscribe');

formSubscribe.addEventListener('submit', function (event) {
  // on ne pourra pas envoyer le formulaire tant que tous les champs ne seront pas valides
  event.preventDefault();
  validateFields();
  let formIsValid = document.getElementsByClassName('fieldError').length == 0;

  // si tout le formulaire est OK , 1ere modal close et  seconde modal open !
  if (formIsValid) {
    //fermeture de la modal
    closeModal();

    //reset forlulaire
    resetFormsubcribeData();

    //ouverture de la seconde modal
    openModalThankYou();
  }
});

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


//modal thankYou  fermeture button FERMER
closeSubscribeThankYou.addEventListener("click", closeModalThankYou);

//modal message ouverte --> ajoute la class hidden pour la fermer
function closeModalThankYou() {
  if (!modalSubscribeThankYou.classList.contains('hidden')) {
    modalSubscribeThankYou.classList.add('hidden');
  }
};

function openModalThankYou() {
  if (modalSubscribeThankYou.classList.contains('hidden')) {
    modalSubscribeThankYou.classList.remove('hidden');
  }

}

//reset du formulaire
function resetFormsubcribeData() {
  formSubscribe.reset();
}
