import './sass/main.scss';
import fetchCrypto from './js/api/api';

const submitForm = document.querySelector('.calc__form');
const currenciesFrom = document.querySelector('#currenciesFrom');
const currenciesTo = document.querySelector('#currenciesTo');

submitForm.addEventListener('submit', onSubmitForm);

function onSubmitForm (e){
    e.preventDefault();
    fetchCrypto()
    .then(data => {
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    });
}